---
title: "セキュリティ脆弱性診断レポート"
date: "2026-05-09"
audit_target_branch: "feature/monetization"
audit_base_commit: "7734048"
status: "draft"
---

# セキュリティ脆弱性診断レポート (2026-05-09)

## 0. 概要

`feature/monetization` ブランチ（HEAD: `7734048 chore: revert accidental package-lock changes`）のコードを精査し、確認できた脆弱性を **12 件** 抽出した。
ハルシネーションを避けるため、各項目は具体的なファイル・行番号・該当コードを示す。

スコープ:

- `src/app/**` (App Router 配下のページ・API)
- `src/lib/**` (Auth ガード、Prisma クライアント、Comlink クライアント、レート制限)
- `src/components/**` (UI 共通コンポーネント、BBCode レンダラ)
- `src/auth.ts` / `prisma/schema.prisma` / `next.config.mjs`

スコープ外:

- `node_modules` 内パッケージの既知 CVE（`bun audit` が未実装のため、別途 npm/pnpm/yarn で監査推奨）
- `scripts/sync-units.ts` 等のビルドタイムスクリプト（攻撃者がアクセスできない経路）

---

## 1. 重大度サマリ

| # | 重大度 | 概要 | 場所 |
|---|--------|------|------|
| 1 | High | `X-Forwarded-For` 偽装によるレート制限バイパス | `src/lib/rateLimit.ts:34-43` |
| 2 | High | `/api/counters` POST: 入力検証なし | `src/app/api/counters/route.ts:14-30` |
| 3 | High | `/api/counters` POST: レート制限なし | `src/app/api/counters/route.ts` |
| 4 | Medium | `/api/advice/chat`: `history` のランタイム検証なし | `src/app/api/advice/chat/route.ts:14-18, 39, 85-88` |
| 5 | Medium | `/api/advice/chat`: `message` 長と body サイズ上限なし | `src/app/api/advice/chat/route.ts:39` |
| 6 | Medium | `/api/advice/*` が未認証で AI コスト課金 DoS | `src/app/api/advice/*` |
| 7 | Medium | Redis 接続失敗時の Promise グローバル状態リーク | `src/lib/rateLimit.ts:26-31` |
| 8 | Medium | セキュリティヘッダ未設定（CSP 等） | `next.config.mjs` |
| 9 | Medium | `counter` モデルに `userId` がなく投稿者を追跡できない | `prisma/schema.prisma:69-78` |
| 10 | Low | `dangerouslySetInnerHTML` への JSON.stringify で `<` 未エスケープ | `src/app/layout.tsx:97-100` 他 |
| 11 | Low | 未使用の swgoh.gg プロキシ API + エラーハンドリング欠落 | `src/app/api/swgohgg/*` |
| 12 | Low | `next-auth` が production-beta バージョン | `package.json:42` |

---

## 2. 各項目の詳細

### 1. レート制限の IP 偽装によるバイパス [High]

**場所**: `src/lib/rateLimit.ts:34-43`

```ts
function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();   // ← 最左を信用
    if (first) return first;
  }
  const real = request.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}
```

**問題**:

`X-Forwarded-For` の **最左値** をクライアント IP として採用しているが、このヘッダはクライアントが自由に設定できる。Vercel は実 IP を **末尾に追加** するため、攻撃者が `X-Forwarded-For: 1.2.3.4` を毎回違う値で送れば、Redis キー (`rl:advice:<ip>`) が毎回別になり、5 req/24h の制限が事実上無効化される。

**影響**:

- `/api/advice/chat` と `/api/advice/player` のレート制限が完全にバイパス
- AI API（Google Gemini / Anthropic）の課金 DoS
- Comlink バックエンドへの過剰アクセス

**修正案**:

- Vercel 上では `request.headers.get("x-vercel-forwarded-for")` を使う（Vercel が信頼できる値で上書きする）
- または `X-Forwarded-For` の **末尾から N 個目**（信頼できるプロキシのホップ数）を取る
- `X-Real-IP` も同様に偽装可能なため、信頼できるソース順に評価する

**参考**:

