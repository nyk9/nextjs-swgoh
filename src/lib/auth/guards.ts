import "server-only";

import { redirect } from "next/navigation";
import { cache } from "react";
import type { UserRole } from "@prisma/client";

import { auth } from "@/auth";
import prisma from "@/lib/prisma/prismaClient";

export const getCurrentUser = cache(async () => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return null;

  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
    },
  });
});

export async function requireAuth(callbackUrl?: string) {
  const user = await getCurrentUser();
  if (!user) {
    const target = callbackUrl
      ? `/login?callbackUrl=${encodeURIComponent(callbackUrl)}`
      : "/login";
    redirect(target);
  }
  return user;
}

export async function requireRole(role: UserRole, callbackUrl?: string) {
  const user = await requireAuth(callbackUrl);
  if (user.role !== role) redirect("/TWCounters");
  return user;
}
