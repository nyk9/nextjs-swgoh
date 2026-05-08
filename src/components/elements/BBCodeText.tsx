/**
 * Comlink から得られる BBCode 風マークアップをそのまま受け取り、
 * React ノードとして描画するコンポーネント。
 *
 * 対応する記法:
 * - [b]...[/b]                      → <strong>
 * - [i]...[/i]                      → <em>
 * - [c][HEXHEX]...[-][/c]           → <span style={{ color: "#HEXHEX" }}>
 * - リテラルの "\n" / 改行 / "\r"   → <br />
 * - 単独の [c] / [/c] / [-]         → 除去
 * - 未知タグ                         → そのままテキストとして残す（壊れない優先）
 *
 * Server Component として使えるよう "use client" は付けない。
 */

import type { ReactElement } from "react";
import { Fragment } from "react";

export type BBCodeNode =
  | { type: "text"; content: string }
  | { type: "br" }
  | { type: "bold"; children: BBCodeNode[] }
  | { type: "italic"; children: BBCodeNode[] }
  | { type: "colored"; color: string; children: BBCodeNode[] };

type Props = {
  text: string;
  className?: string;
};

const COLOR_OPEN_RE = /^\[c\]\[([0-9A-Fa-f]{6})\]/;
const COLOR_CLOSE = "[-][/c]";
const BOLD_OPEN = "[b]";
const BOLD_CLOSE = "[/b]";
const ITALIC_OPEN = "[i]";
const ITALIC_CLOSE = "[/i]";
const NEWLINE_LITERAL = "\\n";

/**
 * 入力 BBCode 文字列をノード列に分解する。
 * パーサは「最も近い対応終了タグ」を素直に探す再帰下降。
 * 未知タグや対応終了タグが見つからない場合は、その分テキストとして読み進める。
 */
export function parseBBCode(text: string): BBCodeNode[] {
  if (!text) return [];

  const result: BBCodeNode[] = [];
  let buffer = "";

  const flushBuffer = (): void => {
    if (buffer.length === 0) return;
    result.push({ type: "text", content: buffer });
    buffer = "";
  };

  let i = 0;
  while (i < text.length) {
    // リテラル "\n"
    if (text.startsWith(NEWLINE_LITERAL, i)) {
      flushBuffer();
      result.push({ type: "br" });
      i += NEWLINE_LITERAL.length;
      continue;
    }

    // 実改行
    const ch = text[i];
    if (ch === "\n" || ch === "\r") {
      flushBuffer();
      result.push({ type: "br" });
      i += 1;
      // \r\n を 1 個の br として扱う
      if (ch === "\r" && text[i] === "\n") i += 1;
      continue;
    }

    // [b]...[/b]
    if (text.startsWith(BOLD_OPEN, i)) {
      const closeIdx = text.indexOf(BOLD_CLOSE, i + BOLD_OPEN.length);
      if (closeIdx !== -1) {
        flushBuffer();
        const inner = text.slice(i + BOLD_OPEN.length, closeIdx);
        result.push({ type: "bold", children: parseBBCode(inner) });
        i = closeIdx + BOLD_CLOSE.length;
        continue;
      }
    }

    // [i]...[/i]
    if (text.startsWith(ITALIC_OPEN, i)) {
      const closeIdx = text.indexOf(ITALIC_CLOSE, i + ITALIC_OPEN.length);
      if (closeIdx !== -1) {
        flushBuffer();
        const inner = text.slice(i + ITALIC_OPEN.length, closeIdx);
        result.push({ type: "italic", children: parseBBCode(inner) });
        i = closeIdx + ITALIC_CLOSE.length;
        continue;
      }
    }

    // [c][HEXHEX]...[-][/c]
    const rest = text.slice(i);
    const colorMatch = rest.match(COLOR_OPEN_RE);
    if (colorMatch) {
      const openLen = colorMatch[0].length;
      const closeIdx = text.indexOf(COLOR_CLOSE, i + openLen);
      if (closeIdx !== -1) {
        flushBuffer();
        const inner = text.slice(i + openLen, closeIdx);
        const hex = colorMatch[1].toUpperCase();
        result.push({
          type: "colored",
          color: `#${hex}`,
          children: parseBBCode(inner),
        });
        i = closeIdx + COLOR_CLOSE.length;
        continue;
      }
    }

    // 残留 [c] / [/c] / [-]（対応タグが欠落しているケース）は除去
    if (text.startsWith("[c]", i)) {
      i += 3;
      continue;
    }
    if (text.startsWith("[/c]", i)) {
      i += 4;
      continue;
    }
    if (text.startsWith("[-]", i)) {
      i += 3;
      continue;
    }

    // 上記に該当しない: 1 文字進める（未知タグもテキスト扱いで通す）
    buffer += ch;
    i += 1;
  }

  flushBuffer();
  return result;
}

function renderNodes(nodes: BBCodeNode[]): ReactElement {
  return (
    <>
      {nodes.map((node, idx) => (
        <Fragment key={idx}>{renderNode(node)}</Fragment>
      ))}
    </>
  );
}

function renderNode(node: BBCodeNode): ReactElement | string {
  switch (node.type) {
    case "text":
      return node.content;
    case "br":
      return <br />;
    case "bold":
      return <strong>{renderNodes(node.children)}</strong>;
    case "italic":
      return <em>{renderNodes(node.children)}</em>;
    case "colored":
      return (
        <span style={{ color: node.color }}>{renderNodes(node.children)}</span>
      );
  }
}

export function BBCodeText({ text, className }: Props): ReactElement {
  const nodes = parseBBCode(text);
  return <span className={className}>{renderNodes(nodes)}</span>;
}
