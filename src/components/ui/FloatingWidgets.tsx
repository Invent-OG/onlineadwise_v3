import { Calendar, MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const FloatingWidgets = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const calendarUrl = "https://calendar.app.google/MhdR6MKNu8SXgaUy5";
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917065578055&text=Hi+Naren%2C%0AI+want+your+help+with+Performance+Marketing+for+my+business+as+you+are+a+Digital+Marketing+Expert+%E2%80%94+especially+with+Google+Ads.%21&type=phone_number&app_absent=0";

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-card border border-border p-4 rounded-xl shadow-2xl mb-2 max-w-[300px] relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center border border-border hover:bg-destructive hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm text-foreground font-medium mb-3">
              Ready to scale your business with video?
            </p>
            <Button asChild size="sm" className="w-full mb-2" variant="gold">
              <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Book Strategy Call
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="w-full hover:bg-success/10 hover:text-success hover:border-success/30"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            size="icon"
            className="h-14 w-14 rounded-full shadow-lg shadow-primary/25 gold-gradient text-primary-foreground"
          >
            <Calendar className="w-6 h-6" />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default FloatingWidgets;
