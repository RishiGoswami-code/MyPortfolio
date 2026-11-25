import React from 'react';

const navItems = [
  { id: 'mindfries', label: '01 Mindfries' },
  { id: 'systems', label: '02 Systems' },
  { id: 'trajectory', label: '03 Trajectory' },
  { id: 'recognition', label: '04 Recognition' },
  { id: 'telemetry', label: '05 Telemetry' },
];

export default function TabNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8 font-mono-meta text-[11px]">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
