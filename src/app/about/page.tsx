import type { Metadata } from "next";
import Link from "next/link";

const ABOUT_TITLE = "About｜サイトについて";
const ABOUT_DESCRIPTION =
  "SWGoH（銀河の英雄）日本語データベース swgoh4jp の運営方針・収録情報・利用技術について。初心者のための情報設計と、実戦で役立つ判断材料の提供を目指しています。";

export const metadata: Metadata = {
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "article",
    url: "/about",
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
  },
};

const TECH_STACK = [
  "Next.js 15",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "Vercel",
  "AI SDK",
] as const;

const VALUE_POINTS = [
  {
    title: "迷わない導線",
    desc: "初心者が最初に詰まりやすい「何から育てるか」を、目的別にすぐ辿れる情報設計にしています。",
  },
  {
    title: "実戦に寄った情報",
    desc: "机上の理論ではなく、TW・GAC・TBで実際に使える判断材料を優先して整理しています。",
  },
  {
    title: "更新し続けるデータベース",
    desc: "環境変化に追従し、古い情報で迷わないように小さく継続的な改善を重ねています。",
  },
] as const;

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[hsl(220,16%,6%)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            "radial-gradient(55% 35% at 10% 10%, rgba(34,211,238,0.13) 0%, rgba(34,211,238,0) 70%), radial-gradient(45% 30% at 88% 18%, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0) 75%), radial-gradient(40% 25% at 50% 92%, rgba(217,70,239,0.10) 0%, rgba(217,70,239,0) 78%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.13) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.13) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-14 pt-8 md:px-6 md:pt-12">
        <Link
          href="/"
          className="inline-flex items-center rounded-lg border border-white/15 bg-white/[0.03] px-3 py-1.5 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
        >
          ← トップへ戻る
        </Link>

        <section className="mt-6 grid gap-4 md:mt-8 md:grid-cols-12">
          <article className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 backdrop-blur md:col-span-8 md:p-8">
            <p className="mb-3 inline-flex items-center rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-cyan-100">
              ABOUT THIS PROJECT
            </p>
            <h1 className="text-2xl font-black leading-tight text-white md:text-4xl">
              SWGoHの「最初の壁」を
              <br />
              越えるための情報サイト
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
              このサイトは、Star Wars: Galaxy of Heroes
              の初心者〜中級者向けに、育成判断と編成判断を速くするための情報をまとめたデータベースです。
              「調べる時間」より「プレイする時間」を増やすことを目標にしています。
            </p>
          </article>

          <aside className="rounded-2xl border border-white/15 bg-white/[0.03] p-5 backdrop-blur md:col-span-4 md:p-6">
            <p className="mb-1 text-xs font-semibold tracking-wider text-white/55">
              AUTHOR
            </p>
            <h2 className="text-lg font-bold text-white">nyk9</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              情報系学部卒。SWGoHプレイヤーとして、初心者の方が迷わず遊べる情報設計を重視して開発しています。
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://discord.gg/yX3pS2WemD"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white/35 hover:bg-white/[0.1] hover:text-white"
              >
                Discord ↗
              </a>
              <a
                href="https://github.com/nyk9/nextjs-swgoh"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/20 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white/35 hover:bg-white/[0.1] hover:text-white"
              >
                GitHub ↗
              </a>
            </div>
          </aside>
        </section>

        <section className="mt-6 rounded-2xl border border-white/12 bg-white/[0.03] p-5 md:mt-8 md:p-6">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-lg font-extrabold tracking-wide text-white/95 md:text-xl">
              このサイトの設計思想
            </h2>
            <span className="text-xs font-medium text-white/50">3つの価値</span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {VALUE_POINTS.map((point) => (
              <article
                key={point.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
                <h3 className="text-sm font-bold text-white/90">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/65">
                  {point.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-white/12 bg-white/[0.03] p-5 md:mt-8 md:p-6">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-lg font-extrabold tracking-wide text-white/95 md:text-xl">
              使用技術
            </h2>
            <span className="text-xs font-medium text-white/50">
              Tech Stack
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/20 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-white/75"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
