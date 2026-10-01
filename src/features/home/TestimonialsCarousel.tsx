"use client";

import NextImage from "next/image";
import { Testimonial } from "@/types/common";
import { useCarousel } from "@/hooks";
import { CarouselControls } from "@/components/ui/CarouselControls";
import { cn } from "@/lib/utils";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const {
    index: mobileIndex,
    setIndex: setMobileIndex,
    handlePrev,
    handleNext,
    handleTouchStart,
    handleTouchEnd,
  } = useCarousel({ total: testimonials.length });

  return (
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
          {testimonials.map((item, idx) => (
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
                      sizes="64px"
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

      {/* Reusable Carousel Controls */}
      <CarouselControls
        currentIndex={mobileIndex}
        total={testimonials.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelectIndex={setMobileIndex}
        ariaLabel="Testimonial pagination"
      />
    </div>
  );
}
