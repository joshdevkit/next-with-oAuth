"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function LogOut() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
      variant={"destructive"}
    >
      Log me out!
    </Button>
  );
}
