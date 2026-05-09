/**
 * Comlink /localization エンドポイント用クライアント
 * 日本語ロケール（Loc_JPN_JP.txt）の生テキストを取得する
 */

import { ComlinkError, type ComlinkClientConfig } from "./client";
import { normalizeBaseUrl } from "./url";

const DEFAULT_COMLINK_URL = process.env.COMLINK_URL ?? "http://localhost:5001";

const JPN_LOCALIZATION_KEY = "Loc_JPN_JP.txt";

/**
 * Comlink /localization から日本語ロケール（KEY|VALUE 改行区切り）を取得する
 *
 * @param localizationVersion - /metadata で取得した latestLocalizationBundleVersion
 * @param config - クライアント設定（省略可）
 * @returns Loc_JPN_JP.txt の生テキスト
 * @throws {ComlinkError} HTTPエラー、ネットワークエラー、JPN ロケール欠落の場合
 */
export async function fetchJapaneseLocalization(
  localizationVersion: string,
  config: ComlinkClientConfig = {},
): Promise<string> {
  const baseUrl = normalizeBaseUrl(config.baseUrl ?? DEFAULT_COMLINK_URL);
  const url = `${baseUrl}/localization`;

  const body = {
    unzip: true,
    payload: { id: localizationVersion },
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
      `Comlinkへの接続に失敗しました（/localization）。サーバーが起動しているか確認してください。\n詳細: ${message}`,
    );
  }

  if (!response.ok) {
    const responseBody = await response.text().catch(() => "(body取得失敗)");
    throw new ComlinkError(
      `Comlinkがエラーを返しました（/localization）。localizationVersion: ${localizationVersion}`,
      response.status,
      responseBody,
    );
  }

  let raw: unknown;
  try {
    raw = await response.json();
  } catch {
    throw new ComlinkError(
      "Comlinkの /localization レスポンスをパースできませんでした。",
    );
  }

  const bundle = raw as Record<string, unknown>;
  const jpn = bundle[JPN_LOCALIZATION_KEY];
  if (typeof jpn !== "string") {
    throw new ComlinkError(
      "JPN ロケール（Loc_JPN_JP.txt）がレスポンスに含まれていませんでした。",
    );
  }

  return jpn;
}
