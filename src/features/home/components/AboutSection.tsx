import Image from "next/image";
import Link from "next/link";
import { PillBadge, SectionHeading } from "@/shared/components/ui";

export function AboutSection() {
  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      <div className="container">
        {/* Soft Pink Background Card */}
        <div className="relative w-full rounded-3xl sm:rounded-4xl bg-primary-25 border border-primary-100/40 p-6 sm:p-8 lg:p-10 xl:p-11 overflow-hidden shadow-xs">
          {/* Top Right Decorative Heart Balloons Motif */}
          <div className="absolute top-5 right-5 sm:top-6 sm:right-8 z-0 pointer-events-none opacity-85">
            <Image
              src="/images/love.svg"
              alt="Heart balloons motif"
              width={80}
              height={80}
              className="w-14 sm:w-16 lg:w-20 h-auto"
            />
          </div>

          {/* Bottom Left Charity Line Art Watermark */}
          <div className="absolute bottom-0 left-0 z-0 pointer-events-none opacity-20 sm:opacity-25">
            <Image
              src="/images/charity.svg"
              alt="Charity watermark illustration"
              width={260}
              height={280}
              className="w-40 sm:w-52 lg:w-60 h-auto"
            />
          </div>

          {/* Main Content Layout: Left Visuals | Right Text Column */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-12">
            {/* Left Visuals: Staggered Composition (Bottom-aligned) */}
            <div className="w-full lg:w-auto shrink-0 flex items-end justify-center gap-3.5 sm:gap-4.5">
              {/* Column 1: Logo (top) + Boy Portrait (bottom) */}
              <div className="h-64 sm:h-74 lg:h-76 xl:h-84 flex flex-col items-center justify-between gap-3.5 sm:gap-4 w-28 sm:w-32 lg:w-32 xl:w-34 shrink-0">
                {/* Foundation Vertical Logo */}
                <div className="w-full flex items-center justify-center">
                  <Image
                    src="/icons/logo.svg"
                    alt="Byte Space Foundation Logo"
                    width={130}
                    height={140}
                    className="w-24 sm:w-28 lg:w-28 xl:w-30 h-auto object-contain"
                    priority
                  />
                </div>

                {/* Boy Portrait */}
                <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/about_portrait.jpg"
                    alt="Child portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Column 2: Taller Group Photo (aligned at bottom with Boy Portrait) */}
              <div className="relative w-44 sm:w-52 lg:w-48 xl:w-56 h-64 sm:h-74 lg:h-76 xl:h-84 rounded-3xl overflow-hidden shadow-sm shrink-0">
                <Image
                  src="/images/about_group.jpg"
                  alt="Group of smiling children"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="flex-1 w-full space-y-2.5 sm:space-y-3 text-left">
              {/* Pill Badge */}
              <PillBadge size="md" className="bg-surface text-primary">
                Who We Are
              </PillBadge>

              {/* Main Heading */}
              <SectionHeading
                className="leading-snug tracking-tight"
                titlePrefix="Byte Space — "
                highlight="Beacon of Hope"
              />

              {/* Paragraph 1 */}
              <p className="text-body-sm sm:text-body-md text-secondary-text font-normal leading-relaxed">
                Established in 2015, Byte Space is a national social impact organization in Bangladesh dedicated to women &amp; child protection, missing child recovery, blood donation network, legal aid, and humanitarian relief.
              </p>

              {/* Paragraph 2 */}
              <p className="text-body-sm sm:text-body-md text-secondary-text font-normal leading-relaxed">
                Our work is rooted in human dignity, social justice, and equality. We believe every individual — especially women and children — deserves a safe, honorable, and opportunity-filled life.
              </p>

              {/* Action Buttons & 100% Stat Callout Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 sm:pt-3">
                {/* Primary & Secondary Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
                  <Link
                    href="/donation"
                    className="bg-primary hover:bg-primary-600 text-surface font-bold text-body-sm px-6 py-2.5 rounded-full shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center shrink-0"
                  >
                    Donate Now
                  </Link>

                  <Link
                    href="/blood"
                    className="border border-primary bg-surface text-primary hover:bg-primary-25 font-bold text-body-sm px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center shrink-0"
                  >
                    <span>Join as a Blood Donor</span>
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* 100% Stat Callout */}
                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                  <span className="text-2xl sm:text-3xl font-bold text-primary leading-none">
                    100%
                  </span>
                  <div className="flex flex-col text-xs font-bold text-secondary leading-tight">
                    <span>Non-Profit</span>
                    <span>&amp; Transparent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
