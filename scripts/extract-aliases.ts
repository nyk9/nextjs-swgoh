/**
 * 既存 src/data/characters.ts から abbreviation と url の slug 部分を
 * src/data/aliases.ts に抽出する初回マイグレーションスクリプト。
 *
 * 実行: bun run extract-aliases
 */

import { writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname!, "..");
const CHARACTERS_PATH = path.join(ROOT, "src/data/characters.ts");
const OUTPUT_PATH = path.join(ROOT, "src/data/aliases.ts");
const URL_PREFIX = "/characters/";

type CharLike = {
  name: string;
  character_base_id?: string;
  abbreviation?: string;
  url?: string;
};

type AliasEntry = {
  abbreviation?: string;
  url_slug?: string;
};

async function main(): Promise<void> {
  const mod = (await import(CHARACTERS_PATH)) as { default: CharLike[] };
  const characters = mod.default;

  if (!Array.isArray(characters)) {
    throw new Error("characters.ts default export が配列ではありませんでした");
  }

  const aliases: Record<string, AliasEntry> = {};
  let skipped = 0;

  for (const c of characters) {
    if (!c.character_base_id) {
      console.warn(
        `[warn] character_base_id がないエントリをスキップ: name="${c.name}"`,
      );
      skipped++;
      continue;
    }

    const baseId = c.character_base_id.trim();
    if (baseId !== c.character_base_id) {
      console.warn(
        `[warn] character_base_id に前後空白があったため trim: "${c.character_base_id}" -> "${baseId}" (name="${c.name}")`,
      );
    }

    const entry: AliasEntry = {};
    if (typeof c.abbreviation === "string" && c.abbreviation.length > 0) {
      entry.abbreviation = c.abbreviation;
    }
    if (typeof c.url === "string" && c.url.startsWith(URL_PREFIX)) {
      const slug = c.url.slice(URL_PREFIX.length);
      if (slug.length > 0) entry.url_slug = slug;
    }

    if (aliases[baseId]) {
      console.warn(
        `[warn] baseId 重複を上書き: "${baseId}" (name="${c.name}")`,
      );
    }

    aliases[baseId] = entry;
  }

  const sortedKeys = Object.keys(aliases).sort((a, b) => a.localeCompare(b));

  const lines: string[] = [];
  lines.push("// THIS FILE IS PARTIALLY GENERATED.");
  lines.push("// 初回マイグレーション: scripts/extract-aliases.ts で生成");
  lines.push(
    "// 以後は新キャラ追加時に手書きで追加（abbreviation / url_slug は検索 UX のため）",
  );
  lines.push("");
  lines.push("export type AliasEntry = {");
  lines.push("  abbreviation?: string;");
  lines.push("  url_slug?: string;");
  lines.push("};");
  lines.push("");
  lines.push("export const ALIASES: Record<string, AliasEntry> = {");

  // 数字始まり（例: 50RT）など JS identifier にできない baseId が混じるため、
  // キーは常に文字列リテラルとして出力する
  const isSafeIdentifier = (s: string) => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(s);

  for (const key of sortedKeys) {
    const entry = aliases[key];
    const renderedKey = isSafeIdentifier(key) ? key : JSON.stringify(key);
    lines.push(`  ${renderedKey}: {`);
    if (entry.abbreviation !== undefined) {
      lines.push(`    abbreviation: ${JSON.stringify(entry.abbreviation)},`);
    }
    if (entry.url_slug !== undefined) {
      lines.push(`    url_slug: ${JSON.stringify(entry.url_slug)},`);
    }
    lines.push("  },");
  }

  lines.push("};");
  lines.push("");

  await writeFile(OUTPUT_PATH, lines.join("\n"), "utf8");

  console.log(
    `[done] ${OUTPUT_PATH} に ${sortedKeys.length} 件出力（スキップ ${skipped} 件）`,
  );
}

main().catch((err) => {
  console.error("[error]", err);
  process.exit(1);
});
