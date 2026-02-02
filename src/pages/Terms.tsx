import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import ConfettiHearts from "@/components/ConfettiHearts";

const terms = [
  "I will always be yours 🤍",
  "I'll listen to you, even when I don't fully understand",
  "We will put us before everything else",
  "I'll choose you, every single day",
  "We'll laugh, fight, fix, and grow together",
];

const Terms = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAccept = () => {
    setShowConfetti(true);
    setTimeout(() => {
      navigate("/loading");
    }, 1000);
  };

  return (
    <div className="min-h-screen romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />
      <ConfettiHearts active={showConfetti} />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="romantic-card p-6 md:p-10 max-w-lg w-full animate-fade-in">
          <h1 className="font-romantic text-3xl md:text-4xl text-center text-foreground mb-8">
            Terms & Conditions of Being My Valentine 💞
          </h1>

          <ul className="space-y-4 mb-8">
            {terms.map((term, index) => (
              <li
                key={index}
                className="flex items-start gap-3 font-clean text-base md:text-lg text-foreground animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-romantic-pink text-xl">💗</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-romantic-pink/20 pt-6">
            <label className="flex items-center gap-3 cursor-pointer group mb-6">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-7 h-7 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${
                    checked
                      ? "bg-primary border-primary"
                      : "border-romantic-pink/50 group-hover:border-primary"
                  }`}
                >
                  {checked && (
                    <svg
                      className="w-4 h-4 text-primary-foreground animate-scale-up"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span className="font-clean text-base md:text-lg text-foreground">
                I accept these terms with my whole heart 💖
              </span>
            </label>

            <button
              onClick={handleAccept}
              disabled={!checked}
              className={`w-full btn-romantic transition-all duration-300 ${
                !checked
                  ? "opacity-50 cursor-not-allowed"
                  : "pulse-love"
              }`}
            >
              Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
