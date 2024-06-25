import characters from "@/app/data/characters";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const CharactersButton = (props: {
    characters: string,
    addCharacters: Dispatch<SetStateAction<string>>
}) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full bg-neutral-600">{props.characters}</DropdownMenuTrigger>
                <DropdownMenuContent className="h-80 overflow-y-auto">
                    {characters.map((char) => (
                        <DropdownMenuItem key={char.name} className="bg-teal-800" onClick={(e) => props.addCharacters(char.name)}>
                            <Image src={char.src} alt={char.name} width={50} height={50} />
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}