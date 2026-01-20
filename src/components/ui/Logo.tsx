import { Sparkles, TrendingUp } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Icon Container */}
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-gold-sm group-hover:glow-gold transition-all duration-500">
          <TrendingUp className="w-6 h-6 text-primary-foreground" />
        </div>
        <Sparkles className="w-4 h-4 text-primary absolute -top-1 -right-1 float-animation" />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-xl font-display font-bold  leading-tight">
          Online Adwise
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Powered by NAREN Method™
        </span>
      </div>
    </div>
  );
};

export default Logo;
