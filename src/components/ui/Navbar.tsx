import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./button";

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
    // { href: "#about", label: "About" },
    // { href: "#method", label: "NAREN Method™" },
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#tools", label: "Tools" },
    // { href: "#packages", label: "Packages" },
    // { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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
                        href="/google-ads"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        Google Ads
                      </a>
                      <a
                        href="/whiteboard-video"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        Whiteboard Video
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
            if (link.label === "Industries") {
              return (
                <div key={link.label} className="relative group">
                  <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1">
                    {link.label}
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2 flex flex-col gap-1">
                      <a
                        href="/industry"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        All Industries
                      </a>
                      <a
                        href="/medspa"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        MedSpa
                      </a>
                      <a
                        href="/dental-growth-system"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        Dental
                      </a>
                      <a
                        href="/industry/painters"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        Painters
                      </a>
                      <a
                        href="/industry/hvac"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        HVAC
                      </a>
                    </div>
                  </div>
                </div>
              );
            }
            if (link.label === "Tools") {
              return (
                <div key={link.label} className="relative group">
                  <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1">
                    {link.label}
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2 flex flex-col gap-1">
                      <a
                        href="/adplanner"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        Ad Planner
                      </a>
                      <a
                        href="/scorecard"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        Scorecard
                      </a>
                      <a
                        href="/booking"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        Booking
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
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold-sm hover:glow-gold transition-all duration-300 gap-2">
            Get Started <Zap className="w-4 h-4 fill-current" />
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div key={link.label} className="flex flex-col gap-2">
                    <span className="text-lg font-medium text-foreground">
                      {link.label}
                    </span>
                    <a
                      href="/meta-ads"
                      className="pl-4 text-muted-foreground hover:text-primary transition-colors block py-1"
                    >
                      Meta Ads
                    </a>
                    <a
                      href="/google-ads"
                      className="pl-4 text-muted-foreground hover:text-primary transition-colors block py-1"
                    >
                      Google Ads
                    </a>
                    <a
                      href="/whiteboard-video"
                      className="pl-4 text-muted-foreground hover:text-primary transition-colors block py-1"
                    >
                      Whiteboard Video
                    </a>
                  </div>
                );
              }
              if (link.label === "Industries") {
                return (
                  <div key={link.label} className="flex flex-col gap-2">
                    <span className="text-lg font-medium text-foreground">
                      {link.label}
                    </span>
                    <a
                      href="/industry"
                      className="pl-4 text-muted-foreground hover:text-primary transition-colors block py-1"
                    >
                      All Industries
                    </a>
                    <a
                      href="/medspa"
                      className="pl-4 text-muted-foreground hover:text-primary transition-colors block py-1"
                    >
                      MedSpa
                    </a>
                    <a
                      href="/dental-growth-system"
                      className="pl-4 text-muted-foreground hover:text-primary transition-colors block py-1"
                    >
                      Dental
                    </a>
                  </div>
                );
              }
              if (link.label === "Tools") {
                return (
                  <div key={link.label} className="flex flex-col gap-2">
                    <span className="text-lg font-medium text-foreground">
                      {link.label}
                    </span>
                    <a
                      href="/adplanner"
                      className="pl-4 text-muted-foreground hover:text-primary transition-colors block py-1"
                    >
                      Ad Planner
                    </a>
                    <a
                      href="/scorecard"
                      className="pl-4 text-muted-foreground hover:text-primary transition-colors block py-1"
                    >
                      Scorecard
                    </a>
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <Button className="w-full bg-primary text-primary-foreground mt-4 py-6">
              Get Started ⚡
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
