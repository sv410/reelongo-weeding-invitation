'use client';

import React from 'react';
import Image from 'next/image';

export default function GreenInvite() {
  return (
    <section className="relative w-full min-h-screen bg-[#528d71] flex flex-col items-center py-20 px-4 text-[#e5d599] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      {/* Texture Overlay (Optional, using a CSS blend or pure color) */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto space-y-12">
        
        {/* Ganesha Logo */}
        <div className="w-24 h-24 relative mb-4">
          <Image src="/ganesha.png" alt="Ganesha" fill className="object-contain" />
        </div>

        {/* Top Text (Hindi + English Blessings) */}
        <div className="space-y-6">
          <p className="font-sans text-sm md:text-base tracking-[0.2em]">ॐ श्री गणेशाय नम:</p>
          <p className="font-serif text-lg md:text-2xl mt-4">
            With the heavenly blessings of<br />
            Smt. Sita Devi & Sm. Om Puri
          </p>
          <p className="font-serif text-lg md:text-xl italic text-[#d6c790]">and</p>
          <p className="font-serif text-lg md:text-2xl">
            Mrs. Lata & Mr. Kishore Kapoor
          </p>
        </div>

        {/* WE INVITE */}
        <div className="my-12">
          <h2 className="text-4xl md:text-6xl font-serif tracking-[0.15em] mb-4">WE</h2>
          <h1 className="text-6xl md:text-8xl font-serif tracking-[0.15em]">INVITE</h1>
        </div>

        {/* Bottom Text */}
        <div className="space-y-6">
          <p className="font-serif text-sm md:text-lg uppercase tracking-widest leading-loose">
            You to join us in wedding<br />celebrations of
          </p>
          
          <h1 className="text-5xl md:text-7xl font-serif mt-8 tracking-wider">ABHISHEK</h1>
          <p className="text-3xl md:text-4xl font-serif italic text-[#d6c790]">and</p>
          <h1 className="text-5xl md:text-7xl font-serif tracking-wider">KANIKA</h1>
        </div>

      </div>
    </section>
  );
}
