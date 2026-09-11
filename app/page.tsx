'use client'

import { useEffect, useState } from 'react'
import {
  ArrowUpRight, ChevronDown, Menu, X, Mail, FileText, Copy, Check,
} from 'lucide-react'

function Github({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function Linkedin({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.114 20.452H3.558V9h3.556v11.452Z" />
    </svg>
  )
}

const EMAIL = 'aman.pc0908@gmail.com'
const GITHUB = 'https://github.com/amanchoudhari09'
const LINKEDIN = 'https://www.linkedin.com/in/amanchoudhari'
const RESUME = '/resume.pdf'

const nav = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'work', label: 'work' },
  { id: 'engineering', label: 'engineering' },
  { id: 'research', label: 'research' },
  { id: 'contact', label: 'contact' },
]

const capabilities = [
  {
    title: 'Backend Systems',
    desc: 'Scalable APIs, high-volume data processing, and production engineering.',
    tags: ['Python', 'FastAPI', 'Django', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Distributed & Performance Engineering',
    desc: 'Parallel processing pipelines, load balancing, and throughput optimization.',
    tags: ['Multiprocessing', 'Load Balancing', 'Data Pipelines', 'Distributed Systems'],
  },
  {
    title: 'Applied AI',
    desc: 'Practical systems built on LLMs, RAG pipelines, AI agents, and MCP.',
    tags: ['LLMs', 'RAG', 'AI Agents', 'MCP', 'Prompt Engineering'],
  },
  {
    title: 'Real-Time AI',
    desc: 'Low-latency, multimodal systems for conversational voice and live interaction.',
    tags: ['LiveKit', 'WebRTC', 'Deepgram', 'Gemini'],
  },
]

const metrics = [
  { value: '+80%', label: 'data processing throughput', sub: 'Improved high-volume ingestion via multiprocessing.' },
  { value: '-70%', label: 'database write operations', sub: 'Reduced writes through pipeline and query optimization.' },
  { value: '10,000+', label: 'records migrated', sub: 'Healthcare Q&A records migrated without data loss.' },
  { value: '25%', label: 'faster issue resolution', sub: 'AI-powered workflow automation sped up resolution.' },
]

const experiences = [
  {
    id: 'sap',
    company: 'SAP Labs India',
    role: 'Developer Associate Consultant — Software Engineer',
    context: 'via NTT Data Business Solutions',
    date: 'Jan 2025 — Present',
    project: 'Network Scanner · Communication Enabling & Controlling',
    summary:
      'Engineered Python-based Capture and Loader services for high-volume enterprise network data ingestion.',
    bullets: [
      'Improved processing throughput by 80% through multiprocessing across capture and loader pools.',
      'Designed a min-heap-based load balancer to distribute workloads efficiently across processing pools.',
      'Reduced database write operations by 70% through ingestion pipeline and query optimization.',
      'Maintained production data pipelines and collaborated cross-functionally to deliver reliable backend services.',
    ],
    flow: ['Enterprise Network Data', 'Capture Services', 'Processing Pools', 'Load Balancer', 'Loader Services', 'Database'],
    labels: ['Python', 'Multiprocessing', 'Min-Heap', 'Data Ingestion', 'DB Optimization', 'Production Systems'],
  },
  {
    id: 'scriptlanes',
    company: 'Script Lanes',
    role: 'Software Development Engineering Intern',
    context: 'Pune, India',
    date: 'Jun 2024 — Aug 2024',
    project: 'OrthoAI — Healthcare Analytics Platform',
    summary:
      'Built backend APIs and database models for an AI-powered healthcare platform using Node.js, Prisma ORM, and PostgreSQL.',
    bullets: [
      'Processed 10,000+ healthcare Q&A records through an incremental ETL pipeline with dual-database architecture.',
      'Integrated Groq and OpenAI APIs to standardize and categorize medical queries.',
      'Powered REST APIs and analytics dashboards that improved customer issue resolution by 25%.',
      'Implemented real-time monitoring of AI interactions across the pipeline.',
    ],
    flow: ['Source Database', 'Incremental ETL', 'Groq / OpenAI LLM', 'Standardization + Categorization', 'Analytics DB', 'REST APIs'],
    labels: ['Node.js', 'Prisma ORM', 'PostgreSQL', 'LLM APIs', 'ETL', 'Analytics'],
  },
]

type Project = {
  title: string
  category: string
  featured: boolean
  tags: string[]
  description: string
  highlight: string
  flow: string[]
  github?: string
  demo?: string
  paper?: string
}

const projects: Project[] = [
  {
    title: 'AgentFlow AI',
    category: 'Multi-Agent AI Orchestration',
    featured: true,
    tags: ['Node.js', 'Gemini API', 'Firebolt', 'MCP', 'Gmail API'],
    description:
      'A full-stack multi-agent AI orchestration system that parses natural-language queries and routes them to specialized analytics and reporting agents, with Firebolt analytics via MCP and automated Gmail reporting.',
    highlight: 'Sub-second analytics · MCP integration',
    flow: ['User Query', 'AI Orchestrator', 'Analytics Agent + Report Agent', 'Firebolt (MCP) + Gmail', 'Final Response'],
    github: 'https://github.com/amanchoudhari09/agentflow-ai',
    demo: 'https://agentflow-ai-wsmw.onrender.com/',
  },
  {
    title: 'VoxPilot',
    category: 'Real-Time Multimodal AI Voice Agent',
    featured: true,
    tags: ['Python', 'LiveKit Agents', 'Gemini', 'Deepgram', 'Murf', 'WebRTC', 'Docker'],
    description:
      'A real-time multimodal AI voice agent platform with stateful dialogue management, dynamic tool execution, turn detection, real-time transcription, and TTS streaming over WebRTC.',
    highlight: 'Real-time speech-to-speech · Low latency',
    flow: ['Microphone', 'WebRTC + LiveKit', 'Deepgram STT', 'Turn Detection', 'Gemini LLM', 'Tool Execution', 'Murf TTS', 'Live Audio'],
    github: 'https://github.com/amanchoudhari09/VoxPilot',
    demo: 'https://vox-pilot-r8aotbr53-aman-choudharis-projects-0f1050b2.vercel.app/',
  },
  {
    title: 'Enterprise Knowledge Assistant',
    category: 'Enterprise RAG / Knowledge Retrieval',
    featured: true,
    tags: ['FastAPI', 'Streamlit', 'RAG', 'ChromaDB', 'Groq', 'Llama 3.3 70B'],
    description:
      'An end-to-end Enterprise Knowledge Assistant enabling natural-language querying over enterprise documents, with semantic retrieval and source-grounded LLM responses.',
    highlight: 'Semantic search · Source-grounded answers',
    flow: ['Enterprise Documents', 'Chunking', 'Embeddings', 'ChromaDB', 'Semantic Retrieval', 'Groq / Llama', 'Grounded Answer'],
    github: 'https://github.com/amanchoudhari09/Enterprise-Knowledge-Assistant',
  },
  {
    title: 'AI Resume Screening & Interview Scheduling',
    category: 'LLM-Powered Recruitment Automation',
    featured: false,
    tags: ['FastAPI', 'Groq', 'Pydantic v2', 'Embeddings', 'NocoDB', 'n8n'],
    description:
      'An end-to-end resume screening and interview scheduling backend that scores and ranks candidates against job descriptions using structured prompting and embedding-based duplicate detection.',
    highlight: 'LLM-driven JD matching',
    flow: ['Candidate Intake', 'JD Matching Engine', 'Duplicate Detection (Embeddings)', 'NocoDB', 'n8n Scheduling + Notifications'],
    github: 'https://github.com/amanchoudhari09/AI-Resume-Screening-Interview-Scheduling',
  },
  {
    title: 'DeepStegNet',
    category: 'Deep Learning / Computer Vision / Research',
    featured: false,
    tags: ['PyTorch', 'CNNs', 'OpenCV', 'Streamlit', 'Scikit-Image'],
    description:
      'A deep learning-based image steganography system using CNNs that embeds and extracts full-size secret images within cover images with high imperceptibility.',
    highlight: '90%+ recovery accuracy',
    flow: ['Cover + Secret Image', 'CNN Encoder', 'Encoded Image', 'CNN Decoder', 'Recovered Image'],
    github: 'https://github.com/amanchoudhari09/DeepStegNet',
    demo: 'https://deepstegnet.onrender.com/',
    paper: 'https://link.springer.com/chapter/10.1007/978-3-032-18907-3_26',
  },
  {
    title: 'Predico',
    category: 'Backend + Machine Learning',
    featured: false,
    tags: ['Django', 'PostgreSQL', 'Random Forest', 'REST APIs'],
    description:
      'An end-to-end disease prediction platform with authentication, role-based access, and a Random Forest model powering online consultation workflows.',
    highlight: '~80% model accuracy',
    flow: ['User Auth', 'Symptom Input', 'Random Forest Model', 'Prediction API', 'Consultation Dashboard'],
    github: 'https://github.com/amanchoudhari09/Predico',
    demo: 'https://predico.onrender.com/',
  },
]

const stack = [
  { cat: 'Languages', items: ['Python', 'C++', 'JavaScript', 'Java', 'SQL'] },
  { cat: 'Backend', items: ['FastAPI', 'Django', 'Flask', 'Node.js', 'REST APIs', 'Microservices', 'Prisma ORM'] },
  { cat: 'Databases', items: ['PostgreSQL', 'MySQL', 'SAP HANA', 'Firebolt DB'] },
  { cat: 'AI / Machine Learning', items: ['LLMs', 'AI Agents', 'RAG', 'MCP', 'Prompt Engineering', 'PyTorch', 'Scikit-learn', 'OpenCV'] },
  { cat: 'Cloud / DevOps', items: ['Docker', 'Git', 'GitHub', 'CI/CD', 'SAP BTP', 'Vercel', 'Render', 'GCP'] },
  { cat: 'Software Engineering', items: ['Data Structures & Algorithms', 'Distributed Systems', 'Multiprocessing', 'System Design'] },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span />{children}</p>
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="flow-diagram" aria-label="Architecture flow">
      {steps.map((step, i) => (
        <div className="flow-step" key={step}>
          <span className="flow-index">{String(i + 1).padStart(2, '0')}</span>
          <span>{step}</span>
          {i < steps.length - 1 && <ArrowUpRight className="flow-arrow" size={13} />}
        </div>
      ))}
    </div>
  )
}

