import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Achievements() {
  const { achievements } = usePortfolioData();

  return (
    <section id="recognition" className="py-20 border-b border-[var(--line)]">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--line)] mb-12">
        <span className="font-mono-meta text-[var(--accent)]">
          [ 04 // RECOGNITION &amp; SCHOLARSHIPS ]
        </span>
        <span className="font-mono-meta">
          COMPETITIVE HONOURS &middot; MERIT GRANTS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)] rounded-xl overflow-hidden">
        {achievements.map((item, idx) => (
          <div
            key={item.title}
            className="p-8 sm:p-10 bg-[var(--bg)] flex flex-col justify-between gap-6 hover:bg-[var(--bg-subtle)] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-xs text-[var(--accent)]">
                  0{idx + 1}
                </span>
                <span className="font-mono-meta">
                  [{item.year}]
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[var(--fg)] tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-[14.5px] text-[var(--fg-muted)] font-light leading-[1.75]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
