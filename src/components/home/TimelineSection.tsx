import { MessageSquare, Search, FileCheck, Send, Activity, Trophy } from "lucide-react";

const timelineSteps = [
  {
    icon: MessageSquare,
    step: 1,
    title: "Richiesta di contatto",
    description: "Compili il form o prenoti una call per raccontarci cosa è successo.",
  },
  {
    icon: Search,
    step: 2,
    title: "Prima valutazione gratuita",
    description: "Un nostro operatore analizza il tuo caso a livello preliminare e ti spiega se ha senso approfondire.",
  },
  {
    icon: FileCheck,
    step: 3,
    title: "Analisi approfondita",
    description: "Se il caso rientra nei nostri criteri, il team legale e tecnico effettua una valutazione strutturata.",
  },
  {
    icon: Send,
    step: 4,
    title: "Proposta di intervento",
    description: "Ricevi una proposta chiara, con cosa possiamo fare, cosa non possiamo fare e quali sono i possibili esiti.",
  },
  {
    icon: Activity,
    step: 5,
    title: "Attivazione e monitoraggio",
    description: "Se accetti, avviamo il percorso di asset recovery e ti aggiorniamo con report periodici.",
  },
  {
    icon: Trophy,
    step: 6,
    title: "Esito e percorsi successivi",
    description: "In base ai risultati ottenuti, ti aiutiamo a gestire al meglio gli importi recuperati.",
  },
];

export function TimelineSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Come funziona il percorso con Aureon, passo dopo passo
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-6 gap-4">
            {timelineSteps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Dot */}
                <div className="relative z-10 w-full flex justify-center mb-6">
                  <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-elegant">
                    {item.step}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent mb-3">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {timelineSteps.map((item, index) => (
            <div key={item.step} className="relative flex gap-4">
              {/* Line */}
              {index < timelineSteps.length - 1 && (
                <div className="absolute left-5 top-12 w-0.5 h-full bg-border" />
              )}
              
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-elegant">
                  {item.step}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="bg-card p-5 border-l-2 border-primary">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
