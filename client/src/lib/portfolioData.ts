// ============================================================
// TANISHA VERMA PORTFOLIO — All resume data in one place
// Garden theme: each project gets a unique pastel color
// ============================================================

export const personalInfo = {
  name: "Tanisha Verma",
  title: "AI Engineer & Agentic AI Developer",
  tagline: "Where every project takes root.",
  location: "Phoenix, AZ",
  email: "tanishav1815@gmail.com",
  phone: "+1 (480) 875-4851",
  linkedin: "https://linkedin.com/in/tanisha-verma",
  github: "https://github.com/tanishav1815",
  bio: `I'm an AI Engineer passionate about building intelligent systems that make a real difference. 
From agentic AI workflows to real-time computer vision, I love crafting solutions where technology 
meets human need. Currently pursuing my M.S. in Information Technology at Arizona State University 
with a 3.93 GPA, I bring both academic rigor and hands-on engineering experience to every project.`,
  shortBio: "AI Engineer · Agentic AI Developer · Building intelligent systems that bloom.",
};

export const experiences = [
  {
    id: "jersystem",
    company: "JerseySTEM",
    role: "AI Engineer Intern | Agentic AI Developer Intern",
    type: "Remote",
    startDate: "February 2026",
    endDate: "Present",
    startYear: 2026,
    color: "card-lilac",
    accentColor: "#C9B8E8",
    icon: "🌸",
    bullets: [
      "Engineered onboarding workflows for 200+ students, achieving an 88% engagement rate by integrating Discord, Salesforce, MySQL, and LLM-powered automation into a unified enrollment platform.",
      "Automated student data collection and synchronization, eliminating 12+ hours of manual administrative effort per onboarding cycle through webhook-driven integrations, API orchestration, and real-time database updates.",
      "Deployed AI-powered onboarding workflows into a live production environment, improving record accuracy and eliminating manual data-entry errors through Salesforce integration and automated interaction flows.",
    ],
    tags: ["AI Agents", "LLMs", "Salesforce", "Discord", "MySQL", "Webhooks"],
  },
  {
    id: "crtd",
    company: "CRTD Technologies",
    role: "Flutter Developer Intern",
    type: "On-site",
    startDate: "August 2022",
    endDate: "September 2023",
    startYear: 2022,
    color: "card-mint",
    accentColor: "#B8E8D4",
    icon: "🌿",
    bullets: [
      "Developed 10+ custom Flutter components, improving application responsiveness and reducing data synchronization latency by 40% through REST API integrations across 8 backend endpoints.",
      "Achieved a 98% QA pass rate across 5 development sprints by implementing structured error handling, supporting SQL query optimization, and contributing to automated testing workflows.",
      "Configured CI/CD and development standardization initiatives for a 5–6 member Agile team by configuring GitHub Actions pipelines and Dockerized environments that improved build consistency and deployment readiness.",
    ],
    tags: ["Flutter", "REST APIs", "CI/CD", "GitHub Actions", "Docker", "Agile"],
  },
];

