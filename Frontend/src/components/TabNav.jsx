import React from 'react';
import { Briefcase, FolderGit2, Trophy, Activity } from 'lucide-react';

const icons = {
  Experience: Briefcase,
  Projects: FolderGit2,
  Achievements: Trophy,
  'GitHub activity': Activity,
};

export default function TabNav({ tabs, activeTab, setActiveTab }) {
  return (
    <nav className="flex items-center gap-1.5 sm:gap-2 border-b border-[var(--hairline)] overflow-x-auto pb-0 [scrollbar-width:none]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        const Icon = icons[tab] || Briefcase;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            aria-current={isActive ? 'page' : undefined}
            className={`
              shrink-0 inline-flex items-center gap-2 px-3.5 py-2.5 text-[13px] font-medium transition-colors duration-150 border-b-2 -mb-px
              ${
                isActive
                  ? 'text-[var(--text-primary)] border-[var(--accent)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)] border-transparent'
              }
            `}
          >
            <Icon
              size={15}
              strokeWidth={1.5}
              className={isActive ? 'text-[var(--accent)]' : 'text-current'}
              aria-hidden="true"
            />
            <span>{tab}</span>
          </button>
        );
      })}
    </nav>
  );
}
