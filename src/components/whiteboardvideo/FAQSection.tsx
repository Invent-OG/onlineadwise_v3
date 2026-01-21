import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NicheData } from "@/components/data/nicheData.ts";


interface FAQSectionProps {
  niche: NicheData;
}

const FAQSection = ({ niche }: FAQSectionProps) => {
  const generalFAQs = [
    {
      question: "How long does video production take?",
      answer:
        "Standard turnaround is 7 business days for 3-video package. Rush delivery (3-5 days) available for +$297. Package 3 with 12 videos: first 3 in 7 days, then staggered production.",
    },
    {
      question: "What if I need changes to my videos?",
      answer:
        "All packages include 2 complete rounds of unlimited revisions. You can request any changes during each round. 95% of clients are satisfied within 2 rounds. Additional rounds: $97 each.",
    },
    {
      question: "Do I need to provide the script or ideas?",
      answer: `No! We create everything from scratch based on proven frameworks for ${niche.nichePlural}. However, if you have specific messaging you want included, we'll incorporate it.`,
    },
    {
      question: "Can I use the videos everywhere?",
      answer:
        "Yes! Full ownership and unlimited usage rights. Use on website, social media, paid ads, email, presentations—anywhere forever. No additional licensing fees.",
    },
    {
      question: "What makes your whiteboard videos better than DIY software?",
      answer: `DIY software has generic templates and limited customization. We create custom characters and scenarios specific to YOUR ${niche.niche} business. Professional voiceover, copywriting, and strategy included.`,
    },
    {
      question: "What ad budget do I need for advertising packages?",
      answer:
        "Package 2 includes up to $1,500 ad spend. Package 3 includes up to $3,000 across platforms. You can add more budget anytime. Recommended: $50-$100/day for best results.",
    },
    {
      question: "What kind of results can I realistically expect?",
      answer: `Results vary by market, but typical ranges: Video Only sees 40-60% higher engagement, Package 2 generates 25-50 leads/month at $${niche.typicalLeadCost} per lead, and Package 3 delivers 60-120 total leads over 90 days with 3-5x ROI.`,
    },
    {
      question: "What if I'm not happy with the videos or results?",
      answer:
        "Before production: Full refund minus $97 admin fee. During production: Unlimited revisions until satisfied. For advertising: 14-day satisfaction guarantee on management fees.",
    },
  ];

  const allFAQs = [...niche.faqItems, ...generalFAQs];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about whiteboard video marketing for{" "}
            {niche.nichePlural}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {allFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
