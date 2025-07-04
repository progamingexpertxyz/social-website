"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, Sparkles } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  video: string;
  index: number;
  likes: string;
  rating: string;
}

const descriptions: { [key: string]: string } = {
  "Web Development":
    "We build lightning-fast, modern websites that don’t just look stunning — they perform flawlessly across all devices and help your business grow.",
  "E-Commerce Development":
    "Our e-commerce solutions are built to scale, boost conversion rates, and deliver seamless shopping experiences for your customers worldwide.",
  "UI/UX Design":
    "Every pixel matters. We design intuitive, clean, and emotionally engaging digital interfaces that turn users into loyal customers.",
  "Content Writing":
    "Powerful words, tailored for your brand. We write content that not only ranks on Google but also connects deeply with your audience.",
};

const CaseStudyCard = ({
  title,
  video,
  index,
  likes,
  rating,
}: CaseStudyCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    requestAnimationFrame(() => {
      if (videoRef.current?.paused) {
        videoRef.current.play().catch(() => {});
      }
    });
  };

  const handleMouseLeave = () => {
    requestAnimationFrame(() => {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer w-full max-w-[1000px] mx-auto transition-transform duration-300"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 h-[600px]">
        {/* Video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          controls={false}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-[#ffffff0d] via-[#ffffff1a] to-[#ffffff0d] mix-blend-overlay opacity-60" />

        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 bg-black/50 backdrop-blur-sm text-white px-10 py-12 flex flex-col items-center justify-center text-center opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out">
          <div>
            <h3 className="text-4xl font-bold mb-4 drop-shadow-lg">{title}</h3>
            <p className="text-lg leading-relaxed font-medium max-w-2xl mx-auto drop-shadow">
              {descriptions[title]}
            </p>
          </div>
          <div className="flex gap-10 items-center justify-center text-xl font-semibold mt-10">
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-6 h-6 text-green-400" />
              <span>{likes} Likes</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              <span>{rating} Rating</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedWorkSection = () => {
  const caseStudies = [
    {
      title: "Web Development",
      video: "/web.mp4",
      likes: "2.4k",
      rating: "4.9",
    },
    {
      title: "E-Commerce Development",
      video: "/ecommerce.mp4",
      likes: "3.1k",
      rating: "4.8",
    },
    {
      title: "UI/UX Design",
      video: "/ui.mp4",
      likes: "2.7k",
      rating: "4.95",
    },
    {
      title: "Content Writing",
      video: "/content.mp4",
      likes: "1.9k",
      rating: "4.7",
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="featured" className="py-20 kaleo-gradient-bg">
      <div className="max-w-7xl mx-auto px-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-16"
        >
          <h2 className="text-5xl font-bold text-kaleo-text-primary">
            Featured Work
          </h2>
          <button
            onClick={scrollToContact}
            className="text-2xl font-medium text-kaleo-text-primary border border-kaleo-text-primary px-6 py-3 rounded-full hover:bg-kaleo-text-primary hover:text-white transition"
          >
            View All
          </button>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {caseStudies.map((study, idx) => (
            <CaseStudyCard
              key={study.title}
              title={study.title}
              video={study.video}
              index={idx}
              likes={study.likes}
              rating={study.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
