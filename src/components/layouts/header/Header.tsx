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
    <header className="fixed top-0 z-50 w-full">
      <div className="flex justify-between items-center px-4 py-3 bg-[hsl(228,40%,6%)]/95 backdrop-blur-md text-[hsl(213,32%,82%)]">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <div className="flex flex-col items-start">
            <span className="font-display text-xs tracking-[0.2em] text-[hsl(51,100%,50%)] leading-none" style={{ textShadow: '0 0 10px hsla(51,100%,50%,0.5)' }}>
              SWGoH
            </span>
            <span className="text-xs font-medium text-[hsl(213,32%,65%)] hidden sm:block leading-none mt-0.5 tracking-wide">
              初心者応援データベース
            </span>
          </div>
        </Link>
        <Menubar className="px-0 bg-transparent border-none">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer p-2 rounded-md hover:bg-[hsl(228,28%,18%)] transition-colors">
              <IoMenu className="w-5 h-5" />
            </MenubarTrigger>
            <MenubarContent className="bg-[hsl(228,35%,11%)] border border-[hsl(228,20%,22%)] text-[hsl(213,32%,82%)] min-w-[200px] shadow-2xl shadow-black/50">
              <Link href="/">
                <MenubarItem className="cursor-pointer hover:bg-[hsl(228,28%,18%)] focus:bg-[hsl(228,28%,18%)] text-sm py-2.5">
                  🏠 Home
                </MenubarItem>
              </Link>
              <Link href="/characters">
                <MenubarItem className="cursor-pointer hover:bg-[hsl(228,28%,18%)] focus:bg-[hsl(228,28%,18%)] text-sm py-2.5">
                  ⚔ Characters
                </MenubarItem>
              </Link>
              <Link href="/TWCounters">
                <MenubarItem className="cursor-pointer hover:bg-[hsl(228,28%,18%)] focus:bg-[hsl(228,28%,18%)] text-sm py-2.5">
                  🛡 TW Counters
                </MenubarItem>
              </Link>
              <Link href="/advisor">
                <MenubarItem className="cursor-pointer hover:bg-[hsl(228,28%,18%)] focus:bg-[hsl(228,28%,18%)] text-sm py-2.5">
                  <span className="text-[hsl(51,100%,50%)]">🤖 育成アドバイザー</span>
                </MenubarItem>
              </Link>
              <MenubarItem disabled className="opacity-35 cursor-not-allowed text-sm py-2.5">
                🚀 Ships
                <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded border border-[hsl(228,20%,28%)] text-[hsl(215,16%,47%)]">
                  Coming Soon
                </span>
              </MenubarItem>
              <Link href="/about">
                <MenubarItem className="cursor-pointer hover:bg-[hsl(228,28%,18%)] focus:bg-[hsl(228,28%,18%)] text-sm py-2.5">
                  👤 About
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      {/* Holographic accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[hsl(199,92%,64%)]/30 to-transparent" />
    </header>
  );
};
