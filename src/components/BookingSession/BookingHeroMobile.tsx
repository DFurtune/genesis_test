import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/images/mobile_hero_banner_img.webp';
import { ClockIcon } from '@heroicons/react/24/outline';

export const BookingHeroMobile: React.FC = () => {
  return (
    <div className="relative flex flex-col gap-6 text-white text-left pl-5 pb-16 md:hidden" >

      <div className="max-md:text-start">
        <h2 className="text-[27px] font-medium poppins">
          Cool session
        </h2>
        <p className="text-base poppins opacity-80">
          Additional type
        </p>
        <div className=" flex items-center gap-2 text-[13px] poppins rounded-[80px] bg-white/20 backdrop-blur-md max-w-[93px] py-1 px-3 mt-6">
          <ClockIcon className="w-4 h-4" />
          <span>30 min</span>
        </div>
      </div>
      <Image
        src={heroImage}
        alt="Stylist"
        className="object-cover absolute -bottom-45 right-0 z-0"
        priority
      />
    </div>
  );
};