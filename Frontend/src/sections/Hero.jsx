import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Hero() {
  const { meta, featured } = usePortfolioData();
  const [scrollY, setScrollY] = useState(0);

  // Subtle Parallax Effect on Rover Image
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--line)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-12 lg:gap-8">
        {/* Left Side: Headlines & Action Buttons matching Image 1 */}
        <div className="flex flex-col z-10">
          <h1 className="font-editorial text-[50px] sm:text-[76px] xl:text-[88px] font-light leading-[1.03] tracking-tight text-[#f4f4f5] mb-6">
            Building <br />
            <span className="italic font-normal text-[var(--accent)] font-editorial">
              intelligent systems
            </span>{' '}
            <br />
            for the real world.
          </h1>

          <p className="text-[16px] sm:text-[18px] text-[var(--fg-muted)] max-w-lg leading-[1.7] mb-8 font-light">
            Founder of Mindfries. Designing AI systems and autonomous robotics, from research to deployment.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={featured?.url || 'https://mindfries.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cream"
            >
              <span>Explore Mindfries</span>
              <ArrowUpRight size={14} />
            </a>

            <a href="#systems" className="btn-outline">
              <span>View Projects</span>
            </a>
          </div>
        </div>

        {/* Right Side: DRISHTI-UGV Rover Visual on Rocky Terrain with Parallax */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-[580px] transition-transform duration-100 ease-out"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.08, 40)}px)`,
            }}
          >
            <img
              src="/drishti-hero.jpg"
              alt="DRISHTI-UGV Autonomous Ground Vehicle"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
