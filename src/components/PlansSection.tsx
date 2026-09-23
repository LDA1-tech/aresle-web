import { motion } from "framer-motion";
import DarkBackground from "./DarkBackground";

const plans = [
  {
    title: "Vivienda 18 m²",
    options: ["24 cuotas de $650.000", "36 cuotas de $450.000"],
  },
  {
    title: "Vivienda 24 m²",
    options: ["24 cuotas de $1.000.000", "36 cuotas de $670.000"],
  },
  {
    title: "Vivienda 40 m²",
    options: ["24 cuotas de $1.700.000", "36 cuotas de $1.200.000"],
  },
];

const PlansSection = () => {
  return (
    <DarkBackground>
    <section id="planes" className="py-24 md:py-32 text-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-background/60 mb-4">
            Planes de Pago
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-background">
            Disponibilidad y cuotas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-foreground/10 border border-background/20 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-xl font-bold tracking-tight mb-6 text-background">{plan.title}</h3>
              <div className="space-y-3 mb-8 flex-1">
                {plan.options.map((opt, j) => (
                  <p key={j} className="text-sm text-background/70 font-medium">
                    {opt}
                  </p>
                ))}
              </div>
              <a
                href={`https://wa.me/542984948914?text=${encodeURIComponent(
                  `Hola! Quiero info sobre los módulos de ARESLE SRL. Me interesa: ${plan.title}. ¿Me pasan disponibilidad y próximos pasos?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background text-foreground px-6 py-3 text-sm font-semibold tracking-wide text-center transition-all duration-300 hover:bg-brand hover:text-primary-foreground hover:scale-[1.02] block"
              >
                Consultar disponibilidad
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </DarkBackground>
  );
};

export default PlansSection;
