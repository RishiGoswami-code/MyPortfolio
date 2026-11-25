import React from 'react';
import { Mail } from 'lucide-react';
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
    <div className="w-full pt-12 sm:pt-16 pb-10 sm:pb-14 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-10 lg:gap-12">
      <div className="flex flex-col gap-6 min-w-0">
        <div className="flex flex-col gap-3">
          {/* Status signature */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--positive)] inline-block" aria-hidden="true" />
            <span className="font-mono text-[12px] text-[var(--text-muted)] tracking-tight">
              Available for research & AI systems
            </span>
          </div>

          <h1
            className="text-[44px] sm:text-[60px] xl:text-[68px] leading-[1.05] font-normal text-[var(--text-primary)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {meta.name[0]} {meta.name[1]}
          </h1>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[15px] sm:text-[16px]">
            {meta.role && (
              <>
                <span className="font-medium text-[var(--accent)]">
                  {meta.role}
                </span>
                <span aria-hidden="true" className="text-[var(--text-muted)]">/</span>
              </>
            )}
            <span className="text-[var(--text-secondary)] font-normal">
              {meta.title}
            </span>
          </div>
        </div>

        <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] max-w-[560px] leading-[1.7]">
          {meta.summary}
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          {meta.links.map((link) => {
            const Icon = linkIcons[link.label];
            const external = !link.url.startsWith('mailto:');
            return (
              <a
                key={link.label}
                href={link.url}
                className="social-pill"
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
