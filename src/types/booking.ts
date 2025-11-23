export interface TimeSlot {
  hour: number;
  minute: number;
  period: 'AM' | 'PM';
  timestamp: string | number;
  disabled: boolean;
}

export interface BookingState {
  selectedDate: Date | null;
  selectedTime: TimeSlot | null;
}