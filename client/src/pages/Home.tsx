// ============================================================
// Home Page — Garden-themed hero + featured projects + skills
// Enchanted Garden Watercolor design philosophy
// ============================================================
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { personalInfo, projects, skills, timeline } from "@/lib/portfolioData";
import { ArrowRight, MapPin, Mail, Sparkles, Github, Linkedin } from "lucide-react";

// Intersection observer hook for scroll animations
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const projectsSection = useInView();
  const skillsSection = useInView();
  const timelineSection = useInView();

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <PageLayout>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(160deg, oklch(0.975 0.012 85) 0%, oklch(0.95 0.03 300) 50%, oklch(0.97 0.02 220) 100%)",
        }}
      >
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-garden.png"
            alt=""
            className="w-full h-full object-cover opacity-50"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.975_0.012_85)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.975_0.012_85/0.6)] via-transparent to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            {/* Accent label */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 font-body text-sm font-semibold transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                background: "oklch(0.93 0.04 300 / 0.7)",
                color: "oklch(0.45 0.10 300)",
                backdropFilter: "blur(8px)",
                transitionDelay: "0ms",
              }}
            >
              <Sparkles size={14} />
              AI Engineer · Agentic AI Developer
            </div>

            {/* Name */}
            <h1
              className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[oklch(0.22_0.02_60)] leading-tight mb-4 transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              {personalInfo.name}
            </h1>

            {/* Tagline */}
            <p
              className={`font-accent text-2xl sm:text-3xl text-[oklch(0.65_0.12_300)] mb-6 transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              "{personalInfo.tagline}"
            </p>

            {/* Bio */}
            <p
              className={`font-body text-base sm:text-lg text-[oklch(0.40_0.02_60)] leading-relaxed mb-8 max-w-xl transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Building intelligent systems at the intersection of AI, language, and vision.
              Currently at <strong>JerseySTEM</strong> as an AI Engineer Intern, pursuing M.S. IT at <strong>Arizona State University</strong>.
            </p>

            {/* Location + Email */}
            <div
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <span className="flex items-center gap-1.5 font-body text-sm text-[oklch(0.50_0.02_60)]">
                <MapPin size={14} className="text-[oklch(0.78_0.08_300)]" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 font-body text-sm text-[oklch(0.50_0.02_60)] hover:text-[oklch(0.65_0.12_300)] transition-colors"
              >
                <Mail size={14} className="text-[oklch(0.78_0.08_300)]" />
                {personalInfo.email}
              </a>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <Link href="/projects">
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                  style={{ background: "linear-gradient(135deg, oklch(0.78 0.08 300), oklch(0.72 0.10 265))" }}
                >
                  View My Garden 🌸
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/about">
                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-semibold border-2 border-[oklch(0.78_0.08_300)] text-[oklch(0.65_0.12_300)] bg-white/60 backdrop-blur-sm transition-all duration-200 hover:bg-[oklch(0.93_0.04_300)] hover:scale-105 active:scale-95"
                >
                  About Me 🌿
                </button>
              </Link>
              <a
                href="https://github.com/tanishav1815"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-semibold border-2 border-[oklch(0.82_0.06_220)] text-[oklch(0.50_0.08_220)] bg-white/60 backdrop-blur-sm transition-all duration-200 hover:bg-[oklch(0.93_0.04_220)] hover:scale-105 active:scale-95"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-semibold border-2 border-[oklch(0.85_0.07_5)] text-[oklch(0.55_0.08_5)] bg-white/60 backdrop-blur-sm transition-all duration-200 hover:bg-[oklch(0.93_0.04_5)] hover:scale-105 active:scale-95"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce opacity-60">
          <span className="font-accent text-sm text-[oklch(0.65_0.12_300)]">scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-[oklch(0.78_0.08_300)] to-transparent rounded-full" />
        </div>

        {/* Stats strip */}
        <div
          className={`absolute bottom-0 left-0 right-0 z-10 transition-all duration-700 ${heroVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "700ms" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
            <div className="flex flex-wrap gap-4 sm:gap-8">
              {[
                { value: "3.93", label: "GPA @ ASU", icon: "🎓" },
                { value: "3+", label: "AI Projects", icon: "🌺" },
                { value: "4+", label: "Certifications", icon: "🌟" },
                { value: "200+", label: "Students Impacted", icon: "🌸" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-xl">{stat.icon}</span>
                  <div>
                    <p className="font-display text-xl font-bold text-[oklch(0.22_0.02_60)] leading-none">{stat.value}</p>
                    <p className="font-body text-xs text-[oklch(0.50_0.02_60)]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="relative z-10 -mt-8 overflow-hidden leading-none" style={{ height: "50px" }} aria-hidden="true">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,25 C360,50 720,0 1080,25 C1260,37.5 1380,12.5 1440,25 L1440,50 L0,50 Z"
            fill="oklch(0.975 0.012 85)" />
        </svg>
      </div>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={projectsSection.ref}>
        <div className={`transition-all duration-700 ${projectsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="font-accent text-lg text-[oklch(0.78_0.08_300)] mb-1">My Garden of Work</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[oklch(0.22_0.02_60)]">
                Featured Projects
              </h2>
            </div>
            <Link href="/projects">
              <button className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-semibold border-2 border-[oklch(0.78_0.08_300)] text-[oklch(0.65_0.12_300)] hover:bg-[oklch(0.93_0.04_300)] transition-all duration-200">
                View All <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          {/* Project cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div
                  className={`garden-card rounded-2xl p-6 border border-[oklch(0.88_0.025_85)] ${project.color} overflow-hidden relative group`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
             {/* Card accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-30"
                style={{ background: project.accentColor }}
              />
              {/* Lilac top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: "linear-gradient(to right, oklch(0.78 0.08 300), oklch(0.72 0.10 265))" }}
              />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-3xl">{project.icon}</span>
                      <span className="font-body text-xs font-semibold px-3 py-1 rounded-full bg-white/60 text-[oklch(0.40_0.02_60)]">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.02_60)] mb-1">
                      {project.title}
                    </h3>
                    <p className="font-body text-xs font-semibold text-[oklch(0.55_0.08_300)] mb-3 uppercase tracking-wide">
                      {project.subtitle}
                    </p>
                    <p className="font-body text-sm text-[oklch(0.40_0.02_60)] leading-relaxed mb-4 line-clamp-3">
                      {project.shortDesc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="skill-tag bg-white/60 text-[oklch(0.40_0.02_60)]"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="skill-tag bg-white/40 text-[oklch(0.55_0.02_60)]">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Hover arrow */}
                    <div className="mt-4 flex items-center gap-1 font-body text-xs font-semibold text-[oklch(0.65_0.12_300)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Explore project <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-semibold border-2 border-[oklch(0.78_0.08_300)] text-[oklch(0.65_0.12_300)] hover:bg-[oklch(0.93_0.04_300)] transition-all duration-200">
                View All Projects <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SKILLS PREVIEW ── */}
      {/* Organic divider */}
      <div className="overflow-hidden leading-none" style={{ height: "40px" }} aria-hidden="true">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,20 C480,40 960,0 1440,20 L1440,40 L0,40 Z"
            fill="oklch(0.96 0.02 300 / 0.3)" />
        </svg>
      </div>
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, oklch(0.975 0.012 85) 0%, oklch(0.96 0.02 300) 100%)" }}
        ref={skillsSection.ref}
      >
        <div className={`max-w-7xl mx-auto transition-all duration-700 ${skillsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <p className="font-accent text-lg text-[oklch(0.78_0.08_300)] mb-1">What I grow with</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[oklch(0.22_0.02_60)]">
              Skills & Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, data], catIdx) => (
              <div
                key={category}
                className={`rounded-2xl p-6 border border-[oklch(0.88_0.025_85)] ${data.bg}`}
                style={{ transitionDelay: `${catIdx * 80}ms` }}
              >
                <h3 className="font-display text-base font-bold text-[oklch(0.22_0.02_60)] mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {data.items.slice(0, 8).map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{ background: "rgba(255,255,255,0.65)", color: "oklch(0.35 0.02 60)" }}
                    >
                      {skill}
                    </span>
                  ))}
                  {data.items.length > 8 && (
                    <span
                      className="skill-tag"
                      style={{ background: "rgba(255,255,255,0.4)", color: "oklch(0.50 0.02 60)" }}
                    >
                      +{data.items.length - 8} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE PREVIEW ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" ref={timelineSection.ref}>
        <div className={`transition-all duration-700 ${timelineSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-12">
            <p className="font-accent text-lg text-[oklch(0.78_0.08_300)] mb-1">How the garden grew</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[oklch(0.22_0.02_60)]">
              My Journey
            </h2>
          </div>

          {/* Vine timeline */}
          <div className="relative">
            {/* Vertical vine line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 rounded-full"
              style={{ background: "linear-gradient(to bottom, oklch(0.88 0.07 165), oklch(0.78 0.08 300), oklch(0.82 0.06 220))" }}
            />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 transition-all duration-500 ${
                    timelineSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Milestone dot */}
                  <div
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg border-2 border-white shadow-md"
                    style={{ background: item.color }}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 pb-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="font-body text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ background: item.color, color: "oklch(0.25 0.02 60)" }}
                      >
                        {item.year}
                      </span>
                      <span className="font-body text-sm text-[oklch(0.30_0.02_60)] font-medium">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/about">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-semibold border-2 border-[oklch(0.78_0.08_300)] text-[oklch(0.65_0.12_300)] hover:bg-[oklch(0.93_0.04_300)] transition-all duration-200">
                Read My Full Story <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
