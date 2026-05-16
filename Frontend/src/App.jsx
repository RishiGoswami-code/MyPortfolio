import React, { useState } from 'react';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import GithubStats from './sections/GithubStats';
import TabNav from './components/TabNav';

const App = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Experience':
        return <Experience />;
      case 'Projects':
        return <Projects />;
      case 'Skills':
        return <Skills />;
      case 'Achievements':
        return <Achievements />;
      case 'Github':
        return <GithubStats />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] flex justify-center w-full">
      <div className="w-full max-w-[1200px] px-6 sm:px-12 flex flex-col">
        <Hero />
        <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8">
          {renderActiveTab()}
        </div>
      </div>
    </div>
  );
};

export default App;