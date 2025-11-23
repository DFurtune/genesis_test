import React from 'react';
import { generateTimeSlots, formatTimeSlot } from '@/utils/timeUtils';
import type { TimeSlot } from '@/types/booking';
import { CarouselNavArrows } from './CarouselNavArrows';
import { NoAvailableSlots } from './NoAvailableSlots';
import { useSwipe } from '@/hooks/useSwipe';
import { useCarousel } from '@/hooks/useCarousel';

interface TimeSelectorProps {
    selectedDate: Date;
    selectedTime: TimeSlot | null;
    onTimeSelect: (slot: TimeSlot) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
    selectedDate,
    selectedTime,
    onTimeSelect,
}) => {
    const allTimeSlots = generateTimeSlots(selectedDate);
    const availableSlots = allTimeSlots.filter((slot) => !slot.disabled);

    const {
        currentIndex,
        canGoPrev,
        canGoNext,
        goPrev,
        goNext,
    } = useCarousel({
        totalItems: availableSlots.length,
        itemsPerPage: 4,
        step: 3,
    });

    const swipeHandlers = useSwipe({
        onSwipeLeft: goNext,
        onSwipeRight: goPrev,
        minSwipeDistance: 50,
    });

    if (availableSlots.length === 0) {
        return <NoAvailableSlots />;
    }

    return (
        <div className="w-full mb-10 max-md:mb-[90px]">
            <div className="relative">
                {/* Винесені стрілки — вигляд 100% той самий */}
                <CarouselNavArrows
                    onPrev={goPrev}
                    onNext={goNext}
                    canPrev={canGoPrev}
                    canNext={canGoNext}
                />

                {/* Карусель — без змін */}
                <div className="overflow-hidden px-2 max-md:px-0" {...swipeHandlers}>
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(calc(-${currentIndex} * (100% / 4) - ${currentIndex} * 0.5rem))`,
                        }}
                    >
                        {availableSlots.map((slot) => {
                            const isSelected = selectedTime?.timestamp === slot.timestamp;

                            const getCardStyles = () => {
                                if (isSelected) {
                                    return 'border-transparent bg-[#F7F7FC] text-[#DE3A6B] font-medium';
                                }
                                return 'border border-gray-200 bg-white';
                            };

                            return (
                                <div key={slot.timestamp} className="shrink-0 px-1">
                                    <button
                                        type="button"
                                        onClick={() => onTimeSelect(slot)}
                                        className={`border text-[14px] leading-[100%] rounded-full px-4 py-3 transition-all duration-200 cursor-pointer poppins
                                                ${getCardStyles()}`}
                                        aria-pressed={isSelected}
                                        aria-label={`Choose ${formatTimeSlot(slot)}`}
                                    >
                                        {formatTimeSlot(slot)}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};