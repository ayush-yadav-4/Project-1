"use client";

import { LayoutGrid, MessageSquare, Sparkles, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalEnterprisesSection() {
  const [activeTab, setActiveTab] = useState("work");

  const tabs = [
    {
      id: "work",
      label: "AI for Work",
      icon: LayoutGrid,
      description: "Connect to your business systems to automate and orchestrate AI agents with precision.",
      image: "/cards-1.png"
    },
    {
      id: "service",
      label: "AI for Service",
      icon: MessageSquare,
      description: "Reimagine quality service with AI agents who respond clearly in real time",
      image: "/cards-2.png"
    },
    {
      id: "process",
      label: "AI for Process",
      icon: Sparkles,
      description: "Streamline business operations with autonomous AI agents that orchestrate complex workflows",
      image: "/Herosection.png"
    },
    {
      id: "security",
      label: "AI Security + Governance",
      icon: BarChart3,
      description: "Enterprise guardrails to enforce policies, meet regulatory standards AI behavior at scale",
      image: "/Herosection-3.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex((t) => t.id === current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-24 px-4 md:px-8 flex flex-col items-center">
      
      <div className="w-full max-w-7xl bg-gradient-to-br from-[#FFD6C9] to-[#FF6FA5] rounded-[2.5rem] p-8 md:p-12 pb-0 overflow-hidden relative">
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 11px)' }}>
        </div>

        {/* Tabs Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative z-10 ">
          {tabs.map((tab) => (
            <div 
              key={tab.id}
              className={`flex flex-col gap-3 cursor-pointer transition-opacity duration-300 ${
                activeTab === tab.id ? "opacity-100" : "opacity-60 hover:opacity-80"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center gap-2 text-gray-900">
                <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? "stroke-[2.5px]" : "stroke-2"}`} />
                <span className={`text-xl ${activeTab === tab.id ? "font-bold" : "font-medium"}`}>
                  {tab.label}
                </span>
              </div>
              <p className="text-base text-gray-800 leading-relaxed font-medium pr-4">
                {tab.description}
              </p>
            </div>
          ))}
        </div>

        {/* Content Area (White Card) */}
        <div className="w-[102%] -ml-[1%] bg-white rounded-t-[2rem] rounded-b-[2rem] h-[300px] md:h-[400px] shadow-inner relative overflow-hidden text-center border-[12px] border-b-0 border-[#FFF0F5] -mb-12">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                     <img 
                        src={tabs.find(t => t.id === activeTab)?.image} 
                        alt={tabs.find(t => t.id === activeTab)?.label}
                        className="w-full h-full object-cover"
                     />
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Bottom White Cover to hide orange border/padding at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white z-0 hidden" />
      </div>
    </section>
  );
}
