"use client";

import type { Session } from "next-auth";
import type { ReactNode } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function HeaderClient({
  user,
}: {
  user: Session["user"] | null;
}) {
  return (
    <header className="fixed top-0 z-50 w-full bg-[hsl(220,16%,6%)]/95 backdrop-blur-sm border-b border-[hsl(220,12%,14%)]">
      <div className="flex justify-between items-center px-4 py-2.5 max-w-6xl mx-auto">
        <Link
          href="/"
          className="text-sm font-medium text-[hsl(220,14%,82%)] hover:text-white transition-colors tracking-wide"
        >
          SWGoH
          <span className="hidden sm:inline text-[hsl(220,10%,52%)] font-normal ml-2">
            初心者応援データベース
          </span>
        </Link>
        <Menubar className="px-0 bg-transparent border-none">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer p-1.5 rounded hover:bg-[hsl(220,14%,14%)] transition-colors text-[hsl(220,10%,52%)] hover:text-[hsl(220,14%,82%)]">
              <IoMenu className="w-5 h-5" />
            </MenubarTrigger>
            <MenubarContent className="bg-[hsl(220,16%,10%)] border border-[hsl(220,12%,18%)] text-[hsl(220,14%,82%)] min-w-[200px]">
              <MenuLink href="/">ホーム</MenuLink>
              <MenuLink href="/characters">キャラクター</MenuLink>
              <MenuLink href="/ships">艦隊</MenuLink>
              <MenuLink href="/TWCounters">TW カウンター</MenuLink>
              <MenuLink href="/advisor">育成アドバイザー</MenuLink>
              <MenuLink href="/guides">攻略ガイド</MenuLink>
              <MenuLink href="/about">About</MenuLink>
              <div className="my-1 border-t border-white/10" />
              {user ? (
                <>
                  <MenubarItem
                    disabled
                    className="opacity-60 cursor-default text-xs py-2"
                  >
                    {user.name ?? user.email ?? "ログイン中"}
                    {user.role === "ADMIN" ? (
                      <span className="ml-2 rounded bg-amber-300/15 px-1.5 py-0.5 text-[10px] text-amber-100">
                        ADMIN
                      </span>
                    ) : null}
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="cursor-pointer text-sm py-2 hover:bg-[hsl(220,14%,14%)] focus:bg-[hsl(220,14%,14%)]"
                  >
                    ログアウト
                  </MenubarItem>
                </>
              ) : (
                <MenuLink href="/login">ログイン</MenuLink>
              )}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
}

function MenuLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href}>
      <MenubarItem className="cursor-pointer text-sm py-2 hover:bg-[hsl(220,14%,14%)] focus:bg-[hsl(220,14%,14%)]">
        {children}
      </MenubarItem>
    </Link>
  );
}
