/**
 * FooterSection — Pro Master Contractors
 * Dark footer with logo, links, social icons, legal
 */
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const COPY = {
  en: {
    tagline: "Professional Restoration & Remodeling — Dallas-Fort Worth",
    services: ["Water Damage & Restoration", "Carpet Cleaning", "Interior Remodeling", "Exterior Remodeling", "Property Make-Ready"],
    quickLinks: ["Home", "Services", "24/7 Emergency", "About Us", "Portfolio", "Reviews", "Contact Us"],
    legal: "© 2024 Pro Master Contractors. All rights reserved. Licensed & Insured.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  es: {
    tagline: "Restauración y Remodelación Profesional — Dallas-Fort Worth",
    services: ["Daño por Agua y Restauración", "Limpieza de Alfombras", "Remodelación Interior", "Remodelación Exterior", "Preparación de Propiedad"],
    quickLinks: ["Inicio", "Servicios", "Emergencias 24/7", "Nosotros", "Portafolio", "Reseñas", "Contáctanos"],
    legal: "© 2024 Pro Master Contractors. Todos los derechos reservados. Licenciados y Asegurados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
  },
};

const ANCHORS = ["#home", "#services", "#emergency", "#about", "#portfolio", "#reviews", "#contact"];

interface FooterProps { lang: "en" | "es"; }

export default function FooterSection({ lang }: FooterProps) {
  const c = COPY[lang];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "#0D2137" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center rounded-lg"
                style={{ width: 44, height: 44, background: "linear-gradient(135deg, #E67E22 0%, #D35400 100%)" }}
              >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M13 3L2 12H5V22H11V16H15V22H21V12H24L13 3Z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="font-black text-white" style={{ fontSize: 17, fontFamily: "'Montserrat', sans-serif" }}>PRO MASTER</div>
                <div className="font-medium" style={{ fontSize: 9, color: "#E67E22", letterSpacing: "0.18em", fontFamily: "'Montserrat', sans-serif" }}>CONTRACTORS</div>
              </div>
            </div>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.7 }}>
              {c.tagline}
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all"
                style={{ width: 38, height: 38, backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#1877F2"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
              >
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full transition-all"
                style={{ width: 38, height: 38, backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#E1306C"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-5" style={{ color: "#E67E22", fontFamily: "'Montserrat', sans-serif" }}>
              {lang === "en" ? "Services" : "Servicios"}
            </h4>
            <ul className="space-y-2">
              {c.services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-sm transition-colors text-left"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Montserrat', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-5" style={{ color: "#E67E22", fontFamily: "'Montserrat', sans-serif" }}>
              {lang === "en" ? "Quick Links" : "Accesos Rápidos"}
            </h4>
            <ul className="space-y-2">
              {c.quickLinks.map((link, i) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(ANCHORS[i])}
                    className="text-sm transition-colors text-left"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Montserrat', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-wider mb-5" style={{ color: "#E67E22", fontFamily: "'Montserrat', sans-serif" }}>
              {lang === "en" ? "Contact" : "Contacto"}
            </h4>
            <div className="space-y-4">
              <a href="tel:+12145551234" className="flex items-center gap-3 group">
                <Phone size={16} color="#E67E22" />
                <span className="text-sm font-semibold transition-colors" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Montserrat', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                >(214) 555-1234</span>
              </a>
              <div className="flex items-center gap-3">
                <Mail size={16} color="#E67E22" />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Montserrat', sans-serif" }}>info@promastercontractors.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} color="#E67E22" style={{ marginTop: 2 }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Montserrat', sans-serif" }}>Dallas-Fort Worth, TX</span>
              </div>
              <div
                className="mt-4 px-4 py-3 rounded-lg text-center"
                style={{ backgroundColor: "rgba(230,126,34,0.15)", border: "1px solid rgba(230,126,34,0.3)" }}
              >
                <div className="font-black text-sm" style={{ color: "#E67E22", fontFamily: "'Montserrat', sans-serif" }}>
                  🚨 {lang === "en" ? "24/7 Emergency" : "Emergencias 24/7"}
                </div>
                <a href="tel:+12145551234" className="font-black text-lg" style={{ color: "white", fontFamily: "'Montserrat', sans-serif" }}>
                  (214) 555-1234
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Montserrat', sans-serif" }}>
            {c.legal}
          </p>
          <div className="flex gap-4">
            <button className="text-xs transition-colors" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Montserrat', sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >{c.privacy}</button>
            <button className="text-xs transition-colors" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Montserrat', sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >{c.terms}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
