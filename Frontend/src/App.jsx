import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import OpenToWork from './sections/OpenToWork';
import CallToAction from './sections/CallToAction';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="bg-[#0a0a0a] w-full selection:bg-[#eb28b0] selection:text-white">
      <Navbar />

      {/* Wrapper MUST NOT have overflow-hidden or sticky logic will break */}
      <div className="relative w-full">
        
        {/* Layer 1: Hero (Base) */}
        <section id="hero" className="sticky top-0 h-screen w-full z-10 overflow-hidden">
          <Hero />
        </section>

        {/* Layer 2: About (Slides over Hero) */}
        <section id="about" className="sticky top-0 min-h-screen w-full z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.9)] bg-[#0a0a0a]">
          <About />
        </section>

        {/* Layer 3: Projects (Slides over About) */}
        <section id="showcase" className="sticky top-0 min-h-screen w-full z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.9)] bg-[#0a0a0a]">
          <Projects />
        </section>

        {/* Layer 4: Services (Slides over Projects) */}
        <section id="services" className="sticky top-0 min-h-screen w-full z-40 shadow-[0_-30px_60px_rgba(0,0,0,0.9)] bg-[#0a0a0a]">
          <OpenToWork />
        </section>

        {/* Layer 5: Contact & Footer (Normal scroll at the end) */}
        <section id="contact" className="relative z-50 shadow-[0_-30px_60px_rgba(0,0,0,1)] bg-[#0a0a0a]">
          <div className="min-h-screen">
            <CallToAction />
          </div>
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default App;