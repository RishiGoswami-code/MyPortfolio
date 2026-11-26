import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export const ease = [0.22, 1, 0.36, 1];

/* Smooth inertial scrolling, like Framer sites. Off for reduced motion. */
export function useSmoothScroll() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); window.__lenis = undefined; };
  }, [reduce]);
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: 0 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

/* Headline whose lines rise out of a mask */
export function Lines({ lines, as: Tag = 'h2', className = 'big', delay = 0, onLoad = false, style }) {
  const Comp = motion[Tag];
  const anim = onLoad ? { animate: 'show' } : { whileInView: 'show', viewport: { once: true, margin: '-12% 0px' } };
  return (
    <Comp className={className} initial="hide" {...anim} style={style} aria-label={lines.join(' ')}>
      {lines.map((l, i) => (
        <span className="ln" key={i} aria-hidden="true">
          <motion.span
            variants={{ hide: { y: '110%' }, show: { y: '0%', transition: { duration: 1, ease, delay: delay + i * 0.09 } } }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}

export function Fade({ children, delay = 0, y = 16, className, style, as = 'div' }) {
  const Comp = motion[as];
  return (
    <Comp className={className} style={style}
      initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease, delay }}>
      {children}
    </Comp>
  );
}

export function Logo() {
  return <span className="logo"><b>CHANDAN</b><span>GIRI</span></span>;
}

export function Lights() {
  return <span className="lights" aria-hidden="true"><i /><i /><i /></span>;
}

/* Real product screenshot standing on the shelf, with a hover speech bubble */
export function Tile({ p, i = 0, float = true, onLoad = false }) {
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();
  const rot = [-4, 3, -2, 4, -3][i % 5];
  const enter = onLoad
    ? { initial: { y: 160, opacity: 0, rotate: rot * 3 }, animate: { y: 0, opacity: 1, rotate: rot } }
    : { initial: { y: 80, opacity: 0, rotate: rot * 2 }, whileInView: { y: 0, opacity: 1, rotate: rot }, viewport: { once: true } };
  return (
    <motion.div
      className="tile"
      {...enter}
      transition={{ type: 'spring', stiffness: 120, damping: 16, delay: (onLoad ? 0.35 : 0) + i * 0.08 }}
      whileHover={{ y: -14, rotate: 0, scale: 1.04 }}
      onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}
      onFocus={() => setHover(true)} onBlur={() => setHover(false)}
      tabIndex={0}
      aria-label={`${p.name}: ${p.line}`}
      style={{ overflow: 'visible' }}
    >
      <motion.div
        style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', overflow: 'hidden' }}
        animate={float && !reduce ? { y: [0, -6, 0] } : undefined}
        transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
      >
        <img src={p.img} alt="" loading="lazy" />
        <div className="tile-cap"><span className="dot" style={{ background: p.tint }} /><span className="tile-name">{p.name}</span></div>
      </motion.div>
      <AnimatePresence>
        {hover && (
          <motion.div className="bubble" initial={{ opacity: 0, y: 8, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 6, scale: 0.95 }} transition={{ duration: 0.25, ease }}>
            <p>Hey, I’m {p.name}.</p>
            <p>{p.line}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Shelf({ items, onLoad = false }) {
  return (
    <div className="shelf">
      <div className="shelf-row">
        {items.map((p, i) => <Tile key={p.id} p={p} i={i} onLoad={onLoad} />)}
      </div>
      <div className="shelf-base" aria-hidden="true" />
    </div>
  );
}
