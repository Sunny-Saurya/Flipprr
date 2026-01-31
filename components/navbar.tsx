"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Docs", href: "/about" },
  { name: "Projects", href: "/privacy-policy" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar Container */}
      <div className="fixed top-0 z-50 w-full flex items-center justify-center pt-6 px-4">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-5xl h-16 flex items-center justify-between 
                     px-6 md:px-8 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 
                     rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-md">
              <Image src="/data-transfer.png" alt="Flippr" width={20} height={20} className="invert dark:invert-0" />
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section (Desktop) */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <ModeToggle />
            <Link href="/">
              <Button
                size="sm"
                className="bg-black dark:bg-white text-white dark:text-black rounded-full px-6 
                           hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-full text-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <LuMenu />
          </button>
        </motion.nav>
      </div>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-24"></div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg 
                       border-l border-gray-200 dark:border-gray-700 shadow-xl flex flex-col p-6 gap-8 z-50"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-2xl hover:text-orange-500 transition"
            >
              <LuX />
            </button>

            {/* Nav Links */}
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Bottom Section (Theme + Get Started) */}
            <div className="mt-auto flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                <ModeToggle />
              </div>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Button
                  size="sm"
                  className="w-full bg-black dark:bg-white text-white dark:text-black rounded-full 
                             hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
