"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare, Globe, Clock, ArrowRight } from "lucide-react";
import LoadingText from "./LoadingText";

export default function ContactInfo() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-24 bg-white relative overflow-hidden">
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
              title: "Chat to us",
              desc: "Our friendly team is here to help.",
              link: "hello@agentmarketplace.com",
              href: "mailto:hello@agentmarketplace.com",
              gradient: "from-blue-500 to-cyan-500",
              shadow: "shadow-blue-500/20"
            },
            {
              icon: MapPin,
              title: "Visit us",
              desc: "Come say hello at our office HQ.",
              link: "View on Google Maps",
              href: "#",
              gradient: "from-orange-500 to-red-500",
              shadow: "shadow-orange-500/20"
            },
            {
              icon: Phone,
              title: "Call us",
              desc: "Mon-Fri from 8am to 5pm.",
              link: "+1 (555) 000-0000",
              href: "tel:+15550000000",
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

        {/* Global Presence - Modern Design */}
        <div className="relative rounded-[3rem] bg-[#111] overflow-hidden p-8 md:p-16 text-white">
          {/* Abstract Map Background */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain pointer-events-none mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-md">
                <Globe className="w-4 h-4" />
                <span>Global Network</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Operating globally,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  available locally.
                </span>
              </h3>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8">
                With hubs in major tech capitals, our distributed team ensures 24/7 coverage for your mission-critical agents.
              </p>
              <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                View all locations
              </button>
            </div>

            <div className="grid gap-4">
               {[
                 { city: "San Francisco", country: "United States", time: "10:00 AM", status: "Open" },
                 { city: "London", country: "United Kingdom", time: "6:00 PM", status: "Closing Soon" },
                 { city: "Singapore", country: "Singapore", time: "1:00 AM", status: "Closed" }
               ].map((loc, idx) => (
                 <motion.div 
                   key={loc.city}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default backdrop-blur-sm"
                 >
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-white/10">
                        <MapPin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg">{loc.city}</h4>
                       <p className="text-gray-400 text-sm">{loc.country}</p>
                     </div>
                   </div>
                   <div className="text-right">
                     <div className="font-mono text-lg tracking-wider mb-1">{loc.time}</div>
                     <div className="flex items-center justify-end gap-2">
                       <span className={`w-2 h-2 rounded-full ${loc.status === 'Open' ? 'bg-green-500 animate-pulse' : loc.status === 'Closing Soon' ? 'bg-yellow-500' : 'bg-red-500'}`} />
                       <span className="text-xs font-medium text-gray-500">{loc.status}</span>
                     </div>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