- [Bypassing rate limiting with X-Forwarded-For header (Mastodon)](https://github.com/mastodon/mastodon/security/advisories/GHSA-c2r5-cfqr-c553)
- [Vercel Request headers documentation](https://vercel.com/docs/headers/request-headers)

---

### 2. `/api/counters` POST: 入力検証なし [High]

**場所**: `src/app/api/counters/route.ts:14-30`

```ts
const {
  allied_leader, allied_characters,
  enemy_leader, enemy_characters,
  description,
} = await request.json();

const counter = await prisma.counter.create({
  data: {
    allied_leader, allied_characters,
    enemy_leader, enemy_characters,
    description,
  },
});
```

**問題**:

- 文字列長の上限なし → 数 MB の文字列を 1 リクエストで保存可能（DB ストレージ DoS）
- 型チェックなし → 数値・配列・オブジェクトを渡せば Prisma が `ValidationError` を投げ 500 を返すのみ
- 必須フィールドの存在チェックなし
- `description` (`String?`) も実質無制限
- **Stored XSS は React 側のエスケープで防がれているため別の脆弱性ではない**が、入力検証層がないこと自体が重大

**影響**:

- DB 容量を埋める攻撃（特に項目 3 の「レート制限なし」と組み合わせると深刻）
- 想定外の型を送って 500 を誘発

**修正案**:

依存に既に入っている `zod` でスキーマ検証する。

```ts
import { z } from "zod";

const CounterSchema = z.object({
  allied_leader: z.string().trim().min(1).max(100),
  allied_characters: z.string().trim().max(500),
  enemy_leader: z.string().trim().min(1).max(100),
  enemy_characters: z.string().trim().max(500),
  description: z.string().max(2000).optional(),
});

const parsed = CounterSchema.safeParse(await request.json());
if (!parsed.success) {
  return NextResponse.json(
    { success: false, error: "入力が不正です", issues: parsed.error.issues },
    { status: 400 },
  );
}
```

---

### 3. `/api/counters` POST: レート制限なし [High]

**場所**: `src/app/api/counters/route.ts`

**問題**:

`/api/advice/*` には Redis ベースのレート制限があるが、状態変更系の `/api/counters` POST には **一切のレート制限が無い**。ログインさえすれば無制限に投稿可能。

**影響**:

項目 2（入力検証なし）と組み合わせると、認証済みユーザー 1 人で DB 容量を急速に埋められる。

**修正案**:

- `src/lib/rateLimit.ts` のロジックをユーザーキー版で再利用する（IP ではなく `userId` をキーに）
- 例: 1 ユーザーあたり 30 req/h など

---

### 4. `/api/advice/chat`: `history` のランタイム検証なし [Medium]

**場所**: `src/app/api/advice/chat/route.ts:14-18, 39, 85-88`

```ts
interface ChatRequestBody {
  ...
  history?: ChatMessage[];   // ← 型注釈のみ。ランタイム検証なし
}
const { allycode, mode, purpose, message, history = [] } = body;
const fullHistory: ChatMessage[] = [
  ...history,
  { role: "user", content: message },
];
```

**問題**:

- TypeScript の型注釈は実行時には消える。`history` の `role` と `content` を実行時に検証していない
- 攻撃者が「過去にアシスタントがこう答えた」と捏造した履歴を渡してモデル応答を誘導可能（**間接的プロンプトインジェクション**）
- 一部 AI SDK では `role: "system"` を渡すとシステムプロンプトを上書きできる可能性
- 配列長の上限もないため、10 万メッセージを送って AI のトークン課金 DoS も可能

**影響**:

- AI 応答の信頼性が損なわれる
- AI API の課金 DoS

**修正案**:

```ts
const ChatRequestSchema = z.object({
  allycode: z.string().regex(/^\d{9}$/),
  mode: z.enum(["rote", "tw", "gac"]),
  purpose: z.string().optional(),
  message: z.string().trim().min(1).max(2000),
  history: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string().max(8000),
    })
  ).max(50).optional().default([]),
});
```

---

### 5. `/api/advice/chat`: `message` 長と body サイズ上限なし [Medium]

**場所**: `src/app/api/advice/chat/route.ts:39`

**問題**:

`message` も検証なしで AI に渡される。`maxOutputTokens: 2048` (`src/lib/swgoh/advisor/client.ts:19`) はあるが、**入力側の制限なし**。長大な文字列を渡されると AI 課金が大きくなる。

**影響**:

- 単発リクエストでの AI コスト DoS

**修正案**:

項目 4 のスキーマで `message: z.string().max(2000)` を強制。
さらに Next.js のデフォルト body 上限（4.5MB）に依存せず、独自に文字数で弾く。

---

### 6. `/api/advice/*` が未認証 + AI コスト課金 [Medium]

**場所**:

- `src/app/api/advice/chat/route.ts`
- `src/app/api/advice/player/route.ts`

**問題**:

両エンドポイントとも `requireAuth` を呼んでおらず、誰でもアクセス可能。Google/Anthropic API の課金が走るため、項目 1 のレート制限バイパスと組み合わせると AI 費用が一方的に消費される。

**影響**:

- AI API の課金 DoS（実害は projects' Google/Anthropic 利用枠に直結）

**現状**:

CLAUDE.md には「`/advisor` のログイン必須化」が **今後の実装予定** として記載されている。

**修正案**:

- 短期: `/api/advice/*` のルートハンドラ先頭で `requireAuth()` を呼ぶ
- 中期: `userId` ベースのレート制限へ移行（IP ベースは項目 1 の通り偽装可能）

---

### 7. Redis 接続失敗時の Promise グローバル状態リーク [Medium]

**場所**: `src/lib/rateLimit.ts:26-31`

```ts
global.__rateLimitConnect = client.connect().then(() => {
  global.__rateLimitRedis = client;
  global.__rateLimitConnect = undefined;
  return client;
});
return global.__rateLimitConnect;
```

**問題**:

- `client.connect()` が reject した場合、`.then` には `.catch` が付いていない
- `global.__rateLimitConnect` に rejected promise が貼り付いたまま残る
- 以降の全リクエストはその rejected promise を返すだけで、リトライも発生しない
- セキュリティ的には fail-closed（制限が効かない方向ではない）なので影響は限定的

**影響**:

- Redis が一瞬切れるだけで `/api/advice/*` が永続 500 を返し続ける（信頼性問題）

**修正案**:

```ts
global.__rateLimitConnect = client
  .connect()
  .then(() => {
    global.__rateLimitRedis = client;
    global.__rateLimitConnect = undefined;
    return client;
  })
  .catch((err) => {
    global.__rateLimitConnect = undefined;   // ← 次回リトライできるようリセット
    throw err;
  });
```

---

### 8. セキュリティヘッダ未設定 [Medium]

**場所**: `next.config.mjs`

**問題**:

`Content-Security-Policy`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` のいずれも設定されていない。Vercel のデフォルトで `X-Content-Type-Options: nosniff` と `Strict-Transport-Security` は付くが、**CSP がない** ため、項目 10（JSON-LD の defense-in-depth ギャップ）の防御層が一切ない。

**影響**:

- クリックジャッキング（`X-Frame-Options` / `frame-ancestors` 不在）
- 万一 XSS が発生した場合の被害拡大（CSP 不在）
- リファラ漏洩

**修正案**:

```js
// next.config.mjs
async headers() {
  return [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        // CSP は段階導入推奨（インライン script の一部を nonce 化する必要がある）
      ],
    },
  ];
}
```

---

### 9. `counter` モデルに `userId` がなく投稿者を追跡できない [Medium]

**場所**:

- `prisma/schema.prisma:69-78`
- `src/app/api/counters/route.ts:22-30`

```prisma
model counter {
  id                String   @id @default(cuid())
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  allied_leader     String
  allied_characters String
  enemy_leader      String
  enemy_characters  String
  description       String?
}
```

**問題**:

ログイン必須にしているのに `userId` カラムが無く、**誰が投稿したか追跡できない**。

**影響**:

- 荒らし対応の削除や個別ユーザーのモデレーションが不可能
- ユーザー単位のレート制限ができない（項目 3 とも関連）
- 監査証跡が残らない

**修正案**:

```prisma
model counter {
  id                String   @id @default(cuid())
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  userId            String
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  allied_leader     String
  allied_characters String
  enemy_leader      String
  enemy_characters  String
  description       String?

  @@index([userId])
}
```

POST ハンドラ:

```ts
const user = await getCurrentUser();
if (!user) return NextResponse.json({ ... }, { status: 401 });

