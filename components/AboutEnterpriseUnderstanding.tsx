"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Settings, Cpu, Braces, Brain, BadgeCheck } from "lucide-react";

const cards = [
  // The first item in the grid will be the text block, so we handle it separately in the map or layout
  {
    title: "Speed",
    icon: Settings,
    description: "The speed you can build AI is amplified by our enterprise AI solutions, pre-built solutions, and AI-Agent Marketplace."
  },
  {
    title: "Control",
    icon: Cpu,
    description: "The power of our standardized platform gives your enterprise-wide observability and crucially, the control you need for success."
  },
  {
    title: "Flexibility",
    icon: Braces,
    description: "An agnostic design approach that puts you in control of your models, data, applications, and hosting not to mention your future."
  },
  {
    title: "Depth",
    icon: Brain,
    description: "Deep technological capabilities that adapt every interaction, workflow, and behavior to your enterprise's unique needs."
  },
  {
    title: "Experience",
    icon: BadgeCheck,
    description: "We are an AI-first company that has grown up with enterprise customers as partners when building our AI platform and solutions."
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Stagger effect
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function AboutEnterpriseUnderstanding() {
  return (
    <section className="bg-[#FAF9F6] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Text Block (First item in visual grid) */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                AI LifeBot understands the enterprise
              </h2>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                It's not lost on us that customers have a wealth of options when it comes to deploying AI agents. Here is how AI LifeBot will deliver for your enterprise:
              </p>
            </div>
            
            <div className="relative pt-6 pl-0 mt-auto">
               <button className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-all flex items-center gap-2 rounded-full shadow-lg">
                  Understand More <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
               </button>
            </div>
          </div>

          {/* 2. Cards */}
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index} // Pass index for stagger delay
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[250px] shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-gray-900">{card.title}</h3>
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-900">
                  <card.icon size={16} strokeWidth={2} />
                </div>
              </div>
              
              <p className="text-gray-500 leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
