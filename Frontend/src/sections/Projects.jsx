import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Projects() {
  const { projects } = usePortfolioData();

  return (
    <div className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 pb-16">
      {projects.map((project, idx) => (
        <a 
          key={idx} 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-[var(--cream-dark)] border-[0.5px] border-[var(--line)] rounded-[4px] p-6 transition-colors duration-200 hover:border-[var(--gold-light)] flex flex-col h-full"
        >
          <div className="flex flex-col flex-1">
            <span className="text-[13px] text-[var(--gold)] font-medium uppercase tracking-[0.1em] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              {project.eyebrow}
            </span>
            <h3 className="text-[26px] text-[var(--ink)] font-normal mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {project.name}
            </h3>
            <p className="text-[16px] font-light text-[var(--ink-light)] line-clamp-2 mb-6 leading-[1.75]" style={{ fontFamily: 'var(--font-body)' }}>
              {project.desc}
            </p>
            
            <div className="mt-auto mb-6">
              <div className="text-[36px] text-[var(--gold)] font-normal leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                {project.stat}
              </div>
              <div className="text-[13px] text-[var(--ink-ghost)] font-normal mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                {project.statLabel}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, tIdx) => (
                <span 
                  key={tIdx} 
                  className="bg-[var(--cream-dark)] border-[0.5px] border-[var(--line)] rounded-[2px] px-2 py-[2px] text-[13px] text-[var(--ink)] tracking-[0.06em]" 
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}