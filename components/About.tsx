
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative reveal-item order-2 lg:order-1">
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] sm:rounded-[4rem] bg-slate-50 overflow-hidden relative shadow-2xl group">
               <img 
                 src="https://res.cloudinary.com/djwiyyxkm/image/upload/v1767498712/All_Logos_49_vq7nbd.png" 
                 alt="Creators Hook Brand Growth" 
                 className="w-full h-full object-contain p-8 sm:p-16 group-hover:scale-105 transition-transform duration-1000" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-6 w-40 h-40 sm:w-56 sm:h-56 bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-10 flex flex-col justify-center items-center text-center border border-slate-50 z-10">
               <span className="text-4xl sm:text-6xl font-black text-blue-600">Grow</span>
               <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2 leading-tight">Beyond <br/> Boundaries</span>
            </div>
          </div>

          <div className="reveal-item order-1 lg:order-2">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6 block">Our Mission</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0f172a] mb-8 sm:mb-10 leading-[1.05]">
              Built for Brands Who Want <span className="text-blue-600 italic">Real Growth.</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-500 mb-8 sm:mb-12 leading-relaxed font-medium">
              We started Creators Hook because modern brands don’t need more content — they need content that performs. Our team combines human psychology, creator authenticity, and performance data to engineer UGC that turns attention into measurable growth.
            </p>
            
            <div className="grid grid-cols-1 gap-8 sm:gap-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-black flex-shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-black mb-1">Creator Network</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">500+ vetted creators across key niches ensuring perfect brand alignment.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black flex-shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-black mb-1">Performance Focused</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Every asset is built for testing and scaling to maximize your ROAS.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black flex-shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-black mb-1">Fast Turnaround</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Launch-ready content in days, not weeks. Speed is our competitive edge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
