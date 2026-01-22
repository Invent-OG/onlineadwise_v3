import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  headline: string;
  items: FAQItem[];
}

export function FAQSection({ headline, items }: FAQSectionProps) {
  return (
    <section className="py-20 md:py-32 relative section-glow">
      <div className="container-narrow px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16">
            {headline}
          </h2>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border/50 rounded-xl bg-card px-6 card-glow data-[state=open]:border-primary/30 data-[state=open]:glow-gold-sm"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 text-base md:text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
