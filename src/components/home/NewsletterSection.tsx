import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !privacyAccepted) {
      toast({
        title: "Errore",
        description: "Inserisci un'email valida e accetta la privacy policy.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Iscrizione completata!",
      description: "Grazie per esserti iscritto alla nostra newsletter.",
    });
    
    setEmail("");
    setPrivacyAccepted(false);
    setIsSubmitting(false);
  };

  return (
    <section id="newsletter" className="section-padding">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary mb-6">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Resta aggiornato su truffe, regolamentazione e protezione del patrimonio
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-8">
            Una volta al mese ti inviamo una selezione di notizie, analisi e casi studio 
            per aiutarti a riconoscere i rischi e proteggere meglio i tuoi risparmi.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="La tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-card"
                required
              />
              <Button 
                type="submit" 
                variant="gold" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Iscrizione..."
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Iscriviti
                  </>
                )}
              </Button>
            </div>
            
            <div className="flex items-start justify-center gap-2">
              <Checkbox
                id="privacy"
                checked={privacyAccepted}
                onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                className="mt-0.5"
              />
              <label
                htmlFor="privacy"
                className="text-xs text-muted-foreground text-left cursor-pointer"
              >
                Accetto la{" "}
                <a href="#" className="text-primary underline hover:no-underline">
                  Privacy Policy
                </a>{" "}
                e acconsento al trattamento dei miei dati per l'invio della newsletter.
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
