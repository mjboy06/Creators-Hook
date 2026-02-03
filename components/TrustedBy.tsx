
import React from 'react';

const TrustedBy: React.FC = () => {
  // Row 1: Right Side (10 logos)
  const row1 = [
    "https://www.dropbox.com/scl/fi/ce98t39eluqcavefwqkuo/76.png?rlkey=feh2rne10fwluteiagi74oawh&st=11r0fpoj&raw=1",
    "https://www.dropbox.com/scl/fi/yoysmff63h03qtpvws62l/75.png?rlkey=nluv1dppeddxhhcmfcwz6qeq2&st=1mkjlnxn&raw=1",
    "https://www.dropbox.com/scl/fi/6nszh4g9keu112yn7z1gd/74.png?rlkey=x946n44muh16xcxeym0fsgoth&st=dk1c2yzu&raw=1",
    "https://www.dropbox.com/scl/fi/j6qyaxi5tethbt3e7m3u8/73.png?rlkey=2fkcl4x5dlq5dvo5vmc7yul38&st=j5b5kio2&raw=1",
    "https://www.dropbox.com/scl/fi/tawt4swyc5gskot3oc10u/72.png?rlkey=ajbxxtm30475z2runvmnnh3ia&st=swo3jg62&raw=1",
    "https://www.dropbox.com/scl/fi/hhm91pf1xhdl8btb25npq/71.png?rlkey=uyw1he1tcdr67lqb2jld8i7yv&st=p6ql8ho3&raw=1",
    "https://www.dropbox.com/scl/fi/cwudxyzgl8256jh5eyqb9/70.png?rlkey=khpn6sq58vuytii8sggkk1f88&st=7vdu5z2j&raw=1",
    "https://www.dropbox.com/scl/fi/6psg0l3enwr0i4kqshrhq/69.png?rlkey=nrfx7n427er01vxropktyhkjg&st=uajrktlw&raw=1",
    "https://www.dropbox.com/scl/fi/4fq133vm3mo8gvakdxn8o/68.png?rlkey=k21i5xuu5eala8g8jkpfv472k&st=w5one4pi&raw=1",
    "https://www.dropbox.com/scl/fi/80appz71yh6ohaqt9418p/67.png?rlkey=i2hwzkcjaa6xhb0x79y56w6wf&st=tlpw7tch&raw=1"
  ];

  // Row 2: Left Side (9 logos) - Starts with Norwell (66)
  const row2 = [
    "https://www.dropbox.com/scl/fi/t2ra183w8f7y8vai7rva7/66.png?rlkey=wctfx5r79hds2uge1rxmthlps&st=7t6zrsx9&raw=1", // Norwell Logo
    "https://www.dropbox.com/scl/fi/zuzrtmuc18jhzkhdtkizi/64.png?rlkey=6rrqumvtfeh4tekcjxpjwsutc&st=4583wx6t&raw=1", 
    "https://www.dropbox.com/scl/fi/h3jgkhpw1l7tm0e3nfzq5/48.png?rlkey=mtd5bzbo2mapochshazo16rhm&st=j6d3w0xy&raw=1",
    "https://www.dropbox.com/scl/fi/mvpywxymff5jsxxahd92v/49.png?rlkey=twaom7a1dkz5bwvxwm2sjlev0&st=uduzbwm7&raw=1",
    "https://www.dropbox.com/scl/fi/lr65akxk9fp131xau6mil/50.png?rlkey=bs09cem2s51haqy61c4xebloc&st=pb2knbnt&raw=1",
    "https://www.dropbox.com/scl/fi/cw4qwl1xm17fro4lc23fe/51.png?rlkey=avn4wuy71y9qxouoedg8bq4el&st=l4bsdk8d&raw=1",
    "https://www.dropbox.com/scl/fi/1t2kxbbd64k3xshtt2gky/52.png?rlkey=68wayfrwl85nc3qmmxj9nc6et&st=0i8byaig&raw=1",
    "https://www.dropbox.com/scl/fi/9laifbbuyodohvbv3d3dm/53.png?rlkey=70i6t826cz3sxuscsdz1rpvsk&st=6iblyy7c&raw=1",
    "https://www.dropbox.com/scl/fi/dxhz95cu103y657xqv78j/54.png?rlkey=sr7c0pzsj5c5srvoz6rqw5bs9&st=5qbczur5&raw=1"
  ];

  // Row 3: Right Side (9 logos)
  const row3 = [
    "https://www.dropbox.com/scl/fi/z7orztkk8whlozfa13gz5/55.png?rlkey=uqwnu94xy0me1o0tdnt61165x&st=wxgxwga3&raw=1",
    "https://www.dropbox.com/scl/fi/mev1i3qt2pyp16zy00ffh/57.png?rlkey=k4lnylqianqxm7i86hpol1oqb&st=wrywi3eo&raw=1",
    "https://www.dropbox.com/scl/fi/uw5qabmztqofuylse3aqu/58.png?rlkey=1fzoa9kot1lggmr5qzpjdnt7r&st=t91wyeek&raw=1",
    "https://www.dropbox.com/scl/fi/xrmeloyh996k2nekvt9s2/64.png?rlkey=7zxzgnkh7hfa9462060g716qm&st=xwk9h77v&raw=1", // Newly added logo
    "https://www.dropbox.com/scl/fi/koizv9ajzqxqkb1u3619j/59.png?rlkey=286fnge6f3b0hu7yndi62i74s&st=qhtlcw3v&raw=1",
    "https://www.dropbox.com/scl/fi/dsp58fxdcdd0mwd2fwtym/60.png?rlkey=950uy77onm13bm66zi0n4n1u4&st=75tbfxeb&raw=1",
    "https://www.dropbox.com/scl/fi/6nrywxkenohca0bga27zp/61.png?rlkey=5c0wf24a0ppdcdlfy01sczeu1&st=g73fhla1&raw=1",
    "https://www.dropbox.com/scl/fi/kywrhlgnjrjmki04cjgjw/62.png?rlkey=2dvf3fhx35tlz661j2tigawjg&st=97r67801&raw=1",
    "https://www.dropbox.com/scl/fi/r9ascnudy7a94tvmbzp0v/63.png?rlkey=jow8t6b2dtm27039xi3gbmmry&st=k1tcb9vm&raw=1"
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
        {/* Row 1: Left to Right (Right Side) */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {[...row1, ...row1, ...row1].map((logo, idx) => (
              <div key={idx} className="mx-8 sm:mx-12 flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Partner Logo R1-${idx}`} 
                  className="h-12 sm:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left (Left Side) */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
            {[...row2, ...row2, ...row2].map((logo, idx) => (
              <div key={idx} className="mx-8 sm:mx-12 flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Partner Logo R2-${idx}`} 
                  className="h-12 sm:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Left to Right (Right Side) */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] whitespace-nowrap">
            {[...row3, ...row3, ...row3].map((logo, idx) => (
              <div key={idx} className="mx-8 sm:mx-12 flex-shrink-0">
                <img 
                  src={logo} 
                  alt={`Partner Logo R3-${idx}`} 
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
