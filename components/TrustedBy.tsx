
import React from 'react';

const TrustedBy: React.FC = () => {
  // 31 Logos split into 3 rows
  const allLogos = [
    "1TZJfbkviNq3bhOCp9itpm00og1_piCPR", "1dGF-wvh0jyPzT9xyI69uqe94KBkzrRyU", "1bPWtdPHNW3bXHdPJHf5BSLYgeP43jqOS",
    "1dtdebru1bnXyhvtaWF_UNgSMOqCubwNR", "1Nr3otT2uNYkhplTg-RsoZ4WATfAzheaE", "1s5HnVMXHVDnK72aWugfgznGBtOYNxwYS",
    "1-jxwDa3CdzuDhqh0YFLzGPi0qjZ7tmvk", "1CwA2WB9WXK1xfdz4vxbhv1POKjz1GbqF", "1vvUUUCAATCwX4EUk40Rtn_pqX7ZRimLw",
    "1bKdFJSW7KmXYmJksNBs4MwvFC_UaifmN", "12fKfNDVxoWO2Z10tYe2CMWrJlwI4gnsL", "1gi5rDh3fk5kEeLr8U-oc8iirwHQ_kUzI",
    "1rZkkWE9F3uS9D16Ncbdeyv4ESZJ9yrpm", "15C0MxyPHSg_a6-3MtoLB03SORtNkkwSz", "1HcNn7bc5ncN1gfuT2j2D4hEA6HnmcL3b",
    "1ccgCEDCDyNmesMLw0-gT3vckV0Q6v-7E", "1LbIMiClhmDGQKarfU4D1FcMM0WtNww9C", "1BjUymL3m-9MZKnkZbEw-v_z19YwkyIT-",
    "1RqCMevn2mi8h_xW31dqMoLm2dLUF5K9_", "17EMr8n0qm9ldTnWhJRSZNseClfqd6bO7", "13l8WRd5i6OY_Lqz2bI7CPqGreM_Ctr8z",
    "193O8LurK1CF4nzqPbSMq4eknpVkknLGU", "1tYD1IrpE1KsaBD_b365Syw4IIDUz40DG", "17vh00BzAY7WEstkFAHSlKg2ivHO6naiM",
    "10S6UrAK-X9nuOf13LHKvA4heqbOWG73n", "1Y6UI7BeomK5m7jz6M46Aw8nKEqbXfwP7", "1t19QEjMO-WJyV5_aiVc342SC6_OITrrM",
    "1PojyG2LLfz1_OcyU4p8-VCH0CoU259mC", "13jecdQxWvee44pbRrjxVU8JPcRJIPVAf", "1jHGnz2_LXmFrtqg0WuPpJ0yIuzQ2vJkm",
    "1fkncT58SlPivJkgWmr5Fwd-J-3u-R7Tf"
  ].map(id => `https://drive.google.com/uc?export=view&id=${id}`);

  const row1 = allLogos.slice(0, 10);
  const row2 = allLogos.slice(10, 21);
  const row3 = allLogos.slice(21, 31);

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
                  className="h-10 sm:h-16 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
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
                  className="h-10 sm:h-16 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
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
                  className="h-10 sm:h-16 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
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
