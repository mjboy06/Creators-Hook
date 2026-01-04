
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 sm:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 sm:mb-20">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-6 sm:mb-8 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://raw.githubusercontent.com/creatorshook/assets/main/logo.png" 
                alt="Creators Hook Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain brightness-125"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://i.postimg.cc/FfTdp86J/All-Logos-(48).png";
                }}
              />
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white/40 group-hover:text-blue-500 transition-colors">CREATORS HOOK</span>
            </div>
            <p className="text-gray-400 max-w-sm text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Premium UGC agency specializing in high-converting video and graphic assets for modern brands.
            </p>
            <div className="flex gap-4">
               {['ig', 'yt', 'li', 'tw'].map(s => (
                 <a key={s} href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-[10px] font-bold uppercase">{s}</a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-6 sm:mb-8 uppercase tracking-widest text-blue-500">Navigation</h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-400 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-6 sm:mb-8 uppercase tracking-widest text-blue-500">Inquiries</h4>
            <div className="space-y-6 text-gray-400">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-tighter text-white/40 mb-1">Email</p>
                <a href="mailto:creatorshookofficial@gmail.com" className="hover:text-white transition-colors block break-all text-sm sm:text-base">creatorshookofficial@gmail.com</a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-tighter text-white/40 mb-1">WhatsApp</p>
                <a href="tel:+917339953697" className="hover:text-white transition-colors text-sm sm:text-base">+91 73399 53697</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 sm:pt-10 border-t border-white/10 text-gray-500 text-[10px] font-bold tracking-widest text-center md:text-left">
          <p className="mb-6 md:mb-0 uppercase">MADE WITH ❤️ BY CREATORS HOOK AGENCY</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <a href="#" className="hover:text-white transition-colors uppercase">Privacy</a>
            <a href="#" className="hover:text-white transition-colors uppercase">Terms</a>
            <a href="#" className="hover:text-white transition-colors uppercase">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
