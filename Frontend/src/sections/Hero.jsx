import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaThreads } from 'react-icons/fa6';
import { usePortfolioData } from '../hooks/usePortfolioData';

const linkIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  X: FaXTwitter,
  Threads: FaThreads,
  Email: Mail,
};

export default function Hero() {
  const { meta } = usePortfolioData();

  return (
    <div className="w-full pt-16 pb-12">
      <div className="flex flex-col gap-6 max-w-2xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-[64px] sm:text-[96px] leading-[1.05] font-light" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-[var(--ink)]">{meta.name[0]}</span>{' '}
            <em className="text-gradient italic">{meta.name[1]}</em>
          </h1>
          <h2 className="text-[26px] sm:text-[28px] text-[var(--ink-light)] italic" style={{ fontFamily: 'var(--font-display)' }}>
            {meta.title}
          </h2>
        </div>

        <p className="text-[17px] sm:text-[18px] font-light text-[var(--ink)] max-w-[540px] leading-[1.85]">
          {meta.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-2">
          {meta.links.map((link) => {
            const Icon = linkIcons[link.label];
            const external = !link.url.startsWith('mailto:');
            return (
              <a
                key={link.label}
                href={link.url}
                aria-label={link.label}
                title={link.label}
                className="inline-flex items-center gap-2 h-10 px-4 rounded-full border-[0.5px] border-[var(--line)] bg-[var(--cream-dark)] text-[14px] text-[var(--ink-light)] transition-colors duration-200 hover:text-[var(--gold)] hover:border-[var(--gold-light)]"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {Icon && <Icon size={15} aria-hidden="true" />}
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
