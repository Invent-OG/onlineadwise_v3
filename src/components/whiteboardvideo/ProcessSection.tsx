import { FileText, Palette, Film, Rocket, Check, Zap } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Choose Your Template",
      description:
        "Select from our ready-made whiteboard video templates designed for your industry.",
      day: "Step 1",
    },
    {
      icon: Palette,
      title: "Send Brand Assets",
      description:
        "Share your logo, brand name, email, and preferred CTA message with us.",
      day: "Step 2",
    },
    {
      icon: Film,
      title: "We Customize",
      description:
        "Our team adds your branding to the video template at the end or in-between sections.",
      day: "Step 3",
    },
    {
      icon: Rocket,
      title: "Receive & Launch",
      description:
        "Get your personalized video in 24-48 hours. Ready for ads, website, and social media!",
      day: "Step 4",
    },
  ];

  return (
    <section className="py-20 bg-card section-pattern">
      <div className="container-narrow px-4">
        <div className="text-center mb-16">
          <span className="badge-gold mb-4">
            <Zap className="w-4 h-4" />
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your <span className="text-gradient">Personalized Video</span> in 4
            Easy Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your ready-made video template customized with your brand in as
            little as 24-48 hours
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border border-border hover:border-primary/50">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full gold-gradient text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/30">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Day Badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-3 border border-border">
                    {step.day}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Customize */}
        <div className="mt-16 bg-background rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            What We Add to Your{" "}
            <span className="text-primary">Video Template</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Your Company Logo",
              "Brand Name & Colors",
              "Email Address",
              "Phone Number",
              "Custom CTA Message",
              "Website URL",
              "Social Media Handles",
              "Special Offers/Discounts",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
