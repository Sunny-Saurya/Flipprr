"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, FileImage } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

const footerLinks = {
  resources: {
    title: "RESOURCES",
    items: [
      { name: "Freebies & Audits", href: "/", badge: false },
      { name: "Tools", href: "/", badge: false },
      { name: "Psychology", href: "/", badge: false },
      { name: "Blog", href: "/", badge: "soon" },
      { name: "Components", href: "/", badge: "soon" },
      { name: "Playbooks", href: "/", badge: "soon" },
    ],
  },
  company: {
    title: "COMPANY",
    badge: "SOON",
    items: [
      { name: "Mission", href: "/about", badge: false },
      { name: "SaaS Ecosystem", href: "/", badge: false },
      { name: "Affiliate Program", href: "/", badge: false },
      { name: "Referral Program", href: "/", badge: false },
      { name: "Partners", href: "/", badge: false },
      { name: "About Us", href: "/about", badge: false },
    ],
  },
  compare: {
    title: "COMPARE",
    badge: "SOON",
    items: [
      { name: "DaaS", href: "/", badge: false },
      { name: "PLG Boutique", href: "/", badge: false },
      { name: "ProductLed", href: "/", badge: false },
      { name: "Vulnabyl", href: "/", badge: false },
      { name: "GrowthMates", href: "/", badge: false },
      { name: "DelightPath", href: "/", badge: false },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-100 dark:bg-gray-900/50 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800/50 rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Flippr
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                Transform your media files effortlessly. Convert images, videos, and audio with unlimited freedom—beautifully, seamlessly, and at no cost.
              </p>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4 tracking-wider">
                {footerLinks.resources.title}
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                    >
                      {item.name}
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs px-2 py-0">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wider">
                  {footerLinks.company.title}
                </h4>
                {footerLinks.company.badge && (
                  <Badge variant="secondary" className="text-xs px-2 py-0">
                    {footerLinks.company.badge}
                  </Badge>
                )}
              </div>
              <ul className="space-y-3">
                {footerLinks.company.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                    >
                      {item.name}
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs px-2 py-0">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compare Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wider">
                  {footerLinks.compare.title}
                </h4>
                {footerLinks.compare.badge && (
                  <Badge variant="secondary" className="text-xs px-2 py-0">
                    {footerLinks.compare.badge}
                  </Badge>
                )}
              </div>
              <ul className="space-y-3">
                {footerLinks.compare.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-sm flex items-center gap-2"
                    >
                      {item.name}
                      {item.badge && (
                        <Badge variant="secondary" className="text-xs px-2 py-0">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400"
        >
          {/* Copyright & Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <p>©{new Date().getFullYear()} Flippr. All rights reserved.</p>
            <Link href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Terms & Co
            </Link>
            <Link href="/about" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              About Us
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/sunny766/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
