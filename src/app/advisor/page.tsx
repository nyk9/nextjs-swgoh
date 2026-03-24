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

const STEP_LABELS: Record<Step, string> = {
  allycode: "1. アライコード",
  mode: "2. モード",
  purpose: "3. 目的",
  chat: "4. チャット",
};

const STEPS: Step[] = ["allycode", "mode", "purpose", "chat"];

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

  const currentIndex = STEPS.indexOf(step);

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-sm text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] transition-colors"
        >
          ← トップ
        </Link>

        <h1 className="text-xl font-bold text-white mt-6 mb-1">育成アドバイザー</h1>
        <p className="text-sm text-[hsl(220,10%,52%)] mb-6">
          アライコードからキャラ育成の優先度を診断します
        </p>

        {/* Steps */}
        <div className="flex gap-1 mb-6">
          {STEPS.map((s, i) => {
            const isDone = currentIndex > i;
            const isCurrent = step === s;
            return (
              <button
                key={s}
                onClick={() => { if (isDone) setStep(s); }}
                disabled={!isDone && !isCurrent}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  isCurrent
                    ? "bg-[hsl(220,14%,82%)] text-[hsl(220,16%,6%)] font-medium"
                    : isDone
                    ? "bg-[hsl(220,14%,14%)] text-[hsl(220,14%,82%)] cursor-pointer hover:bg-[hsl(220,14%,18%)]"
                    : "text-[hsl(220,8%,36%)] cursor-not-allowed"
                }`}
              >
                {STEP_LABELS[s]}
              </button>
            );
          })}
        </div>

        {/* Player info */}
        {playerInfo && step !== "allycode" && (
          <div className="rounded border border-[hsl(220,12%,14%)] bg-[hsl(220,16%,10%)] p-4 mb-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white font-medium">{playerInfo.name}</p>
                <p className="text-xs text-[hsl(220,10%,52%)] mt-0.5">
                  Lv.{playerInfo.level} · {playerInfo.guildName || "ギルド未加入"} · GP {playerInfo.galacticPower.toLocaleString("ja-JP")}
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
                  className="text-xs text-[hsl(220,10%,52%)] hover:text-white transition-colors"
                >
                  変更
                </button>
              )}
            </div>
          </div>
        )}

        {/* Step content */}
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
                <div className="border-l-2 border-[hsl(0,62%,54%)] pl-3 text-sm text-[hsl(0,62%,64%)]">
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
                className="text-sm text-[hsl(220,10%,52%)] hover:text-white transition-colors"
              >
                ← モード選択に戻る
              </button>
            </>
          )}

          {step === "chat" && mode && (
            <>
              <div className="text-xs text-[hsl(220,10%,52%)] border-l-2 border-[hsl(220,12%,18%)] pl-3">
                モード: {mode === "rote" ? "RotE TB" : mode === "tw" ? "TW" : "GAC"}
                {purpose && ` · 目的: ${
                  purpose === "platoon" ? "小隊配置" :
                  purpose === "combat_mission" ? "戦闘ミッション" :
                  purpose === "special_mission" ? "スペシャルミッション" :
                  purpose === "guild_rewards" ? "ギルド報酬" : "ギルド戦略"
                }`}
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
                className="text-sm text-[hsl(220,10%,52%)] hover:text-white transition-colors"
              >
                ← 新しい相談を始める
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
