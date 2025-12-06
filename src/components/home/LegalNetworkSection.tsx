import { Scale, Globe, Shield, Building2 } from "lucide-react";

const expertise = [
  { icon: Scale, text: "Diritto finanziario e bancario" },
  { icon: Shield, text: "Truffe online e piattaforme non regolamentate" },
  { icon: Globe, text: "Diritto internazionale e contenzioso transfrontaliero" },
  { icon: Building2, text: "Rapporti con autorità, intermediari e piattaforme" },
];

export function LegalNetworkSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Un network di studi legali e professionisti specializzati
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Aureon Asset Recovery collabora con studi legali specializzati in diritto 
              finanziario, crypto-asset e contenziosi internazionali. Per ogni caso 
              costruiamo un team su misura, in base alla giurisdizione coinvolta, 
              alla natura della truffa e alle controparti interessate.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-4 bg-card border-l-2 border-primary"
                >
                  <div className="w-10 h-10 bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden shadow-elegant-xl">
              <img
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Biblioteca legale professionale"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 shadow-elegant-lg hidden md:block">
              <p className="text-2xl font-serif font-bold">12+</p>
              <p className="text-sm text-primary-foreground/80">Giurisdizioni</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
