"use client";

import { useState } from "react";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full max-w-[480px] mx-auto space-y-6">
      <div className="space-y-1.5 text-left">
        <span className="font-body text-label-s text-primary font-semibold">
          Sign In
        </span>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[32px] text-neutral-950 tracking-tight">
          Welcome Back
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="space-y-1.5">
          <label className="block font-body text-label-s text-neutral-700 font-medium">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="designer@example.com"
            className="w-full px-4 py-3 rounded-xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 font-body text-body-s focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block font-body text-label-s text-neutral-700 font-medium">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="w-full px-4 py-3 rounded-xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 font-body text-body-s focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-secondary text-neutral-950 font-heading font-bold text-label-m shadow-md hover:bg-[#d8ff1a] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* ─── Social Logins Divider ─── */}
      <div className="relative flex items-center justify-center my-4">
        <div className="w-full border-t border-neutral-200" />
        <span className="bg-white px-3 text-[12px] text-neutral-400 font-medium">
          or
        </span>
        <div className="w-full border-t border-neutral-200" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex items-center justify-center gap-4">
        {/* Facebook Button */}
        <button
          type="button"
          className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 active:scale-95 transition-all cursor-pointer shadow-2xs"
          aria-label="Sign in with Facebook"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        {/* Google Button */}
        <button
          type="button"
          className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 active:scale-95 transition-all cursor-pointer shadow-2xs"
          aria-label="Sign in with Google"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.34 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.97 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
        </button>
      </div>

      <div className="pt-2 text-center">
        <p className="font-body text-label-s text-neutral-600">
          New user?{" "}
          <Link
            href="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
