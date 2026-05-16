import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Experience() {
  const { experience } = usePortfolioData();

  return (
    <div className="animate-fade-up flex flex-col pt-8 pb-16">
      {experience.map((item, idx) => (
        <div 
          key={idx} 
          className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 sm:gap-6 py-8 border-b-[0.5px] border-[var(--line)] first:pt-0 last:border-b-0"
        >
          {/* Left Meta */}
          <div className="sm:text-right flex flex-col pt-1">
            <span className="text-[15px] text-[var(--ink-ghost)] italic" style={{ fontFamily: 'var(--font-display)' }}>
              {item.period}
            </span>
            <span className="text-[13px] text-[var(--gold)] uppercase font-medium mt-1 tracking-[0.1em]" style={{ fontFamily: 'var(--font-body)' }}>
              {item.company}
            </span>
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            <h3 className="text-[24px] text-[var(--ink)] font-normal mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {item.role}
            </h3>
            
            <ul className="flex flex-col gap-3 mb-6">
              {item.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="relative pl-5 text-[16px] font-light text-[var(--ink-light)] leading-[1.75]" style={{ fontFamily: 'var(--font-body)' }}>
                  <span className="absolute left-0 top-[2px] text-[var(--gold)]">—</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="bg-[var(--cream-dark)] border-[0.5px] border-[var(--line)] rounded-[2px] px-2 py-[2px] text-[13px] text-[var(--ink)] tracking-[0.06em]" 
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
