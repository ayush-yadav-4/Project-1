"use client";

import { LayoutGrid, MessageSquare, Sparkles, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

export default function GlobalEnterprisesSection() {
  const [activeTab, setActiveTab] = useState("work");

  const tabs = [
    {
      id: "work",
      label: "AI for Work",
      icon: LayoutGrid,
      description: "Connect to your business systems to automate and orchestrate AI agents with precision."
    },
    {
      id: "service",
      label: "AI for Service",
      icon: MessageSquare,
      description: "Reimagine quality service with AI agents who respond clearly in real time"
    },
    {
      id: "process",
      label: "AI for Process",
      icon: Sparkles,
      description: "Streamline business operations with autonomous AI agents that orchestrate complex workflows"
    },
    {
      id: "security",
      label: "AI Security + Governance",
      icon: BarChart3,
      description: "Enterprise guardrails to enforce policies, meet regulatory standards AI behavior at scale"
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
      <div className="text-center mb-16 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4 tracking-tight">
          We've built our business by serving 
        </h2>
         <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
          global enterprises
        </h2>
        <p className="text-xl text-gray-400 font-medium">
          Trust us, we've learned from the best.
        </p>
      </div>

      <div className="w-full max-w-7xl bg-gradient-to-br from-[#FFB070] to-[#FF7020] rounded-[2.5rem] p-8 md:p-12 pb-0 shadow-xl overflow-hidden relative">
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
        <div className="w-full bg-white rounded-t-[2rem] h-[400px] md:h-[500px] shadow-inner relative overflow-hidden mx-auto">
            {/* Placeholder for content/image inside the white area */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-200">
                {/* You can add an image or specific content for each tab here */}
                {/* For now, leaving it blank as per the screenshot's white area */}
            </div>
        </div>
      </div>
    </section>
  );
}
