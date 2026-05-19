import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Truck, ShieldCheck, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="mb-8 hover:bg-brick/10 text-brick group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Feast
        </Button>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          {/* Checkout Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <section className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-charcoal/5">
              <h2 className="font-display text-3xl mb-8 flex items-center gap-3">
                <Truck className="text-brick" /> Delivery Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="rounded-xl border-charcoal/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="rounded-xl border-charcoal/10" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Flame Street" className="rounded-xl border-charcoal/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Grillville" className="rounded-xl border-charcoal/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="12345" className="rounded-xl border-charcoal/10" />
                </div>
              </div>
            </section>

            <section className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-charcoal/5">
              <h2 className="font-display text-3xl mb-8 flex items-center gap-3">
                <CreditCard className="text-brick" /> Payment Method
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="card">Card Number</Label>
                  <Input id="card" placeholder="0000 0000 0000 0000" className="rounded-xl border-charcoal/10" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" className="rounded-xl border-charcoal/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="rounded-xl border-charcoal/10" />
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Order Summary */}
          <motion.aside 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:sticky lg:top-32 space-y-6"
          >
            <div className="bg-charcoal text-cream rounded-[2rem] p-8 md:p-10 shadow-2xl">
              <h2 className="font-display text-2xl mb-8 uppercase tracking-widest border-b border-cream/10 pb-4">
                Summary
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-cream/70">
                  <span>Subtotal</span>
                  <span>$54.00</span>
                </div>
                <div className="flex justify-between text-cream/70">
                  <span>Delivery</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between text-xl font-display pt-4 border-t border-cream/10">
                  <span>Total</span>
                  <span className="text-amber-flame">$59.00</span>
                </div>
              </div>
              
              <Button className="w-full rounded-full bg-brick text-cream hover:bg-brick/90 h-14 text-lg font-display uppercase tracking-widest group">
                Place Order <Flame className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-cream/40 uppercase tracking-tighter">
                <ShieldCheck className="w-4 h-4" /> Secure SSL Checkout
              </div>
            </div>

            <div className="bg-amber-flame/10 border border-amber-flame/20 rounded-2xl p-6">
              <p className="text-sm text-charcoal/70 leading-relaxed italic">
                "Every plate is fire-finished by chefs who treat heat like an ingredient. Your feast will be arriving hot and fresh."
              </p>
            </div>
          </motion.aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
