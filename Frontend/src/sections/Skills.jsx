import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Skills() {
  const { skills } = usePortfolioData();

  return (
    <div className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 pb-16">
      {skills.map((skillGroup, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <h3 className="text-[24px] text-[var(--ink)] italic" style={{ fontFamily: 'var(--font-display)' }}>
            {skillGroup.group}
          </h3>
          <div className="flex flex-wrap gap-[6px]">
            {skillGroup.items.map((item, iIdx) => (
              <span 
                key={iIdx} 
                className="bg-[var(--cream-dark)] border-[0.5px] border-[var(--line)] rounded-[2px] px-2 py-[2px] text-[14px] text-[var(--ink)] tracking-[0.06em]" 
                style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
