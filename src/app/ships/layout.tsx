import type { Metadata } from "next";

const TITLE = "艦隊図鑑";
const DESCRIPTION =
  "SWGoH（銀河の英雄）の艦船を、派閥・役割・パイロットで横断検索。艦隊編成の起点になる日本語データベース。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ships" },
  openGraph: {
    type: "website",
    url: "/ships",
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
