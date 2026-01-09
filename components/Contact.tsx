
import React, { useState } from 'react';
import { supabase } from '../lib/supabase.ts';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
    };

    try {
      const { error: supabaseError } = await supabase
        .from('inquiries')
        .insert([data]);

      if (supabaseError) throw supabaseError;

      setIsSubmitted(true);
      console.log('Inquiry submitted to Supabase successfully');
    } catch (err: any) {
      console.error('Error submitting inquiry:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-white relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-50/50 rounded-full blur-[80px] sm:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="reveal-item">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 sm:mb-10 leading-[1.1] sm:leading-[1] text-[#0f172a]">
              Ready to <br/>
              <span className="text-blue-600 underline decoration-blue-100 underline-offset-4 sm:underline-offset-8">hook</span> your <br/> audience?
            </h2>
            <p className="text-lg sm:text-xl text-slate-500 mb-10 sm:mb-16 max-w-lg font-medium leading-relaxed">
              Don't leave your brand's growth to chance. Let's engineer content that actually converts.
            </p>
            
            <div className="space-y-6 sm:space-y-10">
              <div className="flex items-center gap-4 sm:gap-8 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5 sm:mb-1">Send a Brief</p>
                  <a href="mailto:creatorshookofficial@gmail.com" className="text-base sm:text-2xl font-black text-[#0f172a] hover:text-blue-600 transition-colors break-all">
                    creatorshookofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-8 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-slate-900 flex items-center justify-center text-white flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5 sm:mb-1">Direct Line</p>
                  <a href="tel:7339953697" className="text-base sm:text-2xl font-black text-[#0f172a] hover:text-blue-600 transition-colors">
                    +91 73399 53697
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[4rem] border border-slate-100 shadow-sm reveal-item w-full min-h-[500px] flex flex-col justify-center transition-all duration-500">
            {isSubmitted ? (
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-black text-[#0f172a] mb-4">Inquiry Received!</h3>
                <p className="text-slate-500 font-medium">Thank you for reaching out. Our strategy team will review your details and get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-blue-600 font-bold text-sm uppercase tracking-widest hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl sm:text-4xl font-black mb-8 sm:mb-10 text-[#0f172a]">Get a Free Quote</h3>
                <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                  {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100">
                      {error}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                      <input name="name" required type="text" className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 focus:border-blue-600 outline-none transition-all shadow-sm text-sm" placeholder="John Doe" disabled={isLoading} />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email</label>
                      <input name="email" required type="email" className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 focus:border-blue-600 outline-none transition-all shadow-sm text-sm" placeholder="john@brand.com" disabled={isLoading} />
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Company / Brand</label>
                    <input name="company" type="text" className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 focus:border-blue-600 outline-none transition-all shadow-sm text-sm" placeholder="Your Amazing Brand" disabled={isLoading} />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Inquiry Details</label>
                    <textarea name="message" required rows={4} className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-2xl sm:rounded-3xl border border-slate-200 focus:border-blue-600 outline-none transition-all resize-none shadow-sm text-sm" placeholder="Tell us what you're building..." disabled={isLoading}></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full bg-blue-600 text-white py-5 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg transition-all shadow-2xl shadow-blue-500/25 active:scale-95 flex items-center justify-center gap-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        PROCESSING...
                      </>
                    ) : 'SUBMIT INQUIRY'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
