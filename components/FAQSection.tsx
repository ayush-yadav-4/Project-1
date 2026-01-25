"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is an AI agent marketplace?",
    answer: "An AI agent marketplace is a platform where you can discover, buy, and sell specialized AI agents designed to automate various business tasks and workflows."
  },
  {
    question: "How do I get started with AI agents?",
    answer: "Simply browse our marketplace, select an agent that fits your needs, and follow the integration guide. Our agents come with detailed documentation and support."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including Finance, Healthcare, Marketing, Customer Support, Legal, and IT, providing tailored AI solutions for each sector."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, many of our agents offer a trial period or a free tier so you can test their capabilities before committing to a paid plan."
  },
  {
    question: "How secure is my data?",
    answer: "Security is our top priority. We use enterprise-grade encryption and follow strict data privacy protocols to ensure your information remains safe and confidential."
  },
  {
    question: "Can I integrate AI agents with my existing tools?",
    answer: "Absolutely. Our agents are designed to integrate seamlessly with popular business tools like Slack, Salesforce, HubSpot, and Notion via APIs and native connectors."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F9F5F1] relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-5 md:mb-6"
          >
            <span className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full bg-orange-100 text-orange-500 text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              FAQ
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-3 sm:mb-4 md:mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto px-2"
          >
            Find answers to common questions about our AI agent marketplace and services.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-xl sm:rounded-2xl md:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden bg-white shadow-sm transition-all duration-300 ${
                activeIndex === index 
                  ? "shadow-md ring-1 ring-orange-100" 
                  : "hover:shadow-md hover:bg-gray-50/50"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex items-start sm:items-center justify-between text-left focus:outline-none group gap-3"
              >
                <span className="text-sm sm:text-base md:text-lg font-medium text-[#1a1a1a] leading-snug pr-2">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index 
                    ? "bg-orange-100 rotate-180" 
                    : "bg-gray-100 group-hover:bg-gray-200"
                }`}>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                    activeIndex === index ? "text-orange-500" : "text-gray-400"
                  }`} />
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 text-gray-500 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3 sm:pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Contact CTA for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <p className="text-gray-500 text-sm sm:text-base mb-3">
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 text-white font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 active:scale-[0.98]"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
