import { useState } from "react";
import { motion } from "framer-motion";
import exterior1 from "@/assets/oficinas/exterior1.png.asset.json";
import exterior2 from "@/assets/oficinas/exterior2.png.asset.json";
import interior1 from "@/assets/oficinas/interior1.png.asset.json";
import interior2 from "@/assets/oficinas/interior2.png.asset.json";
import interior3 from "@/assets/oficinas/interior3.png.asset.json";
import LightBackground from "./LightBackground";
import Lightbox from "./Lightbox";

const heroImage = { src: exterior1.url, alt: "Oficina modular ARESLE de 25 m² con baño - Vista exterior" };

const gallery = [
  { src: exterior2.url, alt: "Oficina modular - Vista exterior lateral" },
  { src: interior1.url, alt: "Oficina modular - Interior con ingreso y ventanal" },
  { src: interior2.url, alt: "Oficina modular - Interior con revestimiento en listones de madera" },
  { src: interior3.url, alt: "Oficina modular - Interior amplio iluminado" },
];

const allImages = [heroImage, ...gallery];

const specs = [
  { label: "Superficie", value: "25 m²" },
  { label: "Uso", value: "Oficinas para empresas" },
  { label: "Aplicaciones", value: "Campo · Obra · Corporativo" },
  { label: "Equipamiento", value: "Baño incluido" },
];

const whatsappMessage = encodeURIComponent(
  "Hola! Quiero info de las oficinas modulares de 25 m² de ARESLE SRL. ¿Me pasan disponibilidad y próximos pasos?"
);

const OfficesSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <LightBackground>
      <section id="oficinas" className="py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-brand mb-4">
              Línea Corporativa
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Oficinas para <span className="text-brand">Empresas</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Módulos de 25 m² con baño incluido, diseñados para empresas que necesitan
              oficinas operativas en el campo, obras o ampliaciones corporativas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(0)}
                className="block w-full overflow-hidden cursor-zoom-in group"
                aria-label="Ampliar imagen"
              >
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Oficinas · 25 m²
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Oficina para empresas 25 m² con baño
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Espacio modular operativo, terminado y listo para instalar. Pensado para
                empresas del agro, obras en yacimientos o cualquier compañía que necesite
                sumar superficie de trabajo sin obra tradicional.
              </p>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8 border-t border-border pt-6">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={`https://wa.me/542984948914?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-brand hover:scale-[1.02]"
              >
                Consultar por oficinas
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <div className="border-b border-border pb-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Galería · Oficinas
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {gallery.map((img, gi) => (
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
                    onClick={() => setLightboxIndex(gi + 1)}
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
        </div>
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      </section>
    </LightBackground>
  );
};

export default OfficesSection;
