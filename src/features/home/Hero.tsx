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
    <section className="relative w-full bg-primary-700 bg-hero-grid overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-0">
      {/* ─── Floating 3D Shapes (Left Side) ─── */}
      {/* Top-Left Lime Zigzag */}
      <div className="absolute top-2 -left-8 sm:left-0 lg:left-6 w-28 sm:w-40 lg:w-52 h-auto pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/images/hero/lime-zigzag.png"
          alt=""
          width={531}
          height={774}
          priority
          className="w-full h-auto drop-shadow-lg"
          aria-hidden="true"
        />
      </div>

      {/* Mid-Left White Small Zigzag */}
      <div className="absolute top-44 sm:top-56 lg:top-64 left-4 sm:left-12 lg:left-24 w-14 sm:w-20 lg:w-28 h-auto pointer-events-none select-none z-10 animate-float-reverse">
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

      {/* Bottom-Left White Donut / Torus */}
      <div className="absolute bottom-8 sm:bottom-14 lg:bottom-20 left-2 sm:left-8 lg:left-16 w-28 sm:w-44 lg:w-60 h-auto pointer-events-none select-none z-10 animate-float-zoom">
        <Image
          src="/images/hero/white-donut.png"
          alt=""
          width={688}
          height={686}
          priority
          className="w-full h-auto drop-shadow-xl"
          aria-hidden="true"
        />
      </div>

      {/* ─── Floating 3D Shapes (Right Side) ─── */}
      {/* Top-Right Lime Cylinder */}
      <div className="absolute top-2 -right-8 sm:right-0 lg:right-4 w-28 sm:w-40 lg:w-52 h-auto pointer-events-none select-none z-10 animate-float-slow">
        <Image
          src="/images/hero/lime-cylinder.png"
          alt=""
          width={426}
          height={744}
          priority
          className="w-full h-auto drop-shadow-lg"
          aria-hidden="true"
        />
      </div>

      {/* Mid-Right White Pyramid */}
      <div className="absolute top-48 sm:top-60 lg:top-68 right-4 sm:right-12 lg:right-28 w-16 sm:w-24 lg:w-36 h-auto pointer-events-none select-none z-10 animate-float-subtle">
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

      {/* Bottom-Right White Large Zigzag / Spring Coil */}
      <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 right-2 sm:right-8 lg:right-16 w-28 sm:w-40 lg:w-56 h-auto pointer-events-none select-none z-10 animate-float-reverse">
        <Image
          src="/images/hero/white-large-zigzag.png"
          alt=""
          width={633}
          height={664}
          priority
          className="w-full h-auto drop-shadow-xl"
          aria-hidden="true"
        />
      </div>

      {/* ─── Center Hero Content ─── */}
      <div className="container relative z-20 flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="text-heading-l text-white font-bold tracking-tight max-w-4xl text-balance leading-tight">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="text-body-l text-white/80 max-w-2xl mt-4 sm:mt-5 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        {/* Pill Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-8 sm:mt-10 w-full max-w-2xl flex items-center bg-white rounded-full p-2 pl-6 sm:pl-7 shadow-2xl border border-white/20 transition-all focus-within:ring-4 focus-within:ring-white/20"
        >
          {/* Search Lens Icon */}
          <svg
            className="w-5 h-5 text-neutral-400 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          {/* Input field */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Course, topic, creator"
            aria-label="Search for courses, topics, or creators"
            className="w-full bg-transparent text-neutral-900 placeholder:text-neutral-400 text-body-m focus:outline-hidden px-4"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="shrink-0 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-secondary text-neutral-950 text-label-m font-semibold hover:bg-secondary-400 active:scale-95 transition-all shadow-xs cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      {/* ─── Hero Stage: Lime Arc, Student & 3 Floating Cards ─── */}
      <div className="relative mt-8 sm:mt-12 lg:mt-14 max-w-5xl mx-auto flex justify-center items-end px-4">
        {/* Lime Background Crescent Arc */}
        <div className="relative w-full max-w-4xl flex justify-center items-end">
          <Image
            src="/images/hero/lime-arc.svg"
            alt=""
            width={1149}
            height={442}
            priority
            className="w-full h-auto object-contain pointer-events-none select-none"
            aria-hidden="true"
          />

          {/* Central Student with Laptop */}
          <div className="absolute bottom-0 w-3/4 sm:w-2/3 max-w-[620px] flex justify-center items-end z-10 pointer-events-none select-none">
            <Image
              src="/images/hero/laptop-guy.png"
              alt="Student smiling with headphones and laptop learning on ByteSpace"
              width={1444}
              height={1030}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* ── Floating Card 1: UI/UX Design (Top-Left of Student) ── */}
          <div className="absolute top-8 sm:top-14 lg:top-20 left-2 sm:left-10 lg:left-14 z-20 animate-float-subtle">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-neutral-100/80 flex flex-col gap-1 min-w-[170px] sm:min-w-[210px] text-left">
              <h4 className="text-label-m font-bold text-neutral-950">
                UI/UX Design
              </h4>
              <p className="text-body-xs text-neutral-500 font-medium whitespace-nowrap">
                200 Courses &bull; 1000+ Students
              </p>
            </div>
          </div>

          {/* ── Floating Card 2: Learning Progress (Right of Student) ── */}
          <div className="absolute top-12 sm:top-20 lg:top-24 right-2 sm:right-8 lg:right-14 z-20 animate-float-slow">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-neutral-100/80 flex flex-col gap-2 min-w-[180px] sm:min-w-[220px] text-left">
              <span className="text-label-xs text-neutral-600 font-medium">
                Learning Progress
              </span>
              <span className="text-heading-s font-bold text-neutral-950 leading-none">
                55%
              </span>
              {/* Progress Bar track and fill */}
              <div className="w-full bg-neutral-200 h-2.5 rounded-full overflow-hidden mt-1">
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

          {/* ── Floating Card 3: Happy Students (Bottom-Left of Student) ── */}
          <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 left-4 sm:left-12 lg:left-20 z-20 animate-float-reverse">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-neutral-100/80 flex flex-col gap-2.5 min-w-[210px] sm:min-w-[240px] text-left">
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
                size={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
