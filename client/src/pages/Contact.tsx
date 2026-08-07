// ============================================================
// Contact Page — Garden-themed contact form + info
// ============================================================
import { useState, useRef, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { personalInfo } from "@/lib/portfolioData";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const heroSection = useInView(0.1);
  const formSection = useInView();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto link as a fallback
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(`Hi Tanisha,\n\n${formData.message}\n\nBest,\n${formData.name}\n${formData.email}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.975 0.012 85) 0%, oklch(0.95 0.03 5) 100%)" }}
        ref={heroSection.ref}
      >
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${heroSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-accent text-xl text-[oklch(0.78_0.08_300)] mb-2">Say hello 🌸</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[oklch(0.22_0.02_60)] mb-4">
            Let's Connect
          </h1>
          <p className="font-body text-lg text-[oklch(0.40_0.02_60)] max-w-xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to chat about AI — I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" ref={formSection.ref}>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-700 ${formSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.02_60)] mb-2">Plant a Seed 🌱</h2>
              <p className="font-body text-sm text-[oklch(0.45_0.02_60)] leading-relaxed">
                I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
              </p>
            </div>

            {/* Contact cards */}
            {[
              { icon: <Mail size={20} />, label: "Email", value: "tanishav1815@gmail.com", href: `mailto:${personalInfo.email}`, color: "#F2C4CE" },
              { icon: <MapPin size={20} />, label: "Location", value: personalInfo.location, href: null, color: "#B8E8D4" },
              { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/tanisha--verma", href: personalInfo.linkedin, color: "#B8D4E8" },
              { icon: <Github size={20} />, label: "GitHub", value: "github.com/tanishav1815", href: "https://github.com/tanishav1815", color: "#C9B8E8" },
            ].map((item) => (
              <div
                key={item.label}
                className="garden-card flex items-center gap-4 p-4 rounded-2xl border border-[oklch(0.88_0.025_85)]"
                style={{ background: `${item.color}44` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: item.color, color: "oklch(0.25 0.02 60)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-[oklch(0.55_0.02_60)] uppercase tracking-wide">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-body text-sm font-medium text-[oklch(0.30_0.02_60)] hover:text-[oklch(0.65_0.12_300)] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm font-medium text-[oklch(0.30_0.02_60)]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl p-8 border border-[oklch(0.88_0.025_85)] bg-[oklch(0.99_0.008_85)]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <CheckCircle size={48} className="text-[oklch(0.78_0.08_300)] mb-4" />
                <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.02_60)] mb-2">Message Sent! 🌸</h3>
                <p className="font-body text-sm text-[oklch(0.45_0.02_60)]">
                  Your email client should have opened. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2.5 rounded-full font-body text-sm font-semibold border-2 border-[oklch(0.78_0.08_300)] text-[oklch(0.65_0.12_300)] hover:bg-[oklch(0.93_0.04_300)] transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.02_60)] mb-6">Drop a Note 🌸</h2>
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Jane Doe" },
                  { id: "email", label: "Your Email", type: "email", placeholder: "jane@example.com" },
                  { id: "subject", label: "Subject", type: "text", placeholder: "Let's collaborate!" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block font-body text-xs font-semibold text-[oklch(0.45_0.02_60)] uppercase tracking-wide mb-1.5">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.025_85)] bg-[oklch(0.975_0.012_85)] font-body text-sm text-[oklch(0.25_0.02_60)] placeholder:text-[oklch(0.65_0.02_60)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.78_0.08_300)] transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-body text-xs font-semibold text-[oklch(0.45_0.02_60)] uppercase tracking-wide mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.025_85)] bg-[oklch(0.975_0.012_85)] font-body text-sm text-[oklch(0.25_0.02_60)] placeholder:text-[oklch(0.65_0.02_60)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.78_0.08_300)] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-body text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, oklch(0.78 0.08 300), oklch(0.72 0.10 265))" }}
                >
                  <Send size={16} />
                  Send Message 🌸
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
