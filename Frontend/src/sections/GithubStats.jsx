import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

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

      setStats(next);
      setDays(recent);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const getIntensity = (level) =>
    [
      'rgba(255, 255, 255, 0.04)',
      'rgba(212, 163, 89, 0.3)',
      'rgba(212, 163, 89, 0.55)',
      'rgba(212, 163, 89, 0.8)',
      '#d4a359',
    ][level] ?? 'rgba(255, 255, 255, 0.04)';

  const fmt = (v) => (typeof v === 'number' ? v.toLocaleString() : '—');

  return (
    <section id="telemetry" className="py-20 sm:py-24 border-b border-[var(--line)]">
      <h2 className="font-editorial text-4xl sm:text-6xl font-light text-[var(--fg)] leading-none mb-10">
        Open source &amp; telemetry.
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)] rounded-xl overflow-hidden mb-8">
        <div className="p-6 bg-[var(--bg)] flex flex-col gap-1">
          <div className="font-mono text-xs text-[var(--fg-muted)]">Repositories</div>
          <div className="font-mono text-3xl font-light text-[var(--fg)]">
            {stats ? fmt(stats.repos) : '20+'}
          </div>
        </div>

        <div className="p-6 bg-[var(--bg)] flex flex-col gap-1">
          <div className="font-mono text-xs text-[var(--fg-muted)]">Stars Earned</div>
          <div className="font-mono text-3xl font-light text-[var(--fg)]">
            {stats ? fmt(stats.stars) : '—'}
          </div>
        </div>

        <div className="p-6 bg-[var(--bg)] flex flex-col gap-1">
          <div className="font-mono text-xs text-[var(--fg-muted)]">Followers</div>
          <div className="font-mono text-3xl font-light text-[var(--fg)]">
            {stats ? fmt(stats.followers) : '—'}
          </div>
        </div>

        <div className="p-6 bg-[var(--bg)] flex flex-col gap-1">
          <div className="font-mono text-xs text-[var(--fg-muted)]">Contributions (Past Year)</div>
          <div className="font-mono text-3xl font-light text-[var(--accent)]">
            {stats ? fmt(stats.contributions) : 'Active'}
          </div>
        </div>
      </div>

      {days && days.length > 0 && (
        <div className="p-6 sm:p-8 rounded-xl bg-[var(--bg-subtle)] border border-[var(--line)]">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
            <span className="font-mono text-xs text-[var(--fg-muted)]">
              Contribution Matrix &middot; Past 26 Weeks
            </span>
            <div className="flex gap-1 items-center font-mono text-[11px] text-[var(--fg-muted)]">
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

          <div className="mt-6 flex justify-end">
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link font-mono text-xs text-[var(--fg)]"
            >
              Inspect profile on GitHub <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
