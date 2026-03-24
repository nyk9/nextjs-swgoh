# CLAUDE.md

このファイルは Claude Code がこのリポジトリで作業する際のガイドです。

---

## プロジェクト概要

**Star Wars: Galaxy of Heroes (SWGoH)** プレイヤー向けの情報・ユーティリティサイト。
キャラクター情報、TW カウンター、AI 育成アドバイスなどを提供する。

- **URL（本番）**: Vercel にデプロイ
- **フレームワーク**: Next.js 15.4.8 (App Router) + React 19.0.1
- **DB**: PostgreSQL (Neon) + Prisma 6
- **パッケージマネージャー**: Bun

---

## コマンド

```bash
bun run dev          # 開発サーバー起動（Turbopack）
bun run build        # ビルド
bun run generate     # prisma generate && next build
bun run test         # Jest テスト
```

> **注意**: ビルド前に `.next` キャッシュが古い場合は `rm -rf .next` してから実行する。

---

## ディレクトリ構成

```
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
│       ├── swgohgg/                # swgoh.gg データ取得 API
│       └── advice/
│           ├── player/             # GET ?allycode=xxx → プレイヤーデータ
│           └── chat/               # POST → AI チャット
└── lib/
    ├── prisma/prismaClient.ts      # Prisma シングルトン
    └── swgoh/                      # SWGoH コアロジック
        ├── comlink/                # Comlink HTTP クライアント・型・整形
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

## 注意事項

- `TWCounters/page.tsx` は `export const dynamic = "force-dynamic"` が必要（Prisma を使うため）
- `react` と `react-dom` は同じバージョンに固定すること（`^` を使わない）
- Turbopack 使用中は `.next` キャッシュが壊れることがある → `rm -rf .next` で解消
- `src/lib/swgoh/` のコードは `swgoh-comlink` リポジトリの `packages/core` からコピーしたもの
