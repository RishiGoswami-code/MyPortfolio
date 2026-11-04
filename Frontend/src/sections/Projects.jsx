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
      className="card card-featured group sm:col-span-2 grid grid-cols-1 md:grid-cols-[1fr_220px] gap-8 p-6 sm:p-8"
    >
      <div className="flex flex-col min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="badge-featured">{project.badge}</span>
          <span className="eyebrow">{project.eyebrow}</span>
        </div>

        <div className="flex items-center gap-4 mb-3">
          <img
            src={logos[project.name]}
            alt=""
            width="48"
            height="48"
            className="w-12 h-12 shrink-0 rounded-[10px] bg-white border-[0.5px] border-[var(--line)] p-1.5"
          />
          <h3 className="text-[34px] sm:text-[40px] leading-[1.1] text-[var(--ink)] font-normal" style={{ fontFamily: 'var(--font-display)' }}>
            {project.name}
          </h3>
        </div>

        <p className="text-[21px] sm:text-[24px] italic text-[var(--gold)] leading-[1.35] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          {project.tagline}
        </p>

        <p className="text-[16px] font-light text-[var(--ink-light)] leading-[1.75] max-w-[620px]">
          {project.desc}
        </p>
      </div>

      <div className="flex flex-col justify-between gap-6 md:border-l-[0.5px] md:border-[var(--line)] md:pl-8">
        <ul className="flex flex-col gap-3">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--ink)] leading-[1.5]">
              <span className="mt-[8px] w-[6px] h-[6px] rounded-full bg-[var(--gold)] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1 text-[14px] font-medium tracking-[0.06em] text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors">
          {project.urlLabel}
          <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  const { featured, projects } = usePortfolioData();

  return (
    <div className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8 pb-16">
      {featured && <FeaturedProject project={featured} />}

      {projects.map((project, idx) => {
        const Icon = projectIcons[project.name] || FolderGit2;
        // An odd last card spans the full row so the grid never ends with a hole.
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
            <span className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--cream)] border-[0.5px] border-[var(--gold-light)] text-[var(--gold)]">
                <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="eyebrow">{project.eyebrow}</span>
            </span>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-[var(--ink-ghost)] transition-all duration-200 group-hover:text-[var(--gold)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            />
          </div>
          <h3 className="text-[28px] leading-[1.2] text-[var(--ink)] font-normal mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            {project.name}
          </h3>
          <p className="text-[16px] font-light text-[var(--ink-light)] line-clamp-2 mb-6 leading-[1.75]">
            {project.desc}
          </p>

          <div className="mt-auto mb-6">
            <div className="text-[36px] text-[var(--gold)] font-normal leading-none" style={{ fontFamily: 'var(--font-display)' }}>
              {project.stat}
            </div>
            <div className="text-[13px] text-[var(--ink-ghost)] font-normal mt-1">
              {project.statLabel}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
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
