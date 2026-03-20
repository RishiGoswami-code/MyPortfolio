import React from 'react';
import {
  SiReact, SiPython, SiFastapi, SiTailwindcss, SiGithub,
  SiFigma, SiNumpy, SiScikitlearn, SiExpress, SiPytorch, SiLangchain,
  SiNodedotjs, SiPostgresql, SiDocker, SiAmazonwebservices, SiTypescript,
  SiMongodb, SiRedis, SiNextdotjs, SiGraphql
} from 'react-icons/si';

const Hero = () => {
  const skills = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiLangchain />, name: "AI/ML" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiGithub />, name: "Deployment" }
  ];

  return (
    <div className="relative w-full">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Content */}
        <div className="lg:col-span-7 pb-8 lg:pb-0 lg:pr-8 md:border-r border-zinc-400">
          <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-300 mb-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-black" /> STATUS: NODE_ACTIVE_LINK
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase leading-[0.85] mb-6">
            CHANDAN<br />GIRI
          </h1>

          <p className="text-[13px] text-black max-w-md leading-relaxed uppercase font-mono mb-8">
            STATUS: Software Architect_0.1: Engineering high-performance digital ecosystems with React, FastAPI, and AI integration.
          </p>

          <div className="flex flex-wrap gap-2">
            <button className="px-8 py-3 bg-black text-white rounded-none font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-[-2px] translate-y-[-2px] hover:translate-x-0 hover:translate-y-0">
              Sync_Github
            </button>
            <a
              href="/Chandan Giri Resume.pdf"
              download
              className="px-8 py-3 bg-[#ff0000] text-white border-2 border-black rounded-none font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-[-2px] translate-y-[-2px] hover:translate-x-0 hover:translate-y-0 flex items-center justify-center"
            >
              DOWNLOAD_RESUME_v.02
            </a>
          </div>
        </div>

        {/* Right Column: Action Cards */}
        <div className="lg:col-span-5 w-full flex flex-col gap-4">
          {[
            { id: "01", title: "Scale_Layer", desc: "Performance Ecosystems" },
            { id: "02", title: "Data_Flow", desc: "Real-time Processing" },
            { id: "03", title: "Neural_Net", desc: "AI Orchestration" }
          ].map((card, idx) => (
            <div key={idx} className="relative p-6 border-2 border-black bg-zinc-50 hover:bg-white transition-all group">
              <span className="text-[8px] font-bold text-black uppercase block mb-2">TELEMETRY | {card.id}</span>
              <h3 className="text-base font-black tracking-tighter text-black uppercase mb-1">{card.title}</h3>
              <p className="text-[10px] text-black font-mono uppercase">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid: Technology Stack Marquee */}
      <div className="mt-12 border-2 border-black bg-white overflow-hidden py-4 group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              {[
                { name: "React", icon: <SiReact /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Python", icon: <SiPython /> },
                { name: "FastAPI", icon: <SiFastapi /> },
                { name: "Postgres", icon: <SiPostgresql /> },
                { name: "Docker", icon: <SiDocker /> },
                { name: "AWS", icon: <SiAmazonwebservices /> },
                { name: "Git", icon: <SiGithub /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "TS", icon: <SiTypescript /> },
                { name: "Figma", icon: <SiFigma /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Redis", icon: <SiRedis /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "GraphQL", icon: <SiGraphql /> }
              ].map(skill => (
                <div key={skill.name} className="flex items-center gap-3 text-[11px] md:text-[13px] font-black uppercase tracking-[0.3em] text-black">
                  <div className="text-xl md:text-2xl text-black">{skill.icon}</div>
                  <span className="opacity-40">{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;