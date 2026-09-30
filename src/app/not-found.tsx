import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-primary-800 text-white flex flex-col justify-between overflow-hidden relative selection:bg-secondary selection:text-neutral-950">
      {/* ─── Top Header Navigation ─── */}
      <Navbar />

      {/* ─── Geometric Grid Overlay (88px square grid) ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30 select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "88px 88px",
        }}
        aria-hidden="true"
      />

      {/* ─── 404 Visual Content Stage ─── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 text-center my-auto">
        <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
          {/* Giant Background 404 with Secondary Lime Gradient */}
          <div
            className="font-heading font-black text-[150px] xs:text-[200px] sm:text-[280px] md:text-[340px] lg:text-[400px] leading-none select-none tracking-tighter"
            style={{
              background:
                "linear-gradient(180deg, var(--color-secondary-500) 0%, rgba(203, 252, 1, 0.85) 35%, rgba(203, 252, 1, 0.2) 75%, transparent 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            aria-hidden="true"
          >
            404
          </div>

          {/* Overlaid Headline */}
          <div className="-mt-14 xs:-mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 relative z-20 space-y-4 sm:space-y-6">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-heading-l text-white tracking-tight leading-tight drop-shadow-md">
              The page you are looking <br className="hidden sm:inline" />
              for doesn&apos;t exist
            </h1>

            <p className="font-body text-white/85 text-body-s sm:text-body-m max-w-md sm:max-w-lg mx-auto font-normal leading-relaxed">
              Try to use a correct url or go back to homepage to start again
            </p>

            <div className="pt-3 sm:pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center font-heading font-bold text-label-s sm:text-label-m bg-secondary text-neutral-950 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full shadow-lg hover:bg-secondary-400 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Subtle bottom spacing */}
      <div className="h-6 sm:h-10" aria-hidden="true" />
    </div>
  );
}