export const projects = [
  {
    id: "carebase",
    title: "CareBase",
    subtitle: "AI Voice Care Loop for Healthcare Clinics",
    role: "AI Software Engineer",
    year: 2025,
    date: "2025",
    color: "card-pink",
    accentColor: "#F2C4CE",
    icon: "🌺",
    emoji: "🏥",
    shortDesc: "A 5-stage AI pipeline converting patient audio into structured clinical insights using Whisper, Gemini, and FastAPI.",
    description: `Built a 5-stage AI processing pipeline that converted patient audio recordings into structured clinical insights 
using Whisper, Gemini, FastAPI, and PostgreSQL, reducing manual review effort through automated medical entity extraction.`,
    highlights: [
      "100% query safety rate with SELECT-only validation guardrails",
      "Identified 6 medical entity types with dynamic urgency scoring",
      "Zero ingestion failures across dozens of clinical audio recordings",
      "End-to-end transcription and dashboard updates within seconds",
    ],
    bullets: [
      "Built a 5-stage AI processing pipeline that converted patient audio recordings into structured clinical insights using Whisper, Gemini, FastAPI, and PostgreSQL, reducing manual review effort through automated medical entity extraction.",
      "Maintained a 100% query safety rate during testing by implementing SELECT-only validation guardrails that prevented destructive AI-generated database actions across 3 relational models.",
      "Created NLP workflows that identified 6 medical entity types and automatically flagged high-priority patient interactions using dynamic urgency scoring and structured JSON validation.",
      "Processed dozens of clinical audio recordings with zero ingestion failures, delivering end-to-end transcription, entity extraction, and dashboard updates within seconds through a low-latency AI architecture.",
    ],
    tags: ["Whisper", "Gemini", "FastAPI", "PostgreSQL", "NLP", "Python", "AI Pipeline"],
    metrics: [
      { label: "Query Safety Rate", value: "100%" },
      { label: "Medical Entity Types", value: "6" },
      { label: "Ingestion Failures", value: "0" },
    ],
  },
  {
    id: "novamind",
    title: "NovaMind",
    subtitle: "Memory-Powered Conversational Assistant",
    role: "AI Software Engineer",
    year: 2024,
    date: "2024",
    color: "card-periwinkle",
    accentColor: "#A3B4E8",
    icon: "🌀",
    emoji: "🧠",
    shortDesc: "An intent-driven conversational AI with persistent memory architecture using Gemini, Supermemory, and Next.js.",
    description: `Constructed an intent-driven conversational AI platform that maintained long-term context across sessions 
by integrating Gemini, Supermemory, Next.js, and PostgreSQL into a persistent memory architecture.`,
    highlights: [
      "Persistent memory across sessions with automated summarization",
      "200–300 word speaker-tagged memory capsules every 10 messages",
      "Accurate recall across 15 multi-turn testing sessions",
      "Hallucination-prevention logic grounded in historical data",
    ],
    bullets: [
      "Constructed an intent-driven conversational AI platform that maintained long-term context across sessions by integrating Gemini, Supermemory, Next.js, and PostgreSQL into a persistent memory architecture.",
      "Implemented automated summarization workflows that condensed conversations into 200–300 word speaker-tagged memory capsules every 10 messages, improving context retention while reducing token consumption.",
      "Designed retrieval and hallucination-prevention logic that grounded responses in historical conversation data, enabling accurate memory recall across 15 multi-turn testing sessions without relying on full chat history.",
    ],
    tags: ["Gemini API", "Next.js", "PostgreSQL", "LLMs", "RAG", "TypeScript", "Supermemory"],
    metrics: [
      { label: "Memory Capsule Size", value: "200–300w" },
      { label: "Test Sessions", value: "15" },
      { label: "Context Trigger", value: "10 msgs" },
    ],
  },
  {
    id: "sentinel",
    title: "Sentinel",
    subtitle: "Real-Time Vision System",
    role: "Computer Vision Engineer",
    year: 2023,
    date: "2023",
    color: "card-blue",
    accentColor: "#B8D4E8",
    icon: "👁️",
    emoji: "🔍",
    shortDesc: "A real-time computer vision pipeline processing ~30,000 video frames using OpenCV, YOLOv4, and GoogLeNet.",
    description: `Architected a real-time computer vision pipeline that processed approximately 30,000 video frames using 
OpenCV, YOLOv4, GoogLeNet, and Haar Cascades, maintaining 24–30 FPS across 12 test video streams.`,
    highlights: [
      "~30,000 video frames processed at 24–30 FPS",
      "2x inference performance improvement via multithreading",
      "GPU-accelerated model execution for edge deployment",
      "12 test video streams with consistent performance",
    ],
    bullets: [
      "Architected a real-time computer vision pipeline that processed approximately 30,000 video frames using OpenCV, YOLOv4, GoogLeNet, and Haar Cascades, maintaining 24–30 FPS across 12 test video streams.",
      "Optimized inference performance by approximately 2x through multithreaded processing and GPU-accelerated model execution, improving responsiveness for edge-based object detection and classification workloads.",
    ],
    tags: ["OpenCV", "YOLOv4", "GoogLeNet", "Python", "Computer Vision", "GPU", "Multithreading"],
    metrics: [
      { label: "Frames Processed", value: "~30K" },
      { label: "FPS", value: "24–30" },
      { label: "Performance Gain", value: "2x" },
    ],
  },
];

