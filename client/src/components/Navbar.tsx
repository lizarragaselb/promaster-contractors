/**
 * Navbar — Pro Master Contractors
 * Sticky, darkens on scroll, mobile hamburger menu, EN/ES toggle
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_ITEMS = {
  en: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "24/7 Emergency", href: "#emergency", highlight: true },
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact Us", href: "#contact" },
  ],
  es: [
    { label: "Inicio", href: "#home" },
    { label: "Servicios", href: "#services" },
    { label: "Emergencias 24/7", href: "#emergency", highlight: true },
    { label: "Nosotros", href: "#about" },
    { label: "Portafolio", href: "#portfolio" },
    { label: "Reseñas", href: "#reviews" },
    { label: "Contáctanos", href: "#contact" },
  ],
};

interface NavbarProps {
  lang: "en" | "es";
  toggleLang: () => void;
}

export default function Navbar({ lang, toggleLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const items = NAV_ITEMS[lang];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(13, 33, 55, 0.98)" : "#1A4B84",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.3)" : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-3 group"
            >
              <div
                className="flex items-center justify-center rounded-lg"
                style={{
                  width: 44,
                  height: 44,
                  background: "linear-gradient(135deg, #E67E22 0%, #D35400 100%)",
                }}
              >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M13 3L2 12H5V22H11V16H15V22H21V12H24L13 3Z" fill="white" />
                  <path d="M9 22V17H17V22" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <div>
                <div
                  className="font-black leading-none tracking-tight"
                  style={{ fontSize: 17, color: "white", fontFamily: "'Montserrat', sans-serif" }}
                >
                  PRO MASTER
                </div>
                <div
                  className="font-medium tracking-widest uppercase"
                  style={{ fontSize: 9, color: "#E67E22", letterSpacing: "0.18em" }}
                >
                  CONTRACTORS
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className="px-3 py-2 rounded text-sm font-semibold transition-all duration-150"
                  style={{
                    color: item.highlight ? "#E67E22" : "rgba(255,255,255,0.88)",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = item.highlight ? "#F39C12" : "white";
                    (e.target as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = item.highlight ? "#E67E22" : "rgba(255,255,255,0.88)";
                    (e.target as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {item.highlight && "🚨 "}{item.label}
                </a>
              ))}
            </div>

            {/* Right side: lang toggle + call button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-150"
                style={{
                  borderColor: "#2E8B57",
                  color: "white",
                  backgroundColor: lang === "es" ? "#2E8B57" : "transparent",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {lang === "en" ? "EN | ES" : "ES | EN"}
              </button>
              <a
                href="tel:+12145551234"
                className="flex items-center gap-2 px-4 py-2 rounded font-bold text-sm transition-all duration-150 btn-orange"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <Phone size={15} />
                {lang === "en" ? "Call Now" : "Llamar"}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: "white" }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t"
            style={{ backgroundColor: "#0D2137", borderColor: "rgba(255,255,255,0.1)" }}
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className="px-4 py-3 rounded font-semibold text-sm transition-colors"
                  style={{
                    color: item.highlight ? "#E67E22" : "rgba(255,255,255,0.9)",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {item.highlight && "🚨 "}{item.label}
                </a>
              ))}
              <div className="flex gap-3 mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <button
                  onClick={toggleLang}
                  className="flex-1 py-2 rounded font-bold text-sm border"
                  style={{ borderColor: "#2E8B57", color: "white", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {lang === "en" ? "EN | ES" : "ES | EN"}
                </button>
                <a
                  href="tel:+12145551234"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded font-bold text-sm btn-orange"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <Phone size={14} />
                  {lang === "en" ? "Call Now" : "Llamar"}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
