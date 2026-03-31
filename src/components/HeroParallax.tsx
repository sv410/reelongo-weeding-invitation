'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroParallax() {
  const lanterns = [
    { left: "5%", top: "15%", width: 80, delay: 0 },
    { left: "15%", top: "45%", width: 100, delay: 1 },
    { left: "80%", top: "15%", width: 90, delay: 0.5 },
    { left: "85%", top: "35%", width: 70, delay: 1.5 },
    { left: "25%", top: "25%", width: 60, delay: 0.2 },
    { left: "70%", top: "40%", width: 65, delay: 1.2 },
    { left: "35%", top: "70%", width: 90, delay: 0.8 },
    { left: "60%", top: "10%", width: 50, delay: 1.8 },
    { left: "10%", top: "75%", width: 60, delay: 0.4 },
    { left: "90%", top: "70%", width: 85, delay: 1.1 },
  ];

  return (
    // We use a pure flex column layout so everything organically stacks without any artificial gaps or empty blue holes resulting from sticky containers.
    <section className="relative w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#1a364d] to-[#122436] pt-[15vh] overflow-hidden">
      
      {/* Absolute layered background for floating lanterns */}
      <div className="absolute inset-x-0 top-0 w-full h-full z-10 pointer-events-none">
        {lanterns.map((lantern, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={{ left: lantern.left, top: lantern.top, width: lantern.width, height: lantern.width * 1.5 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4 + lantern.delay, repeat: Infinity, ease: "easeInOut", delay: lantern.delay }}
          >
            <Image src="/lantern.png" alt="Lantern" fill className="object-contain opacity-90" priority />
          </motion.div>
        ))}
      </div>

      {/* Center Text: VISHU WEDS KAVYA */}
      {/* Positioned natively in the flex-flow, guaranteeing absolutely ZERO forced empty blue space beneath it! */}
      <div className="relative z-40 flex flex-col items-center text-center px-4 mb-6 md:mb-12">
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-[#f3ecba] tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">VISHU</h1>
        <p className="text-2xl md:text-3xl font-serif text-white tracking-[0.3em] font-light my-2 md:my-4 drop-shadow-md">WEDS</p>
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-[#f3ecba] tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">KAVYA</h1>
      </div>

      {/* EXTRACTED TRANSPARENT VIBRANT GOPURAM TEMPLE */}
      {/* Natively stacked physically touching the text perfectly without any scrolling gap spacing! */}
      <div className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-4xl xl:max-w-5xl z-30 flex justify-center mt-2">
        {/* Aspect ratio bounding box aggressively chops the green tail off natively while letting the majestic temple body comfortably dictate the physical layout height! */}
        <div className="relative w-full aspect-[4/5] object-top overflow-hidden drop-shadow-2xl">
          <img src="/temple.png" alt="Vivid Focused Temple" className="w-full h-auto object-top" />
        </div>
      </div>

      {/* Watermarks nestled neatly beside the temple's base in the natural flow */}
      <div className="absolute bottom-[2%] left-[2%] md:left-[10%] w-32 h-8 md:w-56 md:h-12 opacity-30 z-20 pointer-events-none">
         <Image src="/missing-piece-logo.png" alt="Missing Piece" fill className="object-contain" />
      </div>
      <div className="absolute bottom-[2%] right-[2%] md:right-[10%] w-32 h-8 md:w-56 md:h-12 opacity-30 z-20 pointer-events-none">
         <Image src="/missing-piece-logo.png" alt="Missing Piece" fill className="object-contain" />
      </div>

      {/* Buy Now Button - Fixed elegantly in the top right corner irrespective of scroll */}
      <div className="fixed top-6 right-6 z-50 flex items-center bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-white/50 cursor-pointer hover:bg-white transition-all">
        <span className="font-serif font-semibold text-sm md:text-lg text-black mr-2 md:mr-3">Buy Now</span>
        <span className="bg-black text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold tracking-widest">INR 3999</span>
      </div>

      {/* Foundation line visually bridging the transition instantly seamlessly to GreenInvite without any gaps */}
      <div className="relative w-full h-8 md:h-12 bg-[#528d71] z-40 mt-[-2px]" />

    </section>
  );
}
