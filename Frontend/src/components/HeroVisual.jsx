import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import BrainCircuit from './BrainCircuit';

/* Stacked glass cards with the animated Mindfries brain, linking to the product. */
export default function HeroVisual({ name = 'Mindfries', url = 'https://mindfries.com' }) {
  return (
    <div className="hero-visual relative w-full max-w-[560px] mx-auto aspect-[16/11]">
      <div aria-hidden="true" className="hero-glow" />
      <div aria-hidden="true" className="glass-card glass-back-1" />
      <div aria-hidden="true" className="glass-card glass-back-2" />

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name}, opens in a new tab`}
        className="glass-card glass-front group"
      >
        <BrainCircuit className="w-[36%] shrink-0" title={`${name} logo`} />
        <span className="flex items-start gap-2 min-w-0">
          <span className="hero-brand-name">{name}</span>
          <ArrowUpRight
            className="mt-[0.15em] w-[clamp(18px,4vw,30px)] h-[clamp(18px,4vw,30px)] shrink-0 text-[var(--violet)] transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </span>
      </a>
    </div>
  );
}
