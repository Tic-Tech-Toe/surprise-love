// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import FloatingHearts from "@/components/FloatingHearts";
// import LottieAnimation from "@/components/LottieAnimation";

// // Free airplane Lottie animation
// const PLANE_LOADING_URL = "https://assets10.lottiefiles.com/packages/lf20_UJNc2t.json";

// const Loading = () => {
//   const navigate = useNavigate();
//   const [dots, setDots] = useState("");

//   useEffect(() => {
//     // Animated dots
//     const dotsInterval = setInterval(() => {
//       setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
//     }, 500);

//     // Download ticket and navigate after 5 seconds
//     const timeout = setTimeout(() => {
//       // Create and download a simple ticket
//       const ticketContent = `
// ╔════════════════════════════════════════════╗
// ║                                            ║
// ║          ✈️ FLIGHT TICKET ✈️               ║
// ║                                            ║
// ║  Passenger: Kanchan                        ║
// ║  Destination: My Heart 💕                  ║
// ║  Date: Forever & Always                    ║
// ║  Seat: Right Next to Me                    ║
// ║  Class: First Class Love                   ║
// ║                                            ║
// ║  Status: CONFIRMED ✓                       ║
// ║                                            ║
// ║  "Distance means so little                 ║
// ║   when someone means so much" 💗           ║
// ║                                            ║
// ╚════════════════════════════════════════════╝
//       `;

//       const blob = new Blob([ticketContent], { type: "text/plain" });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       // a.download = "ticket.pdf";
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);

//       navigate("/final");
//     }, 5000);

//     return () => {
//       clearInterval(dotsInterval);
//       clearTimeout(timeout);
//     };
//   }, [navigate]);

//   return (
//     <div className="min-h-screen romantic-gradient-bg relative overflow-hidden">
//       <FloatingHearts />

//       <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
//         <div className="text-center">
//           <div className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-8">
//             <LottieAnimation
//               url={PLANE_LOADING_URL}
//               className="w-full h-full"
//             />
//           </div>

//           <h1 className="font-romantic text-3xl md:text-4xl text-foreground mb-4">
//             Booking your flight tickets{dots} ✈️💗
//           </h1>

//           <p className="font-clean text-lg text-muted-foreground">
//             Please wait, magic is happening...
//           </p>

//           <div className="mt-8 flex justify-center gap-2">
//             {[0, 1, 2].map((i) => (
//               <div
//                 key={i}
//                 className="w-3 h-3 rounded-full bg-primary animate-bounce"
//                 style={{ animationDelay: `${i * 0.2}s` }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loading;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import LottieAnimation from "@/components/LottieAnimation";

/**
 * LOTTIE CHOICE (IMPORTANT)
 * Use a SOFT, SLOW heart or glow animation
 * Example search on LottieFiles:
 * - "soft heart glow"
 * - "love pulse minimal"
 * - "floating heart subtle"
 *
 * Download JSON → put in /public/lottie/
 */
const LOVE_LOADING_URL = "/lottie/soft-heart.json";

/**
 * Lines to reveal one by one
 * Keep them short. Let silence do the work.
 */
const LINES = [
  "Okay… let me get ready 🤍",
  "Checking dates…",
  "Packing a little excitement ✨",
  "Making sure I don’t forget anything important",
  "Closing the distance, one step at a time",
  "Almost there… 💗",
];

const Loading = () => {
  const navigate = useNavigate();
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= LINES.length) {
          clearInterval(interval);

          // small pause after last line
          setTimeout(() => {
            navigate("/final");
          }, 1400);

          return prev;
        }
        return prev + 1;
      });
    }, 1200); // timing between lines (sweet spot)

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* LOTTIE — SMALL, SUBTLE, SUPPORTING */}
        <div className="mb-6 opacity-70">
          <LottieAnimation
            url={LOVE_LOADING_URL}
            className="h-24 w-24 mx-auto"
            loop
          />
        </div>

        {/* TEXT REVEAL */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          {LINES.slice(0, visibleLines).map((line, index) => (
            <p
              key={index}
              className="
                font-romantic
                text-2xl md:text-3xl
                text-foreground
                animate-fade-in
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* SOFT FOOTER LINE */}
        {visibleLines < LINES.length && (
          <p className="mt-8 font-clean text-sm text-muted-foreground opacity-70">
            Just a moment…
          </p>
        )}
      </div>
    </div>
  );
};

export default Loading;
