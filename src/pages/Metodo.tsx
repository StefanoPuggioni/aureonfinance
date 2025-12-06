import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FileSearch, 
  Scale, 
  FileText, 
  BarChart3, 
  Shield,
  Phone,
  CheckCircle2
} from "lucide-react";

const phases = [
  {
    icon: FileSearch,
    phase: 1,
    title: "Raccolta e verifica delle informazioni",
    description: "Il primo passo è comprendere esattamente cosa è successo. Raccogliamo tutti i documenti disponibili, ricostruiamo la cronologia degli eventi e identifichiamo le controparti coinvolte.",
    details: [
      "Analisi della documentazione disponibile",
      "Mappatura dei flussi di denaro",
      "Identificazione delle piattaforme e intermediari",
      "Ricostruzione della timeline degli eventi",
    ],
  },
  {
    icon: Scale,
    phase: 2,
    title: "Analisi legale e tecnica",
    description: "Il nostro team di esperti valuta la situazione da più angolazioni: legale, tecnica e strategica. Questo ci permette di capire quali strade sono effettivamente percorribili.",
    details: [
      "Valutazione della giurisdizione competente",
      "Analisi delle possibilità di intervento legale",
      "Verifica tecnica delle transazioni (per crypto)",
      "Assessment del profilo di rischio",
    ],
  },
  {
    icon: FileText,
    phase: 3,
    title: "Strutturazione del piano di intervento",
    description: "Se il caso presenta margini di recuperabilità, elaboriamo una proposta dettagliata con scenari, tempistiche, costi e probabilità di successo.",
    details: [
      "Definizione degli obiettivi realistici",
      "Stima dei tempi di intervento",
      "Trasparenza totale su costi e commissioni",
      "Presentazione di scenari alternativi",
    ],
  },
  {
    icon: BarChart3,
    phase: 4,
    title: "Esecuzione, monitoraggio e reportistica",
    description: "Avviamo le azioni concordate e manteniamo un monitoraggio costante, fornendoti report periodici sull'avanzamento del tuo caso.",
    details: [
      "Implementazione del piano concordato",
      "Coordinamento con studi legali partner",
      "Report periodici sullo stato del caso",
      "Comunicazione proattiva su ogni sviluppo",
    ],
  },
  {
    icon: Shield,
    phase: 5,
    title: "Percorsi post-recupero e gestione del rischio",
    description: "Una volta ottenuti risultati, ti supportiamo nella gestione degli importi recuperati, aiutandoti a evitare di ripetere gli stessi errori.",
    details: [
      "Consulenza sulla gestione degli asset recuperati",
      "Educazione alla prevenzione delle truffe",
      "Supporto per scelte finanziarie più consapevoli",
      "Monitoraggio di eventuali rischi residui",
    ],
  },
];

export default function Metodo() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Il metodo Aureon Asset Recovery
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Ogni caso è diverso, ma il nostro approccio segue uno schema preciso, 
              pensato per non lasciare nulla al caso e garantire la massima trasparenza 
              in ogni fase del percorso.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className="relative mb-12 last:mb-0"
              >
                {/* Connector */}
                {index < phases.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-border hidden md:block" />
                )}
                
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="hidden md:flex flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-elegant relative z-10">
                      {phase.phase}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl p-6 md:p-8 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center md:hidden">
                        <span className="font-bold text-accent">{phase.phase}</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <phase.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {phase.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Vuoi capire se il tuo caso è adatto al nostro metodo?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Prenota una consulenza gratuita con un nostro esperto. Analizzeremo 
              insieme la tua situazione e ti diremo con chiarezza se e come possiamo aiutarti.
            </p>
            <Link to="/contatti">
              <Button variant="gold" size="xl">
                <Phone className="w-5 h-5 mr-2" />
                Prenota una consulenza con un esperto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
