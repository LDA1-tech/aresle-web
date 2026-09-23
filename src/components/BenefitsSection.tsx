import { motion } from "framer-motion";
import { Building2, Cog, Thermometer, Layers } from "lucide-react";
import LightBackground from "./LightBackground";

const standards = [
  {
    icon: Building2,
    title: "30 Años de Trayectoria",
    description:
      "Respaldo y conocimiento profundo del clima y las necesidades del Alto Valle.",
  },
  {
    icon: Cog,
    title: "Calidad de Fabricación",
    description:
      "Construcción en un entorno controlado que asegura terminaciones exactas y evita los errores de la obra común.",
  },
  {
    icon: Thermometer,
    title: "Aislamiento Técnico",
    description:
      "Paneles de alta tecnología (PUR, PIR o LDR) que garantizan un ahorro energético del 40%.",
  },
  {
    icon: Layers,
    title: "Sistemas Transportables",
    description:
      "Unidades versátiles y ampliables que se instalan directamente en su destino final.",
  },
];

const BenefitsSection = () => {
  return (
    <LightBackground>
      <section id="beneficios" className="py-24 md:py-32">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-brand mb-4">
              El Estándar Aresle
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-3xl mx-auto">
              ¿Por qué elegir la <span className="text-brand">arquitectura modular</span> de Aresle?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-px bg-border mb-16 border border-border">
            {standards.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-background p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]"
                >
                  <Icon className="text-foreground mb-6" size={28} strokeWidth={1.5} />
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.a
            href="#contacto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block bg-primary text-primary-foreground p-8 md:p-10 text-center transition-all duration-300 hover:bg-brand hover:scale-[1.01]"
          >
            <p className="text-base md:text-xl font-medium leading-relaxed">
              Lo invitamos a recorrer nuestra planta industrial en Allen y ver la calidad de los materiales en persona.
            </p>
          </motion.a>
        </div>
      </section>
    </LightBackground>
  );
};

export default BenefitsSection;
