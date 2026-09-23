import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import DarkBackground from "./DarkBackground";
import Lightbox from "./Lightbox";
import featuredImg from "@/assets/uf01/exterior.jpg";
import uf01Ingreso from "@/assets/uf01/ingreso.jpg";
import uf01Cocina from "@/assets/uf01/cocina.jpg";
import uf01Bano from "@/assets/uf01/bano.jpg";
import uf01Habitacion from "@/assets/uf01/habitacion.jpg";

const plans = [
  { cuotas: "12 cuotas", cuota: "$1.575.000", totalCuotas: "$18.900.000", total: "$32.400.000" },
  { cuotas: "18 cuotas", cuota: "$1.200.000", totalCuotas: "$21.600.000", total: "$35.100.000" },
  { cuotas: "24 cuotas", cuota: "$1.012.500", totalCuotas: "$24.300.000", total: "$37.800.000" },
];

const gallery = [
  { src: featuredImg, alt: "Módulo habitacional de 25,6 m² - Vista exterior" },
  { src: uf01Ingreso, alt: "Módulo habitacional - Ingreso principal" },
  { src: uf01Cocina, alt: "Módulo habitacional - Cocina equipada" },
  { src: uf01Bano, alt: "Módulo habitacional - Baño completo" },
  { src: uf01Habitacion, alt: "Módulo habitacional - Habitación" },
];

const wa = (msg: string) =>
  `https://wa.me/542984948914?text=${encodeURIComponent(msg)}`;

const FeaturedModuleSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <DarkBackground>

      <section id="destacado" className="py-14 md:py-28 text-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mb-8 md:mb-12"
          >
            <p className="text-[10px] md:text-sm font-semibold tracking-[0.22em] md:tracking-[0.3em] uppercase text-brand mb-3 md:mb-4">
              Módulo destacado · Disponibilidad inmediata
            </p>
            <h2 className="text-[26px] md:text-5xl font-bold tracking-tight leading-[1.15] mb-3 md:mb-5 text-background">
              Módulo habitacional de <span className="text-brand">25,6 m²</span> — 3,20 × 8,00 m
            </h2>
            <p className="text-background/75 text-[15px] md:text-lg leading-relaxed">
              Nuestra unidad más buscada: llave en mano, transportable y lista para instalar.
              Elegí venta directa o financiá el saldo en cuotas fijas en pesos, sin bancos.
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
                  aria-label="Ampliar: Módulo habitacional de 25,6 m²"
                >
                  <img
                    src={featuredImg}
                    alt="Módulo habitacional de 25,6 m² (3,20 × 8,00 m) de ARESLE SRL"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3 md:gap-4">
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
                  $27.000.000
                </p>
                <dl className="grid grid-cols-2 gap-4 md:gap-6 border-t border-background/20 pt-4 md:pt-5">
                  <div>
                    <dt className="text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase text-background/60 mb-1">
                      Entrega
                    </dt>
                    <dd className="text-base md:text-lg font-semibold text-background">$13.500.000</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase text-background/60 mb-1">
                      Saldo a financiar
                    </dt>
                    <dd className="text-base md:text-lg font-semibold text-background">$13.500.000</dd>
                  </div>
                </dl>
              </div>

              <ul className="space-y-2.5">
                {[
                  "Cuotas fijas en pesos, sin créditos bancarios",
                  "Fabricado en nuestra planta de Allen, Alto Valle",
                  "Transportable e instalado en su destino final",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-background/80">
                    <Check size={18} className="text-brand shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={wa(
                  "Hola! Me interesa el módulo habitacional de 25,6 m² (3,20 x 8,00 m) de ARESLE SRL. ¿Me pasan disponibilidad y formas de pago?"
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
                        `Hola! Quiero el módulo habitacional de 25,6 m² (3,20 x 8,00 m) con el plan de ${plan.cuotas} de ${plan.cuota}. ¿Me confirman disponibilidad y próximos pasos?`
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

export default FeaturedModuleSection;
