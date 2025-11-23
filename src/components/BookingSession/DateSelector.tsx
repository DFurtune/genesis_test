import React from 'react';
import {
    generateDateRange,
    formatDate,
    formatDayOfWeek,
    formatMonthShort,
    checkIsSameDay,
    shouldShowMonth,
} from '@/utils/dateUtils';
import { CarouselNavArrows } from './CarouselNavArrows';
import { useSwipe } from '@/hooks/useSwipe';
import { useCarousel } from '@/hooks/useCarousel';

interface DateSelectorProps {
    selectedDate: Date | null;
    onDateSelect: (date: Date) => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
    selectedDate,
    onDateSelect,
}) => {
    const dates = generateDateRange();
    const {
    currentIndex,
    canGoPrev,
    canGoNext,
    goPrev,
    goNext,
  } = useCarousel({
    totalItems: dates.length,
    itemsPerPage: 6,
    step: 2,
  });

  const swipeHandlers = useSwipe({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
    minSwipeDistance: 50,
  });

    return (
        <div className="w-full">
            <div className="relative">
                {/* Кнопка назад */}
                <CarouselNavArrows
                    onPrev={goPrev}
                    onNext={goNext}
                    canPrev={canGoPrev}
                    canNext={canGoNext}
                />

                {/* Контейнер каруселі */}
                <div className="overflow-hidden px-2 py-10 max-md:px-0 max-md:py-8" {...swipeHandlers}>
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(calc(-${currentIndex} * (100% / 6) - ${currentIndex} * 0.75rem))`,
                        }}
                    >
                        {dates.map((date) => {
                            const isSelected = Boolean(
                                selectedDate && checkIsSameDay(date, selectedDate)
                            );
                            const showMonth = shouldShowMonth(date);

                            const getCardStyles = () => {
                                if (isSelected) {
                                    return 'border-transparent bg-[#F7F7FC] text-[#DE3A6B] font-medium';
                                }
                                return 'border border-gray-200 bg-white';
                            };

                            return (
                                <div
                                    key={date.toISOString()}
                                    className="box-border min-w-16 m-1"
                                >
                                    <div className="flex flex-col">

                                        {/* Карточка дня */}
                                        <button
                                            type="button"
                                            onClick={() => onDateSelect(date)}
                                            className={`min-h-16 w-full relative rounded-lg border transition-all cursor-pointer poppins
                                                        ${getCardStyles()}
                                                    `}
                                            aria-pressed={isSelected}
                                            aria-label={`Choose ${formatDate(date)} ${formatMonthShort(
                                                date
                                            )}`}
                                        >
                                            {/* Назва місяця */}
                                            <div className="absolute -top-6 text-left text-[14px] font-normal text-gray-400 mb-2 h-4 poppins">
                                                {showMonth && formatMonthShort(date)}
                                            </div>
                                            <div className="flex flex-col items-center gap-1">
                                                <span className="">
                                                    {formatDayOfWeek(date)}
                                                </span>
                                                <span className="">
                                                    {formatDate(date)}
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};