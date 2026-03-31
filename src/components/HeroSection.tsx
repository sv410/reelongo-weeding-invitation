'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const templeY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const coupleScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const coupleOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const lanternY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const lanternY2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh] bg-[#faf8ec] overflow-hidden">
      {/* Background (Couple) */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-screen z-0"
        style={{ scale: coupleScale, opacity: coupleOpacity }}
      >
        <Image src="/couple.png" alt="Couple" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Floating Lanterns */}
      <motion.div style={{ y: lanternY1 }} className="absolute top-[10%] left-[5%] z-10 w-24 h-36 md:w-40 md:h-64 opacity-80">
        <Image src="/lantern.png" alt="Lantern" fill className="object-contain" />
      </motion.div>
      <motion.div style={{ y: lanternY2 }} className="absolute top-[15%] right-[5%] z-10 w-32 h-48 md:w-56 md:h-80 opacity-90">
        <Image src="/lantern.png" alt="Lantern" fill className="object-contain" />
      </motion.div>

      {/* Parallax Content (Temple/Tomb sliding up) */}
      <motion.div 
        className="absolute top-1/2 left-0 w-full h-[150vh] z-20 pointer-events-none"
        style={{ y: templeY }}
      >
        <Image src="/temple.png" alt="Temple Overlay" fill className="object-cover object-top" />
      </motion.div>

      {/* Text Content */}
      <motion.div 
        className="relative z-30 flex flex-col items-center justify-start pt-[20vh] text-center space-y-4 px-4 h-screen pointer-events-none"
        style={{ y: textY }}
      >
        <p className="font-serif text-lg md:text-2xl tracking-widest text-[#f3ecba] drop-shadow-md">
          With the heavenly blessings of
        </p>
        <p className="font-serif text-base md:text-xl text-[#f3ecba] drop-shadow-md pb-8">
          Smt. Parvathi Ammal & Shri Krishnan Iyer <br />
          &mdash; <br />
          Smt. Kamakshi Ammal & Shri Srinivasan Iyer
        </p>

        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-7xl md:text-9xl font-bold font-serif text-[#f3ecba] tracking-wider drop-shadow-xl select-none">
            Vishu
          </h1>
          <span className="text-5xl md:text-7xl font-serif text-[#d6a848] opacity-80">&amp;</span>
          <h1 className="text-7xl md:text-9xl font-bold font-serif text-[#f3ecba] tracking-wider drop-shadow-xl select-none">
            Kavya
          </h1>
        </div>

        <div className="mt-12 flex flex-col items-center text-[#f3ecba] drop-shadow-md">
          <p className="text-4xl md:text-6xl font-serif tracking-[0.2em] mb-4 text-[#d6a848]">INVITE</p>
          <p className="text-lg md:text-xl font-serif mb-2">
            You to join us in the wedding celebrations of
          </p>
        </div>
      </motion.div>
    </section>
  );
}
