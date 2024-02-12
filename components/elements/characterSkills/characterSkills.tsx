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
    if (!res.ok) {
        throw new Error('Error!!!');
    }
    const data = await res.json();
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
                <p>このキャラクターのページは存在しません。URLが間違っているか、現在制作中です。</p>
            </>
        );
    };
    return (
        <>
            <h1 className="">
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
                        className="border border-blue-300 mt-1"
                    >
                        <h1 className="text-2xl">
                            {item.name_jp}:
                            <span className="">
                                ({item.ability_type})
                            </span>
                        </h1>
                        <div>
                            <Image
                                src={item.image}
                                alt={item.name_jp}
                                width={50}
                                height={50}
                                className=""
                            />
                            <p className="">{item.description_jp}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};