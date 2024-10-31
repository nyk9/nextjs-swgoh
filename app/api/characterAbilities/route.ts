import characterAbilities from "@/app/data/characterAbilities";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(characterAbilities);
}
