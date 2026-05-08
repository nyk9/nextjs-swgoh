import prisma from "@/lib/prisma/prismaClient";
import { getCurrentUser } from "@/lib/auth/guards";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, error: "ログインが必要です" },
        { status: 401 },
      );
    }
    const {
      allied_leader,
      allied_characters,
      enemy_leader,
      enemy_characters,
      description,
    } = await request.json();

    const counter = await prisma.counter.create({
      data: {
        allied_leader,
        allied_characters,
        enemy_leader,
        enemy_characters,
        description,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: counter,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating counter:", error);
    return NextResponse.json(
      {
        success: false,
        error: "カウンターの作成に失敗しました",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const counters = await prisma.counter.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: counters,
    });
  } catch (error) {
    console.error("Error fetching counters:", error);
    return NextResponse.json(
      {
        success: false,
        error: "カウンターの取得に失敗しました",
      },
      { status: 500 },
    );
  }
}
