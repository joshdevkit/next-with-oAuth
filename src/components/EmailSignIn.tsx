"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { toast } from "@/hooks/use-toast";

export default function EmailSignIn() {
  const [email, setEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function signInWithEmail() {
    if (!email) return;

    setIsLoading(true);
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    setIsLoading(false);

    if (!signInResult) {
      return toast({
        title: "Something went wrong while trying to sign in with email",
        description: "Please try again later",
        variant: "destructive",
        duration: 1500,
      });
    }

    setEmail("");
    return toast({
      title: "Sign in Success!",
      description: "Please check your email to sign in!",
      variant: "default",
      duration: 1500,
    });
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await signInWithEmail();
      }}
    >
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email ?? ""}
            name="email"
            id="email"
            type="email"
            placeholder="m@example.com"
            disabled={isLoading}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Logging you in..." : "Login"}
        </Button>
      </div>
    </form>
  );
}
