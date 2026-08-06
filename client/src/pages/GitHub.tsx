// ============================================================
// GitHub Page — Redirect to GitHub profile with garden styling
// ============================================================
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { personalInfo } from "@/lib/portfolioData";
import { ExternalLink } from "lucide-react";

export default function GitHub() {
  useEffect(() => {
    // Auto-redirect after 2 seconds
    const timer = setTimeout(() => {
      window.open("https://github.com/tanishav1815", "_blank");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout>
      <section
        className="min-h-[70vh] flex items-center justify-center px-4"
        style={{ background: "linear-gradient(135deg, oklch(0.975 0.012 85) 0%, oklch(0.95 0.03 165) 100%)" }}
      >
        <div className="text-center animate-fade-up">
          <div className="text-7xl mb-6 animate-float">🌿</div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[oklch(0.22_0.02_60)] mb-3">
            Heading to GitHub…
          </h1>
          <p className="font-body text-base text-[oklch(0.45_0.02_60)] mb-8 max-w-sm mx-auto">
            You're being redirected to Tanisha's GitHub profile where all the code lives.
          </p>
          <a
            href="https://github.com/tanishav1815"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body text-base font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, oklch(0.88 0.07 165), oklch(0.72 0.10 265))" }}
          >
            <ExternalLink size={18} />
            Open GitHub Profile
          </a>
          <p className="font-body text-xs text-[oklch(0.60_0.02_60)] mt-6">
            github.com/tanishav1815
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
