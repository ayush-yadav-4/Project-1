"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import LoadingText from "./LoadingText";

const faqs = [
  {
    question: "How do I list my AI Agent on the marketplace?",
    answer: "Listing your agent is simple. Create an account, navigate to the 'Sell' dashboard, and follow the step-by-step submission process. Our team reviews all submissions within 24-48 hours to ensure quality and safety standards."
  },
  {
    question: "What are the fees for selling agents?",
    answer: "We charge a flat 15% commission on all sales. There are no listing fees or monthly subscriptions for sellers. You only pay when you make a sale."
  },
  {
    question: "Do you offer enterprise support agreements?",
    answer: "Yes, we offer tailored enterprise agreements that include dedicated support, SLA guarantees, and custom integration services. Contact our sales team for more details."
  },
  {
    question: "How are the AI agents vetted for safety?",
    answer: "Every agent goes through our rigorous 'Hallucination Manager' and safety protocols. We test for security vulnerabilities, bias, and performance reliability before any agent goes live."
  },
  {
    question: "Can I get a refund if an agent doesn't work?",
    answer: "We offer a 7-day money-back guarantee if an agent fails to perform as described. Our support team will verify the issue and process your refund promptly."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto 
        bg-white rounded-[2.5rem] shadow-xl
        border border-orange-600 p-8 md:p-20 relative overflow-hidden">
        {/* Decorative Gradient Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/10 to-yellow-500/10 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <LoadingText 
              text="Frequently Asked Questions" 
              className="text-3xl md:text-5xl font-bold text-gray-900 justify-center mb-6"
            />
            <p className="text-gray-500 text-lg">Everything you need to know about the marketplace.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
                  activeIndex === index ? "border-orange-200 shadow-[0_10px_30px_-10px_rgba(255,165,0,0.2)]" : "border-gray-100 hover:border-orange-200 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-lg font-semibold ${activeIndex === index ? "text-orange-600" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <span className={`ml-4 p-2 rounded-full transition-colors ${activeIndex === index ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-500"}`}>
                    {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
