import { AlertTriangle, Heart } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Un problema globale, con conseguenze reali sulle persone
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - Data */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Dati e contesto</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ogni anno milioni di euro vengono persi in truffe finanziarie, piattaforme 
                non regolamentate e schemi ad alto rischio.
              </p>
              <p>
                Molte vittime non denunciano per vergogna, senso di colpa o sfiducia nelle 
                istituzioni. Il risultato è un danno nascosto, che resta fuori dalle 
                statistiche ufficiali ma pesa sulle vite reali.
              </p>
            </div>

            <div className="mt-6 p-4 bg-destructive/5 rounded-lg border border-destructive/10">
              <p className="text-sm font-medium text-destructive">
                Solo in Italia, si stima che il danno annuo superi i 500 milioni di euro.
              </p>
            </div>
          </div>

          {/* Right column - Impact */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Impatto umano</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dietro ogni cifra ci sono famiglie, progetti sospesi, relazioni in crisi.
              </p>
              <p>
                Le conseguenze non sono solo economiche: stress, insonnia, ansia e in 
                alcuni casi veri e propri crolli emotivi.
              </p>
              <p className="font-medium text-foreground">
                Il primo passo non è "rientrare subito dei soldi persi", ma capire cosa 
                è successo, che margini di intervento esistono e come non peggiorare 
                ulteriormente la situazione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
