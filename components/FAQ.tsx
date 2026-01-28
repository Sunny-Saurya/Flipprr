"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What types of files can I upload?",
    answer:
      "You can upload images (JPG, PNG), audio files (MP3, WAV), and videos (MP4, MOV). More formats will be supported soon.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "Yes, currently each file must be under 50MB. We’re working on enabling larger uploads with cloud storage support.",
  },
  {
    question: "Can I preview files after uploading?",
    answer:
      "Absolutely! Uploaded images, videos, and audio tracks can be instantly previewed before saving or sharing.",
  },
  {
    question: "How secure are my files?",
    answer:
      "All files are encrypted in transit. We’re also adding private storage options so only you can access your uploads.",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "Yes! The platform is fully responsive, so you can upload, preview, and manage your files directly from your phone or tablet.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
