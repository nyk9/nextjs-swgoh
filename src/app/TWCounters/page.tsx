import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/lib/prisma/prismaClient"; // Prismaクライアントをインポート

export default async function TWCounter() {
  const counters = await prisma.counter.findMany(); // Prismaを使用してデータを取得

  return (
    <div className="pt-3 bg-stone-700">
      <div className="p-1">
        <Link href="/TWCounters/login" className="p-1">
          <Button>ログイン</Button>
        </Link>
        <Link href="/TWCounters/forms" className="p-1">
          <Button>入力フォーム</Button>
        </Link>
      </div>
      {counters.length > 0 ? (
        counters.map((counter, index) => {
          return (
            <div className="m-1 p-1 bg-indigo-400" key={index}>
              <p>自軍リーダー：{counter.allied_leader}</p>
              <p>自軍キャラクター：{counter.allied_characters}</p>
              <p>敵軍リーダー：{counter.enemy_leader}</p>
              <p>敵軍キャラクター：{counter.enemy_characters}</p>
              <p>詳細：{counter.description}</p>
            </div>
          );
        })
      ) : (
        <>No Data</>
      )}
    </div>
  );
}
