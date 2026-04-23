# SWGoH サイト SEO/UX 改善計画

作成日: 2026-04-20
対象リポジトリ: `nextjs-swgoh`
ブランチ: `feature/ui-improvement`
目的: **PV 数の増加**（現状 35pv/月）
前提資料: `docs/review-report-2026-04-20.md`（外部レビュー）

---

## 方針

`review-report-2026-04-20.md` を基準としつつ、実装コードを再検証して以下を反映した統合版。

- レビューで未指摘だったクラッシュバグ・低品質公開ページを追加
- レビューの誤検知（画像パス不整合）は取り下げ
- OGP 画像の動的生成・GSC 連携を計画に追加

---

## 課題一覧（重大度順）

### Critical

#### C1. `/character/[baseId]` でクラッシュの可能性

**ファイル**: `src/app/character/[baseId]/page.tsx:19`

```tsx
const list: abilitiesList[] = [];
for (let i = 0; i < data.length; i++) {
  if (params.baseId === data[i].character_base_id) { list.push(data[i]); }
}
return (
  <div className="bg-neutral-500">
    <h2>{list[0].character_base_id}</h2>  // ← list が空だと throw
```

- 該当データが無い `baseId` で 500 エラー
- SEO 副作用: Googlebot が 500 を踏むと当該 URL がインデックスから脱落
- `characters/page.tsx` から内部リンクが残っているため放置不可

**対応**: `list.length === 0` なら `notFound()` を返す

#### C2. 旧/新キャラ詳細ルートの併存

- 新: `/characters/[characterId]`
- 旧: `/character/[baseId]`
- `src/app/characters/page.tsx:338, 344` で **両方にリンク**
- `next.config.js` に `redirects()` なし

**影響**: ページ評価の分散、クロール予算の浪費、ユーザー混乱

**対応**:
1. `next.config.js` に旧→新の 301 リダイレクトを追加
2. 内部リンク（`characters/page.tsx` の該当箇所）を新 URL に統一
   - **リダイレクトだけでは不十分**。内部リンクが旧 URL のままだと評価が旧に溜まる

### High

#### H1. `sitemap.ts` / `robots.ts` 未整備

- `src/app` 配下に存在せず
- 影響: 新規・弱ドメインにおける Google のページ発見性が著しく低下

**対応**:
- `src/app/sitemap.ts`: static ページ全件 + `characters` 全件の URL を列挙
- `src/app/robots.ts`: `Sitemap:` 行を明記

#### H2. 個別メタデータ未整備（特に動的ルート）

- 個別 `metadata` を設定しているのは `/TWCounters` のみ
- static ページ（`/`, `/characters`, `/ships`, `/advisor`, `/about`）は `layout.tsx` の共通定義に依存
- `/characters/[characterId]` に `generateMetadata` / `generateStaticParams` 未実装

**影響**:
- Google から見て全ページが同じタイトル・説明 → 検索結果に出にくい
- 数百キャラ分のロングテール SEO を全損失（最大の機会損失）

**対応**:
- static 5 ページに個別 `export const metadata`（検索意図語を含めたタイトル）
- `/characters/[characterId]` に `generateStaticParams` + `generateMetadata`

#### H3. `metadataBase` / OGP / Twitter Card 未設定

- `src/app/layout.tsx` の `metadata` は最小限。OGP 絶対 URL が生成されない
- `keywords` は設定されているが Google では既に無視される
- SWGoH コミュニティは Discord/X 主体 → シェア時の見栄えは流入に直結

**対応**: `layout.tsx` に `metadataBase`, `openGraph`, `twitter`, `robots`, `verification.google` を追加。`keywords` 削除

### Medium

#### M1. 主要ページが全面 Client Component

- `/`, `/characters`, `/ships`, `/advisor` が `"use client"`
- 初期 HTML にテキストが入らない（JS 実行後にレンダリング）
- Googlebot は JS 実行するが二段階クロール → インデックスが遅い

**対応**: server shell + client child へ分離（Phase 2 で対応）

#### M2. `Noto_Sans_JP` の `subsets` 設定が不自然

- `src/app/layout.tsx:10` で `subsets: ["latin"]`
- 日本語 subset が読み込まれない → 日本語描画品質・配信効率の両面に悪影響の可能性

**対応**: `subsets` を削る、または `preload: false` を検討

#### M3. `src/app/api/page.tsx` が低品質な公開ページ

```tsx
export default function api() {
  return <>This is a api pgae.</>;  // typo 含む
}
```

- 実質無価値なページがインデックス対象
- サイト全体の品質スコアを押し下げるリスク

**対応**: 削除 or `robots: { index: false }` 付与

### Low

#### L1. 依存の整理余地

- `@ionic/core`, `@ionic/react`, `ionicons` の利用実態未確認
- `react-icons` と `lucide-react` の併用

**対応**: Phase 4 で利用実態確認 → 削減

---

