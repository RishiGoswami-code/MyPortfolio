import React, { useState, useEffect } from 'react';
import { FiGithub, FiActivity, FiGitPullRequest, FiStar, FiUsers } from 'react-icons/fi';

const GithubStats = () => {
    const [stats, setStats] = useState({
        public_repos: '..',
        followers: '..',
        stars: '..',
        contributions: '1,402'
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGithubData = async () => {
            const token = import.meta.env.VITE_GITHUB_TOKEN;
            const headers = token ? { Authorization: `token ${token}` } : {};

            try {
                const response = await fetch('https://api.github.com/users/chandangiri', { headers });
                const data = await response.json();
                setStats(prev => ({
                    ...prev,
                    public_repos: data.public_repos,
                    followers: data.followers
                }));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
                setLoading(false);
            }
        };
        fetchGithubData();
    }, []);

    // Mock contribution grid data (7 days x 40 weeks for more density)
    const contributionData = Array.from({ length: 280 }, () => Math.floor(Math.random() * 5));

    const getIntensity = (val) => {
        if (val === 0) return 'bg-zinc-50';
        if (val === 1) return 'bg-zinc-100';
        if (val === 2) return 'bg-zinc-200';
        if (val === 3) return 'bg-zinc-400';
        return 'bg-black';
    };

    return (
        <div className="relative group w-full border border-zinc-100 bg-white p-6 md:p-8 overflow-hidden rounded-none my-8">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-12 w-full text-[8px] font-black uppercase tracking-[0.4em] text-black mb-4 border-b-2 border-black pb-2">
                    Telemetry_Link | Connected_To_api.github.com
                </div>

                <div className="lg:col-span-4 w-full">
                    <h2 className="text-xl font-black tracking-tighter text-black uppercase mb-6 leading-none">
                        CHANDAN<span className="text-zinc-200">.CODE</span>
                    </h2>

                    <div className="grid grid-cols-2 gap-px bg-black border-2 border-black">
                        {[
                            { label: 'Repos', val: stats.public_repos, icon: <FiActivity /> },
                            { label: 'Contrib', val: stats.contributions, icon: <FiGitPullRequest /> },
                            { label: 'Follow', val: stats.followers, icon: <FiUsers /> },
                            { label: 'Rank', val: 'Top 5%', icon: <FiStar /> }
                        ].map((item) => (
                            <div key={item.label} className="bg-white p-3 group/item hover:bg-zinc-50 transition-colors">
                                <div className="text-zinc-200 mb-1 group-hover/item:text-black transition-colors transform scale-75 origin-left">
                                    {item.icon}
                                </div>
                                <div className="text-base font-black tracking-tighter text-black">{item.val}</div>
                                <div className="text-[7px] font-bold uppercase tracking-widest text-zinc-400 mt-1">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contribution Heatmap Style */}
                <div className="lg:col-span-8 w-full">
                    <div className="mb-2 flex justify-between items-center bg-zinc-50 border-2 border-black p-2">
                        <span className="text-[7px] font-bold uppercase tracking-widest text-black">Activity_Matrix_v.2.0</span>
                        <div className="flex gap-0.5">
                            {[0, 1, 2, 3, 4].map(v => (
                                <div key={v} className={`w-1.5 h-1.5 ${getIntensity(v)} border border-black/10`} />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-flow-col grid-rows-7 gap-0.5 w-full">
                        {contributionData.map((val, i) => (
                            <div
                                key={i}
                                className={`aspect-square w-full min-w-[3px] max-w-[6px] ${getIntensity(val)} border-[0.5px] border-zinc-200/20 hover:border-black transition-colors cursor-crosshair`}
                            />
                        ))}
                    </div>

                    <div className="mt-4 flex justify-between items-baseline">
                        <span className="text-[7px] font-bold text-black uppercase tracking-[0.4em]">LOG_X_2026</span>
                        <a
                            href="https://github.com/chandangiri"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[9px] font-black uppercase tracking-widest border border-black px-2 py-1 hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        >
                            SYNC_LIVE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubStats;
