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
  { name: "About", href: "/about" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full h-16 md:h-20 flex items-center justify-between 
                 px-6 md:px-12 lg:px-16 xl:px-24 backdrop-blur-md bg-background/60 
                 border-b border-border shadow-sm"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/data-transfer.png" alt="Flippr" width={32} height={32} />
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Flipprr
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative font-medium text-md text-muted-foreground hover:text-foreground transition"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Right Section (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <ModeToggle />
        <Link href="https://github.com/sunny-saurya" target="_blank">
          <Button
            variant="default"
            size="sm"
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 
                       text-white rounded-full shadow-md hover:shadow-lg transition"
          >
            <BsGithub className="text-lg" />
            <span className="font-medium">GitHub</span>
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden p-2 rounded-md text-2xl text-foreground hover:bg-accent transition"
      >
        <LuMenu />
      </button>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-background/95 backdrop-blur-lg 
                       border-l border-border shadow-xl flex flex-col p-6 gap-8 z-50"
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
                  className="text-lg font-medium text-muted-foreground hover:text-orange-500 transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Bottom Section (Theme + GitHub) */}
            <div className="mt-auto flex items-center gap-4">
              <ModeToggle />
              <Link href="https://github.com/sunny-saurya" target="_blank">
                <Button
                  variant="default"
                  size="sm"
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 
                             text-white rounded-full shadow-md hover:shadow-lg transition"
                >
                  <BsGithub className="text-lg" />
                  <span className="font-medium">GitHub</span>
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
