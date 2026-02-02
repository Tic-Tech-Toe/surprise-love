import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  left: number;
  color: string;
  size: number;
  delay: number;
}

const colors = ["#ff6b9d", "#ff8fab", "#ffb3c6", "#ffc2d1", "#c9184a"];
const hearts = ["💗", "💕", "💖", "💘", "❤️"];

const ConfettiHearts = ({ active }: { active: boolean }) => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    if (active) {
      const newConfetti: Confetti[] = [];
      for (let i = 0; i < 30; i++) {
        newConfetti.push({
          id: i,
          left: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 20 + 15,
          delay: Math.random() * 0.5,
        });
      }
      setConfetti(newConfetti);

      const timeout = setTimeout(() => setConfetti([]), 3000);
      return () => clearTimeout(timeout);
    }
  }, [active]);

  if (!active || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((c) => (
        <span
          key={c.id}
          className="absolute animate-confetti"
          style={{
            left: `${c.left}%`,
            bottom: "50%",
            fontSize: `${c.size}px`,
            animationDelay: `${c.delay}s`,
          }}
        >
          {hearts[Math.floor(Math.random() * hearts.length)]}
        </span>
      ))}
    </div>
  );
};

export default ConfettiHearts;
