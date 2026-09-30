"use client";

import { useState } from "react";
import Link from "next/link";

export function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full max-w-[480px] mx-auto space-y-6">
      <div className="space-y-1.5 text-left">
        <span className="font-body text-label-s text-primary font-semibold">
          Create an Account
        </span>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[32px] text-neutral-950 tracking-tight">
          Welcome to ByteSpace
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="space-y-1.5">
          <label className="block font-body text-label-s text-neutral-700 font-medium">
            Full Name
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jamie Davis"
            className="w-full px-4 py-3 rounded-xl bg-neutral-50/70 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 font-body text-body-s focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

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
            Continue
          </button>
        </div>
      </form>

      <div className="pt-2 text-center">
        <p className="font-body text-label-s text-neutral-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
