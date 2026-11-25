import React from 'react';

const navItems = [
  { id: 'product', label: '01 Product' },
  { id: 'work', label: '02 Work' },
  { id: 'experience', label: '03 Experience' },
  { id: 'traction', label: '04 Traction' },
  { id: 'open-source', label: '05 Open Source' },
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
