import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export function CartSection() {
  const navigate = useNavigate();
  // For now, this is a placeholder UI. 
  // In a real app, this would be connected to a global state.
  const [items] = useState([
    { name: "Fire Burger", price: "$26.00", qty: 1 },
    { name: "Wood-fired Pizza", price: "$28.00", qty: 1 },
  ]);

  return (
    <section id="cart" className="bg-cream py-24 px-6 border-t border-charcoal/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-full bg-brick text-cream grid place-items-center">
            <ShoppingCart className="w-6 h-6" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-charcoal">YOUR CART</h2>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-charcoal/5">
          <div className="p-8 md:p-12">
            {items.length > 0 ? (
              <div className="space-y-8">
                {items.map((item, i) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between gap-4 pb-8 border-b border-charcoal/10 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-xl bg-brick/5 overflow-hidden flex-shrink-0">
                         <div className="w-full h-full bg-brick/10 flex items-center justify-center font-display text-brick text-2xl uppercase">
                           {item.name.charAt(0)}
                         </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-charcoal">{item.name}</h3>
                        <p className="text-charcoal/60 text-sm mt-1">Quantity: {item.qty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <span className="font-display text-xl text-charcoal">{item.price}</span>
                      <button className="text-brick hover:text-brick/70 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-8 border-t-2 border-dashed border-charcoal/10">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-charcoal/60 font-medium">Subtotal</span>
                    <span className="font-display text-3xl text-charcoal">$54.00</span>
                  </div>
                  <Button 
                    size="lg" 
                    onClick={() => navigate({ to: "/checkout" })}
                    className="w-full rounded-full bg-brick text-cream hover:bg-brick/90 h-16 text-lg group"
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-charcoal/60 text-lg">Your cart is empty.</p>
                <Button 
                  variant="link" 
                  className="mt-4 text-brick font-medium"
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Go back to Menu
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
