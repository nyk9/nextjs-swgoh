"use client";

import { signIn } from "next-auth/react";

type LoginProvider = {
  id: string;
  label: string;
};

export default function LoginForm({
  providers,
  callbackUrl,
}: {
  providers: LoginProvider[];
  callbackUrl: string;
}) {
  if (providers.length === 0) {
    return (
      <p className="mt-6 rounded-xl border border-amber-200/25 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100">
        OAuth provider が設定されていません。
        <code>AUTH_GITHUB_ID</code> / <code>AUTH_GITHUB_SECRET</code> または
        <code>AUTH_GOOGLE_ID</code> / <code>AUTH_GOOGLE_SECRET</code>{" "}
        を設定してください。
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {providers.map((provider) => (
        <button
          key={provider.id}
          type="button"
          onClick={() => signIn(provider.id, { callbackUrl })}
          className="w-full rounded-xl border border-white/20 bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
        >
          {provider.label} でログイン
        </button>
      ))}
    </div>
  );
}
