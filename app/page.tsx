"use client";

import Dropzone from "@/components/dropzone";
import FAQ from "@/components/FAQ";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-blue-500 rounded-full animate-spin" />
            <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-500" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Loading Flippr...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center px-4 sm:px-6 pt-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20 dark:via-transparent pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-2 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Free, Unlimited File Conversion
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight animate-fade-in-up">
            Transform Your Files
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              In Seconds
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Convert images, videos, and audio files instantly. 
            No signup required. Completely free, forever.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Lightning Fast
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                100% Secure
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                No Limits
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto mt-12 relative z-10 animate-fade-in-up animation-delay-400">
          <Dropzone />
        </div>
      </section>

      <FAQ />
    </>
  );
}
