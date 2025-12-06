import { Shield, Wallet, LineChart } from "lucide-react";

const usageOptions = [
  {
    icon: Shield,
    title: "Stabilizzare",
    description: "Una parte può essere destinata a soluzioni orientate alla stabilità, piani di rientro graduale e riserve di liquidità più sicure.",
  },
  {
    icon: Wallet,
    title: "Tornare a usarli nella vita reale",
    description: "Alcuni strumenti possono essere utilizzati come credito o valore in ecosistemi di servizi selezionati, ridando utilità concreta a quello che sembrava definitivamente perso.",
  },
  {
    icon: LineChart,
    title: "Progettare il futuro con più consapevolezza",
    description: "Per i profili adatti, è possibile valutare percorsi di rendimento strutturati e monitorati, con una gestione del rischio chiara e trasparente.",
  },
];

export function RecoveryUsageSection() {
  return (
    <section className="bg-card section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Come puoi usare gli importi recuperati e gli asset assegnati
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {usageOptions.map((option, index) => (
            <div
              key={option.title}
              className="bg-background p-8 border-t-2 border-accent hover:shadow-elegant-lg transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <option.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {option.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
