import { motion } from "framer-motion";
import { cookingWords } from "@/lib/data";

export function CookingWordsCloud() {
  const ticker = "sear it · sauce it · serve it · ";
  return (
    <section className="bg-brick text-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-xs tracking-[0.3em] uppercase text-amber-flame">In the kitchen</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl">A vocabulary written in flame</h2>
        <div className="relative h-[480px] mt-12">
          {cookingWords.map((w) => (
            <motion.span
              key={w.word}
              className={`absolute font-display select-none ${w.stroke ? "text-stroke-cream" : ""} ${w.oval ? "border border-cream/60 rounded-full px-5 py-1" : ""}`}
              style={{ left: `${w.x}%`, top: `${w.y}%`, fontSize: w.size, rotate: w.rotate }}
              whileHover={{
                scale: 1.3,
                color: "oklch(0.82 0.16 85)",
                textShadow: "0 0 24px rgba(240,192,64,0.7)",
                transition: { duration: 0.2 },
              }}
            >
              {w.word}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="overflow-hidden border-y border-cream/20 py-6 mt-8">
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="font-display text-4xl md:text-6xl mx-8 text-cream/90">
              {ticker}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
