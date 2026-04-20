export type ShipRole =
  | "キャピタルシップ"
  | "アタッカー"
  | "サポート"
  | "タンク";

export type ShipFaction =
  | "ライトサイド"
  | "ダークサイド"
  | "ニュートラル"
  | "クローン・トルーパー"
  | "ジェダイ"
  | "ジオノージアン"
  | "シス"
  | "シス帝国"
  | "ドロイド"
  | "ならず者"
  | "ハット・カルテル"
  | "バッド・バッチ"
  | "ファースト・オーダー"
  | "フェニックス"
  | "マンダロリアン"
  | "レジスタンス"
  | "ローグ・ワン"
  | "旧共和国"
  | "銀河共和国"
  | "賞金稼ぎ"
  | "帝国軍"
  | "インペリアル・レムナント"
  | "反乱軍"
  | "反乱軍ファイター"
  | "分離主義者";

export type Ship = {
  name: string;
  base_id?: string;
  src: string;
  faction: ShipFaction[];
  role: ShipRole[];
  abbreviation: string;
  pilot?: string;
  url?: string;
};
