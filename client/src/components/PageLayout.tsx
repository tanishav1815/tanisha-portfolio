// ============================================================
// PageLayout — Wraps all pages with nav + floating botanicals
// ============================================================
import Navigation from "./Navigation";
import FloatingBotanicals from "./FloatingBotanicals";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[oklch(0.975_0.012_85)] relative">
      <FloatingBotanicals />
      <Navigation />
      <main className={`relative z-10 pt-16 ${className}`}>
        {children}
      </main>
      {/* Footer */}
      <footer
        className="relative z-10 py-10 border-t border-[oklch(0.88_0.025_85)]"
        style={{ background: "linear-gradient(180deg, oklch(0.975 0.012 85) 0%, oklch(0.96 0.02 300) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-4 mb-4">
            {["🌸", "🌿", "🌼", "🍃", "🌺"].map((emoji, i) => (
              <span key={i} className={`text-lg opacity-60 ${i % 2 === 0 ? "animate-float" : "animate-float-delay-1"}`}>
                {emoji}
              </span>
            ))}
          </div>
          <p className="font-accent text-2xl text-[oklch(0.78_0.08_300)] mb-1">
            Crafted with 🌸 by Tanisha Verma
          </p>
          <p className="font-body text-sm text-[oklch(0.55_0.02_60)]">
            Phoenix, AZ ·{" "}
            <a href="mailto:tanishav1815@gmail.com" className="hover:text-[oklch(0.65_0.12_300)] transition-colors">
              tanishav1815@gmail.com
            </a>
          </p>
          <p className="font-body text-xs text-[oklch(0.65_0.02_60)] mt-2">
            AI Engineer · Arizona State University · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
