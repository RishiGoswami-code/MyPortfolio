import React from 'react';
import { Trophy, GraduationCap, Award, GitPullRequest, Star } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

function iconFor(title) {
  const t = title.toLowerCase();
  if (t.includes('hackathon')) return Trophy;
  if (t.includes('sitare')) return GraduationCap;
  if (t.includes('scholarship')) return Award;
  if (t.includes('open source')) return GitPullRequest;
  return Star;
}

export default function Achievements() {
  const { achievements } = usePortfolioData();

  return (
    <div className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 pb-16">
      {achievements.map((item) => {
        const Icon = iconFor(item.title);
        return (
          <div key={item.title} className="card flex flex-col gap-3 p-6">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--surface-raised)] border border-[var(--hairline)] text-[var(--accent)]">
                <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">[{item.year}]</span>
            </div>

            <h3
              className="text-[20px] leading-[1.3] text-[var(--text-primary)] font-normal mt-1"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {item.title}
            </h3>

            <p className="text-[14px] text-[var(--text-secondary)] leading-[1.65]">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
