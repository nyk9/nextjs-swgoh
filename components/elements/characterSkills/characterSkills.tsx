import { Abilities } from "@/app/data/characterAbilities";
import Image from "next/image";
// import { useRouter } from "next/router";
export default async function CharacterSkills(params: {
    url: string
}) {
    const apilink: string = 'https://swgoh4jp.com/api/characterAbilities';
    const res: globalThis.Response = await fetch(apilink, {
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
    // const allCharacters: string = 'http://localhost:3000/api/characters';
    // const a: globalThis.Response = await fetch(allCharacters ,{
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
            data[abilityIndex].ability[i].description_jp = str.replaceAll('\n', '&&');
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
                            <h1 className="">
                                <Image
                                    src={item.image}
                                    alt={item.name_jp}
                                    width={50}
                                    height={50}
                                    className="object-cover px-1"
                                />
                                <span className="text-sky-300 text-2xl">
                                    {item.name_jp}:
                                </span>
                                <span className="text-sky-700 text-2xl">
                                    ({item.ability_type})
                                </span>
                                <div className="flex">
                                    <span className="text-xs">
                                        {item.cooldown !== null ? (
                                            <span className="text-sky-100">
                                                クールダウン: {item.cooldown}
                                            </span>
                                        ) : (
                                            <></>
                                        )}
                                    </span>
                                    {item.ability_type !== '付与スキル' ? (
                                        item.is_ultimate === true ? (
                                            <Image
                                                src={'/skill/tex.skill_abilitymaterial_ultimate.png'}
                                                alt="ultimate"
                                                width={15}
                                                height={15}
                                            />
                                        ) : (item.is_omicron === true && item.is_zeta === true ? (
                                            <>
                                                <Image
                                                    src={'/skill/tex.skill_hexagon_white.png'}
                                                    alt="ultimate"
                                                    width={15}
                                                    height={15}
                                                />
                                                <Image
                                                    src={'/skill/tex.skill_zeta.png'}
                                                    alt="ultimate"
                                                    width={15}
                                                    height={15}
                                                />
                                            </>
                                        ) : (item.is_omicron === true ? (
                                            <Image
                                                src={'/skill/tex.skill_hexagon_white.png'}
                                                alt="ultimate"
                                                width={15}
                                                height={15}
                                            />
                                        ) : (item.is_zeta === true ? (
                                            <Image
                                                src={'/skill/tex.skill_zeta.png'}
                                                alt="ultimate"
                                                width={15}
                                                height={15}
                                            />
                                        ) : (item.is_omega === true ? (
                                            <Image
                                                src={'/skill/tex.skill_pentagon_gold.png'}
                                                alt="ultimate"
                                                width={15}
                                                height={15}
                                            />
                                        ) : (
                                            <Image
                                                src={'/skill/tex.skill_pentagon_white.png'}
                                                alt="ultimate"
                                                width={15}
                                                height={15}
                                            />
                                        )))))) : (<></>)}
                                </div>
                            </h1>
                            <div className="">
                                {item.description_jp.includes('&') || item.description_jp.includes('*')
                                    || item.description_jp.includes('$') || item.description_jp.includes('#')
                                    || item.description_jp.includes('+') ? (
                                    item.description_jp.split('&').map((line: string, lineIndex: number) => {
                                        if (lineIndex % 2 !== 0 && lineIndex !== 0) {
                                            return (<span key={lineIndex}><br /></span>);
                                        } else if (line.includes('*')) {
                                            return line.split('*').map((yellow: string, yellowIndex: number) => {
                                                if (yellowIndex % 2 !== 0) {
                                                    return (
                                                        <span className="text-yellow-200" key={yellowIndex}>{yellow}</span>
                                                    );
                                                } else {
                                                    return (<span key={yellowIndex}>{yellow}</span>);
                                                }
                                            });
                                        } else if (line.includes('$')) {
                                            return line.split('$').map((omicron: string, omicronIndex: number) => {
                                                if (omicronIndex % 2 !== 0) {
                                                    return (
                                                        <span
                                                            key={omicronIndex}
                                                            className="font-bold text-lg drop-shadow">
                                                            {omicron}
                                                        </span>
                                                    );
                                                } else {
                                                    return (<span key={omicronIndex}>{omicron}</span>);
                                                }
                                            });
                                        } else if (line.includes('#')) {
                                            return line.split('#').map((ult: string, ultIndex: number) => {
                                                if (ultIndex % 2 !== 0) {
                                                    return (
                                                        <span
                                                            key={ultIndex}
                                                            className="text-orange-400"
                                                        >
                                                            {ult}
                                                        </span>
                                                    );
                                                } else {
                                                    return (
                                                        <span key={ultIndex}>{ult}</span>
                                                    );
                                                }
                                            });
                                        } else if (line.includes('+')) {
                                            return line.split('+').map((role: string, roleIndex: number) => {
                                                if (roleIndex % 2 !== 0) {
                                                    return (
                                                        <span
                                                            key={roleIndex}
                                                            className="text-sky-200"
                                                        >
                                                            {role}
                                                        </span>
                                                    );
                                                } else {
                                                    return (
                                                        <span key={roleIndex}>{role}</span>
                                                    );
                                                }
                                            });
                                        } else {
                                            return (<span key={lineIndex}>{line}</span>);
                                        }
                                    })
                                ) : (
                                    <span>{item.description_jp}</span>
                                )}
                            </div>
                        </div>
                    );
                })}
                <footer>
                    最終更新日: {data[abilityIndex].last_updated}
                </footer>
            </>
        );
    }
};