import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Calendar1, Calendar1Icon, Menu, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { Button } from "./button";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-0 left-0 right-0 py-3 lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-[95%] lg:max-w-5xl lg:rounded-full lg:py-3 lg:border lg:border-white/10 lg:bg-black/60 lg:backdrop-blur-xl lg:shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] bg-background/95 backdrop-blur-lg border-b border-border/50"
            : "top-0 left-0 right-0 py-5 bg-background/95 backdrop-blur-lg border-b border-border/50 lg:bg-transparent lg:border-none lg:backdrop-blur-none"
        }`}
      >
        <div
          className={`px-4 md:px-6 lg:px-8 mx-auto flex items-center justify-between ${isScrolled ? "w-full" : "container-narrow"}`}
        >
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-1.5 py-1.5 border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div key={link.label} className="relative group">
                    <button className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 flex items-center gap-1">
                      {link.label}
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-56 bg-[#0a0a0a]/90 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl overflow-hidden p-1.5">
                        <div className="flex flex-col gap-0.5">
                          <a
                            href="/meta-ads"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            Meta Ads
                          </a>
                          <a
                            href="/google-ads"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            Google Ads
                          </a>
                          <a
                            href="/whiteboard-video"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            Whiteboard Video
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (link.label === "Industries") {
                return (
                  <div key={link.label} className="relative group">
                    <button className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 flex items-center gap-1">
                      {link.label}
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-64 bg-[#0a0a0a]/90 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl overflow-hidden p-1.5">
                        <div className="flex flex-col gap-0.5">
                          <a
                            href="/industry"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            All Industries
                          </a>
                          <a
                            href="/medspa"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            MedSpa
                          </a>
                          <a
                            href="/dental-growth-system"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            Dental
                          </a>
                          <a
                            href="/industry/painters"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            Painters
                          </a>
                          <a
                            href="/industry/hvac"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            HVAC
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              if (link.label === "Tools") {
                return (
                  <div key={link.label} className="relative group">
                    <button className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 flex items-center gap-1">
                      {link.label}
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-48 bg-[#0a0a0a]/90 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl overflow-hidden p-1.5">
                        <div className="flex flex-col gap-0.5">
                          <a
                            href="/adplanner"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            Ad Planner
                          </a>
                          <a
                            href="/scorecard"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            Scorecard
                          </a>
                          <a
                            href="/booking"
                            className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:bg-primary hover:text-black rounded-xl transition-all"
                          >
                            Booking
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="rounded-full bg-primary text-black font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]"
              onClick={() => navigate("/booking")}
            >
              Book a call <Calendar className="w-5 h-5 ml-2 " />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 z-[40] bg-black/95 backdrop-blur-2xl flex flex-col pt-24 pb-10 px-6"
          >
            <div className="flex flex-col gap-6 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  {/* Simplified Mobile Logic - Expandable could be added here, but keeping it clean for modern look to list subparams */}
                  {["Services", "Industries", "Tools"].includes(link.label) ? (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-primary/80">
                        {link.label}
                      </h3>
                      <div className="grid grid-cols-1 gap-3 pl-4 border-l border-white/10">
                        {/* Repeat logic or refactor to shared data structure for DRY later. Hardcoding for safe replacement now */}
                        {link.label === "Services" && (
                          <>
                            <a
                              href="/meta-ads"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              Meta Ads
                            </a>
                            <a
                              href="/google-ads"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              Google Ads
                            </a>
                            <a
                              href="/whiteboard-video"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              Whiteboard Video
                            </a>
                          </>
                        )}
                        {link.label === "Industries" && (
                          <>
                            <a
                              href="/industry"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              All Industries
                            </a>
                            <a
                              href="/medspa"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              MedSpa
                            </a>
                            <a
                              href="/dental-growth-system"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              Dental
                            </a>
                            <a
                              href="/industry/painters"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              Painters
                            </a>
                            <a
                              href="/industry/hvac"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              HVAC
                            </a>
                          </>
                        )}
                        {link.label === "Tools" && (
                          <>
                            <a
                              href="/adplanner"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              Ad Planner
                            </a>
                            <a
                              href="/scorecard"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              Scorecard
                            </a>
                            <a
                              href="/booking"
                              className="text-lg text-white/70 hover:text-white"
                            >
                              Booking
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-3xl font-bold text-white hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto"
            >
              <Button
                className="w-full h-14 text-lg font-bold rounded-xl bg-primary text-black shadow-lg shadow-primary/20"
                onClick={() => navigate("/booking")}
              >
                Book a call <Calendar className="w-5 h-5 ml-2 " />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
