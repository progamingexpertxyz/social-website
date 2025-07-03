"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import ContactPage from "@/components/contectpage";

const sections = [
  {
    title: "Google Ads Services",
    image: "/ads.png",
    description: `Are you looking to drive more traffic to your website, increase your online visibility, and grow your business? With Google Ads—the world's most popular online advertising platform—you get targeted reach and measurable ROI.`,
    bullets: [
      "In‑depth Keyword Research to find the most valuable search terms.",
      "Eye‑catching Ad Creation that compels clicks.",
      "Ongoing Campaign Management for peak performance.",
      "Strategic Remarketing to re‑engage past visitors.",
      "Detailed Reporting & Analysis with actionable insights.",
    ],
  },
  {
    title: "Social Media Marketing",
    image: "/smm.png",
    description: `In today's digital age, a strong social presence is essential. We help brands grow awareness, engagement, and sales through tailored campaigns across platforms.`,
    bullets: [
      "Custom Social Strategy Development.",
      "High‑quality Content Creation (images, videos, posts).",
      "Account Management & Community Engagement.",
      "Targeted Social Ads to reach ideal audiences.",
      "Analytics & Reporting so you know what's working.",
    ],
  },
  {
    title: "PPC (Pay‑Per‑Click) Management",
    image: "/ppc.png",
    description: `Maximize your ad spend with precision-targeted PPC across Google, Bing, and more, all while optimizing bids and conversions.`,
    bullets: [
      "Smart Keyword Research & Selection.",
      "Compelling Ad Copy crafted to convert.",
      "Landing Page Optimization for better UX.",
      "Bid Management to balance cost & ROI.",
      "Regular Performance Reports & Adjustments.",
    ],
  },
  {
    title: "Email Marketing",
    image: "/e.png",
    description: `Engage your audience with intelligent email campaigns—including automation, segmentation, personalization, and A/B testing—for higher loyalty and sales.`,
    bullets: [
      "Tailored Campaign Strategy.",
      "Segmented Lists & Personalized Messaging.",
      "Automated Drip & Lifecycle Emails.",
      "A/B Testing for subject lines & content.",
      "Open, click-through & conversion tracking.",
    ],
  },
];

const stats = [
  ["1700+", "Projects Completed"],
  ["1300+", "Websites Created"],
  ["1200+", "Happy Clients"],
  ["1000+", "Brands Established"],
];

export default function DigitalMarketingPage() {
  return (
    <section className="bg-[#0f172a] text-white py-section overflow-hidden relative">
      <div className="absolute inset-0 z-0 animate-bgPulse pointer-events-none bg-[radial-gradient(circle_at_30%_30%,#ff008040,transparent_60%),radial-gradient(circle_at_70%_70%,#00bfff40,transparent_60%)] backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-container relative z-10 space-y-24">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-section-header font-bold mt-6 mb-4">
            Welcome to Our Digital Marketing Services
          </h1>
          <p className="text-body text-white/80 max-w-3xl mx-auto">
            From Google Ads to Email Marketing, we drive growth through
            targeted campaigns, creative content, and strategic optimization.
          </p>
        </motion.div>

        {/* Service Sections */}
        {sections.map(({ title, image, description, bullets }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="md:grid md:grid-cols-2 items-center gap-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <img src={image} alt={title} className="w-[80%] h-auto ml-14 mt-1" />
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
              <p className="text-body text-white/80">{description}</p>
              <ul className="space-y-2">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-body text-white/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Stats Section with Counting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-section-header font-bold">Let’s Grow Together</h2>
          <p className="text-body text-white/80 mt-4 max-w-2xl mx-auto">
            Trust our proven experience and measurable results to elevate your brand across every digital channel.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
            {stats.map(([num, label], i) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
              const value = parseInt(num.replace("+", ""));

              return (
                <div key={i} ref={ref} className="bg-white/10 p-6 rounded-xl">
                  <p className="text-3xl font-bold text-white">
                    {inView ? <CountUp end={value} duration={2} /> : 0}+
                  </p>
                  <p className="text-body text-white/80 mt-1">{label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Section */}
        <ContactPage />
      </div>
    </section>
  );
}
