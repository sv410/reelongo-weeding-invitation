'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BottomSections() {
  const [timeLeft, setTimeLeft] = useState('00:00:00:00');

  useEffect(() => {
    // Countdown to an upcoming date in the target format
    const targetDate = new Date('2026-03-09T18:00:00').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft('00:00:00:00');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(
        `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#faf8ec] w-full relative pt-20 pb-16 overflow-hidden z-10 p-4">
      
      {/* Follow The Action */}
      <section className="flex flex-col items-center text-center w-full mb-32">
        <div className="text-[50px] md:text-[70px] font-serif leading-[1.15] text-[#696b36] uppercase" style={{ fontFamily: 'var(--font-aboreto)' }}>
          <p>Follow</p>
          <p>the action</p>
        </div>

        <a 
          href="#" 
          className="mt-10 px-8 py-3 border border-[#696b36] text-[#696b36] rounded-full font-serif text-lg tracking-widest hover:bg-[#696b36] hover:text-white transition-colors"
        >
          @Abhishek&Kanika
        </a>
      </section>

      {/* The Countdown */}
      <section className="flex flex-col items-center text-center w-full mb-32">
        <h3 className="text-[32px] md:text-[40px] font-serif text-[#e79300] leading-none mb-6">
          The countdown begins
        </h3>
        <div className="bg-transparent">
            <p className="text-[#e79300] font-serif text-[40px] md:text-[50px] font-medium tracking-widest tabular-nums">
            {timeLeft}
            </p>
        </div>
      </section>

      {/* Watermark Logo */}
      <section className="flex flex-col items-center justify-center w-full pt-10 pb-20">
        <div className="relative w-32 h-32 md:w-40 md:h-40 opacity-90">
          <Image 
            src="/missing-piece-logo.png" 
            alt="Missing Piece Logo" 
            fill 
            className="object-contain" 
            priority
          />
        </div>
      </section>

      {/* Footer Gopuram */}
      <section className="relative w-full h-[60vh] md:h-[80vh] mt-10 pointer-events-none">
        <Image src="/temple.png" alt="Footer Gopuram" fill className="object-cover object-top opacity-100" />
      </section>

    </div>
  );
}
