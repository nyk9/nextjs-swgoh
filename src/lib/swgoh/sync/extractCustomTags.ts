/**
 * 整形済み（markdownConverter 通過後）の日本語スキル説明文から、
 * `Skills` (closed string union, 約 280 値) のうち含まれているタグを抽出する。
 *
 * ## 戦略
 *
 * - `Skills` の各値はゲーム内バフ／デバフ／効果名と一致するキーワード。
 *   そのまま部分文字列マッチで該当を拾う。
 * - 「ターン」と「ターン終了時」が両方含まれていればどちらも残す（仕様）。
 * - `Skills` のリストは `src/types/characters/characters.ts` から
 *   再エクスポートされている型に依存できないので、ランタイムで全候補値の配列を渡す。
 *   呼び出し側で型互換を担保すること。
 *
 * - マッチ件数は `matchCount` として返し、呼び出し側で
 *   0 件判定や `unknown-tags.md` の "Skills with no matched tags"
 *   セクションへの集約に利用できるようにする。
 */

import type { Skills } from "@/types/characters/characters";

export interface ExtractCustomTagsResult {
  tags: Skills[];
  matchCount: number;
}

/**
 * @param description - markdownConverter で整形した説明文
 * @param skillVocabulary - Skills union の全候補値（呼び出し側から渡す）
 */
export function extractCustomTags(
  description: string,
  skillVocabulary: readonly Skills[],
): ExtractCustomTagsResult {
  if (!description) {
    return { tags: [], matchCount: 0 };
  }

  const matched: Skills[] = [];
  for (const tag of skillVocabulary) {
    if (description.includes(tag)) {
      matched.push(tag);
    }
  }

  return { tags: matched, matchCount: matched.length };
}
