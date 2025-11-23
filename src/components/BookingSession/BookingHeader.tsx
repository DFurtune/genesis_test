import React from 'react';

export const BookingHeader: React.FC = () => {
    return (
        <header className="w-full py-5 bg-black/20 backdrop-blur-sm fixed top-0 left-0 z-10 hidden md:block">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-white text-[22px] font-semibold pl-[111px] poppins">
                    6037 Venture Partnership
                </h2>
            </div>
        </header>
    );
};