import type { Metadata } from "next";
import { requireAuth } from "@/lib/auth/guards";
import AdvisorClient from "./_components/AdvisorClient";

export const metadata: Metadata = {
  title: "育成アドバイザー | swgoh4jp.com",
  description:
    "アライコードを基に、SWGoH の RotE / TW / GAC それぞれの目的に合わせた次の育成優先度を AI が提案します。",
  robots: { index: false, follow: false },
};

export default async function AdvisorPage() {
  await requireAuth("/advisor");
  return <AdvisorClient />;
}
