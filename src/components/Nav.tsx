import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'about', href: '#about' },
  { label: 'work', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -56 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 h-14 border-b transition-all duration-300 ${
          scrolled ? 'border-line bg-black/95 backdrop-blur-md' : 'border-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-full px-5 md:px-8 max-w-7xl mx-auto">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group magnetic-btn"
            data-hover
          >
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-red group-hover:rotate-90 transition-transform duration-500">
              <rect x="4" y="4" width="8" height="8" fill="currentColor" transform="rotate(45 8 8)" />
            </svg>
            <span className="font-display text-white text-[15px] font-bold tracking-tight">arnav</span>
            <span className="font-body text-gray text-[14px] font-light">.dev</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l, i) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                data-hover
                className="relative text-[12px] font-body text-light hover:text-white px-3 py-1.5 transition-all group tracking-wide"
              >
                <span className="text-red/50 text-[9px] mr-1 font-mono">0{i + 1}</span>
                {l.label}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-red opacity-40" />
              <span className="relative rounded-full h-2 w-2 bg-red" />
            </span>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]" data-hover>
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="block w-5 h-[1.5px] bg-white" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-5 h-[1.5px] bg-white" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="block w-5 h-[1.5px] bg-white" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black flex flex-col items-start justify-center px-8">
            {links.map((l, i) => (
              <motion.button key={l.label} onClick={() => scrollTo(l.href)} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} className="font-display text-[40px] font-bold text-white hover:text-red transition-colors leading-tight py-1">
                <span className="text-red text-[14px] font-mono font-normal mr-3 align-top">0{i + 1}</span>
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
