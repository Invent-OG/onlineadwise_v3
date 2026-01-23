import { Quote, Star, MessageSquare } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "The NAREN Method changed our revenue pattern completely. Our leads doubled in 18 days.",
      name: "Dr. Andrew",
      role: "Dentist (USA)",
      rating: 5,
    },
    {
      quote:
        "Our Google Ads were dead. After Narender fixed tracking + GHL, we finally get consistent calls daily.",
      name: "Rajan",
      role: "Plumbing Service (UK)",
      rating: 5,
    },
    {
      quote:
        "The video templates with US voiceover alone gave us more trust and better conversions than anything before.",
      name: "Mason",
      role: "Roofing Business (USA)",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 inline-flex items-center gap-2">
            <Star className="w-4 h-4 fill-primary" /> Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-4">
            <span className="text-foreground">Client </span>
            <span className="">Success Stories</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/50 p-8 transition-all duration-500 hover:glow-gold-sm"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center glow-gold-sm">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-foreground mb-6 leading-relaxed italic relative">
                <MessageSquare className="w-4 h-4 text-primary/40 inline mr-2 -mt-1" />
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className=" font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
