import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[hsl(228,40%,6%)] border-t border-[hsl(228,20%,18%)] py-4 px-4">
      <p className="text-center text-xs text-[hsl(215,16%,47%)]">
        swgoh4jp.com is not affiliated with EA, EA Capital Games, Disney or Lucasfilm LTD.
      </p>
      <div className="flex justify-center items-center gap-4 mt-3 text-xs text-[hsl(215,16%,47%)]">
        <Link href="/privacy-policy" className="hover:text-[hsl(213,32%,82%)] transition-colors">
          プライバシーポリシー・免責事項
        </Link>
        <span className="text-[hsl(228,20%,22%)]">|</span>
        <span>&copy; 2026 swgoh4jp.com</span>
      </div>
    </footer>
  );
};
