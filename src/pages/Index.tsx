import { useEffect, useRef, useState } from "react";
import BoringMode from "@/components/BoringMode";
import LuvvyDubbyMode from "@/components/LuvvyDubbyMode";
import SecretReveal from "@/components/SecretReveal";

const Index = () => {
  const [transformed, setTransformed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSecretOverlay, setShowSecretOverlay] = useState(false);

  // 🔊 Heartbeat audio (created ONCE)
  const heartbeatRef = useRef<HTMLAudioElement | null>(null);

  // Create audio once on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const audio = new Audio("/sounds/heartbeat.mp3");
      audio.volume = 0.12; // very soft
      audio.loop = true;
      audio.preload = "auto";
      heartbeatRef.current = audio;
    }
  }, []);

  // 🔒 Disable scroll during secret reveal
  useEffect(() => {
    if (showSecretOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showSecretOverlay]);

  // 🏷️ Page title
  useEffect(() => {
    document.title = transformed
      ? "💕 Will you be my Valentine?"
      : "Valentine Form";
  }, [transformed]);

  const handleTransform = () => {
    if (showSecretOverlay || transformed) return;

    // ▶️ Play heartbeat AFTER user interaction
    if (heartbeatRef.current) {
      heartbeatRef.current.currentTime = 0;
      heartbeatRef.current.play().catch(() => {});
    }

    // 🌑 Show secret overlay
    setShowSecretOverlay(true);

    // ⏳ Hold emotional moment
    setTimeout(() => {
      // ⏹️ Stop heartbeat
      if (heartbeatRef.current) {
        heartbeatRef.current.pause();
        heartbeatRef.current.currentTime = 0;
      }

      // 🌈 Transition to luvvy-dubby
      setShowSecretOverlay(false);
      setIsTransitioning(true);

      setTimeout(() => {
        setTransformed(true);
        setIsTransitioning(false);
      }, 600);
    }, 3400);
  };

  return (
    <div
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isTransitioning ? "opacity-0 scale-[0.96]" : "opacity-100 scale-100"}
      `}
    >
      <SecretReveal visible={showSecretOverlay} />

      {transformed ? (
        <LuvvyDubbyMode />
      ) : (
        <BoringMode onTransform={handleTransform} />
      )}
    </div>
  );
};

export default Index;
