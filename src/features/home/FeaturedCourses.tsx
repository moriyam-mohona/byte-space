"use client";

import { useState, useRef } from "react";
import { CourseCard } from "@/shared/components/CourseCard";
import { COURSES_DATA } from "@/data/courses";
import { cn } from "@/lib/utils";

const CATEGORY_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const ALL_CATEGORIES = CATEGORY_ROWS.flat();

export function FeaturedCourses() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [mobileIndex, setMobileIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const pillsContainerRef = useRef<HTMLDivElement>(null);

  const filteredCourses =
    selectedCategory === "Featured"
      ? COURSES_DATA
      : COURSES_DATA.filter(
          (course) =>
            course.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const displayedCourses =
    filteredCourses.length > 0 ? filteredCourses : COURSES_DATA;

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setMobileIndex(0);
  };

  const handlePrev = () => {
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setMobileIndex((prev) =>
      prev < displayedCourses.length - 1 ? prev + 1 : prev,
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

  const scrollPillsRight = () => {
    if (pillsContainerRef.current) {
      pillsContainerRef.current.scrollBy({ left: 160, behavior: "smooth" });
    }
  };

  const renderPill = (category: string) => {
    const isActive = selectedCategory === category;
    return (
      <button
        key={category}
        type="button"
        onClick={() => handleCategorySelect(category)}
        className={cn(
          "font-body px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-label-xs md:text-label-m transition-all duration-200 cursor-pointer select-none whitespace-nowrap",
          isActive
            ? "bg-secondary text-neutral-950 shadow-xs"
            : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 font-medium active:scale-95",
        )}
      >
        {category}
      </button>
    );
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container">
        {/* ─── Section Header (Headline & Subtitle) ─── */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5">
          <h2 className="font-heading text-3xl font-medium lg:text-heading-m text-neutral-950 tracking-tight leading-tight">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="font-body text-body-m sm:text-body-l text-neutral-700 leading-relaxed px-2">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* ─── Mobile / Tablet View: Single Horizontal Scrolling Pill Bar with Right Arrow ─── */}
        <div className="flex lg:hidden items-center gap-2 mt-8 sm:mt-10 w-full">
          <div
            ref={pillsContainerRef}
            className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 flex-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {ALL_CATEGORIES.map((category) => (
              <div key={category} className="shrink-0">
                {renderPill(category)}
              </div>
            ))}
          </div>

          {/* Next / Scroll Right Circular Arrow Button Matching Figma */}
          <button
            type="button"
            onClick={scrollPillsRight}
            aria-label="Scroll categories right"
            className="w-10 h-10 rounded-full bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/70 flex items-center justify-center text-neutral-700 shrink-0 active:scale-95 transition-all cursor-pointer shadow-xs"
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

        {/* ─── Desktop View: 3 Centered Rows Matching Figma ─── */}
        <div className="hidden lg:flex flex-col items-center gap-2.5 sm:gap-3 w-full mt-10 sm:mt-12">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORY_ROWS[0].map((category) => renderPill(category))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORY_ROWS[1].map((category) => renderPill(category))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORY_ROWS[2].map((category) => renderPill(category))}
            <button
              type="button"
              className="font-body px-3 sm:px-4 py-2 text-label-s sm:text-label-m text-primary font-semibold hover:underline transition-all cursor-pointer"
            >
              + More
            </button>
          </div>
        </div>

        {/* ─── Mobile / Tablet View: Peek Card Carousel with Bottom Navigation ─── */}
        <div className="block lg:hidden mt-10 space-y-6">
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
              {displayedCourses.map((course, idx) => (
                <div
                  key={course.id}
                  className={cn(
                    "w-(--card-width) shrink-0 transition-opacity duration-300",
                    idx === mobileIndex || idx === mobileIndex + 1
                      ? "opacity-100"
                      : "opacity-60",
                  )}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls Bar Matching Screenshot */}
          <div className="flex items-center justify-between pt-2 px-1">
            {/* Left: Counter Pill (e.g. 01 / 06) */}
            <div className="font-body px-3.5 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/60 flex items-center gap-1.5 text-label-xs select-none">
              <span className="font-bold text-primary">
                {String(mobileIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-neutral-400 font-normal">/</span>
              <span className="text-neutral-500 font-medium">
                {String(displayedCourses.length).padStart(2, "0")}
              </span>
            </div>

            {/* Center: Pagination Dots & Active Pill */}
            <div
              className="flex items-center gap-1.5"
              role="tablist"
              aria-label="Course pagination"
            >
              {displayedCourses.map((_, i) => (
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
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous course"
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
                disabled={mobileIndex === displayedCourses.length - 1}
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 active:scale-95 transition-all disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                aria-label="Next course"
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
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
