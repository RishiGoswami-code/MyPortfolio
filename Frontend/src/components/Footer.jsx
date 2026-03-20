import React from 'react';
import { SiGithub, SiLinkedin, SiX, SiInstagram } from 'react-icons/si';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { Icon: SiGithub, href: "https://github.com/RishiGoswami-code", label: "GitHub" },
    { Icon: SiLinkedin, href: "https://www.linkedin.com/in/chandan-giri-307927247/", label: "LinkedIn" },
    { Icon: SiX, href: "https://x.com/RishiGoswamii?t=AaNSsEc463OjvP2gVOkyvQ&s=09", label: "X" },
    { Icon: SiInstagram, href: "https://www.instagram.com/chandu__tx?igsh=MWE0c2NycGFjczh3Mg==", label: "Instagram" }
  ];

  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 px-2">

          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-base border-2 border-black">CG</div>
              <h2 className="text-3xl font-black tracking-tighter text-black uppercase">CHANDAN<br />GIRI</h2>
            </div>
            <p className="text-zinc-400 text-[9px] leading-relaxed max-w-sm uppercase font-mono">
              // SYS_LOG: SOFTWARE ARCHITECT & ENGINEER.
              ENGINEERING DIGITAL PRODUCTS THAT BRIDGE THE GAP BETWEEN COMPLEX LOGIC AND MARKET NECESSITY.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-none border border-zinc-100 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-black hover:border-black transition-all"
                  aria-label={social.label}
                >
                  <social.Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[7px] uppercase tracking-[0.4em] font-black text-zinc-300 mb-6">/ NAVIGATION_UI</h4>
            <ul className="space-y-3 text-[8px] font-black uppercase tracking-widest text-zinc-400">
              <li><a href="#hero" className="hover:text-black transition-colors block">:: HOME_ORIGIN</a></li>
              <li><a href="#about" className="hover:text-black transition-colors block">:: ABOUT_NODE</a></li>
              <li><a href="#showcase" className="hover:text-black transition-colors block">:: SHOWCASE_01</a></li>
              <li><a href="#services" className="hover:text-black transition-colors block">:: SERVICES_EXP</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[7px] uppercase tracking-[0.4em] font-black text-zinc-300">DIRECT_LINK</h4>
            <div className="space-y-4">
              <a
                href="/Chandan Giri Resume.pdf"
                download
                className="w-full bg-[#ff0000] text-white py-4 rounded-none font-black uppercase tracking-widest text-[11px] hover:bg-black transition-all border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2"
              >
                INITIALIZE_CONNECTION
              </a>
              <a href="tel:+919628068195" className="group flex items-center gap-3 text-zinc-400 hover:text-black transition-colors">
                <div className="w-8 h-8 rounded-none bg-zinc-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all border border-zinc-900">
                  <FiPhone size={12} />
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest font-mono">+91 96280_68195</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[7px] uppercase tracking-widest text-zinc-200 font-bold">
            © 2026 CHANDAN GIRI // DATA_CORE_V.0.2
          </p>
          <span className="text-[8px] font-black uppercase text-black tracking-widest">
            LATENCY: 12ms | STATUS: OPTIMIZED
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;