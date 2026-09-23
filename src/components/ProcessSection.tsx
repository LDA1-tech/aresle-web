import { motion } from "framer-motion";
import DarkBackground from "./DarkBackground";

const steps = [
  {
    number: "01",
    title: "Elegís tu plan y cuotas",
    description: "Seleccioná el modelo y el esquema de pago que mejor se adapte a tus posibilidades.",
  },
  {
    number: "02",
    title: "Participás en sorteos desde la cuota 5",
    description: "A partir de la quinta cuota, ya estás participando para recibir tu vivienda antes de lo planificado.",
  },
  {
    number: "03",
    title: "Coordinamos fabricación, traslado e instalación",
    description: "Nos encargamos de todo: fabricamos tu módulo, lo transportamos e instalamos listo para habitar.",
  },
];

const ProcessSection = () => {
  return (
    <DarkBackground>
    <section className="py-24 md:py-32 text-background">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-background/60 mb-4">
            Proceso
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-background">
            ¿Cómo funciona?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-5xl font-bold text-background/20">{step.number}</span>
              <h3 className="text-lg font-semibold mt-4 mb-3 text-background">{step.title}</h3>
              <p className="text-sm text-background/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </DarkBackground>
  );
};

export default ProcessSection;
