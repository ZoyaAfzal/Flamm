import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import burger from "@/assets/dish-burger.jpg";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-cream py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <span className="font-display text-[28vw] text-brick/[0.06] leading-none select-none">FLÄMM</span>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-[0.3em] text-brick uppercase">About Us</span>
          <h2 className="font-display text-5xl md:text-7xl text-charcoal mt-4 leading-[0.95]">
            THE BEST <span className="text-brick">LOW-CARB</span>, PROTEIN-RICH, FIBER-RICH PLATES YOU CAN GET.
          </h2>
          <p className="mt-6 text-charcoal/70 max-w-lg leading-relaxed">
            Born in a backyard, perfected on a wood-fire grill. Flämm is where chef-driven nutrition meets the unbeatable joy of food cooked over real flame.
          </p>
          <Button className="mt-8 rounded-full bg-brick text-cream hover:bg-brick/90 px-7 h-12">
            Get Started
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: -8, y: 40 }}
          whileInView={{ opacity: 1, rotate: -3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative md:-mr-20"
        >
          <img src={burger} alt="Signature burger" className="w-full rounded-[2rem] shadow-2xl" loading="lazy" />
          <div className="absolute -bottom-4 -left-4 bg-amber-flame text-charcoal rounded-full px-5 py-3 font-display text-2xl shadow-xl rotate-[-6deg]">
            Chef's Pick
          </div>
        </motion.div>
      </div>
    </section>
  );
}
