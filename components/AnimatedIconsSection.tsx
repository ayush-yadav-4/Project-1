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
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-orange-200 mb-4 tracking-tight">Why AgentMarketplace?</h2>
          <p className="text-2xl font-medium text-black">Deploy production-ready AI agents in minutes, not months</p>
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
                    <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-md max-w-[280px]">
                      I need an AI agent to handle customer support inquiries about shipping and returns. Can you help?
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
                          Found 3 shipping support agents! The top-rated "ShipBot Pro" handles 10,000+ queries/day with 98% accuracy. Deploy now?
                       </div>
                    </motion.div>
                 )}
              </AnimatePresence>
            </div>


            {/* Text Content Overlay */}
            <div className="relative z-20 mt-auto">
               <div className="h-24 w-full bg-gradient-to-b from-transparent to-white pointer-events-none absolute -top-24 left-0"></div>
               <div className="bg-white px-8 pb-8 pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Agent Discovery</h3>
                  <p className="text-gray-500 text-sm">
                    Find the perfect AI agent for any task. Search 500+ production-ready agents across customer support, sales, HR, and more.
                  </p>
               </div>
            </div>
          </div>

          {/* Card 2: Seamless Integrations (Orbit Animation) */}
          <div className="bg-white rounded-3xl border border-gray-100 flex flex-col justify-between h-[600px] overflow-hidden relative group shadow-sm hover:shadow-md transition-shadow">
             
             {/* Animation Container */}
             <div className="absolute inset-0 flex items-center justify-center overflow-hidden pb-[60px]">
                
                {/* --- Concentric Circles Background --- */}
                
                {/* Outer Circle (Lightest) */}
                <div className="absolute w-[520px] h-[520px] rounded-full bg-gradient-to-b from-gray-50 to-white border border-gray-100/50"></div>
                
                {/* Middle Circle (Medium) */}
                <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-b from-gray-100/50 to-transparent border border-gray-200/50"></div>
                
                {/* Inner Circle (Darker Gray Effect) */}
                <div className="absolute w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200/80 via-gray-100/50 to-transparent border border-gray-200 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] backdrop-blur-sm"></div>


                {/* Central Icon (Pink Marketplace) */}
                <div className="relative z-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-pink-200 border-4 border-white">
                   <ShoppingBag className="w-8 h-8" strokeWidth={2.5} />
                </div>

                {/* --- Orbiting Icons --- */}
                <div className="absolute inset-0 flex items-center justify-center">
                   
                   {/* Ring 1 (Inner) - Icons */}
                   <motion.div 
                      className="absolute w-[200px] h-[200px] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                   >
                      {/* Icon 1: Figma */}
                      <motion.div 
                        className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white p-2.5 rounded-2xl shadow-sm border border-gray-100"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                         <div className="w-6 h-6 flex items-center justify-center">
                            {/* Figma Colorful Icon Approximation */}
                            <div className="grid grid-cols-2 gap-0.5 w-4 h-6">
                                <div className="bg-[#F24E1E] rounded-l-full"></div>
                                <div className="bg-[#FF7262] rounded-r-full"></div>
                                <div className="bg-[#A259FF] rounded-l-full"></div>
                                <div className="bg-[#1ABCFE] rounded-full"></div>
                                <div className="bg-[#0ACF83] rounded-tl-full rounded-bl-full rounded-br-full"></div>
                            </div>
                         </div>
                      </motion.div>
                      
                      {/* Icon 2: Sparkle/Star (Linear) */}
                      <motion.div 
                        className="absolute bottom-[15%] left-[10%] bg-white p-2.5 rounded-2xl shadow-sm border border-gray-100"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#5E6AD2]">
                             <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                          </svg>
                      </motion.div>
                   </motion.div>

                   {/* Ring 2 (Middle) - Icons */}
                   <motion.div 
                      className="absolute w-[360px] h-[360px] rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                   >
                       {/* Icon 1: GitHub */}
                       <motion.div 
                          className="absolute top-[20%] right-[10%] bg-white p-3 rounded-2xl shadow-sm border border-gray-100"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                       >
                          <div className="w-7 h-7 bg-[#5865F2] rounded-lg flex items-center justify-center text-white">
                             {/* Discord-ish */}
                             <MessageSquare size={16} fill="currentColor" />
                          </div>
                       </motion.div>
                       
                       {/* Icon 2: Notion/Triangle */}
                       <motion.div 
                          className="absolute bottom-[10%] left-[30%] bg-transparent p-0" // Using transparent container for the "floating" blur effect if needed
                          animate={{ rotate: 360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                       >
                          <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                             <div className="w-7 h-7 bg-[#111] rounded-lg flex items-center justify-center text-white">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28.047-.653 0-.466-.327-.793-1.12-.793H4.832c-.653 0-1.166.42-1.166 1.073v15.603c0 .653.466 1.12 1.12 1.12.466 0 .886-.233 1.12-.606l12.515-7.184V7.61c0-.466-.28-.793-.746-.793-.42 0-.793.233-1.073.606L5.392 14.84V5.327c0-.56-.187-.84-.933-1.12z"/></svg> 
                             </div>
                          </div>
                       </motion.div>
                       
                       {/* Icon 3: Linear/Triangle */}
                       <motion.div 
                          className="absolute -top-4 left-1/2 -ml-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                       >
                          <div className="w-7 h-7 bg-[#5E6AD2] rounded-full flex items-center justify-center text-white">
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z"/></svg>
                          </div>
                       </motion.div>

                   </motion.div>

                   {/* Ring 3 (Outer) - Icons */}
                   <motion.div 
                      className="absolute w-[520px] h-[520px] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                   >
                       {/* Icon: Vercel/Triangle Black */}
                       <motion.div 
                          className="absolute scale-90 top-[30%] -left-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                       >
                           <div className="w-8 h-8 flex items-center justify-center">
                              <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6"><path d="M12 1L24 22H0L12 1z"/></svg>
                           </div>
                       </motion.div>

                        {/* Icon: Stripe/Blue S */}
                       <motion.div 
                          className="absolute scale-90 top-[30%] -right-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                       >
                           <div className="w-8 h-8 bg-[#635BFF] rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
                       </motion.div>
                   </motion.div>

                </div>
             </div>

             {/* Text Content Overlay */}
             <div className="relative z-20 mt-auto">
               <div className="h-24 w-full bg-gradient-to-b from-transparent to-white pointer-events-none absolute -top-24 left-0"></div>
               <div className="bg-white px-8 pb-8 pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">200+ Pre-built Integrations</h3>
                  <p className="text-gray-500 text-sm">
                    Connect agents to Slack, Salesforce, HubSpot, Zendesk, and 200+ tools. Your AI workforce works where you work.
                  </p>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}