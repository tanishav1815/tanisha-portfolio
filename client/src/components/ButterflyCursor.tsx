// ============================================================
// ButterflyCursor — Custom cursor with 3D wings & sparkle trail
// Sparkles are throttled and animated with SVG 4-point stars
// ============================================================
import { useEffect, useState, useRef } from "react";

interface Sparkle {
  id: string;
  x: number;
  y: number;
  color: string;
  size: number;
  createdAt: number;
}

const PASTEL_COLORS = [
  "oklch(0.78 0.08 300)", // Lilac
  "oklch(0.85 0.07 5)",   // Soft Pink
  "oklch(0.82 0.06 220)", // Baby Blue
  "oklch(0.91 0.09 90)",  // Butter Yellow
  "oklch(0.85 0.08 50)",  // Peach
  "oklch(0.88 0.07 165)"  // Mint Green
];

export default function ButterflyCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const lastSpawnRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });
      if (!visible) setVisible(true);

      // Throttling: Calculate distance moved from last sparkle spawn
      const dx = x - lastSpawnRef.current.x;
      const dy = y - lastSpawnRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 15) { // Spawn a sparkle every 15 pixels of movement
        const newSparkle: Sparkle = {
          id: Math.random().toString(36).substring(2, 9),
          // Add a tiny random offset so they look like they scatter slightly
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          color: PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)],
          size: Math.random() * 6 + 4, // size from 4px to 10px
          createdAt: Date.now()
        };

        setSparkles(prev => [...prev.slice(-20), newSparkle]); // Keep a max of 20 active sparkles in state
        lastSpawnRef.current = { x, y };
      }
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [visible]);

  // Periodic cleanup of expired sparkles (older than 800ms)
  useEffect(() => {
    if (sparkles.length === 0) return;
    const interval = setInterval(() => {
      const now = Date.now();
      setSparkles(prev => prev.filter(s => now - s.createdAt < 800));
    }, 150);
    return () => clearInterval(interval);
  }, [sparkles]);

  if (!visible) return null;

  return (
    <>
      {/* ── SPARKLE TRAIL ── */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-[9998] animate-sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            color: sparkle.color,
          }}
        >
          {/* Magical 4-point star SVG */}
          <svg viewBox="0 0 10 10" className="w-full h-full fill-current">
            <path d="M5,0 L6.2,3.8 L10,5 L6.2,6.2 L5,10 L3.8,6.2 L0,5 L3.8,3.8 Z" />
          </svg>
        </div>
      ))}

      {/* ── BUTTERFLY ── */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          // Floating fly delay effect
          transition: "left 0.08s ease-out, top 0.08s ease-out"
        }}
      >
        <div className="relative w-8 h-8 flex items-center justify-center" style={{ perspective: "100px" }}>
          {/* Left Wing */}
          <div
            className="absolute right-1/2 w-4.5 h-6 rounded-l-[120%_100%] origin-right opacity-90 shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
            style={{
              background: "linear-gradient(135deg, oklch(0.78 0.08 300) 0%, oklch(0.88 0.05 300) 100%)",
              animation: "flap-left 0.18s infinite ease-in-out"
            }}
          />
          {/* Body */}
          <div className="w-0.75 h-5.5 bg-[oklch(0.25_0.02_60)] rounded-full z-10 shadow-sm" />
          {/* Right Wing */}
          <div
            className="absolute left-1/2 w-4.5 h-6 rounded-r-[120%_100%] origin-left opacity-90 shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
            style={{
              background: "linear-gradient(135deg, oklch(0.78 0.08 300) 0%, oklch(0.88 0.05 300) 100%)",
              animation: "flap-right 0.18s infinite ease-in-out"
            }}
          />
        </div>
      </div>
    </>
  );
}
