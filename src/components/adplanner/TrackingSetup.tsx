import { motion } from "framer-motion";
import { useState } from "react";
import {
  Monitor,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  { id: "meta", name: "Meta (Facebook/Instagram)", icon: "📘" },
  { id: "google", name: "Google Ads", icon: "🔍" },
  { id: "tiktok", name: "TikTok Ads", icon: "🎵" },
];

const eventTypes = [
  "PageView",
  "Lead",
  "Purchase",
  "CompleteRegistration",
  "AddToCart",
  "InitiateCheckout",
];

export const TrackingSetup = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("meta");
  const [pixelId, setPixelId] = useState("");
  const [eventType, setEventType] = useState("Purchase");
  const [thankYouUrl, setThankYouUrl] = useState("");
  const [isVerified, setIsVerified] = useState<boolean | null>(null);

  const generateTrackingCode = () => {
    if (selectedPlatform === "meta") {
      return `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId || "YOUR_PIXEL_ID"}');
fbq('track', 'PageView');
fbq('track', '${eventType}');
</script>`;
    }
    return `<!-- Google Ads Conversion Code -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${pixelId || "AW-XXXXXXXXX"}"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${pixelId || "AW-XXXXXXXXX"}');
gtag('event', 'conversion', {'send_to': '${pixelId || "AW-XXXXXXXXX"}/XXXXX'});
</script>`;
  };

  const generateTrackingUrl = () => {
    if (!thankYouUrl) return "";
    const baseUrl = thankYouUrl.includes("?") ? thankYouUrl : `${thankYouUrl}?`;
    return `${baseUrl}&utm_source=${selectedPlatform}&utm_medium=cpc&event=${eventType.toLowerCase()}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const verifyTracking = () => {
    // Simulate verification
    setTimeout(() => {
      setIsVerified(pixelId.length > 5);
    }, 1500);
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Monitor className="h-4 w-4 text-primary" />
            <span className="text-sm font-body text-primary">Easy Setup</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-gold">Conversion Tracking</span>
            <br />
            Made Simple
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            No-code friendly tracking setup. Just paste your Pixel ID, select
            your event type, and get ready-to-use tracking code in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-sci-fi p-8">
            {/* Platform Selection */}
            <div className="mb-8">
              <label className="block text-sm font-body text-muted-foreground mb-3">
                Select Ad Platform
              </label>
              <div className="grid grid-cols-3 gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`p-4 rounded-lg border transition-all ${
                      selectedPlatform === platform.id
                        ? "border-primary bg-primary/10 glow-gold"
                        : "border-border bg-muted/30 hover:border-primary/50"
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{platform.icon}</span>
                    <span className="text-sm font-body">{platform.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Pixel ID & Event Type */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Pixel ID / Conversion ID
                </label>
                <input
                  type="text"
                  value={pixelId}
                  onChange={(e) => setPixelId(e.target.value)}
                  placeholder="Enter your Pixel ID"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Event Type
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors"
                >
                  {eventTypes.map((event) => (
                    <option key={event} value={event}>
                      {event}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Generated Code */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-body text-muted-foreground">
                  Generated Tracking Code
                </label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(generateTrackingCode())}
                  className="text-primary"
                >
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </Button>
              </div>
              <pre className="bg-cyber-black border border-border rounded-lg p-4 overflow-x-auto text-xs font-mono text-muted-foreground">
                {generateTrackingCode()}
              </pre>
            </div>

            {/* Tracking URL Generator */}
            <div className="mb-8 p-6 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-display font-bold mb-4 flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-primary" />
                Link-Based Event Tracking (No-Code)
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Your Thank You Page URL
                  </label>
                  <input
                    type="url"
                    value={thankYouUrl}
                    onChange={(e) => setThankYouUrl(e.target.value)}
                    placeholder="https://yoursite.com/thank-you"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                {thankYouUrl && (
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">
                      Generated Tracking URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={generateTrackingUrl()}
                        readOnly
                        className="flex-1 bg-input border border-border rounded-lg px-4 py-3 font-body text-sm"
                      />
                      <Button
                        variant="outline"
                        onClick={() => copyToClipboard(generateTrackingUrl())}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Verification */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border">
              <div className="flex items-center gap-3">
                {isVerified === null ? (
                  <AlertCircle className="h-6 w-6 text-muted-foreground" />
                ) : isVerified ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                ) : (
                  <AlertCircle className="h-6 w-6 text-red-500" />
                )}
                <div>
                  <p className="font-body font-medium">
                    {isVerified === null
                      ? "Event verification pending"
                      : isVerified
                        ? "Event receiving confirmed!"
                        : "No events detected yet"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Click verify to check if tracking is working
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={verifyTracking}
                disabled={!pixelId}
              >
                Verify
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
