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
    <ol className="animate-fade-up relative flex flex-col pt-6 pb-16">
      {/* Timeline vertical hairline rail */}
      <span aria-hidden="true" className="absolute left-[15px] top-6 bottom-12 w-px bg-[var(--hairline)]" />

      {experience.map((item) => {
        const Icon = companyIcons[item.company] || Briefcase;
        return (
          <li key={item.company + item.period} className="group relative pl-12 sm:pl-14 pb-10 last:pb-0">
            {/* Timeline node */}
            <span className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--surface-raised)] border border-[var(--hairline)] text-[var(--text-secondary)] transition-colors duration-150 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
              <Icon size={15} strokeWidth={1.5} aria-hidden="true" />
            </span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 mb-2">
              <span className="font-mono text-[13px] font-medium text-[var(--text-primary)]">
                {item.company}
              </span>
              <span aria-hidden="true" className="text-[var(--hairline-hover)]">/</span>
              <span className="font-mono text-[12px] text-[var(--text-muted)]">
                {item.period}
              </span>
            </div>

            <h3 className="text-[17px] leading-[1.3] text-[var(--text-primary)] font-medium mb-3">
              {item.role}
            </h3>

            <ul className="flex flex-col gap-2.5 max-w-[760px]">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-4 text-[14px] text-[var(--text-secondary)] leading-[1.65]">
                  <span className="absolute left-0 top-[10px] w-[5px] h-[1px] bg-[var(--accent)]" />
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
