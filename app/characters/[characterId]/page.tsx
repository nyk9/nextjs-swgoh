import { SWGOHGG } from "@/components/elements/swgoh-gg-api/swgohgg";
import Home from "@/components/layouts/header/header";
import Image from "next/image";

export default function characterDetail({ params }: {
    params: { characterId: number }
}) {
    return (
        <div
            className="min-h-screen bg-neutral-700"
        >
            <Home />
            <h1 className="pt-20">ダイナミックルーティング</h1>
            <p>URL: https://swgoh4jp.com/characters/{params.characterId}</p>
            <SWGOHGG />
            <Image
                alt="a"
                src='/charui/tex.charui_obiwangeneral.png'
                width={100}
                height={100}
            />
        </div>
    );
};