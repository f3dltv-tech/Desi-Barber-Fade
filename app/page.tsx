"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-start justify-center px-6 max-w-7xl mx-auto py-20 pb-32">
      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold mb-6 flex items-center gap-2">
        Est. 2024 — Clarkson, WA <span className="text-[#333]">•</span> <span className="text-[#bbb]">★ 4.8 (65 Reviews)</span>
      </span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.9]"
      >
        PRIME CUTS.<br />SHARP FADES.
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-12 flex items-center gap-6"
      >
        <div className="w-12 h-[1px] bg-[#888]"></div>
        <p className="text-xs text-[#888] italic tracking-wide max-w-xs">
          Crafting the sharpest silhouettes with industrial precision and traditional mastery.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <Link href="/book" className="bg-[#FFFFFF] text-[#000000] font-semibold tracking-[0.1em] uppercase px-8 py-4 text-[0.8rem] hover:bg-[#888888] transition-colors inline-flex items-center justify-center text-center">
          Book an Appointment
        </Link>
        <Link href="/services" className="inline-flex items-center justify-center border border-[#1A1A1A] text-white px-8 py-4 font-semibold tracking-[0.1em] uppercase hover:bg-white/5 transition-colors text-[0.8rem] gap-2 text-center">
          View Services
        </Link>
      </motion.div>
      
      {/* Featured Reviews */}
      <div className="w-full mt-32 border-t border-[#1A1A1A] pt-16">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold">Client Reviews</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-[#1A1A1A] p-8 bg-[#0C0C0C] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-6 text-white text-[0.6rem]">
                ★★★★★
              </div>
              <p className="text-[0.85rem] text-[#888] leading-relaxed mb-8 font-light">
                "Best barber in town! Clean shop, friendly service, and exactly the haircut I asked for. Highly recommend."
              </p>
            </div>
            <div className="text-[0.65rem] uppercase tracking-[0.1em] font-semibold text-white">Manan Khurana</div>
          </div>
          <div className="border border-[#1A1A1A] p-8 bg-[#0C0C0C] flex flex-col justify-between hidden md:flex">
             <div>
                <div className="flex items-center gap-1 mb-6 text-white text-[0.6rem]">
                  ★★★★★
                </div>
                <p className="text-[0.85rem] text-[#888] leading-relaxed mb-8 font-light">
                  "The fade was perfect, and my beard was shaped just the way I like it. Attention to detail is unmatched."
                </p>
             </div>
             <div className="text-[0.65rem] uppercase tracking-[0.1em] font-semibold text-white">Kristy Jones</div>
          </div>
          <div className="border border-[#1A1A1A] p-8 bg-[#0C0C0C] flex flex-col justify-between hidden lg:flex">
             <div>
               <div className="flex items-center gap-1 mb-6 text-white text-[0.6rem]">
                  ★★★★★
                </div>
                <p className="text-[0.85rem] text-[#888] leading-relaxed mb-8 font-light">
                  "Excellent job with my haircut and beard trim. Great attention to detail and a clean, comfortable environment."
                </p>
             </div>
             <div className="text-[0.65rem] uppercase tracking-[0.1em] font-semibold text-white">Mubeen Riasat</div>
          </div>
        </div>
      </div>
    </div>
  );
}
