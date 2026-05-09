import { NextRequest, NextResponse } from "next/server";
import { fetchPlayerData } from "@/lib/swgoh/comlink/client";
import { formatPlayer, getUnitsAboveMinRelic } from "@/lib/swgoh/comlink/formatPlayer";
import { ComlinkError } from "@/lib/swgoh/comlink/client";
import { continueChat } from "@/lib/swgoh/advisor/client";
import type { ChatMessage } from "@/lib/swgoh/advisor/client";
import { createModel, DEFAULT_PROVIDER } from "@/lib/swgoh/advisor/providers";
import { buildSystemPrompt } from "@/lib/swgoh/advisor/prompt";
import type { ModeSelection, RotePurpose } from "@/lib/swgoh/advisor/prompt";
import { checkRateLimit, rateLimitHeaders } from "@/lib/rateLimit";
import { getCurrentUser } from "@/lib/auth/guards";
import prisma from "@/lib/prisma/prismaClient";

interface ChatRequestBody {
  allycode: string;
  mode: "rote" | "tw" | "gac";
  purpose?: string;
  message: string;
  history?: ChatMessage[];
  sessionId?: string;
}

const SESSION_TITLE_MAX = 80;

function deriveTitle(message: string): string {
  const single = message.replace(/\s+/g, " ").trim();
  return single.length > SESSION_TITLE_MAX
    ? `${single.slice(0, SESSION_TITLE_MAX - 1)}…`
    : single;
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { error: "ログインが必要です" },
      { status: 401 },
    );
  }

  const rl = await checkRateLimit(request);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "リクエスト制限に達しました。明日また試してください。" },
      { status: 429, headers: rateLimitHeaders(rl) },
    );
  }

  let body: ChatRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません" },
      { status: 400 },
    );
  }

  const { allycode, mode, purpose, message, history = [], sessionId } = body;

  if (!allycode || !mode || !message) {
    return NextResponse.json(
      { error: "allycode, mode, message は必須です" },
      { status: 400 },
    );
  }

  const cleanAllycode = allycode.replace(/[^0-9]/g, "");
  if (cleanAllycode.length !== 9) {
    return NextResponse.json(
      { error: "アライコードは9桁の数字で入力してください" },
      { status: 400 },
    );
  }

  // ModeSelection を組み立て
  let selection: ModeSelection;
  if (mode === "rote") {
    // 許可された RotePurpose のみを受け付け、その他はデフォルトにフォールバック
    const defaultRotePurpose: RotePurpose = "guild_rewards";
    const allowedRotePurposes: ReadonlyArray<RotePurpose> = [defaultRotePurpose];

    const requestedPurpose =
      typeof purpose === "string" ? purpose : undefined;

    const rotePurpose: RotePurpose =
      requestedPurpose &&
      (allowedRotePurposes as readonly string[]).includes(requestedPurpose)
        ? (requestedPurpose as RotePurpose)
        : defaultRotePurpose;
    selection = { mode: "rote", purpose: rotePurpose };
  } else if (mode === "tw") {
    selection = { mode: "tw" };
  } else {
    selection = { mode: "gac" };
  }

  // セッションを取得 or 新規作成（保存は AI 応答取得後に実行）
  let chatSession = sessionId
    ? await prisma.chatSession.findFirst({
        where: { id: sessionId, userId: user.id },
        select: { id: true },
      })
    : null;

  if (sessionId && !chatSession) {
    return NextResponse.json(
      { error: "指定されたセッションが見つかりません" },
      { status: 404 },
    );
  }

  try {
    // プレイヤーデータを取得・整形
    const raw = await fetchPlayerData(cleanAllycode);
    const player = formatPlayer(raw);
    const topUnits = getUnitsAboveMinRelic(player, 5);

    // 会話履歴に今回のメッセージを追加
    const fullHistory: ChatMessage[] = [
      ...history,
      { role: "user", content: message },
    ];

    // AI に送信
    const model = createModel(DEFAULT_PROVIDER);
    const system = buildSystemPrompt({
      playerName: player.name,
      allyCode: player.allyCode,
      level: player.level,
      guildName: player.guildName,
      galacticPower: player.galacticPower,
      characterGalacticPower: player.characterGalacticPower,
      shipGalacticPower: player.shipGalacticPower,
      topUnits,
      allUnitsMap: player.units,
      selection,
    });
    const reply = await continueChat(
      {
        system,
        history: fullHistory,
      },
      { model },
    );

    // DB に保存
    if (!chatSession) {
      chatSession = await prisma.chatSession.create({
        data: {
          userId: user.id,
          allycode: cleanAllycode,
          mode,
          purpose: selection.mode === "rote" ? selection.purpose : null,
          title: deriveTitle(message),
          messages: {
            create: [
              { role: "user", content: message },
              { role: "assistant", content: reply },
            ],
          },
        },
        select: { id: true },
      });
    } else {
      await prisma.chatSession.update({
        where: { id: chatSession.id },
        data: {
          updatedAt: new Date(),
          messages: {
            create: [
              { role: "user", content: message },
              { role: "assistant", content: reply },
            ],
          },
        },
      });
    }

    return NextResponse.json(
      { reply, sessionId: chatSession.id },
      { headers: rateLimitHeaders(rl) },
    );
  } catch (error) {
    if (error instanceof ComlinkError) {
      return NextResponse.json(
        { error: `プレイヤーデータ取得エラー: ${error.message}` },
        { status: 502 },
      );
    }

    console.error("Unexpected error in /api/advice/chat:", error);
    const message_err = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `チャットの処理中にエラーが発生しました: ${message_err}` },
      { status: 500 },
    );
  }
}
