"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react"; // Optional icon (you can change this)

interface CaseStudyCardProps {
  title: string;
  metrics: string[];
  image: string;
  index: number;
}

const CaseStudyCard = ({ title, metrics, image, index }: CaseStudyCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
    className="group cursor-pointer w-full max-w-[800px] mx-auto transition-transform duration-300"
  >
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-[600px]">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-20"
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className=" backdrop-blur-lg px-8 py-6 "
        >
          <h3 className="text-4xl font-extrabold text-kaleo-text-primary mb-4">
            {title}
          </h3>
          <div className="space-y-4 text-left">
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-kaleo-text-primary mt-1" />
                <span className="text-lg font-medium text-kaleo-text-secondary">
                  {metric}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const FeaturedWorkSection = () => {
  const images = [
    "/web.jpg",
    "/soft.jpg",
    "/ui.jpg",
    "/content.jpg"
  ];

 const caseStudies = [
  {
    title: "Web Development",
    metrics: [
      "Crafting modern, responsive, and user-friendly websites that adapt across all devices",
      "Implementing cutting-edge frontend technologies like React, Next.js, and Tailwind CSS for lightning-fast experiences",
      "SEO-friendly architecture to help your brand rank higher and reach a wider audience organically"
    ]
  },
  {
    title: "Software Development",
    metrics: [
      "Designing scalable and modular software solutions tailored to your business needs",
      "Seamless integration with third-party APIs and systems to enhance functionality and automation",
      "Security-first approach ensuring encrypted data, secure authentication, and high-performance delivery"
    ]
  },
  {
    title: "UI/UX Design",
    metrics: [
      "User research-driven design process to ensure intuitive and delightful digital experiences",
      "Interactive wireframes, Figma prototypes, and usability testing for visual perfection",
      "Data-backed design decisions that improve engagement, retention, and user satisfaction"
    ]
  },
  {
    title: "Content Writing",
    metrics: [
      "High-converting, SEO-optimized content crafted for blogs, websites, and campaigns",
      "Brand storytelling that emotionally connects with your audience and drives loyalty",
      "Experienced writers skilled in technical, creative, academic, and marketing content creation"
    ]
  }
];

  return (
    <section className="py-16 kaleo-gradient-bg">
      <div className="max-w-7xl mx-auto px-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-16"
        >
          <h2 className="text-section-header font-bold text-kaleo-text-primary">
            Featured Services
          </h2>
          <Link
            href="/contact"
            className="text-2xl font-medium text-kaleo-text-primary border border-kaleo-text-primary px-4 py-2 rounded-full hover:bg-kaleo-text-primary hover:text-white transition"
          >
            View All
          </Link>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {caseStudies.map((s, idx) => (
            <CaseStudyCard
              key={s.title}
              title={s.title}
              metrics={s.metrics}
              image={images[idx]}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
