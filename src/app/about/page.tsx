import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-[hsl(215,16%,47%)] hover:text-[hsl(213,32%,82%)] transition-colors"
          >
            &larr; トップに戻る
          </Link>
          <h1 className="font-display text-2xl tracking-wider text-[hsl(51,100%,50%)] mt-4">
            About
          </h1>
        </div>

        {/* Profile Card */}
        <div className="rounded-lg border border-[hsl(228,20%,22%)] bg-[hsl(228,32%,13%)] p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-1">nyk9</h2>
          <p className="text-[hsl(215,16%,47%)] text-sm mb-4">
            SWGoH 初心者応援データベース 開発者
          </p>
          <div className="space-y-4 text-sm text-[hsl(213,32%,82%)]">
            <div>
              <h3 className="text-[hsl(199,92%,64%)] font-medium mb-2">自己紹介</h3>
              <p className="leading-relaxed">
                情報系の学部を卒業。SWGoH プレイヤーとして、初心者の方々に役立つ情報を発信するためにこのサイトを開発しています。
              </p>
            </div>
            <div>
              <h3 className="text-[hsl(199,92%,64%)] font-medium mb-2">使用技術</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "Vercel", "AI SDK"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs border border-[hsl(228,20%,22%)] bg-[hsl(228,28%,18%)] text-[hsl(213,32%,82%)]"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-lg border border-[hsl(228,20%,22%)] bg-[hsl(228,32%,13%)] p-6">
          <h3 className="text-[hsl(199,92%,64%)] font-medium mb-3 text-sm">連絡先</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://discord.gg/yX3pS2WemD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[hsl(228,20%,22%)] bg-[hsl(228,28%,18%)] text-sm text-[hsl(213,32%,82%)] hover:border-[hsl(228,20%,30%)] transition-colors"
            >
              Discord サーバー ↗
            </a>
            <a
              href="https://github.com/nyk9/nextjs-swgoh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[hsl(228,20%,22%)] bg-[hsl(228,28%,18%)] text-sm text-[hsl(213,32%,82%)] hover:border-[hsl(228,20%,30%)] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
