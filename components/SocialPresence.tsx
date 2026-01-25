"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Globe } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "Follow us",
    bg: "bg-blue-50",
    color: "text-blue-600",
    hoverBg: "group-hover:bg-blue-100",
    href: "https://www.linkedin.com/company/ailifebot"
  },
  {
    icon: Twitter,
    title: "X (Twitter)",
    subtitle: "Stay updated",
    bg: "bg-sky-50",
    color: "text-sky-500",
    hoverBg: "group-hover:bg-sky-100",
    href: "https://x.com/ailifebot"
  },
  {
    icon: Instagram,
    title: "Instagram",
    subtitle: "Behind the scenes",
    bg: "bg-pink-50",
    color: "text-pink-600",
    hoverBg: "group-hover:bg-pink-100",
    href: "https://www.instagram.com/ailifebot/?hl=en"
  },
  {
    icon: Globe,
    title: "Website",
    subtitle: "Learn more",
    bg: "bg-orange-50",
    color: "text-orange-500",
    hoverBg: "group-hover:bg-orange-100",
    href: "https://www.ailifebot.com/"
  }
];

export default function SocialPresence() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 sm:mb-5 md:mb-6"
          >
            <span className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full bg-orange-100 text-orange-600 text-xs sm:text-sm font-semibold tracking-wide border border-orange-200/50">
              Our Presence
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 tracking-tight"
          >
            Connect With Us Everywhere
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-2"
          >
            Follow our journey and stay updated with the latest AI agent innovations and marketplace updates.
          </motion.p>
        </div>

        {/* Cards Grid - 2x2 on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 min-h-[160px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px] active:scale-[0.98]"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl md:rounded-[1.5rem] lg:rounded-[2rem] ${social.bg} ${social.hoverBg} flex items-center justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8 group-hover:scale-110 transition-all duration-300`}>
                <social.icon className={`w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 ${social.color}`} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2">
                {social.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">
                {social.subtitle}
              </p>

              {/* Decorative Hover Effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] border-2 border-transparent group-hover:border-orange-100 transition-colors pointer-events-none" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
