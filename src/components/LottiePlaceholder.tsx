interface LottiePlaceholderProps {
  label?: string;
  className?: string;
}

const LottiePlaceholder = ({ label = "💫 Lottie animation goes here 💫", className = "" }: LottiePlaceholderProps) => {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-romantic-pink/40 bg-romantic-blush/30 backdrop-blur-sm ${className}`}
    >
      <p className="font-romantic text-xl md:text-2xl text-romantic-pink/70 text-center px-4">
        {label}
      </p>
    </div>
  );
};

export default LottiePlaceholder;
