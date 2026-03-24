"use client";
import Link from "next/link";
import { useState } from "react";
import updates, { Updates } from "../features/mainpages/constant/update";

const NAV_ITEMS = [
  {
    href: "/characters",
    title: "キャラクター",
    desc: "全キャラ一覧・属性やスキルでフィルター検索",
  },
  {
    href: "/advisor",
    title: "育成アドバイザー",
    desc: "アライコードからキャラ育成の優先度を診断",
    tag: "AI",
  },
  {
    href: "/TWCounters",
    title: "TW カウンター",
    desc: "テリトリーウォーの編成カウンター情報",
  },
] as const;

const EXT_LINKS = [
  { href: "https://swgoh.gg/", label: "swgoh.gg" },
  { href: "https://discord.gg/yX3pS2WemD", label: "Discord" },
  { href: "https://github.com/nyk9/nextjs-swgoh", label: "GitHub" },
] as const;

export default function Home() {
  const [logOpen, setLogOpen] = useState(false);
  const allUpdates: Updates[] = updates;

  return (
    <main className="min-h-screen px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">

        {/* Title */}
        <div className="mb-12">
          <p className="text-xs text-[hsl(220,10%,52%)] tracking-widest uppercase mb-3">
            Star Wars: Galaxy of Heroes
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            初心者応援データベース
          </h1>
        </div>

        {/* Nav */}
        <nav className="space-y-px mb-14">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="group block">
              <div className="flex items-center justify-between py-4 border-b border-[hsl(220,12%,14%)] group-hover:border-[hsl(220,12%,22%)] transition-colors">
                <div>
                  <span className="text-[hsl(220,14%,82%)] group-hover:text-white transition-colors font-medium">
                    {item.title}
                  </span>
                  {"tag" in item && (
                    <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-[hsl(40,56%,52%)]/15 text-[hsl(40,56%,58%)] font-medium">
                      {item.tag}
                    </span>
                  )}
                  <p className="text-sm text-[hsl(220,10%,52%)] mt-0.5">{item.desc}</p>
                </div>
                <span className="text-[hsl(220,8%,36%)] group-hover:text-[hsl(220,10%,52%)] group-hover:translate-x-0.5 transition-all text-sm ml-4">
                  →
                </span>
              </div>
            </Link>
          ))}
          {/* Ships (disabled) */}
          <div className="flex items-center justify-between py-4 border-b border-[hsl(220,12%,14%)] opacity-35">
            <div>
              <span className="font-medium">Ships</span>
              <span className="ml-2 text-[10px] text-[hsl(220,8%,36%)]">準備中</span>
            </div>
          </div>
        </nav>

        {/* External links */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-12 text-sm">
          {EXT_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] transition-colors"
            >
              {l.label}<span className="ml-0.5 text-xs">↗</span>
            </a>
          ))}
        </div>

        {/* Update log */}
        <div>
          <button
            onClick={() => setLogOpen(!logOpen)}
            className="flex items-center gap-2 text-sm text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] transition-colors"
          >
            <span className={`text-xs transition-transform duration-200 ${logOpen ? "rotate-90" : ""}`}>▶</span>
            アップデートログ
          </button>
          {logOpen && (
            <div className="mt-3 space-y-0 border-l border-[hsl(220,12%,18%)] ml-1 pl-4">
              {allUpdates.map((u) => (
                <div key={u.ver} className="py-2.5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs text-[hsl(220,8%,36%)] tabular-nums shrink-0">{u.date}</span>
                    <span className="text-sm text-[hsl(220,14%,82%)]">{u.title}</span>
                  </div>
                  {u.detail && (
                    <p className="text-xs text-[hsl(220,10%,52%)] mt-0.5 ml-[4.5rem]">{u.detail}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer nav */}
        <div className="mt-14 pt-6 border-t border-[hsl(220,12%,14%)] flex gap-4 text-xs text-[hsl(220,8%,36%)]">
          <Link href="/about" className="hover:text-[hsl(220,14%,82%)] transition-colors">About</Link>
          <Link href="/privacy-policy" className="hover:text-[hsl(220,14%,82%)] transition-colors">プライバシーポリシー</Link>
        </div>

      </div>
    </main>
  );
}
