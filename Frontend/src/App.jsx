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
  Github: GithubStats,
};

const App = () => {
  const [activeTab, setActiveTab] = useState('Experience');
  const ActiveSection = sections[activeTab];

  return (
    <div className="min-h-screen flex justify-center w-full">
      <div className="w-full max-w-[1200px] px-6 sm:px-12 flex flex-col">
        <Hero />
        <TabNav tabs={Object.keys(sections)} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8">
          <ActiveSection key={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default App;
