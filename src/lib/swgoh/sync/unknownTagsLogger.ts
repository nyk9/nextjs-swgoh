/**
 * sync-units 実行中に発生した「サイト側 closed union に当てはめられなかった値」を
 * 集計し、最後に `docs/data-sync/unknown-tags.md` を書き出す。
 *
 * 集計対象:
 *  - Unknown category IDs ... `Property` union に当てはまらなかった categoryId
 *  - Skills with no matched tags ... extractCustomTags で 0 件だったスキル
 *  - Unknown ability types ... abilityType 判定が `通常スキル` フォールバックになったスキル
 */

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

export interface UnknownSkillEntry {
  characterBaseId: string;
  abilityName: string;
}

export class UnknownTagsLogger {
  /** categoryId -> 出現したキャラ数 */
  private readonly unknownCategories = new Map<string, number>();
  private readonly skillsWithNoTags: UnknownSkillEntry[] = [];
  private readonly unknownAbilityTypes: UnknownSkillEntry[] = [];

  recordUnknownCategory(categoryId: string): void {
    this.unknownCategories.set(
      categoryId,
      (this.unknownCategories.get(categoryId) ?? 0) + 1,
    );
  }

  recordSkillWithNoTags(entry: UnknownSkillEntry): void {
    this.skillsWithNoTags.push(entry);
  }

  recordUnknownAbilityType(entry: UnknownSkillEntry): void {
    this.unknownAbilityTypes.push(entry);
  }

  get unknownCategoryCount(): number {
    return this.unknownCategories.size;
  }

  get skillsWithNoTagsCount(): number {
    return this.skillsWithNoTags.length;
  }

  get unknownAbilityTypeCount(): number {
    return this.unknownAbilityTypes.length;
  }

  async writeMarkdown(outputPath: string): Promise<void> {
    await mkdir(path.dirname(outputPath), { recursive: true });

    const lines: string[] = [];
    lines.push("# Unknown tags from sync-units");
    lines.push("");
    lines.push(
      "scripts/sync-units.ts 実行時に閉集合（Property / Skills / ability_type）に",
    );
    lines.push("当てはまらなかった項目の自動生成レポート。");
    lines.push("");
    lines.push("再生成: `bun run sync:units`");
    lines.push("");

    // 1. Unknown category IDs
    lines.push("## Unknown category IDs");
    lines.push("");
    if (this.unknownCategories.size === 0) {
      lines.push("（なし）");
    } else {
      lines.push("| categoryId | 出現キャラ数 |");
      lines.push("| --- | ---: |");
      const sorted = [...this.unknownCategories.entries()].sort(
        (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
      );
      for (const [id, count] of sorted) {
        lines.push(`| \`${id}\` | ${count} |`);
      }
    }
    lines.push("");

    // 2. Skills with no matched tags
    lines.push("## Skills with no matched tags");
    lines.push("");
    if (this.skillsWithNoTags.length === 0) {
      lines.push("（なし）");
    } else {
      lines.push("| character_base_id | ability |");
      lines.push("| --- | --- |");
      const sorted = [...this.skillsWithNoTags].sort((a, b) =>
        a.characterBaseId.localeCompare(b.characterBaseId),
      );
      for (const e of sorted) {
        lines.push(`| ${e.characterBaseId} | ${e.abilityName} |`);
      }
    }
    lines.push("");

    // 3. Unknown ability types
    lines.push("## Unknown ability types");
    lines.push("");
    if (this.unknownAbilityTypes.length === 0) {
      lines.push("（なし）");
    } else {
      lines.push("| character_base_id | ability |");
      lines.push("| --- | --- |");
      for (const e of this.unknownAbilityTypes) {
        lines.push(`| ${e.characterBaseId} | ${e.abilityName} |`);
      }
    }
    lines.push("");

    await writeFile(outputPath, lines.join("\n"), "utf8");
  }
}
