import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-[hsl(220,12%,14%)] py-6 px-4 mt-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs text-[hsl(220,8%,36%)]">
          本サイトは EA、EA Capital Games、Disney、Lucasfilm
          の公式とは無関係な非公式ファンサイトです。
        </p>
        <p className="text-center text-xs text-[hsl(220,8%,36%)] mt-1">
          swgoh4jp.com is not affiliated with EA, EA Capital Games, Disney or Lucasfilm LTD.
        </p>
        <div className="flex justify-center items-center gap-4 mt-3 text-xs text-[hsl(220,8%,36%)]">
          <Link href="/privacy-policy" className="hover:text-[hsl(220,14%,82%)] transition-colors">
            プライバシーポリシー
          </Link>
          <span>|</span>
          <span>&copy; 2026 swgoh4jp.com</span>
        </div>
      </div>
    </footer>
  );
};
