# CLAUDE.md

このファイルは Claude Code がこのリポジトリで作業する際のガイドです。
推測ではなく、現在のコードを優先して判断してください。

---

## プロジェクト概要

**swgoh4jp.com** は Star Wars: Galaxy of Heroes（SWGoH）の日本語プレイヤー向け情報・ユーティリティサイトです。

- **本番 URL**: https://swgoh4jp.com（Vercel）
- **主目的**: 日本語の検索流入を増やし、キャラ・艦船 DB と初心者向けガイドで回遊を作る
- **差別化**: swgoh.gg 相当の DB を日本語で提供し、TW カウンター・AI 育成アドバイザー・MDX ガイドを追加
- **現フェーズ**: SEO / オーガニック検索流入の拡大。SNS 運用は前提にしない

### 技術スタック

- **Framework**: Next.js 15.5.x App Router
- **React**: 19.0.1（`react` / `react-dom` は同一バージョン固定）
- **Language**: TypeScript（`strict: true`）
- **Package manager**: Bun（`packageManager: bun@1.1.34`）
- **Styling**: Tailwind CSS + shadcn/ui 系コンポーネント
- **DB**: PostgreSQL + Prisma 6
- **Auth**: Auth.js (`next-auth` v5 beta) + Prisma Adapter
- **AI**: Vercel AI SDK 6 + Google Gemini / Anthropic
- **Content**: MDX（`@next/mdx` + `gray-matter`）

---

## 作業時の基本方針

- パッケージ操作・実行コマンドは原則 `bun` を使う。README の `npm` 手順は古い。
- `.env*` は読まない。必要な環境変数名だけ参照・追記する。
- `src/data/.generated/*.json` は生成物だがコミット対象。手編集より `bun run sync:units` を優先する。
- `src/lib/swgoh/comlink/fetchGameData.ts` と `fetchLocalization.ts` は **BUILD-TIME ONLY**。`src/app/**` から import しない。
- Prisma を直接読むページは static 化しない。`/TWCounters` は `dynamic = "force-dynamic"` を維持する。
- 既存の URL・canonical・sitemap を壊す変更は SEO 影響が大きいので慎重に扱う。
- 不要な大規模リファクタは避け、依頼範囲に対して最小の差分にする。

---

## 主要コマンド

```bash
bun run dev          # Next dev server（Turbopack）
bun run build        # production build
bun run generate     # prisma generate && next build
bun run start        # built app 起動
bun run test         # Jest
bun run lint         # next lint（Next 15 系では挙動注意）
bun run sync:units   # Comlink → src/data/.generated/*.json 生成
bun run sync:units -- --dry-run
```

### データ同期

```bash
# ローカル Comlink を使う場合
COMLINK_URL=http://localhost:5001 bun run sync:units
```

`sync:units` は `/data segment 0` の大きなデータを扱うため、`package.json` で `--max-old-space-size=4096` を付けている。

---

## 環境変数

```env
DATABASE_URL=                         # Prisma / PostgreSQL
COMLINK_URL=                          # Comlink backend。未設定時は http://localhost:5001 想定
REDIS_URL=                            # advice API の rate limit 用
AUTH_SECRET=                          # Auth.js cookie / session 暗号化用
AUTH_GITHUB_ID=                       # GitHub OAuth（任意）
AUTH_GITHUB_SECRET=                   # GitHub OAuth（任意）
AUTH_GOOGLE_ID=                       # Google OAuth（任意）
AUTH_GOOGLE_SECRET=                   # Google OAuth（任意）
GOOGLE_GENERATIVE_AI_API_KEY=         # Google Gemini
ANTHROPIC_API_KEY=                    # Anthropic を使う場合
DEEPL_API_KEY=                        # 既存の翻訳系用途
NEXT_PUBLIC_SUPABASE_URL=             # 既存機能由来。現行主要機能では中心ではない
NEXT_PUBLIC_SUPABASE_ANON_KEY=        # 同上
```

---

## ルーティング概要

### 公開ページ

