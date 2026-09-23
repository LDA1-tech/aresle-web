import { motion } from "framer-motion";
import sipDiagrama from "@/assets/sistema/sip-diagrama.png.asset.json";
import LightBackground from "./LightBackground";

const sipLayers = [
  "Placa OSB exterior",
  "Núcleo de poliestireno de alta densidad",
  "Listón de encastre — sistema de unión",
  "Chapa exterior",
  "Cielorraso de yeso interior",
  "Paneles SIP de 1.22 × 2.44 m",
  "Aberturas de chapa",
  "Estructura principal — tubo estructural 80 × 80 mm",
];

const panelTypes = [
  {
    code: "PUR",
    name: "Poliuretano inyectado",
    detail: "Panel sándwich línea continua. Espesores: 15 · 30 · 50 · 80 · 100 mm.",
  },
  {
    code: "PIR",
    name: "Poliisocianurato inyectado",
    detail: "Mayor resistencia al fuego. Espesores: 15 · 30 · 50 · 80 · 100 mm.",
  },
  {
    code: "EPS",
    name: "Poliestireno expandido",
    detail: "Aislación térmica eficiente. Espesores: 50 · 75 · 100 mm.",
  },
  {
    code: "LDR",
    name: "Lana de roca mineral",
    detail: "Aislación acústica y comportamiento al fuego. Espesores: 50 · 80 · 100 mm.",
  },
];

const ConstructionSystemSection = () => {
  return (
    <LightBackground>
      <section id="sistema" className="py-24 md:py-32">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-brand mb-4">
              Sistema constructivo
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Panelería <span className="text-brand">SIP</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Los paneles SIP (Structural Insulated Panels) integran estructura y aislación en una
              sola pieza. Estructura de OSB con núcleo de poliestireno expandido: reducen tiempos
              de obra, costos operativos y consumo energético a lo largo del tiempo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={sipDiagrama.url}
                alt="Sistema constructivo SIP — despiece de la unidad modular"
                className="w-full max-w-md mx-auto"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Composición de la unidad
              </p>
              <ul className="space-y-3 border-t border-border pt-6">
                {sipLayers.map((layer, i) => (
                  <li
                    key={layer}
                    className="flex gap-4 text-sm md:text-base border-b border-border/60 pb-3"
                  >
                    <span className="text-muted-foreground font-mono text-xs pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{layer}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
              Tipos de paneles disponibles
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Elegí la aislación que mejor se adapte
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {panelTypes.map((panel, i) => (
              <motion.div
                key={panel.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]"
              >
                <p className="font-mono text-3xl font-bold tracking-tight mb-1">{panel.code}</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  {panel.name}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{panel.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LightBackground>
  );
};

export default ConstructionSystemSection;
