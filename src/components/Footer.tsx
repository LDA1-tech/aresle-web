import DarkBackground from "./DarkBackground";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Plan de Ahorro", href: "#planes" },
  { label: "Modelos", href: "#modelos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => {
  return (
    <DarkBackground>
      <footer className="text-background py-16">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-bold tracking-wider mb-2">ARESLE SRL</h3>
              <p className="text-xs tracking-[0.2em] uppercase opacity-70">Construcción Modular</p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase opacity-70 mb-4">
                Navegación
              </p>
              <nav className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase opacity-70 mb-4">
                Teléfonos
              </p>
              <div className="space-y-2 text-sm opacity-80">
                <p>Maximiliano Burdiles: 2984-948914</p>
                <p>Efraín Burdiles: 2984-191407</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-background/20 text-center">
            <p className="text-xs opacity-50">
              © {new Date().getFullYear()} ARESLE SRL – Construcción Modular. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </DarkBackground>
  );
};

export default Footer;
