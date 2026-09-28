"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

interface CoreProgramsCarouselProps {
  children: React.ReactNode;
  totalCards?: number;
}

export function CoreProgramsCarousel({
  children,
  totalCards = 6,
}: CoreProgramsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Synchronize index when user swipes or scrolls
  const handleScroll = useCallback(() => {
    // If a button or dot was clicked, ignore intermediate scroll frames to prevent blinking
    if (isProgrammaticScrollRef.current) return;

    const container = containerRef.current;
    if (!container || !container.children.length) return;

    const cards = container.children;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = card.offsetLeft - container.offsetLeft + card.clientWidth / 2;
      const viewCenter = scrollLeft + containerWidth / 2;
      const distance = Math.abs(cardCenter - viewCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    setCurrentIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const onScroll = () => {
      if (isProgrammaticScrollRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onScrollEnd = () => {
      isProgrammaticScrollRef.current = false;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      handleScroll();
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    container.addEventListener("scrollend", onScrollEnd);

    return () => {
      container.removeEventListener("scroll", onScroll);
      container.removeEventListener("scrollend", onScrollEnd);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Programmatic scroll to card
  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.children;
    if (cards[index]) {
      // 1. Immediately update index for instant response
      setCurrentIndex(index);

      // 2. Lock scroll listener during the smooth scroll animation
      isProgrammaticScrollRef.current = true;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 550);

      // 3. Scroll smoothly to target card
      const card = cards[index] as HTMLElement;
      const targetScroll =
        card.offsetLeft -
        container.offsetLeft -
        (container.clientWidth - card.clientWidth) / 2;

      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  };

  const scrollNext = () => {
    if (currentIndex < totalCards - 1) {
      scrollToCard(currentIndex + 1);
    }
  };

  const currentFormatted = String(currentIndex + 1).padStart(2, "0");
  const totalFormatted = String(totalCards).padStart(2, "0");

  return (
    <div className="relative">
      {/* 6 Cards Grid / Mobile Carousel */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:pb-0 sm:overflow-visible mt-8 sm:mt-12"
      >
        {children}
      </div>

      {/* Mobile Navigation & Card Counter (< sm only) */}
      <div className="flex sm:hidden items-center justify-between mt-4 px-1 select-none">
        {/* Card Number Counter Badge with fixed tabular layout to prevent jitter */}
        <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/60 shadow-2xs">
          <span className="text-primary font-bold text-sm tracking-tight tabular-nums inline-block min-w-[1.25rem] text-center">
            {currentFormatted}
          </span>
          <span className="text-slate-400 text-xs font-normal">/</span>
          <span className="text-slate-500 font-medium text-xs tracking-tight tabular-nums inline-block min-w-[1.25rem] text-center">
            {totalFormatted}
          </span>
        </div>

        {/* Center: Pagination Dots */}
        <div
          className="flex items-center gap-1.5"
          role="tablist"
          aria-label="Program cards pagination"
        >
          {Array.from({ length: totalCards }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              role="tab"
              aria-selected={currentIndex === idx}
              aria-label={`Go to program ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-6 bg-primary shadow-xs shadow-primary/30"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* Right: Prev & Next Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            disabled={currentIndex === 0}
            aria-label="Previous program"
            className="w-8.5 h-8.5 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-secondary disabled:opacity-30 disabled:pointer-events-none active:scale-95 hover:bg-slate-50 transition-all"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            disabled={currentIndex === totalCards - 1}
            aria-label="Next program"
            className="w-8.5 h-8.5 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-secondary disabled:opacity-30 disabled:pointer-events-none active:scale-95 hover:bg-slate-50 transition-all"
          >
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
          </button>
        </div>
      </div>
    </div>
  );
}
