import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Pizza, Beef, Drumstick } from "lucide-react";
import hero from "@/assets/hero-grill.jpg";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const word = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-20 md:pt-40 md:pb-28">
      {/* decorative floating icons */}
      <motion.div className="absolute top-28 left-6 text-brick/30" animate={{ y: [0, -10, 0], rotate: [0, 12, -8, 0] }} transition={{ duration: 6, repeat: Infinity }}>
        <Pizza className="w-16 h-16" />
      </motion.div>
      <motion.div className="absolute top-40 right-10 text-amber-flame/50" animate={{ y: [0, -14, 0], rotate: [0, -10, 10, 0] }} transition={{ duration: 7, repeat: Infinity }}>
        <Beef className="w-20 h-20" />
      </motion.div>
      <motion.div className="absolute bottom-10 left-1/3 text-brick/20" animate={{ y: [0, -8, 0], rotate: [0, 8, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <Drumstick className="w-14 h-14" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center relative">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={word} className="inline-block text-xs tracking-[0.3em] text-brick font-medium uppercase mb-6">
            ✦ Fire & Feast House
          </motion.span>
          <h1 
            className="font-display text-[18vw] lg:text-[10rem] leading-[0.85] text-charcoal cursor-pointer group"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.span 
              variants={word} 
              className="block group-hover:text-brick transition-colors duration-300"
            >
              FIRE
            </motion.span>
            <motion.span 
              variants={word} 
              className="block group-hover:translate-x-4 transition-transform duration-500"
            >
              MEETS
            </motion.span>
            <motion.span variants={word} className="block group-hover:text-amber-flame transition-colors duration-300">
              FLAVOR
              <motion.span
                className="inline-block text-brick"
                animate={{ rotate: [0, 12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >@</motion.span>
            </motion.span>
          </h1>
          <motion.p variants={word} className="mt-8 max-w-md text-base md:text-lg text-charcoal/70 leading-relaxed">
            Craving something extraordinary? Flämm brings you the boldest grills, curated by fire‑first chefs — protein‑rich, low‑carb, unapologetically delicious.
          </motion.p>
          <motion.div variants={word} className="mt-10 flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-brick text-cream hover:bg-brick/90 px-8 h-12 group"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Order Now
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-8 h-12 transition-all"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Menu
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-cream">
            <img src={hero} alt="Flame-grilled steak with golden char marks" className="w-full h-[520px] object-cover" width={1024} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            <motion.div
              className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur rounded-2xl p-4 flex items-center gap-3"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-12 h-12 rounded-full bg-brick text-cream grid place-items-center font-display text-xl">★</div>
              <div>
                <p className="font-display text-xl text-charcoal leading-none">4.9 / 5.0</p>
                <p className="text-xs text-charcoal/60">Loved by 12k+ diners</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-amber-flame grid place-items-center font-display text-charcoal text-center text-sm leading-tight shadow-xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            FRESH · DAILY ·
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
