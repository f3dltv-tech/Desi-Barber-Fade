"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-[0.3em] text-xl uppercase text-white">
          DESI BARBER FADES
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[0.7rem] font-medium tracking-[0.15em] uppercase text-[#888]">
          <Link href="/services" className={`hover:text-white transition-colors ${pathname === '/services' ? 'text-white' : ''}`}>Services</Link>
          <Link href="/contact" className={`hover:text-white transition-colors ${pathname === '/contact' ? 'text-white' : ''}`}>Contact</Link>
          <Link href="/book" className="bg-[#FFFFFF] text-[#000000] font-semibold tracking-[0.1em] uppercase px-8 py-3 text-[0.8rem] hover:bg-[#888888] transition-colors">
            Book
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-[#1A1A1A] px-6 py-6 flex flex-col gap-6 overflow-hidden text-center"
          >
            <Link href="/" onClick={() => setIsMenuOpen(false)} className={`tracking-[0.15em] uppercase text-[0.75rem] font-bold py-2 ${pathname === '/' ? 'text-white' : 'text-[#888]'} hover:text-white`}>Home</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className={`tracking-[0.15em] uppercase text-[0.75rem] font-bold py-2 ${pathname === '/services' ? 'text-white' : 'text-[#888]'} hover:text-white`}>Services</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`tracking-[0.15em] uppercase text-[0.75rem] font-bold py-2 ${pathname === '/contact' ? 'text-white' : 'text-[#888]'} hover:text-white`}>Contact</Link>
            <Link href="/book" onClick={() => setIsMenuOpen(false)} className="bg-white text-black py-4 font-bold tracking-[0.15em] uppercase text-[0.75rem] mt-2">Book Appointment</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
