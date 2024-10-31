import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TWカウンター板",
  description: "TWのカウンターデータを表示します。",
  keywords: "TW, カウンター, 編成, 銀河の英雄, 攻略, 初心者",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
