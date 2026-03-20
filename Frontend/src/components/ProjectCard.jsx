import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, description, tech, githubLink, liveLink, status }) => {
  return (
    <div className="relative group w-full bg-white border-b border-zinc-100 rounded-none overflow-hidden transition-all duration-300 hover:bg-zinc-50">
      {/* Technical Blueprint */}
      <div className="relative w-full aspect-[21/9] bg-zinc-50 border-b border-zinc-100 flex flex-col justify-center items-center p-6 overflow-hidden group/blueprint">
        <div className="absolute inset-0 bg-hatched opacity-20 pointer-events-none" />

        <div className="relative z-10 text-center">
          <div className="text-[7px] font-bold uppercase tracking-[0.4em] text-black mb-2 animate-pulse">
            STATUS: {status || 'DEPLOYED'}
          </div>
          <h4 className="text-xl font-black tracking-tighter text-black uppercase mb-1 leading-none">
            {title}
          </h4>
          <div className="flex gap-1 justify-center">
            {tech.slice(0, 3).map(tag => (
              <span key={tag} className="text-[7px] font-bold text-zinc-400 uppercase tracking-widest border border-zinc-200 px-1 py-0.25">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Binary Rain Decoration */}
        <div className="absolute bottom-2 right-2 text-[6px] font-mono text-zinc-200 leading-tight text-right pointer-events-none overflow-hidden h-10 w-24">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>0x{Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase()}</div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <p className="text-[11px] text-zinc-500 leading-relaxed mb-4 line-clamp-2 uppercase font-mono">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <a href={githubLink} target="_blank" rel="noreferrer" className="text-[8px] font-black uppercase tracking-widest text-black hover:underline underline-offset-4 decoration-2">Source</a>
            <a href={liveLink} target="_blank" rel="noreferrer" className="text-[8px] font-black uppercase tracking-widest text-black hover:underline underline-offset-4 decoration-2">Live</a>
          </div>
          <span className="text-[7px] font-mono text-black lowercase">id: {title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_01</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;