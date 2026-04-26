/**
 * Comlink からゲームデータと JPN ローカライズを取得し、
 * サイトが消費する JSON 3 本（units / abilities / ships）と
 * 未マッチタグレポート (docs/data-sync/unknown-tags.md) を生成する。
 *
 * 使い方:
 *   bun run sync:units              # 通常実行
 *   bun run sync:units -- --dry-run # 書き込まない、サマリーのみ
 *
 * ⚠️ メモリ:
 *   /data segment 0 は約 329 MB。package.json のスクリプトで
 *   --max-old-space-size=4096 を渡している前提。
 */

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

import {
  fetchGameDataMetadata,
  fetchUnitsAndSkills,
  type ComlinkUnit,
  type ComlinkSkill,
  type ComlinkAbility,
} from "../src/lib/swgoh/comlink/fetchGameData";
import { fetchJapaneseLocalization } from "../src/lib/swgoh/comlink/fetchLocalization";
import { ComlinkError } from "../src/lib/swgoh/comlink/client";

import { parseLocalization } from "../src/lib/swgoh/sync/parseLocalization";
import {
  buildCategoryIndex,
  mapCategoryIds,
} from "../src/lib/swgoh/sync/categoryMapping";
import { resolveAbilityType } from "../src/lib/swgoh/sync/abilityTypeMapping";
import { extractCustomTags } from "../src/lib/swgoh/sync/extractCustomTags";
import { UnknownTagsLogger } from "../src/lib/swgoh/sync/unknownTagsLogger";
import { loadSkillVocabulary } from "../src/lib/swgoh/sync/skillVocabulary";

import { ALIASES } from "../src/data/aliases";
import type {
  Characters,
  Property,
  Skills,
} from "../src/types/characters/characters";
import type {
  Abilities,
  CharacterAbilities,
} from "../src/types/abilities/abilities";
import type { Ship, ShipFaction, ShipRole } from "../src/types/ships/ships";

// ----------------------------------------------------------------------------
// 設定
// ----------------------------------------------------------------------------

const ROOT = path.resolve(import.meta.dirname!, "..");
const OUT_DIR = path.join(ROOT, "src/data/.generated");
const UNITS_OUT = path.join(OUT_DIR, "units.json");
const ABILITIES_OUT = path.join(OUT_DIR, "abilities.json");
const SHIPS_OUT = path.join(OUT_DIR, "ships.json");
const UNKNOWN_MD_OUT = path.join(ROOT, "docs/data-sync/unknown-tags.md");

const DEFAULT_LAST_UPDATED = (() => {
  const d = new Date();
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
})();

// ----------------------------------------------------------------------------
// イベント・派生バリアント判定
// ----------------------------------------------------------------------------

/**
 * GLE Inherit / Event 限定 / Raid 限定など、通常の playable キャラとして
 * 一覧に出すべきでないバリアントの baseId サフィックス。
 *
 * 例:
 *  - LOGRAY_SPEEDERBIKERAID            (Speeder Bike Raid 限定バリアント)
 *  - EZRABRIDGERS3_GLE_INHERIT         (GLE Inherit ステータス継承用ダミー)
 *  - JARJARBINKS_EVENT                 (Event 限定バリアント)
 */
const EVENT_SUFFIXES = [
  "_EVENT",
  "_RAID",
  "_SPEEDERBIKERAID",
  "_TB",
  "_TW",
  "_CONQUEST",
  "_INHERIT",
  "_NOULT",
  "_STANDARD",
  "_RECRUIT",
];

function isEventVariant(baseId: string): boolean {
  const upper = baseId.toUpperCase();
  return (
    EVENT_SUFFIXES.some((s) => upper.endsWith(s)) ||
    upper.includes("_GLE_") ||
    upper.includes("_GLF_")
  );
}

// ----------------------------------------------------------------------------
// 補助型
// ----------------------------------------------------------------------------

/**
 * Comlink の skill / unit が持つ Ref オブジェクト最小限の形
 */
interface AbilityRef {
  abilityId?: string;
}

interface SkillRef {
  skillId?: string;
}

// ----------------------------------------------------------------------------
// メイン
// ----------------------------------------------------------------------------

