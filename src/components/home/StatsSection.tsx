import { TrendingUp, Users, Globe, Filter } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "10M+",
    suffix: "€",
    label: "Valore complessivo degli asset recuperati o sbloccati",
  },
  {
    icon: Users,
    value: "1654",
    suffix: "",
    label: "Persone accompagnate in un percorso di recupero",
  },
  {
    icon: Globe,
    value: "12",
    suffix: "",
    label: "Paesi in cui abbiamo seguito casi di asset recovery",
  },
  {
    icon: Filter,
    value: "27",
    suffix: "%",
    label: "Percentuale dei casi che accettiamo dopo l'analisi iniziale",
  },
];

export function StatsSection() {
  return (
    <section className="bg-card section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            I numeri che raccontano il nostro lavoro
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-background p-6 text-center border-t-2 border-primary hover:shadow-elegant-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/5 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Non promettiamo risultati a chiunque. Analizziamo ogni situazione con criteri 
          oggettivi e lavoriamo solo sui casi in cui riteniamo di poter intervenire con serietà.
        </p>
      </div>
    </section>
  );
}
