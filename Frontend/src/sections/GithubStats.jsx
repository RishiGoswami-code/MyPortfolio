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
  const [status, setStatus] = useState('loading');

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
      'rgba(255, 255, 255, 0.05)',
      'rgba(16, 185, 129, 0.3)',
      'rgba(16, 185, 129, 0.55)',
      'rgba(16, 185, 129, 0.8)',
      '#10b981',
    ][level] ?? 'rgba(255, 255, 255, 0.05)';

  if (status === 'loading') {
    return (
      <div className="pt-6 pb-16 flex items-center justify-center">
        <span className="font-mono text-[12px] text-zinc-500">
          Loading live telemetry…
        </span>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="pt-6 pb-16 flex flex-col items-start gap-3">
        <p className="text-[14px] text-zinc-400">GitHub API is currently unreachable.</p>
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[13px] text-white hover:text-indigo-400"
        >
          View profile on GitHub <ArrowUpRight size={14} />
        </a>
      </div>
    );
  }

  const fmt = (v) => (typeof v === 'number' ? v.toLocaleString() : '—');
  const metrics = [
    { label: 'Public Repositories', val: fmt(stats.repos), Icon: BookMarked },
    { label: 'Stars Earned', val: fmt(stats.stars), Icon: Star },
    { label: 'Followers', val: fmt(stats.followers), Icon: Users },
    { label: 'Contributions (Past Year)', val: fmt(stats.contributions), Icon: GitCommitHorizontal },
  ];

  return (
    <div className="flex flex-col gap-6 pt-2 pb-16">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[12px] text-zinc-300">
            Live GitHub Telemetry
          </span>
        </div>
        <span className="font-mono text-[12px] text-zinc-500">
          @{USERNAME}
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const { label, val } = metric;
          const Icon = metric.Icon;
          return (
            <div key={label} className="bento-card p-5 flex flex-col gap-2">
              <Icon size={18} strokeWidth={1.75} className="text-indigo-400" aria-hidden="true" />
              <div className="font-mono text-2xl font-bold text-white tracking-tight">
                {val}
              </div>
              <div className="font-mono text-[11.5px] text-zinc-400">
                {label}
              </div>
            </div>
          );
        })}
      </div>

      {days && days.length > 0 && (
        <div className="bento-card p-6 sm:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Contribution Heatmap (Last 6 Months)
            </h3>
            <div className="flex gap-1 items-center font-mono text-[11px] text-zinc-400">
              <span className="mr-1">Less</span>
              {[0, 1, 2, 3, 4].map((v) => (
                <div key={v} className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: getIntensity(v) }} />
              ))}
              <span className="ml-1">More</span>
            </div>
          </div>

          <div className="overflow-x-auto [scrollbar-width:thin]">
            <div className="grid grid-flow-col grid-rows-7 gap-[3.5px] sm:gap-[4px] min-w-[420px] aspect-[26/7]">
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
              className="inline-flex items-center gap-1.5 font-mono text-[12px] text-zinc-400 hover:text-white transition-colors"
            >
              View profile on GitHub <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