async function main(): Promise<void> {
  const dryRun = process.argv.includes("--dry-run");

  console.log(
    `[sync-units] start (mode=${dryRun ? "dry-run" : "write"}, COMLINK_URL=${process.env.COMLINK_URL ?? "http://localhost:5001"})`,
  );

  // 1. metadata
  const metadata = await fetchGameDataMetadata();
  console.log(
    `[sync-units] metadata version=${metadata.version} loc=${metadata.localizationVersion}`,
  );

  // 2. /data segment 0
  console.log("[sync-units] fetching /data segment 0 (約 329MB) ...");
  const gameData = await fetchUnitsAndSkills(metadata.version);
  console.log(
    `[sync-units] fetched units=${gameData.units.length} skills=${gameData.skill.length} abilities=${gameData.ability.length} categories=${gameData.category.length}`,
  );

  // 3. localization
  console.log("[sync-units] fetching /localization JPN ...");
  const rawLocale = await fetchJapaneseLocalization(metadata.localizationVersion);
  const locale = parseLocalization(rawLocale);
  console.log(`[sync-units] localization entries=${locale.size}`);

  // 4. category index
  const categoryIndex = buildCategoryIndex(gameData.category, locale);

  // 5. skill / ability index
  const skillById = new Map<string, ComlinkSkill>();
  for (const s of gameData.skill) skillById.set(s.id, s);
  const abilityById = new Map<string, ComlinkAbility>();
  for (const a of gameData.ability) abilityById.set(a.id, a);

  // 6. Skill 語彙ロード（型ファイルから自動抽出）
  const skillVocabulary = await loadSkillVocabulary(ROOT);
  console.log(
    `[sync-units] skill vocabulary loaded (${skillVocabulary.length} terms)`,
  );

  const logger = new UnknownTagsLogger();

  // 7. キャラ抽出: combatType=1 && obtainable && rarity===maxRarity
  const characterUnits = gameData.units.filter(
    (u) =>
      u.combatType === 1 &&
      u.obtainable === true &&
      typeof u.rarity === "number" &&
      typeof u.maxRarity === "number" &&
      u.rarity === u.maxRarity,
  );
  // 念のため baseId でユニーク化（最初に登場した方を採用）
  const seenChar = new Set<string>();
  const characters: ComlinkUnit[] = [];
  for (const u of characterUnits) {
    if (seenChar.has(u.baseId)) continue;
    seenChar.add(u.baseId);
    characters.push(u);
  }

  // 8. 艦船抽出
  const shipUnits = gameData.units.filter(
    (u) =>
      u.combatType === 2 &&
      u.obtainable === true &&
      typeof u.rarity === "number" &&
      typeof u.maxRarity === "number" &&
      u.rarity === u.maxRarity,
  );
  const seenShip = new Set<string>();
  const ships: ComlinkUnit[] = [];
  for (const u of shipUnits) {
    if (seenShip.has(u.baseId)) continue;
    seenShip.add(u.baseId);
    ships.push(u);
  }

  console.log(
    `[sync-units] selected characters=${characters.length} ships=${ships.length}`,
  );

  // 9. 出力配列を作る
  const unitsOut: Characters[] = [];
  const abilitiesOut: CharacterAbilities[] = [];
  for (const unit of characters) {
    const built = buildCharacter({
      unit,
      locale,
      skillById,
      abilityById,
      categoryIndex,
      skillVocabulary,
      logger,
    });
    unitsOut.push(built.character);
    abilitiesOut.push(built.abilities);
  }

  const shipsOut: Ship[] = ships.map((s) =>
    buildShip({
      unit: s,
      locale,
      categoryIndex,
      logger,
    }),
  );

  // 10. unknown-tags.md
  if (!dryRun) {
    await mkdir(OUT_DIR, { recursive: true });
    await writeFile(UNITS_OUT, JSON.stringify(unitsOut, null, 2), "utf8");
    await writeFile(
      ABILITIES_OUT,
      JSON.stringify(abilitiesOut, null, 2),
      "utf8",
    );
    await writeFile(SHIPS_OUT, JSON.stringify(shipsOut, null, 2), "utf8");
    await logger.writeMarkdown(UNKNOWN_MD_OUT);
    console.log(`[sync-units] wrote ${UNITS_OUT}`);
    console.log(`[sync-units] wrote ${ABILITIES_OUT}`);
    console.log(`[sync-units] wrote ${SHIPS_OUT}`);
    console.log(`[sync-units] wrote ${UNKNOWN_MD_OUT}`);
  } else {
    console.log("[sync-units] dry-run: ファイルは書き出していません");
  }

  // 11. 集計
  const totalAbilities = abilitiesOut.reduce(
    (acc, c) => acc + c.ability.length,
    0,
  );
  console.log("[sync-units] summary:");
  console.log(`  characters    : ${unitsOut.length}`);
  console.log(`  ships         : ${shipsOut.length}`);
  console.log(`  abilities     : ${totalAbilities}`);
  console.log(
    `  unknown categoryIds          : ${logger.unknownCategoryCount}`,
  );
  console.log(
    `  skills with no matched tags  : ${logger.skillsWithNoTagsCount}`,
  );
  console.log(
    `  unknown ability_type fallback: ${logger.unknownAbilityTypeCount}`,
  );
}

