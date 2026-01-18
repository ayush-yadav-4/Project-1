"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Globe, ArrowRight } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    bg: "bg-blue-50",
    color: "text-blue-600",
    href: "https://www.linkedin.com/company/ailifebot"
  },
  {
    icon: Twitter,
    title: "X (Twitter)",
    bg: "bg-sky-50",
    color: "text-sky-500",
    href: "https://x.com/ailifebot"
  },
  {
    icon: Instagram,
    title: "Instagram",
    bg: "bg-pink-50",
    color: "text-pink-600",
    href: "https://www.instagram.com/ailifebot/?hl=en"
  },
  {
    icon: Globe,
    title: "Website",
    bg: "bg-orange-50",
    color: "text-orange-500",
    href: "https://www.ailifebot.com/"
  }
];

export default function SocialPresence() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="py-2 px-6 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold tracking-wide border border-orange-200/50">
              Our Presence
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Connect With Us Everywhere
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Follow our journey and stay updated with the latest AI agent innovations and marketplace updates.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 min-h-[280px]"
            >
              <div className={`w-20 h-20 rounded-[2rem] ${social.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <social.icon className={`w-10 h-10 ${social.color}`} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {social.title}
              </h3>

              {/* Decorative Hover Effect */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-orange-100 transition-colors pointer-events-none" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
