
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      stars: 5,
      content: "“Creators Hook helped us bring the soul of Cabai — our premium car perfume brand — to life on social. The way they captured behind-the-scenes scent experiences and real customer reactions was incredible. Their UGC didn’t just look great, it sparked engagement we had never seen before.”",
      author: "Anshika Pandit",
      role: "Founder, Cabai (Car Perfume & Lifestyle)",
      initials: "AP",
      color: "bg-orange-500",
      accent: "🟠"
    },
    {
      stars: 5,
      content: "“Working with Creators Hook has been a game-changer for Instadekor. Their content perfectly reflects the style and craftsmanship of our interior décor products. We’ve seen strong increases in both engagement and direct inquiries after publishing their UGC ads — the quality and creativity are top notch.”",
      author: "Gajendra",
      role: "Founder, Instadekor (Interior Décor & Home Aesthetics)",
      initials: "G",
      color: "bg-blue-600",
      accent: "🔵",
      featured: true
    },
    {
      stars: 5,
      content: "“Creators Hook completely elevated our brand storytelling for Kiosiaji. Their UGC content showcased our premium dry fruits in such authentic, appetite-driven ways that our audience started engaging more and converting faster. The process was smooth, creative, and results-oriented.”",
      author: "Bajrang Chandak",
      role: "Founder, Kiosiaji (Premium Dry Fruits & Nuts)",
      initials: "BC",
      color: "bg-amber-800",
      accent: "🟤"
    }
  ];

  return (
    <section className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Social Proof</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            What our partners <br/> <span className="text-blue-500">say about us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className={`${rev.featured ? 'bg-blue-600' : 'bg-white/5 border border-white/10 backdrop-blur-xl'} p-10 rounded-[3rem] shadow-xl group hover:bg-opacity-90 transition-all duration-500 flex flex-col justify-between ${rev.featured ? 'transform md:-translate-y-6' : ''}`}
            >
               <div>
                 <div className="flex gap-1 text-yellow-500 mb-6">
                   {[...Array(rev.stars)].map((_, s) => (
                     <svg key={s} className={`w-5 h-5 ${rev.featured ? 'fill-white' : 'fill-current'}`} viewBox="0 0 24 24">
                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                     </svg>
                   ))}
                 </div>
                 <p className={`text-lg leading-relaxed mb-10 ${rev.featured ? 'font-bold' : 'font-medium text-slate-300'}`}>
                   {rev.content}
                 </p>
               </div>
               <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${rev.featured ? 'bg-white/20' : rev.color} flex items-center justify-center font-bold text-white`}>
                    {rev.initials}
                  </div>
                  <div>
                     <h4 className="font-bold flex items-center gap-2">
                       {rev.author} <span className="text-xs">{rev.accent}</span>
                     </h4>
                     <p className={`text-sm ${rev.featured ? 'text-white/70' : 'text-slate-500'}`}>{rev.role}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
