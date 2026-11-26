import { motion, AnimatePresence, useScroll, useTransform, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Check, Minus } from 'lucide-react';
import { Lines, Fade, Lights, Logo, Tile, ease, scrollToId } from '../components/ui';
import data from '../data/portfolio.json';

/* ── Cases: statement card with before/now, three roles to pick from ── */
export function Cases() {
  const c = data.cases;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setI((x) => (x + 1) % c.items.length), 7000);
    return () => clearInterval(t);
  }, [paused, reduce, c.items.length]);
  const it = c.items[i];

  return (
    <section className="panel" id="cases" style={{ padding: '140px 0 100px' }}>
      <div className="inner center">
        <Lines lines={c.title} />
        <Fade><p className="sub">{c.sub}</p></Fade>
      </div>
      <div className="inner" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <Fade y={40} className="case-card">
          <div className="case-main">
            <span className="case-mark" style={{ left: 24 }} aria-hidden="true">{'//'}</span>
            <AnimatePresence mode="wait">
              <motion.div key={it.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease }}>
                <p>{it.statement}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="case-changed">
            <div>What changed</div>
            <AnimatePresence mode="wait">
              <motion.div key={it.id} className="case-ba" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <div><div className="k">BEFORE</div><div className="small">{it.before}</div></div>
                <div><div className="k">NOW</div><div className="small">{it.now}</div></div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="case-pick" role="tablist" aria-label="Roles">
            {c.items.map((x, k) => (
              <button key={x.id} role="tab" aria-selected={k === i} onClick={() => setI(k)}>
                {k === i && <motion.span layoutId="pick-bg" className="pick-bg" transition={{ type: 'spring', stiffness: 380, damping: 34 }} />}
                <span className="mono" style={{ background: x.color }}>{x.company.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>
                <span className="who">{x.company}<span>{x.role}, {x.period}</span></span>
              </button>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ── Plans: two-column comparison, no prices ── */
export function Plans() {
  const pl = data.plans;
  const mail = data.meta.email;
  return (
    <section className="panel" id="plans" style={{ padding: '140px 0 100px' }}>
      <div className="inner center">
        <Lines lines={pl.title} />
        <Fade><p className="sub">{pl.sub}</p></Fade>
      </div>
      <div className="inner">
        <div className="plans">
          <div className="plan-labels">
            <div className="plan-visual">
              <div style={{ width: 170 }}><Tile p={data.shelf[0]} i={0} /></div>
            </div>
            {pl.rows.map((r) => <div className="pl-row" key={r.label}>{r.label}</div>)}
          </div>
          {pl.columns.map((col, ci) => (
            <Fade key={col.name} delay={ci * 0.12} y={40} className={`plan-col ${col.hl ? 'b' : 'a'}`}>
              <div className="plan-head">
                <div className="plan-name">{col.name.toUpperCase()}{col.tag && <span className="plan-tag">{col.tag.toUpperCase()}</span>}</div>
                <div className="plan-big">{col.name}</div>
                <p>{col.fit}</p>
              </div>
              {pl.rows.map((r) => (
                <div className={`pc-row${r.ok[ci] ? '' : ' no'}`} key={r.label}>
                  <span><span className="lbl">{r.label}</span>{r.v[ci]}</span>
                  {r.ok[ci] ? <Check size={16} color={col.hl ? 'var(--red)' : 'var(--ink)'} /> : <Minus size={16} />}
                </div>
              ))}
              <div className="plan-cta">
                <a className="btn-red block" href={`mailto:${mail}?subject=${encodeURIComponent(col.subject)}`}>{col.cta}</a>
              </div>
            </Fade>
          ))}
        </div>
        <p className="sub plan-note">{pl.note}</p>
      </div>
    </section>
  );
}

/* ── FAQ: questions answered inside a chat window ── */
export function FAQ() {
  const [sel, setSel] = useState(0);
  const [thread, setThread] = useState([0]);
  const [typing, setTyping] = useState(false);
  const ref = useRef(null);
  const live = useInView(ref, { once: true, margin: '-20% 0px' });

  const ask = (k) => {
    setSel(k);
    if (thread[thread.length - 1] === k) return;
    setTyping(true);
    setThread((t) => [...t.slice(-2), k]);
    setTimeout(() => setTyping(false), 700);
  };

  return (
    <section className="panel" id="faq" style={{ padding: '120px 0' }}>
      <div className="inner faq">
        <Lines lines={['Have', 'questions?']} />
        <Fade y={40}>
          <div className="window" ref={ref}>
            <div className="win-top"><Lights /></div>
            <div className="win-body faq-chat">
              <div className="faq-q" role="group" aria-label="Pick a question">
                {data.faq.map((f, k) => (
                  <button key={k} aria-pressed={sel === k} onClick={() => ask(k)}>{f.q.split('?')[0]}?</button>
                ))}
              </div>
              {live && thread.map((k, n) => {
                const last = n === thread.length - 1;
                return (
                  <div key={`${k}-${n}`} style={{ display: 'grid', gap: 12 }}>
                    <motion.div className="msg-user" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }}>
                      <div className="bub">{data.faq[k].q}</div><span className="avatar">You</span>
                    </motion.div>
                    {last && typing ? (
                      <div className="msg-bot"><span className="avatar me">CG</span><div className="card typing" aria-label="Typing"><i /><i /><i /></div></div>
                    ) : (
                      <motion.div className="msg-bot" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease, delay: last ? 0.05 : 0 }}>
                        <span className="avatar me">CG</span><div className="card" style={{ maxWidth: 460 }}>{data.faq[k].a}</div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* Scales a line of text so it spans its container's width exactly */
function useFit(ref, box) {
  useLayoutEffect(() => {
    const fit = () => {
      const el = ref.current, b = box.current;
      if (!el || !b) return;
      el.style.fontSize = '100px';
      const w = el.scrollWidth;
      el.style.fontSize = `${(100 * (b.clientWidth * 0.96)) / w}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(box.current);
    return () => ro.disconnect();
  }, [ref, box]);
}

/* ── Closing: giant wide type slides in from both sides, then the footer ── */
export function Closing() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const x1 = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-35%', '0%']);
  const x2 = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['35%', '0%']);
  const { meta, closing } = data;
  const l1 = useRef(null), l2 = useRef(null);
  useFit(l1, ref);
  useFit(l2, ref);
  const pages = [['top', 'Home'], ['work', 'Work'], ['products', 'Products'], ['plans', 'Plans']];

  return (
    <>
      <section className="panel closing" ref={ref} id="contact">
        <a href={`mailto:${meta.email}`} aria-label={`${closing.lines.join(' ')}: email Chandan`}>
          <motion.p ref={l1} className="wide" style={{ x: x1 }} aria-hidden="true">{closing.lines[0]}</motion.p>
          <motion.p ref={l2} className="wide red" style={{ x: x2 }} aria-hidden="true">{closing.lines[1]}</motion.p>
        </a>
      </section>
      <footer className="panel">
        <div className="footer">
          <div className="foot-cell foot-brand">
            <div style={{ display: 'flex', gap: 8, width: '100%', maxWidth: 300, justifyContent: 'center' }}>
              {data.shelf.slice(0, 3).map((p, i) => (
                <div key={p.id} style={{ width: '33%', aspectRatio: '4/5', borderRadius: 14, overflow: 'hidden', transform: `rotate(${[-6, 2, 7][i]}deg)`, boxShadow: '0 14px 24px -14px rgba(0,0,0,.5), 0 0 0 1px rgba(0,0,0,.05)', background: '#fff' }}>
                  <img src={p.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} loading="lazy" />
                </div>
              ))}
            </div>
            <p className="small muted" style={{ margin: 0 }}>{closing.tagline}</p>
            <a className="btn-red sm" href={`mailto:${meta.email}`}>{closing.cta}</a>
          </div>
          <div className="foot-cell">
            <h4>PAGES</h4>
            {pages.map(([id, l]) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToId(id); }}>{l}</a>)}
          </div>
          <div className="foot-cell">
            <h4>PRODUCTS</h4>
            {data.products.slice(0, 4).map((p) => <a key={p.id} href={p.deliverable.url} target="_blank" rel="noopener noreferrer">{p.tab}</a>)}
          </div>
          <div className="foot-cell">
            <h4>SOCIALS</h4>
            {meta.links.map((l) => <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
            <a href={meta.resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div className="foot-bar">
          <span>© {new Date().getFullYear()} CHANDAN GIRI</span>
          <Logo />
          <span>{meta.email.toUpperCase()}</span>
        </div>
      </footer>
    </>
  );
}
