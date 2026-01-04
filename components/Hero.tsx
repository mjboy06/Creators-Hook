
import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

const Hero: React.FC = () => {
  // Use the specific Cloudinary links for the high-speed strip
  const heroVideos = [
    "https://res.cloudinary.com/djwiyyxkm/video/upload/v1767486993/d2cwithgirish_short_kibhjg.mp4",
    "https://res.cloudinary.com/djwiyyxkm/video/upload/v1767487004/eagle_08-11-25-2x-RIFE-RIFE4.0-120fps_vxdfam.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-showing-off-her-new-outfit-34538-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-young-woman-taking-a-selfie-in-the-park-34542-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-in-a-cafe-34541-large.mp4"
  ];

  return (
    <section className="relative pt-32 sm:pt-48 pb-12 sm:pb-20 bg-white overflow-hidden" id="home">
      {/* Enhanced Background Transparency Effects */}
      <div className="absolute inset-0 z-0 influencer-texture"></div>
      <div className="absolute inset-0 z-0 watermark-bg"></div>
      
      {/* Low Transparent Silhouette Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="flex justify-between items-center h-full px-12">
           <img 
             src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" 
             className="w-1/4 transform -rotate-6 grayscale" alt="" 
           />
           <img 
             src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
             className="w-1/4 transform rotate-12 grayscale translate-y-20" alt="" 
           />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-24 relative z-10">
        <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] sm:text-xs font-black mb-6 sm:mb-8 tracking-[0.2em] border border-blue-100 uppercase">
          Real Influencers. Real Impact.
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-[6.5rem] font-black text-[#0f172a] leading-[1] mb-6 sm:mb-10 tracking-tighter max-w-5xl mx-auto px-2">
          UGC Engineered to <br className="hidden sm:block"/> 
          <span className="text-blue-600 italic">Convert.</span>
        </h1>
        
        <p className="text-base sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-10 sm:mb-16 font-medium leading-relaxed px-4">
          In a world of noise, we are the signal. <br className="hidden md:block"/>
          Strategic creative production that scales high-growth brands.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto bg-[#0f172a] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-black hover:bg-blue-600 transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95"
          >
            VIEW GALLERY
          </a>
          <a href="#contact" className="text-slate-600 font-bold text-base sm:text-lg hover:text-blue-600 transition-colors flex items-center gap-2 px-6 py-3">
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Fast Scrolling Strip with requested videos */}
      <div className="w-full relative py-8 sm:py-12 z-10 bg-transparent">
        <div className="flex animate-marquee-fast hover:[animation-play-state:paused]">
          {[...heroVideos, ...heroVideos, ...heroVideos].map((url, i) => (
            <div key={i} className="flex-shrink-0 mx-3 sm:mx-5 w-[180px] sm:w-[280px] aspect-[9/16] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-black group relative border border-slate-100">
               <video 
                 src={url} 
                 autoPlay 
                 muted 
                 loop 
                 playsInline 
                 className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors"></div>
               <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-white text-[10px] font-black tracking-widest uppercase">Performance Ready</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
