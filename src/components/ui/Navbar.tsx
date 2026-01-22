import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#tools", label: "Tools" },
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
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl border-b border-border flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="p-5 flex items-center justify-between border-b border-border/50">
              <Logo />
              <button
                className="p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {navLinks.map((link) => {
                if (link.label === "Services") {
                  return (
                    <div key={link.label} className="flex flex-col gap-3">
                      <span className="text-lg font-bold text-foreground">
                        {link.label}
                      </span>
                      <div className="pl-4 flex flex-col gap-3 border-l-2 border-primary/10">
                        <a
                          href="/meta-ads"
                          className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                          Meta Ads
                        </a>
                        <a
                          href="/google-ads"
                          className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                          Google Ads
                        </a>
                        <a
                          href="/whiteboard-video"
                          className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                          Whiteboard Video
                        </a>
                      </div>
                    </div>
                  );
                }
                if (link.label === "Industries") {
                  return (
                    <div key={link.label} className="flex flex-col gap-3">
                      <span className="text-lg font-bold text-foreground">
                        {link.label}
                      </span>
                      <div className="pl-4 flex flex-col gap-3 border-l-2 border-primary/10">
                        <a
                          href="/industry"
                          className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                          All Industries
                        </a>
                        <a
                          href="/medspa"
                          className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                          MedSpa
                        </a>
                        <a
                          href="/dental-growth-system"
                          className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                          Dental
                        </a>
                        <a
                          href="/industry/painters"
                          className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                          Painters
                        </a>
                        <a
                          href="/industry/hvac"
                          className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                          HVAC
                        </a>
                      </div>
                    </div>
                  );
                }
                if (link.label === "Tools") {
                  return (
                    <div key={link.label} className="flex flex-col gap-3">
                      <span className="text-lg font-bold text-foreground">
                        {link.label}
                      </span>
                      <div className="pl-4 flex flex-col gap-3 border-l-2 border-primary/10">
                        <a
                          href="/adplanner"
                          className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                          Ad Planner
                        </a>
                        <a
                          href="/scorecard"
                          className="text-muted-foreground hover:text-primary transition-colors text-base"
                        >
                          Scorecard
                        </a>
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              
              <div className="mt-auto pt-6">
                <Button className="w-full bg-primary text-primary-foreground py-6 text-lg font-bold shadow-lg shadow-primary/25">
                  Get Started ⚡
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
