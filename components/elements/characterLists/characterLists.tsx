'use client'
import { Characters } from "@/app/data/characters";
import Image from "next/image";
import useSWR from "swr";
// メモ: クライアント側でAPIフェッチする方法  useSWRを使う
const fetcher = (apiUrl: string) => fetch(apiUrl).then((res) => res.json())

const CharacterLists = (props: {
    url: string
}) => {
    const { data, error } = useSWR(props.url, fetcher);

    if (error) return <div>failed to ...</div>
    if (!data) return <div>loading ...</div>

    return (
        <div className="grid grid-cols-5">
            {data.map((item: Characters) => {
                return (
                    <div
                        className=" border border-gray-300 rounded m-1 bg-black"
                        key={`${item.abbreviation}-${item.skill}`}
                    >
                        <h1 className="text-2xl text-center text-white">{item.name}</h1>
                        <div className="flex grid">
                            <Image
                                alt={item.name}
                                src={item.src}
                                className="group"
                                width={100}
                                height={100}
                            />
                            <small className="group">{item.property}</small>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

// export default CharacterLists;

// export async function Name() {
//     const res = await fetch('https://swgoh4jp.com/api/characters', {
//         next: {
//             revalidate: 5,
//         },
//     });
//     const data = await res.json();
//     if (!res.ok) {
//         throw new Error ('Failed to fetch data');
//     }
//     return (
//         <>
//             {data.map((item: Characters) => {
//                 return (
//                     <div
//                         className="border border-gray-300 rounded m-1 bg-black"
//                         key={`${item.abbreviation}-${item.skill}`}
//                     >
//                         <h1 className="text-2xl text-center text-white">{item.name}</h1>
//                         <div className="flex grid">
//                             <Image alt={item.name} src={item.src} className="group" />
//                             <small className="group">{item.property}</small>
//                         </div>
//                     </div>
//                 );
//             })}
//         </>
//     );
// };