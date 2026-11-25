import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Brain, Code2, Layers } from 'lucide-react';

/*
  Magic UI Border-Beam Product Mockup for Mindfries:
  An AI hiring platform that evaluates engineering ability through real coding tasks,
  system design rounds, and AI-led interviews.
*/
export default function HeroVisual({ name = 'Mindfries', url = 'https://mindfries.com' }) {
  return (
    <div className="w-full max-w-[540px] mx-auto">
      {/* Magic UI Border-Beam Card Container */}
      <div className="relative rounded-2xl p-[1px] overflow-hidden group">
        {/* Animated Rotating Border Beam */}
        <div
          aria-hidden="true"
          className="absolute inset-[-100%] animate-spin-beam opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0 320deg, rgba(99, 102, 241, 0.9) 345deg, rgba(56, 189, 248, 1) 360deg)',
          }}
        />

        {/* Card Interior */}
        <div className="relative rounded-2xl bg-zinc-950/90 border border-white/10 backdrop-blur-xl shadow-2xl p-5 sm:p-6 flex flex-col gap-4">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-[11.5px] text-zinc-400">
                Mindfries Evaluation Studio
              </span>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[11.5px] text-zinc-400 hover:text-white transition-colors"
            >
              <span>{name}.com</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Live Assessment Session Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                  Live Technical Assessment
                </span>
              </div>
              <div className="text-[16px] font-semibold text-white mt-1">
                Senior AI Systems &amp; Distributed Architect
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 size={12} />
              Session #MF-8821
            </span>
          </div>

          {/* AI-Led Interview & Evaluation Rubric */}
          <div className="rounded-xl bg-zinc-900/70 border border-white/10 p-3.5 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-indigo-400">
                <Sparkles size={13} />
                AI Interviewer Analysis
              </span>
              <span className="font-mono text-[11px] text-zinc-500">
                Rubric: Production Scale
              </span>
            </div>
            <p className="text-[13px] text-zinc-300 leading-relaxed">
              &ldquo;Candidate architected an asynchronous event-driven workflow with deterministic idempotency, automated failover, and sub-10ms cache invalidation.&rdquo;
            </p>
          </div>

          {/* Mindfries Core Evaluation Pillars */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="rounded-xl bg-zinc-900/50 border border-white/10 p-3 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono">
                <Code2 size={13} className="text-sky-400" />
                <span>CODING</span>
              </div>
              <span className="text-[18px] font-semibold text-white tracking-tight">98%</span>
              <span className="text-[10px] text-zinc-400 font-mono">Real tasks</span>
            </div>

            <div className="rounded-xl bg-zinc-900/50 border border-white/10 p-3 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono">
                <Layers size={13} className="text-indigo-400" />
                <span>SYSTEMS</span>
              </div>
              <span className="text-[18px] font-semibold text-white tracking-tight">A+</span>
              <span className="text-[10px] text-zinc-400 font-mono">Design rounds</span>
            </div>

            <div className="rounded-xl bg-zinc-900/50 border border-white/10 p-3 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-mono">
                <Brain size={13} className="text-emerald-400" />
                <span>AI INTERVIEW</span>
              </div>
              <span className="text-[18px] font-semibold text-emerald-400 tracking-tight">Verified</span>
              <span className="text-[10px] text-zinc-400 font-mono">Evidence-based</span>
            </div>
          </div>

          {/* Card Footer Banner */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11.5px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Evidence locked over r&eacute;sum&eacute;s</span>
            </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
            >
              <span>Explore Mindfries</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
