import React from 'react';

const proofPoints = [
  {
    title: 'SIH 2025 National Finalist',
    desc:
      "Led team Viking Validators to India's largest government hackathon finals as ML lead and system architect. 10,000+ teams entered.",
    year: '2025',
    metric: 'Top 0.1%',
  },
  {
    title: 'Full Merit Scholarship',
    desc:
      'Sitare Foundation — 100% tuition covered for B.Tech. Awarded on academic merit alone.',
    year: '2024',
    metric: '100%',
  },
  {
    title: '3-Year JEE Prep Scholarship',
    desc:
      'Top Neurons Foundation — full coverage for IIT JEE preparation. Three consecutive years.',
    year: '2021–2023',
    metric: '3 Years',
  },
  {
    title: 'Open Source Contributor',
    desc:
      'Shipped code to sktime, CodeGraphContext (4k+ stars), AOSSIE, and Stability Nexus. Docs, async loaders, oracle features, UI redesigns.',
    year: '2024–Present',
    metric: '4+ Orgs',
  },
];

export default function Achievements() {
  return (
    <section
      id="traction"
      className="w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-24 sm:py-32 border-b border-[var(--line)]"
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--fg-muted)] mb-4">
            Social Proof
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-light text-[var(--fg)] leading-none">
            Traction &amp; recognition.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)] rounded-xl overflow-hidden">
        {proofPoints.map((item, idx) => (
          <div
            key={item.title}
            className="p-8 sm:p-10 bg-[var(--bg)] flex flex-col justify-between gap-4 hover:bg-[var(--bg-subtle)] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-xs text-[var(--accent)]">
                  0{idx + 1}
                </span>
                <span className="font-mono text-xs text-[var(--fg-muted)]">
                  [{item.year}]
                </span>
              </div>

              {/* Large metric number — startup-style KPI */}
              <div className="font-mono text-3xl sm:text-4xl font-light text-[var(--accent)] mb-3">
                {item.metric}
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-light text-[var(--fg)] tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-[14.5px] text-[var(--fg-muted)] font-light leading-[1.75]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
