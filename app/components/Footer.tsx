import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-16 px-10 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-[0.65rem] tracking-widest uppercase text-[#888] gap-6">
        <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
          <span>OPEN 7 DAYS, 9AM—LATE</span>
          <span className="hidden md:inline text-[#333]">•</span>
          <span className="text-white md:text-[#888]">0486 023 709</span>
        </div>
        <div className="text-center hover:text-white transition-colors cursor-pointer">
          <a href="https://maps.google.com/?q=4/253+Ocean+Keys+Blvd,+Clarkson+WA+6030" target="_blank" rel="noopener noreferrer">
             4/253 OCEAN KEYS BLVD, CLARKSON WA 6030
          </a>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
