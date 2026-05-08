/**
 * Comlink /localization の生テキスト（KEY|VALUE 改行区切り）を Map にパースする。
 *
 * - 空行と # で始まるコメント行は無視
 * - 1 行 1 ペア。最初の `|` で分割するので VALUE 内に `|` を含んでも壊れない
 * - 重複キーは「後勝ち」とし、件数のみ console.warn で報告する
 */

export function parseLocalization(raw: string): Map<string, string> {
  const out = new Map<string, string>();
  let duplicateCount = 0;

  const lines = raw.split(/\r?\n/);
  for (const line of lines) {
    if (line.length === 0) continue;
    if (line.startsWith("#")) continue;

    const sep = line.indexOf("|");
    if (sep < 0) continue;

    const key = line.slice(0, sep);
    const value = line.slice(sep + 1);
    if (out.has(key)) duplicateCount++;
    out.set(key, value);
  }

  if (duplicateCount > 0) {
    console.warn(
      `[parseLocalization] 重複キー ${duplicateCount} 件（後勝ちで上書き）`,
    );
  }

  return out;
}
