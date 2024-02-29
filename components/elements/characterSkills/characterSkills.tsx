import { Abilities } from "@/app/data/characterAbilities";
import Image from "next/image";
// import { useRouter } from "next/router";
export default async function CharacterSkills(params: {
    url: string
}) {
    const res = await fetch('https://swgoh4jp.com/api/characterAbilities', {
        next: {
            revalidate: 3600,
        },
    });
    // const res = await fetch('http://localhost:3000/api/characterAbilities', {
    //     cache: 'no-cache'
    // });
    if (!res.ok) {
        throw new Error('Error!!!');
    }
    let data = await res.json();
    let abilityIndex = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === params.url) {
            abilityIndex = i;
            break;
        }
    }
    // console.log(abilityIndex);
    if (abilityIndex == -1) {
        return (
            <>
                <p>このキャラクターのページは存在しません。<br />URLが間違っているか、現在制作中です。</p>
            </>
        );
    } else {
        for (let i: number = 0; i < data[abilityIndex].ability.length; i++) {
            let str = data[abilityIndex].ability[i].description_jp;
            data[abilityIndex].ability[i].description_jp = str.replace(/                /g, ' ');
        }
        return (
            <>
                <h1 className="grid grid-cols-2 text-2xl">
                    {data[abilityIndex].character_name}
                    <Image
                        alt={data[abilityIndex].character_name}
                        src={data[abilityIndex].character_image}
                        width={50}
                        height={50}
                    />
                </h1>
                {data[abilityIndex].ability.map((item: Abilities) => {
                    return (
                        <div
                            key={item.name_jp}
                            className="border border-blue-300 mt-1 bg-gradient-to-r from-neutral-700 to-neutral-800"
                        >
                            <h1 className="flex text-2xl text-sky-300">
                                <Image
                                    src={item.image}
                                    alt={item.name_jp}
                                    width={50}
                                    height={50}
                                    className="object-cover px-1"
                                />
                                {item.name_jp}:
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