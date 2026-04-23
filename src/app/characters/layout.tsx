import type { Metadata } from "next";

const TITLE = "キャラクター図鑑";
const DESCRIPTION =
  "SWGoH（銀河の英雄）の全キャラクターを、属性・役割・スキルから日本語で検索。育成優先度や派閥編成の調査に最短で辿りつけます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/characters" },
  openGraph: {
    type: "website",
    url: "/characters",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
