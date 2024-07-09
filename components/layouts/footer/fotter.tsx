import { Separator } from "@/components/ui/separator";

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
                    {/* <Link href="/privacy-policy"> */}
                    <div> プライバシーポリシー・免責事項 </div>
                    {/* </Link> */}
                    <Separator orientation="vertical" className="bg-red-900" />
                    <div>a</div>
                </div>
            </footer>
        </>
    );
};