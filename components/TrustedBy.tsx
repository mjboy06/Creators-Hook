
import React from 'react';

const TrustedBy: React.FC = () => {
  const row1 = [
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709144/48_km0als.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709144/56_luklbo.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709146/49_u1xwr2.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709146/50_m9xkpl.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709146/54_qjojeo.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709147/61_znnpfl.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709147/62_umjfvb.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709148/63_lh40ih.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709148/55_zdmozq.png"
  ];

  const row2 = [
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709144/47_lebyk3.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709145/59_s9lzja.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709146/57_n2thrz.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709146/58_ldomyk.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709145/51_yrv4oi.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709147/52_uprnph.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709147/60_us7cbw.png",
    "https://res.cloudinary.com/djwiyyxkm/image/upload/v1767709148/64_dfqgpu.png"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            Trusted By
          </h2>
        </div>
      </div>

      <div className="space-y-12">
        {/* Row 1: Left to Right - Colorful */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {[...row1, ...row1, ...row1].map((logo, idx) => (
              <div key={idx} className="mx-8 sm:mx-12 flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${idx}`} 
                  className="h-12 sm:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left - Colorful */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...row2, ...row2, ...row2].map((logo, idx) => (
              <div key={idx} className="mx-8 sm:mx-12 flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${idx}`} 
                  className="h-12 sm:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
