import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long until I see results?",
    answer:
      "First bookings typically come within 7-14 days of launch. Meaningful volume (30+ bookings/month) takes 30-45 days as we test and optimize. By day 60-90, you should be at full capacity with our system running smoothly.",
  },
  {
    question: "What if I'm already running Facebook ads?",
    answer:
      "Great! We'll audit what you're doing, identify gaps, and build on what's working. Most med spas we take over from are running ads inefficiently — wrong targeting, weak creative, no tracking. We fix that.",
  },
  {
    question: "Do you work with multi-location med spas?",
    answer:
      "Absolutely. We've managed campaigns for med spas with 2-8 locations. Each location gets custom targeting and tracking.",
  },
  {
    question: "What if I'm in a small market?",
    answer:
      "We typically work with med spas in metro areas with 300K+ population. Smaller markets can work but may require wider geo-targeting or multi-service campaigns.",
  },
  {
    question: "Do I need to provide photos/videos?",
    answer:
      "Ideally, yes. We'll give you a creative brief for what we need (before/afters, testimonials, treatment shots). If you don't have content, we can connect you with our UGC creator network or local videographers.",
  },
  {
    question: "How involved do I need to be?",
    answer:
      "Minimal after setup. We need 1-2 hours in week 1 for onboarding, then 30 min/month for strategy calls. We handle everything else — ads, optimization, reporting.",
  },
  {
    question: "What's your contract length?",
    answer:
      "We prefer 6-month minimums because that's when compounding results really kick in. However, we do month-to-month with a 30-day cancellation notice.",
  },
  {
    question: "Can you guarantee X number of bookings?",
    answer:
      "We guarantee 25 qualified bookings in the first 60 days at or below $65 CPB, or month 3 is free. Beyond that, results scale based on ad spend, market, and your service quality (show-up rate, conversion rate).",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:border-gold/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-gold transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
