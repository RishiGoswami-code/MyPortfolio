import React from 'react';
import { Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaThreads } from 'react-icons/fa6';
import { usePortfolioData } from '../hooks/usePortfolioData';
import HeroVisual from '../components/HeroVisual';

const linkIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  X: FaXTwitter,
  Threads: FaThreads,
  Email: Mail,
};

const capabilities = [
  'ROS 2 Navigation',
  'Autonomous Robotics',
  'Distributed Systems',
  'PyTorch',
  'FastAPI',
  'C++',
  'Docker',
  'CUDA',
  'Next.js',
];

export default function Hero() {
  const { meta, featured } = usePortfolioData();

  return (
    <div className="w-full pt-14 sm:pt-24 pb-12 flex flex-col items-center text-center">
      {/* Magic UI Shimmer Announcement Pill */}
      <a
        href={featured?.url || 'https://mindfries.com'}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/15 bg-zinc-900/80 text-[12.5px] font-medium text-zinc-200 backdrop-blur-md shadow-sm mb-6 group hover:border-white/30 transition-all cursor-pointer"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        <span>Founder &amp; CEO @ Mindfries &middot; AI Systems Engineer</span>
        <ArrowRight size={13} className="text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
      </a>

      {/* Massive Centered Headline (Motion.dev & Magic UI Startup Style) */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-4">
        {meta.name[0]} {meta.name[1]}
        <br />
        <span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
          AI Systems &amp; Robotics Engineer
        </span>
      </h1>

      {/* Subheadline */}
      <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8">
        Founder &amp; CEO at <strong>Mindfries</strong>, Smart India Hackathon National Finalist, and architect of <strong>DRISHTI-UGV</strong> (ROS 2 autonomous navigation stack). Specializing in AI/ML pipelines, robotics SLAM, and distributed engineering.
      </p>

      {/* CTA Buttons (Magic UI Startup Style) */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <a
          href={featured?.url || 'https://mindfries.com'}
          target="_blank"
          rel="noopener noreferrer"
          className="magic-btn-primary"
        >
          <span>Explore Mindfries</span>
          <ExternalLink size={15} />
        </a>

        {meta.links.map((link) => {
          const Icon = linkIcons[link.label];
          const external = !link.url.startsWith('mailto:');
          return (
            <a
              key={link.label}
              href={link.url}
              className="magic-btn-secondary"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {Icon && <Icon size={14} aria-hidden="true" />}
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>

      {/* Full-Width Centered Hero Mockup with Magic UI Border Beam */}
      <HeroVisual name={featured?.name} url={featured?.url} />

      {/* Capabilities / Tech Stack Strip */}
      <div className="w-full max-w-3xl mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-2">
        <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mr-2">
          Core Technologies:
        </span>
        {capabilities.map((tech) => (
          <span key={tech} className="magic-chip">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
