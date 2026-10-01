"use client";

import { useState } from "react";
import NextImage from "next/image";
import { Testimonial } from "@/types/common";
import { cn } from "@/lib/utils";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 5,
    content:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: "james-l",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatars/avatar-james.jpg",
    rating: 5,
    content:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: "alex-b",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatars/avatar-4.jpg",
    rating: 5,
    content:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export function Testimonials() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handlePrev = () => {
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setMobileIndex((prev) =>
      prev < TESTIMONIALS.length - 1 ? prev + 1 : prev,
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section className="relative w-full bg-white py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* ─── Ambient Figma Exact Radial Glows ─── */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        {/* Ellipse 12: Center-Top Lime Glow (672x672, Top: -138px, Left: 395px, Blur: 40px) */}
        <div
          className="absolute rounded-full"
          style={{
            width: "672px",
            height: "672px",
            top: "-138px",
            left: "395px",
            background:
              "radial-gradient(circle, rgba(203, 252, 1, 0.5) 0%, rgba(203, 252, 1, 0.23) 40%, rgba(203, 252, 1, 0.06) 70%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Ellipse 11: Top-Right Lime Glow (1137x1137, Top: -241px, Left: 842px, Blur: 40px) */}
        <div
          className="absolute rounded-full"
          style={{
            width: "1137px",
            height: "1137px",
            top: "-241px",
            left: "842px",
            background:
              "radial-gradient(circle, rgba(203, 252, 1, 0.2) 0%, rgba(203, 252, 1, 0.23) 40%, rgba(203, 252, 1, 0.06) 70%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Ellipse 8: Bottom-Left Blue Glow (1137x1137, Top: 149px, Left: -442px, Blur: 40px) */}
        <div
          className="absolute rounded-full"
          style={{
            width: "1137px",
            height: "1137px",
            top: "149px",
            left: "-442px",
            background:
              "radial-gradient(circle, rgba(0, 59, 226, 0.25) 0%, rgba(0, 59, 226, 0.15) 40%, rgba(0, 59, 226, 0.04) 70%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative z-10 container space-y-12 sm:space-y-16 lg:space-y-20">
        {/* ─── Header: 2 Columns (Title Left, Description Right) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6">
            <h2 className="font-heading text-3xl font-medium lg:text-heading-m text-neutral-950 tracking-tight leading-tight">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="font-body text-body-m sm:text-body-l text-neutral-700 leading-relaxed px-2">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* ─── Mobile / Tablet View: Peek Card Carousel with Bottom Navigation ─── */}
        <div className="block lg:hidden space-y-6">
          {/* Peeking Carousel Track with Touch Swipe */}
          <div
            className="w-full overflow-hidden [--card-width:85%] sm:[--card-width:65%] md:[--card-width:44%] [--card-gap:1rem] md:[--card-gap:1.5rem]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out gap-4 md:gap-6"
              style={{
                transform: `translateX(calc(-${mobileIndex} * (var(--card-width) + var(--card-gap))))`,
              }}
            >
              {TESTIMONIALS.map((item, idx) => (
                <div
                  key={item.id}
                  className={cn(
                    "w-(--card-width) shrink-0 transition-opacity duration-300",
                    idx === mobileIndex || idx === mobileIndex + 1
                      ? "opacity-100"
                      : "opacity-60",
                  )}
                >
                  <div className="bg-white rounded-3xl p-6 shadow-xl shadow-neutral-950/5 border border-neutral-100 flex flex-col justify-start space-y-6 h-full transition-all duration-300">
                    {/* User Identity */}
                    <div className="space-y-3">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs bg-neutral-100">
                        <NextImage
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading text-heading-xs text-neutral-950">
                          {item.name}
                        </h3>
                        <p className="font-body text-body-l text-primary font-medium mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Quote Content */}
                    <p className="font-body text-body-m sm:text-body-l text-neutral-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="flex items-center justify-between pt-2 px-1">
            {/* Left: Counter Pill (e.g. 01 / 03) */}
            <div className="font-body px-3.5 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/60 flex items-center gap-1.5 text-label-xs select-none">
              <span className="font-bold text-primary">
                {String(mobileIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-neutral-400 font-normal">/</span>
              <span className="text-neutral-500 font-medium">
                {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>
            </div>

            {/* Center: Pagination Dots & Active Pill */}
            <div
              className="flex items-center gap-1.5"
              role="tablist"
              aria-label="Testimonial pagination"
            >
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setMobileIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    i === mobileIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-neutral-200 hover:bg-neutral-300",
                  )}
                />
              ))}
            </div>

            {/* Right: Navigation Arrow Buttons (< and >) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={mobileIndex === 0}
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={mobileIndex === TESTIMONIALS.length - 1}
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ─── Desktop View: 3-Column Grid ─── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-10">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-xl shadow-neutral-950/5 border border-neutral-100 flex flex-col justify-start space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* User Identity */}
              <div className="space-y-3">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs bg-neutral-100">
                  <NextImage
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-heading-xs text-neutral-950">
                    {item.name}
                  </h3>
                  <p className="font-body text-body-m xl:text-body-l text-primary font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Quote Content */}
              <p className="font-body text-body-m xl:text-body-l text-neutral-700 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
