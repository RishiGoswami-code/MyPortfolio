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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 pb-16">
      {achievements.map((item) => {
        const Icon = iconFor(item.title);
        return (
          <div key={item.title} className="bento-card flex flex-col gap-3.5 p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="font-mono text-[12px] text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                {item.year}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight mt-1">
              {item.title}
            </h3>

            <p className="text-[14.5px] text-zinc-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}