| Route | 実装 | 備考 |
|---|---|---|
| `/` | `src/app/page.tsx` | Server Component。主要導線・更新情報・最新ガイドを表示 |
| `/characters` | `src/app/characters/page.tsx` + client child | 生成 JSON を読み込み、`is_event_variant !== true` のキャラのみ渡す |
| `/characters/[characterId]` | SSG | `units.json` の `url` slug を使用。`UnitDetail` で表示 |
| `/ships` | `src/app/ships/page.tsx` + client child | 現状は `ships.json` 全件を渡す。詳細・sitemap は event variant を除外 |
| `/ships/[shipId]` | SSG | `base_id.toLowerCase()` を slug として使用 |
| `/guides` | `src/app/guides/page.tsx` | `content/guides/*.mdx` の一覧 |
| `/guides/[slug]` | SSG + dynamic MDX import | frontmatter から metadata 生成 |
| `/advisor` | Client page | アライコード → モード → 目的 → チャット |
| `/login` | Server + client child | Auth.js OAuth login。robots noindex |
| `/TWCounters` | Server Component | Prisma 参照。`dynamic = "force-dynamic"` 必須 |
| `/TWCounters/forms` | Server guard + client child | ログイン済みユーザー全員がアクセス可能なカウンター登録フォーム |
| `/TWCounters/login` | Redirect | 旧導線。`/login?callbackUrl=/TWCounters/forms` へ転送 |
| `/about` | Static page | サイト紹介 |
| `/privacy-policy` | Static page | Vercel Analytics / 将来の広告 Cookie 文言あり |

### API

| Route | 役割 |
|---|---|
| `GET /api/characters` | 公開キャラ JSON。event variant は除外 |
| `GET /api/counters` | Prisma `counter` 一覧 |
| `POST /api/counters` | Prisma `counter` 登録。ログイン必須 |
| `GET/POST /api/auth/[...nextauth]` | Auth.js handlers |
| `GET /api/advice/player?allycode=...` | Comlink からプレイヤーデータ取得・整形 |
| `POST /api/advice/chat` | Comlink データ + AI SDK でチャット応答 |
| `GET /api/swgohgg/characters` | swgoh.gg proxy。現行主導線では未使用 |
| `GET /api/swgohgg/abilities` | swgoh.gg proxy。現行主導線では未使用 |

### SEO ルート

- `src/app/sitemap.ts`
  - 静的ページ
  - `/guides` と各 guide
  - event variant を除外した character / ship 詳細
- `src/app/robots.ts`
  - `/api/` を disallow
  - `/sitemap.xml` を指定
- `src/app/layout.tsx`
  - root metadata / OGP / Twitter / robots / Google verification
  - WebSite + Organization JSON-LD
  - Vercel Analytics / Speed Insights

---

## ディレクトリ構成

```text
content/guides/
  *.mdx                         # 攻略ガイド記事。frontmatter 必須
docs/
  seo-improvement-plan-*.md      # SEO 計画
  strategy-2026-05-06.md         # オーガニック検索前提の成長戦略
  user-research-2026-05-05.md    # ユーザー調査
  data-sync/unknown-tags.md      # sync 時の未知タグレポート
scripts/
  sync-units.ts                  # Comlink → generated JSON
  extract-aliases.ts             # alias 抽出補助
src/app/
  characters/                    # キャラ一覧・詳細
  ships/                         # 艦船一覧・詳細
  guides/                        # MDX ガイド一覧・詳細
  advisor/                       # AI 育成アドバイザー
  TWCounters/                    # TW カウンター
  api/                           # JSON / AI / Prisma API
  layout.tsx                     # root metadata / JSON-LD / Analytics
  sitemap.ts                     # sitemap.xml
  robots.ts                      # robots.txt
src/components/
  elements/BBCodeText.tsx        # Comlink BBCode renderer
  layouts/header/Header.tsx      # global header
  layouts/footer/Footer.tsx      # global footer
  unit-detail/UnitDetail.tsx     # キャラ・艦船共通詳細
  ui/                            # shadcn/ui 系
src/data/
  aliases.ts                     # 手書き alias / slug 補正。sync で上書きしない
  .generated/
    units.json                   # キャラ
    abilities.json               # キャラスキル
    ships.json                   # 艦船
    ship_abilities.json          # 艦船スキル
src/features/
  characterlist/constants/       # キャラフィルタ定数
  shiplist/                      # 艦船フィルタ
  mainpages/constant/            # トップページ更新情報など
src/hooks/
  useUrlFilterState.ts           # URL query とフィルタ state の同期
src/lib/
  guides.ts                      # MDX frontmatter 読み込み
  rateLimit.ts                   # Redis rate limit
  auth/guards.ts                 # server-only auth / role guard
  prisma/prismaClient.ts         # Prisma singleton
  swgoh/
    advisor/                     # AI prompt / client / providers
    comlink/                     # Comlink client / formatters / build-time fetchers
    data/                        # RotE data
    sync/                        # sync-units 用 helper
```