// ----------------------------------------------------------------------------
// キャラ 1 体の組み立て
// ----------------------------------------------------------------------------

interface BuildCharacterDeps {
  unit: ComlinkUnit;
  locale: Map<string, string>;
  skillById: Map<string, ComlinkSkill>;
  abilityById: Map<string, ComlinkAbility>;
  categoryIndex: ReturnType<typeof buildCategoryIndex>;
  skillVocabulary: readonly Skills[];
  logger: UnknownTagsLogger;
}

interface BuildCharacterResult {
  character: Characters;
  abilities: CharacterAbilities;
}

function buildCharacter(deps: BuildCharacterDeps): BuildCharacterResult {
  const {
    unit,
    locale,
    skillById,
    abilityById,
    categoryIndex,
    skillVocabulary,
    logger,
  } = deps;

  const baseId = unit.baseId;
  const name = cleanLocaleName(locale.get(unit.nameKey) ?? unit.nameKey);
  const src = `/charui/${unit.thumbnailName}.png`;

  // category -> property
  const { matched: properties, unknown: unknownCats } = mapCategoryIds(
    unit.categoryId,
    categoryIndex,
  );
  for (const u of unknownCats) logger.recordUnknownCategory(u);

  // alias merge
  const alias = ALIASES[baseId];
  const abbreviation = alias?.abbreviation ?? "";
  const slug = alias?.url_slug ?? baseId;
  const url = `/characters/${slug}`;

  // 通常の skill
  const abilityList: Abilities[] = [];
  const allSkillTagsSet = new Set<Skills>();

  const skillRefs = (unit.skillReference ?? []) as SkillRef[];
  for (const ref of skillRefs) {
    const skillId = ref.skillId;
    if (!skillId) continue;
    const skill = skillById.get(skillId);
    if (!skill) continue;
    const ability = skill.abilityReference
      ? abilityById.get(skill.abilityReference)
      : undefined;

    const built = buildAbility({
      skillId,
      skill,
      ability,
      locale,
      skillVocabulary,
      characterBaseId: baseId,
      logger,
    });
    if (built) {
      abilityList.push(built.ability);
      for (const t of built.tags) allSkillTagsSet.add(t);
    }
  }

  // ult: limitBreakRef にある ultimateability_*
  const limitBreakRefs = (unit.limitBreakRef ?? []) as AbilityRef[];
  for (const ref of limitBreakRefs) {
    const abilityId = ref.abilityId;
    if (!abilityId) continue;
    if (!abilityId.startsWith("ultimateability_")) continue;
    const ability = abilityById.get(abilityId);
    if (!ability) continue;

    const built = buildAbility({
      skillId: undefined,
      skill: undefined,
      ability,
      locale,
      skillVocabulary,
      characterBaseId: baseId,
      logger,
    });
    if (built) {
      abilityList.push(built.ability);
      for (const t of built.tags) allSkillTagsSet.add(t);
    }
  }

  const skillTags = [...allSkillTagsSet];

  const character: Characters = {
    name,
    character_base_id: baseId,
    src,
    property: properties,
    abbreviation,
    skill: skillTags,
    url,
  };
  if (isEventVariant(baseId)) {
    character.is_event_variant = true;
  }

  const abilities: CharacterAbilities = {
    id: slug,
    character_name: name,
    character_image: src,
    ability: abilityList,
    last_updated: DEFAULT_LAST_UPDATED,
  };

  return { character, abilities };
}

// ----------------------------------------------------------------------------
// アビリティ 1 件の組み立て
// ----------------------------------------------------------------------------

interface BuildAbilityDeps {
  skillId: string | undefined;
  skill: ComlinkSkill | undefined;
  ability: ComlinkAbility | undefined;
  locale: Map<string, string>;
  skillVocabulary: readonly Skills[];
  characterBaseId: string;
  logger: UnknownTagsLogger;
}

interface BuildAbilityResult {
  ability: Abilities;
  tags: Skills[];
}

