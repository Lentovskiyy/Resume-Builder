"use client";

import React, { useState } from 'react';
import { handleLogin } from "@/server-actions/auth";
import {redirect, useRouter} from "next/navigation";
import Link from "next/link"; // Fixed: Correct import for App Router

const Login = () => {
  const router = useRouter(); // 2. Initialize the router hook

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLoginForm = async (e: React.FormEvent) => {


    e.preventDefault();
    setErrorMsg(null); // Reset previous errors
    setLoading(true);

    // Quick frontend guard for password length
    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      const result = await handleLogin(email, password);

      // 3. Evaluate the fresh result object immediately!
      if (result && result.error) {
        setErrorMsg(result.error);
        setLoading(false); // Stop loading since it failed
        return;            // 👈 STOP execution right here so it doesn't redirect!
      }

      // 4. If we reached this line, there was no error returned from the server action!
      router.push("/editor/resumes"); // ✅ Securely navigate using client-side router

    } catch (err: any) {
      setErrorMsg("An unexpected connection error occurred.");
      setLoading(false);
    }

  };
  return (
    <div className="w-full min-h-screen bg-gray-300 text-gray-50 font-sans antialiased flex flex-col justify-between pb-6 md:pb-12 selection:bg-neutral-900 selection:text-gray-50">

      <main className="flex-1 flex items-center justify-center py-2">
        <div className="w-full max-w-xl bg-gray-200 border-2 border-gray-300 p-10 md:p-14 rounded-2xl shadow-sm flex flex-col">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black tracking-tight mb-2 text-gray-950">
              Welcome back to Rezi
            </h2>
            <p className="text-sm text-neutral-700 font-medium leading-relaxed">
              Build an ATS-compliant layout that screeners look for.
            </p>
          </div>

          <button
            type="button"
            className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-gray-300 active:scale-[0.99] p-3 rounded-xl flex items-center justify-center gap-3 font-bold text-sm text-black transition-all duration-150 shadow-sm cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3A11.945 11.945 0 0012 0C7.27 0 3.123 2.6 1 6.423l4.266 3.342z"
              />
              <path
                fill="#4285F4"
                d="M23.864 12.273c0-.818-.073-1.609-.205-2.373H12v4.5H18.65c-.286 1.514-1.14 2.791-2.423 3.655l3.764 2.922c2.2-2.031 3.473-5.023 3.473-8.704z"
              />
              <path
                fill="#FBBC05"
                d="M5.266 14.235A7.09 7.09 0 014.909 12c0-.79.132-1.55.357-2.265L1 6.393A11.954 11.954 0 000 12c0 2.05.518 3.977 1.432 5.664l3.834-3.429z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.955-1.077 7.941-2.918l-3.764-2.922c-1.045.7-2.382 1.114-4.177 1.114-3.218 0-5.945-2.173-6.914-5.1H1.323l-3.832 3.44A11.94 11.94 0 0012 24z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-sm font-mono font-bold tracking-wider text-neutral-500 uppercase">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {errorMsg && (
            <div className="mb-4 p-3 bg-red-100 border-2 border-red-200 text-red-700 rounded-xl text-sm font-medium">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleLoginForm} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-md font-mono font-bold tracking-wider uppercase text-neutral-700">
                YOUR EMAIL
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                value={email} // Fixed: Controlled input binding
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full bg-gray-50 border-2 border-gray-300 focus:border-neutral-900 rounded-xl px-4 py-2.5 text-xl text-gray-950 placeholder-neutral-400 outline-none transition-colors duration-150 shadow-inner disabled:opacity-50"
              />
              <div className="text-xs h-4 select-none opacity-0">Symmetry spacing</div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-md font-mono font-bold tracking-wider uppercase text-neutral-700">
                YOUR PASSWORD
              </label>
              <input
                type="password"
                placeholder="••••••••"
                required
                value={password} // Fixed: Controlled input binding
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full bg-gray-50 border-2 border-gray-300 focus:border-neutral-900 rounded-xl px-4 py-2.5 text-xl text-gray-950 placeholder-neutral-400 outline-none transition-colors duration-150 shadow-inner disabled:opacity-50"
              />
              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  className="text-sm font-mono font-bold underline text-neutral-700 hover:text-black cursor-pointer"
                >
                  Forgot your password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full p-3.5 mt-4 rounded-xl text-lg font-mono font-bold tracking-wider uppercase transition-all duration-150 border-2 bg-neutral-900 border-neutral-900 text-white hover:bg-neutral-800 cursor-pointer shadow-md active:scale-[0.99] disabled:bg-neutral-500 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-md text-neutral-700 font-medium">
              Don't have an account?
              <Link
                href="/signup"
                className="font-bold underline text-gray-950 hover:text-neutral-700 ml-1 cursor-pointer"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="max-w-md w-full mx-auto text-center">
        <p className="text-xs font-mono text-neutral-600 leading-relaxed">
          By continuing, you agree to Rezi's terms of service and strict, ATS-compliant parsing workflow policies.
        </p>
      </footer>
    </div>
  );
};

export default Login;