import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const items = [
  { label: 'Building', value: 'ArnavIDE — AI-powered Developer OS', link: 'https://github.com/arnavKumar29/arnav-ide', active: true },
  { label: 'Studying', value: 'B.Tech CS (AI & Robotics), VIT Chennai', link: null, active: false },
  { label: 'Exploring', value: 'Agentic workflows, self-improving retrieval systems', link: null, active: false },
  { label: 'Reading', value: 'Papers on Thompson Sampling & continual learning', link: null, active: false },
];

export default function Now() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative bg-panel py-16 md:py-20 border-t border-b border-line">
      <div className="px-5 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-8">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-red opacity-50" /><span className="relative rounded-full h-2 w-2 bg-red" /></span>
          <span className="text-white text-[13px] font-display font-bold uppercase tracking-[0.15em]">Now</span>
          <span className="text-muted text-[11px] font-body ml-2">What I'm currently up to</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
              className={`border p-4 relative group transition-all duration-300 hover:translate-y-[-2px] ${item.active ? 'border-red/30 box-glow' : 'border-line hover:border-border'}`}
            >
              {item.active && <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-red" />}
              <p className="text-red text-[10px] uppercase tracking-[0.2em] font-display font-bold mb-2">{item.label}</p>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" data-hover className="font-body text-white text-[12px] leading-[1.6] hover:text-red transition-colors inline-flex items-center gap-1.5">
                  {item.value}
                  <svg width="8" height="8" viewBox="0 0 12 12" className="flex-shrink-0 opacity-50"><path d="M3 9L9 3M9 3H5M9 3v4" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                </a>
              ) : (
                <p className="font-body text-light text-[12px] leading-[1.6]">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
