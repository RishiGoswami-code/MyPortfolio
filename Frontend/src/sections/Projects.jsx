import React from 'react';
import { ArrowUpRight, ShieldCheck, Cpu, GraduationCap, ChartLine, BookOpen, FolderGit2, Check, Sparkles } from 'lucide-react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import mindfriesLogo from '../assets/mindfries-logo.png';

const logos = { Mindfries: mindfriesLogo };

const projectIcons = {
  'Viking Validators': ShieldCheck,
  'DRISHTI-UGV': Cpu,
  OzymorLab: GraduationCap,
  'Quantitative Finance Models': ChartLine,
  'CodeGraphContext Docs': BookOpen,
};

function FeaturedProject({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bento-card group sm:col-span-2 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 p-7 sm:p-9 border border-indigo-500/25 hover:border-indigo-500/50"
    >
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center gap-1.5">
            <Sparkles size={12} />
            {project.badge}
          </span>
          <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
            {project.eyebrow}
          </span>
        </div>

        <div className="flex items-center gap-3.5 mb-3">
          <img
            src={logos[project.name]}
            alt=""
            width="44"
            height="44"
            className="w-11 h-11 shrink-0 rounded-xl bg-white border border-white/10 p-1 object-contain shadow-md"
          />
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {project.name}
          </h3>
        </div>

        <p className="text-[17px] text-indigo-300 font-medium mb-3">
          {project.tagline}
        </p>

        <p className="text-[15px] text-zinc-400 leading-relaxed max-w-[620px]">
          {project.desc}
        </p>
      </div>

      <div className="flex flex-col justify-between gap-6 md:border-l md:border-white/10 md:pl-8">
        <ul className="flex flex-col gap-3">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-zinc-300">
              <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0">
                <Check size={11} strokeWidth={3} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="inline-flex items-center gap-2 text-[14px] font-medium text-white group-hover:text-indigo-400 transition-colors pt-4">
          <span>Explore platform ({project.urlLabel})</span>
          <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const { featured, projects } = usePortfolioData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 pb-16">
      {featured && <FeaturedProject project={featured} />}

      {projects.map((project, idx) => {
        const Icon = projectIcons[project.name] || FolderGit2;
        const spanLast = projects.length % 2 === 1 && idx === projects.length - 1;
        return (
          <a
            key={project.name}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`bento-card group flex flex-col h-full p-6 sm:p-7 ${spanLast ? 'sm:col-span-2' : ''}`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-zinc-300 group-hover:text-white transition-colors">
                  <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                  {project.eyebrow}
                </span>
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-zinc-500 transition-all duration-200 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              {project.name}
            </h3>

            <p className="text-[14px] text-zinc-400 line-clamp-3 mb-6 leading-relaxed">
              {project.desc}
            </p>

            <div className="mt-auto mb-6">
              <div className="font-mono text-[26px] font-semibold text-white tracking-tight">
                {project.stat}
              </div>
              <div className="font-mono text-[11.5px] text-zinc-400 mt-0.5">
                {project.statLabel}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span key={tech} className="magic-chip">
                  {tech}
                </span>
              ))}
            </div>
          </a>
        );
      })}
    </div>
  );
}
