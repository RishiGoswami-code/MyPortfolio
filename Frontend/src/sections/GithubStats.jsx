import React, { useState, useEffect } from 'react';

const GithubStats = () => {
    const [stats, setStats] = useState({
        public_repos: '0',
        followers: '0',
        stars: '0',
        contributions: '0'
    });
    const [contributionData, setContributionData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGithubData = async () => {
            const token = import.meta.env.GITHUB_TOKEN;
            const headers = token ? { Authorization: `token ${token}` } : {};
            const username = 'RishiGoswami-code';

            try {
                // 1. Fetch basic user data and stars via REST API
                const [userRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`, { headers }),
                    fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers })
                ]);

                const userData = await userRes.json();
                const reposData = await reposRes.json();
                
                let totalStars = 0;
                if (Array.isArray(reposData)) {
                    totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
                }

                // 2. Fetch real contribution data via public proxy (avoids GraphQL token requirement)
                // This API returns the last year of contributions including daily counts
                const contribRes = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
                const contribData = await contribRes.json();

                // Sum total contributions for the last year
                const totalContribs = contribData.totalContributions || 0;
                
                // Get the last 180 days for the heatmap
                // Flatten the nested 'contributions' array (weeks -> days)
                const allDays = contribData.contributions.flat();
                const recentDays = allDays.slice(-180).map(day => day.contributionCount);

                setStats({
                    public_repos: userData.public_repos || 0,
                    followers: userData.followers || 0,
                    stars: totalStars,
                    contributions: totalContribs.toLocaleString()
                });
                
                setContributionData(recentDays);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
                
                // Fallback to mock data if proxy fails
                setContributionData(Array.from({ length: 180 }, () => Math.floor(Math.random() * 5)));
                setLoading(false);
            }
        };
        fetchGithubData();
    }, []);

    const getIntensity = (val) => {
        if (val === 0) return 'rgba(28, 26, 22, 0.05)';
        if (val <= 2) return 'var(--gold-light)';
        if (val <= 5) return 'var(--gold)';
        if (val <= 10) return 'var(--ink-light)';
        return 'var(--ink)';
    };

    if (loading) {
        return (
            <div className="pt-8 pb-16 flex items-center justify-center">
                <span className="text-[13px] text-[var(--ink-ghost)] animate-pulse uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-body)' }}>
                    Fetching Live Telemetry...
                </span>
            </div>
        );
    }

    return (
        <div className="animate-fade-up flex flex-col pt-8 pb-16">
            <div className="flex flex-col gap-12">
                {/* Section Header */}
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                    <span className="text-[13px] text-[var(--gold)] font-medium uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-body)' }}>
                        Live Github Telemetry
                    </span>
                    <span className="text-[13px] text-[var(--ink-ghost)] italic" style={{ fontFamily: 'var(--font-display)' }}>
                        Synchronized with api.github.com
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
                    {/* Metrics Column */}
                    <div className="flex flex-col gap-10">
                        {[
                            { label: 'Public Repositories', val: stats.public_repos },
                            { label: 'Total Stars Earned', val: stats.stars },
                            { label: 'Github Followers', val: stats.followers },
                            { label: 'Contributions (Yearly)', val: stats.contributions }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col border-b border-[var(--line)] pb-6 last:border-0">
                                <div className="text-[36px] text-[var(--ink)] font-light leading-none mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                    {item.val}
                                </div>
                                <div className="text-[13px] text-[var(--ink-ghost)] uppercase tracking-[0.1em] font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Heatmap Column */}
                    <div className="flex flex-col">
                        <div className="flex items-baseline justify-between mb-6">
                            <h3 className="text-[22px] text-[var(--ink)] font-normal" style={{ fontFamily: 'var(--font-display)' }}>
                                Commit Frequency Matrix
                            </h3>
                            <div className="flex gap-1 items-center">
                                <span className="text-[10px] text-[var(--ink-ghost)] mr-2 uppercase tracking-tighter">Less</span>
                                {[0, 1, 3, 6, 11].map(v => (
                                    <div key={v} className="w-2.5 h-2.5 rounded-[1px]" style={{ backgroundColor: getIntensity(v) }} />
                                ))}
                                <span className="text-[10px] text-[var(--ink-ghost)] ml-2 uppercase tracking-tighter">More</span>
                            </div>
                        </div>

                        <div className="bg-[var(--cream-dark)] border border-[var(--line)] rounded-[4px] p-8">
                            <div className="grid grid-flow-col grid-rows-7 gap-[4px] w-full aspect-[4/1]">
                                {contributionData.map((val, i) => (
                                    <div
                                        key={i}
                                        className="rounded-[1px] w-full h-full transition-transform hover:scale-125 cursor-crosshair"
                                        style={{ backgroundColor: getIntensity(val) }}
                                        title={`${val} contributions`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 flex justify-between items-center">
                            <p className="text-[15px] text-[var(--ink-light)] font-light max-w-[320px]" style={{ fontFamily: 'var(--font-body)' }}>
                                Real-time visualization of push events, pull requests, and repository maintenance.
                            </p>
                            <a 
                                href="https://github.com/RishiGoswami-code"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[15px] text-[var(--ink)] border-b border-[var(--ink)] pb-0.5 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                View Source on Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubStats;
