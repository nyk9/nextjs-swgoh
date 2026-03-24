import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-xl mx-auto">
        <Link
          href="/"
          className="text-sm text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] transition-colors"
        >
          ← トップ
        </Link>

        <h1 className="text-xl font-bold text-white mt-6 mb-6">About</h1>

        {/* Profile */}
        <div className="border border-[hsl(220,12%,14%)] rounded bg-[hsl(220,16%,10%)] p-5 mb-4">
          <h2 className="text-base font-medium text-white mb-1">nyk9</h2>
          <p className="text-xs text-[hsl(220,10%,52%)] mb-4">開発者</p>
          <div className="space-y-4 text-sm text-[hsl(220,14%,82%)]">
            <p className="leading-relaxed">
              情報系の学部を卒業。SWGoH プレイヤーとして、初心者の方々に役立つ情報を発信するためにこのサイトを開発しています。
            </p>
            <div>
              <p className="text-xs text-[hsl(220,10%,52%)] mb-2">使用技術</p>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "Vercel", "AI SDK"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs border border-[hsl(220,12%,18%)] text-[hsl(220,10%,52%)]"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 text-sm">
          <a
            href="https://discord.gg/yX3pS2WemD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] transition-colors"
          >
            Discord ↗
          </a>
          <a
            href="https://github.com/nyk9/nextjs-swgoh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)] transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
