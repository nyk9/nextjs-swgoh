import unitsRaw from "@/data/.generated/units.json";
import type { Characters } from "@/types/characters/characters";
import { NextResponse } from "next/server";

const characters = (unitsRaw as Characters[]).filter(
  (c) => c.is_event_variant !== true,
);

export async function GET() {
  return NextResponse.json(characters);
}
