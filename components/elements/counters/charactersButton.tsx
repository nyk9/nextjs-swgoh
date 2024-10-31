import characters from "@/app/data/characters";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

export const CharacterButton = (params: {
  characters: string[];
  index: number;
  addCharacter: Dispatch<SetStateAction<string[]>>;
}) => {
  const [searchedCharacters, setSearchedCharacters] = useState<string>("");
  const handleCharacters = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedCharacters(e.target.value);
  };
  const refindCharacters = characters.filter((char) =>
    char.name.includes(searchedCharacters),
  );
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full bg-neutral-600">
          {params.characters[params.index]}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-80 overflow-y-auto">
          <Input
            value={searchedCharacters}
            onChange={handleCharacters}
            placeholder="キャラ名検索"
          />
          {refindCharacters.map((char) => (
            <DropdownMenuItem
              key={char.name}
              className="flex bg-teal-800"
              onClick={() => {
                const characters = [...params.characters];
                characters[params.index] = char.name;
                params.addCharacter(characters);
              }}
            >
              <Image
                src={char.src}
                alt={char.name}
                width={50}
                height={50}
                unoptimized={true}
              />
              <p>{char.name}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
