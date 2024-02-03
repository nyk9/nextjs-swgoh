import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '銀河の英雄 初心者応援サイト',
  description: 'スターウォーズ 銀河の英雄の初心者用に作成したサイトです。主に攻略情報やおすすめ編成・MODなどを紹介します。',
  keywords: '銀河の英雄, 攻略, 初心者, おすすめ, キャラクター'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  );
}