export const education = [
  {
    id: "asu",
    degree: "Master of Science (M.S.) in Information Technology",
    school: "Arizona State University",
    gpa: "3.93 / 4.00",
    year: "2024 – Present",
    icon: "🎓",
    color: "card-yellow",
    accentColor: "#F5E6A3",
  },
  {
    id: "sirt",
    degree: "Bachelor of Technology (B.Tech.) in Computer Science and Engineering",
    school: "Sagar Institute of Research & Technology",
    gpa: null,
    year: "2019 – 2023",
    icon: "📚",
    color: "card-peach",
    accentColor: "#F5C5A3",
  },
];

export const certifications = [
  { name: "Google AI Professional", date: "May 2026", icon: "🌟", color: "#F5E6A3" },
  { name: "AWS Data Engineering", date: "Apr 2025", icon: "☁️", color: "#B8D4E8" },
  { name: "AWS Cloud Foundations", date: "May 2025", icon: "☁️", color: "#B8D4E8" },
  { name: "AWS ML Foundations for NLP", date: "Mar 2025", icon: "🤖", color: "#C9B8E8" },
];

export const skills = {
  "AI & Machine Learning": {
    color: "#C9B8E8",
    bg: "card-lilac",
    items: ["Python", "Artificial Intelligence", "Generative AI", "Large Language Models (LLMs)", "AI Agents", "Agentic AI", "Prompt Engineering", "NLP", "Conversational AI", "RAG", "LangChain", "OpenAI API", "Gemini API", "Computer Vision", "OpenCV"],
  },
  "Backend & APIs": {
    color: "#B8D4E8",
    bg: "card-blue",
    items: ["FastAPI", "REST APIs", "Backend Development", "API Integration", "Node.js", "PostgreSQL", "SQL", "Database Design", "MongoDB", "MySQL", "Prisma"],
  },
  "Frontend & Mobile": {
    color: "#F2C4CE",
    bg: "card-pink",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Flutter"],
  },
  "DevOps & Cloud": {
    color: "#B8E8D4",
    bg: "card-mint",
    items: ["Docker", "AWS (EC2, S3, Lambda)", "CI/CD", "GitHub Actions", "Git", "Linux"],
  },
  "Tools & Practices": {
    color: "#F5C5A3",
    bg: "card-peach",
    items: ["Workflow Automation", "System Integration", "Agile", "Scrum", "Jira", "Code Reviews", "Power BI", "Stakeholder Collaboration", "Requirements Gathering", "Project Planning"],
  },
};

// Timeline: all milestones sorted by date
export const timeline = [
  { year: "2019", label: "Started B.Tech in CSE", icon: "🌱", color: "#B8E8D4", type: "education" },
  { year: "2022", label: "Flutter Developer Intern @ CRTD Technologies", icon: "🌿", color: "#B8E8D4", type: "work" },
  { year: "2023", label: "Built Sentinel — Real-Time Vision System", icon: "👁️", color: "#B8D4E8", type: "project" },
  { year: "2023", label: "Graduated B.Tech in CSE", icon: "🎓", color: "#F5C5A3", type: "education" },
  { year: "2024", label: "Started M.S. IT @ Arizona State University", icon: "🎓", color: "#F5E6A3", type: "education" },
  { year: "2024", label: "Built NovaMind — Memory-Powered AI Assistant", icon: "🧠", color: "#A3B4E8", type: "project" },
  { year: "Mar 2025", label: "AWS ML Foundations for NLP Certification", icon: "☁️", color: "#B8D4E8", type: "cert" },
  { year: "Apr 2025", label: "AWS Data Engineering Certification", icon: "☁️", color: "#B8D4E8", type: "cert" },
  { year: "May 2025", label: "AWS Cloud Foundations Certification", icon: "☁️", color: "#B8D4E8", type: "cert" },
  { year: "2025", label: "Built CareBase — AI Voice Care Loop", icon: "🌺", color: "#F2C4CE", type: "project" },
  { year: "Feb 2026", label: "AI Engineer Intern @ JerseySTEM", icon: "🌸", color: "#C9B8E8", type: "work" },
  { year: "May 2026", label: "Google AI Professional Certification", icon: "🌟", color: "#F5E6A3", type: "cert" },
  { year: "2026", label: "Currently growing… 🌻", icon: "🌻", color: "#F5E6A3", type: "current" },
];
