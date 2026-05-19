import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { AboutSection } from "@/components/AboutSection";
import { MenuGrid } from "@/components/MenuGrid";
import { CartSection } from "@/components/CartSection";
import { HospitalitySection } from "@/components/HospitalitySection";
import { CookingWordsCloud } from "@/components/CookingWordsCloud";
import { FoodGallery } from "@/components/FoodGallery";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Flämm — Fire & Feast House" },
      { name: "description", content: "Bold grills, protein-rich bowls, and chef-curated low-carb plates cooked over real flame. Welcome to Flämm." },
      { property: "og:title", content: "Flämm — Fire & Feast House" },
      { property: "og:description", content: "Bold grills and chef-curated low-carb plates cooked over real flame." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <FeaturedDishes />
      <AboutSection />
      <MenuGrid />
      <CartSection />
      <HospitalitySection />
      <CookingWordsCloud />
      <FoodGallery />
      <Testimonials />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
