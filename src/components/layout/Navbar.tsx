import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "La missione", href: "/missione" },
  { name: "Il metodo", href: "/metodo" },
  { name: "Chi siamo", href: "/chi-siamo" },
  { name: "Contatti", href: "/contatti" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top micro-bar */}
      <div className="bg-primary text-primary-foreground py-1.5 text-center text-xs font-medium tracking-wide">
        Aureon Asset Recovery · Asset Recovery & Financial Protection
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-elegant border-b border-border"
            : "bg-card border-b border-border"
        )}
      >
        <nav className="container-custom">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary flex items-center justify-center group-hover:bg-secondary transition-colors">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-semibold text-foreground leading-tight">
                  Aureon Asset Recovery
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block uppercase tracking-wider">
                  Soluzioni strutturate per vittime di truffe finanziarie
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, -1).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contatti">
                <Button variant="gold" size="default" className="ml-4">
                  Prenota una consulenza
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300",
              isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-1 pt-2 border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors border-l-2",
                    location.pathname === link.href
                      ? "text-primary border-primary bg-muted/50"
                      : "text-muted-foreground hover:text-foreground border-transparent hover:border-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contatti" className="mt-2">
                <Button variant="gold" className="w-full">
                  Prenota una consulenza
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
