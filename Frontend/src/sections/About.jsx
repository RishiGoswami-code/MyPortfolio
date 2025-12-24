import React from 'react';
import ProfileCard from '../components/ProfileCard';
import ArchitectSection from '../components/ArchitectSection';

const About = () => {
  const expertises = [
    {
      title: "Scalable Tech",
      description: "Building software that doesn't just work today, but handles the traffic of tomorrow.",
      icon: "🚀"
    },
    {
      title: "UI/UX Strategy",
      description: "High-end design meets functional code. Aesthetic is my secondary language.",
      icon: "🎨"
    }
  ];

  return (
    <section 
      id="about" 
      className="sticky top-0 min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 md:px-12 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <h2 className="font-pirata text-6xl md:text-9xl tracking-tighter uppercase leading-none">
            The <span className="text-white/20">Vision</span>
          </h2>
          <div className="max-w-md">
            <p className="text-white/50 text-sm uppercase tracking-[0.3em] font-semibold mb-4">/ Engineering POV</p>
            <p className="text-zinc-400 text-lg leading-relaxed font-large">
              Bridging the gap between raw code and commercial success. I architect digital assets that scale through strategic software engineering.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Architect Branding & Cards */}
          <div className="lg:col-span-7 space-y-20">
            
            {/* 1. Imported Resume-based Architect Section */}
            <ArchitectSection />

          </div>

          {/* Right Column: Floating Profile Widget */}
          <div className="lg:col-span-5 sticky top-32 flex justify-center lg:justify-end">
            <ProfileCard />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;