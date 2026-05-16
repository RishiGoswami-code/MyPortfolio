import React from 'react';

const tabs = ['Experience', 'Projects', 'Skills', 'Achievements', 'Github'];

export default function TabNav({ activeTab, setActiveTab }) {
  return (
    <nav className="flex items-center gap-6 border-b border-[var(--line)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              pb-3 pt-4 px-1 text-[14px] font-medium tracking-[0.12em] uppercase transition-colors duration-200
              ${isActive ? 'text-[var(--ink)] border-b-[1.5px] border-[var(--gold)]' : 'text-[var(--ink-ghost)] hover:text-[var(--ink-light)] border-b-[1.5px] border-transparent'}
            `}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {tab}
          </button>
        );
      })}
    </nav>
  );
}
