/**
 * HeroSection — Pro Master Contractors
 * Full-bleed dark hero with background image, headline, CTAs, trust badges, stats panel
 */
import { useEffect, useRef, useState } from "react";
import { Phone, AlertTriangle, CheckCircle } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/hero_bg-NCR2DDaJq3Ljj2PmC4mUhC.webp";

const COPY = {
  en: {
    badge: "Dallas-Fort Worth's #1 Choice",
    line1: "Restoration &",
    line2: "Remodeling Experts.",
    sub: "Professional Carpet Cleaning, Water Extraction & Complete Remodeling Services — Available 24/7.",
    cta1: "Call Now — Free Estimate",
    cta2: "24/7 Emergency Line",
    trust: ["16+ Years Experience", "Licensed & Insured", "Free Estimates", "5-Star Rated"],
    stats: [
      { val: "16+", label: "Years in Business" },
      { val: "500+", label: "Projects Completed" },
      { val: "24/7", label: "Emergency Response" },
      { val: "5★", label: "Google Rating" },
    ],
  },
  es: {
    badge: "La Opción #1 en Dallas-Fort Worth",
    line1: "Restauración y",
    line2: "Expertos en Remodelación.",
    sub: "Limpieza profesional de alfombras, extracción de agua y servicios completos de remodelación — Disponibles 24/7.",
    cta1: "Llama Ahora — Estimado Gratis",
    cta2: "Línea de Emergencia 24/7",
    trust: ["16+ Años de Experiencia", "Licenciados y Asegurados", "Estimados Gratis", "Calificación 5 Estrellas"],
    stats: [
      { val: "16+", label: "Años en el Negocio" },
      { val: "500+", label: "Proyectos Completados" },
      { val: "24/7", label: "Respuesta de Emergencia" },
      { val: "5★", label: "Calificación en Google" },
    ],
  },
};

interface HeroProps { lang: "en" | "es"; }

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function HeroSection({ lang }: HeroProps) {
  const c = COPY[lang];
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: 72 }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay — stronger on left for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(13,33,55,0.92) 0%, rgba(13,33,55,0.82) 50%, rgba(13,33,55,0.55) 100%)",
        }}
      />

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded mb-6 fade-in-up"
              style={{ backgroundColor: "#E67E22", animationDelay: "0ms" }}
            >
              <span style={{ fontSize: 14 }}>⭐</span>
              <span className="font-bold text-white text-sm tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {c.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="fade-in-up" style={{ animationDelay: "100ms" }}>
              <span
                className="block font-black leading-none text-white"
                style={{ fontSize: "clamp(42px, 6vw, 80px)", fontFamily: "'Montserrat', sans-serif" }}
              >
                {c.line1}
              </span>
              <span
                className="block font-black leading-none"
                style={{ fontSize: "clamp(42px, 6vw, 80px)", color: "#E67E22", fontFamily: "'Montserrat', sans-serif" }}
              >
                {c.line2}
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="mt-6 text-lg leading-relaxed fade-in-up"
              style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Montserrat', sans-serif", animationDelay: "200ms" }}
            >
              {c.sub}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 fade-in-up" style={{ animationDelay: "300ms" }}>
              <a
                href="tel:+12145551234"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded font-bold text-lg text-white btn-orange"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <Phone size={20} />
                {c.cta1}
              </a>
              <button
                onClick={() => handleScroll("#emergency")}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded font-bold text-lg text-white btn-blue"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <AlertTriangle size={20} />
                {c.cta2}
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 fade-in-up" style={{ animationDelay: "400ms" }}>
              {c.trust.map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle size={16} style={{ color: "#2E8B57" }} />
                  <span className="font-semibold text-sm" style={{ color: "#2E8B57", fontFamily: "'Montserrat', sans-serif" }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats Panel */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-4 fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {c.stats.map((stat, i) => (
              <StatCard key={i} val={stat.val} label={stat.label} visible={statsVisible} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.3)" }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#E67E22" }} />
      </div>
    </section>
  );
}

function StatCard({ val, label, visible, delay }: { val: string; label: string; visible: boolean; delay: number }) {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 rounded-xl"
      style={{
        backgroundColor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(8px)",
        minWidth: 140,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.9)",
        transition: `opacity 500ms ease-out ${delay}ms, transform 500ms cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      <span
        className="font-black"
        style={{ fontSize: 44, color: "#E67E22", lineHeight: 1, fontFamily: "'Montserrat', sans-serif" }}
      >
        {val}
      </span>
      <span
        className="text-center font-medium mt-2 text-sm"
        style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Montserrat', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}
