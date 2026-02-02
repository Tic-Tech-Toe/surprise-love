import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  url: string;
  className?: string;
  loop?: boolean;
}

const LottieAnimation = ({ url, className = "", loop = true }: LottieAnimationProps) => {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => setError(true));
  }, [url]);

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className="text-4xl">💕</span>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="animate-pulse text-romantic-pink">Loading...</div>
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      className={className}
    />
  );
};

export default LottieAnimation;
