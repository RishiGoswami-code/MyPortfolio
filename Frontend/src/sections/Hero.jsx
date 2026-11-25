import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Hero() {
  const { featured } = usePortfolioData();

  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-center border-b border-[var(--line)] overflow-hidden">
      {/* DRISHTI-UGV Rover as Background Image (BGI) on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-no-repeat bg-right bg-cover lg:bg-contain opacity-85 lg:opacity-100"
        style={{
          backgroundImage: "url('/hero-rover-bg.jpg')",
          backgroundPosition: 'right center',
        }}
      />

      {/* Left-edge gradient mask so text is 100% readable even on smaller screens */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050507] via-[#050507]/95 to-transparent md:w-[65%] lg:w-[55%]"
      />

      {/* Foreground Content matching Image 1 */}
      <div className="relative z-10 max-w-xl py-20 sm:py-28">
        <h1 className="font-editorial text-[50px] sm:text-[76px] xl:text-[88px] font-light leading-[1.03] tracking-tight text-[#f4f4f5] mb-6">
          Building <br />
          <span className="italic font-normal text-[var(--accent)] font-editorial">
            intelligent systems
          </span>{' '}
          <br />
          for the real world.
        </h1>

        <p className="text-[16px] sm:text-[18px] text-[var(--fg-muted)] leading-[1.7] mb-8 font-light max-w-md">
          Founder of Mindfries. Designing AI systems and autonomous robotics, from research to deployment.
        </p>

        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href={featured?.url || 'https://mindfries.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cream"
          >
            <span>Explore Mindfries</span>
            <ArrowUpRight size={14} />
          </a>

          <a href="#systems" className="btn-outline">
            <span>View Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}
