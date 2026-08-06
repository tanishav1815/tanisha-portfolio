// ============================================================
// About Page — Garden-themed bio, education, certifications
// ============================================================
import { useEffect, useRef, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { personalInfo, education, certifications, experiences, skills } from "@/lib/portfolioData";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

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

export default function About() {
  const heroSection = useInView(0.1);
  const eduSection = useInView();
  const expSection = useInView();
  const certSection = useInView();
  const skillsSection = useInView();

  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.975 0.012 85) 0%, oklch(0.95 0.03 300) 100%)" }}
        ref={heroSection.ref}
      >
        <div className="absolute inset-0 opacity-20">
          <img src="/manus-storage/about-garden_65e3a2dd.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className={`max-w-4xl mx-auto relative z-10 transition-all duration-700 ${heroSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-accent text-xl text-[oklch(0.78_0.08_300)] mb-2">Hello, I'm</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.22_0.02_60)] mb-4">
            {personalInfo.name}
          </h1>
          <p className="font-body text-lg text-[oklch(0.45_0.08_300)] font-semibold mb-6">
            {personalInfo.title}
          </p>
          <div className="max-w-2xl">
            <p className="font-body text-base text-[oklch(0.35_0.02_60)] leading-relaxed mb-4">
              I'm an AI Engineer passionate about building intelligent systems that make a real difference.
              From agentic AI workflows to real-time computer vision, I love crafting solutions where technology
              meets human need.
            </p>
            <p className="font-body text-base text-[oklch(0.35_0.02_60)] leading-relaxed">
              Currently pursuing my M.S. in Information Technology at <strong>Arizona State University</strong> with
              a <strong>3.93 GPA</strong>, I bring both academic rigor and hands-on engineering experience to every project.
              Based in Phoenix, AZ.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" ref={eduSection.ref}>
        <div className={`transition-all duration-700 ${eduSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-accent text-lg text-[oklch(0.78_0.08_300)] mb-1">Where it all began</p>
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.02_60)] mb-8">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <div
                key={edu.id}
                className={`garden-card rounded-2xl p-6 border border-[oklch(0.88_0.025_85)] ${edu.color}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-3">{edu.icon}</div>
                <h3 className="font-display text-base font-bold text-[oklch(0.22_0.02_60)] mb-1 leading-snug">
                  {edu.degree}
                </h3>
                <p className="font-body text-sm font-semibold text-[oklch(0.45_0.08_300)] mb-2">{edu.school}</p>
                <p className="font-body text-xs text-[oklch(0.50_0.02_60)]">{edu.year}</p>
                {edu.gpa && (
                  <div
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-body text-xs font-bold"
                    style={{ background: "rgba(255,255,255,0.7)", color: "oklch(0.35 0.02 60)" }}
                  >
                    ⭐ GPA: {edu.gpa}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "oklch(0.96 0.02 300 / 0.3)" }}
        ref={expSection.ref}
      >
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${expSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-accent text-lg text-[oklch(0.78_0.08_300)] mb-1">Where I've worked</p>
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.02_60)] mb-8">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`garden-card rounded-2xl p-6 border border-[oklch(0.88_0.025_85)] ${exp.color}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{exp.icon}</span>
                      <h3 className="font-display text-lg font-bold text-[oklch(0.22_0.02_60)]">{exp.company}</h3>
                    </div>
                    <p className="font-body text-sm font-semibold text-[oklch(0.45_0.08_300)]">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className="font-body text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.7)", color: "oklch(0.35 0.02 60)" }}
                    >
                      {exp.startDate} – {exp.endDate}
                    </span>
                    <p className="font-body text-xs text-[oklch(0.55_0.02_60)] mt-1">{exp.type}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-2 font-body text-sm text-[oklch(0.35_0.02_60)] leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accentColor }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="skill-tag" style={{ background: "rgba(255,255,255,0.65)", color: "oklch(0.35 0.02 60)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" ref={certSection.ref}>
        <div className={`transition-all duration-700 ${certSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-accent text-lg text-[oklch(0.78_0.08_300)] mb-1">Badges of growth</p>
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.02_60)] mb-8">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="garden-card rounded-2xl p-5 border border-[oklch(0.88_0.025_85)] flex items-center gap-4"
                style={{ background: `${cert.color}55`, transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-3xl">{cert.icon}</span>
                <div>
                  <p className="font-body text-sm font-bold text-[oklch(0.22_0.02_60)]">{cert.name}</p>
                  <p className="font-body text-xs text-[oklch(0.55_0.02_60)]">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, oklch(0.975 0.012 85) 0%, oklch(0.96 0.02 220) 100%)" }}
        ref={skillsSection.ref}
      >
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${skillsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-accent text-lg text-[oklch(0.78_0.08_300)] mb-1">Tools of the trade</p>
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.02_60)] mb-8">Skills</h2>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, data], catIdx) => (
              <div key={category} style={{ transitionDelay: `${catIdx * 80}ms` }}>
                <h3 className="font-display text-sm font-bold text-[oklch(0.45_0.08_300)] uppercase tracking-widest mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{ background: `${data.color}55`, color: "oklch(0.30 0.02 60)", border: `1px solid ${data.color}88` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-accent text-xl text-[oklch(0.78_0.08_300)] mb-4">Ready to grow together?</p>
        <Link href="/contact">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body text-base font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, oklch(0.78 0.08 300), oklch(0.72 0.10 265))" }}>
            Let's grow something together 🌸 <ArrowRight size={16} />
          </button>
        </Link>
      </section>
    </PageLayout>
  );
}
