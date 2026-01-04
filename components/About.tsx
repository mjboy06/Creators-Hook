
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative reveal-item order-2 lg:order-1">
            <div className="aspect-[4/5] md:aspect-square rounded-[3rem] sm:rounded-[4rem] bg-[#0f172a] overflow-hidden relative shadow-2xl group">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                 alt="Creators Hook Team" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-6 w-40 h-40 sm:w-56 sm:h-56 bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] p-6 sm:p-10 flex flex-col justify-center items-center text-center border border-slate-50 z-10">
               <span className="text-4xl sm:text-6xl font-black text-blue-600">Hook</span>
               <span className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-2 leading-tight">Driven <br/> Excellence</span>
            </div>
          </div>

          <div className="reveal-item order-1 lg:order-2">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 sm:mb-6 block">Creators Hook Impact</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0f172a] mb-8 sm:mb-10 leading-[1.05]">
              Influence isn't <span className="text-blue-600 italic">bought.</span> <br/> 
              It is <span className="underline decoration-blue-600 decoration-4 underline-offset-8">engineered.</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-500 mb-8 sm:mb-12 leading-relaxed font-medium">
              We don't just produce content; we deploy creative assets that leverage human psychology to stop scrollers in their tracks. Our agency bridges the gap between raw authenticity and polished conversion.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-black shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h4 className="text-xl font-black">Fast Execution</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Agile production pipelines built for the speed of modern social feeds.</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0f172a] font-black shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 className="text-xl font-black">Market Insights</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Every hook is backed by performance data and creator intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
