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
    <div className="w-full pt-14 sm:pt-20 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-12 lg:gap-10">
      <div className="flex flex-col gap-6 min-w-0">
        <div className="flex flex-col gap-3">
          <h1 className="text-[60px] sm:text-[88px] xl:text-[96px] leading-[1.02] font-normal" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-[var(--ink)]">{meta.name[0]}</span>{' '}
            <em className="text-gradient italic">{meta.name[1]}</em>
          </h1>

          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {meta.role && (
              <>
                <span className="text-[20px] sm:text-[24px] font-semibold text-[var(--violet)] tracking-[-0.01em]">
                  {meta.role}
                </span>
                <span aria-hidden="true" className="hidden sm:inline text-[var(--ink-ghost)]">·</span>
              </>
            )}
            <span className="text-[24px] sm:text-[28px] text-[var(--ink)] italic" style={{ fontFamily: 'var(--font-display)' }}>
              {meta.title}
            </span>
          </p>

          <span aria-hidden="true" className="block w-12 h-[3px] rounded-full bg-[var(--violet)] mt-2" />
        </div>

        <p className="text-[17px] sm:text-[18px] font-light text-[var(--ink)] max-w-[560px] leading-[1.8]">
          {meta.summary}
        </p>

        <div className="flex flex-wrap items-center gap-2.5 mt-1">
          {meta.links.map((link) => {
            const Icon = linkIcons[link.label];
            const external = !link.url.startsWith('mailto:');
            return (
              <a
                key={link.label}
                href={link.url}
                title={link.label}
                className="social-pill"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {Icon && <Icon size={15} aria-hidden="true" />}
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
