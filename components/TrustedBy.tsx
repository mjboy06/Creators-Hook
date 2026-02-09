
import React from 'react';

const TrustedBy: React.FC = () => {
  // New set of logos provided by the user
  const allLogos = [
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638431/52_gsgfpa.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638430/47_pw1pot.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638429/53_pruk7e.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638429/51_vrnh2h.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638428/50_lcqxuz.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638428/54_tnbltb.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638426/55_asczpi.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638426/57_ynlif4.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638425/56_izyuiq.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638425/58_w18edw.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638424/64_lanyem.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638423/59_h1qqej.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638423/61_e7tiov.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638422/49_dpborc.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638422/48_wyjspe.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638421/60_nb2zgy.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638421/62_swrtr6.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638414/63_m6seug.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638420/68_m9rjuk.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638420/69_rve4al.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638419/67_rji9xw.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638419/73_gkli9o.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638418/66_tykqmw.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638418/72_jwogao.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638417/64_wrhq7d.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638417/70_hhb0vl.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638416/71_gkhq9n.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638415/75_ivqldl.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638415/65_bk8c83.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638414/74_xkfbxg.png",
    "https://res.cloudinary.com/dzdfz5ron/image/upload/v1770638414/76_hhhebb.png"
  ];

  const row1 = allLogos.slice(0, 11);
  const row2 = allLogos.slice(11, 22);
  const row3 = allLogos.slice(22, 31);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            Trusted By
          </h2>
        </div>
      </div>

      <div className="space-y-8 sm:space-y-12">
        {/* Row 1: Left to Right */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {[...row1, ...row1, ...row1].map((logo, idx) => (
              <div key={idx} className="mx-8 sm:mx-12 flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Partner Logo R1-${idx}`} 
                  className="h-10 sm:h-16 w-auto object-contain hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...row2, ...row2, ...row2].map((logo, idx) => (
              <div key={idx} className="mx-8 sm:mx-12 flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Partner Logo R2-${idx}`} 
                  className="h-10 sm:h-16 w-auto object-contain hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Left to Right */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {[...row3, ...row3, ...row3].map((logo, idx) => (
              <div key={idx} className="mx-8 sm:mx-12 flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Partner Logo R3-${idx}`} 
                  className="h-10 sm:h-16 w-auto object-contain hover:scale-110 transition-all duration-300"
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
