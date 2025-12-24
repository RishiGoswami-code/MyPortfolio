import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> },
    { id: 'about', label: 'About', icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" /> },
    { id: 'showcase', label: 'Works', icon: <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /> },
    { id: 'services', label: 'Services', icon: <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M20 12H4M20 12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2" /> },
    { id: 'contact', label: 'Contact', icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently at the top of the viewport
      const offset = window.innerHeight / 3; // Trigger when section is 1/3rd down
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // In a sticky stack, the top-most visible section will have a rect.top <= offset
          // We check them in reverse or order to find the highest Z-index section currently visible
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll for better alignment with the unfolding effect
      const yOffset = -10; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-[100] hidden lg:block">
      <div className="flex items-center justify-center bg-zinc-950/90 backdrop-blur-3xl w-[76px] h-[420px] rounded-full shadow-2xl border border-white/10 p-2">
        <ul className="flex flex-col justify-between items-center h-full py-6 w-full relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id} className="relative flex items-center justify-center w-full">
                
                {/* AUTO POP-OUT LABEL */}
                <div className={`absolute right-16 px-3 py-1 bg-[#eb28b0] rounded-md transition-all duration-500 ease-out whitespace-nowrap pointer-events-none shadow-xl
                  ${isActive 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-8 scale-50'
                  }`}
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    {item.label}
                  </span>
                  <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#eb28b0] rotate-45" />
                </div>

                {/* THE ICON */}
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative z-10 p-3 rounded-full transition-all duration-700
                    ${isActive 
                      ? 'text-[#eb28b0] bg-white/10 scale-125 shadow-[0_0_30px_rgba(235,40,176,0.4)]' 
                      : 'text-white/20 hover:text-white/60'
                    }`}
                >
                  <svg 
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" 
                    strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"
                  >
                    {item.icon}
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;