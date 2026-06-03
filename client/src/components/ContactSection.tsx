/**
 * ContactSection — Pro Master Contractors
 * Contact info left + form right
 */
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const COPY = {
  en: {
    title: "Request a Free Estimate",
    subtitle: "We'll call you back within 30 minutes during business hours.",
    phone: "(214) 555-1234",
    email: "info@promastercontractors.com",
    area: "Serving all of Dallas-Fort Worth, TX",
    fields: {
      name: "Full Name *",
      namePh: "Enter your full name...",
      phone: "Phone Number *",
      phonePh: "Enter your phone number...",
      email: "Email Address",
      emailPh: "Enter your email address...",
      service: "Service Needed",
      servicePh: "Select a service...",
      message: "Message / Additional Details",
      messagePh: "Tell us about your project...",
    },
    services: ["Water Damage & Restoration", "Carpet Cleaning", "Interior Remodeling", "Exterior Remodeling", "Property Make-Ready", "Other"],
    submit: "Get My Free Estimate →",
    success: "Thank you! We'll call you back shortly.",
  },
  es: {
    title: "Solicita un Estimado Gratis",
    subtitle: "Te llamaremos de vuelta en 30 minutos durante horas de oficina.",
    phone: "(214) 555-1234",
    email: "info@promastercontractors.com",
    area: "Servimos todo el área de Dallas-Fort Worth, TX",
    fields: {
      name: "Nombre Completo *",
      namePh: "Ingresa tu nombre completo...",
      phone: "Número de Teléfono *",
      phonePh: "Ingresa tu número de teléfono...",
      email: "Correo Electrónico",
      emailPh: "Ingresa tu correo electrónico...",
      service: "Servicio Requerido",
      servicePh: "Selecciona un servicio...",
      message: "Mensaje / Detalles Adicionales",
      messagePh: "Cuéntanos sobre tu proyecto...",
    },
    services: ["Daño por Agua y Restauración", "Limpieza de Alfombras", "Remodelación Interior", "Remodelación Exterior", "Preparación de Propiedad", "Otro"],
    submit: "Obtener Mi Estimado Gratis →",
    success: "¡Gracias! Te llamaremos pronto.",
  },
};

interface ContactProps { lang: "en" | "es"; }

