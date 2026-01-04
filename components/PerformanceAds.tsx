
import React from 'react';

const PerformanceAds: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left reveal-item">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-4 block">Performance Creatives</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] leading-tight mb-6 sm:mb-8">
            Performance-Focused <br className="hidden sm:block"/> Video Ads
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            These are ads designed to scale. We produce them with professional actors but keep the UGC-style framework intact, so the content feels authentic yet polished. With the flexibility to add more visuals and storytelling angles, our performance creative strategists craft ads that don't just look good—they deliver high ROAS at scale.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start">
             <div className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-slate-100 text-[#0f172a] text-xs sm:text-sm font-bold">Scaling focused</div>
             <div className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-slate-100 text-[#0f172a] text-xs sm:text-sm font-bold">100% Usage Rights</div>
          </div>
        </div>
        
        <div className="flex-1 relative h-[350px] sm:h-[500px] w-full max-w-[500px] mx-auto reveal-item">
          {/* Tilted Reels Cards - Scaled for Mobile */}
          <div className="absolute top-0 right-4 sm:right-10 w-32 sm:w-48 h-52 sm:h-72 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform -rotate-12 translate-x-4 hover:-translate-y-4 transition-transform duration-500 z-30">
            <img src="https://picsum.photos/seed/ad1/400/600" className="w-full h-full object-cover" alt="Ad card" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3 sm:p-4">
              <span className="text-white text-[8px] sm:text-xs font-bold bg-blue-600 px-2 py-0.5 sm:py-1 rounded">Performance</span>
            </div>
          </div>
          
          <div className="absolute top-10 left-4 sm:left-10 w-32 sm:w-48 h-52 sm:h-72 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:-translate-y-4 transition-transform duration-500 z-20">
             <img src="https://picsum.photos/seed/ad2/400/600" className="w-full h-full object-cover" alt="Ad card" />
          </div>

          <div className="absolute bottom-0 sm:-bottom-10 left-1/2 sm:right-20 -translate-x-1/2 sm:translate-x-0 w-32 sm:w-48 h-52 sm:h-72 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:-translate-y-4 transition-transform duration-500 z-10 border-2 sm:border-4 border-white">
             <img src="https://picsum.photos/seed/ad3/400/600" className="w-full h-full object-cover" alt="Ad card" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceAds;
