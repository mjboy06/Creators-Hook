
import React from 'react';

const Hero: React.FC = () => {
  const heroVideos = [
    "https://res.cloudinary.com/djwiyyxkm/video/upload/v1767498268/Copy_of_Copy_of_QPO_MAX_CAR_MATS_MG_SAFARI_PR-2_FINAL_2_bm4wvq.mp4",
    "https://res.cloudinary.com/djwiyyxkm/video/upload/v1767498272/12_NOV_VOID_CRAFT_V2_2_qy5brd.mp4",
    "https://res.cloudinary.com/djwiyyxkm/video/upload/v1767497416/compressed-video_gljowe.mp4",
    "https://res.cloudinary.com/djwiyyxkm/video/upload/v1767496447/basttl_auto_ktm_1_j5a4r9.mp4",
    "https://res.cloudinary.com/djwiyyxkm/video/upload/v1767498286/d2cwithgirish_short_1_el9ggw.mp4"
  ];

  return (
    <section className="relative pt-32 sm:pt-48 pb-12 sm:pb-20 bg-white overflow-hidden" id="home">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url('https://res.cloudinary.com/djwiyyxkm/image/upload/v1767701219/Untitled_design_-_2026-01-06T173638.692_qkbwsm.png')` }}
      ></div>
      <div className="absolute inset-0 z-0 watermark-bg opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-24 relative z-10">
        <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] sm:text-xs font-black mb-6 sm:mb-8 tracking-[0.2em] border border-blue-100 uppercase">
          #1 Performance UGC Studio
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-[6.5rem] font-black text-[#0f172a] leading-[1] mb-6 sm:mb-10 tracking-tighter max-w-5xl mx-auto px-2">
          UGC Ads That Turn <br className="hidden sm:block"/> 
          Attention into <span className="text-blue-600 italic">Revenue.</span>
        </h1>
        
        <p className="text-base sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-10 sm:mb-16 font-medium leading-relaxed px-4">
          We create high-converting UGC ads using real creators to help ecommerce brands scale profitably across Instagram, Meta, and YouTube.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a 
            href="tel:7339953697" 
            className="w-full sm:w-auto bg-blue-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95"
          >
            Get a Free Strategy Call
          </a>
          <a href="#portfolio" className="text-[#0f172a] font-bold text-base sm:text-lg hover:text-blue-600 transition-colors flex items-center gap-2 px-6 py-3">
            View Our Work
          </a>
        </div>
      </div>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
