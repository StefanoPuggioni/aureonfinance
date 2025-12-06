import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="gradient-navy text-primary-foreground py-16 md:py-20">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Pronto a fare il primo passo?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Prenota una consulenza gratuita con un nostro esperto. Analizzeremo insieme 
          la tua situazione e ti diremo con chiarezza cosa possiamo fare per te.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contatti">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Prenota una consulenza
            </Button>
          </Link>
          <Link to="/metodo">
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto group">
              Scopri il nostro metodo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
