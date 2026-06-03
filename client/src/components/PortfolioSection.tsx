/**
 * PortfolioSection — Pro Master Contractors
 * Before/After slider cards. Cream background. Roboto + DM Sans. Navy + Emerald.
 */
import { useState, useRef, useCallback } from "react";
import type { Lang } from "@/pages/Home";

// Use CDN images already uploaded — "before" uses grayscale filter for effect
const CARPET_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/carpet_premium-HgHpcsxaZS2rEFX4iViYhF.webp";
const WATER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/water_premium-kgrC2mUda8ijx3pyug5jZs.webp";
const REMODEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/remodel_premium-SeFGZWU6ym42djYpnzqELJ.webp";

const PROJECTS = [
  { img: WATER_IMG, label_en: "Water Damage Restoration", label_es: "Restauración por Daño de Agua" },
  { img: CARPET_IMG, label_en: "Carpet Deep Cleaning", label_es: "Limpieza Profunda de Alfombra" },
  { img: REMODEL_IMG, label_en: "Interior Remodeling", label_es: "Remodelación Interior" },
];

const COPY = {
  en: {
    label: "Our Work",
    title: "Results That\nSpeak for Themselves.",
    sub: "Drag the slider to see the transformation. Every project is a promise kept.",
    dragHint: "Drag to compare",
    ctaText: "Ready to transform your space? Get a free estimate today.",
    cta: "Request Free Estimate",
  },
  es: {
    label: "Nuestro Trabajo",
    title: "Resultados que\nHablan por Sí Solos.",
    sub: "Arrastra el control deslizante para ver la transformación. Cada proyecto es una promesa cumplida.",
    dragHint: "Arrastra para comparar",
    ctaText: "¿Listo para transformar tu espacio? Obtén un estimado gratis hoy.",
    cta: "Solicitar Estimado Gratis",
  },
};

interface PortfolioProps { lang: Lang; }

function BeforeAfterSlider({ img, label }: { img: string; label: string }) {
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
      style={{ position: "relative", height: 280, userSelect: "none", cursor: "ew-resize", overflow: "hidden" }}
      onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX); }}
      onTouchEnd={() => { dragging.current = false; }}
    >
      {/* After — full color */}
      <img src={img} alt={`${label} after`} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} draggable={false} />
      {/* Before — grayscale clipped */}
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={img} alt={`${label} before`} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.7)" }} draggable={false} />
      </div>
      {/* Divider */}
      <div style={{
        position: "absolute", top: 0, bottom: 0,
        left: `${pos}%`, transform: "translateX(-50%)",
        width: 2, background: "white",
        boxShadow: "0 0 8px rgba(0,0,0,0.4)",
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 36, height: 36,
          background: "white", borderRadius: "50%",
          boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 3,
        }}>
          <div style={{ width: 2, height: 14, background: "#1A4B84", borderRadius: 2 }} />
          <div style={{ width: 2, height: 14, background: "#1A4B84", borderRadius: 2 }} />
        </div>
      </div>
      {/* Labels */}
      <div style={{
        position: "absolute", top: 10, left: 10,
        background: "rgba(11,31,58,0.75)", backdropFilter: "blur(4px)",
        color: "white", padding: "3px 8px", borderRadius: 3,
        fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
        pointerEvents: "none",
      }}>BEFORE</div>
      <div style={{
        position: "absolute", top: 10, right: 10,
        background: "rgba(27,107,58,0.85)", backdropFilter: "blur(4px)",
        color: "white", padding: "3px 8px", borderRadius: 3,
        fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
        pointerEvents: "none",
      }}>AFTER</div>
    </div>
  );
}

export default function PortfolioSection({ lang }: PortfolioProps) {
  const c = COPY[lang];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section id="portfolio" style={{ background: "#F8F5EF", padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label" style={{ display: "block", marginBottom: 14 }}>{c.label}</span>
          <h2 style={{
            fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: "clamp(30px, 4vw, 52px)",
            color: "#0B1F3A", lineHeight: 1.15, marginBottom: 20,
            whiteSpace: "pre-line",
          }}>{c.title}</h2>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <span className="gold-line" />
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 16.5, color: "#5A6B7A", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>{c.sub}</p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="service-card"
              style={{
                background: "white", borderRadius: 8, overflow: "hidden",
                boxShadow: "0 4px 24px rgba(11,31,58,0.07)",
                border: "1px solid rgba(11,31,58,0.06)",
              }}
            >
              <BeforeAfterSlider img={p.img} label={lang === "en" ? p.label_en : p.label_es} />
              <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#0B1F3A" }}>
                  {lang === "en" ? p.label_en : p.label_es}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 11, color: "#5A6B7A", letterSpacing: "0.04em" }}>
                  {c.dragHint} ↔
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: 16, color: "#5A6B7A", marginBottom: 20 }}>{c.ctaText}</p>
          <button onClick={() => scrollTo("#contact")} className="btn-primary" style={{ fontSize: 15 }}>
            {c.cta} →
          </button>
        </div>
      </div>
    </section>
  );
}
