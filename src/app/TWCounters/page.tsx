import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/lib/prisma/prismaClient";

export const dynamic = "force-dynamic";

export default async function TWCounter() {
  const counters = await prisma.counter.findMany();

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-sm text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] transition-colors"
        >
          ← トップ
        </Link>

        <h1 className="text-xl font-bold text-white mt-6 mb-1">TW カウンター</h1>
        <p className="text-sm text-[hsl(220,10%,52%)] mb-5">テリトリーウォーの編成対策</p>

        {/* Notice */}
        <p className="text-xs text-[hsl(220,8%,36%)] border-l-2 border-[hsl(220,12%,18%)] pl-3 mb-5">
          この機能は開発中です。データの追加・編集機能は限定的に提供されています。
        </p>

        {/* Actions */}
        <div className="flex gap-2 mb-6">
          <Link href="/TWCounters/login">
            <Button
              variant="outline"
              className="border-[hsl(220,12%,18%)] bg-transparent text-[hsl(220,14%,82%)] hover:bg-[hsl(220,14%,14%)] text-sm"
            >
              ログイン
            </Button>
          </Link>
          <Link href="/TWCounters/forms">
            <Button className="bg-[hsl(220,14%,82%)] text-[hsl(220,16%,6%)] hover:bg-white text-sm font-medium">
              入力フォーム
            </Button>
          </Link>
        </div>

        {/* Counter List */}
        {counters.length > 0 ? (
          <div className="space-y-2">
            {counters.map((counter, index) => (
              <div
                className="rounded border border-[hsl(220,12%,14%)] bg-[hsl(220,16%,10%)] p-4 hover:border-[hsl(220,12%,22%)] transition-colors"
                key={index}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-xs text-[hsl(220,10%,52%)]">自軍リーダー</span>
                    <p className="text-white">{counter.allied_leader}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[hsl(220,10%,52%)]">敵軍リーダー</span>
                    <p className="text-white">{counter.enemy_leader}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[hsl(220,10%,52%)]">自軍キャラクター</span>
                    <p className="text-[hsl(220,14%,82%)]">{counter.allied_characters}</p>
                  </div>
                  <div>
                    <span className="text-xs text-[hsl(220,10%,52%)]">敵軍キャラクター</span>
                    <p className="text-[hsl(220,14%,82%)]">{counter.enemy_characters}</p>
                  </div>
                </div>
                {counter.description && (
                  <div className="mt-3 pt-3 border-t border-[hsl(220,12%,14%)]">
                    <p className="text-sm text-[hsl(220,14%,82%)]">{counter.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded border border-dashed border-[hsl(220,12%,18%)] p-10 text-center">
            <p className="text-[hsl(220,10%,52%)] mb-1">まだカウンターが登録されていません</p>
            <p className="text-xs text-[hsl(220,8%,36%)] mb-5">
              最初のカウンター情報を登録して、コミュニティに貢献しましょう
            </p>
            <Link href="/TWCounters/forms">
              <Button className="bg-[hsl(220,14%,82%)] text-[hsl(220,16%,6%)] hover:bg-white text-sm">
                カウンターを登録する
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
