/**
 * Comlink の skill / ability から、サイト側の `Abilities["ability_type"]`
 * (closed string union, 6 値) を判定する。
 *
 * ## 推測ロジック
 *
 * 主に skill の `id` プレフィックスを根拠にする。Comlink の skill 配列を観察した
 * ところ、id のプレフィックスがゲーム上のスキル種別と非常に綺麗に対応していた:
 *
 * | id prefix          | 件数 | 種別 |
 * |--------------------|------|------|
 * | `basicskill_`      | 419  | 通常スキル |
 * | `specialskill_`    | 727  | 特殊スキル |
 * | `uniqueskill_`     | 487  | ユニークスキル |
 * | `leaderskill_`     | 161  | リーダースキル |
 * | `hardwareskill_`   | 60   | 付与スキル（装備由来） |
 * | `contractskill_`   | 20   | 付与スキル（契約由来） |
 * | `Contractskill_`   | 1    | 付与スキル（誤記が混ざっている） |
 *
 * `アルティメットスキル` は skill 経由ではなく、ユニットの `limitBreakRef` 内の
 * `ultimateability_*` ability から判別する。skillReference 経由では決して
 * 出てこないため、本関数は ability id でも判定する経路を持つ。
 *
 * 該当しないものは `通常スキル` にフォールバックし、フォールバック発生件数を
 * `unknown_ability_types` に積んで呼び出し側で集計する。
 */

import type { Abilities } from "@/types/abilities/abilities";

export type AbilityType = Abilities["ability_type"];

export interface AbilityTypeResolution {
  abilityType: AbilityType;
  /** フォールバックで `通常スキル` に倒した場合 true */
  isFallback: boolean;
}

const SKILL_ID_PREFIXES: ReadonlyArray<{ prefix: string; type: AbilityType }> = [
  { prefix: "basicskill_", type: "通常スキル" },
  { prefix: "specialskill_", type: "特殊スキル" },
  { prefix: "uniqueskill_", type: "ユニークスキル" },
  { prefix: "leaderskill_", type: "リーダースキル" },
  { prefix: "hardwareskill_", type: "付与スキル" },
  { prefix: "contractskill_", type: "付与スキル" },
  // 1 件だけ大文字始まりの誤記が観測される
  { prefix: "Contractskill_", type: "付与スキル" },
];

const ABILITY_ID_PREFIXES: ReadonlyArray<{ prefix: string; type: AbilityType }> =
  [
    { prefix: "ultimateability_", type: "アルティメットスキル" },
    { prefix: "basicability_", type: "通常スキル" },
    { prefix: "specialability_", type: "特殊スキル" },
    { prefix: "uniqueability_", type: "ユニークスキル" },
    { prefix: "leaderability_", type: "リーダースキル" },
    { prefix: "hardwareability_", type: "付与スキル" },
    { prefix: "contractability_", type: "付与スキル" },
    { prefix: "grantedability_", type: "付与スキル" },
  ];

/**
 * skill id を最優先で見て種別を決める。skill が存在しないケース（ult のように
 * limitBreakRef 経由でしか取れない場合）は ability id にフォールバックする。
 */
export function resolveAbilityType(input: {
  skillId?: string;
  abilityId?: string;
}): AbilityTypeResolution {
  const { skillId, abilityId } = input;

  if (skillId) {
    for (const { prefix, type } of SKILL_ID_PREFIXES) {
      if (skillId.startsWith(prefix)) {
        return { abilityType: type, isFallback: false };
      }
    }
  }

  if (abilityId) {
    const lower = abilityId.toLowerCase();
    for (const { prefix, type } of ABILITY_ID_PREFIXES) {
      if (lower.startsWith(prefix)) {
        return { abilityType: type, isFallback: false };
      }
    }
  }

  return { abilityType: "通常スキル", isFallback: true };
}
