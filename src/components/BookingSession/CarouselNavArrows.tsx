import React from 'react';

interface CarouselNavArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export const CarouselNavArrows: React.FC<CarouselNavArrowsProps> = ({
  onPrev,
  onNext,
  canPrev,
  canNext,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        className={`absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-4 z-10 flex items-center justify-center transition-all duration-200 hidden md:block
          ${canPrev ? 'text-gray-700 cursor-pointer' : 'text-gray-300 cursor-not-allowed'}
        `}
        aria-label="Попередні слоти"
      >
        <svg className="w-9 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        className={`absolute -right-6 top-1/2 -translate-y-1/2 translate-x-4 z-10 flex items-center justify-center transition-all duration-200 hidden md:block
          ${canNext ? 'text-gray-700 cursor-pointer' : 'text-gray-300 cursor-not-allowed'}
        `}
        aria-label="Наступні слоти"
      >
        <svg className="w-9 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
};