export default function ContactSection({ lang }: ContactProps) {
  const c = COPY[lang];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ backgroundColor: "#F4F6F9", padding: "96px 0" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2
            className="font-black"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#1A4B84", fontFamily: "'Montserrat', sans-serif", marginBottom: 16 }}
          >
            {c.title}
          </h2>
          <p className="text-lg" style={{ color: "#5D6D7E", fontFamily: "'Montserrat', sans-serif" }}>
            {c.subtitle}
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: "#E67E22" }} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left — Contact Info */}
          <div className="lg:w-80 flex-shrink-0 fade-in-up">
            <div className="bg-white rounded-2xl p-8 space-y-6" style={{ boxShadow: "0 4px 24px rgba(26,75,132,0.08)" }}>
              <a
                href="tel:+12145551234"
                className="flex items-center gap-4 group"
              >
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: 52, height: 52, backgroundColor: "#E67E22" }}
                >
                  <Phone size={22} color="white" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#7F8C8D", fontFamily: "'Montserrat', sans-serif" }}>
                    {lang === "en" ? "Call Us" : "Llámanos"}
                  </div>
                  <div className="font-black text-lg" style={{ color: "#1A4B84", fontFamily: "'Montserrat', sans-serif" }}>
                    {c.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: 52, height: 52, backgroundColor: "#1A4B84" }}
                >
                  <Mail size={22} color="white" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#7F8C8D", fontFamily: "'Montserrat', sans-serif" }}>
                    Email
                  </div>
                  <div className="font-semibold text-sm" style={{ color: "#2C3E50", fontFamily: "'Montserrat', sans-serif" }}>
                    {c.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: 52, height: 52, backgroundColor: "#2E8B57" }}
                >
                  <MapPin size={22} color="white" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#7F8C8D", fontFamily: "'Montserrat', sans-serif" }}>
                    {lang === "en" ? "Service Area" : "Área de Servicio"}
                  </div>
                  <div className="font-semibold text-sm" style={{ color: "#2C3E50", fontFamily: "'Montserrat', sans-serif" }}>
                    {c.area}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: "#F4F6F9", border: "1px solid rgba(26,75,132,0.1)" }}
              >
                <div className="font-bold text-sm mb-2" style={{ color: "#1A4B84", fontFamily: "'Montserrat', sans-serif" }}>
                  {lang === "en" ? "Business Hours" : "Horario de Atención"}
                </div>
                <div className="text-xs space-y-1" style={{ color: "#5D6D7E", fontFamily: "'Montserrat', sans-serif" }}>
                  <div>{lang === "en" ? "Mon–Fri: 8am – 6pm" : "Lun–Vie: 8am – 6pm"}</div>
                  <div>{lang === "en" ? "Sat: 9am – 4pm" : "Sáb: 9am – 4pm"}</div>
                  <div className="font-bold" style={{ color: "#E67E22" }}>
                    {lang === "en" ? "Emergency: 24/7" : "Emergencias: 24/7"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="flex-1 fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="bg-white rounded-2xl p-8 lg:p-10" style={{ boxShadow: "0 4px 24px rgba(26,75,132,0.08)" }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                  <CheckCircle size={64} color="#2E8B57" />
                  <p className="font-black text-2xl text-center" style={{ color: "#1A4B84", fontFamily: "'Montserrat', sans-serif" }}>
                    {c.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#2C3E50", fontFamily: "'Montserrat', sans-serif" }}>
                        {c.fields.name}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={c.fields.namePh}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{
                          border: "2px solid #E8ECF0",
                          fontFamily: "'Montserrat', sans-serif",
                          color: "#2C3E50",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#1A4B84")}
                        onBlur={(e) => (e.target.style.borderColor = "#E8ECF0")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#2C3E50", fontFamily: "'Montserrat', sans-serif" }}>
                        {c.fields.phone}
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder={c.fields.phonePh}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ border: "2px solid #E8ECF0", fontFamily: "'Montserrat', sans-serif", color: "#2C3E50" }}
                        onFocus={(e) => (e.target.style.borderColor = "#1A4B84")}
                        onBlur={(e) => (e.target.style.borderColor = "#E8ECF0")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#2C3E50", fontFamily: "'Montserrat', sans-serif" }}>
                        {c.fields.email}
                      </label>
                      <input
                        type="email"
                        placeholder={c.fields.emailPh}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ border: "2px solid #E8ECF0", fontFamily: "'Montserrat', sans-serif", color: "#2C3E50" }}
                        onFocus={(e) => (e.target.style.borderColor = "#1A4B84")}
                        onBlur={(e) => (e.target.style.borderColor = "#E8ECF0")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#2C3E50", fontFamily: "'Montserrat', sans-serif" }}>
                        {c.fields.service}
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ border: "2px solid #E8ECF0", fontFamily: "'Montserrat', sans-serif", color: form.service ? "#2C3E50" : "#9CA3AF", backgroundColor: "white" }}
                        onFocus={(e) => (e.target.style.borderColor = "#1A4B84")}
                        onBlur={(e) => (e.target.style.borderColor = "#E8ECF0")}
                      >
                        <option value="">{c.fields.servicePh}</option>
                        {c.services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#2C3E50", fontFamily: "'Montserrat', sans-serif" }}>
                      {c.fields.message}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={c.fields.messagePh}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                      style={{ border: "2px solid #E8ECF0", fontFamily: "'Montserrat', sans-serif", color: "#2C3E50" }}
                      onFocus={(e) => (e.target.style.borderColor = "#1A4B84")}
                      onBlur={(e) => (e.target.style.borderColor = "#E8ECF0")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-lg font-black text-lg text-white btn-orange"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <Send size={20} />
                    {c.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
