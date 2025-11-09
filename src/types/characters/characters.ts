import {
  BaseUnit,
  CommonProperty,
  CharacterOnlyProperty,
  Skills,
} from "@/types/common/units";

/**
 * キャラクター用プロパティ型
 * 共通プロパティとキャラクター専用プロパティを統合
 */
export type Property = CommonProperty | CharacterOnlyProperty;

/**
 * キャラクター型
 */
export interface Characters extends BaseUnit<Property> {
  character_base_id?: string;
}

// Skillsを再エクスポート（互換性のため）
export type { Skills };
