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

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-container">
        <div className="flex items-center justify-between h-20">
    <Link href="/" className="relative w-10 h-10">
        <Image
          src="/logo.png" 
          alt="Social Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/case-studies"
              className="text-kaleo-text-primary hover:text-kaleo-gray-900 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-kaleo-text-primary hover:text-kaleo-gray-900 transition-colors"
            >
              About
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-kaleo-text-primary hover:text-kaleo-gray-900 transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
  {/* Overview */}
  <div className="px-4 py-2 text-xs uppercase tracking-wider text-kaleo-text-secondary">
    Our Services
  </div>
  <Link
    href="/services/digital-marketing"
    className="block px-4 py-2 text-sm text-kaleo-text-primary hover:bg-kaleo-gray-50"
  >
    Digital Marketing (Google Ads, SMM, PPC, Email)
  </Link>
  <Link
    href="/services/conversion-optimization"
    className="block px-4 py-2 text-sm text-kaleo-text-primary hover:bg-kaleo-gray-50"
  >
    Conversion Optimization
  </Link>
  <Link
    href="/services/design-development"
    className="block px-4 py-2 text-sm text-kaleo-text-primary hover:bg-kaleo-gray-50"
  >
    Design & Development (Web, UI/UX, CRM)
  </Link>
  <Link
    href="/services/software-development"
    className="block px-4 py-2 text-sm text-kaleo-text-primary hover:bg-kaleo-gray-50"
  >
    Software Development
  </Link>
  <Link
    href="/services/content-strategy"
    className="block px-4 py-2 text-sm text-kaleo-text-primary hover:bg-kaleo-gray-50"
  >
    Content & Strategy (Writing, Funnel)
  </Link>
  <Link
    href="/services/ecommerce-optimization"
    className="block px-4 py-2 text-sm text-kaleo-text-primary hover:bg-kaleo-gray-50"
  >
    E-Commerce & SEO (Amazon, Store Setup)
  </Link>
</div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="dark" size="lg">
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-kaleo-border bg-white">
            <div className="py-4 space-y-4">
              <Link
                href="/case-studies"
                className="block text-kaleo-text-primary hover:text-kaleo-gray-900"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="block text-kaleo-text-primary hover:text-kaleo-gray-900"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-kaleo-text-primary hover:text-kaleo-gray-900"
              >
                Services
              </Link>
              <Button variant="dark" className="w-full">
                Start a Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
