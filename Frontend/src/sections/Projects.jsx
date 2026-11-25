import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Projects() {
  const { featured } = usePortfolioData();

  return (
    <div>
      {/* ======================================================== */}
      {/* 01 // MINDFRIES SECTION (FULL-WIDTH BGI)                 */}
      {/* ======================================================== */}
      <section id="mindfries" className="relative w-full min-h-[620px] sm:min-h-[720px] py-20 sm:py-28 border-b border-[var(--line)] overflow-hidden flex items-center">
        {/* Mindfries Laptop 3D Render as BGI flush to the right edge */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-right bg-cover lg:bg-contain opacity-85 lg:opacity-100 hidden sm:block"
          style={{
            backgroundImage: "url('/mindfries-laptop-bg.jpg')",
            backgroundPosition: 'right center',
          }}
        />

        {/* Left-edge gradient mask */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050507] via-[#050507]/95 to-transparent sm:w-[65%] lg:w-[55%]"
        />

        {/* Foreground Content */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 xl:px-24 max-w-2xl">
          <h2 className="font-editorial text-5xl sm:text-6xl text-[var(--fg)] font-light leading-none mb-3">
            Mindfries
          </h2>

          <p className="font-editorial text-2xl sm:text-3xl text-[var(--accent)] italic font-light mb-6">
            &ldquo;Real skills. Real evidence. Better hiring.&rdquo;
          </p>

          <p className="text-[15.5px] text-[var(--fg-muted)] leading-[1.75] font-light mb-8 max-w-md">
            An AI hiring platform that evaluates engineering ability through real coding tasks, system design and AI-led interviews, so teams hire on evidence instead of r&eacute;sum&eacute;s.
          </p>

          {/* 3 Core Pillars */}
          <div className="flex flex-col gap-4 pt-4 border-t border-[var(--line)] mb-8">
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-[var(--accent)] mt-0.5">01</span>
              <div>
                <div className="text-[14px] font-medium text-[var(--fg)]">Real Coding Tasks</div>
                <div className="text-[12.5px] text-[var(--fg-muted)]">Evaluated against automated production test suites, not trivia.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-[var(--accent)] mt-0.5">02</span>
              <div>
                <div className="text-[14px] font-medium text-[var(--fg)]">System Design Rounds</div>
                <div className="text-[12.5px] text-[var(--fg-muted)]">Testing architectural scalability, throughput, and fault tolerance.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-[var(--accent)] mt-0.5">03</span>
              <div>
                <div className="text-[14px] font-medium text-[var(--fg)]">AI-Led Technical Interviews</div>
                <div className="text-[12.5px] text-[var(--fg-muted)]">Objective evidence generated to hire on merit instead of pedigree.</div>
              </div>
            </div>
          </div>

          <a
            href={featured?.url || 'https://mindfries.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cream inline-flex items-center gap-1.5"
          >
            <span>Launch Mindfries.com</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 02 // SYSTEMS I'VE BUILT (WITH TERRAIN GLOW BGI)         */}
      {/* ======================================================== */}
      <section id="systems" className="relative w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-24 sm:py-32 border-b border-[var(--line)] overflow-hidden">
        {/* Golden Rim Mountain Terrain as BGI at bottom-left */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-left-bottom bg-cover sm:bg-contain opacity-50"
          style={{
            backgroundImage: "url('/terrain-glow-bg.jpg')",
            backgroundPosition: 'left bottom',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.85fr] gap-12 lg:gap-16 items-center">
          {/* Left Side: Headline & Subhead */}
          <div className="flex flex-col">
            <h2 className="font-editorial text-5xl sm:text-7xl font-light leading-[1.02] tracking-tight text-[#f4f4f5] mb-4">
              Systems <br />
              I've <span className="italic font-normal text-[var(--accent)] font-editorial">built.</span>
            </h2>

            <p className="text-[16px] text-[var(--fg-muted)] leading-[1.7] font-light max-w-sm">
              From autonomous robotics to <br className="hidden sm:inline" />
              AI products used in real workflows.
            </p>
          </div>

          {/* Right Side: 3 Stacked Horizontal Rows with Middle Slanted Image */}
          <div className="flex flex-col border-t border-[var(--line)]">
            {/* Row 1: DRISHTI-UGV */}
            <a
              href="https://github.com/RishiGoswami-code/drishti-ugv"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-7 border-b border-[var(--line)] grid grid-cols-1 sm:grid-cols-[260px_1fr_30px] items-center gap-6 sm:gap-8 hover:bg-[rgba(255,255,255,0.015)] transition-colors"
            >
              <div className="h-[120px] rounded-lg overflow-hidden flex items-center justify-center bg-black">
                <img
                  src="/project-card-1.jpg"
                  alt="DRISHTI-UGV Rover"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs text-[var(--accent)] mb-1">01</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  DRISHTI-UGV
                </h3>
                <p className="text-xs sm:text-sm text-[var(--fg-muted)] font-light leading-relaxed">
                  ROS 2 autonomous navigation for outdoor ground vehicles.
                </p>
              </div>

              <div className="text-[var(--accent)] text-lg transition-transform duration-200 group-hover:translate-x-1 sm:text-right">
                &rarr;
              </div>
            </a>

            {/* Row 2: OzymorLab */}
            <a
              href="https://ozymorlab.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-7 border-b border-[var(--line)] grid grid-cols-1 sm:grid-cols-[260px_1fr_30px] items-center gap-6 sm:gap-8 hover:bg-[rgba(255,255,255,0.015)] transition-colors"
            >
              <div className="h-[120px] rounded-lg overflow-hidden flex items-center justify-center bg-black">
                <img
                  src="/project-card-2.jpg"
                  alt="OzymorLab Evaluation Sheet"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs text-[var(--accent)] mb-1">02</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  OzymorLab
                </h3>
                <p className="text-xs sm:text-sm text-[var(--fg-muted)] font-light leading-relaxed">
                  AI-powered grading and evaluation of handwritten exam answer sheets.
                </p>
              </div>

              <div className="text-[var(--accent)] text-lg transition-transform duration-200 group-hover:translate-x-1 sm:text-right">
                &rarr;
              </div>
            </a>

            {/* Row 3: Viking Validators */}
            <a
              href="https://github.com/RishiGoswami-code/VikingMachineLearningModel"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-7 border-b border-[var(--line)] grid grid-cols-1 sm:grid-cols-[260px_1fr_30px] items-center gap-6 sm:gap-8 hover:bg-[rgba(255,255,255,0.015)] transition-colors"
            >
              <div className="h-[120px] rounded-lg overflow-hidden flex items-center justify-center bg-black">
                <img
                  src="/project-card-3.jpg"
                  alt="Viking Validators Fraud Detection"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-xs text-[var(--accent)] mb-1">03</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  Viking Validators
                </h3>
                <p className="text-xs sm:text-sm text-[var(--fg-muted)] font-light leading-relaxed">
                  Academic document fraud detection using an ensemble ML pipeline.
                </p>
              </div>

              <div className="text-[var(--accent)] text-lg transition-transform duration-200 group-hover:translate-x-1 sm:text-right">
                &rarr;
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
