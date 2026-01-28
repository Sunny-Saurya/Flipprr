export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-24 py-16 space-y-16 bg-gradient-to-b from-background via-background to-muted">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-lg">
          Effective Date: <span className="font-medium">August 20, 2025</span>
        </p>
      </div>

      {/* Policy Sections */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {[
          {
            title: "1. Information We Collect",
            desc: `We collect and use limited information to improve the user experience. The only data we collect is
            through Google Analytics, which includes usage information such as pages visited, IP address, browser type,
            device type, and referral URLs.`,
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
            desc: `If you have questions or concerns about this Privacy Policy, please contact us at: 
            sunnnnnyyyyy25@gmail.com.`,
          },
        ].map((section, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 dark:bg-background/50 backdrop-blur-sm shadow-sm space-y-2"
          >
            <h2 className="text-xl md:text-2xl font-semibold">{section.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{section.desc}</p>
          </div>
        ))}
      </div>

      {/* Closing Note */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <p className="text-muted-foreground text-lg">
          By using <span className="font-medium">Flippr</span>, you agree to the practices outlined in this Privacy Policy.
          If you do not agree, please discontinue use of our services.
        </p>
        <p className="font-semibold text-lg bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Thank you for trusting us with your privacy.
        </p>
      </div>
    </div>
  );
}
