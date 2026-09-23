import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-modular.jpg";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  // Parallax: background moves at 50% scroll speed
  const bgY = useTransform(scrollY, [0, 800], ["0%", "50%"]);

  const whatsappUrl =
    "https://wa.me/542984948914?text=" +
    encodeURIComponent(
      "Hola! Quisiera consultar por las unidades modulares de ARESLE SRL. ¿Me pasan información y próximos pasos?"
    );

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <motion.img
          src={heroImg}
          alt="Casa modular ARESLE SRL"
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>

      <div className="relative container pt-20 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-brand text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          >
            ARESLE SRL — ALLEN, ALTO VALLE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight leading-[1.05] mb-6"
          >
            Arquitectura <span className="text-brand">Modular</span> de Alta Gama en el Alto Valle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-primary-foreground/85 text-base md:text-lg max-w-xl mb-8 md:mb-10 mx-auto leading-relaxed"
          >
            Construya con el respaldo de 30 años de trayectoria regional. Unidades de ingeniería de
            precisión, fabricadas en Allen y diseñadas para el clima de nuestra zona.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="#modelos"
              className="bg-primary-foreground text-primary px-6 py-3 md:px-8 md:py-4 text-sm font-semibold tracking-wide text-center hover:opacity-90 transition-opacity"
            >
              Ver nuestros módulos
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary-foreground/40 text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm font-semibold tracking-wide text-center hover:bg-primary-foreground/10 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Consultar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
