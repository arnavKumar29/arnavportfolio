import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Adaptive RAG Engine',
    short: 'Self-learning document intelligence pipeline with full observability',
    long: 'Production-grade RAG system with adaptive retrieval (Weaviate dense + OpenSearch BM25 + RRF fusion), BGE cross-encoder reranking, semantic caching, and a self-learning query router that evolves from rule-based to ML-driven. Multi-agent LangGraph workflow with RAGAS auto-evaluation on every query.',
    highlights: [
      'Self-learning query router: rule-based to ML to Thompson Sampling',
      'Full observability: OpenTelemetry to Jaeger, Prometheus, Grafana dashboards',
      'Streaming RAG with semantic cache (Redis + Weaviate)',
      'Deployed on Hetzner VPS via GitHub Actions CI/CD',
      'Sentence-level hallucination boundary detection — flags ungrounded claims in real-time',
    ],
    stack: ['FastAPI', 'Weaviate', 'OpenSearch', 'LangGraph', 'Redis', 'PostgreSQL', 'Docker', 'Prometheus', 'Grafana'],
    link: 'https://github.com/arnavKumar29/adaptiverag-main',
    status: 'Production',
  },
  {
    title: 'ArnavIDE',
    short: 'AI-powered Developer OS that learns how you code',
    long: 'A full Developer Operating System — IDE, AI engine, knowledge graph, and analytics platform. Monaco editor with multi-language execution, embedded terminal, built-in LeetCode, and a 3D knowledge graph. The AI watches how you code, learns your patterns, and gets smarter — zero paid APIs, everything runs locally.',
    highlights: [
      'Custom Style Encoder (Transformer + LoRA) that learns personal coding style',
      'RL Feedback Agent (PPO) that improves suggestions from accept/reject signals',
      'Predictive Debugger (BiLSTM) that warns about bugs before you run',
      'Knowledge GNN connecting code, notes, and LeetCode problems',
      '3D interactive knowledge graph (Three.js)',
    ],
    stack: ['Tauri 2', 'React', 'TypeScript', 'FastAPI', 'PyTorch', 'Neo4j', 'PostgreSQL', 'Redis', 'Three.js'],
    link: 'https://github.com/arnavKumar29/arnav-ide',
    status: 'In Development',
  },
  {
    title: 'Arnav Terminal',
    short: 'Next-gen AI-native terminal with floating UI aesthetic',
    long: 'A high-performance terminal built with Tauri 2 and Rust. WebGL-accelerated rendering (xterm.js), split-pane multitasking, agentic AI workflows that can read/write/execute with permission, integrated CodeMirror 6 editor with real-time AI autocomplete, built-in web preview, and native Git graph UI. Fully local-first — no telemetry, no tracking.',
    highlights: [
      'Ultra-fast WebGL terminal rendering engine',
      'Agentic AI workflows — read, write, grep, execute with user permission',
      'Integrated CodeMirror 6 with hunk-by-hunk diff reviewing',
      'Built-in file explorer, Git graph, and local dev server preview',
      'Supports Anthropic, OpenAI, Ollama, LM Studio backends',
    ],
    stack: ['Tauri 2', 'Rust', 'React', 'TypeScript', 'xterm.js', 'CodeMirror 6'],
    link: 'https://github.com/arnavKumar29/arnav-terminal',
    status: 'Released',
  },
  {
    title: 'OpenSearch + Weaviate RAG',
    short: 'Hybrid search pipeline combining lexical and semantic retrieval',
    long: 'Self-contained pipeline for document ingestion and search combining Unstructured PDF extraction, OpenSearch keyword indexing, and Weaviate semantic indexing with streaming RAG. FastAPI testbed with SSE streaming endpoints and a minimal frontend.',
    highlights: [
      'Dual indexing: OpenSearch (lexical) + Weaviate (semantic)',
      'Unstructured PDF extraction with chunk-level processing',
      'SSE streaming RAG query endpoint',
      'Multivector collection with page images in Weaviate',
    ],
    stack: ['Python', 'FastAPI', 'OpenSearch', 'Weaviate', 'Unstructured', 'OpenAI'],
    link: 'https://github.com/arnavKumar29/OpensearchWeaviateRag',
    status: 'Complete',
  },
];

