/**
 * Navbar — Pro Master Contractors
 * Mobile-first: logo left (max-width capped) + hamburger right.
 * Desktop: full nav links + lang toggle + call CTA.
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
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
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
          background: scrolled ? "rgba(11,31,58,0.97)" : "rgba(11,31,58,0.6)",
          boxShadow: scrolled ? "0 2px 32px rgba(0,0,0,0.35)" : "none",
          backdropFilter: "blur(14px)",
          transition: "background 300ms ease, box-shadow 300ms ease",
        }}
      >
        {/* ── Inner row ── */}
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 16px",
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          {/* ── Logo ── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none", border: "none", padding: 0,
              cursor: "pointer", flexShrink: 0,
              display: "flex", alignItems: "center",
            }}
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663460319800/iFrgACYRTTGqAJcI.png"
              alt="Pro Master Contractors"
              style={{
                /* mobile: 140px wide max; desktop: 180px */
                width: "clamp(130px, 28vw, 180px)",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </button>

          {/* ── Desktop nav (hidden on mobile) ── */}
          <nav
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: 2, flex: 1, justifyContent: "center" }}
          >
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
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.82)"; e.currentTarget.style.background = "none"; }}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* ── Desktop right actions ── */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: 8, flexShrink: 0 }}>
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
            <a
              href="tel:+12145551234"
              className="btn-emerald"
              style={{ padding: "8px 16px", fontSize: 13, gap: 6, borderRadius: 4, whiteSpace: "nowrap" }}
            >
              <Phone size={13} />
              (214) 555-1234
            </a>
          </div>

          {/* ── Mobile right: lang pill + hamburger ── */}
          <div
            className="flex lg:hidden"
            style={{ alignItems: "center", gap: 6, flexShrink: 0 }}
          >
            {/* Lang toggle */}
            <div style={{ display: "flex", background: "rgba(255,255,255,0.12)", borderRadius: 20, padding: "2px" }}>
              {(["en", "es"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    background: lang === l ? "white" : "transparent",
                    color: lang === l ? "#0B1F3A" : "rgba(255,255,255,0.7)",
                    border: "none", borderRadius: 16,
                    padding: "3px 9px",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 10,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    transition: "all 150ms ease", cursor: "pointer",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Hamburger button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                background: mobileOpen ? "rgba(74,222,128,0.2)" : "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                width: 42, height: 42,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", cursor: "pointer",
                transition: "background 150ms",
                flexShrink: 0,
              }}
            >
              {mobileOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen drawer ── */}
      <div
        style={{
          position: "fixed",
          top: 80, left: 0, right: 0,
          zIndex: 49,
          background: "rgba(9,24,45,0.99)",
          backdropFilter: "blur(20px)",
          transform: mobileOpen ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 300ms cubic-bezier(0.23,1,0.32,1)",
          borderBottom: "1px solid rgba(74,222,128,0.15)",
          paddingBottom: 24,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "8px 20px 0" }}>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {links.map((link, i) => (
              <button
                key={link}
                onClick={() => scrollTo(ANCHORS[i])}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 17,
                  color: "rgba(255,255,255,0.88)",
                  padding: "15px 0", textAlign: "left",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  transition: "color 150ms, padding-left 150ms",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#4ADE80"; e.currentTarget.style.paddingLeft = "8px"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.88)"; e.currentTarget.style.paddingLeft = "0"; }}
              >
                {link}
              </button>
            ))}
          </nav>

          <a
            href="tel:+12145551234"
            className="btn-emerald"
            style={{
              marginTop: 20,
              display: "flex", width: "100%",
              justifyContent: "center", alignItems: "center",
              gap: 8, borderRadius: 8,
              padding: "15px 20px", fontSize: 16,
              fontWeight: 700,
            }}
          >
            <Phone size={18} />
            {lang === "en" ? "Call Now — Free Estimate" : "Llamar Ahora — Estimado Gratis"}
          </a>
        </div>
      </div>
    </>
  );
}
