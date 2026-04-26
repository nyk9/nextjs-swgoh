---
name: Comlink /data segment 0 quirks
description: 329MB の /data segment 0 を扱う際の落とし穴メモ。units / skill / ability / category の関係。
type: project
---

Comlink (`http://localhost:5001`, GAME_VERSION 0.39.0 時点) の `/data` segment 0 から拾える生データの癖:

- `units` は同じ baseId につき rarity 1〜maxRarity の **複数 entry** が並ぶ（観測上 7 つ）。サイト用には `combatType=1 && obtainable && rarity===maxRarity` でユニーク化する（キャラ 430、艦船 75）。
- `skill.id` のプレフィックスでスキル種別が判定可能:
  - `basicskill_` / `specialskill_` / `uniqueskill_` / `leaderskill_` / `hardwareskill_` / `contractskill_`（および 1 件だけ大文字始まり `Contractskill_`）。
- アルティメットスキルは skill 経由では取れない。`unit.limitBreakRef[].abilityId` が `ultimateability_*` なら ult。
- 付与スキル（grantedability_*）は unit の skillReference に **存在しない** ことが多く、leader skill の effectGraph 経由でしか辿れない。Step 3 では諦めて拾わない。
- `ability.icon` が `tex.abilityui_*` で始まれば画像パスは `/abilityui/...png`、`tex.ability_*` なら `/ability/...png`。
- 英語名は `Loc_ENG_US.txt` を別途取得しないと取れない。Step 3 は JPN のみ取得しているため `name_eng` は nameKey からの自動整形 (`BASICABILITY_TRIPLEZERO_NAME` → `Basicability Triplezero`) になっている。完全な英語名が必要なら ENG locale も取得する経路を追加する必要あり。
- 既存 `src/data/characters.ts` には ` LOGRAY`（先頭スペース）・`DEATHTROOPERPERIDIEA`（typo、正は `DEATHTROOPERPERIDEA`）など軽微な汚れがある。生成データを正として進めて良い。

**Why:** Step 4 以降でページ統合する worker や、ENG locale 追加・grantedability 抽出に挑戦する将来の worker が同じ調査をやり直す手間を省くため。
**How to apply:** sync 系コードを変更するとき、上記の前提（ユニーク化条件・id プレフィックス・icon フォルダ判定・ult の特殊経路）を尊重する。新たなプレフィックスを観測したら abilityTypeMapping の SKILL_ID_PREFIXES に追加する。
