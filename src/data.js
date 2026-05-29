// ============================================================
//  CONTENT MODEL
//  Everything is tagged with a `lens` so the role toggle can
//  reorder / re-rank the same underlying content.
//  lens values: 'software' | 'data' | 'both'
// ============================================================

export const PROFILE = {
  name: 'Tanishq Annavaram',
  // Headline changes with the active lens.
  headline: {
    all: 'Software Engineer & Data/ML Developer',
    software: 'Software Engineer — backend, distributed systems & APIs',
    data: 'Data & Machine Learning Developer — ML pipelines, CV & evaluation',
  },
  blurb: {
    all: 'CS senior at Rutgers (Dec 2026) who builds reliable backend systems and machine-learning pipelines end to end — from event-driven services to transformer models and computer-vision research.',
    software:
      'CS senior at Rutgers focused on backend and distributed systems. I build event-driven services, transactional APIs, and CI/CD pipelines that hold up under real infrastructure.',
    data:
      'CS senior at Rutgers working in robotics and CV research. I build object-centric ML pipelines, transformer models, and reproducible evaluation frameworks for real-world data.',
  },
  location: 'New Brunswick, NJ',
  email: 'tra53@scarletmail.rutgers.edu',
  altEmail: 'tanishqreddy101@gmail.com',
  phone: '848-313-9205',
  github: 'https://github.com/Tanishq111111111',
  linkedin: 'https://www.linkedin.com/in/tanishq-annavaram-86a139227',
  // Per-lens resume files (drop the PDFs into /public/resumes/)
  resume: {
    all: '/resumes/Annavaram_Tanishq_Resume.pdf',
    software: '/resumes/Software_Resume.pdf',
    data: '/resumes/Data_Resume.pdf',
  },
}

export const EDUCATION = {
  school: 'Rutgers University — New Brunswick, NJ',
  degree: 'B.S. in Computer Science',
  grad: 'Dec 2026',
  gpa: '3.75',
  coursework: [
    'Computer Architecture',
    'Intro to AI',
    'Database Management Systems',
    'Data Science',
    'Algorithms',
  ],
}

// ---- SKILLS -------------------------------------------------
// Grouped by category. Each skill can be tagged so the active
// lens surfaces the most relevant ones first (optional `lens`).
export const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'Java', 'C/C++', 'R', 'Kotlin', 'PHP', 'HTML/CSS', 'XML'],
  },
  {
    category: 'ML / AI',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'FAISS', 'BM25', 'OpenAI API'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'RabbitMQ', 'Redis'],
  },
  {
    category: 'Data',
    skills: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Streamlit'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'MSSQL', 'Redis'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Postman', 'React'],
  },
]

// ---- EXPERIENCE --------------------------------------------
// `weight` per lens drives ordering (higher = shown first).
export const EXPERIENCE = [
  {
    id: 'acrl',
    role: 'Data & Machine Learning Intern',
    org: 'Algorithmic Control and Robotics Lab',
    location: 'New Brunswick, NJ',
    period: 'Mar 2026 – Present',
    lens: 'data',
    weight: { software: 2, data: 5 },
    tags: ['PyTorch', 'Transformers', 'RGB-D', 'Robotics', 'Python'],
    bullets: [
      'Developed a transformer-based next-state prediction framework for robotic manipulation, extending prior DIPN work on multi-object push interaction modeling.',
      'Built object-centric learning pipelines using RGB-D inputs, simulation data, and structured object representations to model how pushes propagate across multiple objects in clutter.',
      'Supporting experimental analysis through attention-map visualization, trajectory analysis, and IoU / manipulation-efficiency evaluation within a broader robotic manipulation pipeline.',
    ],
    proof: [
      { label: 'Research area: DIPN / push interaction', type: 'note' },
    ],
  },
  {
    id: 'cait',
    role: 'Research Assistant',
    org: 'Center of Advanced Infrastructure and Transportation (CAIT), Rutgers',
    location: 'New Brunswick, NJ',
    period: 'Aug 2025 – Present',
    lens: 'data',
    weight: { software: 3, data: 4 },
    tags: ['YOLO', 'Computer Vision', 'Data Pipelines', 'QA'],
    bullets: [
      'Supported a YOLO-based computer vision pipeline for railroad trespassing detection through video preprocessing, annotation, validation, and QA on multi-site real-world footage.',
      'Performed error analysis on model outputs and converted raw detections into structured datasets and short evidence clips for downstream analysis.',
      'Developed clear technical documentation and data guides for research teams and non-technical staff, improving workflow consistency and reducing clarification requests by 30%.',
    ],
    proof: [],
  },
  {
    id: 'bizbites',
    role: 'Software Engineer Intern',
    org: 'BizBites Technologies',
    location: 'Remote',
    period: 'Apr 2025 – Aug 2025',
    lens: 'software',
    weight: { software: 5, data: 2 },
    tags: ['Node.js', 'Express', 'MySQL', 'Docker', 'CI/CD'],
    bullets: [
      'Built a secure backend with Node.js, Express.js, and MySQL, implementing bcrypt-based authentication that reduced login errors by 40%.',
      'Developed RESTful APIs for device/switch management with transactional queries, improving database performance by 35% and cutting device response latency by 25%.',
      'Streamlined deployment using Docker, Postman, and GitHub Actions (CI/CD), accelerating release cycles by 50%.',
    ],
    proof: [],
  },
]

