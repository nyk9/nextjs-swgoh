import type { Metadata } from "next";
import Link from "next/link";
import { requireAuth } from "@/lib/auth/guards";
import prisma from "@/lib/prisma/prismaClient";

export const metadata: Metadata = {
  title: "相談履歴 | 育成アドバイザー | swgoh4jp.com",
  description: "AI 育成アドバイザーで過去に行った相談セッションの一覧。",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

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

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default async function AdvisorHistoryPage() {
  const user = await requireAuth("/advisor/history");

  const sessions = await prisma.chatSession.findMany({
    where: { userId: user.id },
    orderBy: { updatedAt: "desc" },
    take: 50,
    select: {
      id: true,
      allycode: true,
      mode: true,
      purpose: true,
      title: true,
      updatedAt: true,
    },
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[hsl(220,16%,6%)] text-white">
      <div className="relative mx-auto max-w-4xl px-4 pb-14 pt-8 md:px-6 md:pt-10">
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/advisor"
            className="inline-flex items-center gap-1 text-sm text-white/60 transition hover:text-white/90"
          >
            ← アドバイザーに戻る
          </Link>
        </div>

        <h1 className="mb-2 text-2xl font-black md:text-3xl">相談履歴</h1>
        <p className="mb-6 text-sm text-white/65">
          過去 50 件の相談セッションを表示しています。
        </p>

        {sessions.length === 0 ? (
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 text-sm text-white/70">
            まだ相談履歴がありません。
            <Link
              href="/advisor"
              className="ml-1 text-cyan-200 underline-offset-2 hover:underline"
            >
              アドバイザーを開始
            </Link>
            してください。
          </div>
        ) : (
          <ul className="space-y-3">
            {sessions.map((s) => {
              const modeLabel = MODE_LABEL[s.mode] ?? s.mode;
              const purposeLabel = s.purpose
                ? (PURPOSE_LABEL[s.purpose] ?? s.purpose)
                : null;
              return (
                <li key={s.id}>
                  <Link
                    href={`/advisor/${s.id}`}
                    className="block rounded-xl border border-white/15 bg-white/[0.03] p-4 transition hover:border-white/30 hover:bg-white/[0.06]"
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-wider text-white/60">
                      <span className="rounded-full border border-cyan-200/30 bg-cyan-300/10 px-2 py-0.5 text-cyan-100">
                        {modeLabel}
                      </span>
                      {purposeLabel && (
                        <span className="rounded-full border border-amber-200/30 bg-amber-300/10 px-2 py-0.5 text-amber-100">
                          {purposeLabel}
                        </span>
                      )}
                      <span className="text-white/40">
                        {formatDate(s.updatedAt)}
                      </span>
                      <span className="text-white/40">
                        ALLY {s.allycode}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-sm text-white/85">
                      {s.title ?? "（タイトルなし）"}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
