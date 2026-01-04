
import React from 'react';

const ResultsBanner: React.FC = () => {
  const items = [
    "1500+ Ads Produced.",
    "100+ Brands Scaled.",
    "4x Avg. ROAS Increase.",
    "30% Lower CAC Trends.",
    "Premium Creative Strategy.",
    "Global Creator Network."
  ];

  return (
    <section className="relative py-8 sm:py-12 bg-[#0f172a] overflow-hidden">
      <div className="flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center mx-10 sm:mx-16">
              <span className="text-xl sm:text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase">
                {text}
              </span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-600 ml-10 sm:ml-16 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsBanner;
