// ============================================================
// ButterflyCursor — Custom animated cursor for desktop screens
// Wing flapping is animated via CSS 3D transform animations
// ============================================================
import { useEffect, useState } from "react";

export default function ButterflyCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        // Smooth transition gives it a floating/flying delay effect as it follows the mouse
        transition: "left 0.08s ease-out, top 0.08s ease-out"
      }}
    >
      {/* 3D Butterfly Container */}
      <div className="relative w-8 h-8 flex items-center justify-center" style={{ perspective: "100px" }}>
        
        {/* Left Wing (Lilac gradient, flapping via rotateY) */}
        <div
          className="absolute right-1/2 w-4.5 h-6 rounded-l-[120%_100%] origin-right opacity-90 shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
          style={{
            background: "linear-gradient(135deg, oklch(0.78 0.08 300) 0%, oklch(0.88 0.05 300) 100%)",
            animation: "flap-left 0.18s infinite ease-in-out"
          }}
        />
        
        {/* Body (Dark charcoal stem) */}
        <div className="w-0.75 h-5.5 bg-[oklch(0.25_0.02_60)] rounded-full z-10 shadow-sm" />
        
        {/* Right Wing (Lilac gradient, flapping opposite rotateY) */}
        <div
          className="absolute left-1/2 w-4.5 h-6 rounded-r-[120%_100%] origin-left opacity-90 shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
          style={{
            background: "linear-gradient(135deg, oklch(0.78 0.08 300) 0%, oklch(0.88 0.05 300) 100%)",
            animation: "flap-right 0.18s infinite ease-in-out"
          }}
        />
      </div>
    </div>
  );
}
