"use client";
import Link from "next/link";
import { useState } from "react";
import updates, { Updates } from "../features/mainpages/constant/update";

export default function Home() {
  const [logOpen, setLogOpen] = useState(false);
  const allUpdates: Updates[] = updates;

  return (
    <main className="scanline min-h-screen px-4 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">

        {/* ── Hero ─────────────────────────────────── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[hsl(51,100%,50%)]/30 bg-[hsl(51,100%,50%)]/5 text-[hsl(51,100%,50%)] text-xs tracking-[0.15em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(51,100%,50%)] animate-pulse" />
            Star Wars: Galaxy of Heroes
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider text-[hsl(51,100%,50%)] title-glow-gold leading-tight mb-4">
            初心者応援
            <br className="md:hidden" />
            <span className="md:ml-3">データベース</span>
          </h1>
          <p className="text-[hsl(215,16%,55%)] text-sm md:text-base max-w-md mx-auto">
            キャラクター攻略・育成アドバイス・TW カウンター情報
          </p>
        </div>

        {/* ── Navigation Cards ─────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">

          {/* Characters */}
          <Link href="/characters" className="group block">
            <div className="card-bg-blue relative rounded-xl border border-[hsl(199,92%,64%)]/20 p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:border-[hsl(199,92%,64%)]/60 swgoh-glow-blue hover:swgoh-glow-blue-strong overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(199,92%,64%)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(199,92%,64%)]/15 border border-[hsl(199,92%,64%)]/30 flex items-center justify-center text-xl">
                    ⚔
                  </div>
                  <span className="text-[hsl(199,92%,64%)]/40 group-hover:text-[hsl(199,92%,64%)] transition-all group-hover:translate-x-1 text-xl">→</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-1">Characters</h2>
                <p className="text-sm text-[hsl(215,16%,55%)]">キャラクター一覧・フィルター検索</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-[hsl(199,92%,64%)]/40 to-transparent" />
              </div>
            </div>
          </Link>

          {/* Advisor */}
          <Link href="/advisor" className="group block">
            <div className="card-bg-gold relative rounded-xl border border-[hsl(51,100%,50%)]/25 p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:border-[hsl(51,100%,50%)]/60 swgoh-glow-gold hover:swgoh-glow-gold-strong overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(51,100%,50%)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(51,100%,50%)]/15 border border-[hsl(51,100%,50%)]/30 flex items-center justify-center text-xl">
                    🤖
                  </div>
                  <span className="text-[hsl(51,100%,50%)]/40 group-hover:text-[hsl(51,100%,50%)] transition-all group-hover:translate-x-1 text-xl">→</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                  育成アドバイス
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[hsl(51,100%,50%)] text-[hsl(228,40%,8%)] font-bold uppercase tracking-wider leading-none">
                    AI
                  </span>
                </h2>
                <p className="text-sm text-[hsl(215,16%,55%)]">AI がキャラ育成を診断・アドバイス</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-[hsl(51,100%,50%)]/40 to-transparent" />
              </div>
            </div>
          </Link>

          {/* TW Counters */}
          <Link href="/TWCounters" className="group block">
            <div className="card-bg-red relative rounded-xl border border-[hsl(0,84%,60%)]/20 p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:border-[hsl(0,84%,60%)]/60 swgoh-glow-red hover:swgoh-glow-red-strong overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,84%,60%)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(0,84%,60%)]/15 border border-[hsl(0,84%,60%)]/30 flex items-center justify-center text-xl">
                    🛡
                  </div>
                  <span className="text-[hsl(0,84%,60%)]/40 group-hover:text-[hsl(0,84%,60%)] transition-all group-hover:translate-x-1 text-xl">→</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-1">TW Counters</h2>
                <p className="text-sm text-[hsl(215,16%,55%)]">テリトリーウォー攻略・編成対策</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-[hsl(0,84%,60%)]/40 to-transparent" />
              </div>
            </div>
          </Link>

          {/* Ships — Coming Soon */}
          <div className="relative rounded-xl border border-[hsl(215,16%,22%)] p-6 opacity-45 overflow-hidden cursor-not-allowed"
               style={{ background: 'linear-gradient(135deg, hsl(228, 30%, 11%) 0%, hsl(228, 25%, 13%) 100%)' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-[hsl(215,16%,22%)]/50 border border-[hsl(215,16%,30%)]/30 flex items-center justify-center text-xl">
                🚀
              </div>
            </div>
            <h2 className="text-lg font-bold text-[hsl(215,16%,55%)] mb-1">Ships</h2>
            <p className="text-sm text-[hsl(215,16%,40%)]">今後追加予定</p>
            <div className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded border border-[hsl(215,16%,30%)] text-[hsl(215,16%,47%)] bg-[hsl(228,30%,11%)]">
              Coming Soon
            </div>
            <div className="mt-4 h-px w-full bg-[hsl(215,16%,22%)]" />
          </div>

        </div>

        {/* ── External Links ────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { href: "https://swgoh.gg/", label: "swgoh.gg", desc: "参考元" },
            { href: "https://discord.gg/yX3pS2WemD", label: "Discord", desc: "公式サーバー" },
            { href: "https://github.com/nyk9/nextjs-swgoh", label: "GitHub", desc: "ソース" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[hsl(228,20%,22%)] bg-[hsl(228,32%,11%)] text-sm text-[hsl(213,32%,70%)] hover:border-[hsl(228,20%,35%)] hover:text-white hover:bg-[hsl(228,28%,16%)] transition-all"
            >
              <span className="font-medium">{l.label}</span>
              <span className="text-[hsl(215,16%,40%)] text-xs">{l.desc}</span>
              <span className="text-[hsl(215,16%,40%)] group-hover:text-white transition-colors text-xs">↗</span>
            </a>
          ))}
        </div>

        {/* ── Update Log ─────────────────────────────── */}
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLogOpen(!logOpen)}
            className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl border border-[hsl(228,20%,22%)] bg-[hsl(228,32%,11%)] text-sm text-[hsl(213,32%,70%)] hover:bg-[hsl(228,28%,16%)] hover:border-[hsl(228,20%,30%)] transition-all"
          >
            <span className="font-medium tracking-wide">アップデートログ</span>
            <span className={`transition-transform duration-300 text-[hsl(215,16%,47%)] text-xs ${logOpen ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>
          {logOpen && (
            <div className="mt-1 rounded-xl border border-[hsl(228,20%,22%)] bg-[hsl(228,32%,11%)] divide-y divide-[hsl(228,20%,18%)] overflow-hidden">
              {allUpdates.map((u) => (
                <div key={u.ver} className="flex gap-4 px-5 py-3.5 hover:bg-[hsl(228,28%,14%)] transition-colors">
                  <span className="text-[hsl(215,16%,47%)] whitespace-nowrap text-xs mt-0.5 min-w-[4.5rem]">
                    {u.date}
                  </span>
                  <div>
                    <p className="text-[hsl(213,32%,82%)] text-sm font-medium">{u.title}</p>
                    <p className="text-[hsl(215,16%,47%)] text-xs mt-0.5 leading-relaxed">{u.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* About / Privacy */}
        <div className="text-center mt-10 flex items-center justify-center gap-3">
          <Link href="/about" className="text-xs text-[hsl(215,16%,40%)] hover:text-[hsl(213,32%,70%)] transition-colors">
            About
          </Link>
          <span className="text-[hsl(228,20%,25%)]">·</span>
          <Link href="/privacy-policy" className="text-xs text-[hsl(215,16%,40%)] hover:text-[hsl(213,32%,70%)] transition-colors">
            プライバシーポリシー
          </Link>
        </div>

      </div>
    </main>
  );
}
