"use client"

import { CharactersButton } from "@/components/elements/counters/charactersButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function TWCounter() {
    const [alliedLeader, setAlliedLeader] = useState<string>("自軍リーダー");
    const [enemyLeader, setEnemyLeader] = useState<string>("敵リーダー");
    return (
        <>
            <Card className="bg-teal-800 text-fuchsia-100">
                <CardHeader>
                    <CardTitle>カウンター入力フォーム</CardTitle>
                    <CardDescription>自軍リーダー、自軍キャラ、敵リーダー、敵キャラを入力してください</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        自軍リーダー：
                        <CharactersButton characters={alliedLeader} addCharacters={setAlliedLeader} />
                    </p>
                    <p>
                        敵軍リーダー：
                        <CharactersButton characters={enemyLeader} addCharacters={setEnemyLeader} />
                    </p>
                    <Textarea placeholder="詳細"  className="mt-2 bg-teal-100 text-black"/>
                </CardContent>
                <CardFooter>
                    <Button>登録</Button>
                </CardFooter>
            </Card>
        </>
    );
};