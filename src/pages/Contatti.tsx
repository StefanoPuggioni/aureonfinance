import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fraudTypes = [
  { value: "crypto", label: "Truffa crypto / piattaforma exchange" },
  { value: "trading", label: "Piattaforma trading non regolamentata" },
  { value: "ponzi", label: "Schema Ponzi / piramide" },
  { value: "forex", label: "Forex / opzioni binarie" },
  { value: "investment", label: "Finto fondo di investimento" },
  { value: "other", label: "Altro" },
];

export default function Contatti() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Richiesta inviata!",
      description: "Ti contatteremo entro 24 ore lavorative.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-success" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Richiesta inviata con successo
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Grazie per averci contattato. Un nostro operatore analizzerà la tua 
                richiesta e ti contatterà entro 24 ore lavorative per una prima 
                valutazione gratuita.
              </p>
              <Button
                variant="gold"
                onClick={() => setIsSubmitted(false)}
              >
                Invia un'altra richiesta
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Parla con un operatore e raccontaci il tuo caso
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Ogni situazione è unica. Compila il modulo qui sotto e un nostro 
              operatore ti contatterà per una prima valutazione, senza impegno.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome e cognome *</Label>
                      <Input
                        id="name"
                        placeholder="Il tuo nome completo"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="La tua email"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefono *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+39 XXX XXX XXXX"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Paese di residenza *</Label>
                      <Input
                        id="country"
                        placeholder="Es. Italia"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Importo indicativo della perdita *</Label>
                      <Input
                        id="amount"
                        placeholder="Es. 50.000€"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fraudType">Tipo di truffa *</Label>
                      <Select required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Seleziona un'opzione" />
                        </SelectTrigger>
                        <SelectContent>
                          {fraudTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Raccontaci cosa è successo *</Label>
                    <Textarea
                      id="message"
                      placeholder="Descrivi brevemente la tua situazione: quando è successo, quali piattaforme o persone erano coinvolte, quali passi hai già fatto..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="privacy" required className="mt-1" />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      Accetto la{" "}
                      <a href="#" className="text-primary underline hover:no-underline">
                        Privacy Policy
                      </a>{" "}
                      e acconsento al trattamento dei miei dati personali per la 
                      gestione della mia richiesta. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Invio in corso..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Invia la richiesta
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  Preferisci parlare subito?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefono</p>
                      <p className="font-medium text-foreground">+39 02 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">info@aureonassetrecovery.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Orari</p>
                      <p className="font-medium text-foreground">Lun-Ven: 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Prima valutazione gratuita
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  La prima analisi del tuo caso è sempre gratuita e senza impegno. 
                  Ti diremo con chiarezza se e come possiamo aiutarti, prima di 
                  qualsiasi decisione da parte tua.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-3">
                  Cosa succede dopo l'invio?
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">1</span>
                    <span>Ricevi una conferma via email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">2</span>
                    <span>Un operatore analizza la tua richiesta</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">3</span>
                    <span>Ti contattiamo entro 24h lavorative</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
