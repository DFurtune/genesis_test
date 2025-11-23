import { useRef, TouchEvent } from 'react';

interface SwipeOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  minSwipeDistance?: number;
}

interface SwipeHandlers {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
}

export const useSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  minSwipeDistance = 50,
}: SwipeOptions): SwipeHandlers => {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const onTouchStart = (e: TouchEvent): void => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const onTouchMove = (e: TouchEvent): void => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = (): void => {
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = Math.abs(touchStartY.current - touchEndY.current);

    if (deltaY < 50) {
      if (deltaX > minSwipeDistance && onSwipeLeft) {
        onSwipeLeft();
      }

      if (deltaX < -minSwipeDistance && onSwipeRight) {
        onSwipeRight();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
    touchStartY.current = 0;
    touchEndY.current = 0;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
