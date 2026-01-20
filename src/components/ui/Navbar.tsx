import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "react-day-picker";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#method", label: "NAREN Method™" },
    { href: "#services", label: "Services" },
    { href: "#videos", label: "Video Packs" },
    { href: "#packages", label: "Packages" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div key={link.label} className="relative group">
                  <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1">
                    {link.label}
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2 flex flex-col gap-1">
                      <a
                        href="/meta-ads"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        Meta Ads
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        Google Ads
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold-sm hover:glow-gold transition-all duration-300">
            Get Started ⚡
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key={link.label} className="flex flex-col gap-2">
                  <span className="text-lg font-medium text-foreground">
                    {link.label}
                  </span>
                  <a
                    href="/meta-ads"
                    className="pl-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Meta Ads
                  </a>
                  <a
                    href="#"
                    className="pl-4 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Google Ads
                  </a>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ),
            )}
            <Button className="w-full bg-primary text-primary-foreground mt-4">
              Get Started ⚡
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
