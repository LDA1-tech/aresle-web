import { motion } from "framer-motion";
import { Zap, Clock, Thermometer, Leaf, ShieldCheck, DollarSign } from "lucide-react";
import DarkBackground from "./DarkBackground";

const values = [
  { icon: Zap, label: "Flexibilidad y adaptación" },
  { icon: Clock, label: "Eficiencia constructiva" },
  { icon: Thermometer, label: "Mejora confort" },
  { icon: Leaf, label: "Ahorro energético" },
  { icon: ShieldCheck, label: "Sustentable" },
  { icon: DollarSign, label: "Económico y duradero" },
];

const ValuesSection = () => {
  return (
    <DarkBackground>
    <section className="py-24 md:py-32 text-background">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center gap-4 group cursor-default"
            >
              <item.icon className="text-background transition-all duration-300 group-hover:text-brand group-hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]" size={36} strokeWidth={1.5} />
              <p className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-background/90 transition-colors duration-300 group-hover:text-background">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </DarkBackground>
  );
};

export default ValuesSection;
