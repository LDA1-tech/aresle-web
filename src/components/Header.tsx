import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Módulos", href: "#modelos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Oficinas", href: "#oficinas" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      // Hide when scrolling down past 120px, show when scrolling up
      if (y > 120 && y > lastY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      animate={{ y: hidden && !mobileOpen ? "-110%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(0,0,0,0.15)] border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <span
            className={`text-lg md:text-xl font-bold tracking-wider transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            ARESLE<span className="text-brand"> SRL</span>
          </span>
          <span
            className={`hidden sm:inline text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
              scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
            }`}
          >
            Construcción Modular
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-brand ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/85"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contacto")}
            className="bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-brand-dark transition-colors"
          >
            Pedir cotización
          </button>
        </nav>

        <button
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t overflow-hidden"
          >
            <nav className="container flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left py-3 px-2 text-sm font-medium tracking-wide text-muted-foreground hover:text-brand transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#contacto")}
                className="mt-2 bg-brand text-brand-foreground px-5 py-3 text-sm font-semibold tracking-wide hover:bg-brand-dark transition-colors"
              >
                Pedir cotización
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
