/**
 * `src/types/characters/characters.ts` の `Skills` union から、ランタイム文字列配列を抽出する。
 *
 * `Skills` は型でしかないため値として参照できない。重複手書きを避けるため、
 * sync スクリプト側で型定義ファイルの中身を読んで union リテラルを正規表現で拾う。
 *
 * 期待する書式:
 * ```
 * export type Skills =
 *   | "..."
 *   | "..."
 *   ...;
 * ```
 *
 * - `Property` union ブロックも別 export として分かれているので干渉しない
 * - `// ア行` のようなコメントは無視
 *
 * 失敗（0 件抽出）した場合は throw する（呼び出し側でビルドを止める）。
 */

import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Skills } from "@/types/characters/characters";

const TYPE_NAME = "Skills";
const FILE_REL = "src/types/characters/characters.ts";

/**
 * @param projectRoot リポジトリ root（package.json があるディレクトリ）
 */
export async function loadSkillVocabulary(
  projectRoot: string,
): Promise<readonly Skills[]> {
  const typesPath = path.join(projectRoot, FILE_REL);
  const source = await readFile(typesPath, "utf8");

  const re = new RegExp(
    `export\\s+type\\s+${TYPE_NAME}\\s*=([\\s\\S]*?);`,
    "m",
  );
  const block = re.exec(source);
  if (!block) {
    throw new Error(
      `[skillVocabulary] ${FILE_REL} から ${TYPE_NAME} の定義ブロックを抽出できませんでした`,
    );
  }

  const literalRe = /"([^"]+)"/g;
  const values: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = literalRe.exec(block[1])) !== null) {
    values.push(m[1]);
  }

  if (values.length === 0) {
    throw new Error(
      `[skillVocabulary] ${TYPE_NAME} の union リテラルを 1 つも抽出できませんでした`,
    );
  }

  // 文字列リテラルとして抜き出した時点で値の妥当性は型側で保証されない（あくまでファイル
  // の中身を信用する）。union と完全一致しているはずだが、isolatedModules 上の安全策として
  // as キャストにとどめる。
  return values as readonly Skills[];
}
