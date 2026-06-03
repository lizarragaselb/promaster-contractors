/**
 * Pro Master Contractors — Home Page
 * Design: Bold Contractor Brand / High Contrast Sales Machine
 * Colors: Trust Blue #1A4B84 | Eco Green #2E8B57 | Alert Orange #E67E22
 * Font: Montserrat (400–900)
 * Sections: Nav → Hero → Services → Emergency → About → Portfolio → Reviews → Contact → Footer
 * + Promotional Pop-up
 */

import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EmergencySection from "@/components/EmergencySection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import PromoPopup from "@/components/PromoPopup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [lang, setLang] = useState<"en" | "es">("en");
  const popupShown = useRef(false);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!popupShown.current) {
        setShowPopup(true);
        popupShown.current = true;
      }
    }, 5000);

    // Exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !popupShown.current) {
        setShowPopup(true);
        popupShown.current = true;
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Scroll-triggered fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Navbar lang={lang} toggleLang={toggleLang} />
      <HeroSection lang={lang} />
      <ServicesSection lang={lang} />
      <EmergencySection lang={lang} />
      <AboutSection lang={lang} />
      <PortfolioSection lang={lang} />
      <ReviewsSection lang={lang} />
      <ContactSection lang={lang} />
      <FooterSection lang={lang} />
      {showPopup && <PromoPopup lang={lang} onClose={() => setShowPopup(false)} />}
    </div>
  );
}
