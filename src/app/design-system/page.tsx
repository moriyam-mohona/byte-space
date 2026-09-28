/**
 * Design System & Verification Showcase Page.
 *
 * Demonstrates:
 * 1. Product Color System (Base, Primary, Secondary, Feedback tokens).
 * 2. Typography Scale (Headings & Body font-sizes, line-heights, letter-spacings, weights).
 * 3. Ubuntu Sans Typography system.
 * 4. Interactive Components Demo.
 */

import Link from "next/link";
import { InteractiveDonationDemo } from "@/shared/components/preview/InteractiveDonationDemo";
import { ColorPalettePreview } from "@/shared/components/preview/ColorPalettePreview";
import { TypographyPreview } from "@/shared/components/preview/TypographyPreview";

export const metadata = {
  title: "Design System | Byte Space",
  description: "Product color palette and typography system showcase",
};

export default function DesignSystemPage() {
  const fontWeights = [
    { label: "400 — Regular", className: "font-normal" },
    { label: "500 — Medium", className: "font-medium" },
    { label: "600 — Semibold", className: "font-semibold" },
    { label: "700 — Bold", className: "font-bold" },
  ];

  return (
    <main className="container py-12 space-y-12">
      {/* ─── Header Navigation Bar ──────────────────────────────────────── */}
      <header className="border-b border-gray-200 dark:border-gray-800 pb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-semibold text-primary hover:underline"
            >
              ← Back to Landing
            </Link>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 dark:bg-primary-950/80 dark:text-primary-300">
              Language: English (en)
            </span>
          </div>

          <h1 className="text-heading-3 sm:text-heading-2 font-semibold text-gray-900 dark:text-white">
            Design System &amp; Styleguide
          </h1>
          <p className="text-body-md text-gray-500 dark:text-gray-400 mt-1">
            Byte Space • Ubuntu Sans
          </p>
        </div>
      </header>

      {/* ─── Hero Section ───────────────────────────────────────────────── */}
      <section className="rounded-3xl border border-gray-200 dark:border-gray-800 p-8 sm:p-12 bg-linear-to-b from-primary-25/40 to-white dark:from-gray-900/60 dark:to-gray-950 space-y-6 shadow-xs">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary dark:text-primary-400">
          Non-Profit Humanitarian Foundation
        </span>

        <h2 className="text-heading-2 sm:text-heading-1 lg:text-hero font-semibold text-gray-950 dark:text-white max-w-4xl">
          In Service of Humanity, Rights &amp; Safety—Building a Beautiful, Prosperous &amp; Equal Bangladesh
        </h2>

        <p className="text-body-lg sm:text-body-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
          Ensuring safe shelter, education, healthcare, and equal opportunities for all is our commitment.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            type="button"
            className="px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-xs hover:bg-primary-600 transition cursor-pointer"
          >
            Donate Now
          </button>
          <button
            type="button"
            className="px-6 py-3 border border-secondary/20 dark:border-secondary-lighter text-secondary dark:text-secondary-soft font-medium rounded-xl hover:bg-secondary/5 dark:hover:bg-secondary-lighter/30 transition cursor-pointer"
          >
            Join Us Today
          </button>
        </div>
      </section>

      {/* ─── Key Stats Grid ─────────────────────────────────────────────── */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40">
          <p className="text-heading-3 font-semibold tracking-tight text-gray-900 dark:text-white">
            64
          </p>
          <p className="text-body-sm text-gray-500 dark:text-gray-400 mt-1">
            Presence in 64 Districts
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40">
          <p className="text-heading-3 font-semibold tracking-tight text-gray-900 dark:text-white">
            22,500+
          </p>
          <p className="text-body-sm text-gray-500 dark:text-gray-400 mt-1">
            22,500+ Beneficiaries Served
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40">
          <p className="text-heading-3 font-semibold tracking-tight text-gray-900 dark:text-white">
            1,200+
          </p>
          <p className="text-body-sm text-gray-500 dark:text-gray-400 mt-1">
            1,200+ Active Volunteers
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40">
          <p className="text-heading-3 font-semibold tracking-tight text-primary dark:text-primary-400">
            98%
          </p>
          <p className="text-body-sm text-gray-500 dark:text-gray-400 mt-1">
            98% Financial Transparency
          </p>
        </div>
      </section>

      {/* ─── Programs Section ───────────────────────────────────────────── */}
      <section className="space-y-6">
        <div>
          <h3 className="text-heading-3 font-semibold text-gray-900 dark:text-white">
            Our Core Humanitarian Initiatives
          </h3>
          <p className="text-body-sm text-gray-500 dark:text-gray-400 mt-1">
            Community-driven initiatives fostering real, lasting change on the ground
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 space-y-3">
            <h4 className="text-heading-5 font-semibold text-gray-900 dark:text-white">
              Child Safety &amp; Education
            </h4>
            <p className="text-body-md text-gray-600 dark:text-gray-300 leading-relaxed">
              Providing street children with safe shelters, foundational learning, and nutritious daily meals.
            </p>
            <span className="inline-block text-body-sm font-semibold text-primary dark:text-primary-400 pt-1">
              Learn More →
            </span>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 space-y-3">
            <h4 className="text-heading-5 font-semibold text-gray-900 dark:text-white">
              Women Empowerment &amp; Legal Aid
            </h4>
            <p className="text-body-md text-gray-600 dark:text-gray-300 leading-relaxed">
              Crisis shelter, trauma counseling, and free legal representation for survivors of abuse.
            </p>
            <span className="inline-block text-body-sm font-semibold text-primary dark:text-primary-400 pt-1">
              Learn More →
            </span>
          </div>

          <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 space-y-3">
            <h4 className="text-heading-5 font-semibold text-gray-900 dark:text-white">
              Emergency Disaster Relief
            </h4>
            <p className="text-body-md text-gray-600 dark:text-gray-300 leading-relaxed">
              Rapid-response delivery of food, clean water, warm clothing, and medical aid during crises.
            </p>
            <span className="inline-block text-body-sm font-semibold text-primary dark:text-primary-400 pt-1">
              Learn More →
            </span>
          </div>
        </div>
      </section>

      {/* ─── Client Interactive Translation Island ─────────────────────── */}
      <section className="space-y-4">
        <div>
          <h3 className="text-heading-4 font-semibold text-gray-900 dark:text-white">
            Interactive Donation Calculator
          </h3>
          <p className="text-body-sm text-gray-500 dark:text-gray-400">
            Real-time donation selection demo.
          </p>
        </div>
        <InteractiveDonationDemo />
      </section>

      {/* ─── Typography Weights Preview ─────────────────────────────────── */}
      <section className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          Typography &amp; Font Weight Preview (Ubuntu Sans)
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {fontWeights.map(({ label, className }) => (
            <div
              key={label}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 space-y-1"
            >
              <span className="text-xs font-mono text-gray-400">{label}</span>
              <p className={`text-xl ${className}`}>
                In Service of Humanity, Rights &amp; Safety
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Typography System Preview ──────────────────────────────────── */}
      <TypographyPreview />

      {/* ─── Product Color System Preview ───────────────────────────────── */}
      <ColorPalettePreview />

      {/* ─── Footer ─────────────────────────────────────────────────────── */}
      <footer className="pt-8 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p>© 2026 Byte Space Foundation. All rights reserved.</p>
        <p>A non-profit organization operating women and child protection, emergency response, and community support networks across 64 districts of Bangladesh.</p>
      </footer>
    </main>
  );
}