// ---- PROJECTS ----------------------------------------------
export const PROJECTS = [
  {
    id: 'order-system',
    title: 'Distributed Event-Driven Order Processing System',
    lens: 'software',
    weight: { software: 5, data: 1 },
    summary:
      'A containerized, event-driven order platform built for reliability under failure — transactional outbox, idempotency, retries, dead-letter queues, and full observability.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'GitHub Actions'],
    highlights: [
      'Built and deployed a containerized event-driven order platform using RabbitMQ, PostgreSQL, Redis, Docker Compose, and GitHub Actions CI/CD.',
      'Improved reliability with transactional outbox, idempotency keys, retries, dead-letter queues, and reconciliation jobs for distributed workflow recovery.',
      'Added OpenTelemetry, Prometheus, and Grafana dashboards, and validated cross-service flows with Testcontainers against real infrastructure dependencies.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Tanishq111111111', type: 'github' },
    ],
  },
  {
    id: 'llm-factcheck',
    title: 'LLM-Factcheck — Factual QA Evaluation Framework',
    lens: 'data',
    weight: { software: 1, data: 5 },
    summary:
      'A reproducible evaluation framework comparing direct LLM prompting, retrieval-grounded generation, and extractive baselines on factual QA, with a full reliability metric suite.',
    stack: ['Python', 'Scikit-learn', 'Hugging Face', 'BM25', 'FAISS', 'OpenAI API', 'Streamlit', 'Pandas', 'NumPy'],
    highlights: [
      'Built a reproducible Python evaluation framework for factual QA across TriviaQA and Natural Questions, comparing direct LLM prompting, retrieval-grounded generation, and extractive search baselines.',
      'Designed reliability metrics (exact match, token F1, semantic similarity, groundedness, hallucination rate, confidence-correctness alignment) using Pandas, NumPy, Scikit-learn, and sentence-transformers.',
      'Created dashboard-ready outputs and error-analysis reports showing retrieval grounding improved factual QA reliability by 40%, and identified 400 key failure modes via a structured taxonomy.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Tanishq111111111', type: 'github' },
    ],
  },
  {
    id: 'splitshare',
    title: 'Splitshare — Expense Splitting Tool',
    lens: 'both',
    weight: { software: 4, data: 3 },
    summary:
      'A full-stack MERN app that automates group bill settlements, using a greedy algorithm to minimize the number of transactions needed to settle debts.',
    stack: ['JavaScript', 'Node.js', 'Express', 'React', 'MongoDB', 'REST API'],
    highlights: [
      'Engineered a full-stack expense-sharing application (MERN stack) that automated group bill settlements, reducing manual calculation time by 80%.',
      'Optimized debt resolution using a greedy O(n log n) algorithm, decreasing required transactions by 50–70% in test groups of 10+ users.',
      'Built and documented RESTful APIs in Express.js with MongoDB, improving response efficiency by 40%.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Tanishq111111111', type: 'github' },
    ],
  },
]

// ---- LENS DEFINITIONS --------------------------------------
export const LENSES = [
  { id: 'all', label: 'All' },
  { id: 'software', label: 'Software Engineer' },
  { id: 'data', label: 'Data & ML' },
]
