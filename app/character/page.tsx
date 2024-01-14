"use client";
import Image from "next/image";
import Link from "next/link";
import characters, { Characters } from "./characters";
import "./styles.css";



export default function Character(
    prop:{
        prop: React.ReactNode
    }
) {
    const char: Characters[] = characters;
    return (
        <>
            <Link href={"/"}>Home</Link>
            {char.map((char) => {
                return (
                    <div className="p-4">
                        <h1 className="text-orange-900">{char.name}</h1>
                        <Image alt={char.name} src={char.src}></Image>
                        <span>{char.tag}</span>
                    </div>
                );
            })}
        </>
    );
}