'use client';

import React from 'react';
import Image from 'next/image';

export default function GreenInvite() {
  return (
    <section className="relative w-full min-h-screen bg-[#528d71] flex flex-col items-center py-16 px-4 text-[#e5d599] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-8 md:space-y-12">
        
        {/* Ganesha Logo */}
        <div className="w-24 h-24 md:w-32 md:h-32 relative mb-2">
          <Image src="/ganesha.png" alt="Ganesha" fill className="object-contain" priority />
        </div>

        {/* Top Blessing Text */}
        <p className="font-sans font-medium text-lg md:text-[25px] leading-[150%] text-[#696b36] max-w-xl mx-auto">
          With the heavenly blessings of<br />
          Smt. Parvathi Ammal & Shri Krishnan Iyer
        </p>

        {/* INVITE */}
        <div className="my-8 md:my-12">
           <h1 className="text-[60px] md:text-[80px] font-serif tracking-[0.05em] leading-[100%] text-[#e79300] drop-shadow-sm">
             INVITE
           </h1>
        </div>

        {/* Middle Text */}
        <p className="font-sans font-medium text-lg md:text-[25px] leading-[150%] text-[#696b36]">
          You to join us in the wedding celebrations of
        </p>
        
        {/* Names */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-4 md:space-y-0 my-10 w-full">
          <h1 className="text-[70px] md:text-[100px] font-serif tracking-wide leading-[100%] text-[#e79300] drop-shadow-md">
            Vishu
          </h1>
          <span className="font-serif text-[40px] md:text-[60px] text-[#696b36] italic leading-[150%]">
            &
          </span>
          <h1 className="text-[70px] md:text-[100px] font-serif tracking-wide leading-[100%] text-[#e79300] drop-shadow-md">
            Kavya
          </h1>
        </div>

        {/* Parent details */}
        <p className="font-sans font-medium text-lg md:text-[25px] leading-[150%] text-[#696b36]">
          Daughter of<br />
          Smt. Parvathi & Shri K. Ramaswamy
        </p>

        {/* Bottom Text */}
        <p className="font-sans font-medium text-[#696b36] text-lg md:text-[25px] leading-[150%] mt-8 mb-4">
          On the following events
        </p>

      </div>
    </section>
  );
}
