import unitsRaw from "@/data/.generated/units.json";
import type { Characters } from "@/types/characters/characters";
import { Suspense } from "react";
import { CharactersListClient } from "./_components/CharactersListClient";

const characters = (unitsRaw as Characters[]).filter(
  (c) => c.is_event_variant !== true,
);

export default function CharactersPage() {
  return (
    <Suspense>
      <CharactersListClient characters={characters} />
    </Suspense>
  );
}
