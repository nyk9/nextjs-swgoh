import { supabase } from "@/utils/supabase/supabase";

export default async function TWCounter() {
    const { data } = await supabase.from('counters').select('*');
    return (
        <div className="pt-3 bg-stone-700">
            {data ? (
                data.map((counter: any, index: number) => {
                    return (
                        <div className=" p-1 bg-indigo-400" key={index}>
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