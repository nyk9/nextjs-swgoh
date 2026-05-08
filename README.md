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

## 新キャラクター・艦船の追加手順

ゲームアップデートで新キャラ／艦船が実装されたときの作業フロー。  
使用ブランチ: **`新キャラ追加用`**

### 1. ブランチを最新 main に追いつかせる

```bash
git checkout 新キャラ追加用
git fetch origin
git rebase origin/main
```

### 2. JSONデータを更新する

Comlink を起動した状態で実行する（`COMLINK_URL` が Koyeb を指している場合はそのまま実行可）。

```bash
bun run sync:units
```

以下の 4 ファイルが更新される:

| ファイル | 内容 |
|---|---|
| `src/data/.generated/units.json` | キャラクター一覧（ステータス・スキル・日本語名） |
| `src/data/.generated/abilities.json` | キャラクターアビリティ |
| `src/data/.generated/ships.json` | 艦船一覧 |
| `src/data/.generated/ship_abilities.json` | 艦船アビリティ |

### 3. 不足している画像を確認する

```bash
node -e "
const u=require('./src/data/.generated/units.json');
const a=require('./src/data/.generated/abilities.json');
const fs=require('fs');
u.filter(c=>!c.is_event_variant && c.src && !fs.existsSync('public'+c.src))
 .forEach(c=>console.log('MISSING charui:', 'public'+c.src));
a.filter(a=>a.image && !fs.existsSync('public'+a.image))
 .forEach(a=>console.log('MISSING ability:', 'public'+a.image));
"
```

### 4. 画像ファイルを追加する

ゲームクライアントのアセットから取得した画像を以下の場所に配置する:

| 配置先 | ファイル名パターン | 説明 |
|---|---|---|
| `public/charui/` | `tex.charui_*.png` | キャラクター・艦船のポートレイト |
| `public/ability/` | `tex.ability_*.png` | アビリティアイコン |
| `public/abilityui/` | `tex.abilityui_*.png` | アビリティUIアイコン |

`public/skill/` は固定の 9 枚のみで、通常追加不要。

ファイル名は `units.json` の `src` フィールド（例: `/charui/tex.charui_omega.png`）および  
`abilities.json` の `image` フィールドから確認できる。

### 5. フィルタ定数を必要に応じて更新する

新キャラが既存にない勢力・スキル効果を持つ場合、以下を手動で追記する:

| ファイル | 追記するもの |
|---|---|
| `src/features/characterlist/constants/property.ts` | 勢力・役割タグ（例: `"傭兵"`, `"オーダー66"`） |
| `src/features/characterlist/constants/skillEffect.ts` | スキル効果名（例: `"出血"`, `"シェイク"`） |

### 6. 動作確認

```bash
bun run dev
```

`/characters` でキャラが表示される・画像が壊れていないことを確認する。

### 7. コミット & PR

```bash
git add src/data/.generated/ public/charui/ public/ability/ public/abilityui/
git add src/features/  # 定数を更新した場合のみ
git commit -m "add: 新キャラクター「XXX」「YYY」を追加"
git push --force-with-lease origin 新キャラ追加用
```

GitHub 上で `新キャラ追加用` → `main` への PR を作成する。

---

> **注意**: `新キャラ追加用` ブランチは `feature/monetization` 等の大型ブランチが main にマージされたタイミングで再度 rebase が必要になることがある。手順 1 を都度実行すること。

---

## 作者

- **nyk9**
  - [GitHub](https://github.com/nyk9)
  - [Discord](https://discord.gg/yX3pS2WemD)

