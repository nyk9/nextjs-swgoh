import type { Metadata } from "next";
import { getAllGuides } from "@/lib/guides";
import GuideListItem from "./_components/GuideListItem";

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
                <GuideListItem
                  slug={guide.slug}
                  title={guide.title}
                  description={guide.description}
                  date={guide.date}
                  tags={guide.tags}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
