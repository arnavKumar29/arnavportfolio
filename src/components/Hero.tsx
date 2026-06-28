import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Cube from './Cube';
import { useMagnetic } from '../hooks/useMagnetic';

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        if (i <= text.length) { setDisplayed(text.slice(0, i)); i++; }
        else { setDone(true); clearInterval(iv); }
      }, 45);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [text, delay]);
  return <span>{displayed}{!done && <span className="animate-blink text-red">_</span>}</span>;
}

function Counter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [value, setValue] = useState(0);
  const num = parseInt(target.replace(/\D/g, ''));
  const prefix = target.replace(/[0-9]/g, '');
  useEffect(() => {
    const t = setTimeout(() => {
      let f = 0;
      const iv = setInterval(() => {
        f++;
        setValue(Math.min(Math.round((f / 35) * num), num));
        if (f >= 35) clearInterval(iv);
      }, 30);
    }, 2800);
    return () => clearTimeout(t);
  }, [num]);
  return <span className="text-red font-bold text-[24px] font-display tabular-nums">{prefix}{value}{suffix}</span>;
}

function MagneticCTA({ children, onClick, primary = false }: { children: React.ReactNode; onClick: () => void; primary?: boolean }) {
  const ref = useMagnetic(0.25);
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      data-hover
      className={`magnetic-btn text-[13px] font-body font-semibold px-8 py-4 uppercase tracking-wider ${
        primary
          ? 'bg-red hover:bg-white text-black hover:shadow-[0_0_30px_rgba(255,0,51,0.2)]'
          : 'btn-ghost'
      }`}
    >
      {children}
    </button>
  );
}

function MagneticLink({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useMagnetic(0.25);
  return (
    <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} target="_blank" rel="noopener noreferrer" data-hover
      className="magnetic-btn btn-ghost text-[13px] font-body font-semibold px-8 py-4 uppercase tracking-wider inline-flex items-center gap-2"
    >
      {children}
      <svg width="10" height="10" viewBox="0 0 12 12"><path d="M3 9L9 3M9 3H5M9 3v4" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
    </a>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  const roleRef = useRef<HTMLDivElement>(null);

  // Scatter role badges
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!roleRef.current) return;
      roleRef.current.querySelectorAll<HTMLElement>('.scatter-tag').forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = cx - e.clientX, dy = cy - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          const p = (1 - dist / 150) * 25;
          const a = Math.atan2(dy, dx);
          el.style.transform = `translate(${Math.cos(a) * p}px, ${Math.sin(a) * p}px)`;
        } else {
          el.style.transform = 'translate(0,0)';
        }
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,0,51,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.5) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-px bg-red/10" style={{ animation: 'scanline 4s linear infinite' }} />
      </div>

      <div className="absolute right-[6%] md:right-[12%] top-1/2 -translate-y-1/2 opacity-70 hidden md:block">
        <Cube size={180} />
      </div>
      <div className="absolute right-[2%] md:right-[8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] hidden md:block pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-red/[0.07]" style={{ animation: 'pulse-ring 4s ease-in-out infinite' }} />
        <div className="absolute inset-6 rounded-full border border-red/[0.05]" style={{ animation: 'pulse-ring 4s ease-in-out infinite 0.5s' }} />
        <div className="absolute inset-12 rounded-full border border-red/[0.03]" style={{ animation: 'pulse-ring 4s ease-in-out infinite 1s' }} />
      </div>

      <div className="relative z-10 px-5 md:px-8 lg:px-16 w-full pt-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="flex items-center gap-2 mb-8">
            <span className="text-red text-[13px] font-bold font-mono">~</span>
            <span className="text-gray text-[12px] font-mono"><TypingText text="./arnav --introduce" delay={500} /></span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}
            className="font-display font-extrabold text-white uppercase tracking-tight"
            style={{ fontSize: 'clamp(52px, 12vw, 150px)', lineHeight: 0.9 }}
          >
            Arnav<br /><span className="text-red text-glow">Kumar</span>
          </motion.h1>

          <motion.div ref={roleRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.7 }} className="flex flex-wrap gap-2 mt-6">
            {['AI Engineer', 'Product Builder', 'Full-Stack Dev'].map((r) => (
              <span key={r} className="scatter-tag text-[11px] font-body text-light border border-border px-4 py-2 uppercase tracking-wider hover:border-red hover:text-red">
                {r}
              </span>
            ))}
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.0 }}
            className="mt-6 max-w-lg text-[14px] font-body text-light leading-[1.8]"
          >
            Shipping real AI tools — from adaptive retrieval pipelines to custom developer environments. Full-loop: discovery, spec, build, measure.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 2.3 }} className="flex flex-wrap items-center gap-3 mt-10">
            <MagneticCTA onClick={() => scrollTo('#projects')} primary>View projects</MagneticCTA>
            <MagneticCTA onClick={() => scrollTo('#contact')}>Contact me</MagneticCTA>
            <MagneticLink href="https://github.com/arnavKumar29">Github</MagneticLink>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7 }} className="flex flex-wrap gap-10 mt-16">
            {[{ target: '02', label: 'internships' }, { target: '04', label: 'shipped projects' }, { target: '5', label: 'training steps', suffix: 'M' }].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <Counter target={s.target} suffix={s.suffix || ''} />
                <span className="text-muted text-[10px] uppercase tracking-wider font-body">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray text-[9px] uppercase tracking-[0.3em] font-mono">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-5 bg-gradient-to-b from-red to-transparent" />
      </motion.div>

      <div className="absolute bottom-28 right-6 opacity-40 md:hidden"><Cube size={90} /></div>
    </section>
  );
}
