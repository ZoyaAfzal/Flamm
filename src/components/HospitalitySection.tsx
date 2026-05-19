import { motion } from "framer-motion";
import party from "@/assets/event-party.jpg";
import celebration from "@/assets/event-celebration.jpg";
import kitty from "@/assets/event-kitty.jpg";

const cards = [
  { title: "New Year Party", desc: "Wood-fire feasts, midnight platters.", image: party, bg: "bg-amber-flame", rotate: -3, pos: "lg:translate-y-0 lg:-translate-x-6" },
  { title: "Success Party", desc: "Boardroom bowls, celebratory cuts.", image: celebration, bg: "bg-peach", rotate: 2, pos: "lg:translate-y-12 lg:translate-x-4" },
  { title: "Kitty Brunch", desc: "Sun-lit gatherings, share plates.", image: kitty, bg: "bg-mint", rotate: -1, pos: "lg:-translate-y-4 lg:translate-x-2" },
];

export function HospitalitySection() {
  return (
    <section id="events" className="relative bg-cream py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 text-charcoal/10 dot-grid opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl text-center text-charcoal leading-[0.95] max-w-4xl mx-auto"
        >
          RESTAURANT HOSPITALITY<br /><span className="text-brick">AT ITS BEST</span>
        </motion.h2>
        <div className="mt-16 grid md:grid-cols-3 gap-8 group/grid">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 60, rotate: c.rotate }}
              whileInView={{ opacity: 1, y: 0, rotate: c.rotate }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              whileHover={{ scale: 1.04, rotate: 0, zIndex: 10 }}
              className={`${c.bg} ${c.pos} rounded-3xl p-6 shadow-xl cursor-pointer transition-opacity group-hover/grid:opacity-60 hover:!opacity-100`}
            >
              <img src={c.image} alt={c.title} className="w-full h-52 object-cover rounded-2xl" loading="lazy" />
              <h3 className="font-display text-3xl text-charcoal mt-5">{c.title}</h3>
              <p className="text-sm text-charcoal/70 mt-2">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