function buildAbility(deps: BuildAbilityDeps): BuildAbilityResult | undefined {
  const {
    skillId,
    skill,
    ability,
    locale,
    skillVocabulary,
    characterBaseId,
    logger,
  } = deps;

  if (!ability) return undefined;

  const nameKey = ability.nameKey;
  const name_jp =
    typeof nameKey === "string"
      ? cleanLocaleName(locale.get(nameKey) ?? nameKey)
      : "";
  // 英語名は ENG locale を取っていないので、nameKey から見栄え用に正規化する
  const name_eng = formatEnglishName(nameKey);

  const descKey = ability.descKey;
  const rawDesc =
    typeof descKey === "string" ? (locale.get(descKey) ?? "") : "";
  // BBCode は剥がさず、フロント側 BBCodeText でレンダリングする方針。
  // ただし \r\n / \n は raw のまま保存しても扱えるので何もしない。
  const description_jp = rawDesc;

  // image: ability.icon の prefix で /ability/ か /abilityui/ を判定
  const icon = typeof ability.icon === "string" ? ability.icon : "";
  const image = icon ? `/${iconFolder(icon)}/${icon}.png` : "";

  // ability_type
  const abilityIdLower =
    typeof ability.id === "string" ? ability.id : "";
  const resolved = resolveAbilityType({ skillId, abilityId: abilityIdLower });
  if (resolved.isFallback) {
    logger.recordUnknownAbilityType({
      characterBaseId,
      abilityName: `${name_jp || name_eng || abilityIdLower} (skill=${skillId ?? "-"})`,
    });
  }

  // フラグ類
  const isZeta = skill?.isZeta === true;
  // omicronMode: 0/1 = 無し, 2 以上 = 有り（Comlink では omicronMode が 1 で no, 2 以上で yes に見えるが
  // 確証なし。安全側で 2 以上 を omicron 扱い、それ以外は無しとする）
  const isOmicron =
    typeof skill?.omicronMode === "number" && skill.omicronMode >= 2;
  // omega: ability の最高 tier 数を見ても判断できないため、Comlink にある場合は信用する。
  // Comlink には明示的な omega フラグは無いが、skill 側に omega 扱いがある場合のみ true にする。
  // 該当フィールドが取れないため、ここでは「skill が存在するなら true」をデフォルトにし、
  // ult / 付与 など skill が無いものは false にする保守的な判定とする。
  const isOmega = skill !== undefined && resolved.abilityType !== "アルティメットスキル";

  // cooldown
  const cooldownNum =
    typeof ability.cooldown === "number" && ability.cooldown > 0
      ? ability.cooldown
      : undefined;

  const abilityOut: Abilities = {
    ability_type: resolved.abilityType,
    name_jp,
    name_eng,
    image,
    description_jp,
    is_omega: isOmega,
    is_zeta: isZeta,
    is_omicron: isOmicron,
  };
  if (cooldownNum !== undefined) abilityOut.cooldown = cooldownNum;

  // タグ抽出
  const { tags, matchCount } = extractCustomTags(description_jp, skillVocabulary);
  if (matchCount === 0) {
    logger.recordSkillWithNoTags({
      characterBaseId,
      abilityName: `${name_jp || abilityIdLower} (${resolved.abilityType})`,
    });
  }

  return { ability: abilityOut, tags };
}

/**
 * 名前用文字列から BBCode タグを除去してプレーンテキストにする。
 *
 * 説明文 (description_jp) は BBCode をそのまま保持してフロント側で
 * BBCodeText コンポーネントが描画するが、name 系（h1 / OGP title 等）に
 * BBCode が混じると見栄えが崩れるため、name 系専用に剥がす。
 */
function stripBBCode(text: string): string {
  return text
    .replace(/\[c\]\[[-a-fA-F0-9]+\]/g, "")
    .replace(/\[-\]\[\/c\]/g, "")
    .replace(/\[\/c\]/g, "")
    .replace(/\[c\]/g, "")
    .replace(/\[b\]/g, "")
    .replace(/\[\/b\]/g, "")
    .replace(/\[i\]/g, "")
    .replace(/\[\/i\]/g, "")
    .replace(/\[[^\]]+\]/g, "")
    .trim();
}

/**
 * locale から取得した「名前」用文字列の体裁を整える。
 *
 * - BBCode タグを除去
 * - リテラル "\n"（バックスラッシュ + n）を空白に置換
 * - 改行・タブ・ゼロ幅スペース (U+200B) を除去
 * - 前後の空白を trim
 */
function cleanLocaleName(s: string): string {
  return stripBBCode(s)
    .replace(/\\n/g, " ")
    .replace(/[\r\n\t​]/g, "")
    .trim();
}

function iconFolder(icon: string): "abilityui" | "ability" {
  return icon.startsWith("tex.abilityui") ? "abilityui" : "ability";
}

