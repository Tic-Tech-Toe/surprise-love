import { useState, useEffect } from "react";
import BoringMode from "@/components/BoringMode";
import LuvvyDubbyMode from "@/components/LuvvyDubbyMode";

const Index = () => {
  const [transformed, setTransformed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Update document title based on state
    if (transformed) {
      document.title = "💕 Will you be my Valentine?";
    } else {
      document.title = "Valentine Form (Very Boring)";
    }
  }, [transformed]);

  const handleTransform = () => {
    if (!transformed) {
      setIsTransitioning(true);
      setTimeout(() => {
        setTransformed(true);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div
      className={`transition-all duration-500 ${
        isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      {transformed ? <LuvvyDubbyMode /> : <BoringMode onTransform={handleTransform} />}
    </div>
  );
};

export default Index;
