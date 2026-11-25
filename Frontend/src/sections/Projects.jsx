import React from 'react';
import { ArrowUpRight, ShieldCheck, Cpu, GraduationCap, ChartLine, BookOpen, FolderGit2 } from 'lucide-react';
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

function Tag({ children }) {
  return <span className="chip">{children}</span>;
}

function FeaturedProject({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-featured group sm:col-span-2 grid grid-cols-1 md:grid-cols-[1fr_240px] gap-8 p-6 sm:p-8"
    >
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-[var(--surface-raised)] border border-[var(--hairline)] text-[var(--accent)]">
            {project.badge}
          </span>
          <span className="eyebrow">{project.eyebrow}</span>
        </div>

        <div className="flex items-center gap-3.5 mb-3">
          <img
            src={logos[project.name]}
            alt=""
            width="40"
            height="40"
            className="w-10 h-10 shrink-0 rounded-lg bg-white border border-[var(--hairline)] p-1 object-contain"
          />
          <h3
            className="text-[28px] sm:text-[34px] leading-[1.15] text-[var(--text-primary)] font-normal"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.name}
          </h3>
        </div>

        <p className="text-[16px] text-[var(--accent)] mb-3 font-medium">
          {project.tagline}
        </p>

        <p className="text-[14.5px] text-[var(--text-secondary)] leading-[1.7] max-w-[620px]">
          {project.desc}
        </p>
      </div>

      <div className="flex flex-col justify-between gap-6 md:border-l md:border-[var(--hairline)] md:pl-8">
        <ul className="flex flex-col gap-2.5">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] text-[var(--text-secondary)] leading-[1.5]">
              <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[var(--accent)] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <span className="inline-flex items-center gap-1.5 text-[13px] font-mono text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
          <span>{project.urlLabel}</span>
          <ArrowUpRight size={15} className="transition-transform duration-150 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  const { featured, projects } = usePortfolioData();

  return (
    <div className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 pb-16">
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
            className={`card group flex flex-col h-full p-6 ${spanLast ? 'sm:col-span-2' : ''}`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--surface-raised)] border border-[var(--hairline)] text-[var(--text-secondary)]">
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="eyebrow">{project.eyebrow}</span>
              </span>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-[var(--text-muted)] transition-colors duration-150 group-hover:text-[var(--accent)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </div>

            <h3
              className="text-[22px] leading-[1.25] text-[var(--text-primary)] font-normal mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {project.name}
            </h3>

            <p className="text-[14px] text-[var(--text-secondary)] line-clamp-2 mb-6 leading-[1.65]">
              {project.desc}
            </p>

            <div className="mt-auto mb-5">
              <div className="font-mono text-[24px] text-[var(--text-primary)] font-normal tabular-nums leading-none">
                {project.stat}
              </div>
              <div className="font-mono text-[11px] text-[var(--text-muted)] mt-1 tracking-tight">
                {project.statLabel}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </a>
        );
      })}
    </div>
  );
}
