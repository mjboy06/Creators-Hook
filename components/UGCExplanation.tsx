
import React, { useState } from 'react';

const UGCExplanation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const accordionItems = [
    {
      title: "Non-biased Honest Reviews",
      content: "UGC acts as a bridge of trust. Unlike traditional high-production commercials, UGC features real people sharing their genuine experiences. This authenticity is why customers trust UGC 8.7x more than influencer content."
    },
    {
      title: "Relatable Real-Life Context",
      content: "We show products being used in everyday environments. This helps potential buyers visualize the product in their own lives, removing the mental barrier between seeing an ad and making a purchase."
    },
    {
      title: "Built for Mobile First",
      content: "All our UGC is produced in vertical 9:16 format, designed specifically for the platforms where your customers spend their time—TikTok, Instagram Reels, and YouTube Shorts."
    }
  ];

  return (
    <section id="ugc" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative shadow-2xl shadow-blue-600/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Learn the Method</span>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                What is <span className="text-blue-200">UGC?</span>
              </h2>
              
              <div className="space-y-4">
                {accordionItems.map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-300">
                    <button 
                      onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/10 transition-colors"
                    >
                      <span className="text-lg font-bold">{item.title}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 pt-0 text-blue-100 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal-item">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform md:rotate-3 scale-95 hover:rotate-0 transition-transform duration-700 border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="UGC Creators" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-white text-blue-600 p-6 rounded-full flex flex-col items-center justify-center text-center shadow-2xl font-black animate-bounce-subtle z-20">
                <span className="text-4xl">84%</span>
                <span className="text-[10px] uppercase tracking-tighter leading-tight mt-2">Trust UGC more than Ads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGCExplanation;
