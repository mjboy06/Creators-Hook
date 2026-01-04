
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      title: "Hook Strategy",
      description: "We analyze your audience and competitor landscape to find the 'hooks' that stop the scroll.",
      icon: "🎯"
    },
    {
      title: "Authentic Creation",
      description: "Our vetted creator network produces high-fidelity, honest reviews and storytelling content.",
      icon: "🎬"
    },
    {
      title: "Scale & Optimize",
      description: "We test multiple hooks and optimize for conversion, ensuring your content delivers ROI.",
      icon: "📈"
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Formula</span>
          <h2 className="text-4xl md:text-5xl font-black">How We Hook Your <span className="text-blue-500">Customers.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector lines for desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/4 right-1/4 h-px bg-white/10 -z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500 transform group-hover:-translate-y-2">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{step.title}</h3>
              <p className="text-white/50 leading-relaxed max-w-xs">{step.description}</p>
              <div className="mt-6 text-blue-500 font-black opacity-20 text-6xl">0{idx + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
