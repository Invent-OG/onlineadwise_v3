import { Calendar, MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const FloatingWidgets = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const calendarUrl = "https://calendar.app.google/MhdR6MKNu8SXgaUy5";
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917065578055&text=Hi+Naren%2C%0AI+want+your+help+with+Performance+Marketing+for+my+business+as+you+are+a+Digital+Marketing+Expert+%E2%80%94+especially+with+Google+Ads.%21&type=phone_number&app_absent=0";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-2 w-72 rounded-2xl border border-white/10 bg-black/60 p-1 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <span className="text-sm font-medium text-white/90">
                Concierge
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-2 flex flex-col gap-1">
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl p-3 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    Book Strategy Call
                  </div>
                  <div className="text-xs text-white/50">
                    Schedule a meeting
                  </div>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl p-3 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-black transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#25D366] transition-colors">
                    WhatsApp Chat
                  </div>
                  <div className="text-xs text-white/50">Instant support</div>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-500 ${
          isOpen
            ? "bg-black/80 text-white border border-white/10 rotate-90"
            : "bg-primary text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="h-6 w-6 fill-current" />
            <span className="absolute -right-1 -top-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
            </span>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingWidgets;
