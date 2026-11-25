import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Brain, Code2, Layers, Cpu } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Projects() {
  const { featured } = usePortfolioData();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Real Coding Tasks',
      desc: 'Evaluated against automated production test suites, not trivia.',
      metricKey: 'coding',
    },
    {
      num: '02',
      title: 'System Design Rounds',
      desc: 'Testing architectural scalability, throughput, and fault tolerance.',
      metricKey: 'systems',
    },
    {
      num: '03',
      title: 'AI-Led Technical Interviews',
      desc: 'Objective evidence generated to hire on merit instead of pedigree.',
      metricKey: 'interview',
    },
  ];

  return (
    <div>
      {/* ======================================================== */}
      {/* 01 // MINDFRIES FLAGSHIP SECTION (STICKY SPLIT SECTION)   */}
      {/* ======================================================== */}
      <section id="mindfries" className="py-20 sm:py-24 border-b border-[var(--line)]">
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--line)] mb-12">
          <span className="font-mono-meta text-[var(--accent)]">
            [ 01 // FLAGSHIP PLATFORM ]
          </span>
          <span className="font-mono-meta hidden sm:inline">
            AI HIRING &middot; EVIDENCE OVER R&Eacute;SUM&Eacute;S
          </span>
          <a
            href={featured?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link font-mono-meta text-[var(--fg)] hover:text-[var(--accent)]"
          >
            MINDFRIES.COM <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Sticky Split Grid: Left scrolls, Right stays pinned! */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-14 items-start">
          {/* Left Column: Thesis & Interactive Scrubbed Steps */}
          <div className="flex flex-col">
            <h2 className="font-editorial text-5xl sm:text-6xl text-[var(--fg)] font-light leading-none mb-3">
              Mindfries
            </h2>

            <p className="font-editorial text-2xl sm:text-3xl text-[var(--accent)] italic font-light mb-6">
              &ldquo;Real skills. Real evidence. Better hiring.&rdquo;
            </p>

            <p className="text-[15.5px] text-[var(--fg-muted)] leading-[1.75] font-light mb-10 max-w-md">
              An AI hiring platform that evaluates engineering ability through real coding tasks, system design and AI-led interviews, so teams hire on evidence instead of r&eacute;sum&eacute;s.
            </p>

            {/* Scroll-Scrubbed Steps List */}
            <div className="flex flex-col gap-6 pt-4 border-t border-[var(--line)]">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.num}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border ${
                      isActive
                        ? 'bg-[rgba(255,255,255,0.04)] border-[var(--line-strong)] translate-x-1'
                        : 'border-transparent hover:border-[var(--line)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`font-mono text-xs ${isActive ? 'text-[var(--accent)]' : 'text-[var(--fg-faint)]'}`}>
                        {step.num}
                      </span>
                      <h4 className={`text-[15px] font-medium ${isActive ? 'text-[var(--fg)]' : 'text-[var(--fg-muted)]'}`}>
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-[13.5px] text-[var(--fg-muted)] pl-7 font-light">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Product Mockup (Matching Image 2) */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="w-full bg-[var(--bg-subtle)] border border-[var(--line)] rounded-xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--line)] bg-[#0c0c0f]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-[var(--fg-muted)]">
                    MINDFRIES.COM/EVALUATIONS/CANDIDATE-8821
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#10b981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                    Live Assessment
                  </span>
                  <a
                    href={featured?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[var(--accent)] hover:underline inline-flex items-center"
                  >
                    Mindfries.com <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-6 flex flex-col gap-5">
                <div>
                  <div className="font-mono-meta text-[10.5px] flex items-center gap-1.5 mb-1 text-[var(--fg-muted)]">
                    <Brain size={12} className="text-[var(--accent)]" />
                    <span>MINDFRIES TECHNICAL HIRING ENGINE</span>
                  </div>
                  <h3 className="text-[17px] font-medium text-[var(--fg)]">
                    Candidate Evaluation: Senior AI Systems &amp; Distributed Architect
                  </h3>
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-0.5 rounded bg-[rgba(16,185,129,0.1)] text-[#10b981] border border-[rgba(16,185,129,0.2)]">
                      <CheckCircle2 size={11} />
                      Evidence Certified
                    </span>
                  </div>
                </div>

                {/* Rubric Quote */}
                <div className="p-4 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[var(--line)] flex flex-col gap-2">
                  <div className="flex items-center justify-between font-mono-meta text-[10px]">
                    <span className="text-[var(--accent)] flex items-center gap-1">
                      <Sparkles size={11} /> AI INTERVIEWER SYNTHESIS
                    </span>
                    <span>RUBRIC: PRODUCTION SCALE</span>
                  </div>
                  <p className="text-[13px] text-[var(--fg-muted)] font-light leading-relaxed">
                    &ldquo;Candidate demonstrated exceptional architectural clarity on distributed event streaming, idempotency guarantees, and sub-10ms cache invalidation. Evaluated against real production engineering standards instead of trivial syntax tests.&rdquo;
                  </p>
                </div>

                {/* Interactive Dynamic Scorecards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      activeStep === 0
                        ? 'bg-[rgba(212,163,89,0.1)] border-[var(--accent)] scale-[1.02]'
                        : 'bg-[rgba(255,255,255,0.02)] border-[var(--line)]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-medium text-[var(--fg)] mb-0.5">
                      <span>Real Coding Tasks</span>
                      <span className="font-mono text-sm text-[var(--accent)]">98%</span>
                    </div>
                    <div className="text-[10px] text-[var(--fg-muted)] font-mono">
                      14/14 automated assertions passed
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      activeStep === 1
                        ? 'bg-[rgba(212,163,89,0.1)] border-[var(--accent)] scale-[1.02]'
                        : 'bg-[rgba(255,255,255,0.02)] border-[var(--line)]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-medium text-[var(--fg)] mb-0.5">
                      <span>System Design</span>
                      <span className="font-mono text-sm text-[var(--accent)]">A+</span>
                    </div>
                    <div className="text-[10px] text-[var(--fg-muted)] font-mono">
                      Fault tolerance &amp; throughput
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      activeStep === 2
                        ? 'bg-[rgba(212,163,89,0.1)] border-[var(--accent)] scale-[1.02]'
                        : 'bg-[rgba(255,255,255,0.02)] border-[var(--line)]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-medium text-[var(--fg)] mb-0.5">
                      <span>AI Interview</span>
                      <span className="font-mono text-sm text-[#10b981]">Top 1%</span>
                    </div>
                    <div className="text-[10px] text-[var(--fg-muted)] font-mono">
                      Objective evidence generated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
