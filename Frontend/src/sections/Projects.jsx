import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const myProjects = [
    {
      title: "HighPulse.ai",
      status: "STABLE",
      description: "End-to-end social media analyzer normalizing YouTube, Reddit, and X data using Gemini API for sentiment mapping.",
      tech: ["Python", "Flask", "Gemini API", "BeautifulSoup"],
      githubLink: "https://github.com/RishiGoswami-code/highpulse",
      liveLink: "https://highpulse.ai"
    },
    {
      title: "Presensync",
      status: "BETA",
      description: "Fraud-resistant attendance system verifying identity via GPS, QR codes, facial recognition, and IP checks.",
      tech: ["FastAPI", "Firestore", "Python", "Computer Vision"],
      githubLink: "https://github.com/RishiGoswami-code/presensync",
      liveLink: "#"
    },
    {
      title: "Viking Validators (SIH Finalist)",
      status: "STAGING",
      description: "Automated verification system for complex workflows. Built during Smart India Hackathon finals.",
      tech: ["Node.js", "Docker", "Go", "Redis"],
      githubLink: "https://github.com/RishiGoswami-code/viking-validators",
      liveLink: "#"
    },
    {
      title: "Sendlume",
      status: "PRODUCTION",
      description: "I am a fullstack engineer there. Building real-time, signal-driven systems and scalable digital products.",
      tech: ["React", "FastAPI", "NLP", "Financial Modeling"],
      githubLink: "https://github.com/RishiGoswami-code/ragnar",
      liveLink: "https://ragnar.com"
    }
  ];

  return (
    <div id="showcase" className="bg-white">
      <div className="mb-12">
        <span className="text-[8px] font-bold uppercase tracking-widest text-black mb-2 block">
          LOG_SHOWCASE_0.1
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black uppercase leading-none">
          SYSTEM <span className="text-zinc-200">TIMELINE</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-100 border border-zinc-100">
        {myProjects.map((project, index) => (
          <div key={index} className="bg-white">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;