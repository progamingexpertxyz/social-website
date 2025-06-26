import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CompaniesMarquee from "@/components/CompaniesMarquee";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompaniesMarquee />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
