import type { Metadata } from "next";

const TITLE = "AI育成アドバイザー";
const DESCRIPTION =
  "アライコードを入力するだけで、SWGoH（銀河の英雄）のプレイヤーデータから今やるべき育成を優先度順に提案するAIアシスタント。RotE・TW・GACに対応。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/advisor" },
  openGraph: {
    type: "website",
    url: "/advisor",
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
