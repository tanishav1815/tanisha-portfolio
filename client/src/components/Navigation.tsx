// ============================================================
// Navigation — Garden-themed top nav
// Playfair Display for logo, Lato for nav items
// Scroll-aware background transition
// ============================================================
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { personalInfo } from "@/lib/portfolioData";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "GitHub", href: "https://github.com/tanishav1815", external: true },
  { label: "Resume", href: "/resume" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.975_0.012_85/0.95)] backdrop-blur-xl shadow-sm border-b border-[oklch(0.88_0.025_85)]"
            : "bg-transparent"
        }`}
        style={scrolled ? { borderBottomColor: "oklch(0.78 0.08 300 / 0.2)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-2 group">
                <img
                  src="/manus-storage/logo-monogram_4c457977.png"
                  alt="TV Logo"
                  className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span
                  className="font-display text-xl font-semibold text-[oklch(0.25_0.02_60)] tracking-tight"
                >
                  {personalInfo.name}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link font-body text-sm font-medium text-[oklch(0.40_0.02_60)] hover:text-[oklch(0.65_0.12_300)] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} href={item.href}>
                    <span
                      className={`nav-link font-body text-sm font-medium transition-colors duration-200 ${
                        location === item.href
                          ? "text-[oklch(0.65_0.12_300)] active"
                          : "text-[oklch(0.40_0.02_60)] hover:text-[oklch(0.65_0.12_300)]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )
              )}
              {/* Decorative flower */}
              <span className="text-base animate-twinkle opacity-70">✿</span>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-[oklch(0.40_0.02_60)] hover:bg-[oklch(0.93_0.04_300)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-[oklch(0.975_0.012_85/0.98)] backdrop-blur-xl border-b border-[oklch(0.88_0.025_85)] px-4 pb-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 font-body text-sm font-medium text-[oklch(0.40_0.02_60)] hover:text-[oklch(0.65_0.12_300)] border-b border-[oklch(0.88_0.025_85)] last:border-0 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href}>
                  <span
                    className={`block py-3 font-body text-sm font-medium border-b border-[oklch(0.88_0.025_85)] last:border-0 transition-colors ${
                      location === item.href
                        ? "text-[oklch(0.65_0.12_300)]"
                        : "text-[oklch(0.40_0.02_60)] hover:text-[oklch(0.65_0.12_300)]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              )
            )}
          </div>
        )}
      </header>
    </>
  );
}
