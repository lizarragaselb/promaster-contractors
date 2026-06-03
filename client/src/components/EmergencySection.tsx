/**
 * EmergencySection — Pro Master Contractors
 * Dark urgent banner with big orange CTA
 */
import { Phone, Zap, Shield, FileText } from "lucide-react";

const COPY = {
  en: {
    headline: "Water Damage Emergency?",
    sub: "We respond FAST — 24 hours a day, 7 days a week.",
    body: "Every minute counts. The faster we respond, the less damage to your property.",
    points: [
      { icon: Zap, text: "Average response time: Under 60 minutes" },
      { icon: Shield, text: "Fully licensed & insured technicians" },
      { icon: FileText, text: "We work directly with your insurance company" },
    ],
    cta: "Call Emergency Line Now",
    fine: "Available 24/7 — No extra charge for nights & weekends",
  },
  es: {
    headline: "¿Emergencia por Daño de Agua?",
    sub: "Respondemos RÁPIDO — 24 horas al día, 7 días a la semana.",
    body: "Cada minuto cuenta. Cuanto más rápido respondemos, menos daño a tu propiedad.",
    points: [
      { icon: Zap, text: "Tiempo de respuesta promedio: Menos de 60 minutos" },
      { icon: Shield, text: "Técnicos completamente licenciados y asegurados" },
      { icon: FileText, text: "Trabajamos directamente con tu compañía de seguros" },
    ],
    cta: "Llamar a la Línea de Emergencia",
    fine: "Disponible 24/7 — Sin cargo extra por noches y fines de semana",
  },
};

interface EmergencyProps { lang: "en" | "es"; }

export default function EmergencySection({ lang }: EmergencyProps) {
  const c = COPY[lang];
  return (
    <section id="emergency" style={{ backgroundColor: "#0D2137", padding: "80px 0" }}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <span style={{ fontSize: 36 }}>🚨</span>
              <h2
                className="font-black"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "white", fontFamily: "'Montserrat', sans-serif" }}
              >
                {c.headline}
              </h2>
            </div>
            <p
              className="text-xl font-bold mb-3"
              style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Montserrat', sans-serif" }}
            >
              {c.sub}
            </p>
            <p
              className="mb-8"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Montserrat', sans-serif" }}
            >
              {c.body}
            </p>
            <div className="space-y-4">
              {c.points.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: 36, height: 36, backgroundColor: "rgba(46,139,87,0.2)", border: "1px solid #2E8B57" }}
                    >
                      <Icon size={16} color="#2E8B57" />
                    </div>
                    <span
                      className="font-semibold"
                      style={{ color: "#2E8B57", fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {pt.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — CTA */}
          <div className="flex flex-col items-center gap-4 fade-in-up" style={{ animationDelay: "150ms" }}>
            <a
              href="tel:+12145551234"
              className="flex items-center gap-3 px-10 py-5 rounded-xl font-black text-xl text-white btn-orange"
              style={{ fontFamily: "'Montserrat', sans-serif", minWidth: 320, justifyContent: "center" }}
            >
              <Phone size={24} />
              {c.cta}
            </a>
            <p
              className="text-sm text-center"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Montserrat', sans-serif" }}
            >
              {c.fine}
            </p>
            {/* Pulsing ring animation */}
            <div className="relative flex items-center justify-center mt-2">
              <div
                className="absolute rounded-full animate-ping"
                style={{ width: 64, height: 64, backgroundColor: "rgba(230,126,34,0.2)" }}
              />
              <div
                className="relative flex items-center justify-center rounded-full"
                style={{ width: 56, height: 56, backgroundColor: "#E67E22" }}
              >
                <Phone size={24} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
