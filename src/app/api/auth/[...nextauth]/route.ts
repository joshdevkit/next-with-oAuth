import { authOpt } from "@/app/utils/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOpt);

export { handler as GET, handler as POST };
