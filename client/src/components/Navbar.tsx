/**
 * Navbar — Pro Master Contractors
 * Premium sticky nav. Transparent → deep navy on scroll.
 * Taller navbar (88px) for logo breathing room.
 * Mobile: logo left, hamburger right — nav links hidden in drawer.
 */
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import type { Lang } from "@/pages/Home";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const NAV_LINKS = {
  en: ["Services", "Emergency", "About", "Portfolio", "Reviews", "Contact"],
  es: ["Servicios", "Emergencias", "Nosotros", "Portafolio", "Reseñas", "Contacto"],
};
const ANCHORS = ["#services", "#emergency", "#about", "#portfolio", "#reviews", "#contact"];

const NAV_H = 88; // navbar height in px

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_H;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 80);
  }, []);

  const links = NAV_LINKS[lang];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "background 300ms ease, box-shadow 300ms ease, backdrop-filter 300ms ease",
          background: scrolled ? "rgba(11,31,58,0.97)" : "rgba(11,31,58,0.55)",
          boxShadow: scrolled ? "0 1px 32px rgba(0,0,0,0.3)" : "none",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container">
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: NAV_H,
            paddingTop: 8,
            paddingBottom: 8,
          }}>

            {/* ── Logo ── */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ display: "flex", alignItems: "center", background: "none", border: "none", padding: 0, cursor: "pointer", flexShrink: 0 }}
            >
              <img
                src="/manus-storage/promaster_logo_new_214d985b.png"
                alt="Pro Master Contractors"
                style={{ height: 58, width: "auto", objectFit: "contain" }}
              />
            </button>

            {/* ── Desktop nav links (lg+) ── */}
            <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden lg:flex">
              {links.map((link, i) => (
                <button
                  key={link}
                  onClick={() => scrollTo(ANCHORS[i])}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 13.5,
                    color: "rgba(255,255,255,0.82)",
                    padding: "6px 13px", borderRadius: 4,
                    transition: "color 150ms, background 150ms",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.82)"; e.currentTarget.style.background = "none"; }}
                >
                  {link}
                </button>
              ))}
            </nav>

            {/* ── Right actions ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>

              {/* Lang pill — desktop only */}
              <div className="hidden lg:flex" style={{ background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: 2 }}>
                {(["en", "es"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    style={{
                      background: lang === l ? "white" : "transparent",
                      color: lang === l ? "#0B1F3A" : "rgba(255,255,255,0.65)",
                      border: "none", borderRadius: 16,
                      padding: "3px 10px",
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 10.5,
                      letterSpacing: "0.06em", textTransform: "uppercase",
                      transition: "all 150ms ease", cursor: "pointer",
                    }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Call CTA — desktop only */}
              <a
                href="tel:+12145551234"
                className="btn-emerald hidden lg:inline-flex"
                style={{ padding: "8px 16px", fontSize: 13, gap: 6, borderRadius: 4 }}
              >
                <Phone size={13} />
                (214) 555-1234
              </a>

              {/* Mobile: lang pill small + hamburger */}
              <div className="flex lg:hidden" style={{ alignItems: "center", gap: 6 }}>
                {/* Small lang toggle on mobile */}
                <div style={{ display: "flex", background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: 2 }}>
                  {(["en", "es"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      style={{
                        background: lang === l ? "white" : "transparent",
                        color: lang === l ? "#0B1F3A" : "rgba(255,255,255,0.65)",
                        border: "none", borderRadius: 16,
                        padding: "2px 8px",
                        fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 9.5,
                        letterSpacing: "0.06em", textTransform: "uppercase",
                        transition: "all 150ms ease", cursor: "pointer",
                      }}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Hamburger */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                  style={{
                    background: "rgba(255,255,255,0.1)", border: "none",
                    borderRadius: 6, padding: "8px 10px", color: "white",
                    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                    transition: "background 150ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        style={{
          position: "fixed", top: NAV_H, left: 0, right: 0, zIndex: 49,
          background: "rgba(11,31,58,0.99)", backdropFilter: "blur(20px)",
          transform: mobileOpen ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 280ms cubic-bezier(0.23,1,0.32,1)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container py-5">
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {links.map((link, i) => (
              <button
                key={link}
                onClick={() => scrollTo(ANCHORS[i])}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16,
                  color: "rgba(255,255,255,0.85)", padding: "14px 0", textAlign: "left",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  transition: "color 150ms",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4ADE80")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              >
                {link}
              </button>
            ))}
          </nav>
          <a
            href="tel:+12145551234"
            className="btn-emerald"
            style={{ marginTop: 20, width: "100%", justifyContent: "center", borderRadius: 6, padding: "14px 20px", fontSize: 15 }}
          >
            <Phone size={16} />
            {lang === "en" ? "Call Now — Free Estimate" : "Llamar Ahora — Estimado Gratis"}
          </a>
        </div>
      </div>
    </>
  );
}
