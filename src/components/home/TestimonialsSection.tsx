import { User, TrendingUp, Clock, AlertCircle } from "lucide-react";

const caseStudies = [
  {
    profile: "Imprenditore, 47 anni, Nord Italia",
    problem: "Perdita di circa 180.000€ in piattaforma non regolamentata",
    intervention: "Analisi legale + azione coordinata con studio estero",
    outcome: "Recupero di circa il 60% in 14 mesi",
    percentage: 60,
  },
  {
    profile: "Dipendente, 39 anni, Centro Italia",
    problem: "Truffa crypto da 35.000€ tramite finto \"fondo di investimento\"",
    intervention: "Mappatura transazioni on-chain, blocco parziale dei flussi, negoziazione con intermediari",
    outcome: "Recupero di una parte degli asset e ristrutturazione del debito residuo",
    percentage: 40,
  },
  {
    profile: "Libero professionista, 52 anni, Sud Italia",
    problem: "Schema Ponzi mascherato da trading forex, 95.000€ investiti",
    intervention: "Denuncia coordinata, sequestro preventivo, costituzione parte civile",
    outcome: "Recupero parziale tramite procedura fallimentare, circa 45%",
    percentage: 45,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-card section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Casi reali, risultati concreti
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-background p-6 border border-border border-l-4 border-l-primary hover:shadow-elegant-lg transition-all duration-300"
            >
              {/* Profile */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className="w-10 h-10 bg-muted flex items-center justify-center">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{study.profile}</p>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Problema</span>
                  </div>
                  <p className="text-sm text-foreground">{study.problem}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    <Clock className="w-3 h-3" />
                    <span>Intervento</span>
                  </div>
                  <p className="text-sm text-foreground">{study.intervention}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Esito</span>
                  </div>
                  <p className="text-sm font-medium text-success">{study.outcome}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-muted-foreground uppercase tracking-wider">Tasso di recupero</span>
                  <span className="font-semibold text-foreground">{study.percentage}%</span>
                </div>
                <div className="h-1 bg-muted overflow-hidden">
                  <div
                    className="h-full bg-success transition-all duration-1000"
                    style={{ width: `${study.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 max-w-3xl mx-auto">
          <p className="text-sm text-center text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Nota importante:</strong> Ogni caso è diverso. 
            I risultati passati non sono garanzia di risultati futuri. Prima di qualsiasi 
            decisione valutiamo insieme rischi, limiti e scenari possibili.
          </p>
        </div>
      </div>
    </section>
  );
}
