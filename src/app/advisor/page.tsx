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
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-[hsl(215,16%,47%)] hover:text-[hsl(213,32%,82%)] transition-colors"
          >
            &larr; トップに戻る
          </Link>
          <h1 className="font-display text-3xl md:text-4xl tracking-wider text-[hsl(51,100%,50%)] mt-4 mb-2 title-glow-gold">
            育成アドバイザー
          </h1>
          <p className="text-[hsl(215,16%,47%)] text-sm">
            SWGoH AI アドバイザー — キャラクター育成のアドバイスを提供します
          </p>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-[hsl(51,100%,50%)]/30 via-[hsl(51,100%,50%)]/10 to-transparent" />
        </div>

        {/* ステップ表示 */}
        <div className="flex items-center space-x-1 mb-8 text-sm">
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
              <button
                key={s}
                onClick={() => {
                  if (isDone) setStep(s);
                }}
                disabled={!isDone && !isCurrent}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  isCurrent
                    ? "bg-[hsl(51,100%,50%)] text-[hsl(228,40%,8%)]"
                    : isDone
                    ? "bg-[hsl(228,28%,18%)] text-[hsl(51,100%,50%)] cursor-pointer hover:bg-[hsl(228,28%,24%)]"
                    : "bg-[hsl(228,32%,13%)] text-[hsl(215,16%,47%)] cursor-not-allowed"
                }`}
              >
                {labels[s]}
              </button>
            );
          })}
        </div>

        {/* プレイヤー情報表示 */}
        {playerInfo && step !== "allycode" && (
          <div className="rounded-xl p-4 border border-[hsl(51,100%,50%)]/20 mb-6" style={{ background: 'linear-gradient(135deg, hsl(228, 32%, 13%) 0%, hsl(40, 20%, 14%) 100%)' }}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[hsl(51,100%,50%)] font-semibold text-lg">{playerInfo.name}</p>
                <p className="text-[hsl(215,16%,47%)] text-sm">
                  Lv.{playerInfo.level} | {playerInfo.guildName || "ギルド未加入"} | GP: {playerInfo.galacticPower.toLocaleString("ja-JP")}
                </p>
                <p className="text-[hsl(215,16%,47%)] text-xs mt-1">
                  キャラ: {playerInfo.characterGalacticPower.toLocaleString("ja-JP")} / 艦隊: {playerInfo.shipGalacticPower.toLocaleString("ja-JP")}
                </p>
                <p className="text-[hsl(215,16%,47%)] text-xs">
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
                  className="text-xs text-[hsl(215,16%,47%)] hover:text-white underline"
                >
                  変更
                </button>
              )}
            </div>
          </div>
        )}

        {/* ステップコンテンツ */}
        <div className="space-y-6">
          {step === "allycode" && (
            <AllyCodeForm onPlayerLoaded={handlePlayerLoaded} />
          )}

          {step === "mode" && (
            <ModeSelector selected={mode} onSelect={handleModeSelected} />
          )}

          {step === "purpose" && mode && (
            <>
              {startError && (
                <div className="bg-[hsl(0,84%,60%)]/10 border border-[hsl(0,84%,60%)]/30 text-[hsl(0,84%,60%)] px-4 py-3 rounded-lg text-sm">
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
                className="text-sm text-[hsl(215,16%,47%)] hover:text-white underline"
              >
                &larr; モード選択に戻る
              </button>
            </>
          )}

          {step === "chat" && mode && (
            <>
              <div className="bg-[hsl(228,32%,13%)] rounded-lg p-3 border border-[hsl(228,20%,22%)] text-sm text-[hsl(213,32%,82%)]">
                <span className="text-[hsl(51,100%,50%)] font-medium">モード: </span>
                {mode === "rote" ? "RotE TB" : mode === "tw" ? "TW" : "GAC"}
                {purpose && (
                  <>
                    <span className="mx-2 text-[hsl(215,16%,47%)]">|</span>
                    <span className="text-[hsl(51,100%,50%)] font-medium">目的: </span>
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
                className="text-sm text-[hsl(215,16%,47%)] hover:text-white underline"
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
