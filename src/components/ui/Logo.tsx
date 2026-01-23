import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group cursor-pointer">
      <img
        src={logo}
        alt="Online Adwise"
        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />

      {/* Text - Keeping it for now as the logo might be just an icon */}
      <div className="flex flex-col">
        <span className="text-xl   font-bold leading-tight text-foreground">
          Online Adwise
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Powered by NAREN Method™
        </span>
      </div>
    </Link>
  );
};

export default Logo;