function StatusBadge({ status }: { status: string }) {
  const color =
    status === 'Released' || status === 'Production' || status === 'Complete'
      ? 'bg-red/10 text-red border-red/20'
      : status === 'In Development'
      ? 'bg-white/5 text-gray border-line'
      : 'bg-white/5 text-muted border-line';

  return (
    <span className={`text-[9px] font-mono uppercase tracking-[0.15em] px-2 py-0.5 border ${color}`}>
      {status}
    </span>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`border border-line bg-panel relative group hover:border-red/30 transition-colors duration-300 ${
        featured ? 'box-glow' : ''
      }`}
    >
      {/* Corner accents */}
      <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-line group-hover:border-red transition-colors duration-300" />
      <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-line group-hover:border-red transition-colors duration-300" />

      {/* Header */}
      <div className="p-5 md:p-6 pb-0">
        <div className="flex items-start justify-between gap-3 mb-1">
          <div className="min-w-0">
            {featured && (
              <span className="text-[9px] text-red uppercase tracking-[0.2em] mb-2 block font-bold">
                Featured
              </span>
            )}
            <h3 className="text-white text-[17px] md:text-[20px] font-display font-bold tracking-tight">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <StatusBadge status={project.status} />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-border hover:border-red flex items-center justify-center text-gray hover:text-red transition-colors group/link"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="group-hover/link:translate-x-[1px] group-hover/link:-translate-y-[1px] transition-transform"
              >
                <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-gray text-[12px] mt-1">{project.short}</p>
      </div>

      {/* Body */}
      <div className="px-5 md:px-6 pb-5 md:pb-6 mt-4">
        <p className="font-body text-light text-[12px] md:text-[13px] leading-[1.75] mb-5">{project.long}</p>

        <div className="space-y-2 mb-5">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex gap-2.5 text-[11px] md:text-[12px]">
              <svg width="8" height="8" viewBox="0 0 8 8" className="text-red flex-shrink-0 mt-[5px]">
                <rect width="8" height="8" fill="currentColor" rx="1" />
              </svg>
              <span className="text-light leading-[1.65]">{h}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[9px] md:text-[10px] font-mono text-red/60 border border-red/15 px-2.5 py-1 uppercase tracking-wider hover:bg-red/10 hover:text-red transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="relative bg-black py-24 md:py-32 border-t border-line">
      <div className="px-5 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="text-red text-[13px] font-bold font-mono">03</span>
          <span className="text-gray text-[13px] uppercase tracking-[0.2em] font-body">projects</span>
          <span className="flex-1 h-px bg-line ml-3" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-display text-white font-bold leading-[1.05] tracking-tight mb-3"
          style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}
        >
          Things I've <span className="text-red">built</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray text-[12px] mb-10"
        >
          {projects.length} repositories / Real systems with real complexity
        </motion.p>

        {/* Featured — Adaptive RAG Engine full width */}
        <div className="mb-4">
          <ProjectCard project={projects[0]} index={0} featured />
        </div>

        {/* Second row — ArnavIDE + Arnav Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <ProjectCard project={projects[1]} index={1} />
          <ProjectCard project={projects[2]} index={2} />
        </div>

        {/* Third row — OpenSearch + Weaviate RAG */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:col-span-2 lg:max-w-[calc(50%-8px)]">
            <ProjectCard project={projects[3]} index={3} />
          </div>
        </div>

        {/* GitHub profile link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/arnavKumar29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red hover:bg-white text-black text-[12px] font-bold px-7 py-3 uppercase tracking-wider transition-colors"
          >
            View all on GitHub
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path d="M3 9L9 3M9 3H4M9 3v5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
