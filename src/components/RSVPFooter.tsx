'use client';

import React from 'react';

export default function RSVPFooter() {
  return (
    <footer className="w-full py-24 bg-[#faf8ec] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Top decorative element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4">
        <div className="w-12 h-12 rounded-full border border-[#45a086] flex items-center justify-center opacity-30">
           <div className="w-8 h-8 rounded-full border border-[#45a086]"></div>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-serif text-[#45a086] mt-8 mb-4 tracking-[0.1em]">RSVP & Details</h2>
      
      <div className="bg-white rounded-[2.5rem] p-10 mt-8 max-w-lg w-full shadow-[0_20px_50px_rgba(69,160,134,0.1)] border border-[#45a086]/10 transform transition-all duration-500 hover:shadow-[0_20px_50px_rgba(69,160,134,0.2)]">
        <p className="font-serif text-xl mb-8 text-gray-700 leading-relaxed">
          We are overjoyed to invite you to our wedding celebrations. 
          Please consider contributing or confirming your presence!
        </p>
        
        <a 
          href="https://rzp.io/rzp/meenaaya" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full py-4 px-8 text-center bg-[#45a086] text-white rounded-full font-serif text-xl tracking-wider shadow-lg hover:bg-[#32816b] hover:-translate-y-1 transition-all duration-300"
        >
          Buy Now &bull; INR 3999
        </a>
      </div>

      <div className="mt-24 text-sm text-gray-400 font-serif tracking-widest uppercase">
        <p>Vishu & Kavya &copy; 2026</p>
        <p className="mt-2 text-xs opacity-60 normal-case tracking-normal">Designed with Love</p>
      </div>
    </footer>
  );
}
