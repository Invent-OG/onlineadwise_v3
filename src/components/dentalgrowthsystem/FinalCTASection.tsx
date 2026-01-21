import { Button } from "@/components/ui/button";
import { ArrowRight, Star, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-card py-20 lg:py-28">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="section-container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
          >
            Ready to Stop Guessing and{" "}
            <span className="text-primary">Start Growing?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Join 50+ dental practices using the NAREN Method to predictably fill
            their schedules with high-value patients.
          </motion.p>

          {/* Testimonial */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl rounded-2xl border border-primary/30 bg-primary/10 p-6"
          >
            <div className="mb-3 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="mb-4 text-lg italic text-foreground">
              "Before NAREN, we were flying blind. Now we have a system that
              consistently brings in 25-30 new patients every month."
            </p>
            <footer className="font-semibold text-primary">
              — Dr. James Rodriguez, Pediatric Dentist
            </footer>
          </motion.blockquote>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <p className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Choose Your Next Step:
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="xl"
                className="group w-full sm:w-auto"
              >
                Get Your Free NAREN Scorecard
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="xl"
                className="w-full sm:w-auto"
              >
                Book a 15-Minute Strategy Call
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Takes 2 minutes. Instant results.
            </p>
          </motion.div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-foreground"
          >
            <AlertTriangle className="h-4 w-4 text-primary" />
            <span>
              LIMITED AVAILABILITY: We cap our client roster at 25 active
              practices.
            </span>
            <span className="font-bold text-primary">2 spots available</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
