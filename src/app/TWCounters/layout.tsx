import type { Metadata } from "next";

const TITLE = "TWカウンター板";
const DESCRIPTION =
  "SWGoH（銀河の英雄）テリトリー・ウォー（TW）で有効なカウンター編成を日本語で共有。相手リーダー・編成から勝ち筋を素早く確認できます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/TWCounters" },
  openGraph: {
    type: "website",
    url: "/TWCounters",
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
