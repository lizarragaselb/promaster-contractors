/**
 * PortfolioSection — Pro Master Contractors
 * Before/After slider pairs for Carpet, Water Damage, Remodeling
 */
import { useState, useRef, useCallback } from "react";

const CARPET_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/carpet_cleaning-gJUZZXkuxC626WMWf4iEN7.webp";
const WATER_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/water_damage-VyDWjZRQNC5p8F45PLtfSw.webp";
const REMODEL_AFTER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/remodeling-PqDZWz3PbTyqkWhV2rQECi.webp";

// Use same images with CSS filter for "before" effect
const PAIRS = [
  { before: CARPET_AFTER, after: CARPET_AFTER, label_en: "Carpet Restoration", label_es: "Restauración de Alfombra" },
  { before: WATER_AFTER, after: WATER_AFTER, label_en: "Water Damage Repair", label_es: "Reparación de Daño por Agua" },
  { before: REMODEL_AFTER, after: REMODEL_AFTER, label_en: "Interior Remodeling", label_es: "Remodelación Interior" },
];

interface PortfolioProps { lang: "en" | "es"; }

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="before-after-container w-full"
      style={{ height: 280, userSelect: "none" }}
      onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX); }}
      onTouchEnd={() => { dragging.current = false; }}
    >
      {/* After image (full) */}
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt="Before"
          className="absolute inset-0 object-cover"
          style={{ width: containerRef.current?.offsetWidth || 400, height: "100%", filter: "grayscale(0.8) brightness(0.75)" }}
          draggable={false}
        />
        {/* Before label */}
        <div
          className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-black text-white"
          style={{ backgroundColor: "#C0392B", fontFamily: "'Montserrat', sans-serif" }}
        >
          BEFORE
        </div>
      </div>
      {/* After label */}
      <div
        className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-black text-white"
        style={{ backgroundColor: "#2E8B57", fontFamily: "'Montserrat', sans-serif" }}
      >
        AFTER
      </div>
      {/* Slider handle */}
      <div
        className="before-after-handle"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      />
    </div>
  );
}

export default function PortfolioSection({ lang }: PortfolioProps) {
  return (
    <section id="portfolio" style={{ backgroundColor: "#F4F6F9", padding: "96px 0" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2
            className="font-black"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#1A4B84", fontFamily: "'Montserrat', sans-serif", marginBottom: 16 }}
          >
            {lang === "en" ? "Our Work Speaks for Itself" : "Nuestro Trabajo Habla por Sí Solo"}
          </h2>
          <p
            className="text-lg"
            style={{ color: "#5D6D7E", fontFamily: "'Montserrat', sans-serif" }}
          >
            {lang === "en"
              ? "Real results from real jobs — drag the slider to see Before & After"
              : "Resultados reales — arrastra el slider para ver Antes y Después"}
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: "#E67E22" }} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PAIRS.map((pair, i) => (
            <div
              key={i}
              className="fade-in-up bg-white rounded-xl overflow-hidden"
              style={{ boxShadow: "0 4px 24px rgba(26,75,132,0.08)", animationDelay: `${i * 120}ms` }}
            >
              <BeforeAfterSlider before={pair.before} after={pair.after} />
              <div className="p-4 text-center">
                <span
                  className="font-bold text-sm"
                  style={{ color: "#1A4B84", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {lang === "en" ? pair.label_en : pair.label_es}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in-up">
          <p
            className="text-base mb-6"
            style={{ color: "#5D6D7E", fontFamily: "'Montserrat', sans-serif" }}
          >
            {lang === "en"
              ? "Ready to transform your space? Get a free estimate today."
              : "¿Listo para transformar tu espacio? Obtén un estimado gratis hoy."}
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#contact");
              if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 72; window.scrollTo({ top, behavior: "smooth" }); }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-lg text-white btn-orange"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {lang === "en" ? "Request Free Estimate →" : "Solicitar Estimado Gratis →"}
          </a>
        </div>
      </div>
    </section>
  );
}
