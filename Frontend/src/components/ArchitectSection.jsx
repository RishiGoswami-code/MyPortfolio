import React from 'react';
import { FiDatabase, FiFigma, FiCpu } from 'react-icons/fi';

const ArchitectCard = ({ title, subtitle, icon }) => (
  <div className="relative group p-4 border-2 border-black bg-white hover:bg-zinc-50 transition-all flex items-center gap-3">
    <div className="text-black group-hover:text-black transition-colors text-sm">
      {icon}
    </div>
    <div>
      <h3 className="text-[10px] font-black tracking-tighter text-black uppercase leading-none mb-0.5">{title}</h3>
      <p className="text-[7px] font-bold tracking-widest text-black uppercase leading-none">{subtitle}</p>
    </div>
  </div>
);

const ArchitectSection = () => {
  return (
    <div className="grid grid-cols-1 gap-px bg-black border-2 border-black overflow-hidden">
      <ArchitectCard
        title="Logic_Layer"
        subtitle="Backend_Architect"
        icon={<FiDatabase />}
      />
      <ArchitectCard
        title="Visual_Asset"
        subtitle="Frontend_Engineer"
        icon={<FiFigma />}
      />
      <ArchitectCard
        title="Neural_Net"
        subtitle="AI_Integration"
        icon={<FiCpu />}
      />
    </div>
  );
};

export default ArchitectSection;