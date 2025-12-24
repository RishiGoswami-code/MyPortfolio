import React from 'react';
import { FiCode, FiLayers, FiCpu, FiTrendingUp } from 'react-icons/fi';

const OpenToWork = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description: "Architecting end-to-end web applications with React, FastAPI, and Node.js. Focused on performance and modularity.",
      icon: <FiCode />,
      tags: ["React", "TypeScript", "Python"]
    },
    {
      title: "AI & ML Integration",
      description: "Building signal-driven systems and LLM-powered analyzers. Specializing in Gemini API and Scikit-learn.",
      icon: <FiCpu />,
      tags: ["NLP", "CNN", "Gemini API"]
    },
    {
      title: "UI/UX Architecture",
      description: "Translating brand identity into high-end digital experiences. Aesthetic meets functional software engineering.",
      icon: <FiLayers />,
      tags: ["Figma", "Tailwind v4", "3D Web"]
    },
    {
      title: "Software Consultation",
      description: "Helping startups move from MVP to scale. Auditing tech stacks for efficiency and fraud-resistance.",
      icon: <FiTrendingUp />,
      tags: ["Strategy", "Scaling", "Security"]
    }
  ];

  return (
    <section 
      id="services" 
      className="sticky top-0 min-h-screen bg-[#0a0a0a] text-white py-24 z-25 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#eb28b0] font-bold mb-4 block">
              / Collaborative Availability
            </span>
            <h2 className="font-pirata text-6xl md:text-8xl tracking-tighter uppercase leading-none">
              How I <span className="text-white/20">Help</span>
            </h2>
          </div>
          <div className="pb-4">
            <div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[9px] uppercase tracking-widest font-black text-white/60">Open for Q1 2026</span>
            </div>
          </div>
        </div>

        {/* Services List (Wider & Shorter Rows) */}
        <div className="flex flex-col gap-px bg-white/5 border border-white/5 rounded-[32px] overflow-hidden">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row md:items-center p-8 md:p-10 bg-[#0a0a0a] hover:bg-zinc-900/40 transition-all duration-500 relative gap-6 md:gap-12"
            >
              {/* Left Side: Icon & Title */}
              <div className="flex items-center gap-6 md:w-1/3">
                <div className="text-[#eb28b0] text-3xl group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tighter uppercase leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Middle: Description */}
              <div className="flex-1">
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* Right Side: Tags */}
              <div className="flex flex-wrap gap-2 md:w-1/4 md:justify-end">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-white/20 border border-white/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Background Index Number */}
              <span className="absolute right-6 top-1/2 -translate-y-1/2 font-pirata text-6xl text-white/[0.02] group-hover:text-[#eb28b0]/5 transition-colors pointer-events-none">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenToWork;