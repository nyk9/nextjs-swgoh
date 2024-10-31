import { NextResponse } from "next/server";
import characters from "../../data/characters";

export async function GET(request: Request) {
  return NextResponse.json(characters);
}
