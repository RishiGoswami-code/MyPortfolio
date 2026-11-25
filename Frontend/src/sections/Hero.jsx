import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Hero() {
  const { meta } = usePortfolioData();

  return (
    <section className="pt-16 sm:pt-28 pb-16 border-b border-[var(--line)]">
      {/* Top Metadata Masthead */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-10">
        <span className="font-mono-meta text-[var(--fg)]">
          [ 00 // CHANDAN GIRI ]
        </span>
        <span className="font-mono-meta hidden sm:inline">
          FOUNDER &middot; AI SYSTEMS &middot; AUTONOMOUS ROBOTICS
        </span>
        <span className="font-mono-meta text-[var(--accent)] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          AVAILABLE FOR HIGH-IMPACT RESEARCH
        </span>
      </div>

      {/* Monumental Editorial Headline */}
      <h1 className="font-editorial text-[52px] sm:text-[90px] xl:text-[112px] font-light leading-[0.92] tracking-[-0.03em] text-[var(--fg)] mb-12">
        Architecting <br className="hidden sm:inline" />
        <span className="italic font-normal text-[var(--accent)] font-editorial">Autonomous Systems</span> <br />
        &amp; Verifiable Intelligence.
      </h1>

      {/* Asymmetric Narrative & Coordinates */}
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 sm:gap-16 pt-10 border-t border-[var(--line)]">
        <div>
          <p className="text-[18px] sm:text-[21px] text-[var(--fg)] font-light leading-[1.65]">
            Founder &amp; CEO of <a href="https://mindfries.com" target="_blank" rel="noopener noreferrer" className="editorial-link font-normal text-[var(--accent)]">Mindfries</a>, Smart India Hackathon National Finalist, and architect of <strong>DRISHTI-UGV</strong> (ROS 2 autonomous navigation stack). Specializing in AI/ML pipelines, visual SLAM, and evidence-first technical evaluation.
          </p>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.75] font-light">
            Currently architecting production AI workflows at AMIPI and building educational AI infrastructure at OzymorLab. Open-source contributor to projects including <strong>sktime</strong> and <strong>CodeGraphContext</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            <a href="https://github.com/RishiGoswami-code" target="_blank" rel="noopener noreferrer" className="editorial-link font-mono-meta text-[var(--fg)]">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/chandan-giri-307927247/" target="_blank" rel="noopener noreferrer" className="editorial-link font-mono-meta text-[var(--fg)]">
              LinkedIn ↗
            </a>
            <a href="https://x.com/RishiGoswamii" target="_blank" rel="noopener noreferrer" className="editorial-link font-mono-meta text-[var(--fg)]">
              X (Twitter) ↗
            </a>
            <a href="mailto:su-24036@sitare.org" className="editorial-link font-mono-meta text-[var(--fg)]">
              Contact ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
