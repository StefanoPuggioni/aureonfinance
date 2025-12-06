import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <div className="text-8xl font-bold text-primary/10 mb-4">404</div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pagina non trovata
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              La pagina che stai cercando non esiste o è stata spostata. 
              Torna alla home per continuare la navigazione.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="gold" size="lg">
                  <Home className="w-4 h-4 mr-2" />
                  Torna alla home
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Torna indietro
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
