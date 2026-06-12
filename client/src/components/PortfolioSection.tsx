/**
 * PortfolioSection — Pro Master Contractors
 * Masonry photo gallery with category filter tabs + lightbox.
 * TO REPLACE WITH REAL CLIENT PHOTOS: update the `src` URLs in the PHOTOS array below.
 * Cream background, navy + emerald palette. Roboto headings, DM Sans body.
 */
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import type { Lang } from "@/pages/Home";

// ─── PHOTOS — Replace src with real client photos when available ──────────────
const PHOTOS = [
  {
    id: 1, cat: "water",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/portfolio_water1-EFNkEpA2PR4djhTmn7f78o.webp",
    caption: { en: "Water Extraction — Living Room", es: "Extracción de Agua — Sala" },
  },
  {
    id: 2, cat: "remodel",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/portfolio_remodel1-7pWJGuEYDJYCD54h56isgk.webp",
    caption: { en: "Kitchen Remodel — Plano, TX", es: "Remodelación de Cocina — Plano, TX" },
  },
  {
    id: 3, cat: "remodel",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/portfolio_remodel2-6VbePW9ULsjdhZhnsPNU8J.webp",
    caption: { en: "Master Bathroom Remodel — Frisco, TX", es: "Remodelación de Baño — Frisco, TX" },
  },
  {
    id: 4, cat: "carpet",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/portfolio_carpet1-NS28FyZTFqaWkt8fzumCGp.webp",
    caption: { en: "Deep Carpet Cleaning — Living Room", es: "Limpieza Profunda de Alfombra — Sala" },
  },
  {
    id: 5, cat: "carpet",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/portfolio_carpet2-4DukYJRrkxazsmXMFJ5eqd.webp",
    caption: { en: "Carpet Cleaning — Master Bedroom", es: "Limpieza de Alfombra — Recámara Principal" },
  },
  {
    id: 6, cat: "airduct",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/portfolio_airduct1-FY8QwsJEEJY9U7J9w4BJw5.webp",
    caption: { en: "Air Duct Cleaning — Dallas, TX", es: "Limpieza de Ductos — Dallas, TX" },
  },
  {
    id: 7, cat: "water",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/portfolio_water2-b85UqHyB54xPx3zyNTy5qN.webp",
    caption: { en: "Water Damage Repair — Bathroom", es: "Reparación por Agua — Baño" },
  },
  {
    id: 8, cat: "remodel",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/portfolio_remodel3-C9Q4bm6HY6evNo4vs5gEsU.webp",
    caption: { en: "LVP Flooring Installation — Open Concept", es: "Instalación de Piso LVP — Concepto Abierto" },
  },
  {
    id: 9, cat: "airduct",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460319800/joEZAhNjB3mNEDWkdEhYv4/portfolio_airduct2-5Zt8v29fHdqesiZBbgBG9a.webp",
    caption: { en: "Clean HVAC Ductwork — After Service", es: "Ductos Limpios — Después del Servicio" },
  },
];

const FILTERS = {
  en: [
    { key: "all",     label: "All Projects" },
    { key: "water",   label: "Water Damage" },
    { key: "carpet",  label: "Carpet Care" },
    { key: "remodel", label: "Remodeling" },
    { key: "airduct", label: "Air Ducts" },
  ],
  es: [
    { key: "all",     label: "Todos" },
    { key: "water",   label: "Daño por Agua" },
    { key: "carpet",  label: "Alfombras" },
    { key: "remodel", label: "Remodelación" },
    { key: "airduct", label: "Ductos" },
  ],
};

const COPY = {
  en: {
    label: "Our Work",
    title: "Real Projects.\nReal Results.",
    sub: "Every photo is a job completed by our team. When you hire Pro Master, this is the quality you can expect.",
    cta: "Request a Free Estimate",
  },
  es: {
    label: "Nuestro Trabajo",
    title: "Proyectos Reales.\nResultados Reales.",
    sub: "Cada foto es un trabajo completado por nuestro equipo. Cuando contratas a Pro Master, esta es la calidad que puedes esperar.",
    cta: "Solicitar Estimado Gratis",
  },
};

