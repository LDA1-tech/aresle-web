import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import DarkBackground from "./DarkBackground";
import Lightbox from "./Lightbox";
import uf02Exterior from "@/assets/uf02/exterior.jpg";
import uf02Living from "@/assets/uf02/living.jpg";
import uf02Cocina from "@/assets/uf02/cocina.jpg";
import uf02Habitacion from "@/assets/uf02/habitacion.jpg";
import uf02Bano1 from "@/assets/uf02/bano1.jpg";
import uf02Bano2 from "@/assets/uf02/bano2.jpg";

const plans = [
  { cuotas: "12 cuotas", cuota: "$2.600.000", totalCuotas: "$31.200.000", total: "$51.200.000" },
  { cuotas: "18 cuotas", cuota: "$1.930.000", totalCuotas: "$34.740.000", total: "$54.740.000" },
  { cuotas: "24 cuotas", cuota: "$1.600.000", totalCuotas: "$38.400.000", total: "$58.400.000" },
];

const features = [
  "Diseño funcional y confortable",
  "2 habitaciones",
  "Cocina integrada y comedor",
  "Baño completo",
  "Calidad constructiva garantizada",
];

const gallery = [
  { src: uf02Exterior, alt: "UF 02 - Vista exterior del módulo familiar" },
  { src: uf02Living, alt: "UF 02 - Living comedor amplio" },
  { src: uf02Cocina, alt: "UF 02 - Cocina integrada" },
  { src: uf02Habitacion, alt: "UF 02 - Habitación principal" },
  { src: uf02Bano1, alt: "UF 02 - Baño completo" },
  { src: uf02Bano2, alt: "UF 02 - Segundo baño" },
];


const techSpecs = [
  { label: "Medidas totales", value: "7,32 × 6,82 m" },
  { label: "Estar-comedor", value: "3,10 × 6,72 m" },
  { label: "Dormitorio principal", value: "3,20 × 2,70 m" },
  { label: "Segundo dormitorio", value: "2,92 m de frente" },
  { label: "Baño", value: "2,28 × 1,30 m" },
  { label: "Altura interior", value: "2,90 a 3,20 m" },
  { label: "Cubierta", value: "Chapa sinusoidal · Pend. 6%" },
  { label: "Desagüe", value: "Bajadas pluviales" },
];

const wa = (msg: string) =>
  `https://wa.me/542984948914?text=${encodeURIComponent(msg)}`;

const FeaturedUF02Section = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <DarkBackground>
      <section id="destacado-uf02" className="py-14 md:py-28 text-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mb-8 md:mb-12"
          >
            <p className="text-[10px] md:text-sm font-semibold tracking-[0.22em] md:tracking-[0.3em] uppercase text-brand mb-3 md:mb-4">
              Módulo familiar · Tu casa propia
            </p>
            <h2 className="text-[26px] md:text-5xl font-bold tracking-tight leading-[1.15] mb-3 md:mb-5 text-background">
              UF 02 — Módulo <span className="text-brand">familiar</span>
            </h2>
            <p className="text-background/75 text-[15px] md:text-lg leading-relaxed">
              Tu casa propia, más cerca de lo que imaginás. Espacios bien pensados,
              terminaciones de alta gama y la posibilidad de financiar el saldo en cuotas fijas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 md:space-y-6"
            >
              <div className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(0)}
                  className="block w-full overflow-hidden cursor-zoom-in group"
                  aria-label="Ampliar: UF 02 - Módulo familiar"
                >
                  <img
                    src={uf02Exterior}
                    alt="UF 02 - Módulo familiar de ARESLE SRL"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {gallery.slice(1).map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setLightboxIndex(i + 1)}
                    className="block w-full overflow-hidden cursor-zoom-in group"
                    aria-label={`Ampliar: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>

              <div className="border border-background/20 bg-foreground/10 p-5 md:p-8">
                <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase text-background/60 mb-1.5">
                  Venta directa (contado)
                </p>
                <p className="text-[34px] md:text-5xl font-bold tracking-tight text-brand mb-4 md:mb-6 leading-none">
                  $44.000.000
                </p>
                <dl className="grid grid-cols-2 gap-4 md:gap-6 border-t border-background/20 pt-4 md:pt-5">
                  <div>
                    <dt className="text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase text-background/60 mb-1">
                      Entrega inicial
                    </dt>
                    <dd className="text-base md:text-lg font-semibold text-background">$20.000.000</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase text-background/60 mb-1">
                      Saldo a financiar
                    </dt>
                    <dd className="text-base md:text-lg font-semibold text-background">$24.000.000</dd>
                  </div>
                </dl>
              </div>

              <div className="border border-background/20 bg-foreground/10 p-5 md:p-8">
                <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase text-background/60 mb-4">
                  Datos técnicos · Anteproyecto
                </p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {techSpecs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase text-background/60 mb-1">
                        {spec.label}
                      </dt>
                      <dd className="text-sm font-semibold text-background">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <ul className="space-y-2.5">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-background/80">
                    <Check size={18} className="text-brand shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={wa(
                  "Hola! Me interesa el módulo familiar UF 02 de ARESLE SRL. ¿Me pasan disponibilidad y formas de pago?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 border border-background/40 text-background px-8 py-3.5 md:py-4 text-sm font-semibold tracking-wide transition-colors hover:bg-background/10"
              >
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border-b border-background/20 pb-3 mb-5 md:mb-6">
                <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-background/60">
                  Planes sobre el saldo
                </p>
              </div>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {plans.map((plan, i) => (
                  <motion.div
                    key={plan.cuotas}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="border border-background/20 bg-foreground/10 p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)]"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.22em] uppercase text-background/60">
                        {plan.cuotas}
                      </p>
                      <p className="text-xl md:text-3xl font-bold tracking-tight text-background leading-none">
                        {plan.cuota}
                        <span className="text-xs md:text-sm font-medium text-background/60"> / mes</span>
                      </p>
                    </div>

                    <dl className="mt-3 pt-3 border-t border-background/15 space-y-1.5">
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-background/50">
                          Total en cuotas
                        </dt>
                        <dd className="text-sm font-semibold text-background/85">{plan.totalCuotas}</dd>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-background/50">
                          Total operación
                        </dt>
                        <dd className="text-sm font-semibold text-brand">{plan.total}</dd>
                      </div>
                    </dl>
                    <a
                      href={wa(
                        `Hola! Quiero el módulo familiar UF 02 de ARESLE SRL con el plan de ${plan.cuotas} de ${plan.cuota}. ¿Me confirman disponibilidad y próximos pasos?`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-background text-foreground px-6 py-2.5 md:py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-brand hover:text-primary-foreground hover:scale-[1.02]"
                    >
                      <MessageCircle size={16} />
                      Quiero este plan
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Lightbox
        images={gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </DarkBackground>
  );
};

export default FeaturedUF02Section;
