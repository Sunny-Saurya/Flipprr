"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaImage,
  FaMusic,
  FaVideo,
  FaRocket,
  FaGlobe,
  FaLock,
  FaLightbulb,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaImage className="text-pink-500 text-4xl" />,
    title: "Image Conversion",
    desc: "Resize, crop, rotate, or convert formats effortlessly. From JPEG to PNG and beyond.",
  },
  {
    icon: <FaMusic className="text-blue-500 text-4xl" />,
    title: "Audio Transformation",
    desc: "Convert MP3, WAV, AAC and more. Adjust bitrates, trim, and merge your soundtracks.",
  },
  {
    icon: <FaVideo className="text-purple-500 text-4xl" />,
    title: "Video Editing & Conversion",
    desc: "Cut, merge, and transcode videos without limits. Create stunning video content.",
  },
  {
    icon: <FaRocket className="text-orange-500 text-4xl" />,
    title: "Unlimited Usage",
    desc: "No hidden fees. Convert as many files as you want—completely free, forever.",
  },
  {
    icon: <FaGlobe className="text-green-500 text-4xl" />,
    title: "Accessible Anywhere",
    desc: "Use Flippr on any device—desktop, tablet, or smartphone, anytime, anywhere.",
  },
  {
    icon: <FaLock className="text-red-500 text-4xl" />,
    title: "Secure & Private",
    desc: "Your files remain yours. We prioritize privacy and security in every process.",
  },
  {
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    title: "User-Friendly",
    desc: "An intuitive interface designed for beginners and experts. No steep learning curve.",
  },
  {
    icon: <FaChartLine className="text-cyan-500 text-4xl" />,
    title: "Constantly Improving",
    desc: "We continuously add new features and improvements to support your workflow.",
  },
  {
    icon: <FaStar className="text-pink-400 text-4xl" />,
    title: "Free & Powerful",
    desc: "Convert without boundaries. Elevate your projects with a tool that just works.",
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted px-6 md:px-12 lg:px-24 py-24 space-y-20">
      
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Why Choose Flippr?
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl">
          Flippr is your all-in-one multimedia conversion powerhouse. Transform images, audio, and videos 
          with total freedom—beautifully, seamlessly, and at no cost.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Card className="h-full border border-white/10 bg-white/5 dark:bg-background/50 backdrop-blur-md shadow-lg hover:shadow-2xl transition hover:-translate-y-2 duration-300 rounded-2xl">
              <CardContent className="flex flex-col items-start gap-4 p-8">
                {f.icon}
                <h2 className="text-2xl font-semibold">{f.title}</h2>
                <p className="text-muted-foreground text-base leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <p className="text-lg md:text-xl text-muted-foreground">
          Join thousands of creators, professionals, and enthusiasts transforming the way they work with multimedia.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236,72,153,0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg transition"
        >
          Get Started Free
        </motion.button>
      </motion.div>
    </div>
  );
}
