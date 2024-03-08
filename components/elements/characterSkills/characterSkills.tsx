import { Abilities } from "@/app/data/characterAbilities";
import Image from "next/image";
// import { useRouter } from "next/router";
export default async function CharacterSkills(params: {
    url: string
}) {
    const res: globalThis.Response = await fetch('https://swgoh4jp.com/api/characterAbilities', {
        next: {
            revalidate: 3600,
        },
    });
    // const res: globalThis.Response = await fetch('http://localhost:3000/api/characterAbilities', {
    //     cache: 'no-cache'
    // });
    if (!res.ok) {
        throw new Error('Error!!!');
    }
    let data = await res.json();
    let abilityIndex: number = -1;
    for (let i: number = 0; i < data.length; i++) {
        if (data[i].id === params.url) {
            abilityIndex = i;
            break;
        }
    }
    // 現在の進捗状況確認用
    // const a: globalThis.Response = await fetch('https://swgoh4jp.com/api/characters',{
    //     cache: 'no-cache'
    // });
    // const charLength = await a.json();
    // console.log("全キャラ数:"+charLength.length);
    // console.log("詳細完了数:"+data.length);
    // console.log("進捗割合:"+Math.round(data.length/charLength.length*10000)/100+"%");
    if (abilityIndex == -1) {
        return (
            <>
                <p>このキャラクターのページは存在しません。<br />URLが間違っているか、現在制作中です。</p>
            </>
        );
    } else {
        for (let i: number = 0; i < data[abilityIndex].ability.length; i++) {
            let str: string = data[abilityIndex].ability[i].description_jp;
            data[abilityIndex].ability[i].description_jp = str.replace(/                /g, ' ');
        }
        return (
            <>
                <h1 className="flex text-2xl">
                    <Image
                        alt={data[abilityIndex].character_name}
                        src={data[abilityIndex].character_image}
                        width={50}
                        height={50}
                    />
                    <span>
                        {data[abilityIndex].character_name}
                    </span>
                </h1>
                {data[abilityIndex].ability.map((item: Abilities) => {
                    return (
                        <div
                            key={item.name_jp}
                            className="border border-blue-300 mt-1 bg-gradient-to-r from-neutral-700 to-neutral-800"
                        >
                            <h1 className="xs:flex text-2xl ">
                                {/* <div className="image"> */}
                                    <Image
                                        src={item.image}
                                        alt={item.name_jp}
                                        width={50}
                                        height={50}
                                        className="object-cover px-1"
                                    />
                                {/* </div> */}
                                <span className="text-sky-300">
                                    {item.name_jp}:
                                </span>
                                <span className="text-sky-700">
                                    ({item.ability_type})
                                </span>
                                {/* {item.is_zeta && (
                                    <p>zeta</p>
                                )} */}
                                {/* {item.is_omega && (
                                    <p>omega</p>
                                )} */}
                                {/* {item.is_omicron && (
                                    <p>omicron</p>
                                )} */}
                                {/* {item.is_ultimate && (
                                    <p>ultimate</p>
                                )} */}
                            </h1>
                            <div className="flex">
                                <p className="whitespace-pre-wrap px-1">{item.description_jp}</p>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    }
};