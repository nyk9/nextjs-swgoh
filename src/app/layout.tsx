import { Header } from "@/components/layouts/header/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Noto_Sans_JP, Orbitron } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layouts/footer/Footer";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "銀河の英雄 初心者応援データベース",
  description:
    "スターウォーズ 銀河の英雄の初心者用に作成したサイトです。主に攻略情報やおすすめ編成・MODなどを紹介します。",
  keywords: "銀河の英雄, 攻略, 初心者, おすすめ, キャラクター, 編成",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${orbitron.variable} font-sans`}>
        <Header />
        <div className="mt-10">{children}</div>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
