import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const jobs = [
  {
    id: 'stratbeans', role: 'SDE Intern', company: 'Stratbeans Learning Solutions', period: 'May – Jul 2026',
    bullets: [
      'Built a PDF ingestion and document Q&A product using FastAPI, Unstructured, OpenSearch, and Weaviate — end-to-end from user requirements to a working retrieval pipeline',
      'Designed automated n8n workflows orchestrating the full ingestion-to-retrieval lifecycle, cutting manual processing time significantly',
      'Wrote, iterated, and evaluated LLM prompts for customer-facing AI features; built evaluation datasets and measured output quality',
    ],
    stack: ['FastAPI', 'Weaviate', 'OpenSearch', 'n8n', 'LLM'],
  },
  {
    id: 'appen', role: 'AI Intern', company: 'Appen AI India Pvt. Ltd., Hyderabad', period: 'May – Jul 2025',
    bullets: [
      'Shipped a full-stack Nutrition Tracking MVP (React, TypeScript, Supabase) with 1M+ food items and AI-generated plans — sole engineer, 3-month sprint, production-ready',
      'Drove product prioritisation using planning poker and Agile/JIRA; conducted competitor analysis and user research that shaped the feature roadmap',
      'Obsessed over UX details — spacing, interaction flows, onboarding — resulting in a polished production product',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'AI', 'Product'],
  },
];

function JobCard({ job, index }: { job: typeof jobs[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`border relative transition-all duration-300 ${expanded ? 'border-red/30 box-glow' : 'border-line hover:border-border'}`}
    >
      {expanded && (<><div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-red" /><div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-red" /></>)}
      <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-between p-5 md:p-6 text-left" data-hover>
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${expanded ? 'bg-red' : 'bg-muted/40'}`} />
            <p className="text-white text-[16px] font-display font-bold truncate">{job.role}</p>
          </div>
          <p className="text-gray text-[12px] mt-1 ml-5 font-body">{job.company} <span className="text-muted mx-1">/</span> {job.period}</p>
        </div>
        <motion.div animate={{ rotate: expanded ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-red text-lg flex-shrink-0 ml-4 w-6 h-6 border border-border flex items-center justify-center font-mono">
          <span className="leading-none">+</span>
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-line pt-5">
          <ul className="space-y-3">
            {job.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-[13px] font-body text-light leading-[1.7]">
                <svg width="12" height="12" viewBox="0 0 12 12" className="text-red flex-shrink-0 mt-[5px]"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5 mt-5">
            {job.stack.map((s) => (
              <span key={s} className="text-[10px] font-mono text-red/70 border border-red/20 px-2.5 py-1 uppercase tracking-wider">{s}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="relative bg-black py-24 md:py-32 border-t border-line">
      <div className="px-5 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-14">
          <span className="text-red text-[13px] font-bold font-mono">02</span>
          <span className="text-gray text-[13px] uppercase tracking-[0.2em] font-body">experience</span>
          <span className="flex-1 h-px bg-line ml-3" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 }}
          className="font-display text-white font-bold leading-[1.05] tracking-tight mb-10" style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
        >
          Where I've <span className="text-red">shipped</span> real work
        </motion.h2>

        <div className="space-y-3">{jobs.map((job, i) => <JobCard key={job.id} job={job} index={i} />)}</div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-6 border border-line p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" className="text-red flex-shrink-0"><path d="M10 2L2 7l8 5 8-5-8-5z" stroke="currentColor" strokeWidth="1.2" fill="none" /><path d="M2 12l8 5 8-5" stroke="currentColor" strokeWidth="1.2" fill="none" /></svg>
          <div className="flex-1">
            <p className="text-white text-[15px] font-display font-bold">B.Tech CS <span className="text-red">(AI & Robotics)</span></p>
            <p className="text-gray text-[12px] mt-1 font-body">Vellore Institute of Technology, Chennai / 2023 – 2027</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['AI', 'ML', 'DSA', 'Databases', 'Software Eng'].map((c) => (
              <span key={c} className="text-[10px] font-mono text-gray border border-border px-2.5 py-1 uppercase tracking-wider">{c}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
