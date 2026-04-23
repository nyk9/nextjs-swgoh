"use client";

import Link from "next/link";
import { useMemo } from "react";
import updates, { Updates } from "../features/mainpages/constant/update";

const NAV_ITEMS = [
  {
    href: "/characters",
    title: "キャラクター図鑑",
    desc: "全キャラを横断検索。属性・ロール・スキル理解を最短で。",
    badge: "人気",
    accent: "from-cyan-400/20 to-blue-500/20",
  },
  {
    href: "/ships",
    title: "艦隊図鑑",
    desc: "艦船を派閥・役割・パイロットで検索。艦隊編成の起点に。",
    badge: "New",
    accent: "from-emerald-400/20 to-teal-500/20",
  },
  {
    href: "/advisor",
    title: "育成アドバイザー",
    desc: "アライコードから、今やるべき育成を優先度順に提案。",
    badge: "注目",
    accent: "from-amber-300/20 to-orange-500/20",
  },
  {
    href: "/TWCounters",
    title: "TW カウンター",
    desc: "相手編成に対する実戦的な勝ち筋を素早く確認。",
    badge: "実戦",
    accent: "from-fuchsia-400/20 to-violet-500/20",
  },
] as const;

const EXT_LINKS = [
  { href: "https://swgoh.gg/", label: "swgoh.gg" },
  { href: "https://discord.gg/yX3pS2WemD", label: "Discord" },
  { href: "https://github.com/nyk9/nextjs-swgoh", label: "GitHub" },
] as const;

function UpdateCard({ item }: { item: Updates }) {
  return (
    <li className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20 hover:bg-white/[0.05]">
      <div className="mb-1 flex items-center justify-between gap-3">
        <span className="text-xs font-medium tracking-wide text-white/50">
          {item.date}
        </span>
        <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] font-semibold text-white/60">
          v{item.ver}
        </span>
      </div>
      <p className="text-sm font-semibold leading-relaxed text-white/90">
        {item.title}
      </p>
      {item.detail ? (
        <p className="mt-1 text-xs leading-relaxed text-white/60">
          {item.detail}
        </p>
      ) : null}
    </li>
  );
}

export default function Home() {
  const allUpdates: Updates[] = updates;

  const latestUpdates = useMemo(() => {
    return [...allUpdates]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, [allUpdates]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[hsl(220,16%,6%)] text-white">
      {/* Background layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 40% at 15% 10%, rgba(34,211,238,0.16) 0%, rgba(34,211,238,0) 70%), radial-gradient(45% 35% at 85% 20%, rgba(245,158,11,0.14) 0%, rgba(245,158,11,0) 75%), radial-gradient(40% 28% at 50% 90%, rgba(217,70,239,0.12) 0%, rgba(217,70,239,0) 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
        {/* Hero */}
        <section className="mb-8 grid gap-4 md:mb-10 md:grid-cols-12">
          <article className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 backdrop-blur md:col-span-8 md:p-8">
            <p className="mb-3 inline-flex items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-cyan-100">
              STAR WARS: GALAXY OF HEROES
            </p>
            <h1 className="text-2xl font-black leading-tight text-white md:text-4xl">
              銀河の英雄
              <br />
              初心者応援データベース
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
              「何を育てるべきか」「どの編成が刺さるか」を、迷わず判断できる情報ハブ。
              調べる時間を短縮して、実戦と育成の意思決定を速くします。
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/characters"
                className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-900 transition hover:translate-y-[-1px] hover:bg-slate-100"
              >
                まずはキャラを探す
              </Link>
              <Link
                href="/advisor"
                className="rounded-xl border border-white/25 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/[0.1]"
              >
                育成優先度を診断する
              </Link>
            </div>
          </article>

          <aside className="rounded-2xl border border-white/15 bg-white/[0.03] p-5 backdrop-blur md:col-span-4 md:p-6">
            <p className="mb-3 text-xs font-semibold tracking-wider text-white/55">
              QUICK ACCESS
            </p>
            <ul className="space-y-2">
              {EXT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/[0.08]"
                  >
                    <span>{l.label}</span>
                    <span className="text-xs text-white/50 transition group-hover:translate-x-0.5 group-hover:text-white/80">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        {/* Main navigation cards */}
        <section className="mb-10">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-lg font-extrabold tracking-wide text-white/95 md:text-xl">
              目的から選ぶ
            </h2>
            <span className="text-xs font-medium text-white/50">最短導線</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="group">
                <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full border border-white/20 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-white/75">
                        {item.badge}
                      </span>
                      <span className="text-sm text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white/70">
                        →
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.desc}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Update section */}
        <section className="mb-10">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-lg font-extrabold tracking-wide text-white/95 md:text-xl">
              最新アップデート
            </h2>
            <span className="text-xs font-medium text-white/50">
              鮮度の高い情報
            </span>
          </div>
          <ul className="grid gap-3 md:grid-cols-3">
            {latestUpdates.map((u) => (
              <UpdateCard key={`${u.ver}-${u.date}`} item={u} />
            ))}
          </ul>
        </section>

        {/* Bottom links */}
        <section className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/50">
          <Link href="/about" className="transition hover:text-white/85">
            About
          </Link>
          <Link
            href="/privacy-policy"
            className="transition hover:text-white/85"
          >
            プライバシーポリシー
          </Link>
        </section>
      </div>
    </main>
  );
}
