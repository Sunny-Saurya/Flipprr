"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/ui/hero-section-9";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileImage,
  Music,
  Video,
  Rocket,
  Globe,
  Lock,
  Lightbulb,
  TrendingUp,
  Star,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <FileImage className="text-pink-500" size={32} />,
    title: "Image Conversion",
    desc: "Resize, crop, rotate, or convert formats effortlessly. From JPEG to PNG and beyond.",
  },
  {
    icon: <Music className="text-blue-500" size={32} />,
    title: "Audio Transformation",
    desc: "Convert MP3, WAV, AAC and more. Adjust bitrates, trim, and merge your soundtracks.",
  },
  {
    icon: <Video className="text-purple-500" size={32} />,
    title: "Video Editing & Conversion",
    desc: "Cut, merge, and transcode videos without limits. Create stunning video content.",
  },
  {
    icon: <Rocket className="text-orange-500" size={32} />,
    title: "Unlimited Usage",
    desc: "No hidden fees. Convert as many files as you want—completely free, forever.",
  },
  {
    icon: <Globe className="text-green-500" size={32} />,
    title: "Accessible Anywhere",
    desc: "Use Flippr on any device—desktop, tablet, or smartphone, anytime, anywhere.",
  },
  {
    icon: <Lock className="text-red-500" size={32} />,
    title: "Secure & Private",
    desc: "Your files remain yours. We prioritize privacy and security in every process.",
  },
  {
    icon: <Lightbulb className="text-yellow-500" size={32} />,
    title: "User-Friendly",
    desc: "An intuitive interface designed for beginners and experts. No steep learning curve.",
  },
  {
    icon: <TrendingUp className="text-cyan-500" size={32} />,
    title: "Constantly Improving",
    desc: "We continuously add new features and improvements to support your workflow.",
  },
  {
    icon: <Star className="text-pink-400" size={32} />,
    title: "Free & Powerful",
    desc: "Convert without boundaries. Elevate your projects with a tool that just works.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  const heroData = {
    title: (
      <>
        Why Choose <br />
        <span className="bg-gradient-to-r from-orange-600 to-orange-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Flippr?
        </span>
      </>
    ),
    subtitle: 'Your all-in-one multimedia conversion powerhouse. Transform images, audio, and videos with total freedom—beautifully, seamlessly, and at no cost.',
    actions: [
      {
        text: 'Start Converting Now',
        onClick: () => window.location.href = '/',
        variant: 'default' as const,
      },
      {
        text: 'View Features',
        onClick: () => {
          const featuresSection = document.getElementById('features-section');
          featuresSection?.scrollIntoView({ behavior: 'smooth' });
        },
        variant: 'outline' as const,
      },
    ],
    stats: [
      {
        value: '100%',
        label: 'Free Forever',
        icon: <Sparkles className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: 'Unlimited',
        label: 'File Conversions',
        icon: <Rocket className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: 'Secure',
        label: 'Privacy First',
        icon: <Lock className="h-5 w-5 text-muted-foreground" />,
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
    ],
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
        images={heroData.images}
        className="pt-8"
      />

      {/* Features Section */}
      <section id="features-section" className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-background to-muted">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Powerful features designed to make your workflow seamless and efficient
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 rounded-2xl group">
                <CardContent className="flex flex-col items-start gap-4 p-8">
                  <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors">
                    {f.icon}
                  </div>
                  <h2 className="text-2xl font-semibold">{f.title}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Closing Statement */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Files?
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join thousands of creators, professionals, and enthusiasts transforming the way they work with multimedia.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
