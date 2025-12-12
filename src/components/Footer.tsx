import { Zap, Mail, Phone, MapPin, ArrowUp, Globe } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    "Home",
    "About",
    "Services",
    "Work",
    "Testimonials",
    "Packages",
    "Contact",
    "Store",
  ];

  const niches = [
    "🦷 Dentist",
    "💆 Chiropractor",
    "🎨 Painter",
    "🐜 Pest Control",
    "🧼 Carpet Cleaner",
    "💪 Physical Therapist",
    "🏠 Roofer",
    "⚖ Lawyer",
    "🔧 Plumber",
    "⚡ Electrician",
    "❄ HVAC",
    "🧾 Bookkeeper",
  ];

  const tools = ["Meta", "Google", "GHL", "Zapier", "Make", "N8n", "GA4", "GTM", "Calendars"];

  return (
    <footer id="contact" className="py-16 border-t border-border/50 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-noise opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Growth & Paid Ads Consultation powered by The NAREN Method™
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Smarter Decisions. Stronger Funnels.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/[™\s]/g, "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Niches We Serve */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Niches We Serve</h4>
            <div className="flex flex-wrap gap-1">
              {niches.map((niche) => (
                <span key={niche} className="text-xs text-muted-foreground">
                  {niche}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <h5 className="text-sm font-medium text-foreground mb-2">Tools We Use</h5>
              <div className="flex flex-wrap gap-1">
                {tools.map((tool) => (
                  <span key={tool} className="px-2 py-0.5 rounded bg-primary/10 text-xs text-primary">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:info.onlineadwise@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                info.onlineadwise@gmail.com
              </a>
              <a
                href="tel:+917065578055"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +91-7065578055
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Globe className="w-4 h-4" />
                Global Clients (USA, UK, Canada, Australia, UAE)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Online Adwise™. All rights reserved. Powered by The NAREN Method™
          </p>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
