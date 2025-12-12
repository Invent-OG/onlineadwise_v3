import { Zap, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-16 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Performance-driven digital marketing consultation designed for business owners who want results, not random campaigns.
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
            <ul className="space-y-2">
              {["About", "NAREN Method™", "Video Packs", "Packages", "Contact"].map((link) => (
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

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@onlineadwise.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contact@onlineadwise.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Digital Marketing Worldwide
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
