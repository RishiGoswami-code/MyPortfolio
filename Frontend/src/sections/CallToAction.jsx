import React from 'react';
import { FiMail, FiExternalLink } from 'react-icons/fi';

const CallToAction = () => {
  return (
    <div id="contact" className="relative group bg-black text-white p-12 md:p-24 overflow-hidden rounded-none">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-white transition-colors z-20" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-white transition-colors z-20" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 group-hover:border-white transition-colors z-20" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-white transition-colors z-20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8 block">
          / Available for new assets
        </span>
        <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-12 leading-[0.85] uppercase">
          Build <br /> <span className="text-zinc-700">Something</span> <br /> Iconic
        </h2>

        <div className="flex flex-wrap gap-6 pt-8">
          <button className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all rounded-none">
            Start a Project
          </button>
          <button className="px-10 py-5 bg-transparent border border-zinc-800 text-white font-bold uppercase tracking-widest text-xs hover:bg-zinc-900 transition-all rounded-none flex items-center gap-3">
            <FiMail /> Say Hello
          </button>
        </div>
      </div>

      {/* Marquee Background */}
      <div className="absolute bottom-0 left-0 w-full py-12 border-t border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
        <div className="flex overflow-hidden group/marquee">
          <div className="flex animate-marquee whitespace-nowrap min-w-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6">
                {['SCALABLE', 'SECURE', 'PERFORMANT', 'AI-DRIVEN', 'MODERN', 'ELITE'].map((text) => (
                  <span key={text} className="text-4xl md:text-6xl font-black text-zinc-800/30 group-hover/marquee:text-zinc-500/50 transition-colors uppercase tracking-widest italic">
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;