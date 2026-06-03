/**
 * ReviewsSection — Pro Master Contractors
 * 3 review cards + Google rating banner
 */
import { Star, Quote } from "lucide-react";

const COPY = {
  en: {
    title: "What Our Clients Say",
    rating: "5.0 on Google — 100+ Reviews",
    reviews: [
      { name: "Sarah M.", role: "Homeowner", text: "They responded in under an hour after our pipe burst. Saved our floors completely. The team was professional, fast, and incredibly thorough. Highly recommend!" },
      { name: "James T.", role: "Property Manager", text: "Best carpet cleaning I've ever had. The before and after was unbelievable. Very professional team — they showed up on time and left everything spotless." },
      { name: "Linda R.", role: "HOA Director", text: "Pro Master handled our entire condo unit renovation. On time, on budget, and the quality was excellent. They're our go-to contractor for all property needs." },
    ],
    google: "Read all reviews on Google",
  },
  es: {
    title: "Lo que Dicen Nuestros Clientes",
    rating: "5.0 en Google — Más de 100 Reseñas",
    reviews: [
      { name: "Sarah M.", role: "Propietaria", text: "Respondieron en menos de una hora después de que reventó nuestra tubería. Salvaron nuestros pisos por completo. El equipo fue profesional, rápido e increíblemente minucioso." },
      { name: "James T.", role: "Administrador de Propiedades", text: "La mejor limpieza de alfombras que he tenido. El antes y después fue increíble. Equipo muy profesional — llegaron a tiempo y dejaron todo impecable." },
      { name: "Linda R.", role: "Directora de HOA", text: "Pro Master manejó toda la renovación de nuestra unidad de condominio. A tiempo, dentro del presupuesto y la calidad fue excelente. Son nuestro contratista de confianza." },
    ],
    google: "Ver todas las reseñas en Google",
  },
};

interface ReviewsProps { lang: "en" | "es"; }

export default function ReviewsSection({ lang }: ReviewsProps) {
  const c = COPY[lang];
  return (
    <section id="reviews" style={{ backgroundColor: "white", padding: "96px 0" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-6 fade-in-up">
          <h2
            className="font-black"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#1A4B84", fontFamily: "'Montserrat', sans-serif", marginBottom: 16 }}
          >
            {c.title}
          </h2>
          {/* Google rating badge */}
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ backgroundColor: "#FFF8F0", border: "2px solid #E67E22" }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#E67E22" color="#E67E22" />
              ))}
            </div>
            <span className="font-black" style={{ color: "#E67E22", fontFamily: "'Montserrat', sans-serif" }}>
              {c.rating}
            </span>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {c.reviews.map((review, i) => (
            <div
              key={i}
              className="fade-in-up rounded-xl p-8 relative"
              style={{
                backgroundColor: "#F4F6F9",
                border: "1px solid rgba(26,75,132,0.08)",
                boxShadow: "0 4px 20px rgba(26,75,132,0.06)",
                animationDelay: `${i * 120}ms`,
              }}
            >
              {/* Quote icon */}
              <div
                className="absolute -top-4 left-8 flex items-center justify-center rounded-full"
                style={{ width: 40, height: 40, backgroundColor: "#1A4B84" }}
              >
                <Quote size={18} color="white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="#E67E22" color="#E67E22" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#2C3E50", fontFamily: "'Montserrat', sans-serif", fontStyle: "italic" }}
              >
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-full font-black text-white text-sm"
                  style={{ width: 40, height: 40, backgroundColor: "#1A4B84", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: "#1A4B84", fontFamily: "'Montserrat', sans-serif" }}>
                    {review.name}
                  </div>
                  <div className="text-xs" style={{ color: "#7F8C8D", fontFamily: "'Montserrat', sans-serif" }}>
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-12 fade-in-up">
          <a
            href="https://www.google.com/search?q=Pro+Master+Contractors+Dallas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm transition-all duration-150"
            style={{
              border: "2px solid #1A4B84",
              color: "#1A4B84",
              fontFamily: "'Montserrat', sans-serif",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#1A4B84";
              (e.currentTarget as HTMLElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#1A4B84";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {c.google}
          </a>
        </div>
      </div>
    </section>
  );
}
