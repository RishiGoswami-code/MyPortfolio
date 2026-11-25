import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <div>
      {/* ═══════════════════════════════════════════════════════ */}
      {/* MINDFRIES — FLAGSHIP PRODUCT SECTION                   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        id="product"
        className="relative w-full min-h-[620px] sm:min-h-[720px] py-20 sm:py-28 border-b border-[var(--line)] overflow-hidden flex items-center"
      >
        {/* Mindfries laptop render as background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-right bg-cover lg:bg-contain opacity-85 lg:opacity-100 hidden sm:block"
          style={{
            backgroundImage: "url('/mindfries-laptop-bg.jpg')",
            backgroundPosition: 'right center',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050507] via-[#050507]/95 to-transparent sm:w-[65%] lg:w-[55%]"
        />

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 xl:px-24 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            Flagship Product
          </div>

          <h2 className="font-editorial text-5xl sm:text-6xl text-[var(--fg)] font-light leading-none mb-3">
            Mindfries
          </h2>

          <p className="font-editorial text-2xl sm:text-3xl text-[var(--accent)] italic font-light mb-6">
            Hire engineers for what they can do, not what they claim.
          </p>

          <p className="text-[15.5px] text-[var(--fg-muted)] leading-[1.75] font-light mb-8 max-w-md">
            Mindfries runs candidates through real coding tasks, system design problems,
            and AI-conducted technical interviews. Every evaluation produces structured,
            verifiable evidence. No gut feelings. No r&eacute;sum&eacute; bias.
          </p>

          {/* Three product pillars */}
          <div className="flex flex-col gap-4 pt-4 border-t border-[var(--line)] mb-8">
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-[var(--accent)] mt-0.5">01</span>
              <div>
                <div className="text-[14px] font-medium text-[var(--fg)]">
                  Live Coding Evaluation
                </div>
                <div className="text-[12.5px] text-[var(--fg-muted)]">
                  Candidates write code against automated test suites. No trivia questions.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-[var(--accent)] mt-0.5">02</span>
              <div>
                <div className="text-[14px] font-medium text-[var(--fg)]">
                  System Design Assessment
                </div>
                <div className="text-[12.5px] text-[var(--fg-muted)]">
                  Measures architectural thinking — scalability, fault tolerance, throughput.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-[var(--accent)] mt-0.5">03</span>
              <div>
                <div className="text-[14px] font-medium text-[var(--fg)]">
                  AI-Conducted Interviews
                </div>
                <div className="text-[12.5px] text-[var(--fg-muted)]">
                  Generates objective, auditable evidence. Every candidate scored on the same rubric.
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://mindfries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cream inline-flex items-center gap-1.5"
          >
            <span>Visit mindfries.com</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* OTHER PROJECTS — "What I've Built"                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section
        id="work"
        className="relative w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-24 sm:py-32 border-b border-[var(--line)] overflow-hidden"
      >
        {/* Terrain glow background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-no-repeat bg-left-bottom bg-cover sm:bg-contain opacity-50"
          style={{
            backgroundImage: "url('/terrain-glow-bg.jpg')",
            backgroundPosition: 'left bottom',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.85fr] gap-12 lg:gap-16 items-center">
          {/* Left side — headline */}
          <div className="flex flex-col">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--fg-muted)] mb-5">
              Portfolio
            </div>
            <h2 className="font-editorial text-5xl sm:text-7xl font-light leading-[1.02] tracking-tight text-[#f4f4f5] mb-4">
              What I've{' '}
              <br />
              <span className="italic font-normal text-[var(--accent)] font-editorial">
                built.
              </span>
            </h2>
            <p className="text-[16px] text-[var(--fg-muted)] leading-[1.7] font-light max-w-sm">
              Each project went from idea to deployed system. Autonomous robots, ML pipelines, open-source tools.
            </p>
          </div>

          {/* Right side — project rows */}
          <div className="flex flex-col border-t border-[var(--line)]">
            {/* DRISHTI-UGV */}
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
                <span className="font-mono text-xs text-[var(--accent)] mb-1">Robotics</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  DRISHTI-UGV
                </h3>
                <p className="text-xs sm:text-sm text-[var(--fg-muted)] font-light leading-relaxed">
                  ROS 2 navigation stack for GPS-denied outdoor vehicles. Stereo-vision SLAM, GPU terrain mapping, 5,000+ safety assertions.
                </p>
              </div>
              <div className="text-[var(--accent)] text-lg transition-transform duration-200 group-hover:translate-x-1 sm:text-right">
                &rarr;
              </div>
            </a>

            {/* OzymorLab */}
            <a
              href="https://ozymorlab.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-7 border-b border-[var(--line)] grid grid-cols-1 sm:grid-cols-[260px_1fr_30px] items-center gap-6 sm:gap-8 hover:bg-[rgba(255,255,255,0.015)] transition-colors"
            >
              <div className="h-[120px] rounded-lg overflow-hidden flex items-center justify-center bg-black">
                <img
                  src="/project-card-2.jpg"
                  alt="OzymorLab Evaluation"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-[var(--accent)] mb-1">EdTech · Open Source</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  OzymorLab
                </h3>
                <p className="text-xs sm:text-sm text-[var(--fg-muted)] font-light leading-relaxed">
                  Automates the entire exam lifecycle — scanning handwritten answer sheets into graded, auditable evaluations with OCR and LLMs.
                </p>
              </div>
              <div className="text-[var(--accent)] text-lg transition-transform duration-200 group-hover:translate-x-1 sm:text-right">
                &rarr;
              </div>
            </a>

            {/* Viking Validators */}
            <a
              href="https://github.com/RishiGoswami-code/VikingMachineLearningModel"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-7 border-b border-[var(--line)] grid grid-cols-1 sm:grid-cols-[260px_1fr_30px] items-center gap-6 sm:gap-8 hover:bg-[rgba(255,255,255,0.015)] transition-colors"
            >
              <div className="h-[120px] rounded-lg overflow-hidden flex items-center justify-center bg-black">
                <img
                  src="/project-card-3.jpg"
                  alt="Viking Validators"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-[var(--accent)] mb-1">ML · SIH 2025 Finalist</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  Viking Validators
                </h3>
                <p className="text-xs sm:text-sm text-[var(--fg-muted)] font-light leading-relaxed">
                  Detects forged academic documents using an ensemble ML pipeline. 94% accuracy. Built for Smart India Hackathon 2025.
                </p>
              </div>
              <div className="text-[var(--accent)] text-lg transition-transform duration-200 group-hover:translate-x-1 sm:text-right">
                &rarr;
              </div>
            </a>

            {/* Quantitative Finance */}
            <a
              href="https://github.com/RishiGoswami-code/QuantAnalysis"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-7 border-b border-[var(--line)] grid grid-cols-1 sm:grid-cols-[260px_1fr_30px] items-center gap-6 sm:gap-8 hover:bg-[rgba(255,255,255,0.015)] transition-colors"
            >
              <div className="flex flex-col h-[120px] rounded-lg bg-[var(--bg-subtle)] border border-[var(--line)] items-center justify-center">
                <span className="font-mono text-3xl text-[var(--accent)] font-light">~15%</span>
                <span className="font-mono text-[10px] text-[var(--fg-muted)] mt-1">Better Default Prediction</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-[var(--accent)] mb-1">Quant Research</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  Quantitative Finance Models
                </h3>
                <p className="text-xs sm:text-sm text-[var(--fg-muted)] font-light leading-relaxed">
                  JPMorgan Chase case study — gas price forecasting, commodity storage valuation, and a Probability of Default model with dynamic FICO bucketing.
                </p>
              </div>
              <div className="text-[var(--accent)] text-lg transition-transform duration-200 group-hover:translate-x-1 sm:text-right">
                &rarr;
              </div>
            </a>

            {/* CodeGraphContext */}
            <a
              href="https://github.com/CodeGraphContext/CodeGraphContext/pull/875"
              target="_blank"
              rel="noopener noreferrer"
              className="group py-7 border-b border-[var(--line)] grid grid-cols-1 sm:grid-cols-[260px_1fr_30px] items-center gap-6 sm:gap-8 hover:bg-[rgba(255,255,255,0.015)] transition-colors"
            >
              <div className="flex flex-col h-[120px] rounded-lg bg-[var(--bg-subtle)] border border-[var(--line)] items-center justify-center">
                <span className="font-mono text-3xl text-[var(--accent)] font-light">4k+</span>
                <span className="font-mono text-[10px] text-[var(--fg-muted)] mt-1">GitHub Stars</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-[var(--accent)] mb-1">Open Source · Merged</span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight mb-1">
                  CodeGraphContext Docs
                </h3>
                <p className="text-xs sm:text-sm text-[var(--fg-muted)] font-light leading-relaxed">
                  Wrote the docs for an MCP server + CLI that indexes codebases into graph databases for AI assistants. PR merged upstream.
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