function Diagram() {
  return (
    <div className="system-diagram" aria-label="System architecture diagram">
      <div className="diagram-core"><span className="pulse" /><b>AMAN</b><small>ENGINEERING</small></div>
      <div className="diagram-node node-a"><b>BACKEND</b><small>distributed</small></div>
      <div className="diagram-node node-b"><b>LLMs / RAG</b><small>applied ai</small></div>
      <div className="diagram-node node-c"><b>REAL-TIME AI</b><small>voice / mcp</small></div>
      <svg viewBox="0 0 500 300" role="presentation"><path d="M250 150L95 70M250 150L405 70M250 150L405 230M250 150L95 230" /></svg>
    </div>
  )
}

export default function Page() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string>('sap')
  const [activeProject, setActiveProject] = useState(0)
  const [openStack, setOpenStack] = useState<string | null>('AI / Machine Learning')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const currentExperience = experiences.find((e) => e.id === expanded) ?? experiences[0]
  const project = projects[activeProject]

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable — no-op, email is still visible/selectable
    }
  }

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="wordmark">AC<span>.</span></a>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a className="icon-link" href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" onClick={() => setOpen(false)}><Github size={16} /></a>
          <a className="icon-link" href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" onClick={() => setOpen(false)}><Linkedin size={16} /></a>
          <a className="nav-contact" href={RESUME} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>resume <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> open to software engineering &amp; AI opportunities</p>
          <h1>Backend systems.<br /><em>Intelligent</em> applications.</h1>
          <p className="hero-intro">
            I&apos;m Aman Choudhari, a Software Engineer building high-performance backend systems and intelligent AI
            applications. Currently at SAP Labs India, with hands-on experience in high-volume data processing,
            distributed systems, Generative AI, and AI agent orchestration.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">View my work <ArrowUpRight size={16} /></a>
            <a href={RESUME} target="_blank" rel="noreferrer" className="button button-secondary"><FileText size={14} /> Download resume</a>
          </div>
          <div className="hero-links">
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href={`mailto:${EMAIL}`}>Email <span>↗</span></a>
          </div>
        </div>
        <Diagram />
        <a href="#capabilities" className="scroll-cue">scroll to inspect <ChevronDown size={15} /></a>
      </section>

      <section id="capabilities" className="capabilities section-wrap reveal">
        <SectionLabel>01 / what i build</SectionLabel>
        <div className="cap-grid">
          {capabilities.map((cap, i) => (
            <article key={cap.title}>
              <span className="card-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
              <div className="tag-list">{cap.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="impact section-wrap reveal">
        <div className="impact-heading">
          <SectionLabel>02 / engineering impact</SectionLabel>
          <p>Numbers that tell the story.</p>
        </div>
        <div className="metrics metrics-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
              <small>{m.sub}</small>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="experience section-wrap reveal">
        <SectionLabel>03 / experience</SectionLabel>
        <div className="experience-layout">
          <div className="experience-list">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                className={expanded === exp.id ? 'experience-row active' : 'experience-row'}
                onClick={() => setExpanded(exp.id)}
              >
                <span className="experience-title"><b>{exp.company}</b><small>{exp.role}</small></span>
                <span className="experience-date">{exp.date}</span>
                <ChevronDown size={16} />
              </button>
            ))}
          </div>
          <div className="experience-detail">
            <span className="detail-kicker">{currentExperience.project}</span>
            <h2>{currentExperience.summary}</h2>
            <ul className="bullet-list">
              {currentExperience.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <FlowDiagram steps={currentExperience.flow} />
            <div className="tag-list">{currentExperience.labels.map((l) => <span key={l}>{l}</span>)}</div>
            <div className="detail-line"><span>context</span><b>{currentExperience.context}</b></div>
          </div>
        </div>
      </section>

      <section id="work" className="work section-wrap reveal">
        <div className="work-head">
          <SectionLabel>04 / selected work</SectionLabel>
          <div className="project-tabs" role="tablist">
            {projects.map((p, index) => (
              <button key={p.title} className={activeProject === index ? 'active' : ''} onClick={() => setActiveProject(index)} title={p.title}>
                {String(index + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>
        <div className="project-feature">
          <div className="project-copy">
            <p className="eyebrow">{project.category}{project.featured && <span className="badge">Featured</span>}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <p className="project-metric">{project.highlight}</p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="button button-secondary">
                  <Github size={14} /> GitHub
                </a>
              )}
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer" className="button button-primary">
                  Live demo <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="button button-disabled" aria-disabled="true">Live demo — n/a</span>
              )}
              {project.paper && (
                <a href={project.paper} target="_blank" rel="noreferrer" className="text-link">
                  Read paper <span>↗</span>
                </a>
              )}
            </div>
          </div>
          <div className="project-visual">
            <div className="visual-header"><span>system / overview</span><span>● live</span></div>
            <FlowDiagram steps={project.flow} />
          </div>
        </div>

        <div className="project-grid">
          {projects.map((p, i) => (
            <button key={p.title} className="project-card" onClick={() => setActiveProject(i)}>
              <span className="card-index">{String(i + 1).padStart(2, '0')}</span>
              <h4>{p.title}</h4>
              <p>{p.category}</p>
              <span className="project-card-links">
                {p.github && <Github size={13} />}
                {p.demo && <ArrowUpRight size={13} />}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section id="engineering" className="stack section-wrap reveal">
        <SectionLabel>05 / engineering stack</SectionLabel>
        <div className="stack-accordion">
          {stack.map((s) => (
            <div key={s.cat} className={openStack === s.cat ? 'stack-cat open' : 'stack-cat'}>
              <button onClick={() => setOpenStack(openStack === s.cat ? null : s.cat)}>
                <span>{s.cat}</span>
                <ChevronDown size={15} />
              </button>
              {openStack === s.cat && (
                <div className="tag-list stack-tags">{s.items.map((it) => <span key={it}>{it}</span>)}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="problem-solving section-wrap reveal">
        <SectionLabel>06 / problem solving</SectionLabel>
        <div className="ps-grid">
          <div className="ps-stat"><strong>1000+</strong><span>problems solved</span></div>
          <div className="ps-stat"><strong>70+</strong><span>competitive contests</span></div>
          <div className="ps-card"><b>LeetCode</b><strong>1901</strong><span>Knight · max rating</span></div>
          <div className="ps-card"><b>Codeforces</b><strong>1379</strong><span>Pupil · max rating</span></div>
        </div>
      </section>

      <section id="research" className="research section-wrap reveal">
        <SectionLabel>07 / research</SectionLabel>
        <div className="research-layout">
          <div>
            <h2>DeepStegNet</h2>
            <p>
              A deep learning-based image steganography system using CNNs for embedding and extracting full-size
              secret images within cover images with high imperceptibility.
            </p>
            <p className="project-metric">90%+ recovery accuracy</p>
            <p className="detail-kicker">Published at ICCCNet 2025 — Springer</p>
            <div className="project-links">
              <a href="https://link.springer.com/chapter/10.1007/978-3-032-18907-3_26" target="_blank" rel="noreferrer" className="button button-primary">Read paper <ArrowUpRight size={14} /></a>
              <a href="https://github.com/amanchoudhari09/DeepStegNet" target="_blank" rel="noreferrer" className="button button-secondary"><Github size={14} /> GitHub</a>
              <a href="https://deepstegnet.onrender.com/" target="_blank" rel="noreferrer" className="text-link">Live demo <span>↗</span></a>
            </div>
          </div>
          <FlowDiagram steps={['Cover + Secret Image', 'CNN Encoder', 'Encoded Image', 'CNN Decoder', 'Recovered Image']} />
        </div>
      </section>

      <section id="about" className="about section-wrap reveal">
        <div>
          <SectionLabel>08 / about</SectionLabel>
          <h2>The best systems<br />feel <em>inevitable.</em></h2>
        </div>
        <div className="about-copy">
          <p>
            I&apos;m a software engineer interested in the intersection of backend systems and artificial intelligence.
          </p>
          <p>
            My professional work has focused on high-throughput data processing, backend engineering, performance
            optimization, and enterprise systems. Outside of work, I build AI applications spanning LLMs, RAG,
            multi-agent systems, MCP, and real-time voice AI.
          </p>
          <p>
            I enjoy taking a problem from architecture to implementation and figuring out how to make the resulting
            system faster, more reliable, and easier to operate.
          </p>
          <div className="detail-line"><span>education</span><b>PICT Pune — B.E. ENTC · 2021–2025 · CGPA 8.73/10</b></div>
          <a className="text-link" href={`mailto:${EMAIL}`}>Say hello <span>↗</span></a>
        </div>
      </section>

      <section id="contact" className="contact section-wrap reveal">
        <SectionLabel>09 / contact</SectionLabel>
        <h2>Let&apos;s build something.</h2>
        <p className="contact-copy">Interested in working together, discussing an engineering opportunity, or talking systems and AI?</p>
        <div className="contact-actions">
          <a href={`mailto:${EMAIL}`} className="button button-primary"><Mail size={14} /> Email me</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="button button-secondary"><Linkedin size={14} /> LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="button button-secondary"><Github size={14} /> GitHub</a>
          <a href={RESUME} target="_blank" rel="noreferrer" className="button button-secondary"><FileText size={14} /> Resume</a>
        </div>
        <button className="email-copy" onClick={copyEmail}>
          {copied ? <Check size={13} /> : <Copy size={13} />} {EMAIL}
        </button>
      </section>

      <footer className="footer section-wrap">
        <div>
          <a href="#top" className="wordmark">AC<span>.</span></a>
          <p>Software Engineer · Backend + AI</p>
        </div>
        <div className="footer-links">
          <a href={GITHUB} target="_blank" rel="noreferrer">github <span>↗</span></a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">linkedin <span>↗</span></a>
          <a href={`mailto:${EMAIL}`}>email</a>
          <a href={RESUME} target="_blank" rel="noreferrer">resume <span>↗</span></a>
        </div>
        <small>© 2026 Aman Choudhari · Built with Next.js, TypeScript &amp; curiosity.</small>
      </footer>
    </main>
  )
}
