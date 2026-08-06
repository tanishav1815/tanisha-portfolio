// ============================================================
// FloatingBotanicals — Decorative animated botanical elements
// Pure CSS animations, respects prefers-reduced-motion
// ============================================================

interface FloatingElement {
  emoji: string;
  style: React.CSSProperties;
  animClass: string;
}

const elements: FloatingElement[] = [
  { emoji: "🌸", style: { top: "8%", left: "3%", fontSize: "2rem", opacity: 0.5 }, animClass: "animate-float" },
  { emoji: "🌿", style: { top: "15%", right: "5%", fontSize: "1.8rem", opacity: 0.4 }, animClass: "animate-float-delay-1" },
  { emoji: "🌼", style: { top: "35%", left: "1%", fontSize: "1.5rem", opacity: 0.45 }, animClass: "animate-float-delay-2" },
  { emoji: "🍃", style: { top: "55%", right: "2%", fontSize: "1.6rem", opacity: 0.4 }, animClass: "animate-float-delay-3" },
  { emoji: "🌺", style: { top: "70%", left: "4%", fontSize: "1.4rem", opacity: 0.35 }, animClass: "animate-float-slow" },
  { emoji: "✿", style: { top: "85%", right: "6%", fontSize: "1.2rem", opacity: 0.4, color: "#C9B8E8" }, animClass: "animate-float-delay-1" },
  { emoji: "🌷", style: { top: "25%", right: "8%", fontSize: "1.3rem", opacity: 0.35 }, animClass: "animate-float-delay-2" },
  { emoji: "🍀", style: { top: "60%", left: "2%", fontSize: "1.2rem", opacity: 0.4 }, animClass: "animate-float-delay-3" },
];

export default function FloatingBotanicals() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {elements.map((el, i) => (
        <span
          key={i}
          className={`absolute select-none ${el.animClass}`}
          style={el.style}
        >
          {el.emoji}
        </span>
      ))}
    </div>
  );
}
