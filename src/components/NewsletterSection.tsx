import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import burger from "@/assets/dish-burger.jpg";
import poke from "@/assets/dish-poke.jpg";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative bg-cream py-28 md:py-40 px-6 overflow-hidden">
      <motion.img
        src={burger} alt="" loading="lazy"
        initial={{ opacity: 0, x: -60, rotate: -20 }}
        whileInView={{ opacity: 1, x: 0, rotate: -12 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 w-44 h-44 object-cover rounded-3xl shadow-2xl"
      />
      <motion.img
        src={poke} alt="" loading="lazy"
        initial={{ opacity: 0, x: 60, rotate: 20 }}
        whileInView={{ opacity: 1, x: 0, rotate: 10 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 w-44 h-44 object-cover rounded-3xl shadow-2xl"
      />
      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="font-display text-5xl md:text-8xl text-charcoal leading-[0.9]">
          SUBSCRIBE TO OUR<br /><span className="text-brick">NEWSLETTER</span>
        </h2>
        <p className="mt-6 text-charcoal/70 max-w-md mx-auto">
          Welcome to Flämm — where flavor meets healthy living. Get drops, dishes, and chef notes monthly.
        </p>
        <div className="mt-10 max-w-md mx-auto h-14">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-brick text-cream rounded-full h-14 grid place-items-center font-display tracking-wider text-xl"
              >
                ✦ Welcome to the table
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="flex gap-2 bg-cream border border-charcoal/15 rounded-full p-1.5 shadow-lg"
              >
                <Input
                  type="email" required placeholder="Enter your email"
                  className="flex-1 border-0 bg-transparent focus-visible:ring-0 h-11 px-4 text-base"
                />
                <Button className="rounded-full bg-brick text-cream hover:bg-brick/90 px-6 h-11 font-medium">
                  See all food
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
