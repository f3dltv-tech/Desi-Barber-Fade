import { Navigation } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] px-6 py-24 mb-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Contact & Location</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Details */}
          <div className="space-y-12">
            <div className="border border-[#1A1A1A] bg-[#0C0C0C] p-8">
              <h3 className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold mb-6">Address</h3>
              <p className="text-white text-lg tracking-wide mb-6">4/253 Ocean Keys Blvd<br />Clarkson WA 6030<br />Western Australia</p>
              <a 
                href="https://maps.google.com/?q=4/253+Ocean+Keys+Blvd,+Clarkson+WA+6030" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#888] uppercase hover:text-white transition-colors"
               >
                 <Navigation size={14} /> Get Directions
               </a>
            </div>

            <div className="border border-[#1A1A1A] bg-[#0C0C0C] p-8">
              <h3 className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold mb-6">Contact</h3>
              <p className="text-white text-lg tracking-wide mb-4">0486 023 709</p>
            </div>

            <div className="border border-[#1A1A1A] bg-[#0C0C0C] p-8">
              <h3 className="text-[0.65rem] uppercase tracking-[0.2em] text-[#888888] font-semibold mb-6">Hours</h3>
              <div className="space-y-2 text-[#ccc] tracking-wide text-sm font-light">
                 <div className="flex justify-between border-b border-[#222] pb-2"><span>Monday</span> <span>9:00 AM - 6:00 PM</span></div>
                 <div className="flex justify-between border-b border-[#222] pb-2"><span>Tuesday</span> <span>9:00 AM - 6:00 PM</span></div>
                 <div className="flex justify-between border-b border-[#222] pb-2"><span>Wednesday</span> <span>9:00 AM - 6:00 PM</span></div>
                 <div className="flex justify-between border-b border-[#222] pb-2 text-white font-medium"><span>Thursday</span> <span>9:00 AM - 8:00 PM (Late)</span></div>
                 <div className="flex justify-between border-b border-[#222] pb-2"><span>Friday</span> <span>9:00 AM - 6:00 PM</span></div>
                 <div className="flex justify-between border-b border-[#222] pb-2"><span>Saturday</span> <span>9:00 AM - 5:00 PM</span></div>
                 <div className="flex justify-between pb-2"><span>Sunday</span> <span>10:00 AM - 3:00 PM</span></div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-[400px] md:h-auto border border-[#1A1A1A] bg-[#0C0C0C] relative group overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27161.789139580455!2d115.70014022712217!3d-31.683344933221976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ab0a9cfabda1%3A0x6bba84759600ec03!2sDesi%20Barber%20Fade!5e0!3m2!1sen!2sus!4v1718318625907!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)', opacity: 0.9 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
