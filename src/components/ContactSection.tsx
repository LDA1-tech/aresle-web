import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import LightBackground from "./LightBackground";

const ContactSection = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    localidad: "",
    modelo: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola! Quiero info sobre los módulos de ARESLE SRL.\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nLocalidad: ${form.localidad}\nModelo de interés: ${form.modelo}\nMensaje: ${form.mensaje}`;
    window.open(
      `https://wa.me/542984948914?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <LightBackground>
    <section id="contacto" className="py-12 md:py-24">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-brand mb-3">
            Contacto
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Hablemos de tu <span className="text-brand">próxima vivienda</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* WhatsApp buttons */}
          <div className="space-y-2 md:space-y-3">
            <p className="text-sm text-muted-foreground mb-2 md:mb-3">
              Contactanos directamente por WhatsApp para una atención personalizada:
            </p>

            <a
              href="https://wa.me/542984948914?text=Hola!%20Quiero%20info%20sobre%20los%20m%C3%B3dulos%20de%20ARESLE%20SRL.%20%C2%BFMe%20pasan%20disponibilidad%20y%20pr%C3%B3ximos%20pasos?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-primary text-primary-foreground p-3 md:p-4 transition-all duration-300 hover:bg-brand hover:scale-[1.01]"
            >
              <MessageCircle size={22} />
              <div>
                <p className="font-semibold text-sm">Maximiliano Burdiles</p>
                <p className="text-xs opacity-80">2984-948914</p>
              </div>
            </a>

            <a
              href="https://wa.me/542984191407?text=Hola!%20Quiero%20info%20sobre%20los%20m%C3%B3dulos%20de%20ARESLE%20SRL.%20%C2%BFMe%20pasan%20disponibilidad%20y%20pr%C3%B3ximos%20pasos?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-primary text-primary-foreground p-3 md:p-4 transition-all duration-300 hover:bg-brand hover:scale-[1.01]"
            >
              <MessageCircle size={22} />
              <div>
                <p className="font-semibold text-sm">Efraín Burdiles</p>
                <p className="text-xs opacity-80">2984-191407</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
            <input
              type="text"
              placeholder="Nombre"
              required
              maxLength={100}
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full bg-background border border-border px-4 py-2 md:py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              required
              maxLength={20}
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              className="w-full bg-background border border-border px-4 py-2 md:py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <input
              type="text"
              placeholder="Localidad"
              maxLength={100}
              value={form.localidad}
              onChange={(e) => setForm({ ...form, localidad: e.target.value })}
              className="w-full bg-background border border-border px-4 py-2 md:py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <select
              value={form.modelo}
              onChange={(e) => setForm({ ...form, modelo: e.target.value })}
              className="w-full bg-background border border-border px-4 py-2 md:py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
            >
              <option value="">Modelo de interés</option>
              <option value="UF 00 – 15 m²">UF 00 – 15 m²</option>
              <option value="UF 01 – 40 m²">UF 01 – 40 m²</option>
              <option value="UF 02 – 60 m²">UF 02 – 60 m²</option>
            </select>
            <textarea
              placeholder="Mensaje (opcional)"
              maxLength={1000}
              rows={2}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              className="w-full bg-background border border-border px-4 py-2 md:py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-6 py-2.5 md:py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-brand hover:scale-[1.01] flex items-center justify-center gap-2"
            >
              <Send size={16} />
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
    </LightBackground>
  );
};

export default ContactSection;
