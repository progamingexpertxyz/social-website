"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Phone } from "lucide-react";

const ContactSection = () => {
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
    <section id="contact" className="py-section kaleo-gradient-bg">
      <div className="max-w-7xl mx-auto px-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Booking Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-8 kaleo-shadow h-fit">
              <div className="text-center">
                <div className="w-16 h-16 bg-kaleo-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-card-title font-bold text-kaleo-text-primary mb-4">
                  Book a call
                </h3>
                <p className="text-body text-kaleo-text-secondary mb-8">
                  Let's discuss your project and see how we can help bring your
                  vision to life.
                </p>
                <Button variant="dark" size="lg" className="w-full">
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
            <div className="bg-white rounded-2xl p-8 kaleo-shadow">
              <h3 className="text-card-title font-bold text-kaleo-text-primary mb-8">
                Start a project
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Your name" placeholder="John Doe" />
                  <Input
                    label="Email address"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>

                <Textarea
                  label="Tell us more"
                  placeholder="Describe your project..."
                  rows={4}
                />

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
                            className="w-4 h-4 text-black border-white bg-transparent focus:ring-white"
                          />
                          <span className="text-sm text-black">{main}</span>
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
                                  className="w-4 h-4 text-black border-white bg-transparent focus:ring-white"
                                />
                                <span className="text-sm text-black">{item}</span>
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
                  <label className="text-sm font-medium text-kaleo-text-primary">
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
                          className="w-4 h-4 text-kaleo-gray-900 border-kaleo-border focus:ring-kaleo-gray-900"
                        />
                        <span className="text-sm text-kaleo-text-primary">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="dark" size="lg" className="w-full">
                  Submit Message
                </Button>
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
          <p className="text-kaleo-text-secondary text-sm mb-8">
            Trusted by industry leaders
          </p>
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center space-x-12 animate-marquee">
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
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
