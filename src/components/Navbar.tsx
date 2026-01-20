import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import {
  Menu,
  MenuItem,
  ProductItem,
  HoveredLink,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkHref = (href: string) => {
    if (href.startsWith("/")) return href;
    return isHome ? href : `/${href}`;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-4 shadow-lg shadow-black/5"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <Logo />
        </div>

        {/* Desktop Navigation - Aceternity Menu */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
          <Menu setActive={setActive}>
            <Link
              to={getLinkHref("#about")}
              className="text-foreground/80 hover:text-primary transition-colors cursor-pointer text-sm font-medium"
            >
              About
            </Link>
            <Link
              to={getLinkHref("#method")}
              className="text-foreground/80 hover:text-primary transition-colors cursor-pointer text-sm font-medium"
            >
              NAREN Method™
            </Link>

            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="text-sm grid grid-cols-2 gap-10 p-4 w-[500px]">
                <ProductItem
                  title="Meta Ads"
                  href="/services/meta-ads"
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  description="Scale your revenue with creative-first Facebook & Instagram strategies."
                />
                <ProductItem
                  title="Google Ads"
                  href="/services/google-ads"
                  src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  description="Capture high-intent leads with Search, YouTube, and Display campaigns."
                />
              </div>
            </MenuItem>

            <Link
              to={getLinkHref("#contact")}
              className="text-foreground/80 hover:text-primary transition-colors cursor-pointer text-sm font-medium"
            >
              Contact
            </Link>
          </Menu>
        </div>

        {/* Mobile Menu Toggle & CTA */}
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 glow-gold-sm hover:glow-gold transition-all duration-300">
            Get Started ⚡
          </Button>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-fade-in h-screen">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <Link
              to={getLinkHref("#about")}
              className="text-lg font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to={getLinkHref("#method")}
              className="text-lg font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              NAREN Method™
            </Link>

            <div className="flex flex-col gap-2">
              <span className="text-lg font-medium text-foreground text-primary/80">
                Services
              </span>
              <Link
                to="/services/meta-ads"
                className="pl-4 text-base text-muted-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meta Ads
              </Link>
              <Link
                to="/services/google-ads"
                className="pl-4 text-base text-muted-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Google Ads
              </Link>
            </div>

            <Link
              to={getLinkHref("#contact")}
              className="text-lg font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

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
