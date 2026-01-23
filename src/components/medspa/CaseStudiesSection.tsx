import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Quote } from "lucide-react";

const caseStudies = [
  {
    name: "Luxury Aesthetics Med Spa",
    location: "Dallas, TX",
    services: "Botox, fillers, laser treatments, facials",
    startingPoint:
      "$85K/month revenue, referral-dependent, inconsistent bookings",
    whatWeDid: [
      "Built 3-tier Facebook/Instagram ad funnel",
      "Created 12 video testimonials + before/after ad creatives",
      "Installed full tracking (GA4, CAPI, call tracking)",
      "Tested 5 audience segments, 8 creative variants, 3 offers",
    ],
    results: [
      { label: "Bookings/Month", value: "72", change: "up from 28" },
      { label: "Cost Per Booking", value: "$42", change: "target was $50" },
      { label: "Monthly Revenue", value: "$187K", change: "+120%" },
      { label: "ROAS", value: "6.8:1", change: "with LTV tracking" },
    ],
    quote:
      "We went from praying the phone would ring to turning away bookings. Narender and his team didn't just run ads — they built us a machine.",
    author: "Sarah M., Owner",
  },
  {
    name: "Glow Skin Clinic",
    location: "Austin, TX",
    services: "Body contouring, skin rejuvenation, IV therapy",
    startingPoint: "$62K/month, heavy competition, struggling with ad ROI",
    whatWeDid: [
      "Complete ad account restructure",
      "Developed unique positioning around 'results guarantee'",
      "Built comprehensive retargeting sequences",
      "Implemented LTV-based optimization",
    ],
    results: [
      { label: "Bookings/Month", value: "58", change: "up from 19" },
      { label: "Cost Per Booking", value: "$38", change: "target was $55" },
      { label: "Monthly Revenue", value: "$142K", change: "+129%" },
      { label: "ROAS", value: "7.4:1", change: "with LTV tracking" },
    ],
    quote:
      "The structured testing approach completely changed how we think about marketing. Every dollar is now accountable.",
    author: "Dr. Emily R., Founder",
  },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="results"
      ref={ref}
      className="section-padding  bg-background relative overflow-hidden"
    >
      <div className="container-wide max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">
              Proven Results
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Real Med Spas,{" "}
            <span className="text-gradient-gold">Real Results</span>
          </h2>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="bg-card rounded-3xl shadow-xl border border-border/50 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Left - Info */}
                <div className="lg:col-span-2 p-8 lg:p-10 bg-secondary/30 border-b lg:border-b-0 lg:border-r border-border/30">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {study.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{study.location}</p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-gold text-sm font-medium mb-1">
                        Services
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {study.services}
                      </p>
                    </div>
                    <div>
                      <p className="text-gold text-sm font-medium mb-1">
                        Starting Point
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {study.startingPoint}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-gold text-sm font-medium mb-3">
                      What We Did
                    </p>
                    <ul className="space-y-2">
                      {study.whatWeDid.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-gold mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right - Results */}
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <h4 className="text-lg font-heading font-bold text-foreground mb-6">
                    Results (90 Days)
                  </h4>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {study.results.map((result, i) => (
                      <div
                        key={i}
                        className="bg-secondary/30 rounded-xl p-4 border border-border/30"
                      >
                        <p className="text-muted-foreground text-sm mb-1">
                          {result.label}
                        </p>
                        <p className="text-3xl font-heading font-bold text-foreground">
                          {result.value}
                        </p>
                        <p className="text-gold text-sm font-medium">
                          {result.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative bg-gold/5 rounded-xl p-6 border border-gold/20">
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-gold/30" />
                    <p className="text-foreground italic pl-8 mb-4">
                      "{study.quote}"
                    </p>
                    <p className="text-muted-foreground font-medium pl-8">
                      — {study.author}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
