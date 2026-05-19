import { motion } from "framer-motion";
import { featured } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedDishes() {
  return (
    <section className="grid lg:grid-cols-[1.1fr_1fr]">
      {/* Left — brick */}
      <div className="bg-brick text-cream p-8 md:p-16 relative overflow-hidden">
        <span className="text-xs tracking-[0.3em] uppercase text-amber-flame">Yumminess on the brain</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 mb-10">Hot off the grill</h2>
        <div className="flex gap-6 overflow-x-auto pb-6 -mx-2 px-2 snap-x">
          {featured.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="snap-start shrink-0 w-64 bg-cream text-charcoal rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="overflow-hidden h-44">
                <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-lg leading-tight">{d.name}</h3>
                  <span className="text-xs font-medium bg-brick text-cream rounded-full px-2.5 py-1 shrink-0">{d.price}</span>
                </div>
                <p className="text-xs text-charcoal/60 mt-1">{d.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Right — amber */}
      <div className="bg-amber-flame text-charcoal p-8 md:p-16 flex flex-col justify-center">
        <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
          YOU CAN <span className="text-stroke">FEEL THE</span> LOVE
          <br />FROM OUR GRILL
        </h2>
        <p className="mt-6 max-w-md text-charcoal/80 leading-relaxed">
          Every plate is fire-finished by chefs who treat heat like an ingredient. Bold spice, smart sourcing, and zero shortcuts — that's the Flämm way.
        </p>
        <div className="mt-8">
          <Button 
            className="rounded-full bg-charcoal text-cream hover:bg-charcoal/90 px-7 h-12 group"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Menu <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
