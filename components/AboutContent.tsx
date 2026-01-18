"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users, Award } from 'lucide-react';

const timelineData = [
  {
    year: "01",
    title: "Enhance Customer Experience",
    description: "Through personalized AI interactions that understand and anticipate customer needs.",
    icon: Lightbulb,
    color: "bg-gradient-to-r from-pink-400 via-pink-300 to-orange-200"
  },
  {
    year: "02",
    title: "Streamline Operations",
    description: "With AI-powered automation that reduces costs and improves efficiency.",
    icon: Rocket,
    color: "bg-gradient-to-r from-pink-400 via-pink-300 to-orange-200"
  },
  {
    year: "03",
    title: "Drive Business Growth",
    description: "By improving scalability and enabling 24/7 customer support.",
    icon: Users,
    color: "bg-gradient-to-r from-pink-400 via-pink-300 to-orange-200"
  }
];

export default function AboutContent() {
  return (
    <section className="bg-[#FAF9F6] py-12 md:py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Side: Story Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 pt-0 lg:pt-8 sticky top-24 self-start"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#EFEBE6] text-gray-800 text-sm font-medium mb-6">
              Our Vision
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Mission
            </h2>
            
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                At AI LifeBOT, our mission is to empower businesses with advanced AI solutions.
              </p>
              <p>
                We believe that by harnessing the power of artificial intelligence, companies can transform their interactions, operations, and growth strategies to meet the demands of a digital-first world.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Timeline */}
          <div className="w-full lg:w-7/12 relative">
             {/* Vertical Line */}
             <div className="absolute left-[28px] top-6 bottom-6 w-[2px] bg-gray-200 hidden md:block" />

             <div className="space-y-6">
               {timelineData.map((item, index) => (
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 relative"
                 >
                    {/* Icon Bubble */}
                    <div className="hidden md:flex flex-shrink-0 z-10">
                      <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg ring-4 ring-white`}>
                        <item.icon size={24} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 font-semibold mb-1">{item.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
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
