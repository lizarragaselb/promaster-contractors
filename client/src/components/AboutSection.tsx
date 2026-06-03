/**
 * AboutSection — Pro Master Contractors
 * Split layout: image left, trust points right
 */
import { Trophy, DollarSign, HardHat, Building2 } from "lucide-react";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/water_damage-VyDWjZRQNC5p8F45PLtfSw.webp";

const COPY = {
  en: {
    title: "Why Choose Pro Master?",
    subtitle: "Family-owned. DFW trusted. 16+ years delivering results.",
    points: [
      { icon: Trophy, title: "16+ Years of Experience", desc: "Serving homeowners & property managers across Dallas-Fort Worth." },
      { icon: DollarSign, title: "Competitive Pricing", desc: "Premium quality without the premium price tag." },
      { icon: HardHat, title: "Highly Trained Staff", desc: "Background-checked, certified technicians you can trust." },
      { icon: Building2, title: "Property Management Experts", desc: "Trusted by condo associations & multifamily properties." },
    ],
    cta: "Get a Free Estimate",
  },
  es: {
    title: "¿Por qué elegir Pro Master?",
    subtitle: "Empresa familiar. Confianza en DFW. 16+ años entregando resultados.",
    points: [
      { icon: Trophy, title: "16+ Años de Experiencia", desc: "Sirviendo a propietarios y administradores de propiedades en todo DFW." },
      { icon: DollarSign, title: "Precios Competitivos", desc: "Calidad premium sin el precio premium." },
      { icon: HardHat, title: "Personal Altamente Capacitado", desc: "Técnicos certificados con verificación de antecedentes." },
      { icon: Building2, title: "Expertos en Administración de Propiedades", desc: "De confianza para asociaciones de condominios y propiedades multifamiliares." },
    ],
    cta: "Obtener Estimado Gratis",
  },
};

interface AboutProps { lang: "en" | "es"; }

export default function AboutSection({ lang }: AboutProps) {
  const c = COPY[lang];

  const handleContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="about" style={{ backgroundColor: "white", padding: "96px 0" }}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left — Image */}
          <div className="flex-1 fade-in-up">
            <div className="relative">
              <img
                src={TEAM_IMG}
                alt="Pro Master Contractors professional team at work"
                className="w-full rounded-2xl object-cover"
                style={{ height: 480, boxShadow: "0 24px 64px rgba(26,75,132,0.18)" }}
              />
              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 flex flex-col items-center justify-center rounded-2xl p-5"
                style={{ backgroundColor: "#1A4B84", boxShadow: "0 12px 32px rgba(26,75,132,0.35)" }}
              >
                <span
                  className="font-black text-4xl"
                  style={{ color: "#E67E22", fontFamily: "'Montserrat', sans-serif", lineHeight: 1 }}
                >
                  16+
                </span>
                <span
                  className="font-semibold text-xs text-center mt-1"
                  style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  Years of<br />Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="flex-1 fade-in-up" style={{ animationDelay: "150ms" }}>
            <h2
              className="font-black mb-3"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "#1A4B84", fontFamily: "'Montserrat', sans-serif" }}
            >
              {c.title}
            </h2>
            <p
              className="text-lg mb-10"
              style={{ color: "#5D6D7E", fontFamily: "'Montserrat', sans-serif" }}
            >
              {c.subtitle}
            </p>

            <div className="space-y-6">
              {c.points.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-xl"
                      style={{ width: 52, height: 52, backgroundColor: "#F4F6F9", border: "2px solid #1A4B84" }}
                    >
                      <Icon size={22} color="#1A4B84" />
                    </div>
                    <div>
                      <h4
                        className="font-bold text-base mb-1"
                        style={{ color: "#1A4B84", fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {pt.title}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "#5D6D7E", fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleContact}
              className="mt-10 px-8 py-4 rounded font-bold text-lg text-white btn-orange"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {c.cta} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
