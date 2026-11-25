import React from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import GithubStats from './sections/GithubStats';
import { ArrowUpRight } from 'lucide-react';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--accent)] selection:text-black">
      {/* ── Navbar ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050507]/90 backdrop-blur-md">
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="font-editorial text-xl font-medium tracking-tight text-[#f4f4f5] hover:text-[var(--accent)] transition-colors">
              Chandan Giri
            </a>
            <span className="hidden sm:inline text-xs text-[var(--fg-muted)] font-light">
              Founder &amp; Engineer
            </span>
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="hidden md:flex items-center gap-6 text-[13px] text-[var(--fg-muted)] font-light">
              <a href="#product" className="hover:text-white transition-colors">Product</a>
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#traction" className="hover:text-white transition-colors">Traction</a>
            </nav>

            <a
              href="mailto:su-24036@sitare.org"
              className="btn-cream !text-xs !py-1.5 !px-3.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </header>

      {/* ── Main Content ───────────────────────────────────────── */}
      <main className="w-full flex flex-col">
        <Hero />

        {/* ── Metrics Strip ──────────────────────────────────── */}
        <section className="w-full border-b border-[var(--line)] bg-[var(--bg-subtle)]">
          <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="flex flex-col">
                <span className="font-mono text-3xl sm:text-4xl font-light text-[var(--fg)]">4+</span>
                <span className="font-mono text-[11px] text-[var(--fg-muted)] mt-1.5">Products Shipped</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-3xl sm:text-4xl font-light text-[var(--accent)]">99%</span>
                <span className="font-mono text-[11px] text-[var(--fg-muted)] mt-1.5">LLM Cost Cut at Sendlume</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-3xl sm:text-4xl font-light text-[var(--fg)]">Top 10</span>
                <span className="font-mono text-[11px] text-[var(--fg-muted)] mt-1.5">SIH 2025 National Finals</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-3xl sm:text-4xl font-light text-[var(--fg)]">5+</span>
                <span className="font-mono text-[11px] text-[var(--fg-muted)] mt-1.5">Open Source Orgs</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Company Logos Strip ─────────────────────────────── */}
        <section className="w-full border-b border-[var(--line)]">
          <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--fg-faint)]">
                Shipped at
              </span>
              <div className="flex-1 h-px bg-[var(--line)]" />
            </div>
            <div className="flex flex-wrap items-center gap-8 sm:gap-14">
              <img src="/logo-sendlume.png" alt="Sendlume" className="h-7 sm:h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logo-amipi.png" alt="AMIPI" className="h-7 sm:h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logo-melbourne-mama.png" alt="Melbourne Mama Creative Space" className="h-7 sm:h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logo-ozymorlab.png" alt="OzymorLab" className="h-7 sm:h-8 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            </div>
          </div>
        </section>

        <Projects />
        <Experience />
        <Achievements />
        <GithubStats />

        {/* ── Footer CTA ─────────────────────────────────────── */}
        <section className="w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-24 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-end mb-16">
            <div>
              <h2 className="font-editorial text-4xl sm:text-6xl xl:text-7xl font-light text-[var(--fg)] leading-none mb-6">
                Let's build <br />
                <span className="italic font-normal text-[var(--accent)] font-editorial">something</span> together.
              </h2>
              <p className="text-[16px] text-[var(--fg-muted)] font-light max-w-lg leading-relaxed">
                Looking for an AI engineer who ships? I'm open to full-time roles, contract work, and co-founder conversations.
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
            <span>Built with code, shipped with intent</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
