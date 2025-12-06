import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  azienda: [
    { name: "Home", href: "/" },
    { name: "La missione", href: "/missione" },
    { name: "Il metodo", href: "/metodo" },
    { name: "Chi siamo", href: "/chi-siamo" },
    { name: "Contatti", href: "/contatti" },
  ],
  risorse: [
    { name: "Newsletter", href: "/#newsletter" },
    { name: "FAQ", href: "/#faq" },
    { name: "Articoli", href: "#" },
  ],
  legale: [
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Termini e condizioni", href: "#" },
    { name: "Informativa sui rischi", href: "#" },
    { name: "Gestione reclami", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">Aureon Asset Recovery</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Soluzioni strutturate per vittime di truffe finanziarie e digitali. 
              Un percorso serio, trasparente e sostenibile per ripartire.
            </p>
            
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Via Roma 123, 20121 Milano, Italia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+39 02 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@aureonassetrecovery.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Azienda</h4>
            <ul className="space-y-2.5">
              {footerLinks.azienda.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Risorse</h4>
            <ul className="space-y-2.5">
              {footerLinks.risorse.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Legale</h4>
            <ul className="space-y-2.5">
              {footerLinks.legale.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 rounded-xl overflow-hidden h-48 bg-primary-foreground/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.1234567890123!2d9.18!3d45.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzM2LjAiTiA5wrAxMCc0OC4wIkU!5e0!3m2!1sit!2sit!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sede Aureon Asset Recovery"
            className="grayscale opacity-60"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <div>
              <p>© {new Date().getFullYear()} Aureon Asset Recovery S.r.l. Tutti i diritti riservati.</p>
              <p className="mt-1">P.IVA: IT12345678901 | REA: MI-1234567</p>
            </div>
            <p className="text-center md:text-right">
              Asset Recovery & Financial Protection
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
