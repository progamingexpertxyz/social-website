"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const footerColumns = [
    {
      title: "Company",
      links: [
        { name: "About us", href: "/about" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Portfolio", href: "/Portfolio" },
        { name: "Start a Project", href: "/contact" },
      ],
    },
    {
      title: "Our Services",
      links: [
        {
          name: "Digital Marketing ",
          href: "/services/digital-marketing",
        },
        {
          name: "Conversion Optimization",
          href: "/services/conversion-optimization",
        },
        {
          name: "Design & Development ",
          href: "/services/design-development",
        },
        {
          name: "Software Development",
          href: "/services/software-development",
        },
        {
          name: "Content & Strategy ",
          href: "/services/content-strategy",
        },
        {
          name: "E-Commerce & SEO ",
          href: "/services/ecommerce-optimization",
        },
      ],
    },
    {
      title: "MVP Breakout",
      links: [
        { name: "Founders Track", href: "/mvp/founders" },
        { name: "Growth Track", href: "/mvp/growth" },
        { name: "Venture Track", href: "/mvp/venture" },
      ],
    },
    {
      title: "Socials",
      links: [
        { name: "Instagram", href: "https://instagram.com", external: true },
        { name: "Facebook", href: "https://facebook.com", external: true },
        { name: "Twitter (X)", href: "https://twitter.com", external: true },
        { name: "LinkedIn", href: "https://linkedin.com", external: true },
      ],
    },
  ];

  return (
    <footer className="relative kaleo-dark-bg overflow-hidden">
      {/* 🔥 Multicolor Glass Overlay */}
      <div className="absolute inset-0 z-0 animate-bgPulse pointer-events-none bg-[radial-gradient(circle_at_30%_30%,#ff008040,transparent_60%),radial-gradient(circle_at_70%_70%,#00bfff40,transparent_60%)] backdrop-blur-[2px]" />

      {/* Footer Header */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-subheader font-bold text-white mb-6">
                WE ARE THE END POINT <br />
                FOR ALL YOUR DIGITAL MARKETING NEEDS.
              </h2>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-kaleo-gray-900"
              >
                Start a Project
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Get in touch</p>
                  <a
                    href="mailto:team@social.agency"
                    className="text-white font-medium hover:text-white/80 transition-colors"
                  >
                    team@social.agency
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto px-container py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-white/50 text-sm">
              © 2025 Social end point. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
