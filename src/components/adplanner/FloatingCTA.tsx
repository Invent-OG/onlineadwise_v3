import { motion } from "framer-motion";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDAR_LINK = "https://calendar.app.google/eD4t7GPF2hUhJ7GA9";
const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=917065578055&text=Hi+Naren%2C%0AI+want+your+help+with+Performance+Marketing+for+my+business+as+you+are+a+Digital+Marketing+Expert+%E2%80%94+especially+with+Google+Ads.%21&type=phone_number&app_absent=0";

export const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-6 bottom-6 z-50 flex flex-col gap-3"
    >
      {/* WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
        <Button
          size="icon"
          className="relative h-14 w-14 rounded-full"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-primary/30">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Book a Call Button */}
      <motion.a
        href={CALENDAR_LINK}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative"
      >
        <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity animate-pulse" />
        <Button
          size="icon"
          className="relative h-14 w-14 rounded-full"
        >
          <Phone className="h-6 w-6" />
        </Button>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-primary/30">
          Book a Call
        </span>
      </motion.a>
    </motion.div>
  );
};
