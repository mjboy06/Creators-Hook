
import React, { useState } from 'react';

const UGCExplanation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const accordionItems = [
    {
      title: "What Makes UGC Ads Different From Traditional Ads?",
      content: "UGC ads are filmed by real creators using real products in real environments. They don’t feel like ads — they feel like content. This native look builds instant trust, drives higher engagement, and lowers customer acquisition costs."
    },
    {
      title: "Why Do UGC Ads Perform Better?",
      content: "Because people trust people more than brands. UGC leverages social proof, authenticity, and human psychology to stop the scroll and turn attention into action."
    },
    {
      title: "Where Are UGC Ads Used?",
      content: "UGC ads are used across Instagram, Facebook, YouTube Shorts, Snapchat, and landing pages. Anywhere your audience scrolls — UGC wins."
    }
  ];

  return (
    <section id="ugc" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0f172a] rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-600/30">The Strategy</span>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                What Are <span className="text-blue-500">UGC Ads?</span>
              </h2>
              
              <div className="space-y-4">
                {accordionItems.map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300">
                    <button 
                      onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/10 transition-colors"
                    >
                      <span className="text-lg font-bold leading-tight pr-4">{item.title}</span>
                      <svg 
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-blue-500 ${activeIndex === idx ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 pt-0 text-slate-400 leading-relaxed font-medium">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal-item">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform md:rotate-3 scale-95 hover:rotate-0 transition-transform duration-700 border-4 border-white/5">
                <img 
                  src="https://res.cloudinary.com/djwiyyxkm/image/upload/v1767498675/ChatGPT_Image_Jan_4_2026_09_19_55_AM_nggamh.png" 
                  alt="UGC Creators Content" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-600 text-white p-6 rounded-full flex flex-col items-center justify-center text-center shadow-2xl font-black animate-bounce-subtle z-20">
                <span className="text-4xl">100%</span>
                <span className="text-[10px] uppercase tracking-tighter leading-tight mt-2">Authentic Human <br/> Connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGCExplanation;
