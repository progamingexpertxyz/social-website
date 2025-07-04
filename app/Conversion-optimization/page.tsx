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
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [trigger, target, duration]);
  return count;
}

// Section Content
const sections = [
  {
    title: "Conversion Audit & Strategy",
    image: "/conversion-1.png",
    description:
      "We identify friction points like slow load speeds or weak CTAs, forming a roadmap for targeted optimization.",
    bullets: [
      "Complete UX and technical audit.",
      "Performance & speed diagnostics.",
      "User journey analysis with heatmaps.",
      "Behavioral insights & leaks.",
      "Improvement roadmap planning.",
    ],
  },
  {
    title: "Customized A/B Testing",
    image: "/conversion-2.png",
    description:
      "We test variations of design, copy, and layout to find what converts better—then apply what works.",
    bullets: [
      "Create & manage split tests.",
      "Refine headline clarity & CTAs.",
      "Optimize forms, layout, and copy.",
      "Real-time analytics driven changes.",
      "Data-backed revenue boosting.",
    ],
  },
];

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
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 animate-bgPulse pointer-events-none bg-[radial-gradient(circle_at_30%_30%,#ff008040,transparent_60%),radial-gradient(circle_at_70%_70%,#00bfff40,transparent_60%)] backdrop-blur-[2px]" />

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-container relative z-[2] mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 items-center gap-10"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Welcome to Our Conversion Optimization Services
              </h1>
              <p className="text-lg text-white/80">
                We turn visitors into paying customers by removing friction, testing improvements, and boosting conversions intelligently.
              </p>
            </div>
            <div className="w-full h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
              >
                <source src="/herogif.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map(({ title, image, description, bullets }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(255,255,255,0.2)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: idx * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              className="flex flex-col bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-300"
            >
              <img src={image} alt={title} className="w-full h-auto rounded-xl mb-4" />
              <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
              <p className="text-body text-white/80 mb-4">{description}</p>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3,
                    },
                  },
                }}
                className="space-y-2 mb-4"
              >
                {bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center space-x-3"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "tween" }}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="text-body text-white/90">{b}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mt-auto self-start bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Hire Us
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
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

        {/* Contact */}
        <div className="mt-24">
          <ContactPage />
        </div>
      </div>
    </section>
  );
}
