"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = [
  "FlutterFlow", "Torchy's Tacos", "RentCheck", "NoCodeUI",
  "WHO", "KnowHim", "MetaForge", "DesignVerse",
  "CodeCraft", "HealthSync", "BrightPixel", "Visionary Tech"
];

const CompaniesMarquee = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="py-8 kaleo-gradient-bg"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-kaleo-text-secondary text-sm mb-8">
          Trusted by industry leaders
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee space-x-12 min-w-fit">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="text-kaleo-text-secondary font-medium whitespace-nowrap"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompaniesMarquee;
