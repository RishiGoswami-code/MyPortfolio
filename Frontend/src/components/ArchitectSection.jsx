import React from 'react';

const ArchitectSection = () => {
  return (
    <div className="relative group py-6 w-full overflow-hidden">
      {/* Background Decorative Element */}
      <span className="absolute -right-0 -bottom-10 text-[12rem] font-pirata text-white/[0.05] select-none pointer-events-none group-hover:text-white/[0.8] transition-colors duration-1000">
        CG
      </span>

      <div className="relative z-10 flex flex-col md:flex-row gap-12 items-stretch">
        {/* Left: Branding & Core ID */}
        <div className="flex flex-col gap-4 min-w-[280px]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">/ ENTREPRENEURSHIP</span>
          </div>
          
          <h3 className="text-4xl font-bold tracking-tighter text-white">
            <span className="font-pirata italic text-white/50">The</span> <br /> 
            RAGNAR
          </h3>
          
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Founder of <a href="#">Ragnar.com</a> <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArchitectSection;