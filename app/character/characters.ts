import { StaticImageData } from "next/image";
import sorty from "./charui/tex.charui_50rt.png";
import OOO from "./charui/tex.charui_triplezero.png";
import arc from "./charui/tex.charui_trooperclone_arc.png";


export type Characters = {
    name: string;
    // src: StaticImageData;
    tag: string;
    src: StaticImageData;
};

const characters: Characters[] = [
    {
        name: "0-0-0",
        tag: "ダークサイド・サポート・ドロイド・ならず者",
        src: OOO,
    },
    {
        name: "50R-T",
        tag: "ライトサイド・サポート・リーダー・ドロイド・旧共和国",
        src: sorty,
    },
    {
        name: "ARCトルーパー", 
        tag: "ライトサイド・アタッカー・第501軍団・クローン・トルーパー・銀河共和国",
        src: arc

    },

];

export default characters;