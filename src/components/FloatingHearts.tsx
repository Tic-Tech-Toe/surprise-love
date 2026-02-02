import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const heart: Heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 3,
      };
      setHearts((prev) => [...prev.slice(-15), heart]);
    };

    const interval = setInterval(createHeart, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart text-romantic-pink opacity-60"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          {Math.random() > 0.5 ? "💗" : "💕"}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
