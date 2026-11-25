import React from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import GithubStats from './sections/GithubStats';
import TabNav from './components/TabNav';
import { ArrowUpRight } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* Sticky Top Minimalist Masthead */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--line)] bg-[#070709]/85 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <a href="#" className="font-semibold text-sm tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-colors">
              Chandan Giri
            </a>
            <span className="hidden sm:inline font-mono text-[11px] text-[var(--fg-muted)]">
              / AI Systems Engineer &amp; Founder
            </span>
          </div>

          <TabNav />

          <div className="flex items-center gap-4">
            <a
              href="https://mindfries.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-meta text-[11px] text-[var(--accent)] hover:underline hidden sm:inline"
            >
              mindfries.com ↗
            </a>
            <a
              href="mailto:su-24036@sitare.org"
              className="font-mono text-xs px-3.5 py-1.5 rounded bg-[var(--fg)] text-[var(--bg)] font-medium hover:bg-[var(--accent)] transition-colors"
            >
              Inquire
            </a>
          </div>
        </div>
      </header>

      {/* Main Curated Editorial Flow */}
      <main className="max-w-[1200px] mx-auto px-6 sm:px-12 editorial-grid flex flex-col">
        <Hero />
        <Projects />
        <Experience />
        <Achievements />
        <GithubStats />

        {/* 06 // COLOPHON & DIRECT INQUIRIES */}
        <section className="py-24">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--line)] mb-12">
            <span className="font-mono-meta text-[var(--accent)]">
              [ 06 // DIRECT CONTACT &amp; COLOPHON ]
            </span>
            <span className="font-mono-meta">
              OPEN FOR ENGINEERING COLLABORATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-end mb-16">
            <div>
              <h2 className="font-editorial text-4xl sm:text-6xl xl:text-7xl font-light text-[var(--fg)] leading-none mb-6">
                Let&rsquo;s build intelligent, <br />
                <span className="italic font-normal text-[var(--accent)] font-editorial">fault-tolerant</span> systems.
              </h2>
              <p className="text-[16px] text-[var(--fg-muted)] font-light max-w-lg leading-relaxed">
                Available for research advisorship, AI systems architecture, and high-impact engineering projects.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="mailto:su-24036@sitare.org"
                className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
              >
                su-24036@sitare.org ↗
              </a>
              <div className="flex flex-wrap gap-4 font-mono-meta text-[11px] pt-2">
                <a href="https://github.com/RishiGoswami-code" target="_blank" rel="noopener noreferrer" className="editorial-link">GitHub</a>
                <a href="https://www.linkedin.com/in/chandan-giri-307927247/" target="_blank" rel="noopener noreferrer" className="editorial-link">LinkedIn</a>
                <a href="https://x.com/RishiGoswamii" target="_blank" rel="noopener noreferrer" className="editorial-link">X / Twitter</a>
                <a href="https://www.threads.com/@chandu__tx/" target="_blank" rel="noopener noreferrer" className="editorial-link">Threads</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[var(--fg-faint)]">
            <span>&copy; {new Date().getFullYear()} Chandan Giri (Rishi Goswami)</span>
            <span>Art directed with taste, restraint, and precision</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
