import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import us00Ext from "@/assets/sanitarias/us00-exterior.png.asset.json";
import us00Int from "@/assets/sanitarias/us00-interior.png.asset.json";
import us01Ext from "@/assets/sanitarias/us01-exterior.png.asset.json";
import us01Int from "@/assets/sanitarias/us01-interior.png.asset.json";
import LightBackground from "./LightBackground";

type Unit = {
  id: string;
  title: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  gallery: { src: string; alt: string }[];
};

const units: Unit[] = [
  {
    id: "US 00",
    title: "US 00 — Unidad sanitaria estándar",
    image: us00Ext.url,
    description:
      "Solución práctica, higiénica y de rápida instalación para empresas, obras o eventos de gran concurrencia. Equipada con 3 bachas lavamanos, 5 boxes sanitarios individuales y depósito. Diseño robusto y funcional, fácil de mantener incluso en contextos de alta rotación.",
    specs: [
      { label: "Cubierto", value: "20 m²" },
      { label: "Equipamiento", value: "3 lavamanos · 5 boxes · depósito" },
      { label: "Aplicación", value: "Empresas · obras · eventos" },
      { label: "Instalación", value: "Lista para uso inmediato" },
    ],
    gallery: [
      { src: us00Ext.url, alt: "US 00 — vista exterior de la unidad sanitaria" },
      { src: us00Int.url, alt: "US 00 — área interior de lavamanos" },
    ],
  },
  {
    id: "US 01",
    title: "US 01 — Sanitaria + vestuario",
    image: us01Ext.url,
    description:
      "Pensada para grandes eventos o empresas con equipos de trabajo numerosos. Cuenta con 4 unidades de baño con ducha (configuración adaptable), un vestuario amplio revestido en madera y un sector de lavamanos independiente. El módulo puede utilizarse como baño, ducha o vestuario según necesidad.",
    specs: [
      { label: "Cubierto", value: "22 m²" },
      { label: "Equipamiento", value: "4 baños con ducha · vestuario · lavamanos" },
      { label: "Tratamiento", value: "Biodigestor incluido" },
      { label: "Configuración", value: "Adaptable al cliente" },
    ],
    gallery: [
      { src: us01Ext.url, alt: "US 01 — vista aérea de la unidad sanitaria con vestuario" },
      { src: us01Int.url, alt: "US 01 — interior del área de vestuario y acceso" },
    ],
  },
];

const SanitaryUnitsSection = () => {
  const [lightbox, setLightbox] = useState<{ unitId: string; index: number } | null>(null);

  return (
    <LightBackground>
      <section id="sanitarias" className="py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-brand mb-4">
              Línea industrial · Unidades sanitarias
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-brand">Sanitarios</span> para empresas y eventos
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Módulos sanitarios fabricados para obras, plantas industriales y eventos de gran
              concurrencia. Instalación rápida, mantenimiento simple y configuración adaptable a
              cada operación.
            </p>
          </motion.div>

          <div className="space-y-24">
            {units.map((unit, i) => {
              const heroIdx = unit.gallery.findIndex((g) => g.src === unit.image);
              const openIdx = heroIdx >= 0 ? heroIdx : 0;
              const openLightbox = (idx: number) =>
                setLightbox({ unitId: unit.id, index: idx });
              return (
              <div key={unit.id} className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 1 ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <div className={`overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <button
                      type="button"
                      onClick={() => openLightbox(openIdx)}
                      className="block w-full overflow-hidden cursor-zoom-in group"
                      aria-label={`Ampliar: ${unit.title}`}
                    >
                      <img
                        src={unit.image}
                        alt={unit.title}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
                      {unit.id}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                      {unit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{unit.description}</p>

                    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8 border-t border-border pt-6">
                      {unit.specs.map((spec) => (
                        <div key={spec.label}>
                          <dt className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                            {spec.label}
                          </dt>
                          <dd className="text-sm font-medium">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>

                    <a
                      href={`https://wa.me/542984948914?text=${encodeURIComponent(
                        `Hola! Me interesa la unidad sanitaria ${unit.id} de ARESLE SRL. ¿Me pasan disponibilidad y precio?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-brand hover:scale-[1.02]"
                    >
                      Pedir info de esta unidad
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-5"
                >
                  <div className="border-b border-border pb-3">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                      Galería · {unit.id}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {unit.gallery.map((img, gi) => (
                      <motion.div
                        key={img.src}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden bg-muted"
                      >
                        <button
                          type="button"
                          onClick={() => openLightbox(gi)}
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
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <Lightbox
                  images={unit.gallery}
                  index={lightbox?.unitId === unit.id ? lightbox.index : null}
                  onClose={() => setLightbox(null)}
                  onIndexChange={(idx) => setLightbox({ unitId: unit.id, index: idx })}
                />
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </LightBackground>
  );
};

export default SanitaryUnitsSection;
