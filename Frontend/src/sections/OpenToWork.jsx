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
    <div id="services" className="bg-white py-12">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 text-black">
          <div>
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-black mb-2 block">
              COLLAB_AVAIL_0.1
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black uppercase leading-none">
              SERVICE <span className="text-zinc-200">MATRIX</span>
            </h2>
          </div>
          <div className="pb-2">
            <div className="flex items-center gap-2 px-3 py-1 border border-zinc-100 bg-zinc-50">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[8px] uppercase tracking-widest font-black text-zinc-500">Node_Active</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-2 border-black">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 hover:bg-zinc-50 transition-all relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-zinc-200 group-hover:text-black transition-colors text-sm transform scale-75 origin-top-left">
                  {service.icon}
                </div>
                <span className="text-[8px] font-black text-black group-hover:text-zinc-200 transition-colors uppercase font-mono">
                  [ 0{index + 1} ]
                </span>
              </div>

              <h3 className="text-sm font-black tracking-tighter uppercase text-black mb-2">
                {service.title}
              </h3>

              <p className="text-zinc-500 text-[10px] leading-relaxed mb-6 uppercase font-mono">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[7px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-50 px-2 py-0.5 bg-zinc-50/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenToWork;