import React from 'react';
import { Cpu, Search, TrendingUp, Layers, Sparkles, Users, FileText, GraduationCap, BarChart2, GitFork, Mail, Database } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: '01',
      company: 'AMIPI INC.',
      role: 'AI Engineering Intern',
      tagline: 'AI website audit & optimization platform',
      period: 'Sept 2026 — Present',
      initials: 'A',
      iconType: 'letter',
      badges: [Cpu, Search, TrendingUp],
    },
    {
      id: '02',
      company: 'MELBOURNE MAMA CREATIVE SPACE',
      role: 'AI Engineer Intern',
      tagline: 'Multi-agent systems for business intelligence',
      period: 'July 2026 — Sept 2026',
      initials: 'M.',
      iconType: 'letter',
      badges: [Layers, Sparkles, Users],
    },
    {
      id: '03',
      company: 'OZYMORLAB',
      role: 'Founder — Educational AI Infrastructure',
      tagline: 'Automated exam evaluation & academic analytics',
      period: '2025 — Present',
      initials: 'O',
      iconType: 'circle',
      badges: [FileText, GraduationCap, BarChart2],
    },
    {
      id: '04',
      company: 'SENDLUME',
      role: 'Full-Stack & AI Engineer',
      tagline: 'AI workflow platform & campaign infrastructure',
      period: 'Sept 2025 — March 2026',
      initials: '⚡',
      iconType: 'bolt',
      badges: [GitFork, Mail, Database],
    },
  ];

  return (
    <section id="trajectory" className="py-20 sm:py-24 border-b border-[var(--line)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-14 items-start">
        {/* Left Side: Headline without tags */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="font-editorial text-5xl sm:text-7xl font-light leading-[1.02] tracking-tight text-[#f4f4f5] mb-4">
              Industry <br />
              experience <br />
              in <span className="italic font-normal text-[var(--accent)] font-editorial">AI, systems</span> <br />
              and <span className="italic font-normal text-[var(--accent)] font-editorial">products.</span>
            </h2>

            <p className="text-[16px] text-[var(--fg-muted)] leading-[1.7] font-light max-w-sm mb-12">
              Building and shipping AI systems across research, startups and production environments.
            </p>
          </div>

          {/* Bottom Left Terrain Graphic with Warm Rim Glow */}
          <div className="w-full max-w-[320px] rounded-lg overflow-hidden border border-white/5 opacity-80 hidden lg:block">
            <img
              src="/trajectory-terrain.jpg"
              alt="Atmospheric Landscape"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: 4 Stacked Sleek Cards with Warm Rim Top Border */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="trajectory-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                  {exp.iconType === 'circle' ? (
                    <span className="w-6 h-6 rounded-full border-2 border-purple-400 inline-block" />
                  ) : exp.iconType === 'bolt' ? (
                    <span className="text-[var(--accent)] text-lg font-bold">⚡</span>
                  ) : (
                    <span className="text-white font-bold text-lg font-editorial">{exp.initials}</span>
                  )}
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[var(--accent)]">{exp.id}</span>
                    <h3 className="text-[15px] font-semibold text-white tracking-tight">
                      {exp.company}
                    </h3>
                  </div>

                  <div className="font-editorial italic text-[15px] text-[var(--fg-muted)] font-light leading-snug">
                    {exp.role}
                  </div>

                  <div className="text-[12.5px] text-[var(--fg-faint)] mt-0.5 font-light">
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
                      className="w-7 h-7 rounded-lg bg-zinc-900/80 border border-white/10 flex items-center justify-center text-[var(--fg-muted)]"
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
