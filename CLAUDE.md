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
- [x] `src/app/sitemap.ts`（/sitemap.xml 自動生成、静的7件 + 276キャラ）
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
- [x] Phase 2: 旧 `/character/:id*` → 新 `/characters/:id*` の 301 リダイレクト（next.config.js）
- [ ] Phase 2: `/`, `/characters`, `/ships` を server shell + client child に分離して SSR 強化
- [ ] Phase 3: MDX ガイド記事でロングテール獲得（`/guides/[slug]`）
- [ ] OGP 画像の日本語表示（Noto Sans JP の OTF/TTF を埋め込み、現在は Latin のみ）

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
│   ├── page.tsx                    # ホームページ（ナビゲーションカード一覧）
│   ├── about/                      # About ページ
│   ├── characters/                 # キャラクター一覧・詳細
│   ├── TWCounters/                 # TW カウンター（Prisma DB 参照）
│   ├── advisor/                    # AI 育成アドバイザー（チャット UI）
│   └── api/
│       ├── characters/             # キャラクターデータ API
│       ├── characterAbilities/     # アビリティデータ API
│       ├── counters/               # カウンターデータ API
│       ├── swgohgg/                # swgoh.gg データ取得 API（未使用、削除予定）
│       └── advice/
│           ├── player/             # GET ?allycode=xxx → プレイヤーデータ
│           └── chat/               # POST → AI チャット
├── components/elements/
│   └── BBCodeText.tsx              # BBCode → JSX レンダラ（[b][c][COLOR][\n] 対応）
├── data/
│   ├── aliases.ts                  # 手書き abbreviation / url_slug（sync で上書きされない）
│   └── .generated/                 # sync-units.ts が生成（コミット対象）
│       ├── units.json              # キャラ 430 件（is_event_variant フラグ付き）
│       ├── ships.json              # 艦船 75 件
│       └── abilities.json          # アビリティ 430 件（スキル計 1,807）
└── lib/
    ├── prisma/prismaClient.ts      # Prisma シングルトン
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

- `_EVENT` / `_INHERIT` / `_RAID` / `_GLE_` 等のサフィックスを持つバリアント 78 件に `is_event_variant: true` を付与
- ページ側で `is_event_variant !== true` でフィルタして通常キャラのみ表示する

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
