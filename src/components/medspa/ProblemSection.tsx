import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingDown, TrendingUp, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [chartProgress, setChartProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setChartProgress(100), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Erratic referral data
  const referralData = [30, 65, 25, 80, 40, 55, 20, 70, 35, 50, 28, 60];
  // Steady system-based growth
  const systemData = [30, 38, 45, 52, 58, 64, 70, 76, 82, 88, 94, 100];

  return (
    <section
      ref={ref}
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 section-gradient" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-destructive text-sm font-medium">
              The Problem
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Your Med Spa Shouldn't Rely on{" "}
            <span className="text-destructive">Referrals and Hope</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most med spas have the same problem:{" "}
              <strong className="text-foreground">
                inconsistent booking flow
              </strong>
              .
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Some months you're slammed. Other months you're scrambling to fill
              gaps. You're running occasional social posts, maybe some Google
              Ads, hoping something sticks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              But you{" "}
              <strong className="text-foreground">
                can't scale a business on hope
              </strong>
              .
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              You need a system. A predictable way to generate qualified
              appointments — people who are ready to book, not just browsing.
              People who understand your pricing, trust your expertise, and show
              up.
            </p>
            <p className="text-xl text-gold font-semibold">
              That's what we do. We build acquisition systems that turn ad spend
              into predictable revenue.
            </p>
          </motion.div>

          {/* Right - Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border/50"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-heading font-bold text-lg text-foreground">
                Revenue Comparison (12 months)
              </h3>
            </div>

            {/* Chart */}
            <div className="relative h-64 mb-6">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-muted-foreground">
                <span>$100K</span>
                <span>$75K</span>
                <span>$50K</span>
                <span>$25K</span>
                <span>$0</span>
              </div>

              {/* Chart area */}
              <div className="ml-14 h-full relative">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-b border-border/30" />
                  ))}
                </div>

                {/* Referral Line (Erratic) */}
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <motion.polyline
                    fill="none"
                    stroke="hsl(var(--destructive))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={referralData
                      .map((val, i) => `${(i / 11) * 100}%,${100 - val}%`)
                      .join(" ")}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? { pathLength: chartProgress / 100, opacity: 1 }
                        : {}
                    }
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>

                {/* System Line (Steady Growth) */}
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <motion.polyline
                    fill="none"
                    stroke="hsl(var(--gold))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={systemData
                      .map((val, i) => `${(i / 11) * 100}%,${100 - val}%`)
                      .join(" ")}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? { pathLength: chartProgress / 100, opacity: 1 }
                        : {}
                    }
                    transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                  />
                </svg>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <TrendingDown className="w-4 h-4 text-destructive" />
                  <div className="w-8 h-1 bg-destructive rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground">
                  Referral-Based Revenue
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-gold" />
                  <div className="w-8 h-1 bg-gold rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground">
                  System-Based Revenue
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