---

## データモデルと生成 JSON

現行生成物の目安:

- `units.json`: 約 434 件（event variant 約 78）
- `ships.json`: 約 75 件（event variant 約 3）
- `abilities.json`: 約 434 件
- `ship_abilities.json`: 約 75 件

### `sync-units.ts` の責務

- Comlink metadata / game data / JPN localization を取得
- `combatType=1` をキャラ、`combatType=2` を艦船として抽出
- `obtainable === true` かつ `rarity === maxRarity` でユニーク化
- `ALIASES` を使ってキャラの略称・URL を補正
- Comlink BBCode raw text を `description_jp` に保持
- `docs/data-sync/unknown-tags.md` に未知タグを書き出す

### event variant

`_EVENT`, `_RAID`, `_SPEEDERBIKERAID`, `_TB`, `_TW`, `_CONQUEST`, `_INHERIT`, `_NOULT`, `_STANDARD`, `_RECRUIT`, `_GLE_`, `_GLF_` などは `is_event_variant: true` になる。

- キャラ一覧・キャラ詳細・sitemap は event variant を除外
- 艦船詳細・sitemap は event variant を除外
- 艦船一覧は現コード上 `shipsRaw as Ship[]` をそのまま渡している

### BBCode

- `description_jp` は Comlink の JPN locale に含まれる BBCode raw text を保存する
- 表示は `src/components/elements/BBCodeText.tsx` が担当
- 旧式の `*$#+` 独自マーカーに戻さない
- name 系の文字列は sync 時に BBCode を除去して SEO / OGP 向けにプレーン化する

---

## 主要機能の実装メモ

### キャラクター図鑑

- `src/app/characters/page.tsx` は Server Component で generated JSON を読み込む
- `CharactersListClient` が検索・フィルタ UI を担当
- URL query:
  - `q`
  - `properties`
  - `skills`
- フィルタは regex を使わず、normalize + `includes` で ReDoS を避ける
- 詳細ページは `generateStaticParams` と `generateMetadata` を持つ

### 艦隊図鑑

- `src/app/ships/page.tsx` は Server Component
- `ShipsListClient` が検索・フィルタ UI を担当
- URL query:
  - `q`
  - `factions`
  - `roles`
- 詳細ページは `base_id.toLowerCase()` を slug とする
- 詳細では `crew_base_ids` からキャラ詳細への内部リンクを作る

### ガイド記事

- 記事は `content/guides/*.mdx`
- frontmatter:

```yaml
---
title: "..."
description: "..."
date: "YYYY-MM-DD"
tags: ["..."]
---
```

- `src/lib/guides.ts` が filesystem + `gray-matter` で一覧・frontmatter を読む
- `/guides/[slug]` は `generateStaticParams` と動的 MDX import を使う
- sitemap は guide の `date` を `lastModified` に使う

### AI 育成アドバイザー

フロー:

```text
/advisor
  → GET /api/advice/player?allycode=...
  → POST /api/advice/chat
      → fetchPlayerData(COMLINK_URL)
      → formatPlayer / getUnitsAboveMinRelic(player, 5)
      → buildSystemPrompt
      → continueChat（AI SDK）
```

- rate limit は `src/lib/rateLimit.ts`
  - Redis 必須（`REDIS_URL`）
  - IP ごとに 5 requests / 24h
  - `X-RateLimit-*` と `Retry-After` を返す
- AI provider は `src/lib/swgoh/advisor/providers.ts`
  - `DEFAULT_PROVIDER = "google"`
  - Google default: `gemini-3.1-flash-lite-preview`
  - Anthropic default: `claude-sonnet-4-20250514`
