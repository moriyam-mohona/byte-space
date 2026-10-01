"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Auth Error:", error);
  }, [error]);

  return (
    <div className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-10 text-center text-white space-y-6 shadow-2xl">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 text-secondary">
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <div className="space-y-2">
        <h2 className="font-heading font-bold text-2xl text-white">
          Authentication Error
        </h2>
        <p className="font-body text-body-s text-white/80 leading-relaxed">
          We encountered a problem loading this authentication view.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={() => reset()}
          className="w-full sm:w-auto font-heading font-bold text-label-s bg-secondary text-neutral-950 px-6 py-3 rounded-full hover:bg-secondary-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="w-full sm:w-auto font-heading font-semibold text-label-s bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
