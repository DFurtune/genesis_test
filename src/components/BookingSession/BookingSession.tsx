'use client';

import React from 'react';
import { DateSelector } from './DateSelector';
import { TimeSelector } from './TimeSelector';
import { ConfirmButton } from './ConfirmButton';
import { BookingHeader } from './BookingHeader';
import { BookingHero } from './BookingHero';
import { BookingHeroMobile } from './BookingHeroMobile';
import { useBooking } from '@/hooks/useBooking';


export const BookingSession: React.FC = () => {
    const { booking, selectDate, selectTime, confirm, isConfirmDisabled } = useBooking();

    return (
        <>
            <BookingHeader />

            <div className="bg-gradient-orange min-h-screen flex flex-col ">
                <main className="flex-1 flex items-center justify-center px-4 max-md:p-0 max-md:items-end max-md:pt-15">
                    <div className="w-full md:max-w-lg">
                        <BookingHeroMobile />
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 flex flex-col items-center max-md:rounded-t-3xl max-md:rounded-b-none max-md:pt-8 max-md:pr-0 max-md:pb-3 max-md:pl-5  relative transition-all duration-300">

                            <BookingHero />

                            <DateSelector selectedDate={booking.selectedDate} onDateSelect={selectDate} />

                            {booking.selectedDate && (
                                <TimeSelector
                                    selectedDate={booking.selectedDate}
                                    selectedTime={booking.selectedTime}
                                    onTimeSelect={selectTime}
                                />
                            )}

                            <ConfirmButton disabled={isConfirmDisabled} onClick={confirm} />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};