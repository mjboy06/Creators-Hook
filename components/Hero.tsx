
import React from 'react';

const Hero: React.FC = () => {
  const heroVideos = [
    "https://www.dropbox.com/scl/fi/lhltyo3a6e7nnc6wmik8j/ugc-6.mp4?rlkey=2j4xt0ekx9vphqr2q9bzebui4&st=9a7fmti8&raw=1",
    "https://www.dropbox.com/scl/fi/s2yrb6u1bp8q75hea4iow/UGC-5.mp4?rlkey=isyk8km3uu6n74z8cvyzi013a&st=vksb6rhn&raw=1",
    "https://www.dropbox.com/scl/fi/jw8qyj9qvz0ju0zae39no/ugc-4.mp4?rlkey=snkswbncjegafykucd8uuhhf5&st=r6cbjq43&raw=1",
    "https://www.dropbox.com/scl/fi/ugswlzr2ylufzohi32msq/in-6.mp4?rlkey=j8htm7jtry7u5spk7o5zlfv6h&st=9hl08hi6&raw=1",
    "https://www.dropbox.com/scl/fi/3ls879db665hncowegutn/in-5.mp4?rlkey=jn5z1gho09nr3azddtj993o3p&st=s9h7458k&raw=1",
    "https://www.dropbox.com/scl/fi/5lj0yar5c8xkm4zw87ath/in-4.mp4?rlkey=yrcy1oemsybfhww8l6c4miijz&st=33fskazx&raw=1"
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
