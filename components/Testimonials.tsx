
import React from 'react';

const Testimonials: React.FC = () => {
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
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[3rem] shadow-xl group hover:bg-white/10 transition-all duration-500">
             <div className="flex gap-1 text-yellow-500 mb-6">
               {[1,2,3,4,5].map(s => <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>)}
             </div>
             <p className="text-lg leading-relaxed mb-10 font-medium text-slate-300">
               "Creators Hook has done an exceptional job for our brand. Their UGC production didn't just look great, it converted. We saw a 3x increase in click-through rates within the first week."
             </p>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">JD</div>
                <div>
                   <h4 className="font-bold">John Doe</h4>
                   <p className="text-sm text-slate-500">Founder, Skincare Brand</p>
                </div>
             </div>
          </div>
          
          <div className="bg-blue-600 p-10 rounded-[3rem] text-white shadow-2xl transform md:-translate-y-6">
             <div className="flex gap-1 text-white mb-6">
               {[1,2,3,4,5].map(s => <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>)}
             </div>
             <p className="text-lg leading-relaxed mb-10 font-bold">
               "Working with the team has been a turning point for us. The production quality is unmatched and they really understand the nuance of social selling. Highly recommended for any D2C brand."
             </p>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">AS</div>
                <div>
                   <h4 className="font-bold">Alice Sharma</h4>
                   <p className="text-sm text-white/70">Marketing Head, Tech India</p>
                </div>
             </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[3rem] shadow-xl group hover:bg-white/10 transition-all duration-500">
             <div className="flex gap-1 text-yellow-500 mb-6">
               {[1,2,3,4,5].map(s => <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>)}
             </div>
             <p className="text-lg leading-relaxed mb-10 font-medium text-slate-300">
               "They just get it. From the first briefing to the final delivery, the process was seamless. Our ROAS has never been better since we switched all our creatives to Creators Hook."
             </p>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">RK</div>
                <div>
                   <h4 className="font-bold">Rahul K.</h4>
                   <p className="text-sm text-slate-500">Growth Manager, FMCG Co.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
