import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Target, Users, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Chiarezza",
    description: "Diciamo le cose come stanno, senza giri di parole. Non vendiamo sogni, ma percorsi realistici.",
  },
  {
    icon: Shield,
    title: "Protezione",
    description: "Il nostro obiettivo primario è proteggere chi ha già subito un danno da ulteriori perdite.",
  },
  {
    icon: Heart,
    title: "Empatia",
    description: "Comprendiamo che dietro ogni caso c'è una persona, una famiglia, una storia da rispettare.",
  },
];

export default function Missione() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              La nostra missione: riportare struttura dove oggi c'è solo caos
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Ogni giorno, persone come te affrontano le conseguenze di scelte finanziarie 
              che non sono andate come speravano. Noi siamo qui per aiutarti a fare ordine.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aureon Asset Recovery nasce per dare alle vittime di truffe finanziarie un 
                percorso strutturato, non un'altra promessa.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Il nostro obiettivo è trasformare paura, vergogna e confusione in un piano 
                chiaro: capire cosa è successo, quali margini di intervento esistono e come 
                evitare di aggravare ulteriormente la situazione.
              </p>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Il nostro impegno sociale
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Crediamo che il supporto non debba essere solo economico. Una parte delle 
                      nostre attività è dedicata anche alla prevenzione e alla salute mentale: 
                      abbiamo già destinato <strong className="text-foreground">50.000€</strong> a 
                      centri che si occupano di supporto psicologico alle vittime di truffe 
                      finanziarie e, al raggiungimento di ulteriori 20 milioni di asset recuperati, 
                      ci impegniamo a destinare nuove risorse a progetti dedicati.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Non possiamo cancellare il passato, ma possiamo aiutarti a non affrontarlo 
                da solo e a prendere decisioni più consapevoli sul futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            I valori che ci guidano
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background rounded-2xl p-8 border border-border text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Vuoi saperne di più sul nostro approccio?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Scopri il metodo Aureon e come lavoriamo per aiutare le persone a 
            recuperare i propri asset.
          </p>
          <Link to="/metodo">
            <Button variant="gold" size="xl" className="group">
              Scopri il nostro metodo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
