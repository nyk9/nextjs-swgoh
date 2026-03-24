import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/lib/prisma/prismaClient";

export const dynamic = "force-dynamic";

export default async function TWCounter() {
  const counters = await prisma.counter.findMany();

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-[hsl(215,16%,47%)] hover:text-[hsl(213,32%,82%)] transition-colors"
          >
            &larr; トップに戻る
          </Link>
          <h1 className="font-display text-3xl tracking-wider text-[hsl(0,84%,60%)] mt-4 mb-2" style={{ textShadow: '0 0 20px hsla(0,84%,60%,0.4), 0 0 40px hsla(0,84%,60%,0.1)' }}>
            TW Counters
          </h1>
          <p className="text-[hsl(215,16%,47%)] text-sm mt-1">
            テリトリーウォーのカウンター情報
          </p>
        </div>

        {/* Dev Banner */}
        <div className="rounded-xl border border-[hsl(51,100%,50%)]/25 p-4 mb-6 flex items-start gap-3" style={{ background: 'linear-gradient(135deg, hsla(51,100%,50%,0.05) 0%, transparent 100%)' }}>
          <span className="text-[hsl(51,100%,50%)] text-lg mt-0.5 flex-shrink-0">⚠</span>
          <p className="text-sm text-[hsl(215,16%,65%)]">
            この機能は開発中です。データの追加・編集機能は限定的に提供されています。
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mb-6">
          <Link href="/TWCounters/login">
            <Button
              variant="outline"
              className="border-[hsl(228,20%,22%)] bg-[hsl(228,28%,18%)] text-[hsl(213,32%,82%)] hover:bg-[hsl(228,28%,24%)]"
            >
              ログイン
            </Button>
          </Link>
          <Link href="/TWCounters/forms">
            <Button className="bg-[hsl(51,100%,50%)] text-[hsl(228,40%,8%)] hover:bg-[hsl(43,80%,42%)] font-medium">
              入力フォーム
            </Button>
          </Link>
        </div>

        {/* Counter List */}
        {counters.length > 0 ? (
          <div className="space-y-3">
            {counters.map((counter, index) => (
              <div
                className="rounded-xl border border-[hsl(228,20%,22%)] bg-gradient-to-b from-[hsl(228,32%,14%)] to-[hsl(228,28%,12%)] p-5 hover:border-[hsl(199,92%,64%)]/30 transition-colors"
                key={index}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-[hsl(199,92%,64%)] text-xs font-medium">自軍リーダー</span>
                    <p className="text-white">{counter.allied_leader}</p>
                  </div>
                  <div>
                    <span className="text-[hsl(0,84%,60%)] text-xs font-medium">敵軍リーダー</span>
                    <p className="text-white">{counter.enemy_leader}</p>
                  </div>
                  <div>
                    <span className="text-[hsl(199,92%,64%)] text-xs font-medium">自軍キャラクター</span>
                    <p className="text-[hsl(213,32%,82%)]">{counter.allied_characters}</p>
                  </div>
                  <div>
                    <span className="text-[hsl(0,84%,60%)] text-xs font-medium">敵軍キャラクター</span>
                    <p className="text-[hsl(213,32%,82%)]">{counter.enemy_characters}</p>
                  </div>
                </div>
                {counter.description && (
                  <div className="mt-3 pt-3 border-t border-[hsl(228,20%,22%)]">
                    <span className="text-[hsl(215,16%,47%)] text-xs">詳細</span>
                    <p className="text-[hsl(213,32%,82%)] text-sm">{counter.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-[hsl(228,20%,25%)] border-dashed bg-[hsl(228,32%,11%)] p-14 text-center">
            <p className="text-[hsl(215,16%,47%)] text-lg mb-2">まだカウンターが登録されていません</p>
            <p className="text-[hsl(215,16%,47%)] text-sm mb-6">
              最初のカウンター情報を登録して、コミュニティに貢献しましょう
            </p>
            <Link href="/TWCounters/forms">
              <Button className="bg-[hsl(51,100%,50%)] text-[hsl(228,40%,8%)] hover:bg-[hsl(43,80%,42%)] font-medium">
                カウンターを登録する
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
