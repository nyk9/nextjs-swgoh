# 銀河の英雄 初心者応援データベース

「スター・ウォーズ／銀河の英雄（SWGoH）」の初心者向け攻略情報サイトです。キャラクターデータベース、テリトリーウォーズ（TW）のカウンター編成記録、攻略情報などを提供します。

## 主な機能

- **キャラクター一覧と検索**: 全キャラクターの情報を網羅し、名前、所属、スキル効果などで絞り込み検索が可能です。
- **キャラクタースキル詳細**: 各キャラクターのスキル詳細（日本語・英語）を確認できます。
- **TWカウンター掲示板**: テリトリーウォーズで有効なカウンター編成を投稿・閲覧できます。
- **swgoh.gg API連携**: 一部のデータは swgoh.gg API から取得し、最新の情報を提供します。

## 使用技術

- **フレームワーク**: Next.js
- **言語**: TypeScript
- **データベース**: Prisma
- **スタイリング**: Tailwind CSS, shadcn/ui
- **テスト**: Jest, Playwright
- **デプロイ**: Vercel

## セットアップ方法

1.  リポジトリをクローンします:
    ```bash
    git clone https://github.com/nyk9/nextjs-swgoh.git
    ```
2.  ディレクトリを移動します:
    ```bash
    cd nextjs-swgoh
    ```
3.  依存関係をインストールします:
    ```bash
    npm install
    ```
4.  `.env` ファイルを作成し、`DATABASE_URL` を設定します。
    ```env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```
5.  データベースのマイグレーションを実行します:
    ```bash
    npx prisma migrate dev
    ```
6.  開発サーバーを起動します:
    ```bash
    npm run dev
    ```
    [http://localhost:3000](http://localhost:3000) でアプリケーションを確認できます。

## 利用可能なスクリプト

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: プロダクション用にビルドします。
- `npm run start`: ビルドしたアプリケーションを起動します。
- `npm run lint`: ESLintでコードをチェックします。
- `npm run test`: Jestでテストを実行します。

## 作者

- **nyk9**
  - [GitHub](https://github.com/nyk9)
  - [Discord](https://discord.gg/yX3pS2WemD)

