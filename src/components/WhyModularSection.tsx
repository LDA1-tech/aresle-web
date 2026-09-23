import { motion } from "framer-motion";

const WhyModularSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-brand mb-4 text-center">
            Filosofía
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10">
            ¿Por qué <span className="text-brand">modular</span>?
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Innovamos para simplificar tu manera de habitar. Inspirados en nuestra filosofía
              emprendedora, creamos la línea de Módulos Habitacionales Transportables: una solución
              moderna, eficiente y flexible para quienes buscan una vivienda práctica, estética y
              lista para habitar.
            </p>
            <p>
              Nuestras casas modulares se construyen mediante un proceso industrializado que
              garantiza calidad y precisión. Fabricadas en un entorno controlado y con un diseño
              pensado para adaptarse a distintas necesidades, cada unidad es transportada e instalada
              en su destino final, lista para ser disfrutada desde el primer día.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyModularSection;
