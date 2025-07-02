"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit px-6 py-2 rounded-full transition-all duration-300 border border-white/30 bg-white/20 backdrop-blur-md shadow-md",
        isScrolled ? "shadow-xl" : ""
      )}
    >
<<<<<<< HEAD
      {/* 🔥 Background Overlay */}
      <div className="absolute inset-0 z-0 animate-bgPulse pointer-events-none bg-[radial-gradient(circle_at_30%_30%,#ff008040,transparent_60%),radial-gradient(circle_at_70%_70%,#00bfff40,transparent_60%)] backdrop-blur-[2px] rounded-full" />

      {/* 🔘 Navigation Content */}
=======
      {/* 🔥 Multicolor Glass Overlay */}
      <div className="absolute inset-0 z-0 animate-bgPulse pointer-events-none bg-[radial-gradient(circle_at_30%_30%,#ff008040,transparent_60%),radial-gradient(circle_at_70%_70%,#00bfff40,transparent_60%)] backdrop-blur-[2px] rounded-full" />

      {/* 🔘 Actual Content */}
>>>>>>> ff0442c5437031aefb6e73b4c36f5bb3278677bb
      <div className="relative z-10 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="relative w-10 h-10 shrink-0">
          <Image
            src="/logo.png"
<<<<<<< HEAD
            alt="Logo"
=======
            alt="Social Logo"
>>>>>>> ff0442c5437031aefb6e73b4c36f5bb3278677bb
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
<<<<<<< HEAD
          <button
            onClick={() => scrollToSection("featured")}
            className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            Portfolio
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            About
          </button>

          <div className="relative group">
            <button
              onClick={() => scrollToSection("services")}
              className="flex items-center space-x-1 text-sm font-medium text-gray-800 hover:text-black transition-colors"
            >
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Dropdown Services List */}
=======
          <Link
            href="/case-studies"
            className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium text-gray-800 hover:text-black transition-colors">
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>
>>>>>>> ff0442c5437031aefb6e73b4c36f5bb3278677bb
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-2">
                <div className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500">
                  Our Services
                </div>
                {[
                  {
                    href: "/services/digital-marketing",
                    label: "Digital Marketing (Google Ads, SMM, PPC, Email)",
                  },
                  {
                    href: "/services/conversion-optimization",
                    label: "Conversion Optimization",
                  },
                  {
                    href: "/services/design-development",
                    label: "Design & Development (Web, UI/UX, CRM)",
                  },
                  {
                    href: "/services/software-development",
                    label: "Software Development",
                  },
                  {
                    href: "/services/content-strategy",
                    label: "Content & Strategy (Writing, Funnel)",
                  },
                  {
                    href: "/services/ecommerce-optimization",
                    label: "E-Commerce & SEO (Amazon, Store Setup)",
                  },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

<<<<<<< HEAD
        {/* Start Project Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection("contact")}
=======
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
>>>>>>> ff0442c5437031aefb6e73b4c36f5bb3278677bb
            size="lg"
            className="rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-gray-900 hover:bg-white/50 transition-all shadow-md"
          >
            Start a Project
          </Button>
        </div>

<<<<<<< HEAD
        {/* Mobile Menu Toggle */}
=======
        {/* Mobile Menu Button */}
>>>>>>> ff0442c5437031aefb6e73b4c36f5bb3278677bb
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
<<<<<<< HEAD
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="relative mt-4 md:hidden border-t border-white/30 bg-white/80 backdrop-blur-md rounded-xl shadow-lg px-4 py-6 space-y-4">
          <button
            onClick={() => scrollToSection("featured")}
            className="block text-sm font-medium text-gray-800 hover:text-black"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block text-sm font-medium text-gray-800 hover:text-black"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="block text-sm font-medium text-gray-800 hover:text-black"
          >
            Services
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
=======
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="relative mt-4 md:hidden border-t border-white/30 bg-white/80 backdrop-blur-md rounded-xl shadow-lg px-4 py-6 space-y-4">
          <Link
            href="/case-studies"
            className="block text-sm font-medium text-gray-800 hover:text-black"
          >
            Case Studies
          </Link>
          <Link
            href="/about"
            className="block text-sm font-medium text-gray-800 hover:text-black"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-sm font-medium text-gray-800 hover:text-black"
          >
            Services
          </Link>
          <Button
>>>>>>> ff0442c5437031aefb6e73b4c36f5bb3278677bb
            className="w-full rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-gray-900 hover:bg-white/50 transition-all shadow-md"
          >
            Start a Project
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navigation;
