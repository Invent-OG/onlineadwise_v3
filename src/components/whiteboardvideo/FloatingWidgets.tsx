import { Phone, Calendar, MessageCircle } from "lucide-react";

const FloatingWidgets = () => {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917065578055&text=Hi+Naren%2C%0AI+want+your+help+with+Performance+Marketing+for+my+business+as+you+are+a+Digital+Marketing+Expert+%E2%80%94+especially+with+Google+Ads.%21&type=phone_number&app_absent=0";
  const calendarUrl = "https://calendar.app.google/MhdR6MKNu8SXgaUy5";
  const phoneNumber = "tel:+917065578055";

  return (
    <div className="floating-widget">
      <a
        href={calendarUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="widget-btn widget-calendar animate-float"
        aria-label="Book a consultation"
        style={{ animationDelay: "0.1s" }}
      >
        <Calendar className="w-6 h-6" />
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="widget-btn widget-whatsapp animate-float"
        aria-label="Chat on WhatsApp"
        style={{ animationDelay: "0.2s" }}
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <a
        href={phoneNumber}
        className="widget-btn widget-phone animate-float"
        aria-label="Call us"
        style={{ animationDelay: "0.3s" }}
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingWidgets;
