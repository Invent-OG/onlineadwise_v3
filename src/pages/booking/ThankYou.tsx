import { motion } from "framer-motion";
import {
  CheckCircle,
  Play,
  Calendar,
  Mail,
  Clock,
  ArrowLeft,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const clientExperiences = [
  {
    name: "David Chen",
    company: "TechVenture Labs",
    role: "CEO & Founder",
    image: null,
    rating: 5,
    quote:
      "The strategy session completely changed how we approach digital advertising. Within 2 months, our cost per acquisition dropped by 40%. The team at OnlineAdwise truly understands the modern marketing landscape.",
    result: "40% reduction in CPA",
  },
  {
    name: "Emma Rodriguez",
    company: "StyleHub Fashion",
    role: "Marketing Director",
    image: null,
    rating: 5,
    quote:
      "I was skeptical about a 30-minute call making a difference, but the insights were invaluable. They identified opportunities we had completely overlooked. Our ROAS improved from 2x to 5x.",
    result: "150% ROAS improvement",
  },
  {
    name: "James Thompson",
    company: "FinanceFlow",
    role: "Head of Growth",
    image: null,
    rating: 5,
    quote:
      "Professional, insightful, and genuinely helpful. The consultation felt like talking to a trusted advisor rather than a sales pitch. We've been working together for over a year now.",
    result: "300% increase in leads",
  },
];

const nextSteps = [
  {
    icon: Mail,
    title: "Check Your Email",
    description:
      "You'll receive a confirmation email with all the meeting details and Google Meet link.",
  },
  {
    icon: Calendar,
    title: "Add to Calendar",
    description:
      "Click the calendar invite to add the session to your preferred calendar app.",
  },
  {
    icon: Clock,
    title: "Prepare Your Questions",
    description:
      "Think about your goals and challenges to make the most of our time together.",
  },
];

const ThankYou = () => {
  return (
    <div className="min-h-screen grid-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
            <CheckCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            You're All Set! 🎉
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your strategy session has been booked successfully. We can't wait to
            help you
            <span className="text-gradient-gold font-semibold">
              {" "}
              transform your digital presence
            </span>
            .
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              What to Expect in Your{" "}
              <span className="text-gradient-gold">Strategy Session</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Watch this quick video to understand how we'll make the most of
              our time together.
            </p>
          </div>

          <div
            className="glass-card gold-glow-intense rounded-2xl p-2 max-w-4xl mx-auto overflow-hidden"
            style={{ border: "2px solid hsl(45, 100%, 50%)" }}
          >
            <div className="relative aspect-video bg-muted rounded-xl overflow-hidden group cursor-pointer">
              {/* Video Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-muted to-card" />

              {/* Grid Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(hsla(0, 0%, 30%, 0.5) 1px, transparent 1px),
                                    linear-gradient(90deg, hsla(0, 0%, 30%, 0.5) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-2xl" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 w-24 h-24 rounded-full bg-primary/30 animate-ping"
                    style={{ animationDuration: "2s" }}
                  />
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_40px_hsla(45,100%,50%,0.4)] group-hover:shadow-[0_0_60px_hsla(45,100%,50%,0.6)] transition-all duration-300 group-hover:scale-110">
                    <Play
                      className="w-10 h-10 text-primary-foreground ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>

              {/* Video Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="glass-card rounded-lg px-4 py-2">
                  <p className="text-sm text-foreground font-medium">
                    Your Video Here
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Replace with your custom video
                  </p>
                </div>
                <div className="glass-card rounded-lg px-3 py-2">
                  <p className="text-xs text-muted-foreground">
                    Duration: 2-3 min
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-4 italic">
            💡 Tip: Replace this placeholder with your personalized welcome
            video
          </p>
        </motion.section>

        {/* Next Steps Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            <span className="text-gradient-gold">Next Steps</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {nextSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:gold-glow transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Client Experiences Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Hear From <span className="text-gradient-gold">Our Clients</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              See what others have achieved after their strategy sessions with
              OnlineAdwise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {clientExperiences.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 relative overflow-hidden hover:gold-glow transition-all duration-300 flex flex-col"
              >
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-primary fill-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-sm leading-relaxed mb-4 flex-grow">
                  "{client.quote}"
                </p>

                {/* Result Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30">
                    📈 {client.result}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {client.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">
                      {client.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {client.role}
                    </p>
                    <p className="text-primary text-xs">{client.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center pb-12"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Have Questions Before Your Session?
            </h2>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out to us anytime. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="gold"
                className="px-8 py-6 text-lg rounded-xl"
              >
                <a href="mailto:info.onlineadwise@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 py-6 text-lg rounded-xl border-primary/50 text-foreground hover:bg-primary/10"
              >
                <Link to="/">Back to Homepage</Link>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center pt-8 border-t border-border"
        >
          <p className="text-gradient-gold font-semibold text-lg mb-2">
            OnlineAdwise
          </p>
          <p className="text-muted-foreground text-sm">
            Where Advertising Meets Wisdom
          </p>
          <p className="text-muted-foreground text-xs mt-4">
            © 2026 OnlineAdwise. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default ThankYou;
