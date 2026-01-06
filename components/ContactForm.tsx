"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import LoadingText from "./LoadingText";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section className="w-full  px-4 md:px-8 lg:px-16 py-12  relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
           <LoadingText 
            text="Send us a Message" 
            className="text-3xl md:text-5xl font-bold text-gray-900 justify-center mb-4"
          />
          <p className="text-gray-500 text-lg">We typically respond within 2 hours during business hours.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 shadow-[0_0_60px_rgba(255,165,0,0.1)] border border-white/60 relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-yellow-200 rounded-bl-full -mr-16 -mt-16 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-500 to-yellow-200 rounded-tr-full -ml-16 -mb-16 pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1 group-focus-within:text-orange-600 transition-colors">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500/20 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 outline-none text-lg"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2 group">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1 group-focus-within:text-orange-600 transition-colors">Work Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@company.com"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500/20 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 outline-none text-lg"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label htmlFor="company" className="text-sm font-semibold text-gray-700 ml-1 group-focus-within:text-orange-600 transition-colors">Company Name</label>
                <input
                  type="text"
                  id="company"
                  placeholder="Acme Inc."
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500/20 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 outline-none text-lg"
                  value={formState.company}
                  onChange={(e) => setFormState({...formState, company: e.target.value})}
                />
              </div>
              <div className="space-y-2 group">
                <label htmlFor="role" className="text-sm font-semibold text-gray-700 ml-1 group-focus-within:text-orange-600 transition-colors">Job Role</label>
                <input
                  type="text"
                  id="role"
                  placeholder="Product Manager"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500/20 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 outline-none text-lg"
                  value={formState.role}
                  onChange={(e) => setFormState({...formState, role: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-700 ml-1 group-focus-within:text-orange-600 transition-colors">How can we help?</label>
              <select 
                id="subject"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500/20 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 outline-none text-lg text-gray-600 cursor-pointer appearance-none"
                value={formState.subject}
                onChange={(e) => setFormState({...formState, subject: e.target.value})}
              >
                <option value="">Select a topic...</option>
                <option value="sales">I want to buy an Agent</option>
                <option value="listing">I want to list my Agent</option>
                <option value="enterprise">Enterprise Solutions</option>
                <option value="support">Technical Support</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1 group-focus-within:text-orange-600 transition-colors">Message</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell us more about your needs..."
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500/20 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 outline-none text-lg resize-none"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-5 px-8 rounded-2xl bg-black text-white font-bold text-xl hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
