import { motion } from "framer-motion";
import { menuItems } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function MenuGrid() {
  return (
    <section id="menu" className="bg-brick text-cream py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] max-w-3xl">
            PROTEIN FOODS<br />TO SUPPORT YOU
          </h2>
          <Button variant="outline" className="rounded-full border-cream text-cream hover:bg-cream hover:text-brick px-7 h-12 bg-transparent">
            Get Started
          </Button>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems.map((m) => (
            <motion.article
              key={m.name}
              variants={{
                hidden: { opacity: 0, scale: 0.92, y: 30 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6 }}
              className="border border-dashed border-cream/40 rounded-2xl p-5 hover:bg-cream/5 hover:shadow-[0_0_30px_-5px_rgba(240,192,64,0.5)] transition-all group"
            >
              <div className="overflow-hidden rounded-xl h-56">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="flex items-center justify-between mt-5">
                <h3 className="font-serif text-xl">{m.name}</h3>
                <span className="bg-amber-flame text-charcoal rounded-full px-3 py-1 text-sm font-medium group-hover:bg-cream group-hover:text-brick transition-colors">
                  {m.price}
                </span>
              </div>
              <Button 
                onClick={() => document.getElementById('cart')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full mt-4 rounded-xl bg-cream text-brick hover:bg-cream/90 font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
              >
                Add to Cart
              </Button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
