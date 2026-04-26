---
name: skill description marker convention
description: characterAbilities の description_jp が使う色マーカーは「単一文字」。コメントのドキュメントは古い。
type: project
---

`src/components/elements/characterSkills/characterSkills.tsx` がスキル説明文を描画する際のマーカー仕様（実装が真実）:

- `>` （単一）→ 改行
- `*foo*` → 黄色（キーワード強調）
- `#foo#` → オレンジ（アルティメットチャージ）
- `$foo$` → 太字+大きめ（オミクロン条件見出し）
- `+foo+` → 薄水色（役割など）

`src/data/characterAbilities.ts` の冒頭コメントは「`**` `##` `$$` `++` 等の **2 文字** マーカー」を謳っているが、レンダラ実装と既存データはどちらも **単一文字**。古い手書きコメントなので信用しない。

**Why:** Comlink からの BBCode (`[c][F0FF23]...[-][/c]`, `[b]...[/b]`, `\n`) を変換するときに 2 文字マーカーを使うと表示崩れする。
**How to apply:** sync スクリプトの markdownConverter / 説明文を扱う新規コードでは必ず単一文字マーカーで出力すること。
