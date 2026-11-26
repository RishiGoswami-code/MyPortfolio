import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useReducedMotion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MoreHorizontal, Check } from 'lucide-react';
import { Lines, Fade, Lights, ease } from '../components/ui';
import { Roller } from '../components/Chrome';
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
  useEffect(() => {
    const f = (e) => data.products.some((x) => x.id === e.detail) && setId(e.detail);
    window.addEventListener('open-product', f);
    return () => window.removeEventListener('open-product', f);
  }, []);
  const p = data.products.find((x) => x.id === id);
  return (
    <section className="panel" id="products" style={{ padding: '140px 0 120px' }}>
      <div className="inner center">
        <Lines lines={data.productsHead.title} />
        <Fade><p className="sub">{data.productsHead.sub}</p></Fade>
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

/* ── Story: the year rolls forward while the grid grows, one chapter per screen ── */
const COLS = 64;
const cells = Array.from({ length: COLS * 7 }, (_, i) => {
  const x = Math.floor(i / 7), yy = i % 7;
  const h = Math.sin(x * 1.7 + yy * 2.3) * 0.5 + 0.5;
  return { t: (x / COLS) * 0.6 + h * 0.4, lvl: Math.min(4, 1 + Math.floor(((x * 13 + yy * 7) % 10) / 2.6)) };
});
const shades = ['#e9e9e9', '#cfe8c4', '#9fd18c', '#6dba57', '#3f9a37'];

export function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [p, setP] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', setP);
  const ch = data.story.chapters;
  const idx = Math.min(ch.length - 1, Math.floor(p * ch.length));
  const c = ch[idx];

  return (
    <section className="panel qs" ref={ref} id="story" aria-label={data.story.label}>
      <div className="qs-stick">
        <div className="story-top">
          <span className="pw-label">{data.story.label}</span>
          <div className="story-dots" aria-hidden="true">
            {ch.map((x, k) => <span key={x.year} className={k <= idx ? 'on' : ''}>{x.range}</span>)}
          </div>
        </div>
        <div className="story-body" aria-hidden="true">
          <Roller value={c.year} className="loader-digits story-year" />
          <AnimatePresence mode="wait">
            <motion.div key={idx}
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
              transition={{ duration: 0.55, ease }}>
              <p className="big">{c.h}</p>
              <p className="sub story-p">{c.p}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="sr-only">
          <h2>{data.story.label}</h2>
          {ch.map((x) => <p key={x.year}>{x.range}: {x.h} {x.p}</p>)}
        </div>
        <div className="grid-garden" aria-hidden="true">
          {cells.map((cell, i) => (
            <i key={i} style={{ background: p > cell.t ? shades[cell.lvl] : shades[0], transition: 'background-color .5s' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Benefits: numbered glass cards fly in, each carrying its own proof ── */
function BenefitViz({ kind, on }) {
  if (kind === 'tokens') return (
    <div className="bv">
      {[['Before', '3,000,000', 1, '#d6d6d6'], ['After', '20,000', 0.012, 'var(--red)']].map(([k, v, w, c], i) => (
        <div key={k} style={{ display: 'grid', gap: 4 }}>
          <div className="bv-row"><span>{k}</span><b>{v}</b></div>
          <div className="bar"><motion.div initial={{ width: '100%' }} animate={on ? { width: `${Math.max(w * 100, 2)}%` } : {}} transition={{ duration: 1.4, ease, delay: 0.3 + i * 0.15 }} style={{ background: c }} /></div>
        </div>
      ))}
    </div>
  );
  if (kind === 'latency') return (
    <div className="bv" style={{ justifyItems: 'center' }}>
      <svg viewBox="0 0 120 70" width="130" aria-hidden="true">
        <path d="M10 62 A50 50 0 0 1 110 62" fill="none" stroke="#e3e3e3" strokeWidth="9" strokeLinecap="round" />
        <motion.path d="M10 62 A50 50 0 0 1 110 62" fill="none" stroke="var(--green)" strokeWidth="9" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={on ? { pathLength: 0.22 } : {}} transition={{ duration: 1.2, ease, delay: 0.3 }} />
      </svg>
      <div className="bv-row" style={{ justifyContent: 'center', gap: 6 }}><b>&lt; 100 ms</b><span>reads</span></div>
    </div>
  );
  if (kind === 'audit') return (
    <div className="bv">
      {['Broken links', 'Missing metadata', 'HTML structure', 'SEO gaps'].map((t, i) => (
        <motion.div key={t} className="bv-row" initial={{ opacity: 0.35 }} animate={on ? { opacity: 1 } : {}} transition={{ delay: 0.3 + i * 0.25 }}>
          <span>{t}</span>
          <motion.span initial={{ scale: 0 }} animate={on ? { scale: 1 } : {}} transition={{ delay: 0.45 + i * 0.25, type: 'spring', stiffness: 400, damping: 18 }}><Check size={14} color="var(--green)" /></motion.span>
        </motion.div>
      ))}
    </div>
  );
  return (
    <div className="bv">
      <div className="bv-doc">
        {[80, 60, 72].map((w, i) => <i key={i} style={{ width: `${w}%` }} />)}
      </div>
      <motion.div className="bv-row" initial={{ opacity: 0, y: 6 }} animate={on ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
        <span>Requirements</span><span>→</span><b>Deployed</b>
      </motion.div>
    </div>
  );
}

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
  const stageRef = useRef(null);
  const stageIn = useInView(stageRef, { once: true, margin: '-20% 0px' });
  const [landed, setLanded] = useState([false, false, false, false]);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setLanded((L) => (L.every(Boolean) ? L : L.map((x, i) => x || v > 0.08 + i * 0.13 + 0.18)));
  });
  useEffect(() => { if (reduce && stageIn) setLanded([true, true, true, true]); }, [reduce, stageIn]);

  return (
    <section className="panel ben" ref={ref}>
      <div className="ben-stick">
        <div className="inner ben-head">
          <Lines lines={b.title} />
          <Fade><p className="sub" style={{ maxWidth: 420, margin: '14px auto 0' }}>{b.sub}</p></Fade>
        </div>
        <div className="ben-stage" ref={stageRef}>
          <div className="ben-cards">
            {b.items.map((it, i) => (
              <motion.article key={it.n} className="bcard" style={anims[i]}>
                <span className="n">{it.n}</span>
                <BenefitViz kind={it.viz} on={landed[i]} />
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
