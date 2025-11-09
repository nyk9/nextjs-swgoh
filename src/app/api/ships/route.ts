import { NextResponse } from "next/server";
import ships from "../../../data/ships";

export async function GET(request: Request) {
  return NextResponse.json(ships);
}
