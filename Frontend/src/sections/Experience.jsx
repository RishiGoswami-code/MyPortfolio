import React from 'react';
import {
  Cpu, Search, TrendingUp,
  Layers, Sparkles, Users,
  FileText, GraduationCap, BarChart2,
  GitFork, Mail, Database,
} from 'lucide-react';

const experiences = [
  {
    id: '01',
    company: 'AMIPI INC.',
    role: 'AI Engineering Intern',
    tagline:
      'Built an AI auditing pipeline that finds broken links, missing metadata, and SEO gaps across entire websites — automatically.',
    period: 'Sept 2026 — Present',
    logo: '/logo-amipi.png',
    badges: [Cpu, Search, TrendingUp],
  },
  {
    id: '02',
    company: 'MELBOURNE MAMA',
    role: 'AI Engineer Intern',
    tagline:
      'Shipped a multi-agent intelligence platform — trend discovery, knowledge management, and strategy automation for business teams.',
    period: 'July — Sept 2026',
    logo: '/logo-melbourne-mama.png',
    badges: [Layers, Sparkles, Users],
  },
  {
    id: '03',
    company: 'OZYMORLAB',
    role: 'Founder',
    tagline:
      'Founded and built an open-source platform that automates exam grading with OCR, LLMs, and explainable AI.',
    period: '2025 — Present',
    logo: '/logo-ozymorlab.png',
    badges: [FileText, GraduationCap, BarChart2],
  },
  {
    id: '04',
    company: 'SENDLUME',
    role: 'Full-Stack & AI Engineer',
    tagline:
      'Cut LLM costs from 3M to 20K tokens (99% reduction). Built email tracking processing 10,000+ events/day. Sub-100ms dashboard latency.',
    period: 'Sept 2025 — March 2026',
    logo: '/logo-sendlume.png',
    badges: [GitFork, Mail, Database],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-24 sm:py-32 border-b border-[var(--line)] overflow-hidden"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-no-repeat bg-left-bottom bg-cover sm:bg-contain opacity-90"
        style={{
          backgroundImage: "url('/terrain-glow-bg.jpg')",
          backgroundPosition: 'left bottom',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-[#050507]/40 to-[#050507]/90"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
        {/* Left side — headline */}
        <div className="flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--fg-muted)] mb-5">
            Track Record
          </div>

          <h2 className="font-editorial text-5xl sm:text-7xl font-light leading-[1.02] tracking-tight text-[#f4f4f5] mb-4">
            Where I've{' '}
            <br />
            <span className="italic font-normal text-[var(--accent)] font-editorial">
              shipped.
            </span>
          </h2>

          <p className="text-[15.5px] sm:text-[16.5px] text-[var(--fg-muted)] leading-[1.7] font-light max-w-sm">
            Four companies. Each one left with a deployed system that's still running.
          </p>
        </div>

        {/* Right side — experience cards */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="trajectory-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                {/* Company logo */}
                <div className="w-[52px] h-[52px] rounded-xl bg-zinc-950/90 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden shadow-inner p-1">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[var(--accent)]">
                      {exp.id}
                    </span>
                    <h3 className="text-[15px] font-bold text-white tracking-tight">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="font-editorial italic text-[15px] text-[var(--fg-muted)] font-light leading-snug">
                    {exp.role}
                  </div>

                  <div className="text-[12.5px] text-[var(--fg-faint)] mt-0.5 font-light max-w-sm">
                    {exp.tagline}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end justify-between gap-2.5 sm:border-l sm:border-white/5 sm:pl-6">
                <span className="font-mono text-[11.5px] text-[var(--fg-muted)] whitespace-nowrap">
                  {exp.period}
                </span>

                <div className="flex items-center gap-2">
                  {exp.badges.map((BadgeIcon, bIdx) => (
                    <span
                      key={bIdx}
                      className="w-7 h-7 rounded-lg bg-zinc-900/90 border border-white/10 flex items-center justify-center text-[var(--fg-muted)]"
                    >
                      <BadgeIcon size={13} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
