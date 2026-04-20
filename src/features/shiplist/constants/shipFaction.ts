import type { ShipFaction } from "@/types/ships/ships";

export const SHIP_CORE_FACTIONS: readonly ShipFaction[] = [
  "ライトサイド",
  "ダークサイド",
  "ニュートラル",
] as const;

export const SHIP_FACTIONS: readonly ShipFaction[] = [
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
] as const;
