"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    <section className="w-full px-4 md:px-8 lg:px-16 py-24 bg-[#F9F5F1] relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="py-2 px-6 rounded-full bg-orange-100 text-orange-500 text-sm font-medium tracking-wide">
              FAQ
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto"
          >
            Find answers to common questions about our AI agent marketplace and services.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-lg font-medium text-[#1a1a1a]">
                  {faq.question}
                </span>
                <span className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
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
                    <div className="px-8 pb-8 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
