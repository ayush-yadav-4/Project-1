"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";

// Placeholder icons for the integration circle
// You can replace these with actual brand logos or Lucide icons as needed
import { 
  Slack, Trello, Calendar, Mail, FileText, 
  MessageSquare, LayoutGrid, Zap, Github, Globe, 
  Database, Cloud, Server, Box, Monitor, Smartphone,
  Linkedin, Youtube, ShoppingBag
} from "lucide-react";

const orbitIcons = [
  { Icon: Slack, color: "#4A154B", delay: 0 },
  { Icon: Trello, color: "#0079BF", delay: 2 },
  { Icon: Calendar, color: "#4285F4", delay: 4 },
  { Icon: Mail, color: "#EA4335", delay: 1 },
  { Icon: FileText, color: "#FF9900", delay: 3 },
  { Icon: MessageSquare, color: "#00C853", delay: 5 },
];

export default function AnimatedIconsSection() {
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        setChatStep(0); // Reset
        await new Promise(r => setTimeout(r, 1000));
        setChatStep(1); // User message appears
        await new Promise(r => setTimeout(r, 1500));
        setChatStep(2); // Bot thinking
        await new Promise(r => setTimeout(r, 1500));
        setChatStep(3); // Bot reply
        await new Promise(r => setTimeout(r, 4000)); // Read time
      }
    };
    sequence();
  }, []);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4 tracking-tight">Why AgentMarketplace?</h2>
          <p className="text-2xl font-medium text-black">Your enterprise AI advantage</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Real-time AI Collaboration (Chat UI) */}
          <div className="bg-gray-50 rounded-3xl border border-gray-100 flex flex-col justify-between h-[600px] overflow-hidden relative">
            
            {/* Chat Bubbles Container */}
            <div className="absolute inset-0 pb-[120px] pt-8 px-8 flex flex-col justify-center space-y-6 z-0 w-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {chatStep >= 1 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-4 justify-end"
                  >
                    <div className="bg-pink-400 text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-md max-w-[280px]">
                      Hey, I need help scheduling a team meeting that works well for everyone. 
                      Any suggestions for finding an optimal time slot?
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                       <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')] bg-cover"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bot Interaction */}
              <AnimatePresence mode="wait">
                 {chatStep === 2 && (
                    <motion.div
                       key="thinking"
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, scale: 0.9 }}
                       className="flex gap-4"
                    >
                       <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-400 flex-shrink-0 mt-1">
                          <Zap size={16} fill="currentColor" />
                       </div>
                       <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                       </div>
                    </motion.div>
                 )}

                 {chatStep === 3 && (
                    <motion.div
                       key="response"
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       className="flex gap-4"
                    >
                       <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-400 flex-shrink-0 mt-1">
                          <Zap size={16} fill="currentColor" />
                       </div>
                       <div className="bg-white border border-gray-200 text-gray-700 p-4 rounded-2xl rounded-tl-sm text-sm shadow-sm max-w-[280px]">
                          Based on your calendar patterns, I recommend scheduling the
                          meeting for Tuesday at 2pm. It has the highest availability.
                       </div>
                    </motion.div>
                 )}
              </AnimatePresence>
            </div>


            {/* Text Content Overlay */}
            <div className="relative z-20 mt-auto">
               <div className="h-24 w-full bg-gradient-to-b from-transparent to-white pointer-events-none absolute -top-24 left-0"></div>
               <div className="bg-white px-8 pb-8 pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time AI Collaboration</h3>
                  <p className="text-gray-500 text-sm">
                    Experience real-time assistance. Ask your AI Agent to coordinate tasks, 
                    answer questions, and maintain team alignment.
                  </p>
               </div>
            </div>
          </div>

          {/* Card 2: Seamless Integrations (Orbit Animation) */}
          <div className="bg-gray-50 rounded-3xl border border-gray-100 flex flex-col justify-between h-[600px] overflow-hidden relative group">
             
             {/* Animation Container */}
             <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none pb-[60px]">
                
                {/* Diagonal Stripes Background Effect */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.01)_10px,rgba(0,0,0,0.01)_11px)]"></div>

                {/* Central Logo */}
                <div className="relative z-20 w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center text-white shadow-xl shadow-pink-200">
                   <Zap size={40} fill="currentColor" />
                </div>

                {/* Semicircles Tracks & Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                   
                   {/* Track 1 (Inner) - Clockwise */}
                   <div className="absolute w-[240px] h-[240px] rounded-full border-2 border-dashed border-gray-200 border-b-transparent rotate-45"></div>
                   <motion.div 
                      className="absolute w-[240px] h-[240px] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                   >
                      {/* Icon 1 - Top */}
                      <motion.div 
                        className="absolute top-0 left-1/2 -translate-x-1/2 -mt-5 bg-white p-3 rounded-full shadow-sm border border-gray-100"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      >
                         <Slack size={24} color="#4A154B" />
                      </motion.div>
                      {/* Icon 2 - Bottom Right */}
                      <motion.div 
                        className="absolute bottom-[15%] right-[15%] bg-white p-3 rounded-full shadow-sm border border-gray-100"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      >
                         <Github size={24} color="#181717" />
                      </motion.div>
                      {/* Icon 3 - Bottom Left */}
                      <motion.div 
                        className="absolute bottom-[15%] left-[15%] bg-white p-3 rounded-full shadow-sm border border-gray-100"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      >
                          <Monitor size={24} color="#2563EB" />
                      </motion.div>
                   </motion.div>

                   {/* Track 2 (Middle) - Counter-Clockwise */}
                   <div className="absolute w-[380px] h-[380px] rounded-full border-2 border-dashed border-gray-200 border-t-transparent -rotate-45"></div>
                   <motion.div 
                      className="absolute w-[380px] h-[380px] rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                   >
                       {/* Icon 1 - Right */}
                       <motion.div 
                          className="absolute top-1/2 right-0 -mr-5 -translate-y-1/2 bg-white p-3 rounded-full shadow-sm border border-gray-100"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                       >
                          <Trello size={24} color="#0079BF" />
                       </motion.div>
                       {/* Icon 2 - Left */}
                       <motion.div 
                          className="absolute top-1/2 left-0 -ml-5 -translate-y-1/2 bg-white p-3 rounded-full shadow-sm border border-gray-100"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                       >
                          <Database size={24} color="#00C7B7" />
                       </motion.div>
                       {/* Icon 3 - Top */}
                       <motion.div 
                          className="absolute top-0 left-1/2 -mt-5 -translate-x-1/2 bg-white p-3 rounded-full shadow-sm border border-gray-100"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                       >
                          <LayoutGrid size={24} color="#FF9900" />
                       </motion.div>
                       {/* Icon 4 - Bottom */}
                       <motion.div 
                          className="absolute bottom-0 left-1/2 -mb-5 -translate-x-1/2 bg-white p-3 rounded-full shadow-sm border border-gray-100"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                       >
                          <Cloud size={24} color="#00A1E0" />
                       </motion.div>
                   </motion.div>

                   {/* Track 3 (Outer) - Clockwise */}
                   <div className="absolute w-[520px] h-[520px] rounded-full border-2 border-dashed border-gray-200 border-b-transparent rotate-12"></div>
                   <motion.div 
                      className="absolute w-[520px] h-[520px] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                   >
                       {/* Icon 1 */}
                       <motion.div 
                          className="absolute bottom-[15%] left-[15%] bg-white p-3 rounded-full shadow-sm border border-gray-100"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                       >
                          <Mail size={24} color="#EA4335" />
                       </motion.div>
                       {/* Icon 2 */}
                       <motion.div 
                          className="absolute top-[15%] right-[15%] bg-white p-3 rounded-full shadow-sm border border-gray-100"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                       >
                          <FileText size={24} color="#FF9900" />
                       </motion.div>
                       {/* Icon 3 */}
                       <motion.div 
                          className="absolute top-[15%] left-[15%] bg-white p-3 rounded-full shadow-sm border border-gray-100"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                       >
                          <Calendar size={24} color="#4285F4" />
                       </motion.div>
                        {/* Icon 4 */}
                       <motion.div 
                          className="absolute bottom-[15%] right-[15%] bg-white p-3 rounded-full shadow-sm border border-gray-100"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                       >
                          <ShoppingBag size={24} color="#95BF47" />
                       </motion.div>
                        {/* Icon 5 */}
                       <motion.div 
                          className="absolute top-0 left-1/2 -mt-5 -translate-x-1/2 bg-white p-3 rounded-full shadow-sm border border-gray-100"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                       >
                          <Linkedin size={24} color="#0A66C2" />
                       </motion.div>
                   </motion.div>

                </div>
             </div>

             {/* Text Content Overlay */}
             <div className="relative z-20 mt-auto">
               <div className="h-24 w-full bg-gradient-to-b from-transparent to-white pointer-events-none absolute -top-24 left-0"></div>
               <div className="bg-white px-8 pb-8 pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Seamless Integrations</h3>
                  <p className="text-gray-500 text-sm">
                    Unite your favorite tools for effortless connectivity. Boost productivity
                    through interconnected workflows.
                  </p>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}