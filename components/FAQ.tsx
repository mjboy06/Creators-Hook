
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical campaign take?",
      answer: "Most UGC campaigns are delivered within 10-14 days from the moment we finalize the strategy and send out the products to our creators."
    },
    {
      question: "Do you provide the creators or do we?",
      answer: "We have an in-house vetted network of 500+ creators across diverse niches (Auto, Tech, Lifestyle). We handle the recruitment, briefing, and management."
    },
    {
      question: "What platforms do you specialize in?",
      answer: "We focus on high-engagement short-form platforms: Instagram Reels, TikTok, and YouTube Shorts, along with premium long-form content for YouTube."
    },
    {
      question: "Can we use the content for paid ads?",
      answer: "Absolutely. All content we produce comes with full usage rights for your social channels and paid advertising campaigns."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">Got Questions? <br/><span className="text-blue-600">We Have Answers.</span></h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-black">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-8 pt-0 text-gray-600 leading-relaxed bg-gray-50/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
