import { NextRequest, NextResponse } from "next/server";
import { fetchPlayerData } from "@/lib/swgoh/comlink/client";
import { formatPlayer, getUnitsAboveMinRelic } from "@/lib/swgoh/comlink/formatPlayer";
import { ComlinkError } from "@/lib/swgoh/comlink/client";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const allycode = searchParams.get("allycode");

  if (!allycode) {
    return NextResponse.json(
      { error: "allycodeパラメータが必要です" },
      { status: 400 },
    );
  }

  // アライコードの簡易バリデーション（数字のみ・9桁）
  const cleanAllycode = allycode.replace(/[^0-9]/g, "");
  if (cleanAllycode.length !== 9) {
    return NextResponse.json(
      { error: "アライコードは9桁の数字で入力してください" },
      { status: 400 },
    );
  }

  try {
    const raw = await fetchPlayerData(cleanAllycode);
    const player = formatPlayer(raw);
    const topUnits = getUnitsAboveMinRelic(player, 5);

    return NextResponse.json({
      name: player.name,
      allyCode: player.allyCode,
      level: player.level,
      guildName: player.guildName,
      galacticPower: player.galacticPower,
      characterGalacticPower: player.characterGalacticPower,
      shipGalacticPower: player.shipGalacticPower,
      topUnits,
    });
  } catch (error) {
    if (error instanceof ComlinkError) {
      const status = error.statusCode === 404 ? 404 : 502;
      return NextResponse.json(
        { error: error.message },
        { status },
      );
    }

    console.error("Unexpected error in /api/advice/player:", error);
    return NextResponse.json(
      { error: "プレイヤーデータの取得に失敗しました" },
      { status: 500 },
    );
  }
}
