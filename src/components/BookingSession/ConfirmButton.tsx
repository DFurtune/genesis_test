import React from 'react';

interface ConfirmButtonProps {
    disabled: boolean;
    onClick: () => void;
}

export const ConfirmButton: React.FC<ConfirmButtonProps> = ({
    disabled,
    onClick,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`w-full max-w-[370px] py-[18px] rounded-[100px] text-[16px] font-semibold transition-all transform cursor-pointer poppins max-md:max-w-[350px] max-md:mr-5
                        focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2
        ${disabled
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#16171B] text-white hover:bg-neutral-800 hover:shadow-lg active:scale-98'
                }
      `}
            aria-label="Confirm Booking"
        >
            Confirm
        </button>
    );
};