"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface StatProps {
  number: string;
  description: string;
  index: number;
}

const Stat = ({ number, description, index }: StatProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <div className="text-subheader font-bold text-kaleo-text-primary mb-2">
      {number}
    </div>
    <p className="text-body text-kaleo-text-secondary max-w-xs mx-auto">
      {description}
    </p>
  </motion.div>
);

const AboutSection = () => {
  const stats = [
    {
      number: "24+",
      description: "Years of experience in product design and development",
    },
    {
      number: "220+",
      description: "Projects completed for clients from different industries",
    },
  ];

  // 🔽 Scroll to contact
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section-header font-bold text-kaleo-text-primary mb-6">
              The team turning ideas into MVPs in weeks.
            </h2>

            <p className="text-body text-kaleo-text-secondary mb-12 leading-relaxed">
              We are a team of agile designers and developers that help our
              clients complete projects in the most efficient way possible. Our
              expertise spans across FlutterFlow development, product design,
              and MVP creation, ensuring your vision becomes reality faster than
              traditional approaches.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {stats.map((stat, index) => (
                <Stat
                  key={stat.number}
                  number={stat.number}
                  description={stat.description}
                  index={index}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="dark" size="lg" onClick={scrollToContact}>
                Start a Project
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-90 overflow-hidden -mt-24 ml-16">
              <Image
                src="/logo.png" // ✅ Replace with your actual image
                alt="Our Partners"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Decorative Dots */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-kaleo-gray-900 rounded-full opacity-10"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-kaleo-gray-600 rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
