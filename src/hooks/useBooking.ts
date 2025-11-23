import { useState } from 'react';
import type { BookingState, TimeSlot } from '@/types/booking';

interface UseBookingResult {
  booking: BookingState;
  selectDate: (date: Date) => void;
  selectTime: (slot: TimeSlot) => void;
  confirm: () => void;
  isConfirmDisabled: boolean;
}

export const useBooking = (): UseBookingResult => {
  const [booking, setBooking] = useState<BookingState>({
    selectedDate: null,
    selectedTime: null,
  });

  const selectDate = (date: Date) => {
    setBooking({ selectedDate: date, selectedTime: null });
  };

  const selectTime = (slot: TimeSlot) => {
    setBooking((prev) => ({ ...prev, selectedTime: slot }));
  };

  const confirm = () => {
    if (booking.selectedTime) {
      console.log('Booking confirmed:', {
        timestamp: booking.selectedTime.timestamp,
      });
    }
  };

  const isConfirmDisabled = !booking.selectedDate || !booking.selectedTime;

  return {
    booking,
    selectDate,
    selectTime,
    confirm,
    isConfirmDisabled,
  };
};
