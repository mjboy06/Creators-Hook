
import React from 'react';

const PortfolioGrid: React.FC = () => {
  const categories = [
    { name: "Technology", img: "https://picsum.photos/seed/tech/400/700" },
    { name: "Baby Care", img: "https://picsum.photos/seed/baby/400/700" },
    { name: "Jewellery", img: "https://picsum.photos/seed/jewelry/400/700" },
    { name: "Gifting", img: "https://picsum.photos/seed/gift/400/700" },
    { name: "Health & Wellness", img: "https://picsum.photos/seed/health/400/700" },
    { name: "Fashion & Lifestyle", img: "https://picsum.photos/seed/fashion/400/700" }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">Our Work</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2e21]">Brands made these <br/> with Creators Hook</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-500 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </div>
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 relative group-hover:-translate-y-2">
                 <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 {/* Fake overlay for a real look */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
