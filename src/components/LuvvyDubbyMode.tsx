import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "./FloatingHearts";
import LottieAnimation from "./LottieAnimation";
import RunawayButton from "./RunawayButton";

// Free romantic Lottie animation URL
// const LOVE_ANIMATION_URL = "https://assets2.lottiefiles.com/packages/lf20_cbrbre30.json";
const LOVE_ANIMATION_URL = "/love2.json";

const LuvvyDubbyMode = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showNoModal, setShowNoModal] = useState(false);

  const handleYes = () => {
    navigate("/terms");
  };

  const handleNoFinal = () => {
    setShowNoModal(true);
  };

  return (
    <div className="min-h-screen romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center max-w-lg mx-auto animate-fade-in">
          <h1 className="font-romantic text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
            Whatever you touch, you make it beautiful ✨
          </h1>
          <p className="font-clean text-lg md:text-xl text-muted-foreground mb-8">
            So… I have just one important question.
          </p>
        </div>

        <div className="w-full max-w-sm mx-auto mb-8 animate-scale-up" style={{ animationDelay: "0.3s" }}>
          <LottieAnimation
            url={LOVE_ANIMATION_URL}
            className="h-48 md:h-64 w-full"
          />
        </div>

        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h2 className="font-romantic text-3xl md:text-4xl text-foreground">
            Would you want to be my Valentine? 💖
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-md h-32 flex flex-col md:flex-row items-center justify-center gap-4 animate-slide-in-bottom"
          style={{ animationDelay: "0.7s" }}
        >
          <button
            onClick={handleYes}
            className="btn-romantic pulse-love hover:animate-heartbeat"
          >
            YES 💕
          </button>

          <RunawayButton onFinalClick={handleNoFinal} containerRef={containerRef} />
        </div>
      </div>

      {/* No Modal */}
      {showNoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="romantic-card p-8 max-w-sm w-full text-center animate-scale-up">
            <p className="font-romantic text-2xl md:text-3xl text-foreground mb-6">
              Are you really sure? 😢
            </p>
            <button
              onClick={handleYes}
              className="btn-romantic pulse-love"
            >
              Okay, YES! 💖
            </button>
            <button
              onClick={() => setShowNoModal(false)}
              className="block mx-auto mt-4 font-clean text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Let me think again...
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LuvvyDubbyMode;
