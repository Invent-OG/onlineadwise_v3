import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const CalendarSection = () => {
  return (
    <section id="calendar" className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title text-foreground">
            Select Your{" "}
            <span className="text-gradient-gold">Preferred Time Slot</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Our calendar updates in real-time. Simply choose a date and time
            that works best for you, and you'll receive an instant confirmation
            with all the details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card gold-glow-intense rounded-2xl p-2 md:p-4 overflow-hidden"
          style={{ border: "2px solid hsl(45, 100%, 50%)" }}
        >
          <iframe
            src="https://calendar.app.google/txxeScPEvU6njWmw5"
            title="OnlineAdwise Booking Calendar"
            className="w-full rounded-xl"
            style={{
              minHeight: "600px",
              border: "none",
              background: "hsl(0, 0%, 8%)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-6 text-muted-foreground"
        >
          <Clock className="w-4 h-4 text-primary" />
          <p className="text-sm">
            All times are displayed in your local timezone. Sessions are
            conducted via Google Meet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CalendarSection;
