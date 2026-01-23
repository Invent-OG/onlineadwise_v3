import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-8  pb-8 md:pb-12 text-center"
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl py-16 md:text-4xl font-bold text-gradient-gold tracking-wide">
          OnlineAdwise
        </h1>
        {/* <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" /> */}
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4">
          Schedule Your Success
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Where Advertising Meets Wisdom — Book Your Free Strategy Session
        </p>
      </div>
    </motion.header>
  );
};

export default Header;
