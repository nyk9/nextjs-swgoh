"use client";

import { Button } from "@/components/ui/button";
import { login } from "./action";

export default function Login() {
  // const user =
  return (
    <>
      <Button onClick={login}>GitHub login</Button>
    </>
  );
}
