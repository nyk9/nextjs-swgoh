import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/supabase/supabase";
import Link from "next/link";

export default async function TWCounter() {
    const { data } = await supabase.from('counters').select('*');
    // const user = await supabase.auth.getUser()
    // console.log(user);
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
            {data ? (
                data.map((counter: any, index: number) => {
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