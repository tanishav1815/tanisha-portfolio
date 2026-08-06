// ============================================================
// Projects Page — Pinterest-style masonry card layout
// Each card is clickable and links to a detail page
// Cards show a journey (date-wise) with vine timeline
// ============================================================
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { projects, timeline } from "@/lib/portfolioData";
import { ArrowRight, Calendar } from "lucide-react";

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

// Varied card heights for true Pinterest masonry effect
const cardMinHeights = ["380px", "440px", "320px"];

export default function Projects() {
  const heroSection = useInView(0.05);
  const timelineSection = useInView();
  const cardsSection = useInView();

  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.975 0.012 85) 0%, oklch(0.95 0.03 220) 100%)" }}
        ref={heroSection.ref}
      >
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${heroSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-accent text-xl text-[oklch(0.78_0.08_300)] mb-2">My work in bloom 🌸</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.22_0.02_60)] mb-4">
            Project Garden
          </h1>
          <p className="font-body text-lg text-[oklch(0.40_0.02_60)] max-w-xl mx-auto">
            Each project is a seed planted with intention — from computer vision to conversational AI, here's what I've grown.
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" ref={timelineSection.ref}>
        <div className={`transition-all duration-700 ${timelineSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-10">
            <p className="font-accent text-lg text-[oklch(0.78_0.08_300)] mb-1">The vine of growth</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[oklch(0.22_0.02_60)]">
              Journey Timeline
            </h2>
          </div>

          {/* Horizontal scrollable timeline */}
          <div className="relative overflow-x-auto pb-4">
            <div className="flex items-center gap-0 min-w-max px-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-center">
                  {/* Node */}
                  <div
                    className={`flex flex-col items-center transition-all duration-500 ${
                      timelineSection.inView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg border-2 border-white shadow-md mb-2 hover:scale-110 transition-transform duration-200"
                      style={{ background: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="text-center max-w-[100px]">
                      <p className="font-body text-xs font-bold text-[oklch(0.30_0.02_60)]">{item.year}</p>
                      <p className="font-body text-xs text-[oklch(0.50_0.02_60)] leading-tight mt-0.5">{item.label}</p>
                    </div>
                  </div>
                  {/* Connector */}
                  {i < timeline.length - 1 && (
                    <div
                      className="w-8 h-0.5 mx-1 flex-shrink-0"
                      style={{ background: `linear-gradient(to right, ${item.color}, ${timeline[i + 1].color})` }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pinterest-style Masonry Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={cardsSection.ref}>
        <div className={`transition-all duration-700 ${cardsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="text-center mb-10">
            <p className="font-accent text-lg text-[oklch(0.78_0.08_300)] mb-1">Each bloom, a story</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[oklch(0.22_0.02_60)]">
              Projects
            </h2>
          </div>

          {/* Masonry grid */}
          <div className="masonry-grid">
            {projects.map((project, i) => (
              <div key={project.id} className="masonry-item">
                <Link href={`/projects/${project.id}`}>
                  <div
                    className={`garden-card rounded-2xl border border-[oklch(0.88_0.025_85)] ${project.color} overflow-hidden relative group`}
                    style={{
                      animationDelay: `${i * 80}ms`,
                      minHeight: cardMinHeights[i % cardMinHeights.length],
                    }}
                  >
                    {/* Decorative corner */}
                    {/* Lilac brand accent top bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                      style={{ background: "linear-gradient(to right, oklch(0.78 0.08 300), oklch(0.72 0.10 265))" }}
                    />
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-25"
                      style={{ background: project.accentColor }}
                    />
                    <div
                      className="absolute bottom-0 left-0 w-20 h-20 rounded-tr-full opacity-15"
                      style={{ background: project.accentColor }}
                    />

                    <div className="relative z-10 p-6 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-4xl">{project.icon}</span>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 font-body text-xs font-semibold text-[oklch(0.40_0.02_60)]">
                          <Calendar size={10} />
                          {project.date}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.02_60)] mb-1">
                        {project.title}
                      </h3>
                      <p className="font-body text-xs font-semibold text-[oklch(0.55_0.08_300)] mb-3 uppercase tracking-wide">
                        {project.subtitle}
                      </p>

                      {/* Role badge */}
                      <div
                        className="inline-flex self-start px-3 py-1 rounded-full font-body text-xs font-semibold mb-3"
                        style={{ background: "rgba(255,255,255,0.7)", color: "oklch(0.40 0.02 60)" }}
                      >
                        {project.role}
                      </div>

                      {/* Description */}
                      <p className="font-body text-sm text-[oklch(0.40_0.02_60)] leading-relaxed mb-4 flex-1">
                        {project.shortDesc}
                      </p>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {project.metrics.map((m) => (
                            <div key={m.label} className="text-center p-2 rounded-xl bg-white/50">
                              <p className="font-display text-base font-bold text-[oklch(0.22_0.02_60)]">{m.value}</p>
                              <p className="font-body text-xs text-[oklch(0.55_0.02_60)] leading-tight">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="skill-tag bg-white/60 text-[oklch(0.35_0.02_60)]">
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="skill-tag bg-white/40 text-[oklch(0.55_0.02_60)]">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Hover CTA */}
                      <div className="flex items-center gap-1.5 font-body text-xs font-bold text-[oklch(0.65_0.12_300)] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1">
                        View full project <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            {/* "More coming soon" card */}
            <div className="masonry-item">
              <div className="garden-card rounded-2xl border-2 border-dashed border-[oklch(0.78_0.08_300/0.4)] min-h-[200px] flex flex-col items-center justify-center p-6 text-center"
                style={{ background: "oklch(0.97 0.01 300 / 0.3)" }}>
                <span className="text-4xl mb-3 animate-float">🌱</span>
                <h3 className="font-display text-lg font-bold text-[oklch(0.45_0.08_300)] mb-2">More seeds sprouting…</h3>
                <p className="font-body text-sm text-[oklch(0.55_0.02_60)]">New projects in the making. Stay tuned!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
