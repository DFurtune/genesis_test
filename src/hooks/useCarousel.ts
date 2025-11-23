import { useState } from 'react';

interface UseCarouselOptions {
  totalItems: number;
  itemsPerPage: number;
  step?: number;
  initialIndex?: number;
}

interface UseCarouselResult {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  canGoPrev: boolean;
  canGoNext: boolean;
  goPrev: () => void;
  goNext: () => void;
  goTo: (index: number) => void;
  reset: () => void;
  maxIndex: number;
}

export const useCarousel = ({
  totalItems,
  itemsPerPage,
  step = 1,
  initialIndex = 0,
}: UseCarouselOptions): UseCarouselResult => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const goPrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prev) => Math.max(0, prev - step));
    }
  };

  const goNext = () => {
    if (canGoNext) {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + step));
    }
  };

  const goTo = (index: number) => {
    if (index >= 0 && index <= maxIndex) {
      setCurrentIndex(index);
    }
  };

  const reset = () => setCurrentIndex(0);

  return {
    currentIndex,
    setCurrentIndex,
    canGoPrev,
    canGoNext,
    goPrev,
    goNext,
    goTo,
    reset,
    maxIndex,
  };
};
