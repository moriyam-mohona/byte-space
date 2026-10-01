"use client";

import { useState, useCallback } from "react";

interface UseCarouselOptions {
  total: number;
  swipeThreshold?: number;
}

export function useCarousel({ total, swipeThreshold = 45 }: UseCarouselOptions) {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev < total - 1 ? prev + 1 : prev));
  }, [total]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX === null) return;
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (diff > swipeThreshold) {
        handleNext();
      } else if (diff < -swipeThreshold) {
        handlePrev();
      }
      setTouchStartX(null);
    },
    [touchStartX, swipeThreshold, handleNext, handlePrev]
  );

  return {
    index,
    setIndex,
    handlePrev,
    handleNext,
    handleTouchStart,
    handleTouchEnd,
    isFirst: index === 0,
    isLast: index >= total - 1,
  };
}
