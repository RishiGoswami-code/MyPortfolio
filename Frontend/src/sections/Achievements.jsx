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
    <div className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 pb-16">
      {achievements.map((item) => {
        const Icon = iconFor(item.title);
        return (
          <div key={item.title} className="card flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[var(--cream)] border border-[var(--gold-light)] text-[var(--gold)]">
                <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="eyebrow">{item.year}</span>
            </div>
            <h3 className="text-[24px] leading-[1.25] text-[var(--ink)] font-normal" style={{ fontFamily: 'var(--font-display)' }}>
              {item.title}
            </h3>
            <p className="text-[16px] font-light text-[var(--ink-light)] leading-[1.75]">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
