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
    <ol className="relative flex flex-col pt-2 pb-16">
      <span aria-hidden="true" className="absolute left-[19px] top-6 bottom-12 w-px bg-white/10" />

      {experience.map((item) => {
        const Icon = companyIcons[item.company] || Briefcase;
        return (
          <li key={item.company + item.period} className="group relative pl-14 sm:pl-16 pb-10 last:pb-0">
            <span className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 transition-colors duration-200 group-hover:border-indigo-400/50 group-hover:text-indigo-400 shadow-md">
              <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
            </span>

            <div className="bento-card p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[13px] font-semibold text-white">
                  {item.company}
                </span>
                <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400">
                  {item.period}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-indigo-300 mb-3">
                {item.role}
              </h3>

              <ul className="flex flex-col gap-2.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4 text-[14px] text-zinc-300 leading-relaxed">
                    <span className="absolute left-0 top-[9px] w-[5px] h-[5px] rounded-full bg-indigo-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
