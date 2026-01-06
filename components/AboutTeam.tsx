"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link2, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/400?u=sarah",
    bio: "Visionary leader with 15+ years in AI and scalable systems architecture.",
  },
  {
    name: "David Miller",
    role: "Chief Technology Officer",
    image: "https://i.pravatar.cc/400?u=david",
    bio: "Former Principal Engineer at Tech Giants, leading our core infrastructure.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    image: "https://i.pravatar.cc/400?u=elena",
    bio: "Product strategist focused on delivering intuitive and powerful AI experiences.",
  },
];

export default function AboutTeam() {
  return (
    <section className="bg-[#FAFAFA] pt-12 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Meet Our Leadership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
             Driving the vision of AI LifeBot Agent Marketplace forward with decades of combined expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="relative h-96 overflow-hidden bg-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay for social icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition-colors">
                    <Twitter size={20} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-4 tracking-wide text-sm uppercase">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
