
import React from 'react';

const Hero: React.FC = () => {
  const heroVideos = [
    "https://www.dropbox.com/scl/fi/kl76yujjb73g0ud7dimy4/cabai-ad-2-only-triming_HrwPKTRi_gnzu0a.mp4?rlkey=jysy2q6jo5om4jje7ghhe656g&st=ebbbhcxj&raw=1",
    "https://www.dropbox.com/scl/fi/ysxofvhegxpcabelop0j1/17_nov_coshot_v1_1_cyqrkg.mp4?rlkey=p3mo9u2afgwmo5mdy6uv2huc3&st=xhu3kjxq&raw=1",
    "https://www.dropbox.com/scl/fi/pkhe7rw8f1p8tgbyfgat4/d2cwithgirish_short_1_el9ggw.mp4?rlkey=gqac957aa5myp37kweah4ohkh&st=a6rctdyn&raw=1",
    "https://www.dropbox.com/scl/fi/dtcmqsnt65sqikvm1bpel/compressed-video_gljowe.mp4?rlkey=bwnvz8wfcq2u691c2kwz90i7e&st=x7itulni&raw=1",
    "https://www.dropbox.com/scl/fi/1q8yb7rydu1wcbgkr97uv/12_NOV_VOID_CRAFT_V2_2_qy5brd.mp4?rlkey=84xyczqfmvwnny6upliq2h0em&st=193lrxy2&raw=1",
    "https://www.dropbox.com/scl/fi/s301mm74sn52a5siv139t/Copy_of_Copy_of_QPO_MAX_CAR_MATS_MG_SAFARI_PR-2_FINAL_2_bm4wvq.mp4?rlkey=0w77kyivavbfg357g0bjhyuc9&st=3jrjxm24&raw=1"
  ];

  return (
    <section className="relative pt-32 sm:pt-48 pb-12 sm:pb-20 bg-white overflow-hidden" id="home">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url('https://www.dropbox.com/scl/fi/iej9o7rn1mwerwucfmfaw/All-Logos-49.png?rlkey=r4u53du2g408s0vva25koryp9&st=v7zw5li4&raw=1')` }}
      ></div>
      <div className="absolute inset-0 z-0 watermark-bg opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16 sm:mb-24 relative z-10">
        <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] sm:text-xs font-black mb-6 sm:mb-8 tracking-[0.2em] border border-blue-100 uppercase">
          #1 Performance UGC Studio
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-[6.5rem] font-black text-[#0f172a] leading-[1] mb-6 sm:mb-10 tracking-tighter max-w-5xl mx-auto px-2">
          UGC Ads That Turn <br className="hidden sm:block"/> 
          Attention into <span className="text-blue-600 italic">Revenue.</span>
        </h1>
        
        <p className="text-base sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-10 sm:mb-16 font-medium leading-relaxed px-4">
          We create high-converting UGC ads using real creators to help ecommerce brands scale profitably across Instagram, Meta, and YouTube.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a 
            href="tel:7339953697" 
            className="w-full sm:w-auto bg-blue-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-4 shadow-2xl active:scale-95"
          >
            Get a Free Strategy Call
          </a>
          <a href="#portfolio" className="text-[#0f172a] font-bold text-base sm:text-lg hover:text-blue-600 transition-colors flex items-center gap-2 px-6 py-3">
            View Our Work
          </a>
        </div>
      </div>

      <div className="w-full relative py-8 sm:py-12 z-10 bg-transparent">
        <div className="flex animate-marquee-fast hover:[animation-play-state:paused]">
          {[...heroVideos, ...heroVideos, ...heroVideos].map((url, i) => (
            <div key={i} className="flex-shrink-0 mx-3 sm:mx-5 w-[180px] sm:w-[280px] aspect-[9/16] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-black group relative border border-slate-100">
               <video 
                 src={url} 
                 autoPlay 
                 muted 
                 loop 
                 playsInline 
                 className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
