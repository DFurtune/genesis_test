import { setHours, setMinutes, getUnixTime, isBefore } from 'date-fns';
import type { TimeSlot } from '@/types/booking';

export const generateTimeSlots = (selectedDate: Date): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const now = new Date();

  for (let hour = 0; hour < 24; hour += 1) {
    for (let minute = 0; minute < 60; minute += 15) {
      const slotDate = setMinutes(setHours(selectedDate, hour), minute);
      const timestamp = getUnixTime(slotDate);
      
      const period: 'AM' | 'PM' = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

      slots.push({
        hour: displayHour,
        minute,
        period,
        timestamp,
        disabled: isBefore(slotDate, now),
      });
    }
  }

  return slots;
};

export const formatTimeSlot = (slot: TimeSlot): string => {
  const hourStr = slot.hour.toString().padStart(2, '0');
  const minuteStr = slot.minute.toString().padStart(2, '0');
  return `${hourStr}:${minuteStr} ${slot.period}`;
};