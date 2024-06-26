"use client"

import { CharacterButton } from "@/components/elements/counters/charactersButton";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/utils/supabase/supabase";
import { useState } from "react";

export default async function TWCounter() {
    const [alliedCharacters, setAlliedCharacters] = useState<string[]>(["自軍リーダー", "自軍キャラクター", "自軍キャラクター", "自軍キャラクター", "自軍キャラクター"]);
    const [enemyCharacters, setEnemyCharacters] = useState<string[]>(["敵軍リーダー", "敵軍キャラクター", "敵軍キャラクター", "敵軍キャラクター", "敵軍キャラクター"]);
    const { data: { session } } = await supabase.auth.getSession();
    // if(!session) {
    //     redirect('/TWCounters/login')
    // }
    console.log(session);

    return (
        <>
            <Card className="bg-teal-800 text-fuchsia-100">
                <CardHeader>
                    <CardTitle>カウンター入力フォーム</CardTitle>
                    <CardDescription>自軍リーダー、自軍キャラクター、敵リーダー、敵キャラクターを入力してください</CardDescription>
                </CardHeader>
                <>
                    <p>
                        自軍リーダー：
                        <CharacterButton characters={alliedCharacters} index={0} addCharacter={setAlliedCharacters} />
                    </p>
                    <p>
                        自軍キャラクター：
                        <CharacterButton characters={alliedCharacters} index={1} addCharacter={setAlliedCharacters} />
                    </p>
                    <p>
                        自軍キャラクター：
                        <CharacterButton characters={alliedCharacters} index={2} addCharacter={setAlliedCharacters} />
                    </p>
                    <p>
                        自軍キャラクター：
                        <CharacterButton characters={alliedCharacters} index={3} addCharacter={setAlliedCharacters} />
                    </p>
                    <p>
                        自軍キャラクター：
                        <CharacterButton characters={alliedCharacters} index={4} addCharacter={setAlliedCharacters} />
                    </p>
                    <p>
                        敵軍リーダー：
                        <CharacterButton characters={enemyCharacters} index={0} addCharacter={setEnemyCharacters} />
                    </p>
                    <p>
                        敵軍キャラクター：
                        <CharacterButton characters={enemyCharacters} index={1} addCharacter={setEnemyCharacters} />
                    </p>
                    <p>
                        敵軍キャラクター：
                        <CharacterButton characters={enemyCharacters} index={2} addCharacter={setEnemyCharacters} />
                    </p>
                    <p>
                        敵軍キャラクター：
                        <CharacterButton characters={enemyCharacters} index={3} addCharacter={setEnemyCharacters} />
                    </p>
                    <p>
                        敵軍キャラクター：
                        <CharacterButton characters={enemyCharacters} index={4} addCharacter={setEnemyCharacters} />
                    </p>
                    <Textarea placeholder="詳細" className="mt-2 bg-teal-100 text-black" />
                </>
                <CardFooter>
                    <Button>登録</Button>
                </CardFooter>
            </Card>
        </>
    );
};