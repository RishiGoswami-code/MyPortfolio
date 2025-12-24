import React from 'react';
import ImgCard from '../components/ImgCard';
import Sidebar from '../components/Sidebar';

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0a] pt-32 pb-10 px-6 md:px-12 flex items-center">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT: Image Card (5 columns) */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <ImgCard src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop" />
        </div>


        {/* RIGHT: Typography & Content (4 columns) */}
        <div className="lg:col-span-4 order-1 lg:order-3 flex flex-col gap-8">
          <div className="space-y-4">
            <span className="text-white/40 text-xs tracking-widest uppercase font-semibold">/featured</span>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Boost Your Business with us...
            </p>
          </div>

          {/* Brand Introduction */}
          <div className="mt-10">
            <span className="px-4 py-1.5 rounded-full border border-white/10 text-white/40 text-[10px] uppercase tracking-widest">
              /new-chapter-of-life
            </span>
            <h2 className="mt-6 font-pirata text-5xl md:text-7xl text-white leading-[0.9] tracking-tighter">
              I don't  <span className="text-white/40">write code</span> BUT LIFE
            </h2>

            <button className="mt-8 px-10 py-3 bg-zinc-800 hover:bg-white hover:text-black text-white rounded-full text-sm font-bold transition-all duration-500 uppercase">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;