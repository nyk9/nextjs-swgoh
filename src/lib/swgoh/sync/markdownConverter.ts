/**
 * Comlink の説明文に含まれる BBCode 風マークアップを、
 * このサイトのスキル説明レンダラ（`src/components/unit-detail/UnitDetail.tsx` + `src/components/elements/BBCodeText.tsx`）が
 * 解釈できる「単一文字マーカー形式」に変換する。
 *
 * レンダラの仕様:
 * - `\n` 改行は `>` で区切る（1 個ずつ）
 * - `*foo*` ... 黄色強調（キーワード／効果）
 * - `#foo#` ... オレンジ（アルティメットチャージ）
 * - `$foo$` ... 白色＋大きめ（オミクロンの条件見出し）
 * - `+foo+` ... 薄水色（役割など）
 *
 * BBCode → マーカー の対応:
 * - `[c][F0FF23]...[-][/c]` / `[c][ffff33]...[-][/c]` （明るい黄色）→ `*...*`
 * - `[c][FFA500]...[-][/c]`（オレンジ／アルティメット）→ `#...#`
 * - `[c][HEX]...[-][/c]`（その他色）→ 黄色 `*...*` にフォールバック
 * - `[b]...[/b]` → `*...*`（既存データのキーワード強調と統一）
 * - リテラルの `\n`（バックスラッシュ + n）と実際の改行 → `>`
 *
 * 残った未知タグは正規表現で剥がし、剥がした件数を warn で報告する。
 */

const COLOR_TAG_RE = /\[c\]\[([0-9A-Fa-f]{6})\]([\s\S]*?)\[-\]\[\/c\]/g;
const BOLD_TAG_RE = /\[b\]([\s\S]*?)\[\/b\]/g;
const RESIDUAL_TAG_RE = /\[\/?[A-Za-z][^\]]*\]|\[-\]/g;

const ULT_HEX = new Set(["FFA500"]);

export function convert(input: string): string {
  if (!input) return "";

  let s = input;

  // 1. リテラルの "\n" → 改行
  s = s.replace(/\\n/g, "\n");

  // 2. カラータグ → 単一文字マーカー
  s = s.replace(COLOR_TAG_RE, (_match, hex: string, body: string) => {
    const upper = hex.toUpperCase();
    if (ULT_HEX.has(upper)) {
      // オレンジ（アルティメット）
      return `#${body}#`;
    }
    // それ以外の色（黄色・水色・赤・青など）はサイトのレンダラ側に
    // 正確な対応色がないため、キーワード強調 (黄色) にフォールバックする
    return `*${body}*`;
  });

  // 3. 太字タグ → 黄色マーカー（既存データの慣習に合わせる）
  s = s.replace(BOLD_TAG_RE, (_match, body: string) => `*${body}*`);

  // 4. 残ったタグを剥がしつつ件数をログ
  let residualCount = 0;
  s = s.replace(RESIDUAL_TAG_RE, (m) => {
    residualCount++;
    void m;
    return "";
  });
  if (residualCount > 0) {
    console.warn(
      `[markdownConverter] 残留タグを ${residualCount} 件剥がしました`,
    );
  }

  // 5. 改行を `>` に統一（連続する改行は連続する `>` になる）
  s = s.replace(/\r?\n/g, ">");

  // 6. 行頭・行末のスペースを軽くトリム
  return s.trim();
}