- UI 上の RotE purpose は 5 種類あるが、`/api/advice/chat` は現在 `guild_rewards` だけを許可し、それ以外は `guild_rewards` にフォールバックする
- `userNote` state は UI に存在するが、現行 API body / prompt には実質渡っていない

#### 今後の実装予定（アドバイザー）

- **ログイン必須化**: `/advisor` へのアクセスを `requireAuth` で保護する
- **会話履歴の保存**: Prisma に `ChatSession` / `ChatMessage` モデルを追加し、ユーザーごとの会話を DB 保存する
- **履歴閲覧 UI**: `/advisor/history` または `/advisor/[sessionId]` で過去の会話を閲覧できるようにする
- データ設計の要点:
  - `ChatSession`: `userId`, `allycode`, `purpose`, `createdAt`
  - `ChatMessage`: `sessionId`, `role` (`user` / `assistant`), `content`, `createdAt`
  - ユーザーは自分の会話のみ参照可（Row-level isolation は `where: { userId }` で実装）

### TW カウンター

- DB model は `counter`
- `/TWCounters` は Prisma を直接読むため `export const dynamic = "force-dynamic"`
- `/api/counters` は GET / POST を持つ。POST はログイン必須（role 不問）
- `/TWCounters/forms` は server page で `requireAuth("/TWCounters/forms")` してから client form を描画
- 未ログイン → `/login?callbackUrl=/TWCounters/forms` にリダイレクト。ログイン後フォームへ戻る
- 認証方針の詳細は `docs/auth-implementation-plan-2026-05-08.md`

### 認証

- Auth.js 設定は `src/auth.ts`
- Auth.js route handler は `src/app/api/auth/[...nextauth]/route.ts`
- Prisma Adapter で `User` / `Account` / `Session` / `VerificationToken` を NeonDB に保存する
- `User.role` は `USER` / `ADMIN`
- server-only guard は `src/lib/auth/guards.ts`
- Middleware / Proxy は認可の唯一の防御線にしない。Route Handler / Server Component / Server Action のデータ操作直前で guard する
- 初期実装は OAuth のみ。Credentials provider はパスワードハッシュ・リセット・rate limit の責務が増えるため未導入

---

## Prisma スキーマ

```prisma
model TWForm {
  id        String   @id @default(cuid())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  title     String
}

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

Auth.js 用に `UserRole`, `User`, `Account`, `Session`, `VerificationToken` も定義している。

---

## SEO / 成長戦略メモ

現行方針は `docs/strategy-2026-05-06.md` を優先する。

- ターゲットは初心者〜中級者の日本語検索流入
- SNS アカウント運用なし。検索 → ガイド記事 → キャラ/艦船詳細 → 回遊を狙う
- `/guides/[slug]` は実装済み。初回記事として `swgoh-mod-guide-2026.mdx` が存在する
- 次に効果が高い候補:
  - SWGoH ステータス・用語辞典
  - GAC チーム編成入門（GL なし層向け）
  - バフ・デバフ完全一覧
  - 初心者が最初に育てるべきキャラ
- favicon / ロゴ / OGP 画像の刷新は未完了
- per-page 動的 OGP と日本語フォント埋め込みは未完了

### OGP / font 注意

`Noto_Sans_JP` に `subsets: ["japanese"]` は指定しない。Next の font data では未定義でビルドエラーになる。現行は `subsets: ["latin"]`, `preload: false`。

---

## 既知の注意点

- `README.md` は古い記述が混ざっている。作業時は `CLAUDE.md` と現コードを優先する。
- `src/app/ships/page.tsx` は event variant を除外していない。意図と違う可能性があるため、関連作業時に確認する。
- `src/app/advisor/page.tsx` の purpose UI と `/api/advice/chat` の許可 purpose に差がある。
- `/TWCounters/login` は `/login?callbackUrl=/TWCounters/forms` へのリダイレクト route として実装済み。
- `next.config.mjs` は `/character/:baseId*` → `/characters/:baseId*` の 301 redirect を持つ。
- `src/app/api/swgohgg/*` は現行主導線では未使用。削除するなら参照確認してから行う。
- Turbopack / `.next` キャッシュ起因の不整合が疑われる場合は、ユーザー確認のうえ `.next` 削除を検討する。
