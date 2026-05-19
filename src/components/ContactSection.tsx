import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-24 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brick/5 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-brick font-medium mb-4 block">
              Get in touch
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-charcoal leading-[0.9] mb-8">
              WANT TO CHAT <br /> <span className="text-brick">ABOUT FIRE?</span>
            </h2>
            <p className="text-charcoal/70 text-lg mb-12 max-w-md leading-relaxed">
              Whether you're booking a large table, planning an event, or just want to talk smoke and spice, we're all ears.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brick group-hover:bg-brick group-hover:text-cream transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-charcoal/40 font-bold">Call us</p>
                  <p className="text-lg font-serif">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brick group-hover:bg-brick group-hover:text-cream transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-charcoal/40 font-bold">Email us</p>
                  <p className="text-lg font-serif">hello@flammgrill.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brick group-hover:bg-brick group-hover:text-cream transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-charcoal/40 font-bold">Visit us</p>
                  <p className="text-lg font-serif">123 Smokey Way, Grill City</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-charcoal/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" placeholder="Your name" className="rounded-xl border-charcoal/10 focus:border-brick/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" className="rounded-xl border-charcoal/10 focus:border-brick/30" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" placeholder="What's this about?" className="rounded-xl border-charcoal/10 focus:border-brick/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea id="contact-message" placeholder="Tell us more..." className="rounded-xl border-charcoal/10 focus:border-brick/30 min-h-[150px]" />
              </div>
              <Button className="w-full rounded-full bg-charcoal text-cream hover:bg-brick h-14 text-lg font-display uppercase tracking-widest group transition-all duration-500">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
