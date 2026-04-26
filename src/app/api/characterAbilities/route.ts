import abilitiesRaw from "@/data/.generated/abilities.json";
import type { CharacterAbilities } from "@/types/abilities/abilities";
import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

const abilitiesPath = path.join(
  process.cwd(),
  "src/data/.generated/abilities.json",
);
const lastUpdated = fs.statSync(abilitiesPath).mtime.toISOString();
const abilities: CharacterAbilities[] = (
  abilitiesRaw as Omit<CharacterAbilities, "last_updated">[]
).map((a) => ({
  ...a,
  last_updated: lastUpdated,
}));

export async function GET() {
  return NextResponse.json(abilities);
}