interface PortfolioProps { lang: Lang; }

export default function PortfolioSection({ lang }: PortfolioProps) {
  const c = COPY[lang];
  const filters = FILTERS[lang];
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState<typeof PHOTOS[0] | null>(null);

  const visible = activeFilter === "all"
    ? PHOTOS
    : PHOTOS.filter((p) => p.cat === activeFilter);

  const scrollTo = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section id="portfolio" style={{ backgroundColor: "#F8F5EF", padding: "100px 0" }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="section-label" style={{ display: "block", marginBottom: 14 }}>{c.label}</span>
          <h2 style={{
            fontFamily: "'Roboto', sans-serif", fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 50px)",
            color: "#0B1F3A", lineHeight: 1.15, marginBottom: 20,
            whiteSpace: "pre-line",
          }}>{c.title}</h2>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <span className="gold-line" />
          </div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
            fontSize: 16, color: "#5A6B7A", lineHeight: 1.7,
            maxWidth: 520, margin: "0 auto",
          }}>{c.sub}</p>
        </div>

        {/* Filter tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center",
          gap: 10, marginBottom: 48,
        }}>
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                style={{
                  padding: "9px 20px",
                  borderRadius: 4,
                  border: isActive ? "2px solid #1B6B3A" : "2px solid rgba(11,31,58,0.12)",
                  background: isActive ? "#1B6B3A" : "white",
                  color: isActive ? "white" : "#3D4F5E",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13.5,
                  cursor: "pointer",
                  transition: "all 180ms ease",
                  transform: "scale(1)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "#1B6B3A";
                    e.currentTarget.style.color = "#1B6B3A";
                  }
                  e.currentTarget.style.transform = "scale(0.97)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgba(11,31,58,0.12)";
                    e.currentTarget.style.color = "#3D4F5E";
                  }
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Masonry grid */}
        <div style={{ columns: "3 260px", columnGap: 16 }}>
          {visible.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightbox(photo)}
              className="gallery-item"
              style={{
                breakInside: "avoid",
                marginBottom: 16,
                borderRadius: 8,
                overflow: "hidden",
                position: "relative",
                cursor: "zoom-in",
                boxShadow: "0 4px 20px rgba(11,31,58,0.08)",
                display: "block",
                background: "#e5e0d8",
              }}
            >
              <img
                src={photo.src}
                alt={photo.caption[lang]}
                style={{
                  width: "100%", display: "block",
                  transition: "transform 400ms cubic-bezier(0.23,1,0.32,1)",
                }}
                className="gallery-img"
              />
              {/* Caption overlay on hover */}
              <div
                className="gallery-overlay"
                style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(11,31,58,0.78) 0%, transparent 55%)",
                  opacity: 0,
                  transition: "opacity 250ms ease",
                  display: "flex", alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    fontSize: 13, color: "white",
                  }}>{photo.caption[lang]}</span>
                  <ZoomIn size={18} color="white" style={{ flexShrink: 0, marginLeft: 8 }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-emerald"
            style={{ fontSize: 15, padding: "14px 32px" }}
          >
            {c.cta}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(7,22,40,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24,
            animation: "fadeInLb 200ms ease",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute", top: 20, right: 20,
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%", width: 44, height: 44,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "white",
              transition: "background 160ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            <X size={20} />
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 900, width: "100%" }}>
            <img
              src={lightbox.src}
              alt={lightbox.caption[lang]}
              style={{
                width: "100%", maxHeight: "80vh",
                objectFit: "contain", borderRadius: 8,
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
              }}
            />
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
              fontSize: 14, color: "rgba(255,255,255,0.6)",
              textAlign: "center", marginTop: 16,
            }}>{lightbox.caption[lang]}</p>
          </div>
        </div>
      )}

      <style>{`
        .gallery-item:hover .gallery-img { transform: scale(1.04); }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
        @keyframes fadeInLb { from { opacity: 0 } to { opacity: 1 } }
        @media (max-width: 640px) {
          .gallery-masonry { columns: 2 200px !important; }
        }
      `}</style>
    </section>
  );
}
