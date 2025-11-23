import React from 'react';
import Image from 'next/image';
import avatarSrc from '@/assets/images/avatar.webp';

export const BookingHero: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left mb-7">
      <Image
        src={avatarSrc}
        alt="Stylist"
        width={120}
        height={120}
        className="rounded-full object-cover shadow-lg hidden md:block"
        priority
      />
      <div className="max-md:text-start">
        <h1 className="text-[28px] font-bold text-[#16171B] kaisei">
          Book a Session
        </h1>
        <p className="text-[14px] text-[#8F91A1] mt-2 poppins max-md:text-base">
          Choose a date and time that is convenient for you to e-meet your stylist
        </p>
      </div>
    </div>
  );
};