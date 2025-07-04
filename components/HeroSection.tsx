"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HeroSection = () => {
  const words = ["app", "software", "product", "website", "vibe"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* TEXT SECTION with Multicolor Overlay on Original Background */}
      <section className="relative pt-32 min-h-container flex items-left -ml-96 overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
        {/* Soft Animated Overlay Layer */}
        <div className="absolute inset-0 z-0 animate-bgPulse pointer-events-none bg-[radial-gradient(circle_at_30%_30%,#ff008040,transparent_60%),radial-gradient(circle_at_70%_70%,#00bfff40,transparent_60%)] backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-container text-left">
          {/* Promo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-2 rounded-xl border border-white/30 bg-white/20 backdrop-blur-lg shadow-2xl hover:shadow-white/10 transition-all duration-300 mb-8"
          >
            <span className="text-sm text-white">Your next idea is waiting</span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-hero font-bold text-white mb-12 max-w-4xl leading-tight"
          >
            Your dream{" "}
            <span className="relative inline-block h-[100px] -mt-6 overflow-hidden align-middle -ml-2 w-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWord}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 w-full text-white text-left whitespace-nowrap"
                >
                  {words[currentWord]}
                </motion.div>
              </AnimatePresence>
            </span>
            <br />
            <span className="text-gray-400">Designed & Shipped</span>
          </motion.h1>

          {/* Service Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            {[
              "Software Development",
              "E-Commerce & SEO (Amazon, Store Setup)",
              "Design & Development (Web, UI/UX, CRM)",
            ].map((service, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-xl border border-white/30 bg-white/20 backdrop-blur-lg shadow-2xl hover:shadow-white/10 transition-all duration-300"
              >
                <span className="text-sm font-medium text-white">{service}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="-mt-8 kaleo-gradient-bg  min-h-container flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-[100rem]"
        >
          <div className="aspect-video rounded-2xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controls={false}
              onContextMenu={(e) => e.preventDefault()}
              className="w-full h-full object-cover pointer-events-none"
            >
              <source src="/anni.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
