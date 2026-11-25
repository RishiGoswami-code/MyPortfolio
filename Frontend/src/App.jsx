import React, { useState } from 'react';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import GithubStats from './sections/GithubStats';
import TabNav from './components/TabNav';

const sections = {
  Experience,
  Projects,
  Achievements,
  'GitHub activity': GithubStats,
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Experience');
  const ActiveSection = sections[activeTab];

  return (
    <div className="min-h-screen relative flex flex-col justify-between w-full bg-dot-pattern">
      {/* Top Ambient Glow (Magic UI / Motion.dev Style) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-gradient-to-b from-indigo-500/15 via-sky-500/5 to-transparent blur-3xl pointer-events-none"
      />

      <main className="relative z-10 w-full max-w-[1140px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col">
        <Hero />
        <TabNav tabs={Object.keys(sections)} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-4">
          <ActiveSection key={activeTab} />
        </div>
      </main>

      <footer className="relative z-10 w-full border-t border-white/10 py-8 text-center bg-zinc-950/40 backdrop-blur-md">
        <p className="font-mono text-[12px] text-zinc-500">
          Chandan Giri (Rishi Goswami) &middot; Designed with inspiration from Motion.dev &amp; Magic UI
        </p>
      </footer>
    </div>
  );
};

export default App;
