import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How is this different from other agencies I've worked with?",
    answer:
      "Most agencies are order-takers. They run ads but don't build systems. The NAREN Method is a complete operating system—we don't just manage your ads, we give you predictable, scalable growth infrastructure that works whether we're involved or not. Plus, we specialize in service-based businesses like dentistry. We understand patient acquisition, LTV, and the metrics that actually matter.",
  },
  {
    question: "What if I'm already working with an agency?",
    answer:
      "That's exactly why we created the NAREN Audit. Many of our best clients came to us while working with another agency. The audit shows you (with data) whether your current setup is working or where the gaps are. If your agency is doing great, we'll tell you. If there are issues, you'll have a clear roadmap to fix them—whether with us or on your own.",
  },
  {
    question: "How much should I budget for ads on top of your fee?",
    answer:
      "We typically recommend a minimum of $3,000-$5,000/month in ad spend for the Implementation package to see meaningful results. For Partnership clients, $8,000-$15,000/month is ideal. The NAREN Audit can help you determine the right budget based on your market and goals.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most clients see improved lead quality within 30 days and measurable revenue growth by month 2-3. However, the NAREN Method is built for sustainable growth—not quick tricks that burn out. By month 6, you should have a fully systematized acquisition engine that runs predictably.",
  },
  {
    question: "Do I need to have ads running already?",
    answer:
      "No. We can start from scratch or audit/improve your existing campaigns. The NAREN Method works whether you're at $0 in ad spend or $50K/month.",
  },
  {
    question: "What platforms do you focus on?",
    answer:
      "Primarily Facebook and Google Ads, as they drive the best results for dental practices. We also work with YouTube Ads for certain specialties (e.g., cosmetic dentistry). GoHighLevel handles all your funnel, CRM, and automation needs.",
  },
  {
    question: "Can you guarantee specific results?",
    answer:
      "We don't make revenue guarantees—no ethical agency can. What we DO guarantee is full transparency, structured testing, and a documented system you can replicate and scale. We're confident enough in the NAREN Method that we offer performance bonuses in our Partnership tier.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Common Questions from Dental Practice Owners
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-md data-[state=open]:shadow-primary/5"
              >
                <AccordionTrigger className="py-5 text-left text-lg font-semibold text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="mb-4 text-muted-foreground">Still have questions?</p>
            <Button variant="outline" size="lg">
              Book a Call →
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
