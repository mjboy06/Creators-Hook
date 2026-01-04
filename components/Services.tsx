
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Our Expertise, <br/>
              <span className="text-blue-600">Your Competitive Edge.</span>
            </h2>
          </div>
          <div>
            <p className="text-xl text-gray-600">
              We don't just create content; we engineer influence. Our pillars are designed to turn passive scrollers into active customers.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-blue-600/50 transition-all hover:shadow-2xl hover:shadow-blue-600/10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                 <span className="text-2xl font-bold text-blue-600 group-hover:text-white">{idx + 1}</span>
              </div>
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8">{service.description}</p>
              <ul className="space-y-4">
                {service.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
