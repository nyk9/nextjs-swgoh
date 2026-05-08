import type { Metadata } from "next";
import Link from "next/link";

import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "ログイン",
  description: "swgoh4jp の管理機能にログインします。",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl } = await searchParams;
  const safeCallbackUrl =
    callbackUrl?.startsWith("/") && !callbackUrl.startsWith("//")
      ? callbackUrl
      : "/";
  const providers = [
    ...(process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET
      ? [{ id: "github", label: "GitHub" }]
      : []),
    ...(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET
      ? [{ id: "google", label: "Google" }]
      : []),
  ];

  return (
    <main className="min-h-screen bg-[hsl(220,16%,6%)] px-4 py-12 text-white">
      <div className="mx-auto max-w-md rounded-2xl border border-white/15 bg-white/[0.03] p-6">
        <Link
          href="/"
          className="text-sm text-white/55 transition hover:text-white/85"
        >
          ← トップへ戻る
        </Link>
        <h1 className="mt-6 text-2xl font-bold">ログイン</h1>
        <p className="mt-2 text-sm leading-relaxed text-white/65">
          TWカウンター投稿など、管理機能を使うにはログインが必要です。
        </p>
        <LoginForm
          providers={providers}
          callbackUrl={safeCallbackUrl}
        />
      </div>
    </main>
  );
}
