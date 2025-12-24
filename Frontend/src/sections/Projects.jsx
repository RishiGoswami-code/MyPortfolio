import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const myProjects = [
    {
      title: "HighPulse.ai",
      description: "End-to-end social media analyzer normalizing YouTube, Reddit, and X data using Gemini API for sentiment mapping.",
      tech: ["Python", "Flask", "Gemini API", "BeautifulSoup"],
      githubLink: "https://github.com/yourusername/highpulse",
      liveLink: "https://highpulse.ai",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Presensync",
      description: "Fraud-resistant attendance system verifying identity via GPS, QR codes, facial recognition, and IP checks.",
      tech: ["FastAPI", "Firestore", "Python", "Computer Vision"],
      githubLink: "https://github.com/yourusername/presensync",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Viking Validators",
      description: "Fraud-detection engine comparing certificate features against patterns using CNNs and Random Forest.",
      tech: ["Express.js", "MongoDB", "CNN", "Scikit-Learn"],
      githubLink: "https://github.com/yourusername/viking-validators",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Ragnar.com",
      description: "Real-time, signal-driven trading system ingesting live market data and generating ML-based trade signals.",
      tech: ["React", "FastAPI", "NLP", "Financial Modeling"],
      githubLink: "https://github.com/yourusername/ragnar",
      liveLink: "https://ragnar.com",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section 
      id="showcase" 
      className="sticky top-0 min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
    >
      <div className="px-6 md:px-12 mb-8">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#eb28b0] font-bold mb-2 block">/ Project Roadmap</span>
        <h2 className="font-pirata text-5xl md:text-8xl tracking-tighter uppercase leading-none">
          Build <span className="text-white/20">Timeline</span>
        </h2>
      </div>

      <div className="relative h-[600px] flex items-center overflow-x-auto no-scrollbar scroll-smooth snap-x">
        
        {/* THE CENTRAL TIMELINE TRUNK */}
        <div className="absolute top-1/2 left-0 w-[3000px] h-[2px] bg-gradient-to-r from-[#eb28b0]/50 via-white/20 to-transparent z-0" />

        <div className="flex items-center gap-12 md:gap-24 px-12 md:px-24">
          {myProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col items-center snap-center ${isEven ? 'justify-end pb-32' : 'justify-start pt-32'} h-full min-w-[350px] md:min-w-[500px]`}>
                
                {/* BRANCH LINE */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-[1px] bg-white/20 group-hover:bg-[#eb28b0] transition-colors duration-500 z-10 
                  ${isEven ? 'bottom-1/2 h-32' : 'top-1/2 h-32'}`} 
                />

                {/* TIMELINE NODE */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-white/30 z-20 group-hover:border-[#eb28b0]">
                   <div className="w-full h-full rounded-full bg-[#eb28b0] animate-ping opacity-20" />
                </div>

                {/* THE CARD */}
                <div className="z-30 hover:scale-105 transition-transform duration-500">
                  <ProjectCard {...project} />
                </div>

                {/* DATE / VERSION LABEL */}
                <div className={`absolute left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-widest text-white/30 
                  ${isEven ? 'bottom-0' : 'top-0'}`}>
                  v.0{index + 1} // 2025
                </div>
              </div>
            );
          })}
          
          <div className="min-w-[200px]" />
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Projects;