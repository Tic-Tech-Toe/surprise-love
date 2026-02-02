import { useEffect, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import LottiePlaceholder from "@/components/LottiePlaceholder";

const Final = () => {
  const [distance, setDistance] = useState(100);
  const [planePosition, setPlanePosition] = useState(0);

  useEffect(() => {
    // Update document title
    document.title = "I'll be waiting for you 💕";

    // Animate the distance reduction
    const interval = setInterval(() => {
      setDistance((prev) => {
        if (prev <= 10) {
          clearInterval(interval);
          return 10;
        }
        return prev - 2;
      });
      setPlanePosition((prev) => Math.min(prev + 2, 100));
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
        <div className="hidden md:flex items-center justify-center w-full max-w-4xl gap-8">
          <div
            className="transition-all duration-300 animate-fade-in"
            style={{
              transform: `translateX(${(100 - distance) / 3}%)`,
            }}
          >
            <LottiePlaceholder
              label="👧 Girl"
              className="w-48 h-64"
            />
          </div>

          <div
            className="text-5xl animate-plane-fly transition-all duration-300"
            style={{
              transform: `translateX(${planePosition / 2 - 25}px)`,
            }}
          >
            ✈️
          </div>

          <div
            className="transition-all duration-300 animate-fade-in"
            style={{
              animationDelay: "0.3s",
              transform: `translateX(-${(100 - distance) / 3}%)`,
            }}
          >
            <LottiePlaceholder
              label="👦 Boy"
              className="w-48 h-64"
            />
          </div>
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="flex md:hidden flex-col items-center gap-6 w-full max-w-xs">
          <div
            className="transition-all duration-300 animate-fade-in"
            style={{
              transform: `translateY(${(100 - distance) / 4}px)`,
            }}
          >
            <LottiePlaceholder
              label="👧 Girl"
              className="w-40 h-48"
            />
          </div>

          <div
            className="text-4xl animate-plane-fly transition-all duration-300"
            style={{
              transform: `rotate(90deg) translateX(${planePosition / 4}px)`,
            }}
          >
            ✈️
          </div>

          <div
            className="transition-all duration-300 animate-fade-in"
            style={{
              animationDelay: "0.3s",
              transform: `translateY(-${(100 - distance) / 4}px)`,
            }}
          >
            <LottiePlaceholder
              label="👦 Boy"
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

        {distance <= 10 && (
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
