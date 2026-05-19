import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

function Card({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="bg-cream text-charcoal rounded-2xl p-6 shadow-lg mb-6">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-flame text-amber-flame" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-charcoal/80">"{t.text}"</p>
      <p className="mt-4 font-display text-lg tracking-wide">— {t.name}</p>
    </div>
  );
}

function Column({ items, duration }: { items: typeof testimonials; duration: number }) {
  return (
    <div className="relative h-[560px] overflow-hidden">
      <div className="vscroll" style={{ animationDuration: `${duration}s` }}>
        {[...items, ...items].map((t, i) => <Card key={i} t={t} />)}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-brick text-cream py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-amber-flame">Voices from the table</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95]">
            WE HEAR FROM<br />OUR CLIENTS
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Column items={testimonials} duration={28} />
          <Column items={[...testimonials].reverse()} duration={36} />
          <Column items={testimonials} duration={32} />
        </div>
      </div>
    </section>
  );
}
