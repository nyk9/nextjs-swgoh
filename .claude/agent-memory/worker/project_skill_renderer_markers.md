---
name: skill description renderer (BBCode raw)
description: characterSkills は description_jp の Comlink BBCode を BBCodeText でレンダリングする。レガシーの `*$#+` 単一文字マーカー時代の自前パーサは Step 4 で全廃した。
type: project
---

`src/components/elements/characterSkills/characterSkills.tsx` のレンダリング方針（Step 4 / 2026-04-26 完了）:

- description_jp は Comlink JPN locale の **BBCode raw text**（`[c][HEXHEX]...[-][/c]`, `[b]...[/b]`, リテラル `\n`）を保存している
- 表示は `src/components/elements/BBCodeText.tsx` がフルカバー
- 旧データ時代の単一文字マーカー（`*foo*` 黄色 / `#foo#` オレンジ / `$foo$` 太字 / `+foo+` 薄水色 / `>` 改行）を split で再帰処理する 200 行の自前パーサは削除済み
- Step 4 以降に generated/abilities.json へ自前マーカーを書き戻すと表示が壊れる

**Why:** Step 3 で description_jp は BBCode raw 保存に切り替わった（feedback `bbcode_raw_storage` 参照）。BBCodeText は `[c][HEX]` / `[b]` / `\n` / リテラル `\\n` を表現できるので、自前マーカーは不要になった。
**How to apply:** description 表示を変更するときは BBCodeText API（parseBBCode + renderNodes）を拡張する。新しい色味を出したい場合は Comlink 側で `[c][HEX]...[-][/c]` を吐かせるか、別途 markdown converter を sync 側に追加する（ページ側で再パースしない）。
