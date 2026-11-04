import React, { useEffect, useRef, useState } from 'react';

/*
  The Mindfries brain, drawn as wires so it can assemble itself:
  1. the brain outline traces in,
  2. circuit wires grow out of it one after another,
  3. terminal nodes light up,
  4. a soft pulse keeps running along the wires.
  Animation lives in index.css (.brain-*). With reduced motion it renders finished.
*/

const OUTLINE =
  'M84 136 C70 140 54 134 48 122 C46 116 46 112 44 110 C26 112 10 104 8 88 ' +
  'C6 76 8 64 16 56 C18 42 30 30 46 26 C56 20 72 18 86 22 C100 18 122 22 134 32 ' +
  'C150 38 158 52 156 64 C164 76 164 98 154 108 C148 118 138 122 130 122 ' +
  'C128 134 118 142 106 142 L120 168 L113 170 Z';

// Each wire runs from a terminal node into the brain.
const WIRES = [
  { d: 'M64 50 V76 L76 88 H94', node: [64, 44] },
  { d: 'M86 24 V54 L82 60', node: [82, 66], nodeAtEnd: true },
  { d: 'M102 50 V80 L92 92', node: [102, 44] },
  { d: 'M122 58 V84 L98 108', node: [122, 52] },
  { d: 'M139 96 H114 L88 122', node: [144, 96] },
  { d: 'M42 72 L58 88 H70', node: [38, 68] },
  { d: 'M10 76 H22 L30 84', node: [30, 90], nodeAtEnd: true },
  { d: 'M69 110 L80 102 L94 102', node: [64, 112] },
  { d: 'M152 116 H122', node: [117, 116], nodeAtEnd: true },
  { d: 'M136 40 V62 L148 72', node: [136, 34] },
];

const DRAW_START = 1.1; // seconds, after the outline is mostly drawn
const STAGGER = 0.14;

export default function BrainCircuit({ className = '', title = 'Mindfries' }) {
  // Hold the animation until the brain is on screen, so on phones (where the
  // card sits below the fold) the wires still connect while someone is watching.
  const ref = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setLive(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 170 176"
      className={`brain ${live ? 'is-live' : ''} ${className}`}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id="brain-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B69CFF" />
          <stop offset="100%" stopColor="#7C4DFF" />
        </linearGradient>
        <filter id="brain-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g
        fill="none"
        stroke="url(#brain-stroke)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#brain-glow)"
      >
        <path className="brain-outline" d={OUTLINE} pathLength="1" />

        {WIRES.map((w, i) => {
          const delay = DRAW_START + i * STAGGER;
          return (
            <g key={w.d}>
              <path className="brain-wire" d={w.d} pathLength="1" style={{ animationDelay: `${delay}s` }} />
              <circle
                className="brain-node"
                cx={w.node[0]}
                cy={w.node[1]}
                r="5"
                style={{ animationDelay: `${delay + (w.nodeAtEnd ? 0.55 : 0.1)}s` }}
              />
            </g>
          );
        })}
      </g>

      {/* Current running along the finished wires */}
      <g fill="none" stroke="#E9DEFF" strokeWidth="3" strokeLinecap="round" className="brain-pulses">
        {WIRES.map((w, i) => (
          <path
            key={w.d}
            className="brain-pulse"
            d={w.d}
            pathLength="1"
            style={{ animationDelay: `${3.2 + i * 0.37}s` }}
          />
        ))}
      </g>
    </svg>
  );
}
