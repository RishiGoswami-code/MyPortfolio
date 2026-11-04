import React, { useState, useEffect } from 'react';
import { BookMarked, Star, Users, GitCommitHorizontal, ArrowUpRight } from 'lucide-react';

const USERNAME = 'RishiGoswami-code';
const DAYS = 182; // 26 full weeks

async function getJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url} → ${res.status}`);
    return res.json();
}

const GithubStats = () => {
    const [stats, setStats] = useState(null);
    const [days, setDays] = useState(null);
    const [status, setStatus] = useState('loading'); // loading | ready | error

    useEffect(() => {
        let cancelled = false;

        // Profile numbers and the contribution heatmap come from different
        // sources, so one failing doesn't blank out the other.
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
            'rgba(238, 234, 226, 0.06)',
            'rgba(var(--accent-rgb), 0.28)',
            'rgba(var(--accent-rgb), 0.5)',
            'rgba(var(--accent-rgb), 0.75)',
            'var(--gold)',
        ][level] ?? 'rgba(238, 234, 226, 0.06)';

    if (status === 'loading') {
        return (
            <div className="pt-8 pb-16 flex items-center justify-center">
                <span className="text-[13px] text-[var(--ink-ghost)] animate-pulse uppercase tracking-[0.2em]">
                    Fetching live telemetry…
                </span>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="animate-fade-up pt-8 pb-16 flex flex-col items-start gap-3">
                <p className="text-[16px] text-[var(--ink-light)]">GitHub's API isn't responding right now.</p>
                <a
                    href={`https://github.com/${USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[15px] text-[var(--ink)] border-b border-[var(--line)] hover:text-[var(--gold)]"
                >
                    View the profile on GitHub <ArrowUpRight size={15} />
                </a>
            </div>
        );
    }

    const fmt = (v) => (typeof v === 'number' ? v.toLocaleString() : '—');
    const metrics = [
        { label: 'Public Repositories', val: fmt(stats.repos), Icon: BookMarked },
        { label: 'Stars Earned', val: fmt(stats.stars), Icon: Star },
        { label: 'Followers', val: fmt(stats.followers), Icon: Users },
        { label: 'Contributions · Last Year', val: fmt(stats.contributions), Icon: GitCommitHorizontal },
    ];

    return (
        <div className="animate-fade-up flex flex-col gap-8 pt-8 pb-16">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-4">
                <span className="eyebrow flex items-center gap-2">
                    <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--gold-light)] opacity-75 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--gold)]" />
                    </span>
                    Live GitHub Telemetry
                </span>
                <span className="text-[14px] text-[var(--ink-ghost)] italic" style={{ fontFamily: 'var(--font-display)' }}>
                    @{USERNAME}
                </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric) => {
                    const { label, val } = metric;
                    const Icon = metric.Icon;
                    return (
                    <div key={label} className="card p-5 flex flex-col gap-3">
                        <Icon size={18} strokeWidth={1.5} className="text-[var(--gold)]" aria-hidden="true" />
                        <div className="text-[34px] text-[var(--ink)] font-light leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                            {val}
                        </div>
                        <div className="text-[12px] text-[var(--ink-ghost)] uppercase tracking-[0.1em] font-medium leading-[1.4]">
                            {label}
                        </div>
                    </div>
                    );
                })}
            </div>

            {days && days.length > 0 && (
                <div className="card p-5 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                        <h3 className="text-[24px] text-[var(--ink)] font-normal" style={{ fontFamily: 'var(--font-display)' }}>
                            Last six months of commits
                        </h3>
                        <div className="flex gap-1 items-center">
                            <span className="text-[11px] text-[var(--ink-ghost)] mr-1 uppercase tracking-[0.08em]">Less</span>
                            {[0, 1, 2, 3, 4].map((v) => (
                                <div key={v} className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: getIntensity(v) }} />
                            ))}
                            <span className="text-[11px] text-[var(--ink-ghost)] ml-1 uppercase tracking-[0.08em]">More</span>
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

                    <div className="mt-6 flex justify-end">
                        <a
                            href={`https://github.com/${USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[15px] text-[var(--ink)] border-b border-[var(--line)] hover:text-[var(--gold)] hover:border-[var(--gold-light)] transition-colors"
                        >
                            View on GitHub <ArrowUpRight size={15} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GithubStats;
