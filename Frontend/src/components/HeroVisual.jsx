import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function HeroVisual({ name = 'Mindfries', url = 'https://mindfries.com' }) {
  return (
    <div className="w-full max-w-[540px] mx-auto">
      <div className="card overflow-hidden border border-[var(--hairline)] rounded-xl bg-[var(--surface-card)] transition-colors duration-150">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--hairline)] bg-[var(--bg-page)] text-[12px]">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 font-mono text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--positive)] inline-block" aria-hidden="true" />
              <span>mindfries-eval: session #4092</span>
            </span>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors font-mono text-[11px]"
            title="Inspect live platform"
          >
            <span>{name}.com</span>
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>

        {/* Console / Evaluation Inspector Body */}
        <div className="p-4 sm:p-5 flex flex-col gap-4">
          {/* Candidate Task Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider">
                EVALUATION BENCHMARK
              </div>
              <div className="text-[15px] font-medium text-[var(--text-primary)] mt-0.5">
                Autonomous Trajectory Planning & Costmap Fusion
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--positive-dim)] text-[var(--positive)] border border-[rgba(76,195,138,0.2)]">
              <CheckCircle2 size={12} />
              14/14 tests passed
            </span>
          </div>

          {/* Code Execution Sample */}
          <div className="rounded-lg bg-[var(--bg-page)] border border-[var(--hairline)] p-3 font-mono text-[12px] leading-[1.6] overflow-x-auto text-[var(--text-secondary)]">
            <div className="text-[var(--text-muted)] mb-1">// ROS 2 deterministic collision verification</div>
            <div>
              <span className="text-[var(--accent)]">def</span> verify_safety_constraints(trajectory, costmap):
            </div>
            <div className="pl-4">
              is_clear = costmap.evaluate_envelope(trajectory, margin=<span className="text-[var(--accent)]">0.25</span>)
            </div>
            <div className="pl-4">
              <span className="text-[var(--accent)]">if not</span> is_clear: <span className="text-[var(--text-muted)]">raise SafetySupervisorHalt()</span>
            </div>
            <div className="pl-4">
              <span className="text-[var(--accent)]">return</span> trajectory.serialize_nav_message()
            </div>
          </div>

          {/* Telemetry Metrics Grid */}
          <div className="grid grid-cols-3 gap-2.5 pt-1">
            <div className="p-2.5 rounded-lg bg-[var(--surface-raised)] border border-[var(--hairline)] flex flex-col">
              <span className="text-[10.5px] font-mono text-[var(--text-muted)]">EXECUTION</span>
              <span className="text-[16px] font-mono font-medium text-[var(--text-primary)] mt-0.5">42ms</span>
              <span className="text-[10px] text-[var(--text-muted)] mt-0.5">0 alloc leaks</span>
            </div>

            <div className="p-2.5 rounded-lg bg-[var(--surface-raised)] border border-[var(--hairline)] flex flex-col">
              <span className="text-[10.5px] font-mono text-[var(--text-muted)]">ACCURACY</span>
              <span className="text-[16px] font-mono font-medium text-[var(--text-primary)] mt-0.5">99.2%</span>
              <span className="text-[10px] text-[var(--positive)] mt-0.5">Top 1% score</span>
            </div>

            <div className="p-2.5 rounded-lg bg-[var(--surface-raised)] border border-[var(--hairline)] flex flex-col">
              <span className="text-[10.5px] font-mono text-[var(--text-muted)]">OUTCOME</span>
              <span className="text-[16px] font-mono font-medium text-[var(--accent)] mt-0.5">Verified</span>
              <span className="text-[10px] text-[var(--text-muted)] mt-0.5">Evidence locked</span>
            </div>
          </div>
        </div>

        {/* Footer status caption */}
        <div className="px-4 py-2 border-t border-[var(--hairline)] bg-[var(--bg-page)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
          <span>Mindfries Technical Hiring Engine</span>
          <span>Proof-over-résumé</span>
        </div>
      </div>
    </div>
  );
}