/**
 * `BASICABILITY_TRIPLEZERO_NAME` のような nameKey を、
 * 既存データの英語名と完全互換にはできないが、それなりに見られる文字列に変換する。
 * 例: `BASICABILITY_TRIPLEZERO_NAME` → `Basicability Triplezero`
 *
 * 既存データ (`name_eng: "Fatale Shock"` など) は人手翻訳であり、Comlink からは
 * 取得できない（英語名は ENG locale が必要）。今回 ENG locale は取得していないため
 * 暫定的にこの形式とする。完全な英語名が必要なら別途 Loc_ENG_US.txt も取得すること。
 */
function formatEnglishName(nameKey: string | undefined): string {
  if (!nameKey) return "";
  return nameKey
    .toLowerCase()
    .replace(/_name$/i, "")
    .split("_")
    .filter((p) => p.length > 0)
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join(" ");
}

// ----------------------------------------------------------------------------
// 艦船
// ----------------------------------------------------------------------------

interface BuildShipDeps {
  unit: ComlinkUnit;
  locale: Map<string, string>;
  categoryIndex: ReturnType<typeof buildCategoryIndex>;
  logger: UnknownTagsLogger;
}

const SHIP_FACTION_VALUES: ReadonlySet<ShipFaction> = new Set<ShipFaction>([
  "ライトサイド",
  "ダークサイド",
  "ニュートラル",
  "クローン・トルーパー",
  "ジェダイ",
  "ジオノージアン",
  "シス",
  "シス帝国",
  "ドロイド",
  "ならず者",
  "ハット・カルテル",
  "バッド・バッチ",
  "ファースト・オーダー",
  "フェニックス",
  "マンダロリアン",
  "レジスタンス",
  "ローグ・ワン",
  "旧共和国",
  "銀河共和国",
  "賞金稼ぎ",
  "帝国軍",
  "インペリアル・レムナント",
  "反乱軍",
  "反乱軍ファイター",
  "分離主義者",
]);

function buildShip(deps: BuildShipDeps): Ship {
  const { unit, locale, categoryIndex, logger } = deps;
  const baseId = unit.baseId;
  const name = cleanLocaleName(locale.get(unit.nameKey) ?? unit.nameKey);
  const src = `/charui/${unit.thumbnailName}.png`;

  // role 判定: shipclass_capitalship → キャピタルシップ、role_attacker/support/tank → そのまま
  let role: ShipRole | undefined;
  for (const cid of unit.categoryId) {
    if (cid === "shipclass_capitalship" || cid === "role_capital") {
      role = "キャピタルシップ";
      break;
    }
  }
  if (!role) {
    for (const cid of unit.categoryId) {
      if (cid === "role_attacker") role = "アタッカー";
      else if (cid === "role_support") role = "サポート";
      else if (cid === "role_tank") role = "タンク";
      if (role) break;
    }
  }
  const roleArr: ShipRole[] = role ? [role] : [];

  // faction 判定: Property union と faction union がほぼ同じなので
  // categoryMapping を流用しつつ ShipFaction にしか無いものはそのまま採用
  const { matched: properties, unknown } = mapCategoryIds(
    unit.categoryId,
    categoryIndex,
  );
  for (const u of unknown) logger.recordUnknownCategory(u);
  const factions: ShipFaction[] = [];
  for (const p of properties) {
    if (SHIP_FACTION_VALUES.has(p as unknown as ShipFaction)) {
      factions.push(p as unknown as ShipFaction);
    }
  }

  // pilot
  const crew = (unit.crew ?? []) as Array<{ unitId?: string }>;
  const pilotBaseId = crew.find((c) => typeof c.unitId === "string")?.unitId;
  const pilot =
    pilotBaseId && pilotBaseId.length > 0
      ? cleanLocaleName(
          locale.get(`UNIT_${pilotBaseId}_NAME`) ?? pilotBaseId,
        )
      : undefined;

  const alias = ALIASES[baseId];
  const abbreviation = alias?.abbreviation ?? "";
  const slug = alias?.url_slug;

  const ship: Ship = {
    name,
    base_id: baseId,
    src,
    faction: factions,
    role: roleArr,
    abbreviation,
  };
  if (pilot) ship.pilot = pilot;
  if (slug) ship.url = `/ships/${slug}`;
  return ship;
}

// ----------------------------------------------------------------------------
// 実行
// ----------------------------------------------------------------------------

main().catch((err) => {
  if (err instanceof ComlinkError) {
    console.error("[sync-units] Comlink error:", err.message);
    if (err.statusCode) console.error("  status:", err.statusCode);
    process.exit(2);
  }
  console.error("[sync-units] unexpected error:", err);
  process.exit(1);
});
