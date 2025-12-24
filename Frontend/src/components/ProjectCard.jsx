import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, tech, githubLink, liveLink, image }) => {
  return (
    <div className="w-[300px] md:w-[380px] group relative bg-zinc-900/60 backdrop-blur-sm border border-white/5 rounded-[24px] overflow-hidden transition-all duration-500 hover:border-white/20 flex flex-col shadow-xl">
      
      {/* 1. Shorter Image Area */}
      <div className="h-32 md:h-40 bg-zinc-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 z-20">
          <div className="px-2 py-0.5 bg-black/60 border border-white/10 rounded-full text-[8px] uppercase tracking-widest font-bold text-white/50">
            v.1.0
          </div>
        </div>
      </div>

      {/* 2. Tightened Content Area */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="font-pirata text-2xl tracking-tighter text-white uppercase group-hover:text-[#eb28b0] transition-colors leading-none mb-2">
            {title}
          </h3>
          <p className="text-zinc-500 text-[11px] leading-snug line-clamp-2">
            {description}
          </p>
        </div>

        {/* 3. Single Row Tech Tags */}
        <div className="flex gap-2 overflow-hidden mb-5">
          {tech.slice(0, 3).map((item, idx) => (
            <span key={idx} className="text-[8px] font-bold text-white/20 uppercase tracking-tighter bg-white/5 px-2 py-0.5 rounded">
              {item}
            </span>
          ))}
          {tech.length > 3 && <span className="text-[8px] text-white/10">+{tech.length - 3}</span>}
        </div>

        {/* 4. Compact Buttons */}
        <div className="mt-auto flex items-center gap-2">
          <a 
            href={githubLink} 
            target="_blank" 
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all"
          >
            <SiGithub size={12} />
            Code
          </a>

          <a 
            href={liveLink} 
            target="_blank" 
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-white text-black rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#eb28b0] hover:text-white transition-all shadow-md"
          >
            <FiExternalLink size={12} />
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;