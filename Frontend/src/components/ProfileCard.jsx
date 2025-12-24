import React from 'react';
// Note: You can install react-icons using: npm install react-icons
import { 
  SiReact, 
  SiNodedotjs, 
  SiFastapi, 
  SiExpress, 
  SiPython, 
  SiJavascript, 
  SiMongodb, 
  SiFlask 
} from 'react-icons/si';

const ProfileCard = () => {
  const skills = [
    { Icon: SiReact, color: '#61DAFB', name: 'React' },
    { Icon: SiNodedotjs, color: '#646CFF', name: 'Node.js' },
    { Icon: SiFastapi, color: '#ffffff', name: 'FastAPI' },
    { Icon: SiExpress, color: '#FF9900', name: 'Express' },
    { Icon: SiPython, color: '#3776AB', name: 'Python' },
    { Icon: SiJavascript, color: '#F7DF1E', name: 'JS' },
    { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
    { Icon: SiFlask, color: '#ffffff', name: 'Flask' },
  ];

  return (
    <div className="w-full max-w-[320px] bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-[32px] shadow-2xl transition-all duration-500 hover:border-white/30">
      
      {/* Header Area */}
      <div className="mb-6">
        <h3 className="font-pirata text-2xl tracking-tighter uppercase text-white mb-4">
          Focus
        </h3>
        <ul className="space-y-3">
          {[
            { label: 'Work', val: 'Freelance' },
            { label: 'Role', val: 'Entrepreneur' },
            { label: 'Map', val: 'Remote' }
          ].map((item) => (
            <li key={item.label} className="flex justify-between items-center border-b border-white/5 pb-1.5">
              <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">{item.label}</span>
              <span className="text-[11px] font-bold text-white uppercase tracking-tight">{item.val}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills Area with Logos */}
      <div className="mb-8">
        <p className="text-[9px] uppercase tracking-[0.2em] font-black mb-4 text-white/30 text-center">Tech Stack</p>
        <div className="grid grid-cols-4 gap-4 place-items-center">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="group relative flex items-center justify-center w-10 h-10 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              title={skill.name}
            >
              <skill.Icon 
                size={20} 
                className="text-white/40 group-hover:text-white transition-colors duration-300" 
                style={{ color: skill.color === '#ffffff' ? undefined : '' }} // Optional: Use real colors on hover
              />
              
              {/* Tooltip on Hover */}
              <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all bg-white text-black text-[8px] font-bold px-2 py-1 rounded-md uppercase">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full bg-white text-black py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5">
        Download Resume
      </button>
    </div>
  );
};

export default ProfileCard;