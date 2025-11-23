import React from 'react';

interface NoAvailableSlotsProps {
  className?: string;
}

export const NoAvailableSlots: React.FC<NoAvailableSlotsProps> = ({
  className = '',
}) => {
  return (
    <div className={`w-full mt-8 ${className}`}>
      <div className="text-center py-12 text-gray-500 poppins text-[15px] leading-relaxed">
        No available time slots for the selected date.
      </div>
    </div>
  );
};