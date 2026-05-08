import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAuth } from "@/lib/auth/guards";
import prisma from "@/lib/prisma/prismaClient";
import AdvisorSessionClient from "./_components/AdvisorSessionClient";

export const metadata: Metadata = {
  title: "相談セッション | 育成アドバイザー | swgoh4jp.com",
  description: "AI 育成アドバイザーの相談セッションを継続します。",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const ALLOWED_MODES = ["rote", "tw", "gac"] as const;
type AdvisorMode = (typeof ALLOWED_MODES)[number];

function isAdvisorMode(mode: string): mode is AdvisorMode {
  return (ALLOWED_MODES as readonly string[]).includes(mode);
}

export default async function AdvisorSessionPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const { sessionId } = await params;
  const user = await requireAuth(`/advisor/${sessionId}`);

  const session = await prisma.chatSession.findFirst({
    where: { id: sessionId, userId: user.id },
    select: {
      id: true,
      allycode: true,
      mode: true,
      purpose: true,
      title: true,
      messages: {
        orderBy: { createdAt: "asc" },
        select: { role: true, content: true },
      },
    },
  });

  if (!session) notFound();
  if (!isAdvisorMode(session.mode)) notFound();

  const initialHistory = session.messages.map((m) => ({
    role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
    content: m.content,
  }));

  return (
    <AdvisorSessionClient
      sessionId={session.id}
      allycode={session.allycode}
      mode={session.mode}
      purpose={session.purpose}
      title={session.title}
      initialHistory={initialHistory}
    />
  );
}
