"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const ContactPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const servicesWithSub = {
    "Digital Marketing": [
      "Google Ads",
      "Social Media Marketing",
      "Pay Per Click",
      "Email Marketing",
    ],
    "Conversion Optimization": [],
    "Design & Development": ["Web", "UI/UX", "CRM"],
    "Software Development": [],
    "Content & Strategy": ["Writing", "Funnel"],
    "E-Commerce & SEO": ["Amazon", "Store Setup"],
  };

  const budgetOptions = ["Under $20k", "$20k - $40k", "$40k - $60k", "$60k+"];

  const companies = [
    "FlutterFlow",
    "Torchy's Tacos",
    "Rentcheck",
    "NoCodeUI",
    "WHO",
    "KnowHim",
  ];

  return (
    <section
      id="contact"
      className="relative py-0 bg-transparent text-white overflow-hidden"
    >
      <div className="max-w-[100rem] mx-auto px-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Booking Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-card-title font-bold text-white mb-4">
                  Book a call
                </h3>
                <p className="text-body text-white/80 mb-8">
                  Let's discuss your project and see how we can help bring your
                  vision to life.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-white border-white"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Book a call
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-card-title font-bold text-white mb-8">
                Start a project
              </h3>

              <form className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Tell us more
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project..."
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                </div>

                {/* Dynamic Project Options */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-white">
                    Select a Service
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(servicesWithSub).map(([main, sub]) => (
                      <div key={main}>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="service"
                            value={main}
                            checked={selectedService === main}
                            onChange={() => setSelectedService(main)}
                            className="w-4 h-4 text-white border-white bg-transparent focus:ring-white"
                          />
                          <span className="text-sm text-white">{main}</span>
                        </label>
                        {selectedService === main && sub.length > 0 && (
                          <div className="ml-6 mt-2 space-y-1">
                            {sub.map((item) => (
                              <label
                                key={item}
                                className="flex items-center space-x-2 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  name="subservice"
                                  value={item}
                                  className="w-4 h-4 text-white border-white bg-transparent focus:ring-white"
                                />
                                <span className="text-sm text-white">{item}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-white">
                    Budget estimation
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {budgetOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={option}
                          className="w-4 h-4 text-white border-white bg-transparent focus:ring-white"
                        />
                        <span className="text-sm text-white">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-[#0f172a] font-semibold rounded-lg hover:bg-white/90 transition"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Company Logos Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white text-sm mb-8">Trusted by industry leaders</p>
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center space-x-12 animate-marquee">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company}-${index}`}
                  className="text-white/70 font-medium whitespace-nowrap"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
