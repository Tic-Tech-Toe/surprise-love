import { useState, useRef, useCallback } from "react";

interface RunawayButtonProps {
  onFinalClick: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

const buttonTexts = ["No 🙄", "Are you sure? 😏", "Think again 😜", "Last chance 😳"];

const RunawayButton = ({ onFinalClick, containerRef }: RunawayButtonProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const moveButton = useCallback(() => {
    if (attempts >= 3) return;

    const container = containerRef.current;
    const button = buttonRef.current;
    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;

    const newX = Math.max(10, Math.min(maxX, Math.random() * maxX));
    const newY = Math.max(10, Math.min(maxY, Math.random() * maxY));

    setPosition({ x: newX - containerRect.width / 2 + buttonRect.width / 2, y: newY - containerRect.height / 2 + buttonRect.height / 2 });
    setTextIndex((prev) => Math.min(prev + 1, buttonTexts.length - 1));
    setAttempts((prev) => prev + 1);
  }, [attempts, containerRef]);

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    if (attempts < 3) {
      e.preventDefault();
      moveButton();
    }
  };

  const handleClick = () => {
    if (attempts >= 3) {
      onFinalClick();
    }
  };

  return (
    <button
      ref={buttonRef}
      className="btn-romantic-secondary min-w-[140px] transition-all duration-300 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
      onClick={handleClick}
    >
      {buttonTexts[textIndex]}
    </button>
  );
};

export default RunawayButton;
