/**
 * Comlink API クライアント
 * ComlinkへのHTTPリクエストを担当する
 */

import type { ComlinkPlayerResponse, ComlinkGuildResponse } from "./types";

// -------------------------------------------------------
// 設定
// -------------------------------------------------------

const DEFAULT_COMLINK_URL = process.env.COMLINK_URL ?? "http://localhost:5001";

export interface ComlinkClientConfig {
  /** ComlinkのベースURL（デフォルト: COMLINK_URL env var or http://localhost:5001） */
  baseUrl?: string;
}

// -------------------------------------------------------
// エラー型
// -------------------------------------------------------

export class ComlinkError extends Error {
  constructor(
    message: string,
    public readonly statusCode?: number,
    public readonly responseBody?: string,
  ) {
    super(message);
    this.name = "ComlinkError";
  }
}

// -------------------------------------------------------
// /player リクエスト型
// -------------------------------------------------------

interface PlayerRequestBody {
  payload: {
    allyCode?: string;
    playerId?: string;
  };
  enums: boolean;
}

interface GuildRequestBody {
  payload: {
    guildId: string;
    includeRecentGuildActivityInfo: boolean;
  };
  enums: boolean;
}

// -------------------------------------------------------
// クライアント関数
// -------------------------------------------------------

/**
 * Comlinkから指定したallyCodeのプレイヤーデータを取得する
 *
 * @param allyCode - プレイヤーのアライコード（数字9桁の文字列）
 * @param config - クライアント設定（省略可）
 * @returns 生のComlinkプレイヤーレスポンス
 * @throws {ComlinkError} HTTPエラーやネットワークエラーの場合
 */
export async function fetchPlayerData(
  allyCode: string,
  config: ComlinkClientConfig = {},
): Promise<ComlinkPlayerResponse> {
  const baseUrl = config.baseUrl ?? DEFAULT_COMLINK_URL;
  const url = `${baseUrl}/player`;

  const body: PlayerRequestBody = {
    payload: {
      allyCode,
    },
    enums: false,
  };

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown network error";
    throw new ComlinkError(
      `Comlinkへの接続に失敗しました。サーバーが起動しているか確認してください。\n詳細: ${message}`,
    );
  }

  if (!response.ok) {
    const responseBody = await response.text().catch(() => "(body取得失敗)");
    throw new ComlinkError(
      `Comlinkがエラーを返しました。allyCode: ${allyCode}`,
      response.status,
      responseBody,
    );
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new ComlinkError("Comlinkのレスポンスをパースできませんでした。");
  }

  // 型アサーション：Comlinkの仕様に基づき、型の整合性はformatPlayer.tsで保証する
  return data as ComlinkPlayerResponse;
}

/**
 * Comlinkから指定したplayerIdのプレイヤーデータを取得する（ギルドメンバー一括取得用）
 */
export async function fetchPlayerDataById(
  playerId: string,
  config: ComlinkClientConfig = {},
): Promise<ComlinkPlayerResponse> {
  const baseUrl = config.baseUrl ?? DEFAULT_COMLINK_URL;
  const url = `${baseUrl}/player`;

  const body: PlayerRequestBody = { payload: { playerId }, enums: false };

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown network error";
    throw new ComlinkError(
      `Comlinkへの接続に失敗しました。\n詳細: ${message}`,
    );
  }

  if (!response.ok) {
    const responseBody = await response.text().catch(() => "(body取得失敗)");
    throw new ComlinkError(
      `Comlinkがエラーを返しました。playerId: ${playerId}`,
      response.status,
      responseBody,
    );
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new ComlinkError("Comlinkのレスポンスをパースできませんでした。");
  }

  return data as ComlinkPlayerResponse;
}

/**
 * Comlinkから指定したguildIdのギルドデータを取得する
 *
 * @param guildId - ギルドID（/player レスポンスの guildId フィールド）
 * @param config - クライアント設定（省略可）
 * @returns 生のComlinkギルドレスポンス
 * @throws {ComlinkError} HTTPエラーやネットワークエラーの場合
 */
export async function fetchGuildData(
  guildId: string,
  config: ComlinkClientConfig = {},
): Promise<ComlinkGuildResponse> {
  const baseUrl = config.baseUrl ?? DEFAULT_COMLINK_URL;
  const url = `${baseUrl}/guild`;

  const body: GuildRequestBody = {
    payload: {
      guildId,
      includeRecentGuildActivityInfo: false,
    },
    enums: false,
  };

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown network error";
    throw new ComlinkError(
      `Comlinkへの接続に失敗しました。サーバーが起動しているか確認してください。\n詳細: ${message}`,
    );
  }

  if (!response.ok) {
    const responseBody = await response.text().catch(() => "(body取得失敗)");
    throw new ComlinkError(
      `Comlinkがエラーを返しました（/guild）。guildId: ${guildId}`,
      response.status,
      responseBody,
    );
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new ComlinkError("Comlinkの /guild レスポンスをパースできませんでした。");
  }

  // /guild レスポンスは { guild: { ... } } という構造
  const guildData = (data as { guild: ComlinkGuildResponse }).guild;
  return guildData;
}
