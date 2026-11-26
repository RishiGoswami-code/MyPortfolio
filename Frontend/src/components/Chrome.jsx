import { motion, AnimatePresence, useReducedMotion, animate } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Logo, ease, scrollToId } from './ui';
import data from '../data/portfolio.json';

/* Loader: three outlined digits roll from 000 to 100, then the sheet lifts. */
export function Loader({ onDone }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem('cg-seen') === '1'; sessionStorage.setItem('cg-seen', '1'); } catch { /* storage off */ }
    if (reduce || seen) { setGone(true); onDone(); return; }
    document.documentElement.style.overflow = 'hidden';
    const c = animate(0, 100, {
      duration: 1.9, ease: [0.65, 0, 0.35, 1], onUpdate: (v) => setN(Math.round(v)),
      onComplete: () => setTimeout(() => setGone(true), 250),
    });
    return () => c.stop();
  }, [reduce]);

  const digits = String(n).padStart(3, '0').split('').map(Number);
  return (
    <AnimatePresence onExitComplete={() => { document.documentElement.style.overflow = ''; onDone(); }}>
      {!gone && (
        <motion.div className="loader" exit={{ y: '-100%', borderRadius: '0 0 48px 48px' }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }} role="status" aria-label="Loading">
          <div className="loader-digits" aria-hidden="true">
            {digits.map((d, i) => (
              <div className="loader-col" key={i}>
                <motion.div animate={{ y: `${-d}em` }} transition={{ type: 'spring', stiffness: 220, damping: 26 }}>
                  {Array.from({ length: 10 }, (_, k) => <span key={k} style={{ height: '1em', display: 'block' }}>{k}</span>)}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Outlined rolling digits, shared by the loader and the story section */
export function Roller({ value, className = 'loader-digits', style }) {
  return (
    <div className={className} style={style} aria-hidden="true">
      {String(value).split('').map((ch, i) => (
        <div className="loader-col" key={i}>
          <motion.div animate={{ y: `${-Number(ch)}em` }} transition={{ type: 'spring', stiffness: 160, damping: 22 }}>
            {Array.from({ length: 10 }, (_, k) => <span key={k} style={{ height: '1em', display: 'block' }}>{k}</span>)}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

/* Live clock in Lucknow, so visitors know when a reply is likely */
export function useLucknowTime() {
  const fmt = () => new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }).format(new Date());
  const [t, setT] = useState(fmt);
  useEffect(() => { const id = setInterval(() => setT(fmt()), 20000); return () => clearInterval(id); }, []);
  return t;
}

const LINKS = [
  ['top', 'Home'],
  ['story', 'Story'],
  ['work', 'Mindfries'],
  ['products', 'Products'],
  ['plans', 'Plans'],
  ['contact', 'Contact'],
];

/* Nav: black tab hanging from the top that drops open into a menu */
export function Nav({ ready }) {
  const [open, setOpen] = useState(false);
  const time = useLucknowTime();
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);

  return (
    <motion.div className="nav-wrap" initial={{ y: -90 }} animate={{ y: ready ? 0 : -90 }} transition={{ duration: 0.9, ease, delay: 0.1 }}>
      <motion.nav className="nav" aria-label="Main" animate={{ width: open ? 440 : 340 }} transition={{ duration: 0.5, ease }}>
        <div className="nav-bar">
          <a href="#top" onClick={(e) => { e.preventDefault(); scrollToId('top'); }} aria-label="Chandan Giri, home"><Logo /></a>
          <button className="menu-btn" aria-expanded={open} aria-controls="menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            <span style={{ display: 'grid', gap: 4 }}>
              <span style={{ transform: open ? 'translateY(5.5px) rotate(45deg)' : 'none' }} />
              <span style={{ opacity: open ? 0 : 1 }} />
              <span style={{ transform: open ? 'translateY(-5.5px) rotate(-45deg)' : 'none' }} />
            </span>
          </button>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div id="menu" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.55, ease }} style={{ overflow: 'hidden' }}>
              <div className="menu-links">
                {LINKS.map(([id, label], i) => (
                  <motion.a key={id} href={`#${id}`}
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease }}
                    onClick={(e) => { e.preventDefault(); setOpen(false); setTimeout(() => scrollToId(id), 250); }}>
                    {label}<ArrowUpRight size={22} strokeWidth={1.6} />
                  </motion.a>
                ))}
                <div className="menu-foot"><span>{time} in Lucknow</span><span>Open to work</span></div>
                <div className="menu-foot" style={{ paddingTop: 8 }}>
                  <a href={`mailto:${data.meta.email}`}>{data.meta.email}</a>
                  <a href={data.meta.resume} target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
}
