import { motion } from "framer-motion";
import { Calendar, MessageCircle, ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDAR_LINK = "https://calendar.app.google/eD4t7GPF2hUhJ7GA9";
const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=917065578055&text=Hi+Naren%2C%0AI+want+your+help+with+Performance+Marketing+for+my+business+as+you+are+a+Digital+Marketing+Expert+%E2%80%94+especially+with+Google+Ads.%21&type=phone_number&app_absent=0";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      {/* Animated Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
      />

      <div className="container-narrow px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="text-sm font-body text-primary">
              Ready to Scale?
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl  font-bold mb-6">
            Stop Guessing.
            <br />
            <span className="text-gradient-gold animate-glow">
              Start Scaling.
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-10">
            Get a personalized ad strategy backed by data, not assumptions. Book
            a free strategy call and discover how to turn your ad budget into
            predictable revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="xl" className="group min-w-[280px]">
                <Calendar className="h-5 w-5" />
                Book Free Strategy Call
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.a>

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="xl" className="min-w-[280px]">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </motion.a>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground font-body">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>30-minute strategy session</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Actionable insights guaranteed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
