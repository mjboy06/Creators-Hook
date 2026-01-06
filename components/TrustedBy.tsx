
import React from 'react';

const TrustedBy: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] tracking-tight">
            Trusted By
          </h2>
        </div>
        <div className="flex justify-center items-center reveal-item">
          <img 
            src="https://res.cloudinary.com/djwiyyxkm/image/upload/v1767707883/SUJAL_CHOUHAN_1_drffcw.png" 
            alt="Brands that trust Creators Hook" 
            className="w-full max-w-5xl h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
