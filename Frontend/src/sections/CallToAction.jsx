import React from 'react';

import { 
  SiPython, SiOpenjdk, SiJavascript, SiTypescript, SiCplusplus,
  SiHtml5, SiCss3, SiReact, SiFlask, SiDjango, SiFastapi, SiExpress, SiTailwindcss,
  SiMongodb, SiMysql, SiLinux, SiNumpy, SiPandas, SiScikitlearn, SiGit, SiGithub, SiCanva
} from 'react-icons/si';

const CallToAction = () => {
  const allSkills = [
    { Icon: SiPython, name: "Python" }, 
    { Icon: SiOpenjdk, name: "Java" }, 
    { Icon: SiJavascript, name: "JavaScript" }, 
    { Icon: SiTypescript, name: "TypeScript" }, 
    { Icon: SiCplusplus, name: "C++" },
    { Icon: SiHtml5, name: "HTML5" }, 
    { Icon: SiCss3, name: "CSS3" }, 
    { Icon: SiReact, name: "React" }, 
    { Icon: SiFlask, name: "Flask" }, 
    { Icon: SiDjango, name: "Django" },
    { Icon: SiFastapi, name: "FastAPI" }, 
    { Icon: SiExpress, name: "ExpressJS" }, 
    { Icon: SiTailwindcss, name: "Tailwind" }, 
    { Icon: SiMongodb, name: "MongoDB" }, 
    { Icon: SiMysql, name: "MySQL" },
    { Icon: SiLinux, name: "Linux" }, 
    { Icon: SiNumpy, name: "NumPy" }, 
    { Icon: SiPandas, name: "Pandas" }, 
    { Icon: SiScikitlearn, name: "Scikit-Learn" }, 
    { Icon: SiGit, name: "Git" }, 
    { Icon: SiGithub, name: "GitHub" }, 
    { Icon: SiCanva, name: "Canva" }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-12 bg-[#0a0a0a] overflow-hidden">
      {/* CTA Card remains the same */}
      <div className="max-w-[1200px] mx-auto mb-24">
        <div className="relative p-10 md:p-20 border border-white/5 rounded-[40px] bg-zinc-950 text-center group overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/10 rounded-tl-[40px]" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/10 rounded-br-[40px]" />
          
          <div className="relative z-10">
            <h2 className="font-pirata text-5xl md:text-8xl mb-6 tracking-tighter uppercase leading-none text-white">
              Let's Build <span className="text-white/20 group-hover:text-white transition-colors duration-1000">Something</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto mb-10 text-sm md:text-base font-medium leading-relaxed tracking-wide">
              I architect high-performance software and digital experiences. Currently open for select freelance partnerships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer">
                Get in touch
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/10 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all cursor-pointer">
                View Work
              </button>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">Booking for Q1 2026</span>
          </div>
        </div>
      </div>

      {/* --- Infinite Marquee with Names --- */}
      <div className="relative flex flex-col gap-6 overflow-hidden border-y border-white/5 py-12 bg-black/20">
        <div className="text-center">
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-black">Technical Ecosystem</span>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

          {/* Slower duration (50s) to allow reading names */}
          <div className="flex whitespace-nowrap animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused]">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center mx-10 md:mx-16 group/item transition-all duration-500"
              >
                <div className="grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-500">
                  <skill.Icon size={32} className="text-white" />
                </div>
                <span className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/10 group-hover/item:text-white/60 transition-colors duration-500 font-bold">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;