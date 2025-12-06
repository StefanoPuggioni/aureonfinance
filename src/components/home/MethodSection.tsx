import { Link } from "react-router-dom";
import { FileSearch, Scale, FileText, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Analisi del caso",
    description: "Raccolta di documenti, cronologia degli eventi, mappatura delle controparti e dei flussi di denaro.",
  },
  {
    icon: Scale,
    title: "Valutazione di recuperabilità",
    description: "Coinvolgendo il team legale e tecnico per capire se esistono reali possibilità di intervento e in che termini.",
  },
  {
    icon: FileText,
    title: "Proposta di percorso",
    description: "Presentiamo scenari, tempi, costi, rischi e limiti in modo trasparente, per permetterti di decidere con lucidità.",
  },
  {
    icon: BarChart3,
    title: "Esecuzione e monitoraggio",
    description: "Se scegli di procedere, seguiamo il piano definito e ti aggiorniamo in modo periodico con report chiari e verificabili.",
  },
];

export function MethodSection() {
  return (
    <section className="bg-card section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Il metodo Aureon Asset Recovery
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Un processo in più fasi, pensato per analizzare il tuo caso, valutarne 
            la recuperabilità e, solo se ha senso, proporre un percorso di intervento 
            chiaro e monitorato.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-background p-6 border-l-2 border-primary hover:shadow-elegant-lg transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-elegant">
                {index + 1}
              </div>
              
              <div className="mb-4 mt-2">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <step.icon className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/metodo"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors group"
          >
            Scopri il metodo nel dettaglio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
