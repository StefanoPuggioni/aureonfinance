import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Posso davvero recuperare i soldi persi?",
    answer: "Non esiste una risposta unica. In alcuni casi è possibile recuperare una parte degli importi, in altri l'intervento è molto complesso o non realistico. Per questo partiamo sempre da una valutazione preliminare del tuo caso.",
  },
  {
    question: "Quanto costa il vostro servizio?",
    answer: "La prima valutazione è gratuita. Eventuali costi o premi di ingresso vengono spiegati in modo chiaro nella proposta, solo dopo l'analisi del caso. Non applichiamo costi nascosti.",
  },
  {
    question: "In quanto tempo posso avere un risultato?",
    answer: "Dipende dalla complessità del caso, dalla giurisdizione e dalle controparti coinvolte. Alcuni percorsi richiedono mesi, altri possono durare più a lungo. Nella proposta iniziale indichiamo sempre orizzonti temporali realistici.",
  },
  {
    question: "Cosa succede se non potete aiutarmi?",
    answer: "Se riteniamo che non ci siano reali margini di intervento, te lo diciamo in modo diretto. Preferiamo rinunciare a un cliente piuttosto che alimentare aspettative irrealistiche.",
  },
  {
    question: "Come gestite i miei dati e le informazioni sensibili?",
    answer: "Trattiamo i dati nel rispetto delle normative sulla privacy e li utilizziamo solo per analizzare il tuo caso e proporti, se possibile, un percorso di intervento. Tutti i dettagli sono indicati nella nostra Privacy Policy.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-card section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Domande frequenti
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-elegant"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
