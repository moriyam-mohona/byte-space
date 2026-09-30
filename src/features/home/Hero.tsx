"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AvatarGroup } from "@/components/ui/AvatarGroup";

const STUDENT_AVATARS = [
  "/images/avatars/avatar-1.jpg",
  "/images/avatars/avatar-2.jpg",
  "/images/avatars/avatar-3.jpg",
  "/images/avatars/avatar-4.jpg",
];

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  return (
    <section className="relative w-full bg-primary-700 bg-hero-grid overflow-hidden pt-8 sm:pt-14 lg:pt-16 pb-0">
      {/* ─── 3D Floating Shapes: Left Side ─── */}
      {/* Top-Left Lime Zigzag (bleeds partially off the top-left edge) */}
      <div className="absolute -top-6 sm:-top-8 lg:-top-10 -left-12 sm:-left-10 lg:-left-6 w-36 sm:w-56 lg:w-72 h-auto pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/images/hero/lime-zigzag.png"
          alt=""
          width={531}
          height={774}
          priority
          className="w-full h-auto drop-shadow-xl"
          aria-hidden="true"
        />
      </div>

      {/* Mid-Left White Small Zigzag (tilted floating squiggle) */}
      <div className="absolute top-52 sm:top-64 lg:top-72 left-4 sm:left-12 lg:left-24 w-16 sm:w-24 lg:w-32 h-auto pointer-events-none select-none z-10 animate-float-reverse rotate-12">
        <Image
          src="/images/hero/whiye-small-zigzag.png"
          alt=""
          width={354}
          height={352}
          priority
          className="w-full h-auto drop-shadow-md"
          aria-hidden="true"
        />
      </div>

      {/* Bottom-Left White Donut / Torus (BIGGER, tilted ~35deg, right edge close to lime arc) */}
      <div className="absolute bottom-6 sm:bottom-10 lg:bottom-12 -left-6 sm:left-4 lg:left-14 w-44 sm:w-64 lg:w-[340px] h-auto pointer-events-none select-none z-20 animate-float-zoom rotate-12">
        <Image
          src="/images/hero/white-donut.png"
          alt=""
          width={688}
          height={686}
          priority
          className="w-full h-auto drop-shadow-2xl"
          aria-hidden="true"
        />
      </div>

      {/* ─── 3D Floating Shapes: Right Side ─── */}
      {/* Top-Right Lime Cylinder (bleeds partially off the top-right edge) */}
      <div className="absolute -top-4 sm:-top-6 lg:-top-8 -right-12 sm:-right-8 lg:-right-4 w-36 sm:w-56 lg:w-72 h-auto pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/images/hero/lime-cylinder.png"
          alt=""
          width={426}
          height={744}
          priority
          className="w-full h-auto drop-shadow-xl"
          aria-hidden="true"
        />
      </div>

      {/* Mid-Right White Pyramid */}
      <div className="absolute top-56 sm:top-68 lg:top-76 right-4 sm:right-12 lg:right-28 w-20 sm:w-32 lg:w-44 h-auto pointer-events-none select-none z-10 animate-float-subtle">
        <Image
          src="/images/hero/white-pyramid.png"
          alt=""
          width={380}
          height={378}
          priority
          className="w-full h-auto drop-shadow-md"
          aria-hidden="true"
        />
      </div>

      {/* Bottom-Right White Large Zigzag / Spring Coil (BIGGER, close to right side of lime arc) */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 -right-6 sm:right-6 lg:right-16 w-40 sm:w-56 lg:w-[300px] h-auto pointer-events-none select-none z-20 animate-float-reverse">
        <Image
          src="/images/hero/white-large-zigzag.png"
          alt=""
          width={633}
          height={664}
          priority
          className="w-full h-auto drop-shadow-2xl"
          aria-hidden="true"
        />
      </div>

      {/* ─── Center Hero Content (Headline, Subtitle, Search) ─── */}
      <div className="container relative z-30 flex flex-col items-center text-center px-4 sm:px-8">
        {/* Main Headline */}
        <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-heading-l text-white tracking-tight max-w-6xl text-balance">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="text-body-m sm:text-body-l text-white/85 mt-4 sm:mt-5 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* ─── Figma Exact Pill Search Bar (581px Row, 16px Gap) ─── */}
        <form
          onSubmit={handleSearch}
          className="mt-6 sm:mt-9 w-full max-w-[581px] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          {/* White Input Pill (W: 461px, H: 52px, Px: 24px, Gap: 8px) */}
          <div className="w-full sm:w-115.25 h-[52px] bg-white rounded-full px-6 flex items-center gap-2 shadow-md border border-white/20 transition-all focus-within:ring-2 focus-within:ring-white/40">
            {/* Search Lens Icon */}
            <Image
              src="/icons/search.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 shrink-0"
              aria-hidden="true"
            />

            {/* Input field */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              aria-label="Search for courses, topics, or creators"
              className="w-full bg-transparent text-neutral-900 placeholder:text-neutral-400 text-body-m focus:outline-hidden"
            />
          </div>

          {/* Lime Search Button Pill (W: 104px, H: 46px/52px, Px: 24px) */}
          <button
            type="submit"
            className="w-full sm:w-[104px] h-[48px] sm:h-[52px] rounded-full bg-secondary text-neutral-950 text-label-m font-semibold flex items-center justify-center hover:bg-secondary-400 active:scale-95 transition-all shadow-xs cursor-pointer shrink-0"
          >
            Search
          </button>
        </form>
      </div>

      {/* ─── Hero Stage: Giant Lime Arc, Student & 3 Floating Cards ─── */}
      <div className="relative mt-6 sm:mt-10 lg:mt-12 w-full max-w-[1240px] mx-auto flex justify-center items-end px-2 sm:px-6">
        {/* Lime Background Crescent Arc (Scaled up to 1150px max width) */}
        <div className="relative w-full max-w-[1150px] flex justify-center items-end">
          <Image
            src="/images/hero/lime-arc.svg"
            alt=""
            width={1149}
            height={442}
            priority
            className="w-full h-auto object-contain pointer-events-none select-none translate-y-1"
            aria-hidden="true"
          />

          {/* Central Student with Laptop (Grounded at bottom, head reaching above the arc) */}
          <div className="absolute bottom-0 w-[82%] sm:w-[70%] max-w-[700px] flex justify-center items-end z-10 pointer-events-none select-none">
            <Image
              src="/images/hero/laptop-guy.png"
              alt="Student smiling with headphones and laptop learning on ByteSpace"
              width={1444}
              height={1030}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* ── Floating Card 1: UI/UX Design (Left of student's ear, partly on lime arc) ── */}
          <div className="absolute top-[8%] sm:top-[12%] lg:top-[15%] left-[2%] sm:left-[8%] lg:left-[14%] z-20 animate-float-subtle origin-left scale-[0.65] sm:scale-[0.85] lg:scale-100">
            <div className="bg-white rounded-2xl p-3.5 sm:p-5 shadow-2xl border border-neutral-100 flex flex-col gap-1 min-w-[170px] sm:min-w-[210px] text-left">
              <h4 className="text-label-m font-bold text-neutral-950">
                UI/UX Design
              </h4>
              <p className="text-body-xs text-neutral-500 font-medium whitespace-nowrap">
                200 Courses &bull; 1000+ Students
              </p>
            </div>
          </div>

          {/* ── Floating Card 2: Learning Progress (Right of student's head, on lime arc) ── */}
          <div className="absolute top-[12%] sm:top-[16%] lg:top-[18%] right-[2%] sm:right-[6%] lg:right-[12%] z-20 animate-float-slow origin-right scale-[0.65] sm:scale-[0.85] lg:scale-100">
            <div className="bg-white rounded-2xl p-3.5 sm:p-5 shadow-2xl border border-neutral-100 flex flex-col gap-1.5 sm:gap-2 min-w-[175px] sm:min-w-[220px] text-left">
              <span className="text-label-xs text-neutral-600 font-medium">
                Learning Progress
              </span>
              <span className="text-heading-s font-bold text-neutral-950 leading-none">
                55%
              </span>
              {/* Progress Bar track and fill */}
              <div className="w-full bg-neutral-200 h-2 sm:h-2.5 rounded-full overflow-hidden mt-1">
                <div
                  className="bg-secondary h-full rounded-full transition-all duration-1000 w-[55%]"
                  role="progressbar"
                  aria-valuenow={55}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>

          {/* ── Floating Card 3: Happy Students (Bottom-Left of student, overlapping arc border) ── */}
          <div className="absolute bottom-[6%] sm:bottom-[10%] lg:bottom-[14%] left-[4%] sm:left-[10%] lg:left-[16%] z-20 animate-float-reverse origin-bottom-left scale-[0.65] sm:scale-[0.85] lg:scale-100">
            <div className="bg-white rounded-2xl p-3.5 sm:p-5 shadow-2xl border border-neutral-100 flex flex-col gap-2 min-w-[200px] sm:min-w-[240px] text-left">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-label-m font-bold text-neutral-950">
                  Happy Students
                </h4>
                <div className="flex items-center gap-1 text-body-xs font-semibold text-neutral-800">
                  <span>4.5</span>
                  <span className="text-neutral-500 font-normal">(240)</span>
                  <span className="text-amber-400">★</span>
                </div>
              </div>
              <AvatarGroup
                avatars={STUDENT_AVATARS}
                badgeText="2K+"
                size={28}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
