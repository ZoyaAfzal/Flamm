import { motion } from "framer-motion";
import { galleryImages } from "@/lib/data";

const rotates = [-6, 3, -2, 5, -4, 2];
const positions = [
  "col-start-1 row-start-1",
  "col-start-2 row-start-1 mt-12",
  "col-start-3 row-start-1 -mt-4",
  "col-start-1 row-start-2 -mt-8",
  "col-start-2 row-start-2 mt-4",
  "col-start-3 row-start-2 mt-16",
];

export function FoodGallery() {
  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <span className="font-display text-[18vw] text-amber-flame/20 leading-none select-none">FOOD GALLERY</span>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-3 gap-6 group/g">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, rotate: rotates[i] }}
              whileInView={{ opacity: 1, scale: 1, rotate: rotates[i] }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ scale: 1.12, rotate: 0, zIndex: 20 }}
              className={`${positions[i]} relative cursor-pointer`}
            >
              <img
                src={img}
                alt="Gallery dish"
                className="w-full aspect-square object-cover rounded-2xl shadow-xl border-4 border-cream"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
