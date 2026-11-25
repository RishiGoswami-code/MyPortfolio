import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Brain, Code2, Layers, Cpu } from 'lucide-react';

/*
  Magic UI Border-Beam Hero Showcase for Mindfries:
  Full-width centered product mockup showcasing the AI Technical Hiring Platform
  (Real coding tasks, system design rounds, and AI-led interviews).
*/
export default function HeroVisual({ name = 'Mindfries', url = 'https://mindfries.com' }) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-2">
      {/* Magic UI Border-Beam Card Container */}
      <div className="relative rounded-2xl p-[1px] overflow-hidden group shadow-2xl">
        {/* Animated Rotating Border Beam */}
        <div
          aria-hidden="true"
          className="absolute inset-[-150%] animate-spin-beam opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0 320deg, rgba(99, 102, 241, 0.95) 345deg, rgba(56, 189, 248, 1) 360deg)',
          }}
        />

        {/* Card Interior */}
        <div className="relative rounded-2xl bg-zinc-950/95 border border-white/10 backdrop-blur-2xl p-5 sm:p-7 flex flex-col gap-5">
          {/* Top Browser / Window Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#10b981] inline-block" />
              <span className="ml-2.5 font-mono text-[12px] text-zinc-400">
                mindfries.com/evaluations/candidate-8821
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Candidate Session
              </span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-[12px] text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Launch {name}</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Assessment Overview Banner */}
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <div className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Brain size={13} className="text-indigo-400" />
                <span>Mindfries Technical Hiring Engine</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                Candidate Evaluation: Senior AI Systems &amp; Distributed Architect
              </h2>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              <CheckCircle2 size={13} className="text-emerald-400" />
              Evidence Certified
            </span>
          </div>

          {/* Main Assessment Grid: AI Interview Analysis + Scoring Bento */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4">
            {/* AI Interviewer Note */}
            <div className="rounded-xl bg-zinc-900/60 border border-white/10 p-4 sm:p-5 flex flex-col justify-between gap-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-indigo-400">
                  <Sparkles size={14} />
                  AI Interviewer Live Rubric
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  Real Skills &middot; Real Evidence
                </span>
              </div>
              <p className="text-[13.5px] text-zinc-300 leading-relaxed font-normal">
                &ldquo;Candidate demonstrated exceptional architectural clarity on distributed event streaming, idempotency guarantees, and sub-10ms cache invalidation. Evaluated against production engineering standards instead of trivial syntax tests.&rdquo;
              </p>
              <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Zero Hallucination &middot; Automated Verification</span>
              </div>
            </div>

            {/* Mindfries 3 Core Pillars Scoring */}
            <div className="grid grid-cols-1 gap-2.5">
              <div className="rounded-xl bg-zinc-900/50 border border-white/10 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-white">Real Coding Tasks</div>
                    <div className="text-[11px] text-zinc-400">14/14 automated test assertions passed</div>
                  </div>
                </div>
                <span className="font-mono text-lg font-bold text-sky-400">98%</span>
              </div>

              <div className="rounded-xl bg-zinc-900/50 border border-white/10 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Layers size={16} />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-white">System Design Rounds</div>
                    <div className="text-[11px] text-zinc-400">Fault tolerance &amp; throughput benchmarked</div>
                  </div>
                </div>
                <span className="font-mono text-lg font-bold text-indigo-400">A+</span>
              </div>

              <div className="rounded-xl bg-zinc-900/50 border border-white/10 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-white">AI-Led Interviews</div>
                    <div className="text-[11px] text-zinc-400">Objective, evidence-backed evaluation</div>
                  </div>
                </div>
                <span className="font-mono text-lg font-bold text-emerald-400">Top 1%</span>
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[12px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck size={15} className="text-emerald-400" />
              <span>Evidence-based hiring platform founded by Chandan Giri</span>
            </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-300 transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span>Visit mindfries.com</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
