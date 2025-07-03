"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ContactPage from "@/components/contectpage";

// Counter Hook
function useCounter(target: number, trigger: boolean, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * target);
      setCount(currentValue);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [trigger, target, duration]);

  return count;
}

// Content Sections
const sections = [
  {
    title: "Conversion Audit & Strategy",
    image: "/conversion-1.png",
    description:
      "We begin by identifying friction points across your website — from slow load speeds to unclear CTAs. Our comprehensive audit forms the foundation of a targeted optimization plan.",
    bullets: [
      "Complete UX and technical audit.",
      "Performance & speed diagnostics.",
      "Identify user journey leaks.",
      "Behavior analysis using heatmaps & scrollmaps.",
      "Customized improvement roadmap.",
    ],
  },
  {
    title: "Customized A/B Testing",
    image: "/conversion-2.png",
    description:
      "Once the issues are mapped out, we deploy smart A/B testing experiments to validate what works best—from CTAs to layout and content messaging.",
    bullets: [
      "Create and run split tests.",
      "Optimize headline clarity and CTA position.",
      "Refine content, colors & forms.",
      "Use real visitor data to drive decisions.",
      "Increase ROI with evidence-backed improvements.",
    ],
  },
  {
    title: "Conversion-Centered Design Tweaks",
    image: "/conversion-3.png",
    description:
      "We adjust UI/UX layouts, form logic, messaging tone, and visual hierarchy—all aligned to engage visitors and drive more leads or sales.",
    bullets: [
      "Mobile-first responsive redesign.",
      "Improve readability and layout flow.",
      "High-converting form fields placement.",
      "Value-driven headlines & copy.",
      "Trust signals (badges, testimonials, etc).",
    ],
  },
  {
    title: "Performance Reporting & Ongoing Optimization",
    image: "/conversion-4.png",
    description:
      "We continuously monitor, track, and optimize. You get transparent performance reports, analytics insights, and growth-focused iteration.",
    bullets: [
      "Weekly or monthly performance reports.",
      "Google Analytics & Hotjar integrations.",
      "Conversion funnel tracking setup.",
      "Clear attribution metrics.",
      "Iterative testing for scalable growth.",
    ],
  },
];

// Stats Data
const stats = [
  [1700, "Projects Completed"],
  [1300, "Websites Created"],
  [1200, "Happy Clients"],
  [1000, "Brands Established"],
];

export default function ConversionOptimizationPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-[#0f172a] text-white py-section overflow-hidden relative">
      {/* Background animation */}
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
            Welcome to Our Conversion Optimization Services
          </h1>
          <p className="text-body text-white/80 max-w-3xl mx-auto">
            We turn visitors into paying customers by identifying friction points, optimizing journeys, and implementing high-impact UX and testing strategies.
          </p>
        </motion.div>

        {/* Feature Sections */}
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          ref={ref}
        >
          <h2 className="text-section-header font-bold">Let’s Optimize & Convert</h2>
          <p className="text-body text-white/80 mt-4 max-w-2xl mx-auto">
            You’ve already got the traffic—now let’s turn it into sales with high-converting funnels and intelligent design.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
            {stats.map(([target, label], i) => {
              const count = useCounter(Number(target), inView);
              return (
                <div key={i} className="bg-white/10 p-6 rounded-xl">
                  <p className="text-3xl font-bold text-white">{count}+</p>
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
