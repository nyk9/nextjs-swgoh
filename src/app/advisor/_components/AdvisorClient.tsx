"use client";

import { useState } from "react";
import Link from "next/link";
import AllyCodeForm from "./AllyCodeForm";
import ModeSelector from "./ModeSelector";
import PurposeSelector from "./PurposeSelector";
import AdvisorChat from "./AdvisorChat";

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

const MODE_PURPOSE_INITIAL_MESSAGES: Record<
  GameMode,
  (purpose?: RotePurpose) => string
> = {
  rote: (purpose) => {
    const purposeMessages: Record<RotePurpose, string> = {
      platoon:
        "私のキャラクター育成状況を踏まえて、RotE TBの小隊配置（Platoon）を最大化するための育成アドバイスをしてください。優先的に育てるべきキャラクターのトップ5と、その理由を教えてください。",
      combat_mission:
        "私のキャラクター育成状況を踏まえて、RotE TBの通常戦闘ミッションに貢献するための育成アドバイスをしてください。今すぐ使える編成と、今後育てるべきキャラクターを教えてください。",
      special_mission:
        "私のキャラクター育成状況を踏まえて、RotE TBのスペシャルミッションをクリアするための育成アドバイスをしてください。どのミッションが達成可能で、何を育てれば次のミッションが解放されるか教えてください。",
      guild_rewards:
        "私のキャラクター育成状況を踏まえて、RotE TBでのギルド報酬を向上させるための育成アドバイスをしてください。小隊配置・戦闘ミッション・スペシャルミッションの3軸でギルドへの貢献度を評価し、優先して育てるべきキャラクターとその理由を教えてください。",
      guild_strategy:
        "私のキャラクター育成状況とギルド全体のデータを踏まえて、ギルドへの貢献を最大化するための育成アドバイスをしてください。ギルド内で不足しているキャラクターと、私が優先すべき育成候補をTop5で教えてください。",
    };
    return purposeMessages[purpose ?? "guild_rewards"];
  },
  tw: () =>
    "私のキャラクター育成状況を踏まえて、テリトリーウォー（TW）での貢献を最大化するための育成アドバイスをしてください。",
  gac: () =>
    "私のキャラクター育成状況を踏まえて、グランドアリーナ（GAC）での戦績を上げるための育成アドバイスをしてください。",
};

