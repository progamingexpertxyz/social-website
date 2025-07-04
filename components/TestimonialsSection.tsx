"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    company: "FlowSpark",
    name: "Emily Carter",
    role: "Head of Product at FlowSpark",
    avatar: "/65.jpg",
    quote:
      "Their design and development expertise helped us scale our MVP into a full-fledged platform. Highly collaborative and fast!",
    metric: "2.5M+",
    metricLabel: "User signups in 3 months",
  },
  {
    company: "Cometly",
    name: "Jacob Miller",
    role: "CTO at Cometly",
    avatar: "/44.jpg",
    quote:
      "Amazing attention to detail. The UI/UX clarity they provided helped reduce churn and improve onboarding dramatically.",
    metric: "1k+",
    metricLabel: "Client signups in 2 months",
  },
  {
    company: "Enerflo",
    name: "Olivia Brooks",
    role: "CMO at Enerflo",
    avatar: "/49.jpg",
    quote:
      "Design quality was exceptional—pixel-perfect interfaces that helped us stand out in a crowded market.",
    metric: "5x",
    metricLabel: "Years of partnership",
  },
  {
    company: "Life Beats",
    name: "Michael Thompson",
    role: "Founder & CEO at Beats & Breathe",
    avatar: "/32.jpg",
    quote:
      "Communication was outstanding. They handled feedback professionally and delivered exactly what we envisioned.",
    metric: "1.5x",
    metricLabel: "Faster delivery time",
  },
  {
    company: "Beats & Breathe",
    name: "Ahmed Yusuf",
    role: "CEO of Beats & Breathe",
    avatar: "/34.jpg",
    quote:
      "Communication was outstanding. They handled feedback professionally and delivered exactly what we envisioned.",
    metric: "1.5x",
    metricLabel: "Faster delivery time",
  },
];

const SuccessStories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -520 : 520,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 520;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="py-8 kaleo-gradient-bg w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16"
        >
          <div>
            <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 mb-4 shadow-md">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-kaleo-text-primary">
                  5.0 Rating from
                </span>
                <Image
                  src="/up.png"
                  alt="Upwork Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <h2 className="text-6xl font-bold text-gray-900">Success Stories</h2>
          </div>

          <div className="flex gap-4 mr-0 md:mr-16 mt-6">
            <button
              onClick={() => scroll("left")}
              className="bg-white p-3 rounded-full shadow-md hover:scale-105 transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white p-3 rounded-full shadow-md hover:scale-105 transition"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </motion.div>

        {/* Scrollable Cards */}
        <div className="relative w-full max-w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="w-full max-w-full overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            <div className="flex space-x-8 px-2">
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`snap-start shrink-0 w-[720px] h-[420px] p-8 rounded-3xl border transition-all duration-300 ${index === activeIndex
                      ? "bg-white shadow-md border-gray-200"
                      : "bg-gray-100 shadow-sm border-gray-100"
                    }`}
                >
                  <h4 className="text-gray-700 font-bold text-3xl mb-4">{t.company}</h4>
                  <p className="text-2xl font-medium text-gray-900 mb-6 leading-snug">
                    {t.quote}
                  </p>
                  <div className="text-xl font-semibold text-gray-600 mb-6 border-t pt-4">
                    {t.metric}{" "}
                    <span className="font-normal text-gray-500">{t.metricLabel}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">{t.name}</div>
                      <div className="text-lg text-gray-500">{t.role}</div>
                    </div>
                 
                </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      </div>
    </div>
    </section >
  );
};

export default SuccessStories;
