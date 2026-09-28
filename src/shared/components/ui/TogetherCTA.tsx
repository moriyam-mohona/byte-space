import React from "react";
import Link from "next/link";
import { PillBadge } from "./PillBadge";

interface TogetherCTAProps {
  className?: string;
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  donateHref?: string;
  joinHref?: string;
}

/**
 * Reusable "Together Forward" Call to Action Card Section.
 * Designed to wow users across any page with clean aesthetics, pill badge,
 * bold highlighted headline, and dual action buttons.
 */
export function TogetherCTA({
  className = "",
  badge = "Move Forward Together",
  titlePrefix = "You too can be part of the ",
  titleHighlight = "change.",
  subtitle = "Every donation, every hour, and every share helps secure a family's safety.",
  donateHref = "/donation",
  joinHref = "/volunteer",
}: TogetherCTAProps) {
  return (
    <section className={`container mx-auto px-4 py-8 sm:py-12 ${className}`}>
      <div className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-gray-100 shadow-lg shadow-slate-100/70 p-7 sm:p-14 text-center relative overflow-hidden">
        {/* Top Pill Badge */}
        <div className="flex justify-center mb-4">
          <PillBadge
            variant="primary"
            className="bg-pink-50/90 text-primary border border-pink-100/80 font-semibold px-4 py-1"
          >
            {badge}
          </PillBadge>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-secondary tracking-tight">
          <span>{titlePrefix}</span>
          <span className="text-primary font-extrabold">
            {titleHighlight}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-secondary/70 max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed font-normal">
          {subtitle}
        </p>

        {/* Dual Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-6 sm:pt-8">
          {/* Donate Button */}
          <Link
            href={donateHref}
            className="bg-primary hover:bg-primary-600 text-white font-bold text-xs sm:text-sm px-7 sm:px-8 py-3.5 rounded-full shadow-lg shadow-pink-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Donate
          </Link>

          {/* Join Us Outlined Button */}
          <Link
            href={joinHref}
            className="border-2 border-primary text-primary hover:bg-pink-50 font-bold text-xs sm:text-sm px-7 sm:px-8 py-3 rounded-full inline-flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Join With Us</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
