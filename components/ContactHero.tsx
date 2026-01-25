"use client";

import { useState, useEffect } from "react";
import { Check, Send, X } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const benefits = [
    "No sales pitches - just a quick tour",
    "See real AI agents in action",
    "Personalized for your needs",
    "Answers to your questions, live",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setShowSuccess(true);
        setFormData({ fullName: "", email: "", phone: "", company: "", message: "" });
      } else {
        const errorMessage = result.error || "Failed to send email. Please try again later.";
        window.alert(errorMessage);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      window.alert("An unexpected error occurred. Please try again later.");
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative w-full pt-2 sm:pt-4 pb-10 sm:pb-12 md:pb-20 lg:pb-24 overflow-hidden bg-white">
      {/* Success Alert Box */}
      {showSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 z-[100] max-w-sm w-full sm:w-auto bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-green-100 p-4 sm:p-6"
        >
          <button
            onClick={() => setShowSuccess(false)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 stroke-[3px]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg leading-tight mb-1">Email sent!</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">We will reach you back in 24h.</p>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Background Grid - "Squares" - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white hidden sm:block bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Background decoration - Smaller on mobile */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-pink-100/30 sm:bg-pink-100/40 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-orange-100/30 sm:bg-orange-100/40 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="container px-4 sm:px-5 md:px-6 mx-auto relative">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-4 sm:pt-6 md:pt-10 order-1 lg:order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">We'd love to</span>
              <br />
              <span className="text-black">Show you around!</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 md:mb-10 max-w-lg leading-relaxed">
              Let's explore how AI agents can transform your workflow. Schedule a personalized demo or reach out with any questions.
            </p>

            {/* Benefits - Horizontal scroll on mobile, vertical on larger screens */}
            <div className="hidden sm:block">
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-rose-500 stroke-[3px]" />
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Mobile benefits - compact grid */}
            <div className="sm:hidden">
              <div className="grid grid-cols-2 gap-2">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-2 p-3 bg-rose-50/50 rounded-xl"
                  >
                    <div className="w-4 h-4 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-rose-500 stroke-[3px]" />
                    </div>
                    <span className="text-gray-600 text-xs leading-tight">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-2xl mx-auto lg:ml-auto order-2 lg:order-2"
          >
            <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-100 p-5 sm:p-6 md:p-8 lg:p-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5 sm:mb-6 md:mb-8">
                Get in touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="eg: Jack Sparrow"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#F9F5F1] border-transparent focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-800 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Work Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#F9F5F1] border-transparent focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-800 text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#F9F5F1] border-transparent focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-800 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#F9F5F1] border-transparent focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-800 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-[#F9F5F1] border-transparent focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-800 resize-none text-sm sm:text-base sm:rows-4"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-400 to-orange-400 text-white font-bold text-base sm:text-lg rounded-xl py-3.5 sm:py-4 px-6 hover:shadow-lg hover:shadow-rose-200 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-1 sm:mt-2 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="text-sm sm:text-base">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
