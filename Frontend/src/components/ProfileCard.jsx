import { FiUser, FiMapPin, FiMail } from 'react-icons/fi';
import { SiReact, SiPython, SiFastapi, SiTailwindcss, SiJavascript } from 'react-icons/si';

const ProfileCard = () => {
  return (
    <div className="relative group w-full max-w-sm bg-white border border-zinc-100 rounded-none overflow-hidden transition-all duration-300 hover:border-zinc-300 shadow-sm hover:shadow-md">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-200 group-hover:border-black transition-colors z-20" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-200 group-hover:border-black transition-colors z-20" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-200 group-hover:border-black transition-colors z-20" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-200 group-hover:border-black transition-colors z-20" />

      {/* Header Profile Info */}
      <div className="p-6 border-b border-zinc-100 bg-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-none bg-black flex flex-col items-center justify-center text-white border border-black hover:bg-white hover:text-black transition-all">
            <span className="text-[9px] font-black leading-none">SYS</span>
            <span className="text-base font-black tracking-tighter">CG</span>
          </div>
          <div>
            <h4 className="text-base font-black tracking-tighter text-black uppercase leading-none mb-1">Chandan Giri</h4>
            <p className="text-[9px] font-bold uppercase tracking-widest text-black font-mono">NODE_UID: 2005-IND-01</p>
          </div>
        </div>

        <div className="space-y-1.5 pt-2">
          <div className="flex items-center gap-2 text-[10px] text-black font-mono uppercase">
            <FiMapPin size={8} className="text-black" />
            <span>Lucknow, India</span>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chandangi2005@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[10px] text-black font-mono uppercase hover:text-[#ff0000] transition-colors"
          >
            <FiMail size={8} className="text-black" />
            <span>chandangi2005@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Experience / Stats Grid */}
      <div className="grid grid-cols-2 border-b-2 border-black">
        <div className="p-3 border-r-2 border-black flex flex-col items-center group/item hover:bg-zinc-50 transition-colors">
          <span className="text-lg font-black tracking-tighter text-black leading-none">01</span>
          <span className="text-[7px] font-bold uppercase tracking-widest text-black mt-1">Year_Exp</span>
        </div>
        <div className="p-3 flex flex-col items-center group/item hover:bg-zinc-50 transition-colors">
          <span className="text-lg font-black tracking-tighter text-black leading-none">40+</span>
          <span className="text-[7px] font-bold uppercase tracking-widest text-black mt-1">Repo_Count</span>
        </div>
      </div>

      {/* Skills Marquee / List */}
      <div className="p-6 bg-white">
        <div className="flex flex-wrap gap-2">
          {[<SiReact />, <SiPython />, <SiFastapi />, <SiTailwindcss />, <SiJavascript />].map((icon, idx) => (
            <div key={idx} className="w-9 h-9 border border-zinc-100 rounded-none flex items-center justify-center text-zinc-300 hover:text-black hover:border-zinc-300 transition-all cursor-crosshair">
              {icon}
            </div>
          ))}
        </div>
      </div>
      {/* Action Button */}
      <div className="p-6 pt-0">
        <a
          href="/Chandan Giri Resume.pdf"
          download
          className="w-full bg-[#ff0000] text-white py-3 rounded-none font-black uppercase tracking-widest text-[9px] hover:bg-black transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-[-2px] translate-y-[-2px] hover:translate-x-0 hover:translate-y-0 flex items-center justify-center"
        >
          DOWNLOAD_RESUME_v.02
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;