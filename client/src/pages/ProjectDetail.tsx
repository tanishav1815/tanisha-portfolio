// ============================================================
// ProjectDetail — Individual project page
// Full details, metrics, tech stack, and highlights
// ============================================================
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "wouter";
import PageLayout from "@/components/PageLayout";
import { projects } from "@/lib/portfolioData";
import { ArrowLeft, ArrowRight, Calendar, Tag, CheckCircle } from "lucide-react";

function useInView(threshold = 0.1) {
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

export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === params.id);
  const heroSection = useInView(0.05);
  const detailSection = useInView();

  if (!project) {
    return (
      <PageLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <span className="text-6xl mb-4">🌿</span>
          <h1 className="font-display text-3xl font-bold text-[oklch(0.22_0.02_60)] mb-3">Project not found</h1>
          <p className="font-body text-sm text-[oklch(0.45_0.02_60)] mb-6">This seed hasn't sprouted yet.</p>
          <Link href="/projects">
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-semibold border-2 border-[oklch(0.78_0.08_300)] text-[oklch(0.65_0.12_300)] hover:bg-[oklch(0.93_0.04_300)] transition-all">
              <ArrowLeft size={14} /> Back to Projects
            </button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  // Get prev/next projects
  const currentIdx = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIdx > 0 ? projects[currentIdx - 1] : null;
  const nextProject = currentIdx < projects.length - 1 ? projects[currentIdx + 1] : null;

  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, oklch(0.975 0.012 85) 0%, ${project.accentColor}44 100%)` }}
        ref={heroSection.ref}
      >
        {/* Decorative background shapes */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ background: project.accentColor }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15 blur-2xl"
          style={{ background: project.accentColor }}
        />

        <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-700 ${heroSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Back button */}
          <Link href="/projects">
            <button className="inline-flex items-center gap-2 mb-8 font-body text-sm font-semibold text-[oklch(0.45_0.08_300)] hover:text-[oklch(0.65_0.12_300)] transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Projects
            </button>
          </Link>

          {/* Project header */}
          <div className="flex items-start gap-6 flex-wrap">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl border-2 border-white shadow-lg flex-shrink-0"
              style={{ background: project.accentColor }}
            >
              {project.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span
                  className="font-body text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"
                  style={{ background: `${project.accentColor}88`, color: "oklch(0.25 0.02 60)" }}
                >
                  <Calendar size={10} /> {project.date}
                </span>
                <span
                  className="font-body text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.7)", color: "oklch(0.35 0.02 60)" }}
                >
                  {project.role}
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-[oklch(0.22_0.02_60)] mb-1">
                {project.title}
              </h1>
              <p className="font-body text-base font-semibold text-[oklch(0.45_0.08_300)]">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" ref={detailSection.ref}>
        <div className={`transition-all duration-700 ${detailSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.02_60)] mb-4 flex items-center gap-2">
                  <span style={{ color: project.accentColor }}>🌿</span> Overview
                </h2>
                <p className="font-body text-base text-[oklch(0.35_0.02_60)] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Achievements */}
              <div>
                <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.02_60)] mb-4 flex items-center gap-2">
                  <span style={{ color: project.accentColor }}>✨</span> Key Highlights
                </h2>
                <div className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl border border-[oklch(0.88_0.025_85)]"
                      style={{ background: `${project.accentColor}22` }}
                    >
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: project.accentColor }} />
                      <p className="font-body text-sm text-[oklch(0.30_0.02_60)] leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed bullets */}
              <div>
                <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.02_60)] mb-4 flex items-center gap-2">
                  <span style={{ color: project.accentColor }}>🌱</span> What I Built
                </h2>
                <ul className="space-y-3">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-sm text-[oklch(0.35_0.02_60)] leading-relaxed">
                      <span
                        className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: project.accentColor }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Metrics */}
              {project.metrics && (
                <div className={`rounded-2xl p-5 border border-[oklch(0.88_0.025_85)] ${project.color}`}>
                  <h3 className="font-display text-sm font-bold text-[oklch(0.22_0.02_60)] mb-4 uppercase tracking-wide">
                    By the Numbers
                  </h3>
                  <div className="space-y-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-center p-3 rounded-xl bg-white/60">
                        <p className="font-display text-2xl font-bold text-[oklch(0.22_0.02_60)]">{m.value}</p>
                        <p className="font-body text-xs text-[oklch(0.50_0.02_60)] mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="rounded-2xl p-5 border border-[oklch(0.88_0.025_85)] bg-[oklch(0.99_0.008_85)]">
                <h3 className="font-display text-sm font-bold text-[oklch(0.22_0.02_60)] mb-4 flex items-center gap-2 uppercase tracking-wide">
                  <Tag size={14} style={{ color: project.accentColor }} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="skill-tag"
                      style={{ background: `${project.accentColor}44`, color: "oklch(0.30 0.02 60)", border: `1px solid ${project.accentColor}88` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="mt-12 pt-8 border-t border-[oklch(0.88_0.025_85)] flex flex-wrap justify-between gap-4">
            {prevProject ? (
              <Link href={`/projects/${prevProject.id}`}>
                <button className="flex items-center gap-3 p-4 rounded-2xl border border-[oklch(0.88_0.025_85)] hover:border-[oklch(0.78_0.08_300)] transition-all duration-200 group text-left"
                  style={{ background: `${prevProject.accentColor}22` }}>
                  <ArrowLeft size={16} className="text-[oklch(0.65_0.12_300)] group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="font-body text-xs text-[oklch(0.55_0.02_60)]">Previous</p>
                    <p className="font-display text-sm font-bold text-[oklch(0.22_0.02_60)]">{prevProject.title}</p>
                  </div>
                </button>
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link href={`/projects/${nextProject.id}`}>
                <button className="flex items-center gap-3 p-4 rounded-2xl border border-[oklch(0.88_0.025_85)] hover:border-[oklch(0.78_0.08_300)] transition-all duration-200 group text-right"
                  style={{ background: `${nextProject.accentColor}22` }}>
                  <div>
                    <p className="font-body text-xs text-[oklch(0.55_0.02_60)]">Next</p>
                    <p className="font-display text-sm font-bold text-[oklch(0.22_0.02_60)]">{nextProject.title}</p>
                  </div>
                  <ArrowRight size={16} className="text-[oklch(0.65_0.12_300)] group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
