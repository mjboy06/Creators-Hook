
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResultsBanner from './components/ResultsBanner';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import PerformanceAds from './components/PerformanceAds';
import UGCExplanation from './components/UGCExplanation';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
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
        <section id="services" className="scroll-mt-20">
          <Services />
        </section>
        <section id="process" className="scroll-mt-20">
          <Process />
        </section>
        <PerformanceAds />
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
