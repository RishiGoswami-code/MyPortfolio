import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Achievements() {
  const { achievements } = usePortfolioData();

  return (
    <div className="animate-fade-up flex flex-col pt-8 pb-16">
      {achievements.map((item, idx) => {
        const indexNumber = String(idx + 1).padStart(2, '0');
        return (
          <div 
            key={idx} 
            className="flex flex-row gap-5 py-6 border-b-[0.5px] border-[var(--line)] first:pt-0 last:border-b-0 items-start"
          >
            {/* Left Index */}
            <div 
              className="text-[56px] font-light leading-[1] text-[var(--cream)] select-none shrink-0" 
              style={{ 
                fontFamily: 'var(--font-display)',
                WebkitTextStroke: '1px var(--gold-light)'
              }}
            >
              {indexNumber}
            </div>

            {/* Right Content */}
            <div className="flex flex-col flex-1 pt-1">
              <h3 className="text-[24px] text-[var(--ink)] font-normal mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {item.title}
              </h3>
              <p className="text-[16px] font-light text-[var(--ink-light)] leading-[1.75]" style={{ fontFamily: 'var(--font-body)' }}>
                {item.desc}
              </p>
              <div className="text-[13px] text-[var(--gold)] uppercase font-medium mt-2 tracking-[0.1em]" style={{ fontFamily: 'var(--font-body)' }}>
                {item.year}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
