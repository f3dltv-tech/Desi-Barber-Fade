"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

export default function BookPage() {
  const [bookingStatus, setBookingStatus] = useState<"idle" | "submitting" | "success">("idle");

  const services = [
    { name: "Buzz Cut" },
    { name: "Signature Fade" },
    { name: "Beard Trim & Shape" },
    { name: "The Combo" },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus("submitting");
    setTimeout(() => {
      setBookingStatus("success");
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#0C0C0C] flex flex-col items-center px-6 border-b border-[#1A1A1A]">
      <div className="max-w-3xl w-full py-24 mt-10">
        <h2 className="text-3xl font-semibold mb-2">Secure Session</h2>
        <p className="text-[#888] text-sm mb-12">Select your preferences below to request a slot.</p>
        
        {bookingStatus === "success" ? (
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="bg-[#0A0A0A] border border-[#1A1A1A] p-10 md:p-16 text-center space-y-6 flex flex-col items-center justify-center"
           >
              <div className="w-16 h-16 border border-white flex items-center justify-center mb-2 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
             <h3 className="text-2xl font-bold uppercase tracking-widest mb-2">Appointment Requested</h3>
             <p className="text-[#888] tracking-wide text-sm font-light max-w-sm mx-auto">Your session is being processed. We will text you shortly to confirm your slot.</p>
             <div className="pt-6">
               <button 
                 onClick={() => setBookingStatus("idle")} 
                 className="text-[0.65rem] tracking-[0.2em] text-[#888] uppercase hover:text-white underline underline-offset-8 transition-colors"
               >
                 Return to Form
               </button>
             </div>
           </motion.div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-6 bg-[#0A0A0A] border border-[#1A1A1A] p-8 md:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold block">Full Name</label>
                <input required type="text" className="bg-[#121212] border border-[#222] text-white p-3 w-full outline-none text-[0.85rem] focus:border-[#888] transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold block">Phone Number</label>
                <input required type="tel" className="bg-[#121212] border border-[#222] text-white p-3 w-full outline-none text-[0.85rem] focus:border-[#888] transition-colors" placeholder="0486 023 709" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold block">Email Address</label>
              <input required type="email" className="bg-[#121212] border border-[#222] text-white p-3 w-full outline-none text-[0.85rem] focus:border-[#888] transition-colors" placeholder="john@example.com" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold block">Service</label>
                <select required className="bg-[#121212] border border-[#222] text-[#888] focus:text-white p-3 w-full outline-none text-[0.85rem] focus:border-[#888] transition-colors appearance-none cursor-pointer">
                  <option value="">Select...</option>
                  {services.map((s, i) => (
                    <option key={i} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold block">Barber</label>
                <select required className="bg-[#121212] border border-[#222] text-[#888] focus:text-white p-3 w-full outline-none text-[0.85rem] focus:border-[#888] transition-colors appearance-none cursor-pointer">
                  <option value="">Lead Stylist Amir</option>
                  <option value="bibeak">Bibeak</option>
                  <option value="sam">Senior Barber Sam</option>
                  <option value="any">No Preference</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold block">Date</label>
                <input required min={new Date().toISOString().split('T')[0]} type="date" className="bg-[#121212] border border-[#222] text-[#888] focus:text-white p-3 w-full outline-none text-[0.85rem] focus:border-[#888] transition-colors [color-scheme:dark]" />
              </div>
              <div className="space-y-2">
                <label className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold block">Time</label>
                <input required type="time" className="bg-[#121212] border border-[#222] text-[#888] focus:text-white p-3 w-full outline-none text-[0.85rem] focus:border-[#888] transition-colors [color-scheme:dark]" />
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={bookingStatus === "submitting"}
                className="w-full bg-[#FFFFFF] text-[#000000] font-semibold tracking-[0.1em] uppercase py-4 text-[0.8rem] hover:bg-[#888888] transition-colors disabled:opacity-50 flex justify-center items-center gap-3"
              >
                {bookingStatus === "submitting" ? (
                  <><Loader2 className="animate-spin" size={18} /> Processing...</>
                ) : "Confirm Booking"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
