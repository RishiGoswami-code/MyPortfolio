import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Projects() {
  const { featured } = usePortfolioData();

  return (
    <div>
      {/* ======================================================== */}
      {/* 01 // MINDFRIES FLAGSHIP SECTION (USING BGI ON RIGHT)     */}
      {/* ======================================================== */}
      <section id="mindfries" className="relative w-full min-h-[580px] sm:min-h-[640px] py-20 sm:py-24 border-b border-[var(--line)] overflow-hidden flex items-center">
        {/* Mindfries Laptop 3D Render as Background Image (BGI) on the right */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-right bg-cover lg:bg-contain opacity-85 lg:opacity-100 hidden sm:block"
          style={{
            backgroundImage: "url('/mindfries-laptop-bg.jpg')",
            backgroundPosition: 'right center',
          }}
        />

        {/* Left-edge gradient mask so text is crisp and clean */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050507] via-[#050507]/95 to-transparent sm:w-[65%] lg:w-[55%]"
        />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-lg">
          <div className="flex flex-wrap items-center gap-3 font-mono-meta text-[var(--accent)] mb-6">
            <span>[ 01 // FLAGSHIP PLATFORM ]</span>
            <span className="text-[var(--fg-muted)]">&middot;</span>
            <span className="text-[var(--fg-muted)]">AI HIRING</span>
          </div>

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
      {/* 02 // SELECTED PROJECTS (MATCHING IMAGE 3 EXACTLY)        */}
      {/* ======================================================== */}
      <section id="systems" className="py-20 sm:py-24 border-b border-[var(--line)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-14 items-start">
          {/* Left Side: Headline & Subhead matching Image 3 */}
          <div className="flex flex-col">
            <span className="font-mono-meta text-[var(--accent)] mb-4">
              SELECTED PROJECTS
            </span>

            <h2 className="font-editorial text-5xl sm:text-7xl font-light leading-[1.02] tracking-tight text-[#f4f4f5] mb-4">
              Systems <br />
              I've <span className="italic font-normal text-[var(--accent)] font-editorial">built.</span>
            </h2>

            <p className="text-[16px] text-[var(--fg-muted)] leading-[1.7] font-light max-w-sm">
              From autonomous robotics to AI products used in real workflows.
            </p>
          </div>

          {/* Right Side: 3 Stacked Horizontal Project Cards with Diagonal Image Cuts */}
          <div className="flex flex-col gap-4">
            {/* Card 01: DRISHTI-UGV */}
            <a
              href="https://github.com/RishiGoswami-code/drishti-ugv"
              target="_blank"
              rel="noopener noreferrer"
              className="project-row-card group"
            >
              <div className="w-[180px] sm:w-[220px] h-[100px] shrink-0 rounded-lg overflow-hidden bg-black/60 relative">
                <img
                  src="/project-drishti.jpg"
                  alt="DRISHTI-UGV Rover"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow min-w-0">
                <span className="font-mono text-[11px] text-[var(--accent)] mb-1">01</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  DRISHTI-UGV
                </h3>
                <p className="text-[13.5px] text-[var(--fg-muted)] font-light leading-snug line-clamp-2">
                  ROS 2 autonomous navigation for outdoor ground vehicles.
                </p>
              </div>

              <ArrowRight size={18} className="project-arrow text-[var(--fg-muted)] shrink-0 transition-transform duration-200" />
            </a>

            {/* Card 02: OzymorLab */}
            <a
              href="https://ozymorlab.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-row-card group"
            >
              <div className="w-[180px] sm:w-[220px] h-[100px] shrink-0 rounded-lg overflow-hidden bg-black/60 relative">
                <img
                  src="/project-ozymor.jpg"
                  alt="OzymorLab Evaluation Sheet"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow min-w-0">
                <span className="font-mono text-[11px] text-[var(--accent)] mb-1">02</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  OzymorLab
                </h3>
                <p className="text-[13.5px] text-[var(--fg-muted)] font-light leading-snug line-clamp-2">
                  AI-powered grading and evaluation of handwritten exam answer sheets.
                </p>
              </div>

              <ArrowRight size={18} className="project-arrow text-[var(--fg-muted)] shrink-0 transition-transform duration-200" />
            </a>

            {/* Card 03: Viking Validators */}
            <a
              href="https://github.com/RishiGoswami-code/VikingMachineLearningModel"
              target="_blank"
              rel="noopener noreferrer"
              className="project-row-card group"
            >
              <div className="w-[180px] sm:w-[220px] h-[100px] shrink-0 rounded-lg overflow-hidden bg-black/60 relative">
                <img
                  src="/project-viking.jpg"
                  alt="Viking Validators Fraud Detection"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow min-w-0">
                <span className="font-mono text-[11px] text-[var(--accent)] mb-1">03</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  Viking Validators
                </h3>
                <p className="text-[13.5px] text-[var(--fg-muted)] font-light leading-snug line-clamp-2">
                  Academic document fraud detection using an ensemble ML pipeline.
                </p>
              </div>

              <ArrowRight size={18} className="project-arrow text-[var(--fg-muted)] shrink-0 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
