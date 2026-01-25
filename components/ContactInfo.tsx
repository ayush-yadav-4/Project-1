"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, Clock, ArrowRight } from "lucide-react";

export default function ContactInfo() {
  const contactItems = [
    {
      icon: Mail,
      title: "Email us",
      desc: "Our friendly team is here to help.",
      link: "contact@Ailifebot.com",
      href: "mailto:contact@Ailifebot.com",
      gradient: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-500/20"
    },
    {
      icon: MapPin,
      title: "Visit us",
      desc: "3rd Floor, Orchid Center, Golf Course Road, DLF QE, Sec-53, Gurugram, Haryana (122002)",
      link: "View on Google Maps",
      href: "https://maps.google.com/?q=3rd+Floor,+Orchid+Center,+Golf+Course+Road,+DLF+QE,+Sec-53,+Gurugram,+Haryana+(122002)",
      gradient: "from-orange-500 to-red-500",
      shadow: "shadow-orange-500/20"
    },
    {
      icon: Phone,
      title: "Call us",
      desc: "Mon-Fri from 9am to 6pm.",
      link: "+91 8439266770",
      href: "tel:+918439266770",
      gradient: "from-green-500 to-emerald-500",
      shadow: "shadow-green-500/20"
    },
    {
      icon: MessageSquare,
      title: "Live Support",
      desc: "Available 24/7 for urgent needs.",
      link: "Start Live Chat",
      href: "#",
      gradient: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/20"
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F9F5F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 tracking-tight">
            Our Door is Always Open
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed px-2">
            We believe that great partnerships start with a simple hello.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {contactItems.map((item, idx) => (
            <motion.a 
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl sm:rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 hover:border-transparent transition-all duration-500 flex flex-col min-h-[200px] sm:min-h-[220px] md:min-h-[260px] lg:aspect-square overflow-hidden shadow-sm hover:shadow-xl active:scale-[0.98]"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              <div className="relative z-10 flex-1">
                <div className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 text-white shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed line-clamp-3 sm:line-clamp-none">{item.desc}</p>
              </div>
              
              <div className="relative z-10 pt-4 sm:pt-5 md:pt-6 mt-auto">
                <span className="inline-flex items-center text-xs sm:text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {item.link}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Strategic Partnership - Modern Design */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] bg-[#111] overflow-hidden p-5 sm:p-6 md:p-10 lg:p-16 text-white"
        >
          {/* Abstract Background */}
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-medium mb-4 sm:mb-5 md:mb-6 backdrop-blur-md"
              >
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Expert Consultation</span>
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
                Ready to Transform{" "}
                <span className="lg:block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                    Your Operations?
                  </span>
                </span>
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Book a free strategy session with our AI specialists. We'll analyze your current workflows and demonstrate how AI LifeBOT can drive efficiency and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <button className="px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white text-black rounded-full font-bold text-sm sm:text-base hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 active:scale-[0.98]">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-sm sm:text-base hover:bg-white/10 transition-colors active:scale-[0.98]">
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="relative mt-2 sm:mt-4 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: "30min", label: "Free Strategy Phase", color: "text-orange-400" },
                  { value: "Custom", label: "Solution Design", color: "text-blue-400" },
                  { value: "ROI", label: "Focused Analysis", color: "text-green-400" },
                  { value: "24/7", label: "Support Coverage", color: "text-purple-400" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-white/10"
                  >
                    <div className={`text-xl sm:text-2xl md:text-3xl font-bold ${stat.color} mb-0.5 sm:mb-1`}>{stat.value}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
