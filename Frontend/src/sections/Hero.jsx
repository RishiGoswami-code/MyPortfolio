import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Hero() {
  const { meta } = usePortfolioData();

  return (
    <div className="relative w-full pt-16 pb-12">
      {/* Badge positioned top-right relative to Hero */}
      <div className="absolute top-16 right-0 text-right">
        <div className="text-[12px] text-[var(--ink-ghost)] uppercase tracking-[0.18em] font-medium" style={{ fontFamily: 'var(--font-body)' }}>
          {meta.badge.label}
        </div>
        <div className="text-[15px] text-[var(--gold)] italic" style={{ fontFamily: 'var(--font-display)' }}>
          {meta.badge.value}
        </div>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl">
        <div className="flex flex-col gap-2">
          <span className="text-[13px] sm:text-[15px] text-[var(--gold)] uppercase tracking-[0.18em] font-medium" style={{ fontFamily: 'var(--font-body)' }}>
            {meta.eyebrow}
          </span>
          <h1 className="text-[72px] sm:text-[96px] leading-[1.1] font-light" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-[var(--ink)]">{meta.name[0]}</span>{' '}
            <em className="text-[var(--gold)] italic">{meta.name[1]}</em>
          </h1>
          <h2 className="text-[28px] text-[var(--ink-light)] italic" style={{ fontFamily: 'var(--font-display)' }}>
            {meta.title}
          </h2>
        </div>

        <p className="text-[18px] font-light text-[var(--ink)] max-w-[520px] leading-[1.85]" style={{ fontFamily: 'var(--font-body)' }}>
          {meta.summary}
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-2">
          {meta.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="text-[16px] text-[var(--ink-ghost)] border-b-[0.5px] border-[var(--line)] transition-colors duration-200 hover:text-[var(--gold)] hover:border-[var(--gold-light)]"
              style={{ fontFamily: 'var(--font-body)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}