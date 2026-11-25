import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
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

export default function Hero() {
  const { meta, featured } = usePortfolioData();

  return (
    <div className="w-full pt-12 sm:pt-20 pb-10 sm:pb-16 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-12 lg:gap-14">
      <div className="flex flex-col gap-6 min-w-0">
        {/* Magic UI Shimmer Announcement Pill */}
        <div className="relative inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-zinc-900/80 text-[12.5px] font-medium text-zinc-200 w-fit backdrop-blur-md shadow-sm overflow-hidden group hover:border-white/30 transition-all">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span>Founder &amp; CEO @ Mindfries · AI Systems Engineer</span>
          <ArrowRight size={13} className="text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
        </div>

        {/* Headline with high-end Motion.dev gradient text */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            {meta.name[0]}{' '}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              {meta.name[1]}
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-[16px] sm:text-[18px]">
            {meta.role && (
              <>
                <span className="font-semibold text-indigo-400">
                  {meta.role}
                </span>
                <span aria-hidden="true" className="text-zinc-600">/</span>
              </>
            )}
            <span className="text-zinc-300 font-normal">
              {meta.title}
            </span>
          </div>
        </div>

        <p className="text-[15.5px] sm:text-[16.5px] text-zinc-400 max-w-[560px] leading-[1.75]">
          {meta.summary}
        </p>

        {/* Social Pill Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {meta.links.map((link) => {
            const Icon = linkIcons[link.label];
            const external = !link.url.startsWith('mailto:');
            return (
              <a
                key={link.label}
                href={link.url}
                className="magic-btn"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {Icon && <Icon size={14} aria-hidden="true" />}
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      <HeroVisual name={featured?.name} url={featured?.url} />
    </div>
  );
}
