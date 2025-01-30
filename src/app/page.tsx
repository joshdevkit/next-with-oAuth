import { getServerSession } from "next-auth";
import { authOpt } from "./utils/auth";
import LogOut from "@/components/LogOut";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOpt);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 bg-white rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Hello, JoshDev!</h1>
        {session ? (
          <>
            <p className="text-green-600 font-medium mt-4">
              ✅ You are logged in
            </p>
            <LogOut />
          </>
        ) : (
          <>
            <p className="text-red-600 font-medium mt-4">⚠️ Please login</p>
            <Link
              href="/auth"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Go to Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
