# CLAUDE.md

このファイルは Claude Code がこのリポジトリで作業する際のガイドです。

---

## プロジェクト概要

**Star Wars: Galaxy of Heroes (SWGoH)** の日本語プレイヤー向け情報・ユーティリティサイト。
**ベンチマーク: [swgoh.gg](https://swgoh.gg/)（月間 580 万 PV）の日本語版** という位置付け。
キャラクター情報、TW カウンター、AI 育成アドバイスなどを提供する。

- **URL（本番）**: [swgoh4jp.com](https://swgoh4jp.com) (Vercel)
- **フレームワーク**: Next.js 15.4.8 (App Router) + React 19.0.1
- **DB**: PostgreSQL (Neon) + Prisma 6
- **パッケージマネージャー**: Bun

---

## 直近の最優先課題: SEO 整備（PV 増加）

**現状**: 月間 約 60 PV（2026年4月時点）
**目標**: Vercel Pro（$20/月）の収益化要件を満たすPV数へ

Vercel の利用規約上、**Pro プラン（$20/月）に加入するまで収益化禁止**。
まず PV を増やすことが最優先。

### Analytics 現状
- 流入元: Google 検索 50%以上 / Direct ほか
- 地域: 日本 50%以上
- デバイス: Windows 50%以上（デスクトップ中心）

### SEO 基礎工事（Phase 1 完了 @ 2026-04-23）
- [x] `src/app/sitemap.ts`（/sitemap.xml 自動生成、静的7件 + キャラ詳細 + 艦船詳細）
- [x] `src/app/robots.ts`（/api/* を Disallow、Sitemap 指定）
- [x] 全ページに `metadata`（title / description / OGP / canonical）
  - `"use client"` ページは `layout.tsx` に metadata を定義（characters / ships / advisor / TWCounters）
  - 非 client ページは `page.tsx` に `export const metadata`（about / privacy-policy）
  - 動的ルートは `generateMetadata`（characters/[characterId]）
- [x] JSON-LD 構造化データ（WebSite + Organization を root layout、BreadcrumbList をキャラ詳細）
- [x] OGP 画像 1200×630（`src/app/opengraph-image.tsx` で `ImageResponse` による動的生成）

### SEO 次の一手
- [x] Google Search Console verification 設定（`layout.tsx` の `verification.google`）→ プロパティ登録は GSC 上で別途実施
- [x] Phase 0: 旧 `/character/[baseId]/page.tsx` を削除（`/characters/[characterId]` に統合済み）
- [x] Phase 0: `/api/page.tsx`（typo）を削除
- [x] Phase 0: AI API レート制限（`src/lib/rateLimit.ts`、Vercel Redis、IP あたり 5 req / 24h）
- [x] Phase 2: 旧 `/character/:id*` → 新 `/characters/:id*` の 301 リダイレクト（next.config.js）
- [x] Phase 2: `/`, `/characters`, `/ships` を server shell + client child に分離して SSR 強化（2026-05-03 完了）
  - 一覧 2 ページは `?q=` / `?factions=`,`?roles=` / `?properties=`,`?skills=` の URL クエリ駆動。シェア可能・リロード復元可
  - 共通基盤: `src/hooks/useUrlFilterState.ts`（`useUrlString` / `useUrlList` / `useUrlReset`）
  - 既存の未エスケープ regex（`serchFilter.ts` の ReDoS）は `normalize+includes` への置換で根本除去
- [x] Phase 2: `/ships/[shipId]` 詳細ページ新規実装（2026-05-03 完了、+72 URL）
  - `src/components/unit-detail/UnitDetail.tsx` をキャラ・艦船共通の Server Component として新設、旧 `characterSkills.tsx` は削除
  - `sync-units.ts` を拡張し `Ship` に `description_jp` / `crew_base_ids` / `url` / `is_event_variant` を、新規 `ship_abilities.json` を出力
  - `ShipCard` を `<Link>` で詳細ページに接続、sitemap に shipRoutes を追加
  - 詳細ページで乗員 → キャラ詳細への内部リンクを生成（艦船 → キャラの片方向のみ）
- [ ] Phase 3: MDX ガイド記事でロングテール獲得（`/guides/[slug]`）
- [ ] OGP 画像の日本語表示（Noto Sans JP の OTF/TTF を埋め込み、現在は Latin のみ）※ per-page 動的 OGP 実装時に対応
- [x] Privacy policy に AdSense Cookie 文言追加（Phase 4 申請前まで）→ 既に対応済み（`src/app/privacy-policy/page.tsx:79-111`）
- [ ] favicon・サイトロゴ・アイコン画像の刷新（現状は Next.js デフォルト favicon）— 生成 AI プロンプトを先に設計する

### SSR 化メモ（2026-05-03）
- 一覧ページは Suspense でラップして `useSearchParams()` を使用 → 静的事前レンダリング（○ Static）が維持される
- 初期 HTML には全件（is_event_variant 除外後の通常キャラ・艦船すべて）が含まれる。クエリ付きアクセスでは hydration 後にクライアント側でフィルタ適用（軽い flicker は SEO 優先のトレードオフとして許容）
- canonical は `/characters` / `/ships`（クエリ無し）に固定。フィルタ URL は重複インデックス防止のため Google には集約される設計

> **メモ**: `Noto_Sans_JP` の `subsets` を `"japanese"` に変更するタスクは取り下げ。next/font/google の font-data.json では Noto Sans JP に `cyrillic / latin / latin-ext / vietnamese` しか定義されておらず、`"japanese"` を渡すとビルドエラーになる。日本語グリフは `unicode-range` 経由で動的に読み込まれるため `subsets: ["latin"]` + `preload: false` で問題なし。

詳細計画は `docs/seo-improvement-plan-2026-04-20.md` 参照。

---

## 競合分析

### メイン競合: swgoh.gg

| 項目 | swgoh.gg | swgoh4jp.com |
|------|----------|--------------|
| 月間PV | 約 580 万（Semrush Dec 2024） | 約 60（2026年4月） |
| 言語 | 英語 | **日本語**（差別化ポイント） |
| キャラクター DB | ✅ | ✅ |
| 艦船 DB | ✅ | ✅ |
| プレイヤープロフィール | ✅（要登録） | ❌（Comlink API は実装済み） |
| ギルドページ | ✅ | ❌ |
| Meta レポート | ✅ | ❌ |
| TW カウンター | ❌ | ✅ |
| AI 育成アドバイザー | ❌ | ✅（独自機能） |
| 収益モデル | Patreon $3/月（広告非表示・自動同期等） | 未実装 |

### 収益化ロードマップ（PV 達成後）
1. **月 1,000 PV** → Patreon / Ko-fi でサポーター募集
2. **月 5,000 PV** → Vercel Pro 加入 + 広告（AdSense）検討
3. **月 10,000 PV** → プレミアムプラン（swgoh.gg モデル参考: $3/月）

---

## コマンド

```bash
bun run dev          # 開発サーバー起動（Turbopack）
bun run build        # ビルド
bun run generate     # prisma generate && next build
bun run test         # Jest テスト
bun run sync:units   # Comlink → src/data/.generated/*.json を生成（Comlink 起動必須）
```

> **注意**: ビルド前に `.next` キャッシュが古い場合は `rm -rf .next` してから実行する。

---

## ディレクトリ構成

```
scripts/
└── sync-units.ts               # Comlink → .generated/*.json 生成（bun run sync:units）
src/
├── app/
│   ├── page.tsx                    # ホームページ（server component）
│   ├── about/                      # About ページ
│   ├── characters/                 # キャラクター一覧・詳細
│   │   ├── page.tsx                # server component（is_event_variant 除外して全件渡す）
│   │   ├── _components/
│   │   │   └── CharactersListClient.tsx  # URL クエリ駆動フィルタ UI
│   │   └── [characterId]/page.tsx  # SSG（generateStaticParams + UnitDetail 利用）
│   ├── ships/                      # 艦船一覧・詳細
│   │   ├── page.tsx                # server component
│   │   ├── _components/
│   │   │   └── ShipsListClient.tsx # URL クエリ駆動フィルタ UI、ShipCard を Link 化
│   │   └── [shipId]/page.tsx       # SSG（base_id 小文字 slug、UnitDetail + 乗員リンク）
│   ├── TWCounters/                 # TW カウンター（Prisma DB 参照、force-dynamic）
│   ├── advisor/                    # AI 育成アドバイザー（チャット UI）
│   └── api/
│       ├── characters/             # キャラクターデータ API
│       ├── characterAbilities/     # アビリティデータ API
│       ├── counters/               # カウンターデータ API
│       ├── swgohgg/                # swgoh.gg データ取得 API（未使用、削除予定）
│       └── advice/
│           ├── player/             # GET ?allycode=xxx → プレイヤーデータ（rate limited）
│           └── chat/               # POST → AI チャット（rate limited）
├── components/
│   ├── elements/
│   │   └── BBCodeText.tsx          # BBCode → JSX レンダラ（[b][c][COLOR][\n] 対応）
│   └── unit-detail/
│       └── UnitDetail.tsx          # キャラ・艦船共通の詳細描画 Server Component
├── data/
│   ├── aliases.ts                  # 手書き abbreviation / url_slug（キャラ用、sync で上書きされない）
│   └── .generated/                 # sync-units.ts が生成（コミット対象）
│       ├── units.json              # キャラ（is_event_variant フラグ付き）
│       ├── ships.json              # 艦船（is_event_variant フラグ付き、url は base_id 小文字）
│       ├── abilities.json          # キャラスキル
│       └── ship_abilities.json     # 艦船スキル（base_id をキー）
├── features/
│   └── shiplist/
│       ├── filterShips.ts          # 純粋なフィルタ関数（normalize+includes）
│       └── constants/              # SHIP_FACTIONS / SHIP_ROLES 等
├── hooks/
│   └── useUrlFilterState.ts        # searchParams ↔ state の双方向同期 hook
└── lib/
    ├── prisma/prismaClient.ts      # Prisma シングルトン
    ├── rateLimit.ts                # Vercel Redis ベースの IP 制限（advice 系で使用）
    └── swgoh/                      # SWGoH コアロジック
        ├── comlink/                # Comlink HTTP クライアント・型・整形
        │   ├── client.ts           # /player /guild（アドバイザー用、変更禁止）
        │   ├── fetchGameData.ts    # /metadata + /data segment 0（BUILD-TIME ONLY）
        │   └── fetchLocalization.ts # /localization → Loc_JPN_JP.txt（BUILD-TIME ONLY）
        ├── sync/                   # sync-units.ts 用ヘルパー群
        │   ├── parseLocalization.ts
        │   ├── categoryMapping.ts
        │   ├── abilityTypeMapping.ts
        │   ├── extractCustomTags.ts
        │   └── unknownTagsLogger.ts
        ├── advisor/                # AI アドバイス（client / prompt / providers）
        └── data/                   # RotE プラトゥーン・SM データ（JSON）
```

---

## DB スキーマ（Prisma）

```prisma
model TWForm {
  id, createdAt, updatedAt, title
}

model counter {
  id, createdAt, updatedAt,
  allied_leader, allied_characters,
  enemy_leader, enemy_characters,
  description?
}
```

---

## アドバイザー機能（`/advisor`）

### アーキテクチャ

```
ブラウザ (/advisor)
  → GET  /api/advice/player?allycode=xxx   # Comlink からプレイヤーデータ取得
  → POST /api/advice/chat                  # Gemini AI でアドバイス生成
        ├── src/lib/swgoh/comlink/         # Comlink API クライアント
        ├── src/lib/swgoh/advisor/         # AI プロンプト・プロバイダー
        └── src/lib/swgoh/data/            # RotE TB データ（JSON）
```

### 必要な環境変数

```
# .env.local
COMLINK_URL=https://your-comlink.koyeb.app   # Koyeb にデプロイ済みの Comlink
GOOGLE_GENERATIVE_AI_API_KEY=...             # Google Gemini API キー
# ANTHROPIC_API_KEY=...                      # Anthropic 使用時（任意）
```

### AI プロバイダー

- デフォルト: Google Gemini（`providers.ts` の `DEFAULT_PROVIDER = "google"`）
- モデル: `gemini-3.1-flash-lite-preview`（`PROVIDER_DEFAULT_MODELS.google` で変更可）
- Anthropic Claude に切り替える場合は `DEFAULT_PROVIDER = "anthropic"` に変更

### 対応モード

| モード | 目的オプション |
|--------|--------------|
| RotE TB | platoon / combat_mission / special_mission / guild_rewards / guild_strategy |
| TW | （固定） |
| GAC | （固定） |

---

## 環境変数（全体）

```
DATABASE_URL=                        # Neon PostgreSQL（pooled）
DATABASE_URL_UNPOOLED=               # Neon PostgreSQL（unpooled）
COMLINK_URL=                         # Koyeb Comlink バックエンド
GOOGLE_GENERATIVE_AI_API_KEY=        # Gemini API
DEEPL_API_KEY=                       # DeepL 翻訳（既存機能）
NEXT_PUBLIC_SUPABASE_URL=            # Supabase（既存機能）
NEXT_PUBLIC_SUPABASE_ANON_KEY=       # Supabase（既存機能）
```

---

## キャラ自動同期（Comlink → JSON）

Comlink API からゲームデータを取得して `src/data/.generated/*.json` を生成するパイプライン。
GitHub Actions 週次 PR（Step 5 未実装）または手動で実行する。

### 実行方法

```bash
# Comlink Docker を localhost:5001 で起動してから実行
COMLINK_URL=http://localhost:5001 bun run sync:units

# .env.local に COMLINK_URL=Koyeb URL が設定されていると Koyeb に当たるため明示上書きが必要
```

### BBCode 方針

- `description_jp` は Comlink JPN locale の **BBCode raw text** をそのまま保存
- 表示は `src/components/elements/BBCodeText.tsx` が担当
- `name_jp` 等の name 系は sync 時に BBCode を除去してプレーンテキスト化（SEO・OGP 向け）

### is_event_variant フラグ

- `_EVENT` / `_INHERIT` / `_RAID` / `_GLE_` 等のサフィックスを持つバリアントに `is_event_variant: true` を付与（キャラ・艦船とも適用）
- 一覧ページ・sitemap・`generateStaticParams` で `is_event_variant !== true` フィルタを掛けて通常キャラ／艦船のみ公開する

### 既知の制約

- `is_omega` は Comlink から取れないため、スキルが存在すれば `true` とする保守的実装
- `name_eng` は ENG locale 未取得のため `nameKey` から機械生成（暫定）
- リーダー effect 由来の `付与スキル` は effectGraph 解析なしには取れない

---

## 注意事項

- `TWCounters/page.tsx` は `export const dynamic = "force-dynamic"` が必要（Prisma を使うため）
- `react` と `react-dom` は同じバージョンに固定すること（`^` を使わない）
- Turbopack 使用中は `.next` キャッシュが壊れることがある → `rm -rf .next` で解消
- `src/lib/swgoh/` のコードは `swgoh-comlink` リポジトリの `packages/core` からコピーしたもの
- `src/lib/swgoh/comlink/fetchGameData.ts` と `fetchLocalization.ts` は **BUILD-TIME ONLY**。`src/app/**` からは絶対に import しないこと（329MB / 260MB のダウンロードが発生する）
