import React, { useState, useEffect } from 'react';
import DiscussionButton from './DiscussionButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 px-2 sm:px-6 py-4">
      {/* 1. Changed justify-between to ensure even spacing.
        2. Removed excessive padding-x (px) so content hits the rounded edges.
      */}
      <div className="max-w-full mx-auto flex items-center justify-between bg-black/90 backdrop-blur-xl border border-white/10 p-1 md:p-2 rounded-full shadow-2xl overflow-hidden">
        
        {/* LEFT SLOT: Heading (Your Name) - Moved to far left */}
        <div className="flex-1 flex justify-start items-center pl-4 md:pl-8">
          <div className="flex flex-col items-start overflow-hidden h-[30px] md:h-[50px] justify-center relative">
            <h1 className={`font-pirata text-xl sm:text-2xl md:text-5xl transition-all duration-700 ease-in-out uppercase tracking-tighter whitespace-nowrap text-white ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
              Rishi Goswami
            </h1>
            <h1 className={`font-pirata text-xl sm:text-2xl md:text-5xl transition-all duration-700 ease-in-out uppercase tracking-tighter absolute whitespace-nowrap text-[#eb28b0] ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              Entrepreneur
            </h1>
          </div>
        </div>

        {/* CENTER SLOT: Info Points - Stays centered */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-4 lg:gap-10">
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[8px] md:text-[10px] text-white/40 uppercase font-medium">Portfolio of</span>
            <span className="text-[10px] md:text-xs text-white/90 font-bold uppercase tracking-widest">Chandan Giri</span>
          </div>
          
          <div className="h-6 w-[1px] bg-white/20"></div>

          <div className="flex gap-4 lg:gap-8">
            {['Showcase', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] md:text-xs text-white/50 hover:text-white transition-all uppercase tracking-[0.2em] font-semibold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SLOT: Chat Button - Moved to far right */}
        <div className="flex-1 flex justify-end pr-1">
          <DiscussionButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;