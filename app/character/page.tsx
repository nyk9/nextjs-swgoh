"use client";
import Image from "next/image";
import Link from "next/link";
import characters, { Characters } from "./characters";
import "./styles.css";



export default function Character(
    // prop:{
    //     prop: React.ReactNode
    // }
) {
    const char: Characters[] = characters;
    return (
        <>
            <Link 
                href={"/"}
                className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30"
            >Home</Link>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left p-4">
                {char.map((char) => {
                    return (
                        <div className="border border-gray-300 rounded m-1" key={char.name}>
                            <h1 className="text-yellow-900">{char.name}</h1>
                            <Image alt={char.name} src={char.src}></Image>
                            <span>{char.property}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
}