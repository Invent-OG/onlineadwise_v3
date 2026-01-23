"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    subtitle: "Facebook + Instagram Ads",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600",
    naren: "NAREN Layer: Navigate + Analyze + Execute + Retarget + Nurture",
    execute: [
      "Complete Meta Business Suite Setup",
      "Pixel + CAPI (Server-Side Tracking) Integration",
      "Campaign Structure (TOF/MOF/BOF based on NAREN Split)",
      "Advanced Audience Targeting",
      "Lookalike Creation (Data-Driven)",
      "Creative Strategy: Hooks, Scripts, Thumbnails",
      "A/B Testing (Creatives, Audiences, Landing Page)",
      "Retargeting and Re-engagement Systems",
      "Scaling Systems (Horizontal + Vertical)",
      "Weekly Optimization & Analytics Dashboard",
    ],
    packages: [
      {
        name: "Starter Meta Package",
        features: [
          "Basic Campaign Launch",
          "1 Funnel Entry Point",
          "2 Ad Creatives",
          "Basic Reporting",
        ],
      },
      {
        name: "Growth Meta Package",
        features: [
          "Multi-layer NAREN Audience Framework",
          "6–8 Creatives",
          "Retargeting + Automation",
          "Weekly Optimization Reporting",
        ],
      },
      {
        name: "Performance Scaling Package",
        features: [
          "Full NAREN Implementation",
          "CAPI + Advanced Tracking",
          "Funnel Optimization",
          "Weekly Strategy Calls",
          "🎬 Includes: Whiteboard Video Explainer (1 Video for Ads/Funnel)",
        ],
      },
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    subtitle: "Search, Performance Max, Display, YouTube",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
    naren: " NAREN Layer: Navigate Intent + Analyze Search Journeys",
    execute: [
      "Google Ads Account Setup",
      "Conversion Tracking (GTAG, GA4, GMC for e-commerce)",
      "Keyword Research + Competitor Analysis",
      "Search Campaign Buildout",
      "Performance Max Shopping/Lead Campaign",
      "Display Audience Segmentation",
      "YouTube Ad Setup (Skippable, Non-Skippable, In-feed)",
      "Landing Page Sync",
      "Bid Optimization (Max Conversions / Target CPA)",
      "Weekly Reporting Dashboard",
    ],
    packages: [
      {
        name: "Google Starter",
        features: ["Search Only", "1 Landing Page", "Basic Tracking"],
      },
      {
        name: "Google Growth",
        features: ["Search + Display", "2–3 Landing Pages", "GA4 Dashboard"],
      },
      {
        name: "Google Performance Suite",
        features: [
          "Search + Pmax + Display + YouTube",
          "Full Tracking Stack",
          "NAREN Analytics Layer",
          "Weekly Strategy Call",
          "🎬 Includes: 1 Whiteboard Explainer for YouTube Ads",
        ],
      },
    ],
  },
  {
    id: "youtube-ads",
    title: "YouTube Ads",
    subtitle: "Direct Response + Storytelling Ads",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1600",
    naren: "NAREN Layer: Narrative Psychology + Retargeting Loops",
    execute: [
      "YouTube Campaign Setup",
      "Hook Strategy + Scriptwriting",
      "Custom Thumbnails for Ads",
      "Retargeting Sequence",
      "Full Funnel Sync (Lead, VSL, Appointment, Webinar)",
      "Scaling via High-Intent Audiences",
    ],
    packages: [],
  },
  {
    id: "linkedin-ads",
    title: "LinkedIn Ads",
    subtitle: "High-Ticket B2B",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600",
    naren: "NAREN Layer: Narrow Targeting + Authority-Based Messaging",
    execute: [
      "Profile Optimization",
      "Campaign Setup (Lead Form + Website)",
      "B2B Audience Segmentation",
      "Message Ads + Sponsored Content",
      "Retargeting Layer",
      "Analytics + CRO",
    ],
    packages: [],
  },
  {
    id: "social-media",
    title: "Social Media Setup",
    subtitle: "Organic Foundations",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1600",
    naren: "NAREN Layer: Navigate Brand Identity",
    execute: [
      "Profile Optimization (Instagram, Facebook, LinkedIn, YouTube, X)",
      "Bio Writing & Brand Guide Creation",
      "Highlight Cover Setup",
      "Content Calendar (NAREN-Based: Education + Proof + Intent + Nurture)",
    ],
    packages: [],
  },
];

export function AdService() {
  const [activeId, setActiveId] = useState(services[0].id);

  useEffect(() => {
    const onScroll = () => {
      services.forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 180 && r.bottom >= 180) setActiveId(s.id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 120,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-28">
      <p className="text-[#DFB025] text-center uppercase tracking-widest text-xs font-bold mb-4">
        Platform-Wise Execution{" "}
      </p>
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Multi-Platform Ad Services
          </h2>
          <p className="mt-4 max-w-sm mx-auto text-base text-neutral-400">
            Digital Marketing Consultant • Paid Media Expert • Funnel Scaling
            Strategist
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row">
          {/* LEFT NAV */}
          <aside className="hidden lg:block lg:w-1/3">
            <div data-aos="fade-right" className="sticky top-28 space-y-4">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`w-full rounded-xl border px-6 py-5 text-left transition ${
                    activeId === s.id
                      ? "border-[#DFB025] bg-[#DFB025]/10 text-white"
                      : "border-white/10 text-neutral-400 hover:text-white"
                  }`}
                >
                  <h4 className="font-bold">{s.title}</h4>
                  <p className="text-sm text-neutral-500">{s.subtitle}</p>
                </button>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-down" className="lg:w-2/3 space-y-40">
            {services.map((service) => (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <div className="mb-10 overflow-hidden rounded-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={1600}
                    height={900}
                    className="h-[260px] w-full object-cover"
                  />
                </div>

                <div className="mb-10">
                  <h3 className="text-3xl font-extrabold text-white">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400">{service.subtitle}</p>
                </div>

                <div className="mb-10 rounded-2xl border border-[#DFB025]/30 bg-[#DFB025]/10 px-6 py-4">
                  <p className="font-semibold text-[#DFB025]">NAREN Flow:</p>
                  <p className="mt-1 text-sm text-neutral-300">
                    {service.naren}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-neutral-900 p-8">
                  <h4 className="mb-6 text-xl font-bold text-white">
                    Execution Framework
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.execute.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-xl bg-black border border-white/5 px-4 py-3 shadow-sm"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#DFB025]" />
                        <span className="text-sm text-neutral-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {service.packages.length > 0 && (
                  <div className="mt-16 grid gap-10 md:grid-cols-3">
                    {service.packages.map((pkg, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-neutral-900 p-6"
                      >
                        <h5 className="mb-5 font-bold text-[#DFB025]">
                          {pkg.name}
                        </h5>
                        <ul className="space-y-3 text-sm text-neutral-400">
                          {pkg.features.map((f, j) => (
                            <li key={j} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#DFB025]" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
