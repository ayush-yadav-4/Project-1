"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    "No sales pitches - just a quick tour",
    "See real AI agents in action",
    "Personalized for your needs",
    "Answers to your questions, live",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    alert("Message sent successfully! We'll get back to you within 24 hours.");
    
    setFormData({ fullName: "", email: "", phone: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative w-full pt-4 pb-12 md:pb-20 lg:pb-24 overflow-hidden bg-white">
      {/* Background Grid - "Squares" */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up pt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">We'd love to</span>
              <br />
              <span className="text-black">Show you around!</span>
            </h1>
            
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              Let's explore how AI agents can transform your workflow. Schedule a personalized demo or reach out with any questions.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-rose-500 stroke-[3px]" />
                  </div>
                  <span className="text-gray-600 text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Form */}
          <div className="animate-fade-in-up delay-100 w-full max-w-2xl ml-auto" style={{ animationDelay: "200ms" }}>
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-100 p-8 md:p-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Get in touch
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
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
                    className="w-full px-5 py-4 rounded-xl bg-[#F9F5F1] border-transparent focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
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
                    className="w-full px-5 py-4 rounded-xl bg-[#F9F5F1] border-transparent focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-800"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="w-full px-5 py-4 rounded-xl bg-[#F9F5F1] border-transparent focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-5 py-4 rounded-xl bg-[#F9F5F1] border-transparent focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    className="w-full px-5 py-4 rounded-xl bg-[#F9F5F1] border-transparent focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-200 placeholder:text-gray-400 text-gray-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-400 to-orange-400 text-white font-bold text-lg rounded-xl py-4 px-6 hover:shadow-lg hover:shadow-rose-200 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
