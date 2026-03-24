"use client";

import { useState } from "react";
import Link from "next/link";
import AllyCodeForm from "./_components/AllyCodeForm";
import ModeSelector from "./_components/ModeSelector";
import PurposeSelector from "./_components/PurposeSelector";
import AdvisorChat from "./_components/AdvisorChat";

type GameMode = "rote" | "tw" | "gac";
type RotePurpose =
  | "platoon"
  | "combat_mission"
  | "special_mission"
  | "guild_rewards"
  | "guild_strategy";

interface PlayerInfo {
  name: string;
  allyCode: number;
  level: number;
  guildName: string;
  galacticPower: number;
  characterGalacticPower: number;
  shipGalacticPower: number;
  topUnits: Array<{
    id: string;
    gearLevel: number;
    stars: number;
    relicLevel: number;
  }>;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

type Step = "allycode" | "mode" | "purpose" | "chat";

const MODE_PURPOSE_INITIAL_MESSAGES: Record<GameMode, (purpose?: RotePurpose) => string> = {
  rote: (purpose) => {
    const purposeMessages: Record<RotePurpose, string> = {
      platoon: "私のキャラクター育成状況を踏まえて、RotE TBの小隊配置（Platoon）を最大化するための育成アドバイスをしてください。優先的に育てるべきキャラクターのトップ5と、その理由を教えてください。",
      combat_mission: "私のキャラクター育成状況を踏まえて、RotE TBの通常戦闘ミッションに貢献するための育成アドバイスをしてください。今すぐ使える編成と、今後育てるべきキャラクターを教えてください。",
      special_mission: "私のキャラクター育成状況を踏まえて、RotE TBのスペシャルミッションをクリアするための育成アドバイスをしてください。どのミッションが達成可能で、何を育てれば次のミッションが解放されるか教えてください。",
      guild_rewards: "私のキャラクター育成状況を踏まえて、RotE TBでのギルド報酬を向上させるための育成アドバイスをしてください。小隊配置・戦闘ミッション・スペシャルミッションの3軸でギルドへの貢献度を評価し、優先して育てるべきキャラクターとその理由を教えてください。",
      guild_strategy: "私のキャラクター育成状況とギルド全体のデータを踏まえて、ギルドへの貢献を最大化するための育成アドバイスをしてください。ギルド内で不足しているキャラクターと、私が優先すべき育成候補をTop5で教えてください。",
    };
    return purposeMessages[purpose ?? "guild_rewards"];
  },
  tw: () => "私のキャラクター育成状況を踏まえて、テリトリーウォー（TW）での貢献を最大化するための育成アドバイスをしてください。",
  gac: () => "私のキャラクター育成状況を踏まえて、グランドアリーナ（GAC）での戦績を上げるための育成アドバイスをしてください。",
};

export default function AdvisorPage() {
  const [step, setStep] = useState<Step>("allycode");
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);
  const [allycode, setAllycode] = useState("");
  const [mode, setMode] = useState<GameMode | null>(null);
  const [purpose, setPurpose] = useState<RotePurpose | null>(null);
  const [userNote, setUserNote] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [starting, setStarting] = useState(false);
  const [startError, setStartError] = useState<string | null>(null);

  const handlePlayerLoaded = (player: PlayerInfo, code: string) => {
    setPlayerInfo(player);
    setAllycode(code);
    setStep("mode");
  };

  const handleModeSelected = (selectedMode: GameMode) => {
    setMode(selectedMode);
    setPurpose(null);
    setStep("purpose");
  };

  const handleStart = async () => {
    if (!mode || !allycode) return;
    if (mode === "rote" && !purpose) return;

    setStarting(true);
    setStartError(null);

    const initialMessage = MODE_PURPOSE_INITIAL_MESSAGES[mode](purpose ?? undefined);

    try {
      const res = await fetch("/api/advice/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          allycode,
          mode,
          purpose: purpose ?? undefined,
          message: initialMessage,
          history: [],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStartError(data.error ?? "アドバイスの取得に失敗しました");
        return;
      }

      const initialHistory: ChatMessage[] = [
        { role: "user", content: initialMessage },
        { role: "assistant", content: data.reply },
      ];

      setChatHistory(initialHistory);
      setStep("chat");
    } catch {
      setStartError("通信エラーが発生しました。しばらくしてから再試行してください。");
    } finally {
      setStarting(false);
    }
  };

