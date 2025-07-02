"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Palette,
  ShoppingCart,
  Mail,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  href: string;
  index: number;
}

const ServiceCard = ({
  title,
  description,
  features,
  icon,
  href,
  index,
}: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative z-10"
  >
    <div className="mb-6">
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-card-title font-bold text-white mb-2">{title}</h3>
      <p className="text-body text-white/80">{description}</p>
    </div>

    <div className="space-y-3 mb-8">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-center space-x-3">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <span className="text-body text-white/90">{feature}</span>
        </div>
      ))}
    </div>

    <Link href={href}>
      <Button
        variant="outline"
        className="border-white text-white hover:bg-white hover:text-kaleo-gray-900 group"
      >
        Learn More
        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Link>
  </motion.div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Boost your visibility with expert-level marketing including Google Ads, social media, and email campaigns.",
      features: [
        "Google Ads",
        "Social Media Marketing",
        "PPC Management",
        "Email Marketing",
      ],
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      href: "/services/digital-marketing",
    },
    {
      title: "Conversion Optimization",
      description:
        "Turn more visitors into leads and customers with data-backed CRO strategies.",
      features: [
        "Funnel Testing",
        "Heatmaps & Analytics",
        "Landing Page Optimization",
      ],
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      href: "/services/conversion-optimization",
    },
    {
      title: "Design & Development",
      description:
        "Custom websites, UI/UX design, and CRM integration to bring your product to life.",
      features: ["Website Design", "UI/UX Design", "CRM Integration"],
      icon: <Palette className="h-6 w-6 text-white" />,
      href: "/services/design-development",
    },
    {
      title: "Software Development",
      description:
        "Powerful, scalable software tailored to your business — desktop, mobile or web.",
      features: ["Full-stack Development", "API Integrations", "Cross-Platform Apps"],
      icon: <Code className="h-6 w-6 text-white" />,
      href: "/services/software-development",
    },
    {
      title: "Content & Strategy",
      description:
        "Drive engagement with compelling content and strategic storytelling.",
      features: ["Content Writing", "SEO Copy", "Conversion-Focused Funnels"],
      icon: <Mail className="h-6 w-6 text-white" />,
      href: "/services/content-strategy",
    },
    {
      title: "E-Commerce & SEO",
      description:
        "Setup and optimize your online store with SEO and Amazon integration.",
      features: ["Amazon Store Setup", "Shopify/WordPress", "SEO for Products"],
      icon: <ShoppingCart className="h-6 w-6 text-white" />,
      href: "/services/ecommerce-optimization",
    },
  ];

  return (
    <section
      id="services"
      className="py-section relative overflow-hidden bg-[#0f172a] text-white"
    >
      {/* 🔥 Glass Animated Overlay */}
      <div className="absolute inset-0 z-0 animate-bgPulse pointer-events-none bg-[radial-gradient(circle_at_30%_30%,#ff008040,transparent_60%),radial-gradient(circle_at_70%_70%,#00bfff40,transparent_60%)] backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-header font-bold">Our Services</h2>
          <p className="text-body text-white/80 mt-4 max-w-4xl mx-auto">
            From marketing to full-stack development — we help brands scale fast and smart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              href={service.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
