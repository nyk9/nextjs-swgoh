import characters from "@/app/data/characters";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const CharacterButton = (params: {
    characters: string[],
    index: number,
    addCharacter: Dispatch<SetStateAction<string[]>>
}) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full bg-neutral-600">{params.characters[params.index]}</DropdownMenuTrigger>
                <DropdownMenuContent className="h-80 overflow-y-auto">
                    {characters.map((char) => (
                        <DropdownMenuItem
                            key={char.name}
                            className="bg-teal-800"
                            onClick={() => {
                                const characters = [...params.characters];
                                characters[params.index] = char.name;
                                params.addCharacter(characters);
                            }}
                        >
                            <Image src={char.src} alt={char.name} width={50} height={50} />
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}