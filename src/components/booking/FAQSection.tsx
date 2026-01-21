import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long is the consultation?",
    answer:
      "Each session is 30 minutes — enough time to understand your needs and provide valuable insights without taking up your entire day.",
  },
  {
    question: "Is this really free?",
    answer:
      "Absolutely! We believe in providing value upfront. There's no obligation to work with us afterward.",
  },
  {
    question: "What if I need to reschedule?",
    answer:
      "No problem! You can reschedule or cancel up to 24 hours before your appointment through the confirmation email.",
  },
  {
    question: "What platform do you use?",
    answer:
      "We conduct all consultations via Google Meet. You'll receive a link in your confirmation email.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "Just bring your questions and goals! We'll guide the conversation and make it as valuable as possible for you.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-foreground">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl border-none px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline py-5 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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
