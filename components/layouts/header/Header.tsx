"use client"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu } from "@/components/ui/menubar";
import { MenubarTrigger } from "@radix-ui/react-menubar";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export const Header = () => {
    return (
        <header className="flex fixed top-0 w-full justify-between flex-wrap py-1 bg-black text-white">
            <h1 className="text-lg pt-1">
                <Link href="/">初心者応援データベース</Link>
            </h1>
            <Menubar className="px-3 bg-black border-none">
                <MenubarMenu>
                    <MenubarTrigger>
                        <IoMenu />
                    </MenubarTrigger>
                    <MenubarContent className="bg-black text-white">
                        <Link href="/">
                            <MenubarItem>
                                Home
                            </MenubarItem>
                        </Link>
                        <Link href="/about">
                            <MenubarItem>
                                About
                            </MenubarItem>
                        </Link>
                        <Link href="/characters">
                            <MenubarItem>
                                Characters
                            </MenubarItem>
                        </Link>
                        <Link href="/ships">
                            <MenubarItem>
                                Ships(未実装)
                            </MenubarItem>
                        </Link>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </header>
    );
};