import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Experience() {
  const { experience } = usePortfolioData();

  return (
    <section id="trajectory" className="py-20 border-b border-[var(--line)]">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--line)] mb-12">
        <span className="font-mono-meta text-[var(--accent)]">
          [ 03 // TRAJECTORY &amp; INDUSTRY WORK ]
        </span>
        <span className="font-mono-meta">
          ENGINEERING LEADERSHIP &middot; PRODUCTION IMPACT
        </span>
      </div>

      <div className="flex flex-col">
        {experience.map((item, idx) => (
          <div
            key={item.company + item.period}
            className="py-10 border-b border-[var(--line)] grid grid-cols-1 lg:grid-cols-[220px_1.5fr] gap-8 items-start hover:bg-[rgba(255,255,255,0.01)] transition-colors"
          >
            <div>
              <div className="font-mono text-xs text-[var(--accent)] mb-1">
                0{idx + 1} // {item.period}
              </div>
              <h3 className="font-semibold text-lg text-[var(--fg)] tracking-tight">
                {item.company}
              </h3>
              <div className="font-editorial text-lg text-[var(--fg-muted)] italic font-light">
                {item.role}
              </div>
            </div>

            <div>
              <ul className="flex flex-col gap-3 max-w-3xl">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="text-[14.5px] text-[var(--fg-muted)] font-light leading-[1.75] relative pl-5">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-[var(--line-strong)]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
