
import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants.tsx';
import { PortfolioItem } from '../types.ts';

const VideoModal: React.FC<{ item: PortfolioItem | null; onClose: () => void }> = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-sm transition-all animate-fade-in" onClick={onClose}>
      <button 
        className="absolute top-6 right-6 text-white hover:text-blue-500 transition-colors z-[210] p-2 bg-white/10 rounded-full"
        onClick={onClose}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      <div className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        {item.type === 'video' ? (
          <video 
            src={item.imageUrl} 
            controls 
            autoPlay 
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-contain" />
        )}
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const categories = ['All', 'UGC Shorts', 'Product Shoots', 'Informative', 'Graphic'];

  const filteredItems = useMemo(() => {
    if (filter === 'All') {
      // Pick 9 random items from different categories for diversity
      return [...PORTFOLIO_ITEMS].sort(() => 0.5 - Math.random()).slice(0, 9);
    }
    return PORTFOLIO_ITEMS.filter(item => item.category === filter);
  }, [filter]);

  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20 reveal-item">
          <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 sm:mb-6 block">Our Masterpieces</span>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-[#0f172a] mb-6 sm:mb-8 leading-tight">The 'Hooks' Gallery</h2>
          <p className="text-base sm:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Real voices that move products. Cinematic visuals that build legacy. <br className="hidden sm:block"/>
            Explore our high-performance portfolio.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-20 reveal-item">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 sm:px-10 py-2 sm:py-4 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                filter === cat 
                ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/25 sm:scale-105' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-blue-200 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer relative overflow-hidden rounded-[2rem] sm:rounded-[3.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-700 reveal-item hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.2)]"
            >
              <div className="aspect-[9/16] overflow-hidden bg-[#0f172a]">
                {item.type === 'video' ? (
                  <video 
                    src={item.imageUrl}
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                ) : (
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 sm:p-12 text-white">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-2 sm:mb-4">{item.tag}</span>
                <h3 className="text-lg sm:text-2xl font-black mb-4 sm:mb-6 leading-tight translate-y-8 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 flex items-center justify-center self-start transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-150 shadow-xl shadow-blue-500/30">
                   <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 7l-5 5 5 5V7z"></path>
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 3v18l15-9L5 3z"></path>
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Download Links */}
        <div className="mt-20 sm:mt-32 p-8 sm:p-16 bg-slate-50 rounded-[3rem] border border-slate-100 text-center reveal-item">
          <h4 className="text-2xl sm:text-4xl font-black mb-6 sm:mb-10 text-[#0f172a]">Ready to deep dive?</h4>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="https://drive.google.com/file/d/1ck39CH86JQXK_S-M1OrJeGMFHJJDYcdm/view?usp=sharing" 
              target="_blank" 
              className="w-full sm:w-auto px-8 py-5 bg-blue-600 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
            >
              Download UGC Portfolio
            </a>
            <a 
              href="https://drive.google.com/file/d/1etK8cAOFwYN_KwEKDYVcbt7CMZamwv63/view?usp=sharing" 
              target="_blank" 
              className="w-full sm:w-auto px-8 py-5 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95"
            >
              Download Graphics Portfolio
            </a>
          </div>
        </div>
      </div>
      
      <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

export default Portfolio;
