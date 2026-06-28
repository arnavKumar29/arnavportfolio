import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useScatter } from '../hooks/useScatter';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const scatterRef = useScatter(130, 30);

  return (
    <section id="about" ref={ref} className="relative bg-black py-24 md:py-32 border-t border-line">
      <div className="px-5 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-14">
          <span className="text-red text-[13px] font-bold font-mono">01</span>
          <span className="text-gray text-[13px] uppercase tracking-[0.2em] font-body">about</span>
          <span className="flex-1 h-px bg-line ml-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-3">
            <h2 className="font-display font-bold text-white leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(28px, 4.5vw, 52px)' }}>
              I build AI tools<br /><span className="text-red">that actually ship.</span>
            </h2>
            <div className="mt-8 space-y-4 text-[14px] font-body text-light leading-[1.85]">
              <p>Not a prompt engineer who writes blog posts. I write the retrieval pipelines, evaluation frameworks, and production infrastructure that makes AI tools useful.</p>
              <p>Comfortable across the full stack — PyTorch models and vector databases to React frontends and CI/CD pipelines. If it needs building, I'll figure it out.</p>
              <p>Currently studying CS (AI & Robotics) at VIT Chennai. The real learning happens in production.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 }} className="lg:col-span-2">
            <div className="border border-line relative box-glow tilt-card">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
                <span className="w-2.5 h-2.5 rounded-full bg-red" />
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="w-2.5 h-2.5 rounded-full bg-border" />
                <span className="text-gray text-[10px] ml-auto font-mono">config.json</span>
              </div>
              <div className="p-5 text-[12px] space-y-2.5 font-mono">
                <p><span className="text-muted">{'{'}</span></p>
                <p className="pl-4"><span className="text-red">"name"</span><span className="text-muted">:</span> <span className="text-light">"Arnav Kumar"</span><span className="text-muted">,</span></p>
                <p className="pl-4"><span className="text-red">"role"</span><span className="text-muted">:</span> <span className="text-light">"AI Engineer"</span><span className="text-muted">,</span></p>
                <p className="pl-4"><span className="text-red">"location"</span><span className="text-muted">:</span> <span className="text-light">"India"</span><span className="text-muted">,</span></p>
                <p className="pl-4"><span className="text-red">"university"</span><span className="text-muted">:</span> <span className="text-light">"VIT Chennai"</span><span className="text-muted">,</span></p>
                <p className="pl-4"><span className="text-red">"degree"</span><span className="text-muted">:</span> <span className="text-light">"B.Tech CS (AI)"</span><span className="text-muted">,</span></p>
                <p className="pl-4"><span className="text-red">"status"</span><span className="text-muted">:</span> <span className="text-light">"</span><span className="text-red font-bold">open to work</span><span className="text-light">"</span></p>
                <p><span className="text-muted">{'}'}</span></p>
              </div>
              <div className="absolute -top-px -right-px w-4 h-4 border-t border-r border-red" />
              <div className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-red" />
            </div>

            <div ref={scatterRef} className="mt-5 flex flex-wrap gap-2">
              {['Deep Learning', 'Systems Design', 'Fast Shipping', 'Product Sense', 'Eval Frameworks'].map((t) => (
                <span key={t} className="scatter-tag text-[10px] font-body text-light border border-border px-3 py-1.5 uppercase tracking-wider hover:border-red hover:text-red">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
