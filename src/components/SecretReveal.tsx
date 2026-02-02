import { useEffect, useState } from "react";

interface SecretRevealProps {
  visible: boolean;
}

const SecretReveal = ({ visible }: SecretRevealProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  if (!show) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        transition-opacity duration-700
        ${visible ? "opacity-100" : "opacity-0"}
      `}
      style={{
        background:
          "radial-gradient(circle at top, #3b0a45 0%, #1f102a 45%, #120916 100%)",
      }}
    >
      <div className="text-center select-none px-6 max-w-xl">
        {/* Line 1 */}
        <p
          className={`
            font-cursive text-4xl md:text-6xl mb-10
            text-rose-200 shimmer
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
        >
          It’s you and always will be you.
        </p>

        {/* IMAGE WITH JHILMIL BORDER + SPARKLE BURST */}
        <div
          className={`
            relative mx-auto mb-8
            w-44 h-44 md:w-56 md:h-56
            transition-all duration-700 delay-150 ease-out
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          {/* ✨ Sparkle Burst */}
          <div className={`sparkle-burst ${visible ? "active" : ""}`}>
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className={`sparkle-dot ${
                  i % 3 === 0 ? "sparkle-emoji" : ""
                }`}
              >
                {i % 3 === 0 ? "✨" : ""}
              </span>
            ))}
          </div>

          {/* Sparkle Ring */}
          <div className="sparkle-ring" />

          {/* Image mask */}
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
            <img
              src="/kanchan.jpeg"
              alt="Kanchan"
              className="w-full h-full object-contain animate-float"
            />
          </div>
        </div>

        {/* NAME — SIGNATURE STYLE */}
        <p
          className={`
            font-cursive text-6xl md:text-8xl
            text-[#ff9fcf]
            -mt-4
            rotate-[-3deg]
            drop-shadow-[0_0_18px_rgba(255,159,207,0.6)]
            transition-all duration-700 delay-300 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
        >
          Kanchan <span className="heart-pulse">💖</span>
        </p>
      </div>
    </div>
  );
};

export default SecretReveal;
