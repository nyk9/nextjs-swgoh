import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/guides";

const TITLE = "攻略ガイド一覧";
const DESCRIPTION =
  "SWGoH（銀河の英雄）の攻略ガイド。モッドの使い方・用語解説・GAC攻略など、初心者から中級者向けの日本語ガイドをまとめています。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/guides" },
  openGraph: {
    type: "website",
    url: "/guides",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-3">{TITLE}</h1>
          <p className="text-[hsl(var(--muted-foreground))]">
            SWGoH 日本語攻略ガイド。初心者向けの基礎知識から実戦向けの応用まで。
          </p>
        </header>

        {guides.length === 0 ? (
          <p className="text-[hsl(var(--muted-foreground))]">ガイドはまだありません。</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="block p-5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] transition-colors group"
                >
                  <div className="flex flex-wrap gap-2 mb-2">
                    {guide.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] group-hover:bg-[hsl(var(--muted))]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-1 group-hover:text-[hsl(var(--primary))] transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] line-clamp-2">
                    {guide.description}
                  </p>
                  <time className="text-xs text-[hsl(var(--muted-foreground))] mt-2 block">
                    {new Date(guide.date).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
