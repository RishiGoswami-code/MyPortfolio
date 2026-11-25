import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Brain, Code2, Layers, Cpu } from 'lucide-react';

/*
  Authentic Mindfries Product Artifact:
  An AI hiring platform that evaluates engineering ability through real coding tasks,
  system design rounds, and AI-led interviews.
*/
export default function HeroVisual({ name = 'Mindfries', url = 'https://mindfries.com' }) {
  return (
    <div className="w-full bg-[var(--bg-subtle)] border border-[var(--line)] rounded-xl overflow-hidden">
      {/* Console Window Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--line)] bg-[#0c0c0f]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80 inline-block" />
          <span className="ml-3 font-mono-meta text-[11px] text-[var(--fg-muted)]">
            mindfries.com/evaluations/candidate-8821
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#10b981]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            Live Assessment
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--accent)] hover:underline"
          >
            <span>{name}.com</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      {/* Main Console Content */}
      <div className="p-6 sm:p-8 flex flex-col gap-6">
        {/* Candidate Evaluation Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-3 pb-5 border-b border-[var(--line)]">
          <div>
            <div className="font-mono-meta text-[11px] flex items-center gap-2 mb-1">
              <Brain size={13} className="text-[var(--accent)]" />
              <span>Mindfries Technical Hiring Engine</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] font-normal tracking-tight">
              Candidate Evaluation: Senior AI Systems &amp; Distributed Architect
            </h3>
          </div>

          <span className="font-mono text-xs px-3 py-1 rounded bg-[rgba(255,255,255,0.04)] border border-[var(--line)] text-[var(--fg)] flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-[#10b981]" />
            Evidence Certified
          </span>
        </div>

        {/* AI Interview Rubric Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6">
          <div className="flex flex-col justify-between gap-4 p-5 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[var(--line)]">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 font-mono-meta text-[11px] text-[var(--accent)]">
                <Sparkles size={13} />
                AI Interviewer Synthesis
              </span>
              <span className="font-mono-meta text-[10.5px]">
                Rubric: Production Scale
              </span>
            </div>
            <p className="text-[14px] text-[var(--fg-muted)] leading-relaxed font-light">
              &ldquo;Candidate demonstrated exceptional architectural clarity on distributed event streaming, idempotency guarantees, and sub-10ms cache invalidation. Evaluated against real production engineering standards instead of trivial syntax tests.&rdquo;
            </p>
            <div className="font-mono text-[11px] text-[var(--fg-faint)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span>Zero Hallucination &middot; Automated Verification</span>
            </div>
          </div>

          {/* Three Core Evaluation Pillars */}
          <div className="flex flex-col gap-3">
            <div className="p-3.5 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[var(--line)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Code2 size={16} className="text-[var(--accent)]" />
                <div>
                  <div className="text-[13.5px] font-medium text-[var(--fg)]">Real Coding Tasks</div>
                  <div className="text-[11px] text-[var(--fg-muted)]">14/14 automated assertions passed</div>
                </div>
              </div>
              <span className="font-mono text-lg font-normal text-[var(--fg)]">98%</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[var(--line)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Layers size={16} className="text-[var(--accent)]" />
                <div>
                  <div className="text-[13.5px] font-medium text-[var(--fg)]">System Design Rounds</div>
                  <div className="text-[11px] text-[var(--fg-muted)]">Fault tolerance &amp; throughput</div>
                </div>
              </div>
              <span className="font-mono text-lg font-normal text-[var(--fg)]">A+</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[var(--line)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cpu size={16} className="text-[var(--accent)]" />
                <div>
                  <div className="text-[13.5px] font-medium text-[var(--fg)]">AI-Led Interviews</div>
                  <div className="text-[11px] text-[var(--fg-muted)]">Objective evidence generated</div>
                </div>
              </div>
              <span className="font-mono text-lg font-normal text-[#10b981]">Top 1%</span>
            </div>
          </div>
        </div>

        {/* Footer verification strip */}
        <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-3 font-mono text-[11.5px] text-[var(--fg-muted)]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-[#10b981]" />
            <span>Cryptographically Verified Evidence &middot; Proof Over R&eacute;sum&eacute;s</span>
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link text-[var(--fg)] hover:text-[var(--accent)]"
          >
            <span>Visit platform at mindfries.com</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
