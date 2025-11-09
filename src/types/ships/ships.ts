import {
  BaseUnit,
  CommonProperty,
  ShipOnlyProperty,
  Skills,
} from "@/types/common/units";

/**
 * シップ用プロパティ型
 * 共通プロパティとシップ専用プロパティを統合
 */
export type Property = CommonProperty | ShipOnlyProperty;

/**
 * シップ型
 */
export interface Ships extends BaseUnit<Property> {
  ship_base_id?: string;
}

// Skillsを再エクスポート（互換性のため）
export type { Skills };
