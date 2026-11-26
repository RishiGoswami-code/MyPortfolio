import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useReducedMotion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MoreHorizontal, Check } from 'lucide-react';
import { Lines, Fade, Lights, Shelf, ease } from '../components/ui';
import data from '../data/portfolio.json';

/* ── Products and proof: tabs swap the prompt and the real product media ── */
function Typed({ text }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? text.length : 0);
  useEffect(() => {
    if (reduce) { setN(text.length); return; }
    setN(0);
    let i = 0;
    const t = setInterval(() => { i += 1; setN(i); if (i >= text.length) clearInterval(t); }, 24);
    return () => clearInterval(t);
  }, [text, reduce]);
  return <>{text.slice(0, n)}<span className="caret" aria-hidden="true" /></>;
}

function Media({ m, inset }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-10% 0px' });
  useEffect(() => {
    const v = ref.current?.querySelector('video');
    if (!v) return;
    if (inView) v.play().catch(() => {}); else v.pause();
  }, [inView, m.src]);
  return (
    <div className="media" ref={ref} style={{ background: m.bg || '#000' }}>
      {m.type === 'video'
        ? <video src={m.src} poster={m.poster} muted loop playsInline preload="metadata" aria-label={m.alt} />
        : <img src={m.src} alt={m.alt} style={m.fit === 'contain' ? { objectFit: 'contain', background: m.bg || '#f4f6f6' } : undefined} />}
      {inset && (
        <motion.div className="inset" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35, duration: 0.6, ease }}>
          <img src={inset} alt="" />
        </motion.div>
      )}
    </div>
  );
}

export function Products() {
  const [id, setId] = useState(data.products[0].id);
  const p = data.products.find((x) => x.id === id);
  return (
    <section className="panel" id="products" style={{ padding: '140px 0 120px' }}>
      <div className="inner center">
        <Lines lines={['Products and', 'proof of work']} />
        <Fade><p className="sub">See what each product does, then open the real thing: live sites, source code and merged pull requests.</p></Fade>
      </div>
      <div className="inner">
        <div className="tabs" role="tablist" aria-label="Products">
          {data.products.map((x) => (
            <button key={x.id} role="tab" aria-selected={id === x.id} aria-controls="product-panel" onClick={() => setId(x.id)}>
              {id === x.id && <motion.span layoutId="tab-bg" className="tab-bg" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
              {x.tab}
            </button>
          ))}
        </div>
        <Fade y={40}>
          <div className="window">
            <div className="win-top"><Lights /><MoreHorizontal size={18} className="muted" /></div>
            <div className="win-body pw" id="product-panel" role="tabpanel">
              <div className="pw-left">
                <span className="pw-label">What should it do?</span>
                <p className="pw-prompt"><Typed key={p.id} text={p.prompt} /></p>
                <div className="chips">{p.chips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={p.id} className="pw-right" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease }}>
                  <div className="ws-title" style={{ margin: 0 }}><span className="h3" style={{ fontSize: 22 }}>{p.title}</span></div>
                  <Media m={p.media} inset={p.inset} />
                  {p.credit && <span className="credit">{p.credit}</span>}
                  <div style={{ display: 'grid', gap: 8 }}>
                    {p.rows.map((r, i) => (
                      <motion.div key={r.t} className="prow" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.08, duration: 0.45, ease }}>
                        <Check size={16} color="var(--green)" /><span>{r.t}</span><span className="s">{r.s}</span>
                      </motion.div>
                    ))}
                    <a className="prow" href={p.deliverable.url} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--ink)', color: '#fff', boxShadow: 'none' }}>
                      <ArrowUpRight size={16} /><span>Open {p.deliverable.label}</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ── Sticky questions: one headline at a time while a contribution grid grows ── */
const COLS = 60;
const cells = Array.from({ length: COLS * 7 }, (_, i) => {
  const x = Math.floor(i / 7), yy = i % 7;
  const h = Math.sin(x * 1.7 + yy * 2.3) * 0.5 + 0.5;
  return { t: (x / COLS) * 0.55 + h * 0.45, lvl: Math.min(4, 1 + Math.floor(((x * 13 + yy * 7) % 10) / 2.6)) };
});
const shades = ['#e9e9e9', '#cfe8c4', '#9fd18c', '#6dba57', '#3f9a37'];

export function Questions() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [p, setP] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', setP);
  const qs = data.questions;
  const idx = Math.min(qs.length - 1, Math.floor(p * qs.length));

  return (
    <section className="panel qs" ref={ref} aria-label="Questions you might have">
      <div className="qs-stick">
        <AnimatePresence mode="wait">
          <motion.div key={idx} className="qs-q"
            initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -60, filter: 'blur(8px)' }}
            transition={{ duration: 0.55, ease }}>
            <h2 className="big">{qs[idx].q}</h2>
            <p className="sub">{qs[idx].a}</p>
          </motion.div>
        </AnimatePresence>
        <div className="grid-garden" aria-hidden="true">
          {cells.map((c, i) => (
            <i key={i} style={{ background: p > c.t ? shades[c.lvl] : shades[0], transition: 'background-color .5s' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Benefits: numbered glass cards fly in over the product shelf ── */
function useNarrow(q = '(max-width: 900px)') {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const f = () => setM(mq.matches);
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, [q]);
  return m;
}

export function Benefits() {
  const ref = useRef(null);
  const narrow = useNarrow();
  const reduce = useReducedMotion() || narrow;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const b = data.benefits;
  const T = (i) => {
    const s = 0.08 + i * 0.13, e = s + 0.2;
    return {
      y: useTransform(scrollYProgress, [s, e], reduce ? ['0%', '0%'] : ['120%', '0%']),
      rotate: useTransform(scrollYProgress, [s, e], reduce ? [0, 0] : [[-14, 10, -8, 12][i], [-3, 2, -2, 3][i]]),
      opacity: useTransform(scrollYProgress, [s, s + 0.06], reduce ? [1, 1] : [0, 1]),
    };
  };
  const anims = [T(0), T(1), T(2), T(3)];

  return (
    <section className="panel ben" ref={ref}>
      <div className="ben-stick">
        <div className="inner ben-head">
          <Lines lines={b.title} />
          <Fade><p className="sub" style={{ maxWidth: 420, margin: '14px auto 0' }}>{b.sub}</p></Fade>
        </div>
        <div className="ben-stage">
          <Shelf items={data.shelf} />
          <div className="ben-cards">
            {b.items.map((it, i) => (
              <motion.article key={it.n} className="bcard" style={anims[i]}>
                <span className="n">{it.n}</span>
                <h3 className="h3">{it.t}</h3>
                <p>{it.d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
