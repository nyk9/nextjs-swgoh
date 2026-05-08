/**
 * Comlink /metadata と /data エンドポイント用クライアント
 * ゲームデータ（units / skill / ability / category）を取得する
 *
 * ⚠️ BUILD-TIME ONLY ⚠️
 * fetchUnitsAndSkills のレスポンスは約 329 MB ある。
 * src/app/** や src/app/api/** から絶対に import しないこと。
 * 想定呼出元は scripts/sync-units.ts（GitHub Actions / 手動 bun run sync:units）のみ。
 */

import { ComlinkError, type ComlinkClientConfig } from "./client";

const DEFAULT_COMLINK_URL = process.env.COMLINK_URL ?? "http://localhost:5001";

// -------------------------------------------------------
// 公開する最小限の型定義
// -------------------------------------------------------

export interface ComlinkUnit {
  id: string;
  baseId: string;
  nameKey: string;
  descKey?: string;
  combatType: number;
  forceAlignment: number;
  categoryId: string[];
  thumbnailName: string;
  rarity?: number;
  maxRarity: number;
  skillReference?: unknown[];
  [key: string]: unknown;
}

export interface ComlinkSkill {
  id: string;
  nameKey?: string;
  descKey?: string;
  abilityReference?: string;
  [key: string]: unknown;
}

export interface ComlinkAbility {
  id: string;
  nameKey?: string;
  descKey?: string;
  [key: string]: unknown;
}

export interface ComlinkCategory {
  id: string;
  descKey?: string;
  [key: string]: unknown;
}

export interface ComlinkGameDataMetadata {
  version: string;
  localizationVersion: string;
}

export interface ComlinkGameDataSegment0 {
  units: ComlinkUnit[];
  skill: ComlinkSkill[];
  ability: ComlinkAbility[];
  category: ComlinkCategory[];
}

// -------------------------------------------------------
// /metadata
// -------------------------------------------------------

/**
 * Comlink /metadata から最新のゲームデータバージョンとローカライズバージョンを取得する
 *
 * @param config - クライアント設定（省略可）
 * @returns version（ゲームデータ）と localizationVersion
 * @throws {ComlinkError} HTTPエラーやネットワークエラーの場合
 */
export async function fetchGameDataMetadata(
  config: ComlinkClientConfig = {},
): Promise<ComlinkGameDataMetadata> {
  const baseUrl = config.baseUrl ?? DEFAULT_COMLINK_URL;
  const url = `${baseUrl}/metadata`;

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown network error";
    throw new ComlinkError(
      `Comlinkへの接続に失敗しました（/metadata）。サーバーが起動しているか確認してください。\n詳細: ${message}`,
    );
  }

  if (!response.ok) {
    const responseBody = await response.text().catch(() => "(body取得失敗)");
    throw new ComlinkError(
      "Comlinkがエラーを返しました（/metadata）。",
      response.status,
      responseBody,
    );
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new ComlinkError(
      "Comlinkの /metadata レスポンスをパースできませんでした。",
    );
  }

  const metadata = data as {
    latestGamedataVersion?: string;
    latestLocalizationBundleVersion?: string;
  };

  if (
    typeof metadata.latestGamedataVersion !== "string" ||
    typeof metadata.latestLocalizationBundleVersion !== "string"
  ) {
    throw new ComlinkError(
      "Comlinkの /metadata レスポンスに必須フィールドが含まれていませんでした。",
    );
  }

  return {
    version: metadata.latestGamedataVersion,
    localizationVersion: metadata.latestLocalizationBundleVersion,
  };
}

// -------------------------------------------------------
// /data segment 0
// -------------------------------------------------------

/**
 * Comlink /data segment 0 から units / skill / ability / category を取得する。
 * レスポンスは 329MB 級なのでメモリ消費に注意（必要キー以外は捨てて返す）。
 *
 * @param version - /metadata で取得した latestGamedataVersion
 * @param config - クライアント設定（省略可）
 * @throws {ComlinkError} HTTPエラーやネットワークエラーの場合
 */
export async function fetchUnitsAndSkills(
  version: string,
  config: ComlinkClientConfig = {},
): Promise<ComlinkGameDataSegment0> {
  const baseUrl = config.baseUrl ?? DEFAULT_COMLINK_URL;
  const url = `${baseUrl}/data`;

  const body = {
    payload: {
      version,
      includePveUnits: false,
      requestSegment: 0,
    },
    enums: false,
  };

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown network error";
    throw new ComlinkError(
      `Comlinkへの接続に失敗しました（/data）。サーバーが起動しているか確認してください。\n詳細: ${message}`,
    );
  }

  if (!response.ok) {
    const responseBody = await response.text().catch(() => "(body取得失敗)");
    throw new ComlinkError(
      `Comlinkがエラーを返しました（/data）。version: ${version}`,
      response.status,
      responseBody,
    );
  }

  let raw: unknown;
  try {
    raw = await response.json();
  } catch {
    throw new ComlinkError(
      "Comlinkの /data レスポンスをパースできませんでした。",
    );
  }

  const obj = raw as {
    units?: ComlinkUnit[];
    skill?: ComlinkSkill[];
    ability?: ComlinkAbility[];
    category?: ComlinkCategory[];
  };

  if (
    !Array.isArray(obj.units) ||
    !Array.isArray(obj.skill) ||
    !Array.isArray(obj.ability) ||
    !Array.isArray(obj.category)
  ) {
    throw new ComlinkError(
      "Comlinkの /data segment 0 に units / skill / ability / category が揃っていませんでした。",
    );
  }

  // 必要キーのみ抜き出して残りは GC に任せる
  return {
    units: obj.units,
    skill: obj.skill,
    ability: obj.ability,
    category: obj.category,
  };
}
