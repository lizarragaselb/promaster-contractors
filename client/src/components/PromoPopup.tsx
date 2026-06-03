/**
 * PromoPopup — Pro Master Contractors
 * Promotional discount popup with exit-intent / 5s timer trigger
 */
import { X, Tag, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const COPY = {
  en: {
    badge: "Limited Time Offer",
    headline: "Get 15% OFF",
    sub: "Your First Carpet Cleaning or Water Extraction Service",
    code: "PROMASTER15",
    codeLabel: "Use code:",
    cta: "Claim My Discount",
    call: "Or Call Now",
    fine: "Valid for new customers only. Expires soon.",
    close: "No thanks, I'll pay full price",
  },
  es: {
    badge: "Oferta por Tiempo Limitado",
    headline: "Obtén 15% DE DESCUENTO",
    sub: "En tu Primer Servicio de Limpieza de Alfombras o Extracción de Agua",
    code: "PROMASTER15",
    codeLabel: "Usa el código:",
    cta: "Reclamar Mi Descuento",
    call: "O Llama Ahora",
    fine: "Válido solo para nuevos clientes. Expira pronto.",
    close: "No gracias, pagaré precio completo",
  },
};

interface PromoPopupProps {
  lang: "en" | "es";
  onClose: () => void;
}

export default function PromoPopup({ lang, onClose }: PromoPopupProps) {
  const c = COPY[lang];
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Animate in
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(c.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollToContact = () => {
    handleClose();
    setTimeout(() => {
      const el = document.querySelector("#contact");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 350);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(13, 33, 55, 0.85)",
        backdropFilter: "blur(4px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 300ms ease-out",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
          transition: "transform 300ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {/* Top orange bar */}
        <div
          className="px-8 pt-8 pb-6 text-center"
          style={{ background: "linear-gradient(135deg, #E67E22 0%, #D35400 100%)" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <Tag size={12} color="white" />
            <span className="text-xs font-bold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {c.badge}
            </span>
          </div>
          <h2
            className="font-black text-white"
            style={{ fontSize: 48, lineHeight: 1, fontFamily: "'Montserrat', sans-serif" }}
          >
            {c.headline}
          </h2>
          <p
            className="mt-2 font-semibold text-sm"
            style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Montserrat', sans-serif" }}
          >
            {c.sub}
          </p>
        </div>

        {/* Bottom white section */}
        <div className="bg-white px-8 py-6">
          {/* Code */}
          <div
            className="flex items-center justify-between rounded-xl px-4 py-3 mb-5 cursor-pointer"
            style={{ backgroundColor: "#F4F6F9", border: "2px dashed #E67E22" }}
            onClick={copyCode}
          >
            <div>
              <div className="text-xs font-semibold" style={{ color: "#7F8C8D", fontFamily: "'Montserrat', sans-serif" }}>
                {c.codeLabel}
              </div>
              <div className="font-black text-xl tracking-widest" style={{ color: "#1A4B84", fontFamily: "'Montserrat', sans-serif" }}>
                {c.code}
              </div>
            </div>
            <div
              className="px-3 py-1.5 rounded text-xs font-bold"
              style={{ backgroundColor: copied ? "#2E8B57" : "#E67E22", color: "white", fontFamily: "'Montserrat', sans-serif", transition: "background-color 200ms" }}
            >
              {copied ? "✓ Copied!" : "COPY"}
            </div>
          </div>

          {/* CTAs */}
          <button
            onClick={scrollToContact}
            className="w-full py-4 rounded-xl font-black text-lg text-white btn-orange mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {c.cta} →
          </button>
          <a
            href="tel:+12145551234"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm btn-blue"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Phone size={16} />
            {c.call}: (214) 555-1234
          </a>

          <p
            className="text-center text-xs mt-4"
            style={{ color: "#BDC3C7", fontFamily: "'Montserrat', sans-serif" }}
          >
            {c.fine}
          </p>

          <button
            onClick={handleClose}
            className="w-full text-center text-xs mt-2 transition-colors"
            style={{ color: "#BDC3C7", fontFamily: "'Montserrat', sans-serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#7F8C8D")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#BDC3C7")}
          >
            {c.close}
          </button>
        </div>

        {/* Close X */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 flex items-center justify-center rounded-full transition-all"
          style={{ width: 32, height: 32, backgroundColor: "rgba(255,255,255,0.2)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.35)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")}
        >
          <X size={16} color="white" />
        </button>
      </div>
    </div>
  );
}
