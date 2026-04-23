# SWGoHサイト 実装レビュー・レポート

作成日: 2026-04-20
対象リポジトリ: `nextjs-swgoh`
レビュー方針: ソースコード実装ベース（推測ではなく現状コードを確認）

## 総評

現状のPV低迷に対して、技術SEOとルーティング正規化に関する課題は実装上も確認できた。  
特に、キャラクター詳細導線の重複、メタデータ最適化不足、`sitemap`/`robots` 未整備がボトルネック。

---

## Findings（重大度順）

### Critical

1. 旧/新キャラ詳細ルートが併存し、内部リンクが分散
   - `src/app/characters/page.tsx` から
     - 新: `char.url`（`/characters/[characterId]`）
     - 旧: `/character/[baseId]`
     の2系統へ遷移。
   - `next.config.js` に `redirects()` がなく、正規化されていない。
   - 影響: 評価分散、重複クロール、ユーザー混乱。

2. `/character/[baseId]` の空配列時クラッシュ可能性
   - `src/app/character/[baseId]/page.tsx` で `list[0].character_base_id` を無条件参照。
   - 該当データが無い場合、500発生リスク。
   - 影響: UX悪化、クロール品質低下。

### High

3. 画像パスと静的ファイル配置の不整合
   - データ上は `/charui/...`, `/skill/...` を参照。
   - リポジトリ上で該当ファイル群を確認できず、404の可能性。
   - 影響: 一覧・詳細の可読性低下、回遊率低下。

4. `sitemap.ts` / `robots.ts` 未整備
   - `src/app` 配下に存在しない。
   - 影響: 新規・弱ドメイン時の発見性低下。

5. メタデータ最適化不足（動的ルート含む）
   - `metadata` は実質 `src/app/layout.tsx` の共通定義中心。
   - `generateMetadata` / `generateStaticParams` の実装なし。
   - 影響: キャラ詳細ロングテール獲得機会の取りこぼし。

### Medium

6. 主要ページが全面 Client Component
   - `/`, `/characters`, `/ships`, `/advisor` が `"use client"`。
   - 影響: 初期HTMLの情報量が薄くなりやすい。

7. 日本語サイトとしてフォント設定が不自然
   - `Noto_Sans_JP` が `subsets: ["latin"]`。
   - 影響: 日本語描画品質・配信効率に悪影響の可能性。

8. `metadataBase` / OGP / Twitter Card の未設定
   - 影響: SNS共有時のプレビュー品質不足、流入機会損失。

### Low

9. `src/app/api/page.tsx` が実質価値の薄い公開ページ
   - インデックス対象になる可能性。

10. 依存の整理余地
   - `@ionic/core`, `@ionic/react`, `ionicons` の利用実態要確認。
   - `react-icons` と `lucide-react` の併用整理余地。

---

## 確認できた良い点

- `src/app/TWCounters/page.tsx` は `dynamic = "force-dynamic"` が適用済み。
- `react` / `react-dom` は同一バージョン固定。
- デザイン刷新によりUI一貫性は改善済み。

---

## 優先対応プラン（実装順）

### Phase 1: まず検索に載る土台を作る（最優先）

1. `src/app/sitemap.ts` 追加（static + dynamic URL）
2. `src/app/robots.ts` 追加（sitemap明記）
3. `src/app/layout.tsx` に `metadataBase`, OGP, Twitter, robots を追加
4. staticページ（`/`, `/characters`, `/ships`, `/advisor`, `/about`）個別 `metadata` 追加
5. `src/app/characters/[characterId]/page.tsx` に `generateMetadata` 追加

### Phase 2: 重複ルートと品質問題を解消

6. `next.config.js` に旧URL→新URLの301リダイレクト追加
7. `src/app/characters/page.tsx` 内リンクを新URL系に統一
8. `src/app/character/[baseId]/page.tsx` の空配列ガード追加（または段階的廃止）
9. `Noto_Sans_JP` 設定見直し

### Phase 3: 伸びるための拡張

10. 主要一覧ページを Server/Client 分離（シェルをServer化）
11. ガイド系コンテンツ導線を追加（内部リンク設計）
12. 未使用依存を削減してバンドル改善

---

## 進捗測定（最低限）

- GSCで確認:
  - 有効インデックス数
  - 表示回数
  - クリック数
  - クエリ別CTR
- リリース後2〜4週間で、Phase 1/2の効果を判定。

---

## 補足

- 本レポートは、レビュー実施時点のリポジトリ状態に基づく。
- 画像アセットについては、外部配信やデプロイ時注入がある場合は再評価が必要。
