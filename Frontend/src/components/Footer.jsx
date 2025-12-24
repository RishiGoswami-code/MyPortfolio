import React from 'react';
import { SiGithub, SiLinkedin, SiX, SiInstagram } from 'react-icons/si';
import { FiArrowUp, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { Icon: SiGithub, href: "https://github.com/RishiGoswami-code", label: "GitHub" },
    { Icon: SiLinkedin, href: "https://www.linkedin.com/in/chandan-giri-307927247/", label: "LinkedIn" },
    { Icon: SiX, href: "https://x.com/RishiGoswamii?t=AaNSsEc463OjvP2gVOkyvQ&s=09", label: "X" },
    { Icon: SiInstagram, href: "https://www.instagram.com/chandu__tx?igsh=MWE0c2NycGFjczh3Mg==", label: "Instagram" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-6 md:px-12 relative z-40">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-pirata text-5xl md:text-6xl tracking-tighter uppercase text-white">
              Chandan <span className="text-white/20">Giri</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Software Entrepreneur & Freelance Architect. 
              Engineering digital assets that bridge the gap between complex logic and commercial success.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#eb28b0] hover:border-[#eb28b0] transition-all duration-500"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">Navigation</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#showcase" className="hover:text-white transition-colors">Works</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">Direct Channel</h4>
            <div className="space-y-4">
              <a href="mailto:chandangi2005@gmail.com" className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#eb28b0]/20 transition-colors">
                  <FiMail size={14} className="group-hover:text-[#eb28b0]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">chandangi2005@gmail.com</span>
              </a>
              <a href="tel:+919628068195" className="group flex items-center gap-4 text-zinc-400 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#eb28b0]/20 transition-colors">
                  <FiPhone size={14} className="group-hover:text-[#eb28b0]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">+91 96280 68195</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.5em] text-white/10 font-black">
            © 2025 Chandan Giri // Built with React & Tailwind v4
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-[#eb28b0] transition-all duration-500"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white/40 group-hover:text-white">Back to Top</span>
            <FiArrowUp size={14} className="text-white/40 group-hover:text-[#eb28b0] group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;