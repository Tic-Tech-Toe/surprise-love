import { useEffect, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import LottieAnimation from "@/components/LottieAnimation";


// const PLANE_ANIMATION_URL = "https://assets5.lottiefiles.com/packages/lf20_jhu1lqdz.json";
const PLANE_ANIMATION_URL = "./plane.json";

const TICKET_DATE = new Date("2025-02-13");

const calculateDaysLeft = () => {
  const now = new Date();
  const diff = TICKET_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

const daysLeft = calculateDaysLeft();

const calculateDistance = () => {
  const now = new Date();
  const start = new Date();
  const total = TICKET_DATE.getTime() - start.getTime();
  const remaining = TICKET_DATE.getTime() - now.getTime();

  if (remaining <= 0) return 0;
  return Math.min(100, Math.round((remaining / total) * 100));
};

const Final = () => {
  const [distance, setDistance] = useState<number>(calculateDistance());

  useEffect(() => {
    document.title = "I'll be waiting for you 💕";

    const interval = setInterval(() => {
      setDistance(calculateDistance());
    }, 60 * 60 * 1000); // update hourly

    return () => clearInterval(interval);
  }, []);

  const handleDownloadTicket = () => {
    const a = document.createElement("a");
    a.href = "/ticket.pdf";
    a.download = "ticket.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-8">
        {/* Title */}
        <h1 className="font-romantic text-3xl md:text-5xl text-center text-foreground mb-8">
          I’ll be waiting to see you ❤️
        </h1>

        {/* MOBILE-FIRST JOURNEY */}
        {/* JOURNEY */}
<div className="relative w-full max-w-5xl mb-12">

  {/* DESKTOP / LAPTOP — HORIZONTAL */}
  <div className="hidden md:flex items-center justify-between px-12">
    {/* K2 */}
    <div className="flex flex-col items-center gap-2">
      <img
        src="/k2.png"
        alt="Kanchan"
        className="w-40 h-40 object-contain animate-fade-in"
      />
      <p className="font-clean text-sm text-muted-foreground">
        K2 (Delhi)
      </p>
    </div>

    {/* PLANE */}
    <LottieAnimation
      url={PLANE_ANIMATION_URL}
      className="w-24 h-24 opacity-80"
    />

    {/* R2 */}
    <div className="flex flex-col items-center gap-2">
      <img
        src="/r2.png"
        alt="Rishi"
        className="w-40 h-40 object-contain animate-fade-in"
      />
      <p className="font-clean text-sm text-muted-foreground">
        R2 (Bangalore)
      </p>
    </div>
  </div>

  {/* MOBILE — DIAGONAL / CORNERS */}
  <div className="md:hidden relative h-64 w-full">

    {/* R2 — TOP RIGHT */}
    <div className="absolute top-0 right-0 flex flex-col items-center">
      <img
        src="/r2.png"
        alt="Rishi"
        className="w-28 h-28 object-contain animate-fade-in"
      />
      <p className="font-clean text-xs text-muted-foreground mt-1">
        R2 (Bangalore)
      </p>
    </div>

    {/* PLANE — CENTER DIAGONAL */}
    <div className="absolute inset-0 flex items-center justify-center">
      <LottieAnimation
        url={PLANE_ANIMATION_URL}
        className="w-20 h-20 -rotate-45 opacity-80"
      />
    </div>

    {/* K2 — BOTTOM LEFT */}
    <div className="absolute bottom-0 left-0 flex flex-col items-center">
      <img
        src="/k2.png"
        alt="Kanchan"
        className="w-28 h-28 object-contain animate-fade-in"
      />
      <p className="font-clean text-xs text-muted-foreground mt-1">
        K2 (Delhi)
      </p>
    </div>

  </div>
</div>


        {/* Distance */}
        <div className="text-center mb-8">
  <p className="font-clean text-sm text-muted-foreground mb-1">
    Counting down to us 💗
  </p>

  <p className="font-romantic text-4xl text-primary">
    {daysLeft === 0 ? "Together 💕" : `${daysLeft} days`}
  </p>

  <p className="font-clean text-xs text-muted-foreground mt-1">
    Until 13th Feb, 2025
  </p>
</div>


        {/* LOVE TOKEN CARD */}
        <div className="romantic-card p-6 max-w-sm w-full text-center mb-8 animate-fade-in">
          <p className="font-romantic text-2xl text-foreground mb-2">
            Love Token 💗
          </p>
          <p className="font-clean text-sm text-muted-foreground mb-4">
            This ticket isn’t about travel.  
            It’s about arriving.
          </p>

          <button
            onClick={handleDownloadTicket}
            className="btn-romantic w-full pulse-love"
          >
            Download Our Ticket ✈️
          </button>
        </div>

        {/* Final Message */}
        {distance === 0 && (
          <p className="font-romantic text-2xl text-center text-foreground animate-scale-up">
            And the distance finally disappeared… 💖
          </p>
        )}
      </div>
    </div>
  );
};

export default Final;
