import { motion } from "framer-motion";
import { useState } from "react";
import LightBackground from "./LightBackground";
import Lightbox from "./Lightbox";
import panelesMuros from "@/assets/paneles/paneles-muros.png.asset.json";
import panelesCubiertas from "@/assets/paneles/paneles-cubiertas.png.asset.json";

type Panel = {
  code: string;
  variants: string;
  application: string;
  description: string;
  thicknesses: string[];
};

const wallPanels: Panel[] = [
  {
    code: "SUPERWALL 1000",
    variants: "PUR · PIR",
    application: "Muros y cielorrasos",
    description:
      "Panel tipo sándwich fabricado en línea continua, para muros y cielorrasos con aislación de poliuretano (PUR) o poliisocianurato (PIR) inyectado.",
    thicknesses: ["50", "60", "80", "100", "150", "200"],
  },
  {
    code: "SUPERWALL 1170",
    variants: "EPS · LDR",
    application: "Muros y cielorrasos",
    description:
      "Panel con\u00a0aislación de Poliestireno Expandido (EPS) o Lana de Roca Mineral (LDR), para mayor desempeño térmico y acústico.",
    thicknesses: ["50", "75", "100", "150", "200"],
  },
  {
    code: "SUPERWALL HIDEN",
    variants: "PUR · PIR",
    application: "Fachadas",
    description:
      "Diseñado para fachadas con junta oculta. Aislación de poliuretano (PUR) o poliisocianurato (PIR) inyectado, con terminación estética premium.",
    thicknesses: ["50", "80"],
  },
  {
    code: "SUPERWALL PRFV",
    variants: "EPS",
    application: "Cerramientos y cielorrasos",
    description:
      "Revestido con PRFV (plástico reforzado con fibra de vidrio). Resistente a elementos corrosivos. Aislación de Poliestireno Expandido (EPS).",
    thicknesses: ["50", "75", "100"],
  },
];

const roofPanels: Panel[] = [
  {
    code: "T 1000",
    variants: "PUR · PIR",
    application: "Muros y cubiertas",
    description:
      "Panel sándwich trapezoidal para muros y cubiertas con aislación de poliuretano (PUR) o poliisocianurato (PIR) inyectado.",
    thicknesses: ["15", "30", "50", "80", "100"],
  },
  {
    code: "T 1040",
    variants: "EPS · LDR",
    application: "Muros y cubiertas",
    description:
      "Panel sándwich trapezoidal con aislación de Poliestireno Expandido (EPS) o Lana de Roca Mineral (LDR).",
    thicknesses: ["50", "75", "80", "100"],
  },
  {
    code: "EURO ROOF",
    variants: "EPS",
    application: "Cubiertas",
    description:
      "Panel sándwich fabricado en línea continua para cubiertas, con aislación de Poliestireno Expandido (EPS).",
    thicknesses: ["50", "75", "100"],
  },
  {
    code: "EASY CLIP",
    variants: "EPS",
    application: "Cubiertas",
    description:
      "Panel sándwich con sistema de fijación oculta tipo clip para cubiertas. Aislación de Poliestireno Expandido (EPS).",
    thicknesses: ["50", "75", "100"],
  },
];

const legend = [
  { code: "PUR", label: "Poliuretano inyectado" },
  { code: "PIR", label: "Poliisocianurato inyectado" },
  { code: "EPS", label: "Poliestireno expandido" },
  { code: "LDR", label: "Lana de roca mineral" },
];

const PanelCard = ({ panel, index }: { panel: Panel; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="bg-background border border-border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-18px_rgba(0,0,0,0.18)] flex flex-col"
  >
    <div className="flex items-start justify-between gap-4 mb-3">
      <h4 className="font-mono text-xl md:text-2xl font-bold tracking-tight leading-tight">
        {panel.code}
      </h4>
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand bg-brand/10 px-2 py-1 whitespace-nowrap">
        {panel.variants}
      </span>
    </div>
    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
      {panel.application}
    </p>
    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
      {panel.description}
    </p>
    <div className="border-t border-border pt-4">
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
        Espesores (mm)
      </p>
      <div className="flex flex-wrap gap-1.5">
        {panel.thicknesses.map((t) => (
          <span
            key={t}
            className="font-mono text-xs font-semibold px-2 py-1 bg-muted text-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

const PanelTypesSection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const catalogImages = [
    { src: panelesMuros.url, alt: "Catálogo ARESLE — paneles para muros y fachadas" },
    { src: panelesCubiertas.url, alt: "Catálogo ARESLE — paneles para cubiertas" },
  ];

  return (
    <LightBackground>
      <section id="paneles" className="py-24 md:py-32">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-brand mb-4">
              Catálogo técnico
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Tipos de <span className="text-brand">paneles</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Fabricamos paneles sándwich en línea continua para muros, fachadas y cubiertas, con
              distintas aislaciones según el requerimiento térmico, acústico y de comportamiento al
              fuego.
            </p>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 max-w-4xl mx-auto"
          >
            {legend.map((item) => (
              <div
                key={item.code}
                className="border border-border bg-background px-4 py-3 text-center"
              >
                <p className="font-mono text-base font-bold text-brand">{item.code}</p>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Wall panels */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Línea 01
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Paneles para <span className="text-brand">muros y fachadas</span>
              </h3>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {wallPanels.map((p, i) => (
                <PanelCard key={p.code} panel={p} index={i} />
              ))}
            </div>
          </div>

          {/* Roof panels */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Línea 02
              </p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Paneles para <span className="text-brand">cubiertas</span>
              </h3>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {roofPanels.map((p, i) => (
                <PanelCard key={p.code} panel={p} index={i} />
              ))}
            </div>
          </div>

          {/* Catalog images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
              Fichas del catálogo
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {catalogImages.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="block overflow-hidden border border-border bg-background cursor-zoom-in group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Lightbox
        images={catalogImages}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={setLightbox}
      />
    </LightBackground>
  );
};

export default PanelTypesSection;
