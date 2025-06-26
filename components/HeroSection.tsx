"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiFramer, SiSupabase, SiLinear, SiMarvelapp, SiSpine } from "react-icons/si";
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
      {/* TEXT SECTION */}
      <section className="pt-32  kaleo-gradient-bg min-h-container flex items-left -ml-96">
        <div className="max-w-7xl mx-auto px-container text-left">
          {/* Promo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-2 bg-white rounded-full border kaleo-border mb-8"
          >
            <span className="text-sm text-kaleo-text-secondary">
              Your next idea is waiting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-hero font-bold text-kaleo-text-primary mb-12 max-w-4xl leading-tight"
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
                  className="absolute top-0 left-0 w-full text-kaleo-text-primary text-left whitespace-nowrap"
                >
                  {words[currentWord]}
                </motion.div>
              </AnimatePresence>
            </span>
            <br />
            <span className="text-gray-500">Designed & Shipped</span>
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
                className="px-6 py-3 bg-white rounded-full border kaleo-border shadow-sm"
              >
                <span className="text-sm font-medium text-kaleo-text-primary">
                  {service}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VIDEO + LOGO SECTION */}
      <section className="  -mt-8 kaleo-gradient-bg min-h-container flex flex-col items-center">
        {/* Hero Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full max-w-7xl  max-h-7xl "
        >
          <div className="aspect-video  rounded-2xl overflow-hidden">
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
