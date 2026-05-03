import shipsRaw from "@/data/.generated/ships.json";
import type { Ship } from "@/types/ships/ships";
import { Suspense } from "react";
import { ShipsListClient } from "./_components/ShipsListClient";

const ships = shipsRaw as Ship[];

export default function ShipsPage() {
  return (
    <Suspense>
      <ShipsListClient ships={ships} />
    </Suspense>
  );
}
