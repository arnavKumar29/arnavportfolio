import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

const contacts = [
  { label: 'email', value: 'arnar.kumar29@gmail.com', href: 'mailto:arnar.kumar29@gmail.com',
    svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="3" width="14" height="10" rx="1" /><path d="M1 4l7 5 7-5" /></svg> },
  { label: 'phone', value: '+91 8178852365', href: 'tel:+918178852365',
    svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M5 1h6v14H5z" rx="1" /><circle cx="8" cy="12.5" r="0.8" fill="currentColor" /></svg> },
  { label: 'github', value: 'arnavKumar29', href: 'https://github.com/arnavKumar29',
    svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M6 12c-2.5.8-2.5-1-3.5-1.2M10 14v-2.5c.1-.8-.1-1.3-.4-1.6 1.6-.2 3.2-.8 3.2-3.5 0-.8-.3-1.5-.8-2 .1-.5.1-1.2-.1-2 0 0-.7-.2-2.2.8a7.4 7.4 0 00-4 0C4.2 2.2 3.5 2.4 3.5 2.4c-.2.8-.2 1.5-.1 2-.5.5-.8 1.2-.8 2 0 2.7 1.6 3.3 3.2 3.5-.2.2-.4.6-.4 1.2V14" /></svg> },
  { label: 'linkedin', value: 'arnavkumar291006', href: 'https://linkedin.com/in/arnavkumar291006',
    svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="1" y="1" width="14" height="14" rx="2" /><path d="M5 6.5v4M5 4.5v.01M7.5 10.5v-2.3c0-.7.3-1.2 1-1.2s.8.5.8 1.2v2.3M7.5 6.5v4" /></svg> },
];

function MagneticContactCard({ c, i, inView }: { c: typeof contacts[0]; i: number; inView: boolean }) {
  const ref = useMagnetic(0.15);
  return (
    <motion.a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={c.href}
      target={c.href.startsWith('http') ? '_blank' : undefined}
      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
      data-hover
      className="magnetic-btn border border-border p-5 flex items-center gap-4 group hover:border-red/40 relative"
    >
      <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-border group-hover:border-red transition-colors" />
      <div className="w-10 h-10 border border-border group-hover:border-red flex items-center justify-center text-gray group-hover:text-red transition-colors flex-shrink-0">{c.svg}</div>
      <div className="min-w-0 flex-1">
        <p className="text-gray text-[10px] uppercase tracking-[0.2em] font-mono">{c.label}</p>
        <p className="text-white text-[14px] font-body font-medium mt-1 truncate group-hover:text-red transition-colors">{c.value}</p>
      </div>
      <svg width="14" height="14" viewBox="0 0 14 14" className="text-gray group-hover:text-red group-hover:translate-x-0.5 transition-all flex-shrink-0">
        <path d="M4 10L10 4M10 4H5M10 4v5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} className="relative bg-black py-24 md:py-32 border-t border-line overflow-hidden">
      <div className="absolute -bottom-32 -right-32 w-64 h-64 border border-red/[0.06] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 border border-red/[0.04] rounded-full pointer-events-none" />

      <div className="px-5 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-14">
          <span className="text-red text-[13px] font-bold font-mono">05</span>
          <span className="text-gray text-[13px] uppercase tracking-[0.2em] font-body">contact</span>
          <span className="flex-1 h-px bg-line ml-3" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-white font-bold leading-[1] tracking-tight mb-4" style={{ fontSize: 'clamp(30px, 6vw, 72px)' }}
        >
          Let's build<br /><span className="text-red text-glow">something real</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="font-body text-light text-[14px] max-w-md mb-12 leading-[1.7]">
          Open for internships, freelance, collaborations, or conversations about AI and building things that matter.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contacts.map((c, i) => <MagneticContactCard key={c.label} c={c} i={i} inView={inView} />)}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="mt-6 border border-red/20 bg-red/[0.03] p-4 md:p-5 flex items-center gap-4">
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute h-full w-full rounded-full bg-red opacity-50" />
            <span className="relative rounded-full h-2.5 w-2.5 bg-red" />
          </span>
          <span className="font-body text-light text-[13px]">Currently <span className="text-white font-bold">available</span> for new opportunities</span>
        </motion.div>
      </div>
    </section>
  );
}
