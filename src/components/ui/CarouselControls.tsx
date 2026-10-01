"use client";

import { cn } from "@/lib/utils";

interface CarouselControlsProps {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (index: number) => void;
  ariaLabel?: string;
  className?: string;
}

export function CarouselControls({
  currentIndex,
  total,
  onPrev,
  onNext,
  onSelectIndex,
  ariaLabel = "Carousel pagination",
  className,
}: CarouselControlsProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between pt-2 px-1 w-full",
        className,
      )}
    >
      {/* Left: Counter Pill (e.g. 01 / 06) */}
      <div className="font-body px-3.5 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/60 flex items-center gap-1.5 text-label-xs select-none">
        <span className="font-bold text-primary">
          {String(currentIndex + 1).padStart(2, "0")}
        </span>
        <span className="text-neutral-400 font-normal">/</span>
        <span className="text-neutral-500 font-medium">
          {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Center: Pagination Dots & Active Pill */}
      <div
        className="flex items-center gap-1.5"
        role="tablist"
        aria-label={ariaLabel}
      >
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelectIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              i === currentIndex
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
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Previous item"
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
          onClick={onNext}
          disabled={currentIndex === total - 1}
          className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Next item"
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
  );
}
