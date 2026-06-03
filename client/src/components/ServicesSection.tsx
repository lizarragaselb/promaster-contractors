/**
 * ServicesSection — Pro Master Contractors
 * 3 service cards: Water Damage, Carpet Care, Remodeling
 */
import { Droplets, Home, Hammer, ArrowRight } from "lucide-react";

const COPY = {
  en: {
    title: "Our Services",
    subtitle: "Everything your property needs — under one roof.",
    cards: [
      {
        icon: Droplets,
        title: "Water Damage & Restoration",
        items: ["24/7 Water Extraction", "Rapid Structural Drying", "Dehumidifying & Mold Prevention", "Insurance Claim Assistance"],
        cta: "Learn More",
      },
      {
        icon: Home,
        title: "Professional Carpet Care",
        items: ["Deep Soil Extraction", "Pet Stain & Odor Removal", "Carpet Repair & Restretching", "Commercial Carpet Cleaning"],
        cta: "Learn More",
      },
      {
        icon: Hammer,
        title: "Interior & Exterior Remodeling",
        items: ["Kitchen & Bathroom Remodel", "Flooring Installation", "Painting — Interior & Exterior", "Property Make-Ready Services"],
        cta: "Learn More",
      },
    ],
  },
  es: {
    title: "Nuestros Servicios",
    subtitle: "Todo lo que tu propiedad necesita — bajo un mismo techo.",
    cards: [
      {
        icon: Droplets,
        title: "Daño por Agua y Restauración",
        items: ["Extracción de Agua 24/7", "Secado Estructural Rápido", "Deshumidificación y Prevención de Moho", "Asistencia con Reclamaciones de Seguro"],
        cta: "Ver Más",
      },
      {
        icon: Home,
        title: "Cuidado Profesional de Alfombras",
        items: ["Extracción Profunda de Suciedad", "Eliminación de Manchas y Olores de Mascotas", "Reparación y Reestiramiento de Alfombras", "Limpieza Comercial de Alfombras"],
        cta: "Ver Más",
      },
      {
        icon: Hammer,
        title: "Remodelación Interior y Exterior",
        items: ["Remodelación de Cocina y Baño", "Instalación de Pisos", "Pintura — Interior y Exterior", "Servicios de Preparación de Propiedad"],
        cta: "Ver Más",
      },
    ],
  },
};

interface ServicesProps { lang: "en" | "es"; }

export default function ServicesSection({ lang }: ServicesProps) {
  const c = COPY[lang];

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="services" style={{ backgroundColor: "#F4F6F9", padding: "96px 0" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2
            className="font-black"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#1A4B84", fontFamily: "'Montserrat', sans-serif", marginBottom: 16 }}
          >
            {c.title}
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "#5D6D7E", fontFamily: "'Montserrat', sans-serif" }}
          >
            {c.subtitle}
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: "#E67E22" }} />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {c.cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="service-card fade-in-up bg-white rounded-xl overflow-hidden"
                style={{
                  boxShadow: "0 4px 24px rgba(26,75,132,0.08)",
                  animationDelay: `${i * 120}ms`,
                  border: "1px solid rgba(26,75,132,0.06)",
                }}
              >
                {/* Card header */}
                <div
                  className="p-8 pb-6"
                  style={{ borderBottom: "3px solid #E67E22" }}
                >
                  <div
                    className="flex items-center justify-center rounded-xl mb-5"
                    style={{ width: 60, height: 60, backgroundColor: "#1A4B84" }}
                  >
                    <Icon size={28} color="white" />
                  </div>
                  <h3
                    className="font-black text-xl leading-tight"
                    style={{ color: "#1A4B84", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Items */}
                <div className="p-8 pt-6">
                  <ul className="space-y-3 mb-8">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div
                          className="mt-1 flex-shrink-0 rounded-full"
                          style={{ width: 8, height: 8, backgroundColor: "#2E8B57", marginTop: 7 }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: "#2C3E50", fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleContact}
                    className="flex items-center gap-2 font-bold text-sm transition-all duration-150"
                    style={{ color: "#E67E22", fontFamily: "'Montserrat', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
                  >
                    {card.cta} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
