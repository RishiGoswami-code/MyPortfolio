import React, { useState, useEffect } from 'react';
import { BookMarked, Star, Users, GitCommitHorizontal, ArrowUpRight } from 'lucide-react';

const USERNAME = 'RishiGoswami-code';
const DAYS = 182; // 26 full weeks

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

export default function GithubStats() {
  const [stats, setStats] = useState(null);
  const [days, setDays] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    Promise.allSettled([
      getJson(`https://api.github.com/users/${USERNAME}`),
      getJson(`https://api.github.com/users/${USERNAME}/repos?per_page=100`),
      getJson(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`),
    ]).then(([user, repos, contribs]) => {
      if (cancelled) return;

      const next = {};
      if (user.status === 'fulfilled') {
        next.repos = user.value.public_repos;
        next.followers = user.value.followers;
      }
      if (repos.status === 'fulfilled' && Array.isArray(repos.value)) {
        next.stars = repos.value.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
      }

      let recent = null;
      if (contribs.status === 'fulfilled') {
        const today = new Date().toISOString().slice(0, 10);
        const all = (contribs.value.contributions || []).filter((d) => d.date <= today);
        recent = all.slice(-DAYS);
        next.contributions = contribs.value.total?.lastYear;
      }

      const anything = Object.keys(next).length > 0 || recent;
      setStats(next);
      setDays(recent);
      setStatus(anything ? 'ready' : 'error');
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const getIntensity = (level) =>
    [
      'rgba(238, 240, 245, 0.05)',
      'rgba(76, 195, 138, 0.25)',
      'rgba(76, 195, 138, 0.50)',
      'rgba(76, 195, 138, 0.75)',
      '#4cc38a',
    ][level] ?? 'rgba(238, 240, 245, 0.05)';

  if (status === 'loading') {
    return (
      <div className="pt-6 pb-16 flex items-center justify-center">
        <span className="font-mono text-[12px] text-[var(--text-muted)]">
          Fetching GitHub activity…
        </span>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="animate-fade-up pt-6 pb-16 flex flex-col items-start gap-3">
        <p className="text-[14px] text-[var(--text-secondary)]">GitHub activity is currently unreachable.</p>
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[13px] text-[var(--text-primary)] hover:text-[var(--accent)]"
        >
          View profile on GitHub <ArrowUpRight size={14} />
        </a>
      </div>
    );
  }

  const fmt = (v) => (typeof v === 'number' ? v.toLocaleString() : '—');
  const metrics = [
    { label: 'Public repositories', val: fmt(stats.repos), Icon: BookMarked },
    { label: 'Stars earned', val: fmt(stats.stars), Icon: Star },
    { label: 'Followers', val: fmt(stats.followers), Icon: Users },
    { label: 'Contributions (last year)', val: fmt(stats.contributions), Icon: GitCommitHorizontal },
  ];

  return (
    <div className="animate-fade-up flex flex-col gap-6 pt-6 pb-16">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--hairline)] pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--positive)] inline-block" />
          <span className="font-mono text-[12px] text-[var(--text-secondary)]">
            GitHub activity
          </span>
        </div>
        <span className="font-mono text-[12px] text-[var(--text-muted)]">
          @{USERNAME}
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        {metrics.map((metric) => {
          const { label, val } = metric;
          const Icon = metric.Icon;
          return (
            <div key={label} className="card p-4 sm:p-5 flex flex-col gap-2">
              <Icon size={16} strokeWidth={1.5} className="text-[var(--text-muted)]" aria-hidden="true" />
              <div className="font-mono text-[26px] text-[var(--text-primary)] font-normal tabular-nums leading-none">
                {val}
              </div>
              <div className="font-mono text-[11px] text-[var(--text-muted)] leading-tight">
                {label}
              </div>
            </div>
          );
        })}
      </div>

      {days && days.length > 0 && (
        <div className="card p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
            <h3
              className="text-[18px] text-[var(--text-primary)] font-normal"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contributions (last 6 months)
            </h3>
            <div className="flex gap-1 items-center font-mono text-[11px] text-[var(--text-muted)]">
              <span className="mr-1">Less</span>
              {[0, 1, 2, 3, 4].map((v) => (
                <div key={v} className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: getIntensity(v) }} />
              ))}
              <span className="ml-1">More</span>
            </div>
          </div>

          <div className="overflow-x-auto [scrollbar-width:thin]">
            <div className="grid grid-flow-col grid-rows-7 gap-[3px] sm:gap-[4px] min-w-[420px] aspect-[26/7]">
              {days.map((d) => (
                <div
                  key={d.date}
                  className="rounded-[2px] w-full h-full"
                  style={{ backgroundColor: getIntensity(d.level) }}
                  title={`${d.count} contributions on ${d.date}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              View full profile on GitHub <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
