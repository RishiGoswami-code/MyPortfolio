import React from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import GithubStats from './sections/GithubStats';
import { ArrowUpRight } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--accent)] selection:text-black">
      {/* Sticky Top Navbar matching Image 1 */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050507]/90 backdrop-blur-md">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
          {/* Left: Chandan Giri + AI Systems Engineer & Founder */}
          <div className="flex items-center gap-3">
            <a href="#" className="font-editorial text-xl font-medium tracking-tight text-[#f4f4f5] hover:text-[var(--accent)] transition-colors">
              Chandan Giri
            </a>
            <span className="hidden sm:inline text-xs text-[var(--fg-muted)] font-light">
              AI Systems Engineer &amp; Founder
            </span>
          </div>

          {/* Right: Nav Links + Inquire ↗ Button matching Image 1 */}
          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="hidden md:flex items-center gap-6 text-[13px] text-[var(--fg-muted)] font-light">
              <a href="#mindfries" className="hover:text-white transition-colors">Mindfries</a>
              <a href="#systems" className="hover:text-white transition-colors">Systems</a>
              <a href="#trajectory" className="hover:text-white transition-colors">Projects</a>
              <a href="#recognition" className="hover:text-white transition-colors">Recognition</a>
            </nav>

            <a
              href="mailto:su-24036@sitare.org"
              className="btn-cream !text-xs !py-1.5 !px-3.5"
            >
              <span>Inquire</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Curated Content Flow */}
      <main className="max-w-[1240px] mx-auto px-6 sm:px-12 flex flex-col">
        <Hero />
        <Projects />
        <Experience />
        <Achievements />
        <GithubStats />

        {/* Closing Inquiries Section */}
        <section className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-end mb-16">
            <div>
              <h2 className="font-editorial text-4xl sm:text-6xl xl:text-7xl font-light text-[var(--fg)] leading-none mb-6">
                Building intelligent <br />
                <span className="italic font-normal text-[var(--accent)] font-editorial">systems</span> for the real world.
              </h2>
              <p className="text-[16px] text-[var(--fg-muted)] font-light max-w-lg leading-relaxed">
                Available for research advisorship, robotics autonomy engineering, and distributed systems architecture.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="mailto:su-24036@sitare.org"
                className="font-editorial text-2xl sm:text-3xl text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
              >
                su-24036@sitare.org ↗
              </a>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-[var(--fg-muted)] pt-2">
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
