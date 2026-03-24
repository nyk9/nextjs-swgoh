/**
 * GuildAggregation → AI用テキスト整形モジュール
 *
 * トークン効率を重視し、集計サマリーのみを出力する。
 * RotE TB に関連するキャラクターを優先的に表示する。
 */

import type { GuildAggregation, GuildUnitAggregation } from "./types";

// -------------------------------------------------------
// 定数
// -------------------------------------------------------

/** AI用テキストに含める最大ユニット数（トークン節約） */
const MAX_UNITS_IN_PROMPT = 60;

/** 所持率の低い（育成不足）しきい値: 全メンバーの何%以下を「不足」とみなすか */
const LOW_OWNERSHIP_THRESHOLD = 0.5;

/** 育成優先度計算: R7以上を「高レリック」とみなす */
const HIGH_RELIC_THRESHOLD = 7;

// -------------------------------------------------------
// ユーティリティ
// -------------------------------------------------------

/** レリックレベル分布を簡潔な文字列に変換する */
function formatRelicDistribution(
  byRelicLevel: Record<number, number>,
  memberCount: number,
): string {
  // R5以上のみ表示（R4以下は育成途中として省略）
  const highRelicEntries = Object.entries(byRelicLevel)
    .map(([level, count]) => ({ level: Number(level), count }))
    .filter(({ level }) => level >= 5)
    .sort((a, b) => b.level - a.level);

  if (highRelicEntries.length === 0) {
    return `所持${memberCount}人 R5未満`;
  }

  const parts = highRelicEntries.map(({ level, count }) => `R${level}:${count}人`);
  return `所持${memberCount}人 [${parts.join(", ")}]`;
}

/** 育成優先度スコアを算出する（高いほど不足・育成が必要） */
function calcPriorityScore(
  agg: GuildUnitAggregation,
  totalMembers: number,
): number {
  const ownershipRate = agg.memberCount / totalMembers;
  const highRelicCount = Object.entries(agg.byRelicLevel)
    .filter(([level]) => Number(level) >= HIGH_RELIC_THRESHOLD)
    .reduce((sum, [, count]) => sum + count, 0);
  const highRelicRate = agg.memberCount > 0 ? highRelicCount / agg.memberCount : 0;

  // 所持率が低い + 高レリック保持者が少ないほどスコアが高い
  return (1 - ownershipRate) * 0.6 + (1 - highRelicRate) * 0.4;
}

// -------------------------------------------------------
// 公開API
// -------------------------------------------------------

/**
 * GuildAggregation を AI 用テキストに整形する
 *
 * 出力形式:
 * - ギルド概要（名前・メンバー数・総GP）
 * - ユニット別育成状況（優先度スコア順・上位MAX_UNITS_IN_PROMPT件）
 *
 * @param agg - ギルド集計データ
 * @returns AI に渡すテキスト
 */
export function formatGuildProfile(agg: GuildAggregation): string {
  const lines: string[] = [];

  lines.push(`### ギルド概要`);
  lines.push(`- ギルド名: ${agg.guildName}`);
  lines.push(`- メンバー数: ${agg.memberCount}人（全体: ${agg.totalMemberCount}人）`);
  lines.push(`- 総GP: ${agg.totalGalacticPower.toLocaleString("ja-JP")}`);
  lines.push("");

  // R5以上を持つメンバーがいるユニットのみを対象にする
  const relevantUnits = Array.from(agg.units.values()).filter((u) => {
    const hasR5Plus = Object.entries(u.byRelicLevel).some(
      ([level, count]) => Number(level) >= 5 && count > 0,
    );
    return hasR5Plus;
  });

  // 育成優先度スコア降順でソート
  const sorted = relevantUnits.sort(
    (a, b) => calcPriorityScore(b, agg.memberCount) - calcPriorityScore(a, agg.memberCount),
  );

  // 所持率が低い（育成不足）ユニットと高いユニットに分類
  const shortage: GuildUnitAggregation[] = [];
  const sufficient: GuildUnitAggregation[] = [];

  for (const u of sorted) {
    if (u.memberCount / agg.memberCount < LOW_OWNERSHIP_THRESHOLD) {
      shortage.push(u);
    } else {
      sufficient.push(u);
    }
  }

  lines.push(`### ギルド内キャラクター育成状況（R5以上保持者がいるキャラ）`);
  lines.push("");

  if (shortage.length > 0) {
    lines.push(`#### 育成不足（所持率${Math.round(LOW_OWNERSHIP_THRESHOLD * 100)}%未満）`);
    for (const u of shortage.slice(0, MAX_UNITS_IN_PROMPT / 2)) {
      const dist = formatRelicDistribution(u.byRelicLevel, u.memberCount);
      lines.push(`  - ${u.unitId}: ${dist}  平均R${u.averageRelicLevel}  最大R${u.maxRelicLevel}`);
    }
    lines.push("");
  }

  lines.push(`#### 育成充足（所持率${Math.round(LOW_OWNERSHIP_THRESHOLD * 100)}%以上）`);
  for (const u of sufficient.slice(0, MAX_UNITS_IN_PROMPT / 2)) {
    const dist = formatRelicDistribution(u.byRelicLevel, u.memberCount);
    lines.push(`  - ${u.unitId}: ${dist}  平均R${u.averageRelicLevel}  最大R${u.maxRelicLevel}`);
  }

  return lines.join("\n");
}
