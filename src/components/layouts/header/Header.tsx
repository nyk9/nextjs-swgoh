import { auth } from "@/auth";
import HeaderClient from "./HeaderClient";

export const Header = async () => {
  const session = await auth();
  return <HeaderClient user={session?.user ?? null} />;
};
