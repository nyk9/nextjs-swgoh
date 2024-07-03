import abilitiesList from "@/types/swgoh/abilitieLists/abilitiesList";
import Image from "next/image";

export default async function Page({ params }: {
    params: { baseId: string }
}) {
    const response = await fetch("https://swgoh4jp.com/api/swgohgg/abilities");
    if (!response.ok) return <p>Failed to fetch</p>;
    let data: abilitiesList[] = await response.json();
    const list: abilitiesList[] = [];
    for (let i = 0; i < data.length; i++) {
        if (params.baseId === data[i].character_base_id) {
            let description = data[i].description;
            data[i].description = description.replaceAll("\\n", "\n");
            list.push(data[i]);
        }
    }
    return (
        <div className="bg-neutral-500">
            <h2>{list[0].character_base_id}</h2>
            {list.map((item, index) => (
                <div key={index} className="border m-1">
                    <div className="flex">
                        <Image
                            alt="Character Image"
                            src={item.image}
                            height={50}
                            width={50}
                            unoptimized={true}
                        />
                        <h3>{item.name}</h3>
                    </div>
                    {item.description.split("\n").map((line, index) => {
                        return (<span key={index}>{line}<br /></span>)
                    })}
                </div>
            ))}
        </div>
    );
}