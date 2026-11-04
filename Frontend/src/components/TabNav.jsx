import React from 'react';
import { Briefcase, FolderGit2, Trophy, Activity } from 'lucide-react';

const icons = {
  Experience: Briefcase,
  Projects: FolderGit2,
  Achievements: Trophy,
  Github: Activity,
};

export default function TabNav({ tabs, activeTab, setActiveTab }) {
  return (
    <nav className="flex items-end justify-between sm:justify-start gap-2 sm:gap-8 border-b border-[var(--line)] overflow-x-auto [scrollbar-width:none]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        const Icon = icons[tab];
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            aria-current={isActive ? 'page' : undefined}
            className={`
              shrink-0 whitespace-nowrap inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 pb-3 pt-4 px-1 text-[11px] sm:text-[14px] font-medium tracking-[0.08em] sm:tracking-[0.12em] uppercase transition-colors duration-200 border-b-[1.5px]
              ${isActive ? 'text-[var(--ink)] border-[var(--gold)]' : 'text-[var(--ink-ghost)] hover:text-[var(--ink-light)] border-transparent'}
            `}
          >
            {Icon && (
              <Icon
                size={15}
                strokeWidth={1.75}
                className={isActive ? 'text-[var(--gold)]' : 'text-current'}
                aria-hidden="true"
              />
            )}
            {tab}
          </button>
        );
      })}
    </nav>
  );
}
