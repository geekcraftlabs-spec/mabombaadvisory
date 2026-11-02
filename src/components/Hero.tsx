"use client";

import { motion } from "motion/react";
import { useMounted } from "@/lib/useMounted";
import { ZigZag } from "./ZigZag";

export function Hero() {
  const mounted = useMounted();
  
  const fadeUp = (delay: number) =>
    mounted ? {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
    } : { initial: false as const };

  return (
    <div className="bg-charcoal text-ivory">
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-28 flex flex-wrap items-center gap-16">
        <div className="flex-1 min-w-[320px]">
          <motion.p {...fadeUp(0.1)} className="mb-6 text-[12px] font-bold tracking-[0.25em] text-clay">
            MOBILITY · FLEET · COMMERCIAL · SPORT
          </motion.p>
          <motion.h1 {...fadeUp(0.2)} className="mb-6 font-serif font-bold text-[clamp(46px,6vw,80px)] leading-[1.02]">
            Clear routes to commercial growth.
          </motion.h1>
          <motion.p {...fadeUp(0.3)} className="mb-10 max-w-[580px] text-[19px] text-[#D6C8B4]">
            Practical advisory for mobility, fleet and e-hailing businesses and consumer brands in South Africa, grounded in on-the-ground operations and commercial experience.
          </motion.p>
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center min-h-[52px] px-7 rounded-full bg-clay text-charcoal font-bold hover:bg-white transition-colors">
              Book a conversation
            </a>
            <a href="#services" className="inline-flex items-center min-h-[52px] px-7 rounded-full border border-[#5A4E44] text-ivory font-semibold hover:bg-[#2a2a2a] transition-colors">
              Explore our services
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={mounted ? { opacity: 0, scale: 0.9 } : false}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 min-w-[320px] flex justify-center"
        >
          <svg width="340" height="340" viewBox="0 0 160 160" role="img" aria-label="Mabomba Advisory seal" className="drop-shadow-2xl">
            <defs>
              <path id="heroRing" d="M80,80 m-64,0 a64,64 0 1,1 128,0 a64,64 0 1,1 -128,0" />
            </defs>
            <circle cx="80" cy="80" r="76" fill="none" stroke="#D9774F" strokeWidth="2.5" />
            <circle cx="80" cy="80" r="54" fill="none" stroke="#FAF7F2" strokeWidth="1.2" />
            <text fontFamily="var(--font-manrope)" fontSize="9" fontWeight="700" letterSpacing="2.4" fill="#EFE6DA">
              <textPath href="#heroRing">MABOMBA ADVISORY · MOBILITY · COMMERCIAL · GROWTH ·</textPath>
            </text>
            <text x="80" y="94" textAnchor="middle" fontFamily="var(--font-cormorant)" fontSize="62" fontWeight="700" fill="#FAF7F2">M</text>
            <path d="M58 108 L63 100 L68 108 Z M68 108 L73 100 L78 108 Z M78 108 L83 100 L88 108 Z M88 108 L93 100 L98 108 Z" fill="#D9774F" />
          </svg>
        </motion.div>
      </section>
      <ZigZag id="bandTop" />
    </div>
  );
}
