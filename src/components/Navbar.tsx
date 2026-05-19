import { motion, useScroll, useTransform } from "framer-motion";
import { Flame, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const links = ["About", "Menu", "Cart", "Events", "Contact"];

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(255,248,231,0)", "rgba(255,248,231,0.92)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.08)"]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      style={{ backgroundColor: bg, borderBottomColor: border }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 group">
          <Flame className="w-7 h-7 text-brick group-hover:rotate-12 transition-transform" />
          <span className="font-display text-3xl tracking-wider text-charcoal">FLÄMM</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal">
          {links.map((l) => (
            <li key={l}>
              <a 
                href={`#${l.toLowerCase()}`} 
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.toLowerCase());
                }}
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brick after:transition-all hover:after:w-full"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button 
            onClick={() => scrollTo('menu')}
            className="hidden md:inline-flex rounded-full bg-brick text-cream hover:bg-brick/90 px-6"
          >
            Order Now
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2"><Menu className="w-6 h-6" /></button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream">
              <div className="flex flex-col gap-6 pt-12">
                {links.map((l) => (
                  <a 
                    key={l} 
                    href={`#${l.toLowerCase()}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(l.toLowerCase());
                    }}
                    className="font-display text-3xl text-charcoal"
                  >
                    {l}
                  </a>
                ))}
                <Button 
                  onClick={() => scrollTo('menu')}
                  className="mt-4 rounded-full bg-brick text-cream"
                >
                  Order Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
