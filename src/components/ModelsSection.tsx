import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import uf00Exterior1 from "@/assets/uf00/exterior1.jpg";
import uf00Exterior2 from "@/assets/uf00/exterior2.jpg";
import uf00Interior1 from "@/assets/uf00/interior1.jpg";
import uf00Interior2 from "@/assets/uf00/interior2.jpg";
import uf00Interior3 from "@/assets/uf00/interior3.jpg";
import uf01Exterior from "@/assets/uf01/exterior.jpg";
import uf01Ingreso from "@/assets/uf01/ingreso.jpg";
import uf01Cocina from "@/assets/uf01/cocina.jpg";
import uf01Bano from "@/assets/uf01/bano.jpg";
import uf01Habitacion from "@/assets/uf01/habitacion.jpg";
import uf02Exterior from "@/assets/uf02/exterior.jpg";
import uf02Living from "@/assets/uf02/living.jpg";
import uf02Cocina from "@/assets/uf02/cocina.jpg";
import uf02Habitacion from "@/assets/uf02/habitacion.jpg";
import uf02Bano1 from "@/assets/uf02/bano1.jpg";
import uf02Bano2 from "@/assets/uf02/bano2.jpg";
import LightBackground from "./LightBackground";

const uf02Gallery = [
  { src: uf02Living, alt: "UF 02 - Living comedor amplio con revestimiento de madera" },
  { src: uf02Cocina, alt: "UF 02 - Cocina con detalle en listones de madera" },
  { src: uf02Habitacion, alt: "UF 02 - Habitación principal" },
  { src: uf02Bano1, alt: "UF 02 - Baño con revestimiento símil mármol" },
  { src: uf02Bano2, alt: "UF 02 - Segundo baño con ducha" },
];

const uf01Gallery = [
  { src: uf01Ingreso, alt: "UF 01 - Ingreso principal con puerta blindada" },
  { src: uf01Cocina, alt: "UF 01 - Cocina equipada con bacha" },
  { src: uf01Bano, alt: "UF 01 - Baño con revestimiento símil mármol y ducha" },
  { src: uf01Habitacion, alt: "UF 01 - Habitación amplia y luminosa" },
];

const uf00Gallery = [
  { src: uf00Exterior2, alt: "UF 00 - Vista exterior lateral" },
  { src: uf00Interior1, alt: "UF 00 - Interior con ingreso principal" },
  { src: uf00Interior2, alt: "UF 00 - Interior amplio iluminado" },
  { src: uf00Interior3, alt: "UF 00 - Interior con detalle en listones de madera" },
];

type Model = {
  id: string;
  title: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  gallery: { src: string; alt: string }[];
};

const models: Model[] = [
  {
    id: "UF 00",
    title: "UF 00 — Módulo compacto",
    image: uf00Exterior1,
    description:
      "El módulo de menor escala del sistema, pensado para estadías de corto plazo. Integra cocina-comedor, una habitación con guardado y un baño que separa el área privada de la social, garantizando funcionalidad e intimidad en pocos metros.",
    specs: [
      { label: "Cubierto", value: "15 m²" },
      { label: "Capacidad", value: "1 a 2 personas" },
      { label: "Ambientes", value: "Cocina-comedor · 1 hab · 1 baño" },
      { label: "Uso", value: "Estadías de corto plazo" },
    ],
    gallery: uf00Gallery,
  },
  {
    id: "UF 01",
    title: "UF 01 — Módulo intermedio",
    image: uf01Exterior,
    description:
      "Escala intermedia que ofrece mayor confort sin perder eficiencia. Suma una habitación amplia para dos personas con área de guardado, un baño completo con lavadero y una cocina-estar integrada con posibilidad de expansión hacia el exterior. Versátil tanto para estancias temporales como uso permanente.",
    specs: [
      { label: "Cubierto", value: "40 m²" },
      { label: "Semicubierto", value: "25 m²" },
      { label: "Ambientes", value: "Estar-comedor-cocina · 1 hab · 1 baño + lavadero" },
      { label: "Uso", value: "Temporal o permanente" },
    ],
    gallery: uf01Gallery,
  },
  {
    id: "UF 02",
    title: "UF 02 — Módulo familiar",
    image: uf02Exterior,
    description:
      "Nuestro módulo habitacional de mayor tamaño. El área pública integra estar, comedor y cocina en un único ambiente que se expande hacia un deck exterior. Incluye una habitación principal con baño en suite y vestidor, una segunda habitación con guardado y un baño completo adicional accesible desde el área social.",
    specs: [
      { label: "Cubierto", value: "60 m²" },
      { label: "Semicubierto", value: "25 m² (deck + pergolado)" },
      { label: "Ambientes", value: "Estar-comedor-cocina · 2 hab · 2 baños · vestidor" },
      { label: "Capacidad", value: "Familia / 3 a 4 personas" },
    ],
    gallery: uf02Gallery,
  },
];

const ModelsSection = () => {
  const [lightbox, setLightbox] = useState<{ modelId: string; index: number } | null>(null);

  return (
    <LightBackground>
    <section id="modelos" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-brand mb-4">
            Unidades Funcionales · Fabricación propia
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Nuestros <span className="text-brand">Módulos</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Tres modelos pensados para distintos usos y escalas, construidos en nuestra fábrica de
            Allen con materiales de primera y terminaciones de alta gama. Elegí el que mejor se
            adapte a tu proyecto y coordinemos una visita a fábrica.
          </p>
        </motion.div>

        <div className="space-y-24">
          {models.map((model, i) => {
            const allImages = [
              { src: model.image, alt: model.title },
              ...model.gallery,
            ];
            const openLightbox = (idx: number) =>
              setLightbox({ modelId: model.id, index: idx });
            return (
            <div key={model.id} className="space-y-10">
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
                    onClick={() => openLightbox(0)}
                    className="block w-full overflow-hidden cursor-zoom-in group"
                    aria-label={`Ampliar: ${model.title}`}
                  >
                    <img
                      src={model.image}
                      alt={model.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
                    {model.id}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {model.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{model.description}</p>

                  <dl className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8 border-t border-border pt-6">
                    {model.specs.map((spec) => (
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
                        `Hola! Me interesa el modelo ${model.id} de ARESLE SRL. ¿Me pasan disponibilidad, precio y próximos pasos?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-brand hover:scale-[1.02]"
                    >
                      Pedir info de este modelo
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
                    Galería · {model.id}
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {model.gallery.map((img, gi) => (
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
                        onClick={() => openLightbox(gi + 1)}
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
                images={allImages}
                index={lightbox?.modelId === model.id ? lightbox.index : null}
                onClose={() => setLightbox(null)}
                onIndexChange={(idx) => setLightbox({ modelId: model.id, index: idx })}
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

export default ModelsSection;
