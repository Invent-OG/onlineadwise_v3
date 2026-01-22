import { Play, ArrowRight, Zap, Mail, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NicheData } from "@/components/data/nicheData.ts";

interface VideoSectionProps {
  niche: NicheData;
}

const VideoSection = ({ niche }: VideoSectionProps) => {
  const calendarUrl = "https://calendar.app.google/MhdR6MKNu8SXgaUy5";

  const videos = [
    {
      title: niche.videoTopics.commercial.title,
      description: niche.videoTopics.commercial.description,
      type: "Commercial Template",
      duration: "30-60 sec",
    },
    {
      title: niche.videoTopics.explainer.title,
      description: niche.videoTopics.explainer.description,
      type: "Explainer Template",
      duration: "60-90 sec",
    },
    {
      title: niche.videoTopics.storytelling.title,
      description: niche.videoTopics.storytelling.description,
      type: "Storytelling Template",
      duration: "90-120 sec",
    },
  ];

  const customizations = [
    { icon: Palette, text: "Your Logo & Brand Colors" },
    { icon: Mail, text: "Your Email & Contact Info" },
    { icon: Zap, text: "Custom CTA at End or In-Between" },
  ];

  return (
    <section className="py-20 bg-background section-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="badge-gold mb-4">
            <Zap className="w-4 h-4" />
            Ready-Made Video Templates
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Whiteboard Videos for{" "}
            <span className="text-gradient">{niche.nichePlural}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            These are{" "}
            <span className="text-primary font-semibold">
              ready-made video templates
            </span>{" "}
            designed specifically for {niche.nichePlural}. We personalize each
            video with your{" "}
            <span className="text-foreground">
              logo, brand name, email, and CTA
            </span>{" "}
            at the end or in-between sections.
          </p>

          {/* Customization Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {customizations.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-foreground text-sm font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Video Placeholder */}
              <div className="video-placeholder group-hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                    <Play
                      className="w-7 h-7 text-primary-foreground ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {video.type}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium border border-border">
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {video.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {video.description}
                </p>

                {/* What We Add */}
                <div className="bg-secondary/50 rounded-lg p-4 mb-6 border border-border/50">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    We'll Add Your:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                      Logo
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                      Brand Name
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                      Email
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                      CTA
                    </span>
                  </div>
                </div>

                <Button asChild variant="gold" className="w-full">
                  <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get This Template
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-primary/30">
            <Zap className="w-5 h-5 text-primary" />
            <p className="text-foreground">
              <span className="font-semibold">Fast Delivery:</span> Your
              customized video ready in{" "}
              <span className="text-primary font-bold">24-48 hours</span> after
              receiving your brand assets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
