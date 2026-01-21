import { XCircle } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  "You're spending $3,000-$10,000/month on Facebook and Google Ads but can't tell which campaigns actually bring in patients",
  'Your phone rings, but most leads are price-shoppers, insurance-hunting, or "just browsing" – not serious patients',
  "You've tried 2-3 agencies before, but they overpromised and underdelivered—leaving you with fancy reports and empty chairs",
  "Your tracking is broken. You don't know if your ads drive calls, form fills, or actual appointments that show up",
  "You're stuck doing $40K-$80K/month and can't break through to consistent six-figure growth",
  'You have no system—just random "optimizations" that might work this month but fail the next',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="section-container">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              You're Not Alone. Most Dental Practices Face These{" "}
              <span className="text-primary">Same Challenges</span>:
            </h2>
          </motion.div>

          {/* Problem List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 grid gap-4 md:gap-5"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex items-start gap-4 rounded-xl border border-destructive/30 bg-destructive/10 p-5 transition-all duration-300 hover:border-destructive/50 hover:bg-destructive/15"
              >
                <XCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-destructive" />
                <p className="text-base text-foreground/90 sm:text-lg">
                  {problem}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Transition Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-primary/20 bg-secondary p-8 text-center lg:p-10"
          >
            <p className="mb-4 text-lg text-muted-foreground sm:text-xl">
              <strong className="text-foreground">Here's the truth:</strong>{" "}
              It's not your fault. Most agencies treat dental practices like
              every other business—but dentistry requires specialized
              positioning, tracking, and patient acquisition strategies.
            </p>
            <p className="text-xl font-semibold text-primary sm:text-2xl">
              That's where the NAREN Method comes in.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
