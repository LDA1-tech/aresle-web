import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Las cuotas son en pesos?",
    a: "Sí, todos los pagos son claros, en pesos y sin sorpresas.",
  },
  {
    q: "¿Necesito crédito bancario?",
    a: "No, el plan de ahorro no requiere créditos bancarios. Es un sistema de ahorro directo.",
  },
  {
    q: "¿Desde cuándo participo del sorteo?",
    a: "Desde la cuota N°5 ya participás en los sorteos para recibir tu vivienda.",
  },
  {
    q: "¿Se entrega lista para habitar?",
    a: "Sí, la vivienda se entrega instalada en tu destino final, lista para disfrutar desde el primer día.",
  },
  {
    q: "¿Cómo consulto disponibilidad y tiempos?",
    a: "Podés contactarnos por WhatsApp para consultar disponibilidad, modelos y tiempos de entrega.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Preguntas frecuentes</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border px-6">
              <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
