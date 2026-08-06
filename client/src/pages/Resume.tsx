// ============================================================
// Resume Page — Full resume display with garden styling
// ============================================================
import { useRef, useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { personalInfo, experiences, education, certifications, skills } from "@/lib/portfolioData";
import { Download, ExternalLink } from "lucide-react";

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

export default function Resume() {
  const heroSection = useInView(0.05);
  const expSection = useInView();
  const eduSection = useInView();
  const skillsSection = useInView();

  return (
    <PageLayout>
      {/* Header */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.975 0.012 85) 0%, oklch(0.96 0.03 90) 100%)" }}
        ref={heroSection.ref}
      >
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${heroSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="font-accent text-lg text-[oklch(0.78_0.08_300)] mb-1">My Resume</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.22_0.02_60)] mb-2">
                {personalInfo.name}
              </h1>
              <p className="font-body text-base font-semibold text-[oklch(0.45_0.08_300)] mb-3">{personalInfo.title}</p>
              <div className="flex flex-wrap gap-4 font-body text-sm text-[oklch(0.45_0.02_60)]">
                <span>📍 {personalInfo.location}</span>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[oklch(0.65_0.12_300)] transition-colors">
                  ✉️ {personalInfo.email}
                </a>
                <span>📞 {personalInfo.phone}</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-body text-xs font-semibold text-[oklch(0.45_0.08_220)] hover:text-[oklch(0.55_0.10_220)] transition-colors"
                >
                  <ExternalLink size={12} /> LinkedIn
                </a>
                <a
                  href="https://github.com/tanishav1815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-body text-xs font-semibold text-[oklch(0.45_0.08_300)] hover:text-[oklch(0.55_0.10_300)] transition-colors"
                >
                  <ExternalLink size={12} /> GitHub
                </a>
              </div>
            </div>
            <a
              href={`mailto:${personalInfo.email}?subject=Resume Request`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, oklch(0.78 0.08 300), oklch(0.72 0.10 265))" }}
            >
              <Download size={16} />
              Request Resume
            </a>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Experience */}
        <section ref={expSection.ref}>
          <div className={`transition-all duration-700 ${expSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 rounded-full" style={{ background: "oklch(0.78 0.08 300)" }} />
              <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.02_60)]">Where I've Grown 🌿</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className={`rounded-2xl p-6 border border-[oklch(0.88_0.025_85)] ${exp.color}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-[oklch(0.22_0.02_60)]">{exp.company}</h3>
                      <p className="font-body text-sm font-semibold text-[oklch(0.45_0.08_300)]">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-body text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.7)", color: "oklch(0.35 0.02 60)" }}>
                        {exp.startDate} – {exp.endDate}
                      </span>
                      <p className="font-body text-xs text-[oklch(0.55_0.02_60)] mt-1">{exp.type}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-sm text-[oklch(0.35_0.02_60)] leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accentColor }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section ref={eduSection.ref}>
          <div className={`transition-all duration-700 ${eduSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 rounded-full" style={{ background: "oklch(0.91 0.09 90)" }} />
              <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.02_60)]">Seeds of Knowledge 🎓</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div key={edu.id} className={`rounded-2xl p-5 border border-[oklch(0.88_0.025_85)] ${edu.color}`}>
                  <p className="font-display text-sm font-bold text-[oklch(0.22_0.02_60)] mb-1">{edu.degree}</p>
                  <p className="font-body text-xs font-semibold text-[oklch(0.45_0.08_300)] mb-1">{edu.school}</p>
                  <p className="font-body text-xs text-[oklch(0.55_0.02_60)]">{edu.year}</p>
                  {edu.gpa && <p className="font-body text-xs font-bold text-[oklch(0.35_0.02_60)] mt-1">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
            {/* Certifications */}
            <div className="mt-6">
              <h3 className="font-display text-lg font-bold text-[oklch(0.22_0.02_60)] mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-xs font-semibold border border-[oklch(0.88_0.025_85)]"
                    style={{ background: `${cert.color}55`, color: "oklch(0.30 0.02 60)" }}
                  >
                    <span>{cert.icon}</span>
                    {cert.name} · {cert.date}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section ref={skillsSection.ref}>
          <div className={`transition-all duration-700 ${skillsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 rounded-full" style={{ background: "oklch(0.88 0.07 165)" }} />
              <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.02_60)]">Tools in the Garden 🛠️</h2>
            </div>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, data]) => (
                <div key={category}>
                  <h3 className="font-body text-xs font-bold text-[oklch(0.45_0.08_300)] uppercase tracking-widest mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.items.map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag"
                        style={{ background: `${data.color}44`, color: "oklch(0.30 0.02 60)", border: `1px solid ${data.color}88` }}
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
      </div>
    </PageLayout>
  );
}
