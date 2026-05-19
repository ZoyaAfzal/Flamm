import { Facebook, Instagram, Twitter, Linkedin, Flame } from "lucide-react";

const pages = ["Home", "About", "Menu", "Blog"];
const utility = ["Style Guide", "Privacy Policy", "Changelog"];
const socials = [
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-charcoal text-cream pt-24 pb-8 px-6 overflow-hidden">
      <div className="absolute inset-0 text-amber-flame/[0.04] grid place-items-center pointer-events-none">
        <span className="font-display text-[22vw] leading-none select-none">FLÄMM&nbsp;FOOD</span>
      </div>
      <div className="absolute top-10 left-10 w-40 h-40 text-cream/[0.06] dot-grid" />
      <div className="absolute bottom-20 right-10 w-40 h-40 text-cream/[0.06] dot-grid" />

      <div className="max-w-7xl mx-auto relative grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Flame className="w-7 h-7 text-amber-flame" />
            <span className="font-display text-3xl tracking-wider">FLÄMM</span>
          </div>
          <h3 className="font-display text-5xl leading-[0.9] text-cream">
            TELL US<br />HOW YOU<br /><span className="text-amber-flame">FEEL</span>
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-amber-flame mb-4">Pages</p>
            <ul className="space-y-2.5 text-sm text-cream/80">
              {pages.map((p) => <li key={p}><a href="#" className="hover:text-amber-flame">{p}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-amber-flame mb-4">Utility</p>
            <ul className="space-y-2.5 text-sm text-cream/80">
              {utility.map((p) => <li key={p}><a href="#" className="hover:text-amber-flame">{p}</a></li>)}
            </ul>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-amber-flame mb-4">Social</p>
          <div className="flex gap-3">
            {socials.map(({ Icon, href }, i) => (
              <a key={i} href={href} className="w-11 h-11 rounded-full border border-cream/20 grid place-items-center hover:bg-amber-flame hover:text-charcoal hover:border-amber-flame transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <p className="text-sm text-cream/60 mt-6 leading-relaxed">
            123 Ember Lane, Brooklyn, NY<br />open daily · 11:00 — 23:00
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative mt-16 pt-6 border-t border-cream/10 flex flex-wrap justify-end gap-2 text-xs text-cream/50">
        <a 
          href="https://axistechgroup.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-amber-flame transition-colors"
        >
          Powered by AxisTechGroup
        </a>
      </div>
    </footer>
  );
}
