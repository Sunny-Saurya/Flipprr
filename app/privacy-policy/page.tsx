"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/ui/hero-section-9";
import { Shield, Lock, Eye, FileText } from "lucide-react";

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

export default function PrivacyPolicy() {
  const heroData = {
    title: (
      <>
        Your Privacy <br />
        <span className="bg-gradient-to-r from-orange-600 to-orange-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Matters
        </span>
      </>
    ),
    subtitle: 'We are committed to protecting your privacy and ensuring the security of your data. Learn how we handle your information with transparency and care.',
    actions: [
      {
        text: 'Start Using Flippr',
        onClick: () => window.location.href = '/',
        variant: 'default' as const,
      },
      {
        text: 'Read Policy',
        onClick: () => {
          const policySection = document.getElementById('policy-section');
          policySection?.scrollIntoView({ behavior: 'smooth' });
        },
        variant: 'outline' as const,
      },
    ],
    stats: [
      {
        value: 'Secure',
        label: 'Data Protection',
        icon: <Shield className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: 'Private',
        label: 'No Data Sharing',
        icon: <Lock className="h-5 w-5 text-muted-foreground" />,
      },
      {
        value: 'Transparent',
        label: 'Clear Policies',
        icon: <Eye className="h-5 w-5 text-muted-foreground" />,
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        actions={heroData.actions}
        stats={heroData.stats}
        images={heroData.images}
        className="pt-8"
      />

      {/* Effective Date */}
      <section className="px-6 md:px-12 lg:px-24 py-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-lg">
            <FileText className="inline-block w-5 h-5 mr-2 mb-1" />
            Effective Date: <span className="font-medium">August 20, 2025</span>
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section id="policy-section" className="px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-background to-muted">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {[
            {
              title: "1. Information We Collect",
              desc: `We collect and use limited information to improve the user experience. The only data we collect is through Google Analytics, which includes usage information such as pages visited, IP address, browser type, device type, and referral URLs.`,
            },
            {
              title: "2. How We Use Your Information",
              desc: `We use the information collected through Google Analytics solely for understanding user behavior and improving our website's performance. We do not sell, rent, or share this information with third parties.`,
            },
            {
              title: "3. Cookies and Tracking Technologies",
              desc: `We use cookies and similar tracking technologies to store information about your interactions with our site. You can control cookie preferences in your browser settings. Disabling cookies may affect your experience.`,
            },
            {
              title: "4. Data Security",
              desc: `We take reasonable measures to protect your data against unauthorized access, disclosure, alteration, or destruction. However, no method of online transmission or storage is 100% secure.`,
            },
            {
              title: "5. Third-Party Links",
              desc: `Our website may contain links to third-party websites or services. We are not responsible for the content or privacy practices of these sites. Please review their policies before providing personal data.`,
            },
            {
              title: "6. Children's Privacy",
              desc: `Our website is not intended for children under 13. We do not knowingly collect personal information from children. If you believe your child has provided us with data, contact us to remove it.`,
            },
            {
              title: "7. Changes to This Policy",
              desc: `We may update or modify this Privacy Policy at any time without prior notice. Updates are effective immediately upon posting, with the latest revision date displayed above.`,
            },
            {
              title: "8. Contact Us",
              desc: `If you have questions or concerns about this Privacy Policy, please contact us at: sunnnnnyyyyy25@gmail.com.`,
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 space-y-3 group"
            >
              <h2 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Closing Note */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-6"
        >
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">
              By using <span className="font-medium text-foreground">Flippr</span>, you agree to the practices outlined in this Privacy Policy.
              If you do not agree, please discontinue use of our services.
            </p>
            <p className="font-semibold text-xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Thank you for trusting us with your privacy.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
            className="mt-4 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Start Converting Files
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
