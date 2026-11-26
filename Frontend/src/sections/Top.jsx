import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, Boxes, ListChecks, BookOpen, Plus, MoreHorizontal, PanelLeft, Check } from 'lucide-react';
import { Lines, Fade, Shelf, Lights, ease } from '../components/ui';
import data from '../data/portfolio.json';

const { hero, shelf, workspace: ws, stack } = data;

/* ── Hero ── */
export function Hero({ ready }) {
  return (
    <section className="panel hero-panel hero" id="top">
      <div className="inner hero-top">
        {ready ? <Lines lines={hero.title} as="h1" className="mega" onLoad /> : <h1 className="mega" style={{ opacity: 0 }}>{hero.title.join(' ')}</h1>}
        <motion.div className="hero-side" initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease, delay: 0.25 }}>
          <p>{hero.sub}</p>
          <a className="btn-red" href={`mailto:${data.meta.email}`}>{hero.cta}</a>
        </motion.div>
      </div>
      {ready && <Shelf items={shelf} onLoad />}
    </section>
  );
}

/* ── Workspace: the app window tilts flat as it scrolls in ── */
export function Workspace() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.15'] });
  const rotateX = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [28, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.86, 1]);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [120, 0]);

  const chatRef = useRef(null);
  const live = useInView(chatRef, { once: true, margin: '-25% 0px' });
  const step = (n) => ({ initial: { opacity: 0, y: 14 }, animate: live ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, ease, delay: n } });

  return (
    <section className="panel" id="work" style={{ padding: '140px 0 120px' }}>
      <div className="inner center">
        <Lines lines={ws.title} />
        <Fade><p className="sub">{ws.sub}</p></Fade>
      </div>
      <div className="inner" style={{ marginTop: 72, perspective: 1600 }}>
        <motion.div ref={ref} className="window" style={{ rotateX, scale, y, transformOrigin: '50% 0%' }}>
          <div className="win-top"><Lights /><span className="live"><i />LIVE SESSION</span></div>
          <div className="win-body ws" ref={chatRef}>
            <aside className="ws-col ws-side">
              <div className="ws-title">Chandan Giri <PanelLeft size={18} className="muted" /></div>
              <nav className="ws-nav" aria-hidden="true">
                <div className="on"><MessageSquare size={18} />Chats</div>
                <div><Boxes size={18} />Products</div>
                <div><ListChecks size={18} />Changelog</div>
                <div><BookOpen size={18} />Evidence</div>
              </nav>
              <div className="ws-recent">
                <p>Recent builds</p>
                {['Mindfries', 'DRISHTI-UGV', 'OzymorLab', 'Viking Validators'].map((r) => <span key={r}>{r}</span>)}
              </div>
            </aside>

            <div className="ws-col" style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
              <div className="ws-title">New build <span style={{ display: 'flex', gap: 10 }} className="muted"><Plus size={18} /><MoreHorizontal size={18} /></span></div>
              <motion.div className="msg-user" {...step(0.1)}>
                <div className="bub">{ws.request}</div><span className="avatar">You</span>
              </motion.div>
              <motion.div className="msg-bot" {...step(0.7)}>
                <span className="avatar me">CG</span>
                <div style={{ display: 'grid', gap: 10, flex: 1 }}>
                  <div className="card">{ws.reply}<div className="small muted" style={{ marginTop: 4 }}>Planning the workflow…</div></div>
                  {ws.streams.map((s, i) => (
                    <motion.div key={s.name} className="card stream" style={{ maxWidth: 360 }} {...step(1.2 + i * 0.25)}>
                      <span className="ic" style={{ background: s.color }}>{s.name[0]}</span>
                      <div><div>{s.name}</div><div className="small muted">{s.status}</div></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="msg-bot" {...step(2.3)}>
                <span className="avatar me">CG</span>
                <div className="card" style={{ flex: 1, display: 'grid', gap: 12 }}>
                  <div>Shipped. It’s live.</div>
                  <a href="https://mindfries.com" target="_blank" rel="noopener noreferrer" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 14, alignItems: 'center' }}>
                    <img src="/products/mindfries-poster.webp" alt="Mindfries launch card" style={{ borderRadius: 10, boxShadow: '0 0 0 1px var(--line)' }} loading="lazy" />
                    <div><div>mindfries.com</div><div className="small muted">AI hiring platform</div></div>
                  </a>
                  <div className="bar" aria-hidden="true"><motion.div initial={{ width: '0%' }} animate={live ? { width: '100%' } : {}} transition={{ duration: 1.6, ease, delay: 2.6 }} style={{ background: 'var(--green)' }} /></div>
                </div>
              </motion.div>
            </div>

            <aside className="ws-col ws-right">
              <div className="ws-title">Mindfries <MoreHorizontal size={18} className="muted" /></div>
              <p className="small muted" style={{ margin: '0 0 10px' }}>Stack</p>
              {ws.stack.map((s, i) => (
                <motion.div key={s} className="list-row" {...step(0.9 + i * 0.12)}><span>{s}</span><span className="ok-dot" /></motion.div>
              ))}
              <p className="small muted" style={{ margin: '22px 0 10px' }}>Deliverables</p>
              {ws.deliverables.map((d, i) => (
                <motion.div key={d} className="list-row" {...step(1.8 + i * 0.2)}><span>{d}</span><Check size={16} color="var(--green)" /></motion.div>
              ))}
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Stack: tiles float around the headline with scroll parallax ── */
const SPOTS = [
  [4, 8, -6], [16, 6, 5], [6, 30, 4], [80, 6, 6], [90, 12, -4], [86, 34, -5],
  [5, 62, -5], [3, 84, 6], [14, 82, -3], [84, 60, 5], [80, 84, -6], [92, 80, 4],
];

const SPOTS_M = [[6, 3, -6], [32, 1, 5], [62, 3, -4], [86, 1, 6], [6, 86, 5], [32, 89, -4], [62, 86, 6], [86, 89, -5]];

export function Stack() {
  const narrow = typeof window !== 'undefined' && window.matchMedia('(max-width: 700px)').matches;
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ys = [useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [90, -90]), useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]), useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [140, -140])];

  return (
    <section className="panel stack-sec" ref={ref}>
      {stack.items.map((t, i) => {
        const [l, tp, r] = (narrow ? SPOTS_M[i] : SPOTS[i]) || SPOTS[i];
        return (
          <motion.div key={t.name} className="app" style={{ left: narrow ? `calc(${l}% - 39px)` : `calc(${l}% - 40px)`, top: `${tp}%`, y: ys[i % 3], rotate: r }}
            initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 160, damping: 16, delay: i * 0.04 }}
            whileHover={{ scale: 1.08, rotate: 0 }}>
            <span className="mk" style={{ background: t.color }}>{t.mark}</span>{t.name}
          </motion.div>
        );
      })}
      <div className="inner center" style={{ position: 'relative', zIndex: 2 }}>
        <Lines lines={stack.title} />
        <Fade><p className="sub">{stack.sub}</p></Fade>
      </div>
    </section>
  );
}
