
import React from 'react';
import { LOGOS } from '../constants';

const LogoBanner: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Trusted By Industry Leaders</p>
      </div>
      <div className="flex">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="mx-12 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-black text-gray-200 hover:text-blue-500 transition-colors cursor-default select-none">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
