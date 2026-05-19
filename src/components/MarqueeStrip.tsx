const strip1 = ["FIRE-KISSED GRILLS", "PROTEIN-RICH BOWLS", "LOW-CARB FAVORITES", "CHEF CURATED", "WOOD-FIRED"];
const strip2 = ["CHICKEN WINGS", "TUNA SALAD", "BEST PIZZA", "SEAWEED SALAD", "VEGETABLE MAKI", "POKE BOWLS"];

function Track({ items, char, className }: { items: string[]; char: string; className: string }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className={`overflow-hidden py-5 ${className}`}>
      <div className={`flex whitespace-nowrap ${className.includes("rev") ? "marquee-track-rev" : "marquee-track"}`}>
        {doubled.map((it, i) => (
          <span key={i} className="mx-8 font-display text-3xl md:text-5xl tracking-wider flex items-center gap-8">
            {it}
            <span className="text-2xl opacity-70">{char}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <div className="relative -rotate-1 origin-center">
      <Track items={strip1} char="✦" className="bg-brick text-cream" />
      <Track items={strip2} char="☆" className="bg-amber-flame text-charcoal rev" />
    </div>
  );
}
