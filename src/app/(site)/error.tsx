"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function SiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Site Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-primary-800 bg-hero-grid text-white flex flex-col justify-between overflow-hidden relative selection:bg-secondary selection:text-neutral-950">
      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-16 text-center my-auto">
        <div className="max-w-lg mx-auto space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-secondary mb-2">
            <svg
              className="w-8 h-8"
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

          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Failed to load page
          </h1>

          <p className="font-body text-white/80 text-body-s sm:text-body-m leading-relaxed">
            We encountered a problem while loading this section. Please try again or return to the homepage.
          </p>

          {error.digest && (
            <p className="text-xs font-mono text-white/60 bg-black/20 py-1.5 px-3 rounded-md inline-block">
              Digest: {error.digest}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => reset()}
              className="font-heading font-bold text-label-s sm:text-label-m bg-secondary text-neutral-950 px-8 py-3.5 rounded-full shadow-lg hover:bg-secondary-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="font-heading font-semibold text-label-s sm:text-label-m bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full backdrop-blur-md transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <div className="h-10" aria-hidden="true" />
    </div>
  );
}
