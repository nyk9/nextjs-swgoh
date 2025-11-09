/**
 * ユニット（キャラクター・シップ）の属性定数
 * 陣営、派閥、ロールなどをまとめて管理
 */

// 基本陣営
export const BASIC_ALIGNMENTS = [
  "ライトサイド",
  "ダークサイド",
  "ニュートラル",
] as const;

// キャラクター専用ロール
export const CHARACTER_ROLES = [
  "リーダー",
  "アタッカー",
  "サポート",
  "タンク",
  "ヒーラー",
] as const;

// シップ専用タイプ
export const SHIP_TYPES = [
  "キャピタルシップ",
  "アタッカー",
  "サポート",
  "タンク",
] as const;

// 共通派閥
export const COMMON_FACTIONS = [
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
] as const;

// シップ専用派閥
export const SHIP_ONLY_FACTIONS = [
  "貨物船",
  "商船",
] as const;

/**
 * キャラクター用プロパティボタン
 * フィルター画面で表示する順序で配列化
 */
export const characterPropertyButtons: string[] = [
  ...COMMON_FACTIONS,
];

/**
 * シップ用プロパティボタン
 * フィルター画面で表示する順序で配列化
 */
export const shipPropertyButtons: string[] = [
  ...COMMON_FACTIONS,
  ...SHIP_ONLY_FACTIONS,
];
