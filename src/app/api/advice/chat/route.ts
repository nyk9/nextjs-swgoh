import { NextRequest, NextResponse } from "next/server";
import { fetchPlayerData } from "@/lib/swgoh/comlink/client";
import { formatPlayer, getUnitsAboveMinRelic } from "@/lib/swgoh/comlink/formatPlayer";
import { ComlinkError } from "@/lib/swgoh/comlink/client";
import { continueChat } from "@/lib/swgoh/advisor/client";
import type { ChatMessage } from "@/lib/swgoh/advisor/client";
import { createModel, DEFAULT_PROVIDER } from "@/lib/swgoh/advisor/providers";
import { buildSystemPrompt } from "@/lib/swgoh/advisor/prompt";
import type { ModeSelection, RotePurpose } from "@/lib/swgoh/advisor/prompt";

interface ChatRequestBody {
  allycode: string;
  mode: "rote" | "tw" | "gac";
  purpose?: string;
  message: string;
  history?: ChatMessage[];
}

export async function POST(request: NextRequest) {
  let body: ChatRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません" },
      { status: 400 },
    );
  }

  const { allycode, mode, purpose, message, history = [] } = body;

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
    const rotePurpose = (purpose ?? "guild_rewards") as RotePurpose;
    selection = { mode: "rote", purpose: rotePurpose };
  } else if (mode === "tw") {
    selection = { mode: "tw" };
  } else {
    selection = { mode: "gac" };
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

    return NextResponse.json({ reply });
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
