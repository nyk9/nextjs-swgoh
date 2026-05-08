"use client";

import Link from "next/link";
import { useState } from "react";
import AdvisorChat from "../../_components/AdvisorChat";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const MODE_LABEL: Record<string, string> = {
  rote: "RotE TB",
  tw: "TW",
  gac: "GAC",
};

const PURPOSE_LABEL: Record<string, string> = {
  platoon: "小隊配置",
  combat_mission: "戦闘ミッション",
  special_mission: "スペシャルミッション",
  guild_rewards: "ギルド報酬",
  guild_strategy: "ギルド戦略",
};

export default function AdvisorSessionClient({
  sessionId: initialSessionId,
  allycode,
  mode,
  purpose,
  title,
  initialHistory,
}: {
  sessionId: string;
  allycode: string;
  mode: "rote" | "tw" | "gac";
  purpose: string | null;
  title: string | null;
  initialHistory: ChatMessage[];
}) {
  const [sessionId, setSessionId] = useState<string>(initialSessionId);
  const modeLabel = MODE_LABEL[mode] ?? mode;
  const purposeLabel = purpose ? (PURPOSE_LABEL[purpose] ?? purpose) : null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[hsl(220,16%,6%)] text-white">
      <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-8 md:px-6 md:pt-10">
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/advisor/history"
            className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-white/90"
          >
            ← 履歴一覧
          </Link>
          <Link
            href="/advisor"
            className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-white/90"
          >
            新しい相談を始める →
          </Link>
        </div>

        <h1 className="mb-2 text-xl font-black md:text-2xl">
          {title ?? "相談セッション"}
        </h1>

        <div className="mb-5 flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-wider text-white/60">
          <span className="rounded-full border border-cyan-200/30 bg-cyan-300/10 px-2 py-0.5 text-cyan-100">
            {modeLabel}
          </span>
          {purposeLabel && (
            <span className="rounded-full border border-amber-200/30 bg-amber-300/10 px-2 py-0.5 text-amber-100">
              {purposeLabel}
            </span>
          )}
          <span className="text-white/40">ALLY {allycode}</span>
        </div>

        <AdvisorChat
          allycode={allycode}
          mode={mode}
          purpose={purpose}
          initialMessage=""
          initialHistory={initialHistory}
          sessionId={sessionId}
          onSessionIdChange={setSessionId}
        />
      </div>
    </main>
  );
}
