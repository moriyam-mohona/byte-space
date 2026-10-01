"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl w-full max-w-lg mx-auto space-y-6">
      <div className="space-y-1.5 text-left">
        <span className="font-body text-body-m sm:text-body-l text-primary-800">Sign In</span>
        <h2 className="font-heading text-heading-s lg:text-heading-m text-neutral-950 tracking-tight">
          Welcome Back
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="space-y-1.5">
          <label className="block font-body text-label-s text-neutral-950">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="designer@example.com"
            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 font-body text-body-s focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block font-body text-label-s text-neutral-950">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 font-body text-body-s focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-secondary text-neutral-950 font-heading text-label-s shadow-md hover:bg-secondary-400 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* ─── Social Logins Divider ─── */}
      <div className="relative flex items-center justify-center mt-10 sm:mt-14 lg:mt-18 mb-6 sm:mb-8 lg:mb-10">
        <div className="w-full border-t border-neutral-200" />
        <span className="bg-white px-3 font-body text-body-l text-neutral-400 font-medium">
          or
        </span>
        <div className="w-full border-t border-neutral-200" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex items-center justify-center gap-4">
        {/* Facebook Button */}
        <button
          type="button"
          className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 active:scale-95 transition-all cursor-pointer shadow-xs"
          aria-label="Sign in with Facebook"
        >
          <Image
            src="/icons/auth/facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </button>

        {/* Google Button */}
        <button
          type="button"
          className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 active:scale-95 transition-all cursor-pointer shadow-xs"
          aria-label="Sign in with Google"
        >
          <Image
            src="/icons/auth/google.svg"
            alt="Google"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </button>
      </div>

      <div className="pt-2 text-center">
        <p className="font-body text-body-m text-neutral-600">
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
