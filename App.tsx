
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ResultsBanner from './components/ResultsBanner.tsx';
import About from './components/About.tsx';
import TrustedBy from './components/TrustedBy.tsx';
import Services from './components/Services.tsx';
import Process from './components/Process.tsx';
import UGCExplanation from './components/UGCExplanation.tsx';
import Portfolio from './components/Portfolio.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('section, .reveal-item');
    elements.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    const safetyTimer = setTimeout(() => {
      document.body.classList.add('reveal-fallback');
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <ResultsBanner />
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <TrustedBy />
        <section id="services" className="scroll-mt-20">
          <Services />
        </section>
        <section id="process" className="scroll-mt-20">
          <Process />
        </section>
        <UGCExplanation />
        <section id="portfolio" className="scroll-mt-20">
          <Portfolio />
        </section>
        <Testimonials />
        <section id="faq" className="scroll-mt-20">
          <FAQ />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
