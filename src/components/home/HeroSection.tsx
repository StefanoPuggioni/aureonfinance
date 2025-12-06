import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Valutazione preliminare strutturata",
  "Team legale e tecnico specializzato",
  "Comunicazione chiara su rischi e possibilità",
];

export function HeroSection() {
  return (
    <section className="gradient-navy text-primary-foreground overflow-hidden">
      <div className="container-custom py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Trasformiamo perdite dolorose in{" "}
              <span className="text-gradient-gold">nuovi punti di partenza</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
              Aiutiamo chi ha subito truffe finanziarie e crypto a rimettere ordine, 
              valutare cosa è recuperabile e strutturare un percorso di rientro con il 
              supporto di professionisti legali e tecnici.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contatti">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Prenota una consulenza con un esperto
                </Button>
              </Link>
              <Link to="/metodo">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto group">
                  Scopri come funziona
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-2 text-sm text-primary-foreground/70"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in lg:animate-slide-in-right">
            <div className="relative overflow-hidden shadow-elegant-xl">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Studio legale professionale"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-5 shadow-elegant-lg max-w-[260px] hidden md:block border-l-4 border-accent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">+1600 persone</p>
                  <p className="text-xs text-muted-foreground">accompagnate nel percorso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
