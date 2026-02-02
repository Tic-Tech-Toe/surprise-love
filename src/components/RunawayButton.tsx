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
  const [isFloating, setIsFloating] = useState(false);


 const moveButton = useCallback(() => {
  if (attempts >= 3) return;

  setIsFloating(true); // 👈 detach from layout AFTER first move

  const container = containerRef.current;
  const button = buttonRef.current;
  if (!container || !button) return;

  const containerRect = container.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();

  const padding = 16;
  const maxX = containerRect.width - buttonRect.width - padding;
  const maxY = containerRect.height - buttonRect.height - padding;

  const positions = [
    { x: padding, y: padding },
    { x: maxX, y: padding },
    { x: padding, y: maxY },
    { x: maxX, y: maxY },
  ];

  const choice = positions[Math.floor(Math.random() * positions.length)];

  setPosition({ x: choice.x, y: choice.y });
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
  className={`
    btn-romantic-secondary min-w-[140px]
    transition-transform duration-300 ease-out
    ${isFloating ? "absolute" : "relative"}
  `}
  style={{
    transform: isFloating
      ? `translate(${position.x}px, ${position.y}px)`
      : "none",
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
