"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
} from "@/components/ui/menubar";
import { MenubarTrigger } from "@radix-ui/react-menubar";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-[hsl(220,16%,6%)]/95 backdrop-blur-sm border-b border-[hsl(220,12%,14%)]">
      <div className="flex justify-between items-center px-4 py-2.5 max-w-6xl mx-auto">
        <Link
          href="/"
          className="text-sm font-medium text-[hsl(220,14%,82%)] hover:text-white transition-colors tracking-wide"
        >
          SWGoH<span className="hidden sm:inline text-[hsl(220,10%,52%)] font-normal ml-2">初心者応援データベース</span>
        </Link>
        <Menubar className="px-0 bg-transparent border-none">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer p-1.5 rounded hover:bg-[hsl(220,14%,14%)] transition-colors text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)]">
              <IoMenu className="w-5 h-5" />
            </MenubarTrigger>
            <MenubarContent className="bg-[hsl(220,16%,10%)] border border-[hsl(220,12%,18%)] text-[hsl(220,14%,82%)] min-w-[180px]">
              <Link href="/">
                <MenubarItem className="cursor-pointer text-sm py-2 hover:bg-[hsl(220,14%,14%)] focus:bg-[hsl(220,14%,14%)]">
                  ホーム
                </MenubarItem>
              </Link>
              <Link href="/characters">
                <MenubarItem className="cursor-pointer text-sm py-2 hover:bg-[hsl(220,14%,14%)] focus:bg-[hsl(220,14%,14%)]">
                  キャラクター
                </MenubarItem>
              </Link>
              <Link href="/TWCounters">
                <MenubarItem className="cursor-pointer text-sm py-2 hover:bg-[hsl(220,14%,14%)] focus:bg-[hsl(220,14%,14%)]">
                  TW カウンター
                </MenubarItem>
              </Link>
              <Link href="/advisor">
                <MenubarItem className="cursor-pointer text-sm py-2 hover:bg-[hsl(220,14%,14%)] focus:bg-[hsl(220,14%,14%)]">
                  育成アドバイザー
                </MenubarItem>
              </Link>
              <MenubarItem disabled className="opacity-40 cursor-not-allowed text-sm py-2">
                Ships<span className="ml-2 text-[10px] text-[hsl(220,8%,36%)]">準備中</span>
              </MenubarItem>
              <Link href="/about">
                <MenubarItem className="cursor-pointer text-sm py-2 hover:bg-[hsl(220,14%,14%)] focus:bg-[hsl(220,14%,14%)]">
                  About
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
};
