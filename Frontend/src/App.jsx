import React, { useState } from 'react';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import GithubStats from './sections/GithubStats';
import TabNav from './components/TabNav';

const sections = {
  'Projects (Bento)': Projects,
  Experience,
  Achievements,
  'GitHub Activity': GithubStats,
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Projects (Bento)');
  const ActiveSection = sections[activeTab];

  return (
    <div className="min-h-screen relative flex flex-col justify-between w-full bg-dot-pattern">
      {/* Top Ambient Glow (Magic UI / Motion.dev Style) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-indigo-500/15 via-sky-500/5 to-transparent blur-3xl pointer-events-none"
      />

      {/* Top Sticky Minimal Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
        <div className="max-w-[1140px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
            <span className="font-semibold text-sm tracking-tight text-white">Chandan Giri</span>
            <span className="hidden sm:inline font-mono text-[11px] text-zinc-500 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
              AI Engineer &amp; Founder
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://mindfries.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              mindfries.com &rarr;
            </a>
            <a
              href="https://github.com/RishiGoswami-code"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white hover:bg-white/15 border border-white/10 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full max-w-[1140px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col">
        <Hero />
        <TabNav tabs={Object.keys(sections)} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-2">
          <ActiveSection key={activeTab} />
        </div>
      </main>

      <footer className="relative z-10 w-full border-t border-white/10 py-8 text-center bg-zinc-950/60 backdrop-blur-md">
        <p className="font-mono text-[12px] text-zinc-500">
          Chandan Giri (Rishi Goswami) &middot; Built with Motion.dev &amp; Magic UI Startup Design System
        </p>
      </footer>
    </div>
  );
};

export default App;
