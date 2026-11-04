import React from 'react';
import { Briefcase, ScanSearch, Bot, GraduationCap, Mail } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

const companyIcons = {
  'AMIPI INC.': ScanSearch,
  'MELBOURNE MAMA CREATIVE SPACE': Bot,
  OZYMORLAB: GraduationCap,
  SENDLUME: Mail,
};

export default function Experience() {
  const { experience } = usePortfolioData();

  return (
    <ol className="animate-fade-up relative flex flex-col pt-8 pb-16">
      {/* Timeline rail */}
      <span aria-hidden="true" className="absolute left-[19px] top-10 bottom-16 w-px bg-[var(--line)]" />

      {experience.map((item) => {
        const Icon = companyIcons[item.company] || Briefcase;
        return (
          <li key={item.company + item.period} className="group relative pl-14 sm:pl-16 pb-12 last:pb-0">
            <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--cream)] border border-[var(--gold-light)] text-[var(--gold)] transition-colors duration-200 group-hover:bg-[var(--gold)] group-hover:text-[var(--cream)]">
              <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
            </span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-[6px] mb-2">
              <span className="eyebrow">{item.company}</span>
              <span aria-hidden="true" className="w-1 h-1 rounded-full bg-[var(--ink-ghost)]" />
              <span className="text-[15px] text-[var(--ink-ghost)] italic leading-[1.6]" style={{ fontFamily: 'var(--font-display)' }}>
                {item.period}
              </span>
            </div>

            <h3 className="text-[26px] leading-[1.25] text-[var(--ink)] font-normal mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {item.role}
            </h3>

            <ul className="flex flex-col gap-3 max-w-[760px]">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-5 text-[16px] font-light text-[var(--ink-light)] leading-[1.75]">
                  <span className="absolute left-0 top-[12px] w-[6px] h-px bg-[var(--gold)]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ol>
  );
}
