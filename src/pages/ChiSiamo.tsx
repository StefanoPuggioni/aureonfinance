import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, Award, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Trasparenza",
    description: "Diciamo cosa possiamo fare e cosa non possiamo fare, prima che tu prenda qualsiasi decisione.",
  },
  {
    icon: Award,
    title: "Competenza",
    description: "Lavoriamo con professionisti specializzati in ambiti legali e finanziari complessi, in più giurisdizioni.",
  },
  {
    icon: Heart,
    title: "Responsabilità",
    description: "Sappiamo che dietro ogni caso c'è una storia personale. Per questo preferiamo rinunciare a un incarico piuttosto che alimentare false speranze.",
  },
];

const team = [
  {
    name: "Marco Bianchi",
    role: "Responsabile Legale",
    bio: "Avvocato con oltre 15 anni di esperienza in diritto finanziario e contenziosi internazionali. Ha seguito casi di recupero asset in 8 diverse giurisdizioni.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Laura Rossi",
    role: "Responsabile Analisi Tecnica",
    bio: "Esperta in blockchain forensics e tracciamento transazioni crypto. Background in cybersecurity e collaborazioni con forze dell'ordine.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Andrea Conti",
    role: "Responsabile Relazioni Clienti",
    bio: "Specializzato in gestione di casi complessi e comunicazione con i clienti. Formazione in psicologia e mediazione dei conflitti.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Giulia Martini",
    role: "Responsabile Operativo",
    bio: "Coordina le attività del team e supervisiona l'avanzamento dei casi. Esperienza decennale in project management in ambito finanziario.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

export default function ChiSiamo() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Chi c'è dietro Aureon Asset Recovery
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Un team di professionisti uniti da un obiettivo comune: dare alle vittime 
              di truffe finanziarie un percorso serio, trasparente e sostenibile.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              La nostra visione
            </h2>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Siamo un gruppo di professionisti con esperienza in ambito legale, 
                finanziario e tecnologico.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Abbiamo visto da vicino l'impatto delle truffe finanziarie e crypto 
                sulla vita delle persone e abbiamo scelto di creare una struttura che 
                unisse competenze diverse con un unico obiettivo: dare alle vittime un 
                percorso serio, trasparente e sostenibile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Il nostro team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-background rounded-2xl overflow-hidden border border-border group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            I nostri valori
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 border border-border text-center"
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
      <section className="bg-card section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Vuoi conoscerci meglio?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Prenota una consulenza e parla direttamente con uno dei nostri esperti.
          </p>
          <Link to="/contatti">
            <Button variant="gold" size="xl" className="group">
              Contattaci
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
