import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import OpenToWork from './sections/OpenToWork';
import GithubStats from './sections/GithubStats';
import Footer from './components/Footer';

const MarginGrid = ({ side }) => (
  <div className={`hidden lg:block flex-1 ${side === 'left' ? 'border-r-2' : 'border-l-2'} border-black bg-zinc-50/20 relative self-stretch`}>
    <div className="absolute inset-0 bg-hatched opacity-40" />
    <div className="absolute inset-0 bg-akira-grid" />
    {side === 'left' && (
      <div className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-10">
        
      </div>
    )}
  </div>
);

const App = () => {
  return (
    <div className="flex bg-white selection:bg-black selection:text-white overflow-x-hidden min-h-screen w-screen items-stretch">
      <MarginGrid side="left" />

      {/* Main Content Area */}
      <div className="w-full max-w-6xl relative z-10 border-x-2 border-black bg-white flex flex-col">
        <Navbar />

        <div className="flex-1 w-full">
          {/* Hero Section */}
          <section id="hero" className="border-b-2 border-black px-4 md:px-12 py-16 lg:py-24 w-full">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="border-b-2 border-black px-4 md:px-12 py-16 w-full">
            <About />
          </section>

          {/* Projects Section */}
          <section id="showcase" className="border-b-2 border-black px-4 md:px-12 py-16 w-full">
            <Projects />
          </section>

          {/* Github Stats Section */}
          <section id="stats" className="border-b-2 border-black px-4 md:px-12 py-16 w-full">
            <GithubStats />
          </section>

          {/* Services Section */}
          <section id="services" className="border-b-2 border-black px-4 md:px-12 py-16 w-full">
            <OpenToWork />
          </section>

          {/* Footer Section */}
          <section id="footer" className="px-4 md:px-12 py-12 bg-white w-full">
            <Footer />
          </section>
        </div>
      </div>

      <MarginGrid side="right" />
    </div>
  );
}

export default App;