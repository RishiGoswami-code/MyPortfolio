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
    <div className="flex justify-center sm:justify-start w-full my-4">
      <nav className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-xl shadow-2xl overflow-x-auto [scrollbar-width:none]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          const Icon = icons[tab] || Briefcase;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              aria-current={isActive ? 'page' : undefined}
              className={`
                shrink-0 inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200
                ${
                  isActive
                    ? 'bg-white text-zinc-950 font-semibold shadow-lg shadow-white/10'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }
              `}
            >
              <Icon
                size={15}
                strokeWidth={isActive ? 2 : 1.75}
                className={isActive ? 'text-zinc-950' : 'text-current'}
                aria-hidden="true"
              />
              <span>{tab}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