await prisma.counter.create({
  data: { ...parsed.data, userId: user.id },
});
```

---

### 10. `dangerouslySetInnerHTML` + `JSON.stringify` で `<` 未エスケープ [Low]

**場所**:

- `src/app/layout.tsx:97-100`
- `src/app/characters/[characterId]/page.tsx:169-172`
- `src/app/ships/[shipId]/page.tsx:167-170`

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
/>
```

**問題**:

`JSON.stringify` は `<` や `</` をエスケープしない。`breadcrumb.itemListElement[2].name` には `character.name` (Comlink ゲームデータ由来) が入る。データ内に `</script>` が含まれると script タグから脱出可能。

**現状の悪用可能性**:

Comlink のゲームデータが信頼できる前提のため**現時点ではすぐに悪用できる経路はない**。ただし defense-in-depth としては不十分で、データソースが将来変わったときに XSS の可能性が残る。

**修正案**:

```ts
function safeJsonLd(obj: unknown): string {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/ /g, "\\u2028")
    .replace(/ /g, "\\u2029");
}
```

---

### 11. 未使用の swgoh.gg プロキシ API + エラーハンドリング欠落 [Low]

**場所**:

- `src/app/api/swgohgg/abilities/route.ts`
- `src/app/api/swgohgg/characters/route.ts`

```ts
export async function GET() {
  const response = await fetch("https://swgoh.gg/api/abilities/", {
    next: { revalidate: 36000 },
  });
  const data: abilitiesList[] = await response.json();
  return Response.json(data);
}
```

**問題**:

- CLAUDE.md に「現行主導線では未使用」と明記されている
- レスポンスが non-200 や非 JSON だと `response.json()` が throw して 500 になる
- 攻撃面を不要に拡げている

**影響**:

- 実害は薄いが、メンテナンス対象として残り続ける
- swgoh.gg 側の応答変動でユーザー向けに 500 が返る

**修正案**:

- 使っていないなら削除
- 残すなら `response.ok` を確認し、非 JSON 応答時のフォールバックを実装

---

### 12. `next-auth` が production-beta バージョン [Low]

**場所**: `package.json:42`

```json
"next-auth": "^5.0.0-beta.31"
```

**問題**:

- Auth.js v5 は本記事執筆時点で beta
- `^5.0.0-beta.31` は SemVer 上 `5.0.0-beta.32`, `5.0.0-beta.33` 等にも自動更新される
- beta の破壊的変更や未修正の問題が混入するリスクがある

**現実**:

Next.js 15 と組み合わせる以上 v5 自体は不可避だが、**バージョン固定** で破壊的変更を制御するべき。

**修正案**:

```json
"next-auth": "5.0.0-beta.31"
```

`^` を外して固定し、アップデート時は CHANGELOG を確認して手動でバージョン番号を上げる。

---

## 3. 確認した上で「脆弱性ではない」と判断した項目

混乱を避けるため、調査中に検証して **問題なしと結論づけた** ものを記録する。

| 項目 | 結論 | 根拠 |
|------|------|------|
| `getGuide(slug)` の path traversal | 安全 | `getAllGuideSlugs().includes(slug)` で先にホワイトリスト検証 |
| `/login` の `callbackUrl` Open Redirect | 安全 | `startsWith("/") && !startsWith("//")` で適切に検証 (`src/app/login/page.tsx:21-24`) |
| BBCodeText の XSS | 安全 | React で要素として描画。`dangerouslySetInnerHTML` 不使用 |
| Comlink クライアントの SSRF | 安全 | `COMLINK_URL` は環境変数のみ。ユーザー入力で URL を組み立てない |
| Prisma SQL injection | 安全 | Prisma クエリは parameterized |
| Auth.js の `allowDangerousEmailAccountLinking` | 安全 | 未設定（デフォルト false） |
| `unoptimized={true}` の `<Image>` `src` | 安全 | データソースが生成 JSON のパスのみ。ユーザー入力はない |
| `SameSite=Lax` cookie + `/api/counters` POST CSRF | 安全 | Auth.js のデフォルト Lax で cross-origin POST は防御済み |
| `formatPlayer` の Comlink プレイヤー名挿入 | 安全 | プレイヤー名は他人が変更不可 → 自身に対するインジェクションのみ |

---

## 4. 修正の推奨優先順位

効果が大きい順:

1. **項目 1 + 6**: IP 偽装バイパス + 未認証 → AI 課金被害に直結。最優先で対処すべき
2. **項目 2 + 3 + 9**: `/api/counters` の検証・レート制限・`userId` 追加（一括対応推奨）
3. **項目 4 + 5**: `/api/advice/chat` の入力検証
4. **項目 7**: Redis fail-state の修正（信頼性向上）
5. **項目 8 + 10**: defense-in-depth (CSP, JSON-LD エスケープ)
6. **項目 11 + 12**: クリーンアップ系

---

## 5. 補足: 監査スコープ外の推奨アクション

- **依存パッケージの CVE 監査**: 本リポジトリは `bun` を使っているが Bun には現時点で `audit` サブコマンドがない。`npm audit --omit=dev` を別途 npm/pnpm で走らせる、もしくは Snyk / Dependabot を有効化することを推奨
- **`@ionic/core@7.7.1`, `@ionic/react@7.7.1`** が依存に入っているが UI 上で使われている形跡が薄い。未使用なら削除して攻撃面を縮小
- **GitHub Secret Scanning** の有効化（`.env`, `.env.local`, `.env.development.local` がリポジトリ root に存在するため、誤コミット時の漏洩防止）

---

## 6. 参考資料

- [Bypassing rate limiting with X-Forwarded-For header (Mastodon advisory)](https://github.com/mastodon/mastodon/security/advisories/GHSA-c2r5-cfqr-c553)
- [The Great Rate Limit Escape: An X-Forwarded-For Exploit Story](https://medium.com/@InfoSecTube/the-great-rate-limit-escape-an-x-forwarded-for-exploit-story-709eb2331aae)
- [Vercel Request headers documentation](https://vercel.com/docs/headers/request-headers)
- [OWASP API Security Top 10](https://owasp.org/API-Security/editions/2023/en/0x11-t10/)
- [Next.js: Securing API Routes](https://vercel.com/academy/nextjs-foundations/security-review-apis-and-config)
