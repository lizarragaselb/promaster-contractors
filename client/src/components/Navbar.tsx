/**
 * Navbar — Pro Master Contractors
 * Premium sticky nav. Transparent → deep navy on scroll.
 * DM Sans typography. EN/ES pill toggle. Emerald CTA.
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
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
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
          background: scrolled ? "rgba(11,31,58,0.97)" : "transparent",
          boxShadow: scrolled ? "0 1px 32px rgba(0,0,0,0.3)" : "none",
          backdropFilter: scrolled ? "blur(14px)" : "none",
        }}
      >
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

            {/* ── Logo ── */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ display: "flex", alignItems: "center", background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
              <img
                src="/manus-storage/promaster_logo_new_214d985b.png"
                alt="Pro Master Contractors"
                style={{ height: 48, width: "auto", objectFit: "contain" }}
              />
            </button>

            {/* ── Desktop nav links ── */}
            <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden lg:flex">
              {links.map((link, i) => (
                <button
                  key={link}
                  onClick={() => scrollTo(ANCHORS[i])}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 13.5,
                    color: "rgba(255,255,255,0.78)",
                    padding: "6px 13px", borderRadius: 4,
                    transition: "color 150ms, background 150ms",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.07)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.78)"; e.currentTarget.style.background = "none"; }}
                >
                  {link}
                </button>
              ))}
            </nav>

            {/* ── Right actions ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* Lang pill */}
              <div style={{ display: "flex", background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: 2 }}>
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

              {/* Call CTA */}
              <a
                href="tel:+12145551234"
                className="btn-emerald hidden lg:inline-flex"
                style={{ padding: "8px 16px", fontSize: 13, gap: 6, borderRadius: 4 }}
              >
                <Phone size={13} />
                (214) 555-1234
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden"
                style={{
                  background: "rgba(255,255,255,0.1)", border: "none",
                  borderRadius: 6, padding: 8, color: "white",
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        style={{
          position: "fixed", top: 72, left: 0, right: 0, zIndex: 49,
          background: "rgba(11,31,58,0.98)", backdropFilter: "blur(16px)",
          transform: mobileOpen ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 280ms cubic-bezier(0.23,1,0.32,1)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
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
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
                  color: "rgba(255,255,255,0.82)", padding: "13px 0", textAlign: "left",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "color 150ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#22A05A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.82)")}
              >
                {link}
              </button>
            ))}
          </nav>
          <a
            href="tel:+12145551234"
            className="btn-emerald"
            style={{ marginTop: 18, width: "100%", justifyContent: "center", borderRadius: 4 }}
          >
            <Phone size={15} />
            {lang === "en" ? "Call Now — Free Estimate" : "Llamar Ahora — Estimado Gratis"}
          </a>
        </div>
      </div>
    </>
  );
}
