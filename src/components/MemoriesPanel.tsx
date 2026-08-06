import { Heart, Camera, Sparkles, Music } from "lucide-react";

const memories = [
  { icon: Heart, label: "First glance", color: "bg-romantic-pink/20 text-romantic-pink" },
  { icon: Camera, label: "Captured smiles", color: "bg-romantic-peach/30 text-romantic-red" },
  { icon: Music, label: "Our songs", color: "bg-romantic-purple/20 text-romantic-purple" },
  { icon: Sparkles, label: "Little moments", color: "bg-romantic-blush/50 text-romantic-pink" },
];

const MemoriesPanel = () => {
  return (
    <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-screen flex items-center justify-center p-6 md:p-10 bg-gradient-to-br from-romantic-cream via-romantic-blush/40 to-romantic-peach/30">
      <div className="w-full max-w-sm animate-fade-in">
        <div className="relative rounded-3xl bg-white/70 backdrop-blur-md border border-romantic-pink/20 p-6 shadow-xl shadow-romantic-pink/10 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-romantic-pink/20 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-romantic-purple/20 blur-2xl" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-romantic-pink to-romantic-purple text-white shadow-lg shadow-romantic-pink/30 mb-4 animate-bounce">
              <Heart className="w-8 h-8 fill-current" />
            </div>

            <h2 className="font-romantic text-3xl md:text-4xl text-romantic-red mb-2">
              Our Memories
            </h2>
            <p className="font-clean text-sm text-muted-foreground mb-6">
              A pocket full of moments that make my heart smile.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {memories.map((memory, index) => {
                const Icon = memory.icon;
                return (
                  <div
                    key={memory.label}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/80 border border-romantic-pink/10 shadow-sm hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${memory.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-clean text-xs font-medium text-foreground">
                      {memory.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesPanel;