function StepPill({
  label,
  done,
  current,
  onClick,
}: {
  label: string;
  done: boolean;
  current: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!done && !current}
      className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-wide transition ${
        current
          ? "border-cyan-200/50 bg-cyan-300/20 text-cyan-100"
          : done
            ? "border-white/20 bg-white/[0.06] text-white/80 hover:border-white/35 hover:bg-white/[0.1]"
            : "cursor-not-allowed border-white/10 bg-white/[0.02] text-white/35"
      }`}
    >
      {label}
    </button>
  );
}

export default function AdvisorClient() {
  const [step, setStep] = useState<Step>("allycode");
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);
  const [allycode, setAllycode] = useState("");
  const [mode, setMode] = useState<GameMode | null>(null);
  const [purpose, setPurpose] = useState<RotePurpose | null>(null);
  const [userNote, setUserNote] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
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

    const initialMessage = MODE_PURPOSE_INITIAL_MESSAGES[mode](
      purpose ?? undefined,
    );

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
      setSessionId(typeof data.sessionId === "string" ? data.sessionId : null);
      setStep("chat");
    } catch {
      setStartError(
        "通信エラーが発生しました。しばらくしてから再試行してください。",
      );
    } finally {
      setStarting(false);
    }
  };

  const currentIndex = STEPS.indexOf(step);

  const modeLabel =
    mode === "rote"
      ? "RotE TB"
      : mode === "tw"
        ? "TW"
        : mode === "gac"
          ? "GAC"
          : "";

  const purposeLabel =
    purpose === "platoon"
      ? "小隊配置"
      : purpose === "combat_mission"
        ? "戦闘ミッション"
        : purpose === "special_mission"
          ? "スペシャルミッション"
          : purpose === "guild_rewards"
            ? "ギルド報酬"
            : purpose === "guild_strategy"
              ? "ギルド戦略"
              : "";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[hsl(220,16%,6%)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(55% 35% at 18% 8%, rgba(34,211,238,0.16) 0%, rgba(34,211,238,0) 70%), radial-gradient(50% 38% at 88% 18%, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0) 75%), radial-gradient(45% 32% at 60% 95%, rgba(217,70,239,0.1) 0%, rgba(217,70,239,0) 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-8 md:px-6 md:pt-10">
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-white/90"
          >
            ← トップ
          </Link>
          <Link
            href="/advisor/history"
            className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-white/90"
          >
            相談履歴 →
          </Link>
        </div>

        <section className="mb-6 grid gap-4 md:grid-cols-12">
          <article className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 backdrop-blur md:col-span-8 md:p-7">
            <p className="mb-3 inline-flex rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-bold tracking-wider text-cyan-100">
              GROWTH ADVISOR
            </p>
            <h1 className="text-2xl font-black leading-tight md:text-3xl">
              育成アドバイザー
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
              あなたのアライコードをもとに、次に育てるべきユニットと優先理由を提案します。
              RotE / TW / GACそれぞれの目的に合わせて、意思決定を高速化します。
            </p>
          </article>

          <aside className="rounded-2xl border border-white/15 bg-white/[0.03] p-5 backdrop-blur md:col-span-4 md:p-6">
            <p className="mb-3 text-xs font-semibold tracking-wider text-white/55">
              FLOW
            </p>
            <ol className="space-y-2 text-sm text-white/75">
              <li>1. アライコードを入力</li>
              <li>2. モードを選択</li>
              <li>3. 目的を設定</li>
              <li>4. AIと相談開始</li>
            </ol>
          </aside>
        </section>

        <section className="mb-5 rounded-2xl border border-white/15 bg-white/[0.03] p-4 md:p-5">
          <div className="flex flex-wrap gap-2">
            {STEPS.map((s, i) => {
              const isDone = currentIndex > i;
              const isCurrent = step === s;
              return (
                <StepPill
                  key={s}
                  label={STEP_LABELS[s]}
                  done={isDone}
                  current={isCurrent}
                  onClick={isDone ? () => setStep(s) : undefined}
                />
              );
            })}
          </div>
        </section>

        {playerInfo && step !== "allycode" && (
          <section className="mb-5 rounded-2xl border border-white/15 bg-white/[0.03] p-4 md:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-base font-bold text-white">
                  {playerInfo.name}
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Lv.{playerInfo.level} ·{" "}
                  {playerInfo.guildName || "ギルド未加入"} · GP{" "}
                  {playerInfo.galacticPower.toLocaleString("ja-JP")}
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
                    setSessionId(null);
                    setStep("allycode");
                  }}
                  className="rounded-lg border border-white/20 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:border-white/35 hover:bg-white/[0.1] hover:text-white"
                >
                  変更
                </button>
              )}
            </div>
          </section>
        )}

        <section className="rounded-2xl border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 md:p-6">
          <div className="space-y-4">
            {step === "allycode" && (
              <AllyCodeForm onPlayerLoaded={handlePlayerLoaded} />
            )}

            {step === "mode" && (
              <>
                <div className="mb-1 text-xs font-semibold tracking-wider text-white/50">
                  SELECT MODE
                </div>
                <ModeSelector selected={mode} onSelect={handleModeSelected} />
              </>
            )}

            {step === "purpose" && mode && (
              <>
                {startError && (
                  <div className="rounded-xl border border-red-300/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                    {startError}
                  </div>
                )}
                <div className="mb-1 text-xs font-semibold tracking-wider text-white/50">
                  SELECT PURPOSE
                </div>
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
                  className="text-sm text-white/60 transition hover:text-white/90"
                >
                  ← モード選択に戻る
                </button>
              </>
            )}

            {step === "chat" && mode && (
              <>
                <div className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-xs text-white/70">
                  <span className="font-semibold text-white/85">
                    現在の相談条件：
                  </span>{" "}
                  モード: {modeLabel}
                  {purposeLabel ? ` · 目的: ${purposeLabel}` : ""}
                </div>
                <AdvisorChat
                  allycode={allycode}
                  mode={mode}
                  purpose={purpose}
                  initialMessage=""
                  initialHistory={chatHistory}
                  sessionId={sessionId}
                  onSessionIdChange={setSessionId}
                />
                <button
                  onClick={() => {
                    setMode(null);
                    setPurpose(null);
                    setUserNote("");
                    setChatHistory([]);
                    setSessionId(null);
                    setStartError(null);
                    setStep("mode");
                  }}
                  className="text-sm text-white/60 transition hover:text-white/90"
                >
                  ← 新しい相談を始める
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