  return (
    <main className="min-h-screen bg-stone-700 p-4">
      <div className="max-w-3xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-6">
          <Link href="/" className="text-stone-400 hover:text-stone-200 text-sm">
            &larr; トップに戻る
          </Link>
          <h1 className="text-3xl font-bold text-amber-400 mt-2">
            育成アドバイザー
          </h1>
          <p className="text-stone-300 mt-1">
            SWGoH AI アドバイザー - キャラクター育成のアドバイスを提供します
          </p>
        </div>

        {/* ステップ表示 */}
        <div className="flex items-center space-x-2 mb-6 text-sm">
          {(["allycode", "mode", "purpose", "chat"] as Step[]).map((s, i) => {
            const labels: Record<Step, string> = {
              allycode: "1. アライコード",
              mode: "2. モード",
              purpose: "3. 目的",
              chat: "4. チャット",
            };
            const isDone = ["allycode", "mode", "purpose", "chat"].indexOf(step) > i;
            const isCurrent = step === s;
            return (
              <span
                key={s}
                className={`px-2 py-1 rounded text-xs font-medium ${
                  isCurrent
                    ? "bg-amber-600 text-white"
                    : isDone
                    ? "bg-stone-600 text-amber-300"
                    : "bg-stone-800 text-stone-500"
                }`}
              >
                {labels[s]}
              </span>
            );
          })}
        </div>

        {/* プレイヤー情報表示 */}
        {playerInfo && step !== "allycode" && (
          <div className="bg-stone-800 rounded-lg p-4 border border-stone-600 mb-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-amber-300 font-semibold text-lg">{playerInfo.name}</p>
                <p className="text-stone-400 text-sm">
                  Lv.{playerInfo.level} | {playerInfo.guildName || "ギルド未加入"} | GP: {playerInfo.galacticPower.toLocaleString("ja-JP")}
                </p>
                <p className="text-stone-500 text-xs mt-1">
                  キャラ: {playerInfo.characterGalacticPower.toLocaleString("ja-JP")} / 艦隊: {playerInfo.shipGalacticPower.toLocaleString("ja-JP")}
                </p>
                <p className="text-stone-500 text-xs">
                  R5以上キャラ: {playerInfo.topUnits.length}体
                </p>
              </div>
              {step !== "chat" && (
                <button
                  onClick={() => {
                    setPlayerInfo(null);
                    setMode(null);
                    setPurpose(null);
                    setUserNote("");
                    setChatHistory([]);
                    setStep("allycode");
                  }}
                  className="text-xs text-stone-400 hover:text-stone-200 underline"
                >
                  変更
                </button>
              )}
            </div>
          </div>
        )}

        {/* ステップコンテンツ */}
        <div className="space-y-4">
          {step === "allycode" && (
            <AllyCodeForm onPlayerLoaded={handlePlayerLoaded} />
          )}

          {step === "mode" && (
            <ModeSelector selected={mode} onSelect={handleModeSelected} />
          )}

          {step === "purpose" && mode && (
            <>
              {startError && (
                <div className="bg-red-900/50 border border-red-600 text-red-300 px-4 py-3 rounded-lg text-sm">
                  {startError}
                </div>
              )}
              <PurposeSelector
                mode={mode}
                selectedPurpose={purpose}
                onSelectPurpose={setPurpose}
                userNote={userNote}
                onNoteChange={setUserNote}
                onStart={handleStart}
                starting={starting}
              />
              <button
                onClick={() => setStep("mode")}
                className="text-sm text-stone-400 hover:text-stone-200 underline"
              >
                &larr; モード選択に戻る
              </button>
            </>
          )}

          {step === "chat" && mode && (
            <>
              <div className="bg-stone-800 rounded-lg p-3 border border-stone-600 text-sm text-stone-300">
                <span className="text-amber-400 font-medium">モード: </span>
                {mode === "rote" ? "RotE TB" : mode === "tw" ? "TW" : "GAC"}
                {purpose && (
                  <>
                    <span className="mx-2 text-stone-500">|</span>
                    <span className="text-amber-400 font-medium">目的: </span>
                    {purpose === "platoon" && "小隊配置の最大化"}
                    {purpose === "combat_mission" && "通常戦闘ミッション貢献"}
                    {purpose === "special_mission" && "スペシャルミッションクリア"}
                    {purpose === "guild_rewards" && "ギルド報酬の向上"}
                    {purpose === "guild_strategy" && "ギルド戦略"}
                  </>
                )}
              </div>
              <AdvisorChat
                allycode={allycode}
                mode={mode}
                purpose={purpose}
                initialMessage=""
                initialHistory={chatHistory}
              />
              <button
                onClick={() => {
                  setMode(null);
                  setPurpose(null);
                  setUserNote("");
                  setChatHistory([]);
                  setStartError(null);
                  setStep("mode");
                }}
                className="text-sm text-stone-400 hover:text-stone-200 underline"
              >
                &larr; モード選択に戻る（新しい相談を始める）
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
