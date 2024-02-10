"use clinet"

import CharacterLists from "@/components/elements/characterLists/characterLists";


export default function characterDetail({ params }: {
    params: { characterId: number }
}) {
    return (
        <div
            className="min-h-screen bg-neutral-700"
        >
            <h1>ダイナミックルーティング</h1>
            <p>URL: character/{params.characterId}</p>
            <CharacterLists url={'/api/characters'}/>
        </div>
    );
};