## レビューから取り下げた項目

### ❌ H3（レビュー原版）「画像パスと静的ファイル配置の不整合」

**検証**: `git ls-files public/` で `public/` 配下に **2302 ファイルがコミット済み**

- `public/charui/`, `public/skill/`, `public/ability/`, `public/abilityui/` はすべて git 管理下
- Vercel へ正常にデプロイされる前提
- レビューの懸念（「リポジトリ上で確認できず」）は誤検知

補足: `characterSkills.tsx` の `/skill/...` 参照も問題なし

---

## 確認できた良い点

- `src/app/TWCounters/page.tsx` は `dynamic = "force-dynamic"` 適用済み
- `react` / `react-dom` は同一バージョン固定（CLAUDE.md ルール準拠）
- UI 刷新により視覚的一貫性は改善済み
- Vercel Analytics / Speed Insights は導入済み

---

## 実行計画

### Phase 0 — 緊急修正（~30 分）

Google からの評価劣化を止めるための最優先作業。

- [ ] 0-1. `src/app/character/[baseId]/page.tsx` に空配列ガード追加（`notFound()`）
- [ ] 0-2. `src/app/api/page.tsx` の削除 or `noindex`

### Phase 1 — SEO 基礎工事（~3 時間）

Google にインデックスさせるための土台。PV への直接影響が最大。

- [ ] 1-1. `src/app/sitemap.ts` を作成（static + 動的キャラ URL）
- [ ] 1-2. `src/app/robots.ts` を作成（`Sitemap:` 行を含む）
- [ ] 1-3. `src/app/layout.tsx` 更新
  - `metadataBase: new URL("https://swgoh4jp.com")` ※要確認
  - `openGraph`, `twitter` デフォルト
  - `robots: { index: true, follow: true }`
  - `verification.google`
  - `keywords` 削除
- [ ] 1-4. static 5 ページ（`/`, `/characters`, `/ships`, `/advisor`, `/about`）に個別 `export const metadata`
- [ ] 1-5. `/characters/[characterId]` に `generateStaticParams` + `generateMetadata`
- [ ] 1-6. `src/app/opengraph-image.tsx` で OGP 画像を動的生成（Next.js 標準機能）
- [ ] 1-7. Google Search Console プロパティ登録＆verification タグ設定

### Phase 2 — 重複解消＆品質（~2 時間）

- [ ] 2-1. `next.config.js` に `/character/:id` → `/characters/:id` の 301
- [ ] 2-2. `src/app/characters/page.tsx` 内の旧 URL リンクを削除し新 URL に統一
- [ ] 2-3. `Noto_Sans_JP` の `subsets` 設定修正
- [ ] 2-4. `/`, `/characters`, `/ships` を server shell + client child に分離

### Phase 3 — ロングテール獲得（継続）

- [ ] 3-1. `/guides/[slug]` を MDX で追加
- [ ] 3-2. 初期記事 3〜5 本（序盤育成優先度 / RotE 入門 / GAC 昇格戦略 / TW 基本 / 無課金キャラ順）
- [ ] 3-3. 構造化データ追加（Article / BreadcrumbList / WebSite+SearchAction）
- [ ] 3-4. 内部リンク設計（キャラ ⇔ ガイド双方向）

### Phase 4 — 回遊率改善（PV が戻り始めてから）

- [ ] 4-1. Hero キービジュアル追加
- [ ] 4-2. バンドル整理（`@ionic/*` 利用実態確認 → 未使用なら削除、`react-icons`/`lucide-react` 統一）
- [ ] 4-3. Core Web Vitals 点検

---

## 効果測定

### 指標（Google Search Console）

- 有効インデックス数
- 表示回数
- クリック数
- クエリ別 CTR
- 掲載順位

### タイムライン

- **Phase 0 + Phase 1 完了直後**: 数日〜2週でクロール＆再インデックス開始
- **リリース後 2〜4週**: Phase 1/2 の効果判定
- **リリース後 1〜3ヶ月**: Phase 3 のロングテール獲得効果

### 暫定 KPI（目安）

- 1ヶ月後: 有効インデックス 5 → 数百（キャラ詳細分）
- 3ヶ月後: PV 35/月 → 数百 pv/月（Phase 3 の記事が効き始める想定）

---

## 未確認事項（実装着手前に要確認）

1. **本番ドメイン**: `https://swgoh4jp.com` で確定か
   - `characterSkills.tsx:5` の API 先から推定しているが明示確認が必要
2. **Google Search Console** のプロパティ登録状況
   - 未登録なら verification タグ取得が必要
3. **`@ionic/*` 系依存の実使用**
   - Phase 4 での削除可否判定用

---

## 補足

- 本計画は 2026-04-20 時点のリポジトリ `feature/ui-improvement` ブランチに基づく
- `docs/review-report-2026-04-20.md` と併読のこと。本計画はレビューを取り込み拡張したもの
