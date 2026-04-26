/**
 * ユニットの categoryId 配列を、サイト側の `Property` (40 値の closed string union) 配列に
 * マッピングする。
 *
 * ## 戦略
 *
 * 1. **JPN locale 優先**: Comlink の `category` 配列が持つ `descKey` を JPN locale で解決し、
 *    結果が `Property` union の値と完全一致する場合のみ採用する。
 *    これによりゲーム本体の翻訳変更にほぼ自動追従できる。
 *
 * 2. **alignment_* を補完**: `alignment_dark/light/neutral` は locale 経由で「ダークサイド」
 *    「ライトサイド」「ニュートラル」と取れるが `visible: false` のため上の判定で漏れる
 *    場合に備え、明示的に許可する。
 *
 * 3. **手書き辞書で穴埋め**: locale で解決できないが既存サイトで使っていた categoryId
 *    （例: `affiliation_501st` → `第501軍団`）を辞書で補う。
 *
 * 4. それでも解決できなかった categoryId は `unknown` 配列に積み、呼び出し側で集計する。
 *
 * 注: 1 つの categoryId が `Property` の複数値にまたがることはない前提。
 */

import type { Property } from "@/types/characters/characters";
import type { ComlinkCategory } from "@/lib/swgoh/comlink/fetchGameData";

const PROPERTY_VALUES: ReadonlySet<Property> = new Set<Property>([
  "ダークサイド",
  "ライトサイド",
  "ニュートラル",
  "タンク",
  "サポート",
  "アタッカー",
  "ヒーラー",
  "リーダー",
  "イウォーク",
  "インペリアル・レムナント",
  "ウーキー",
  "クローン・トルーパー",
  "グンガン",
  "ジェダイ",
  "ジオノージアン",
  "シス",
  "シス帝国",
  "タスケン",
  "ドロイド",
  "ナイトシスター",
  "ならず者",
  "ハット・カルテル",
  "バッド・バッチ",
  "ファースト・オーダー",
  "フェニックス",
  "マンダロリアン",
  "レジスタンス",
  "ローグ・ワン",
  "艦隊司令官",
  "旧共和国",
  "銀河共和国",
  "賞金稼ぎ",
  "尋問官",
  "第501軍団",
  "帝国軍",
  "帝国軍トルーパー",
  "反乱軍",
  "反乱軍ファイター",
  "非同盟のフォースの使い手",
  "分離主義者",
]);

/**
 * locale で取れない／visible=false 等で曖昧な categoryId を補う手書き辞書。
 *
 * ここに載せて良いのは「ゲーム上の派閥・役割を表すタグで、サイトの Property union と一致する」もののみ。
 * "selftag_*"、"any_*"、"conq_*" 等は対象外（＝ unknown に流す方が安全）。
 */
const MANUAL_OVERRIDES: Record<string, Property> = {
  alignment_dark: "ダークサイド",
  alignment_light: "ライトサイド",
  alignment_neutral: "ニュートラル",
  // 役割のうち visible=true でも locale 文字列がブレる場合の保険
  role_attacker: "アタッカー",
  role_tank: "タンク",
  role_support: "サポート",
  role_healer: "ヒーラー",
  role_leader: "リーダー",
  // 501st は locale 上は同じ訳語でも複数の categoryId にまたがるため明示
  affiliation_501st: "第501軍団",
  affiliation_501st_visible: "第501軍団",
};

export interface CategoryIndex {
  /** categoryId -> 日本語名（Property 適合 / 不適合に関わらず） */
  jpnByCategoryId: Map<string, string>;
}

/**
 * Comlink の category 配列と JPN locale Map から、categoryId → 日本語名の索引を作る。
 * 同じ日本語訳でも descKey が PLACEHOLDER のものは捨てる。
 */
export function buildCategoryIndex(
  categories: ComlinkCategory[],
  locale: Map<string, string>,
): CategoryIndex {
  const jpnByCategoryId = new Map<string, string>();

  for (const cat of categories) {
    const descKey = cat.descKey;
    if (typeof descKey !== "string" || descKey.length === 0) continue;
    if (descKey === "PLACEHOLDER") continue;

    const jpn = locale.get(descKey);
    if (typeof jpn !== "string" || jpn.length === 0) continue;

    jpnByCategoryId.set(cat.id, jpn);
  }

  return { jpnByCategoryId };
}

export interface MapCategoryResult {
  matched: Property[];
  unknown: string[];
}

export function mapCategoryIds(
  categoryIds: readonly string[],
  index: CategoryIndex,
): MapCategoryResult {
  const matched = new Set<Property>();
  const unknown: string[] = [];

  for (const id of categoryIds) {
    // 1. 手書き辞書を最優先（visible=false を救う / locale ブレに強い）
    const override = MANUAL_OVERRIDES[id];
    if (override) {
      matched.add(override);
      continue;
    }

    // 2. locale 経由で解決
    const jpn = index.jpnByCategoryId.get(id);
    if (jpn && isProperty(jpn)) {
      matched.add(jpn);
      continue;
    }

    // 3. unknown 候補を絞り込み: 役割系・派閥系の ID だけ報告対象にし、
    //    selftag_* / any_* / conq_* / release_* / reduced_* 等のノイズは無視する。
    if (isReportableUnknown(id)) {
      unknown.push(id);
    }
  }

  return { matched: [...matched], unknown };
}

function isProperty(value: string): value is Property {
  return PROPERTY_VALUES.has(value as Property);
}

const REPORTABLE_PREFIXES = [
  "alignment_",
  "role_",
  "species_",
  "profession_",
  "affiliation_",
];

function isReportableUnknown(id: string): boolean {
  for (const p of REPORTABLE_PREFIXES) {
    if (id.startsWith(p)) return true;
  }
  return false;
}

export const __forTesting__ = {
  PROPERTY_VALUES,
  MANUAL_OVERRIDES,
};
