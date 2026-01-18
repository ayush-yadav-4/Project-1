"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, Globe, Clock, ArrowRight } from "lucide-react";
import LoadingText from "./LoadingText";

export default function ContactInfo() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-24 bg-[#F9F5F1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Door is Always Open
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We believe that great partnerships start with a simple hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
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
          ].map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-transparent transition-all duration-500 aspect-square flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 text-white shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
              
              <div className="relative z-10 pt-6">
                <a href={item.href} className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {item.link}
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic Partnership - Modern Design */}
        <div className="relative rounded-[3rem] bg-[#111] overflow-hidden p-8 md:p-16 text-white">
          {/* Abstract Background */}
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-md">
                <Clock className="w-4 h-4" />
                <span>Expert Consultation</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Transform <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  Your Operations?
                </span>
              </h3>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
                Book a free strategy session with our AI specialists. We'll analyze your current workflows and demonstrate how AI LifeBOT can drive efficiency and growth.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                        <div className="text-3xl font-bold text-orange-400 mb-1">30min</div>
                        <div className="text-gray-400 text-sm">Free Strategy Phase</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                        <div className="text-3xl font-bold text-blue-400 mb-1">Custom</div>
                        <div className="text-gray-400 text-sm">Solution Design</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                        <div className="text-3xl font-bold text-green-400 mb-1">ROI</div>
                        <div className="text-gray-400 text-sm">Focused Analysis</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                        <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
                        <div className="text-gray-400 text-sm">Support Coverage</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
