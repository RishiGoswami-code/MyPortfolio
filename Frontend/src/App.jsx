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
    <div className="min-h-screen flex flex-col justify-between w-full">
      <main className="w-full max-w-[1100px] mx-auto px-5 sm:px-10 flex flex-col">
        <Hero />
        <TabNav tabs={Object.keys(sections)} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-4">
          <ActiveSection key={activeTab} />
        </div>
      </main>

      <footer className="w-full border-t border-[var(--hairline)] py-6 text-center">
        <p className="font-mono text-[12px] text-[var(--text-muted)]">
          Chandan Giri (Rishi Goswami) · Built with React & Tailwind · Engineered with craft
        </p>
      </footer>
    </div>
  );
};

export default App;
