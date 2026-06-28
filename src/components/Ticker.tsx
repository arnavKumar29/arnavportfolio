import { motion } from 'framer-motion';

export default function Ticker({ text }: { text: string }) {
  const items = Array(10).fill(text);
  return (
    <div className="border-t border-b border-line overflow-hidden py-2.5 bg-black">
      <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="flex whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="text-[10px] uppercase tracking-[0.25em] text-border mx-6 flex items-center gap-6 font-body">
            {t}
            <svg width="6" height="6" viewBox="0 0 6 6" className="text-red/30"><rect width="6" height="6" fill="currentColor" transform="rotate(45 3 3)" /></svg>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
