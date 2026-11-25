import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import HeroVisual from '../components/HeroVisual';

export default function Projects() {
  const { featured } = usePortfolioData();

  return (
    <section id="mindfries" className="py-20 border-b border-[var(--line)]">
      {/* 01 // MINDFRIES MONOGRAPH */}
      <div className="mb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--line)] mb-10">
          <span className="font-mono-meta text-[var(--accent)]">
            [ 01 // FLAGSHIP PLATFORM ]
          </span>
          <span className="font-mono-meta">
            AI HIRING &middot; EVIDENCE OVER R&Eacute;SUM&Eacute;S
          </span>
          <a
            href={featured?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link font-mono-meta"
          >
            mindfries.com <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start mb-12">
          <div>
            <h2 className="font-editorial text-4xl sm:text-6xl font-light text-[var(--fg)] leading-[1.05] tracking-tight mb-4">
              Mindfries
            </h2>
            <p className="font-editorial text-2xl sm:text-3xl text-[var(--accent)] italic font-light leading-snug mb-6">
              &ldquo;{featured?.tagline}&rdquo;
            </p>
            <p className="text-[16px] text-[var(--fg-muted)] leading-[1.8] font-light mb-8">
              {featured?.desc}
            </p>

            <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-[var(--accent)] mt-0.5">01</span>
                <div>
                  <div className="text-sm font-medium text-[var(--fg)]">Real Coding Tasks</div>
                  <div className="text-xs text-[var(--fg-muted)]">Evaluated against automated production test suites, not trivia.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-[var(--accent)] mt-0.5">02</span>
                <div>
                  <div className="text-sm font-medium text-[var(--fg)]">System Design Rounds</div>
                  <div className="text-xs text-[var(--fg-muted)]">Testing architectural scalability, throughput, and fault tolerance.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-[var(--accent)] mt-0.5">03</span>
                <div>
                  <div className="text-sm font-medium text-[var(--fg)]">AI-Led Technical Interviews</div>
                  <div className="text-xs text-[var(--fg-muted)]">Objective evidence generated to hire on merit instead of pedigree.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Authentic Product Stage */}
          <HeroVisual name={featured?.name} url={featured?.url} />
        </div>
      </div>

      {/* 02 // SELECTED ENGINEERING SYSTEMS (ARCHITECTURAL INDEX) */}
      <div id="systems" className="pt-12">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--line)] mb-12">
          <span className="font-mono-meta text-[var(--accent)]">
            [ 02 // SELECTED SYSTEMS &amp; RESEARCH ]
          </span>
          <span className="font-mono-meta">
            ROBOTICS &middot; FRAUD DETECTION &middot; QUANTITATIVE &middot; MCP
          </span>
        </div>

        {/* 02.A: DRISHTI-UGV Full-Width Monograph Banner */}
        <div className="p-8 sm:p-12 rounded-xl bg-[var(--bg-subtle)] border border-[var(--line)] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            <div>
              <div className="font-mono-meta text-[var(--accent)] mb-3">
                ROBOTICS // AUTONOMOUS NAVIGATION
              </div>
              <h3 className="font-editorial text-3xl sm:text-5xl font-light text-[var(--fg)] tracking-tight mb-4">
                DRISHTI-UGV
              </h3>
              <p className="text-[15.5px] text-[var(--fg-muted)] leading-[1.8] font-light max-w-2xl mb-8">
                A ROS 2 hybrid navigation stack for outdoor GPS-denied autonomous ground vehicles, fusing stereo-vision SLAM (RTAB-Map), GPU-accelerated terrain costmaps, and Nav2 path planning behind a deterministic C++ safety supervisor.
              </p>

              <div className="flex flex-wrap gap-2">
                {['ROS 2', 'C++', 'Python', 'Nav2', 'RTAB-Map', 'CUDA', 'Gazebo', 'Docker'].map((tech) => (
                  <span key={tech} className="font-mono text-[11px] px-2.5 py-1 rounded bg-[rgba(255,255,255,0.03)] border border-[var(--line)] text-[var(--fg-muted)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between h-full lg:border-l lg:border-[var(--line)] lg:pl-10">
              <div>
                <div className="font-mono text-[42px] sm:text-[56px] font-light text-[var(--fg)] leading-none mb-1">
                  ~5,000
                </div>
                <div className="font-mono-meta text-[11px] text-[var(--fg-muted)] mb-8">
                  Safety Unit-Test Assertions
                </div>
              </div>

              <a
                href="https://github.com/RishiGoswami-code/drishti-ugv"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-mono-meta text-[var(--fg)] text-[12px]"
              >
                Inspect DRISHTI-UGV Repository <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* 02.B & 02.C: Asymmetric Two-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Viking Validators */}
          <div className="p-8 rounded-xl bg-[var(--bg-subtle)] border border-[var(--line)] flex flex-col justify-between">
            <div>
              <div className="font-mono-meta text-[var(--accent)] mb-3">
                SMART INDIA HACKATHON 2025 // NATIONAL FINALIST
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[var(--fg)] tracking-tight mb-3">
                Viking Validators
              </h3>
              <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.75] font-light mb-6">
                A production platform for academic document fraud detection using an ensemble ML pipeline and computer vision to audit forgery at scale.
              </p>

              <div className="mb-8">
                <div className="font-mono text-3xl font-light text-[var(--fg)]">94%</div>
                <div className="font-mono-meta text-[11px]">Accuracy on Document Forgery Detection</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[var(--line)]">
              <span className="font-mono text-[11px] text-[var(--fg-faint)]">FastAPI &middot; TensorFlow &middot; OpenCV</span>
              <a
                href="https://github.com/RishiGoswami-code/VikingMachineLearningModel"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-mono-meta"
              >
                Code <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* OzymorLab */}
          <div className="p-8 rounded-xl bg-[var(--bg-subtle)] border border-[var(--line)] flex flex-col justify-between">
            <div>
              <div className="font-mono-meta text-[var(--accent)] mb-3">
                OPEN SOURCE // EDUCATIONAL AI INFRASTRUCTURE
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[var(--fg)] tracking-tight mb-3">
                OzymorLab
              </h3>
              <p className="text-[14.5px] text-[var(--fg-muted)] leading-[1.75] font-light mb-6">
                Open-source infrastructure that turns handwritten answer sheets into structured, auditable evaluations using OCR, LLMs, and explainable grading rubrics.
              </p>

              <div className="mb-8">
                <div className="font-mono text-3xl font-light text-[var(--fg)]">End-to-End</div>
                <div className="font-mono-meta text-[11px]">Exam Lifecycle Automated</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[var(--line)]">
              <span className="font-mono text-[11px] text-[var(--fg-faint)]">OCR &middot; LLMs &middot; Explainable AI</span>
              <a
                href="https://ozymorlab.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-mono-meta"
              >
                Platform <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* 02.D & 02.E: Minimal Architectural Ledger Rows */}
        <div className="border-t border-[var(--line)]">
          <div className="py-6 border-b border-[var(--line)] grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-4 hover:bg-[rgba(255,255,255,0.015)] transition-colors">
            <span className="font-mono-meta text-[var(--fg-muted)]">QUANT RESEARCH</span>
            <div>
              <span className="font-medium text-[var(--fg)] mr-3">Quantitative Finance Models</span>
              <span className="text-sm text-[var(--fg-muted)]">JPMorgan Chase quant study: commodity storage contract valuation and PD default models (~15% better accuracy).</span>
            </div>
            <div className="md:text-right">
              <a
                href="https://github.com/RishiGoswami-code/QuantAnalysis"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-mono-meta"
              >
                View Study <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="py-6 border-b border-[var(--line)] grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-4 hover:bg-[rgba(255,255,255,0.015)] transition-colors">
            <span className="font-mono-meta text-[var(--fg-muted)]">OPEN SOURCE / MCP</span>
            <div>
              <span className="font-medium text-[var(--fg)] mr-3">CodeGraphContext Docs</span>
              <span className="text-sm text-[var(--fg-muted)]">Designed and authored documentation for CodeGraphContext, an MCP server and CLI indexing code into graph databases (4k+ stars).</span>
            </div>
            <div className="md:text-right">
              <a
                href="https://github.com/CodeGraphContext/CodeGraphContext/pull/875"
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link font-mono-meta"
              >
                View Pull Request <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
