import React, { useState, useEffect } from 'react';
import DiscussionButton from './DiscussionButton';

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full z-50 bg-white border-b-2 border-black h-12 flex items-center">
      <div className="w-full px-4 md:px-12 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center">
          <a href="#hero" className="font-black text-base tracking-tighter text-black uppercase bg-black text-white px-2 py-0.5 border-2 border-black">
            CG<span className="text-zinc-400">.03</span>
          </a>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden lg:flex items-center gap-2">
          {['Showcase', 'About', 'Stats', 'Services'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-1 border-2 border-black text-[9px] font-black uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white transition-all bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-[-1px] translate-y-[-1px] hover:translate-x-0 hover:translate-y-0"
            >
              {item}
            </a>
          ))}
        </div>

        {/* ACTION BUTTON */}
        <div className="flex items-center">
          <a
            href="mailto:chandangi2005@gmail.com"
            className="px-6 py-1.5 bg-[#ff0000] text-white rounded-none text-[9px] font-black uppercase tracking-widest hover:bg-black transition-all border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            SYS_INIT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;