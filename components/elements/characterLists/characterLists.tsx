"use client"
import { Characters } from "@/app/data/characters";
import Image from "next/image";
import useSWR from "swr";

const fetcher= (apiUrl: string) => fetch(apiUrl).then((res) => res.json())

const CharacterLists =(props: {
    url: string
}) => {
    const { data, error} = useSWR(props.url,fetcher);

    if (error) return <div>failed to ...</div>
    if (!data) return <div>loading ...</div>

    return (
        <>
            {data.map((item: Characters) => {
                return (
                    <div
                        className="border border-gray-300 rounded m-1 bg-black"
                        key={`${item.abbreviation}-${item.skill}`}
                    >
                        <h1 className="text-2xl text-center text-white">{item.name}</h1>
                        <div className="flex grid">
                            <Image alt={item.name} src={item.src} className="group" />
                            <small className="group">{item.property}</small>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default CharacterLists;

