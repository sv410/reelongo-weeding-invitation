'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Outer container is generously tall to support the massive scrolling zoom illusion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Text smoothly glides upwards and disappears
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  
  // The truly vibrant Transparent Temple scales up massively from its bottom base!
  const gopuramScale = useTransform(scrollYProgress, [0, 1], [1, 3.5]);
  
  // Lanterns naturally parallax slightly into the distance
  const lanternScroll = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

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
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[#1a364d]">
      
      {/* Sticky wrapper safely locks the first slide components strictly into the 100vh viewport */}
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden">
        
        {/* 1. Pure Starry Sky Texture with STRICT cropping! */}
        {/* 1. Sky Background is now purely a rich CSS solid color as requested, with absolutely zero background images getting in the way! */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#1a364d] to-[#122436] z-0 pointer-events-none" />

        {/* 2. Buy Now Button - gracefully formatted as a strict floating pill isolated natively */}
        <div className="absolute top-6 right-6 z-50 flex items-center bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-white/50 cursor-pointer hover:bg-white transition-all">
          <span className="font-serif font-semibold text-sm md:text-lg text-black mr-2 md:mr-3">Buy Now</span>
          <span className="bg-black text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold tracking-widest">INR 3999</span>
        </div>

        {/* 3. Floating Lanterns Layer */}
        <motion.div className="absolute inset-x-0 top-0 w-full h-[100vh] z-10 pointer-events-none" style={{ y: lanternScroll }}>
          {lanterns.map((lantern, idx) => (
            <motion.div
              key={idx}
              className="absolute"
              style={{ left: lantern.left, top: lantern.top, width: lantern.width, height: lantern.width * 1.5 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4 + lantern.delay, repeat: Infinity, ease: "easeInOut", delay: lantern.delay }}
            >
              <Image src="/lantern.png" alt="Lantern" fill className="object-contain opacity-90" />
            </motion.div>
          ))}
        </motion.div>

        {/* 4. Center Text: VISHU WEDS KAVYA */}
        <motion.div 
          className="absolute inset-x-0 top-[10%] md:top-[12%] flex flex-col items-center justify-center text-center z-40 pointer-events-none"
          style={{ y: textY }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-[#f3ecba] tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">VISHU</h1>
          <p className="text-2xl md:text-3xl font-serif text-white tracking-[0.3em] font-light my-2 md:my-4 drop-shadow-md">WEDS</p>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-[#f3ecba] tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">KAVYA</h1>
        </motion.div>

        {/* 5. EXTRACTED TRANSPARENT VIBRANT GOPURAM TEMPLE */}
        {/* Because this image is fully transparent, it will NOT create a solid box that mixes with the background color! */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 top-[20%] w-full flex items-end justify-center z-30 pointer-events-none origin-bottom"
          style={{ scale: gopuramScale }}
        >
          {/* Anchoring natively to the bottom. It starts slightly visible below text, then zooms up massively to swallow the screen like the 3 screenshots! */}
          <div className="relative w-full max-w-[95vw] md:max-w-5xl h-[75vh]">
            <Image src="/temple.png" alt="Vivid Focused Temple" fill className="object-contain object-bottom" priority />
          </div>
        </motion.div>

        {/* Watermarks permanently resting cleanly in the layout beside the temple */}
        <div className="absolute bottom-[20%] left-[2%] md:left-[10%] w-32 h-8 md:w-56 md:h-12 opacity-30 z-20 pointer-events-none">
           <Image src="/missing-piece-logo.png" alt="Missing Piece" fill className="object-contain" />
        </div>
        <div className="absolute bottom-[20%] right-[2%] md:right-[10%] w-32 h-8 md:w-56 md:h-12 opacity-30 z-20 pointer-events-none">
           <Image src="/missing-piece-logo.png" alt="Missing Piece" fill className="object-contain" />
        </div>

        {/* Foundation line for beautiful green transition */}
        <div className="absolute bottom-[-1px] left-0 w-full h-12 bg-[#528d71] z-40 pointer-events-none" />

      </div>
    </section>
  );
}
