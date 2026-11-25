import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[620px] sm:min-h-[720px] flex items-center border-b border-[var(--line)] overflow-hidden">
      {/* DRISHTI-UGV rover as background — keeps the visual identity */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-no-repeat bg-right bg-cover lg:bg-contain opacity-85 lg:opacity-100"
        style={{
          backgroundImage: "url('/hero-rover-bg.jpg')",
          backgroundPosition: 'right center',
        }}
      />

      {/* Left-edge gradient mask */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050507] via-[#050507]/95 to-transparent md:w-[65%] lg:w-[55%]"
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-20 sm:py-28 max-w-3xl">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Founder · AI Engineer · Builder
        </div>

        <h1 className="font-editorial text-[48px] sm:text-[72px] xl:text-[88px] font-light leading-[1.02] tracking-tight text-[#f4f4f5] mb-6">
          I build products{' '}
          <br />
          <span className="italic font-normal text-[var(--accent)] font-editorial">
            that ship.
          </span>
        </h1>

        <p className="text-[16px] sm:text-[18px] text-[var(--fg-muted)] leading-[1.7] mb-8 font-light max-w-lg">
          AI hiring platforms. Autonomous robots. Grading engines.
          Four products from zero to production in two years. Currently founding Mindfries.
        </p>

        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href="#product"
            className="btn-cream"
          >
            <span>See Mindfries</span>
            <ArrowUpRight size={14} />
          </a>

          <a href="#work" className="btn-outline">
            <span>All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}
