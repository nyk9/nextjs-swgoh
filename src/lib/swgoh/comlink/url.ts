/**
 * baseUrl の末尾スラッシュを取り除く。
 * `https://x/` + `/player` を `https://x//player` にしないためのガード。
 */
export function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, "");
}
