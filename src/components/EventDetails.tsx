'use client';

import React from 'react';
import Image from 'next/image';

const events = [
  {
    title: 'Mehendi',
    date: 'Friday, March 9th 2026',
    time: '6pm Onwards',
    venue: 'Rambagh, Jaipur',
  },
  {
    title: 'Haldi',
    date: 'Friday, March 10th 2026',
    time: '6pm Onwards',
    venue: 'Rambagh, Jaipur',
  },
  {
    title: 'Sangeet',
    date: 'Friday, March 10th 2026',
    time: '6pm Onwards',
    venue: 'Rambagh, Jaipur',
  },
  {
    title: 'Engagement',
    date: 'Friday, March 11th 2026',
    time: '6pm Onwards',
    venue: 'Rambagh, Jaipur',
  },
  {
    title: 'Muhurtham',
    date: 'Friday, March 12th 2026',
    time: '6pm Onwards',
    venue: 'Rambagh, Jaipur',
  },
];

export default function EventDetails() {
  return (
    <section className="py-24 px-4 bg-[#faf8ec] min-h-screen">
      <div className="max-w-4xl mx-auto pb-32 pt-20">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-[#45a086] mb-6 tracking-wider">On the following events</h2>
          <div className="w-32 h-1 bg-[#45a086] mx-auto opacity-30 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-16 md:gap-24 items-center w-full relative h-full">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="sticky w-full bg-white/95 backdrop-blur-sm rounded-[3rem] p-10 md:p-16 border flex flex-col items-center justify-center text-center shadow-2xl border-[#45a086]/30 overflow-hidden"
              style={{ top: `calc(15vh + ${index * 20}px)` }}
            >
              {/* Decorative top element */}
              <div className="w-20 h-20 mb-8 flex items-center justify-center">
                <Image src="/flower-bg.png" alt="Flower Decoration" width={80} height={80} className="object-contain opacity-50" />
              </div>
              
              <h3 className="text-[25px] font-normal leading-normal text-[#45a086] mb-4 tracking-tight" style={{ fontFamily: 'var(--font-aboreto)' }}>{event.title}</h3>
              <p className="text-xl md:text-2xl text-gray-800 font-serif mb-2 tracking-wide">{event.date}</p>
              <p className="text-xl md:text-2xl text-gray-800 font-serif mb-2">{event.venue}</p>
              <p className="text-xl md:text-2xl text-gray-800 font-serif mb-10">{event.time}</p>
              
              <a href="#" className="mt-8 px-8 py-3 border-2 border-[#d6a848] text-[#d6a848] hover:bg-[#d6a848] hover:text-white transition-all duration-300 rounded-full text-sm md:text-base font-semibold tracking-widest uppercase">
                See the route
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
