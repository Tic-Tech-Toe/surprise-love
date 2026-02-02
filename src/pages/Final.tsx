import { useEffect, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import LottieAnimation from "@/components/LottieAnimation";

// Free Lottie animation URLs for characters
const GIRL_ANIMATION_URL = "https://assets3.lottiefiles.com/packages/lf20_puciaact.json";
const BOY_ANIMATION_URL = "https://assets9.lottiefiles.com/packages/lf20_kkflmtur.json";
const PLANE_ANIMATION_URL = "https://assets5.lottiefiles.com/packages/lf20_jhu1lqdz.json";

const Final = () => {
  const [distance, setDistance] = useState(100);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Update document title
    document.title = "I'll be waiting for you 💕";

    // Animate the distance reduction
    const interval = setInterval(() => {
      setDistance((prev) => {
        if (prev <= 10) {
          clearInterval(interval);
          setShowMessage(true);
          return 10;
        }
        return prev - 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <h1 className="font-romantic text-3xl md:text-5xl text-center text-foreground mb-12 animate-fade-in">
          I'll be waiting to see you ❤️
        </h1>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center w-full max-w-5xl">
          <div
            className="transition-all duration-300 animate-fade-in"
            style={{
              transform: `translateX(${(100 - distance) * 0.8}px)`,
            }}
          >
            <LottieAnimation
              url={GIRL_ANIMATION_URL}
              className="w-48 h-64"
            />
          </div>

          <div
            className="mx-8 transition-all duration-300"
            style={{
              opacity: distance > 20 ? 1 : 0,
            }}
          >
            <LottieAnimation
              url={PLANE_ANIMATION_URL}
              className="w-32 h-32"
            />
          </div>

          <div
            className="transition-all duration-300 animate-fade-in"
            style={{
              animationDelay: "0.3s",
              transform: `translateX(-${(100 - distance) * 0.8}px)`,
            }}
          >
            <LottieAnimation
              url={BOY_ANIMATION_URL}
              className="w-48 h-64"
            />
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="flex md:hidden flex-col items-center gap-4 w-full max-w-xs">
          <div
            className="transition-all duration-300 animate-fade-in"
            style={{
              transform: `translateY(${(100 - distance) * 0.4}px)`,
            }}
          >
            <LottieAnimation
              url={GIRL_ANIMATION_URL}
              className="w-40 h-48"
            />
          </div>

          <div
            className="transition-all duration-300"
            style={{
              opacity: distance > 20 ? 1 : 0,
              transform: "rotate(90deg)",
            }}
          >
            <LottieAnimation
              url={PLANE_ANIMATION_URL}
              className="w-24 h-24"
            />
          </div>

          <div
            className="transition-all duration-300 animate-fade-in"
            style={{
              animationDelay: "0.3s",
              transform: `translateY(-${(100 - distance) * 0.4}px)`,
            }}
          >
            <LottieAnimation
              url={BOY_ANIMATION_URL}
              className="w-40 h-48"
            />
          </div>
        </div>

        {/* Distance indicator */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="font-clean text-lg text-muted-foreground mb-2">
            Distance remaining:
          </p>
          <p className="font-romantic text-4xl text-primary">
            {distance <= 10 ? "Together 💕" : `${distance}%`}
          </p>
        </div>

        {showMessage && (
          <div className="mt-8 animate-scale-up">
            <p className="font-romantic text-2xl md:text-3xl text-center text-foreground">
              And they lived happily ever after... 💗
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Final;
