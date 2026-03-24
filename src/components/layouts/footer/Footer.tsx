import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const Footer = () => {
    return (
        <>
            <footer className="bg-slate-500">
                <div>
                    <p className="text-center">
                        swgoh4jp.com is not affiliated with EA, EA Capital Games, Disney or Lucasfilm LTD.
                    </p>
                </div>

                <Separator className="my-2" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <Link href="/privacy-policy" className="hover:underline">
                        プライバシーポリシー・免責事項
                    </Link>
                    <Separator orientation="vertical" className="bg-red-900" />
                    <div>© {new Date().getFullYear()} swgoh4jp.com</div>
                </div>
            </footer>
        </>
    );
};