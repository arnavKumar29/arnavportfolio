import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useScatter } from '../hooks/useScatter';

const categories = [
  { label: 'AI / ML', skills: ['RAG Pipelines', 'LLM Evaluation', 'Prompt Engineering', 'Agentic Workflows', 'LangGraph', 'RAGAS', 'Vector Search', 'PyTorch'] },
  { label: 'Data', skills: ['SQL', 'pandas', 'NumPy', 'matplotlib', 'seaborn', 'Plotly', 'scikit-learn', 'EDA', 'Statistical Analysis'] },
  { label: 'Engineering', skills: ['FastAPI', 'React', 'TypeScript', 'Python', 'Docker', 'PostgreSQL', 'Redis', 'OpenSearch', 'Weaviate', 'n8n'] },
  { label: 'Observability', skills: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Distributed Tracing', 'CI/CD', 'GitHub Actions'] },
  { label: 'Product', skills: ['PRD Writing', 'User Research', 'Agile/JIRA', 'Sprint Planning', 'Product Analytics', 'Feature Prioritisation'] },
  { label: 'Tools', skills: ['Git', 'VS Code', 'Supabase', 'AWS S3/Bedrock', 'Hetzner VPS', 'JIRA'] },
];

function SkillRow({ cat, index, inView }: { cat: typeof categories[0]; index: number; inView: boolean }) {
  const scatterRef = useScatter(100, 40);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: 0.15 + index * 0.06 }}
      className="border-t border-line py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
    >
      <div className="md:col-span-3 flex items-center gap-2">
        <svg width="6" height="6" viewBox="0 0 6 6" className="text-red flex-shrink-0"><rect width="6" height="6" fill="currentColor" /></svg>
        <span className="text-white text-[14px] font-display font-bold">{cat.label}</span>
        <span className="text-gray text-[10px] ml-auto md:ml-2 font-mono">{cat.skills.length}</span>
      </div>
      <div ref={scatterRef} className="md:col-span-9 flex flex-wrap gap-1.5">
        {cat.skills.map((skill) => (
          <span key={skill} className="scatter-tag text-[11px] font-body text-light border border-border px-3 py-1.5 hover:bg-red hover:text-black hover:border-red">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="relative bg-black py-24 md:py-32 border-t border-line">
      <div className="px-5 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4 }} className="flex items-center gap-3 mb-14">
          <span className="text-red text-[13px] font-bold font-mono">04</span>
          <span className="text-gray text-[13px] uppercase tracking-[0.2em] font-body">skills</span>
          <span className="flex-1 h-px bg-line ml-3" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 }}
          className="font-display text-white font-bold leading-[1.05] tracking-tight mb-3" style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
        >
          The <span className="text-red">stack</span> I run on
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} className="text-gray text-[13px] font-body mb-10">
          Move your cursor over the tags.
        </motion.p>

        <div className="space-y-0">
          {categories.map((cat, i) => <SkillRow key={cat.label} cat={cat} index={i} inView={inView} />)}
          <div className="border-t border-line" />
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="mt-6 flex items-center justify-between text-[11px] text-gray font-mono">
          <span><span className="text-red">$</span> count --skills</span>
          <span>{categories.reduce((a, c) => a + c.skills.length, 0)} loaded<span className="text-red animate-blink ml-1">_</span></span>
        </motion.div>
      </div>
    </section>
  );
}
