import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const AnimatedCalendar = () => {
  const [bookedSlots, setBookedSlots] = useState<number[]>([]);
  const now = new Date();
  const currentMonth = now.toLocaleString("default", { month: "long" });
  const currentYear = now.getFullYear();

  const daysInMonth = new Date(currentYear, now.getMonth() + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, now.getMonth(), 1).getDay();

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate booking slots (simulating 40-80 bookings spread across the month)
  const bookingDays = [
    2, 3, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 19, 20, 22, 23, 24, 26, 27, 29,
    30,
  ];

  useEffect(() => {
    // Animate bookings appearing one by one
    bookingDays.forEach((day, index) => {
      setTimeout(
        () => {
          setBookedSlots((prev) => [...prev, day]);
        },
        200 + index * 150,
      );
    });
  }, []);

  const days = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="bg-card container-narrow rounded-2xl shadow-xl border border-border/50 overflow-hidden max-w-md mx-auto glow-gold">
      {/* Calendar Header */}
      <div className="bg-secondary/50 px-6 py-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          <h3 className="text-foreground font-heading font-bold text-xl">
            {currentMonth} {currentYear}
          </h3>
          <div className="flex items-center gap-2 bg-gold/20 px-3 py-1 rounded-full">
            <span className="text-gold font-semibold text-sm">
              {bookedSlots.length} Booked
            </span>
          </div>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-1 px-4 pt-4 pb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-muted-foreground text-xs font-medium py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 px-4 pb-4">
        {days.map((day, index) => {
          const isBooked = day && bookedSlots.includes(day);
          const isPast = day && day < now.getDate();

          return (
            <div
              key={index}
              className={`aspect-square flex items-center justify-center relative rounded-lg text-sm font-medium transition-all duration-200
                ${!day ? "invisible" : ""}
                ${isPast ? "text-muted-foreground/50" : "text-foreground"}
                ${isBooked ? "bg-gold/10" : "hover:bg-muted/50"}
              `}
            >
              {day}
              <AnimatePresence>
                {isBooked && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                      }}
                      className="absolute w-8 h-8 bg-gold rounded-full flex items-center justify-center"
                    >
                      <Check
                        className="w-4 h-4 text-background"
                        strokeWidth={3}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Stats Footer */}
      <div className="border-t border-border/50 bg-secondary/30 px-6 py-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gold"></div>
            <span className="text-muted-foreground">Qualified Bookings</span>
          </div>
          <span className="font-bold text-foreground">
            {bookedSlots.length}/80 Target
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCalendar;
