'use client';
import Dropzone from "@/components/dropzone";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/ui/hero-section-9";
import { useState, useEffect } from "react";
import { Sparkles, Zap, Shield, FileImage, FileVideo, FileAudio } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToUpload = () => {
    const uploadSection = document.getElementById('upload-section');
    uploadSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

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

  const heroData = {
    title: (
      <>
        Transform Your Files <br />
        <span className="bg-gradient-to-r from-orange-600 to-orange-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          In Seconds
        </span>
      </>
    ),
    subtitle: 'Convert images, videos, and audio files instantly. No signup required. Completely free, forever.',
    actions: [
      {
        text: 'Start Converting',
        onClick: scrollToUpload,
        variant: 'default' as const,
      },
      {
        text: 'Learn More',
        onClick: () => {
          const faqSection = document.querySelector('#faq-section');
          faqSection?.scrollIntoView({ behavior: 'smooth' });
        },
        variant: 'outline' as const,
      },
    ],
    stats: [
      {
        value: 'Images',
        label: 'JPG, PNG, WebP & more',
        icon: <FileImage className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: 'Videos',
        label: 'MP4, AVI, MOV & more',
        icon: <FileVideo className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: 'Audio',
        label: 'MP3, WAV, AAC & more',
        icon: <FileAudio className="h-5 w-5 text-muted-foreground" />,
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    ],
  };

  return (
    <>
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
        images={heroData.images}
        className="pt-8"
      />

      <section id="upload-section" className="flex flex-col items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Free, Unlimited File Conversion
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
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

        <div className="w-full max-w-3xl mx-auto">
          <Dropzone />
        </div>
      </section>

      <div id="faq-section">
        <FAQ />
      </div>
    </>
  );
}
