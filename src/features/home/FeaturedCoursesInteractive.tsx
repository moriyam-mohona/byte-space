"use client";

import { useState, useRef } from "react";
import { CourseCard } from "@/shared/components/CourseCard";
import { Course } from "@/types/course";
import { useCarousel } from "@/hooks";
import { CarouselControls } from "@/components/ui/CarouselControls";
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

interface FeaturedCoursesInteractiveProps {
  courses: Course[];
}

export function FeaturedCoursesInteractive({
  courses,
}: FeaturedCoursesInteractiveProps) {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const pillsContainerRef = useRef<HTMLDivElement>(null);

  const filteredCourses =
    selectedCategory === "Featured"
      ? courses
      : courses.filter(
          (course) =>
            course.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const displayedCourses =
    filteredCourses.length > 0 ? filteredCourses : courses;

  const {
    index: mobileIndex,
    setIndex: setMobileIndex,
    handlePrev,
    handleNext,
    handleTouchStart,
    handleTouchEnd,
  } = useCarousel({ total: displayedCourses.length });

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setMobileIndex(0);
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
    <>
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

        {/* Reusable Carousel Controls */}
        <CarouselControls
          currentIndex={mobileIndex}
          total={displayedCourses.length}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectIndex={setMobileIndex}
          ariaLabel="Course pagination"
        />
      </div>

      {/* ─── Desktop View: 3-Column Grid ─── */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
        {displayedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}
