# 認証機能 実装方針メモ（2026-05-08）

## 結論

本プロジェクトでは、Auth.js + Prisma Adapter + NeonDB を使って認証基盤を実装する。
ただし、SEO が主目的の公開サイトであるため、全ページをログイン必須にはしない。
ログイン状態はサイト全体で扱えるようにしつつ、実際に保護する対象は「書き込み・管理・ユーザー固有データ」に限定する。

初期実装は OAuth（Google / GitHub）を優先し、メール + パスワードの Credentials provider は後回しにする。

## 採用構成

- 認証ライブラリ: Auth.js（`next-auth` v5 系）
- DB adapter: `@auth/prisma-adapter`
- DB: 既存の Neon PostgreSQL（`DATABASE_URL`）
- ORM: 既存 Prisma Client
- session: Prisma Adapter による database session を基本とする
- role: `User.role` に `USER` / `ADMIN` を持たせる

## なぜ Supabase Auth ではないか

現行プロジェクトは Prisma + NeonDB を使っている。
Supabase 関連の環境変数は残っているが、主要な DB 実装は `src/lib/prisma/prismaClient.ts` と `prisma/schema.prisma` に寄っている。
ここで Supabase Auth を追加すると、認証ユーザー情報とアプリ DB の責務が分かれ、運用・権限管理が複雑になる。

Auth.js は公式に Prisma Adapter と Neon Adapter を提供しているため、既存 Prisma 経由で NeonDB にユーザー・アカウント・セッションを保存する方が自然。

## セキュリティ上の重要方針

### Middleware / Proxy を唯一の防御線にしない

Next.js には Middleware 認可バイパス `CVE-2025-29927` があった。
`x-middleware-subrequest` という内部ヘッダーにより、Middleware を迂回できるケースがあり、Next.js 15 では `15.2.3` で修正された。
本プロジェクトの `next@15.5.15` は修正版より新しいため既知 CVE 自体は対象外。

ただし、Vercel のポストモーテムは「Middleware をルート保護の唯一の方法にすることは推奨しない」と明記している。
Next.js 公式ガイドも、Proxy/Middleware は optimistic check として有用だが、主要なセキュリティチェックはデータソースに近い場所で行うべきとしている。

したがって、`middleware.ts` は使うとしても UX 改善（早期リダイレクト）に限定し、認可の本丸にはしない。

### Route Handler / Server Action / Server Component で必ず確認する

Next.js 公式ガイドは Route Handler と Server Action を public-facing API endpoint と同じ扱いにし、そこでユーザー認証・role 検証を行うべきとしている。

本プロジェクトでは以下を必須にする。

- 書き込み系 Route Handler は handler 内で `requireRole("ADMIN")` などを呼ぶ
- 管理ページ / 書き込みページは page component 側でも `requireRole("ADMIN")` を呼ぶ
- UI の表示・非表示だけで認可したつもりにならない
- Header や layout の表示は UX 用であり、権限境界にはしない

### DAL / server-only helper に集約する

認証・認可ロジックを各所に散らすと漏れが起きる。
`src/lib/auth/guards.ts` のような server-only helper を用意し、以下を中央集約する。

- `getCurrentUser()`
- `requireAuth()`
- `requireRole(role)`

これにより、Route Handler / Server Component / Server Action から同じ認可ロジックを使える。

### Credentials provider は初期実装から外す

Auth.js の Credentials provider はメール + パスワード認証を実装できるが、公式ドキュメント上も以下はアプリ側の責務になる。

- パスワードハッシュ
- パスワードリセット
- brute force 対策 / rate limit
- メール検証
- 登録フローの悪用対策

このプロジェクトの初期要件は「投稿・管理機能の保護」であり、一般ユーザー向けのメールパスワード認証を急ぐ必要はない。
まず Google / GitHub OAuth で安全寄りに始める。

## 公開 / 保護の境界

### 公開のままにする

SEO 流入を阻害しないため、以下はログイン不要。

- `/`
- `/characters`
- `/characters/[characterId]`
- `/ships`
- `/ships/[shipId]`
- `/guides`
- `/guides/[slug]`
- `/about`
- `/privacy-policy`
- `GET /api/characters`
- `GET /api/counters`

### 初期実装で保護する

- `/TWCounters/forms`
- `POST /api/counters`

`/TWCounters/forms` は管理者のみ投稿可能にする。
`POST /api/counters` は UI 経由で隠すだけでなく、API handler 内で `ADMIN` role を必ず検証する。

### 将来保護対象になり得るもの

- `/admin/**`
- ガイド記事管理 UI
- TW カウンター編集 / 削除
- advisor 履歴保存
- ユーザー個別プロフィール / 設定

## role 運用

初期登録ユーザーは OAuth で `USER` として作られる。
管理者昇格は DB で `User.role = ADMIN` に変更する。

自動で特定メールを ADMIN にする仕組みは便利だが、メールアドレス allowlist の管理・漏洩時のリスクがあるため初期実装では避ける。
必要になったら `ADMIN_EMAILS` を使う方式を追加検討する。

## 実装予定ファイル

- `prisma/schema.prisma`
  - Auth.js 用 `User`, `Account`, `Session`, `VerificationToken`, `UserRole` を追加
- `prisma/migrations/*_add_auth_models/migration.sql`
  - NeonDB 用 migration
- `auth.ts`
  - NextAuth 設定、PrismaAdapter、OAuth providers、callbacks
- `src/app/api/auth/[...nextauth]/route.ts`
  - Auth.js route handlers
- `src/types/next-auth.d.ts`
  - `Session.user.id` / `Session.user.role` の型拡張
- `src/lib/auth/guards.ts`
  - server-only の認証・認可 helper
- `src/app/login/page.tsx`
  - ログインページ
- `src/app/login/LoginForm.tsx`
  - OAuth sign-in UI
- `src/components/layouts/header/Header.tsx`
  - ログイン状態表示 / ログアウト導線
- `src/app/TWCounters/forms/page.tsx`
  - `ADMIN` guard を追加するため Server Component wrapper 化
- `src/app/api/counters/route.ts`
  - POST に `ADMIN` guard を追加

## 参考根拠

- Vercel / Next.js CVE-2025-29927 postmortem: https://vercel.com/blog/postmortem-on-next-js-middleware-bypass
- Next.js Authentication guide: https://nextjs.org/docs/app/guides/authentication
- Auth.js Database Adapters: https://authjs.dev/getting-started/database
- Auth.js Prisma Adapter: https://authjs.dev/getting-started/adapters/prisma
- Auth.js Credentials provider: https://authjs.dev/getting-started/authentication/credentials
