"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { 
  Github, Slack, Mail, Figma, Twitter, MessageCircle, FileText, 
  ListTodo, Cloud, Triangle, Calendar, MessageSquare, Monitor, 
  Database, Globe, Smartphone, Tablet, ChevronRight, Plus, Check,
  Linkedin, Youtube, ShoppingBag, MapPin, Search, CreditCard, Trello,
  Layout, Code, Box, Server, Shuffle, Share2, DollarSign
} from "lucide-react";

// Icons for the circular orbit (Scene 3) with Colors
const orbitIcons = [
  { Icon: FileText, color: "#000000" }, // Notion-like
  { Icon: Linkedin, color: "#0A66C2" },
  { Icon: Cloud, color: "#0052CC" }, // Jira-ish/Cloud
  { Icon: ShoppingBag, color: "#95BF47" }, // Shopify
  { Icon: Cloud, color: "#00A1E0" }, // Salesforce
  { Icon: Slack, color: "#4A154B" },
  { Icon: MessageCircle, color: "#FF4500" }, // Reddit
  { Icon: Triangle, color: "#5E6AD2" }, // Linear
  { Icon: MessageSquare, color: "#5865F2" }, // Discord
  { Icon: Twitter, color: "#000000" }, // X
  { Icon: Youtube, color: "#FF0000" },
  { Icon: Trello, color: "#0079BF" },
  { Icon: DollarSign, color: "#008CDD" }, // Stripe
  { Icon: Database, color: "#00C7B7" }, // Snowflake
  { Icon: MapPin, color: "#34A853" }, // Maps
  { Icon: Globe, color: "#000000" }, // Vercel
  { Icon: Mail, color: "#EA4335" }, // Gmail
  { Icon: Calendar, color: "#4285F4" }, // Google Calendar
  { Icon: Github, color: "#181717" },
  { Icon: Monitor, color: "#2563EB" }, // Zoom?
  { Icon: FileText, color: "#1A73E8" }, // Docs
];

const points = [
  {
    text: "optimising JSON schema for agents",
    className: "top-[20%] right-[5%] md:right-[15%]",
  },
  {
    text: "building integrations",
    className: "top-[28%] left-[5%] md:left-[15%]",
  },
  {
    text: "managing auth and permissions for tools",
    className: "bottom-[28%] left-[5%] md:left-[10%]",
  },
  {
    text: "scaling to millions of tools execution",
    className: "bottom-[15%] right-[5%] md:right-[15%]",
  },
];

export default function AnimatedPoints() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('Project');
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.98) {
        setIsLocked(true);
    }
  });

  // --- Animations ---

  // 1. Shutter Animation (Cinema Bars)
  // Enters from 0 to 0.1, stays until 0.8, then opens to reveal Scene 3
  const shutterHeight = useTransform(smoothProgress, [0, 0.1, 0.8, 0.9], ["0vh", "15vh", "15vh", "0vh"]);

  // 2. Scene 1 (Problem) Opacity
  // Fades out as we transition to Scene 2
  const scene1Opacity = useTransform(smoothProgress, [0.6, 0.7], [1, 0]);
  const scene1PointerEvents = useTransform(smoothProgress, (val) => val > 0.65 ? "none" : "auto");

  // 3. Scene 2 (Solution) Opacity
  // Fades in after Scene 1, fades out before Scene 3
  const scene2Opacity = useTransform(smoothProgress, [0.65, 0.75, 0.8, 0.85], [0, 1, 1, 0]);
  
  // 4. Scene 3 (Orbit) Entrance
  // Fades in after shutters open
  const scene3Opacity = useTransform(smoothProgress, [0.85, 0.9], [0, 1]);
  
  // 5. Scene 4 (Orbit Move + Panel)
  // Orbit moves left on desktop. Stays centered on mobile.
  const desktopOrbitX = useTransform(smoothProgress, [0.9, 0.95], ["0%", "-40%"]);
  // We can't conditionally use hooks, so we use logic in render for 'x'.
  const orbitScale = useTransform(smoothProgress, [0.9, 0.95], [1, 0.9]);
  
  // Right Panel Entrance
  const panelOpacity = useTransform(smoothProgress, [0.92, 0.98], [0, 1]);
  const panelX = useTransform(smoothProgress, [0.92, 0.98], [50, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#FDFBF7] w-full font-sans">
      <div className="sticky top-0 h-screen w-full overflow-hidden block">
        
        {/* --- SCENE 1: The Problem --- */}
        <motion.div 
            className="absolute inset-0 bg-[#FDFBF7] flex items-center justify-center p-4"
            style={{ 
                opacity: isLocked ? 0 : scene1Opacity, 
                pointerEvents: scene1PointerEvents,
                display: isLocked ? "none" : "flex"
            }}
        >
             {/* Main Heading */}
             <div className="relative z-10 w-full max-w-7xl text-center">
                <motion.h2 
                    className="text-3xl md:text-5xl font-serif text-[#4A4A4A] leading-tight whitespace-nowrap"
                >
                Building agents that take action <span className="italic font-bold font-serif">is hard</span>
                </motion.h2>
             </div>

            {/* Floating Points */}
            {points.map((point, index) => {
                // Adjust timings to fit within the "Problem" phase (0.15 to 0.6)
                // Stagger them
                const start = 0.15 + (index * 0.05); // 0.15, 0.20, 0.25...
                const end = 0.6; // They all disappear around the transition
                
                // Entrance animation
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const pointOpacity = useTransform(
                    smoothProgress, 
                    [start, start + 0.05, end - 0.05, end], 
                    [0, 1, 1, 0]
                );
                
                // Gentle floating movement while visible
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const yMove = useTransform(
                    smoothProgress,
                    [start, end],
                    [20, -20]
                );

                return (
                    <motion.div
                        key={index}
                        style={{ opacity: pointOpacity, y: yMove }}
                        className={`absolute text-sm md:text-lg text-[#8E8E8E] font-mono tracking-widest pointer-events-none ${point.className}`}
                    >
                        {point.text}
                    </motion.div>
                );
            })}
        </motion.div>


        {/* --- SCENE 2: The Solution --- */}
        <motion.div 
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            style={{ 
                opacity: isLocked ? 0 : scene2Opacity,
                display: isLocked ? "none" : "flex"
            }}
        >
            {/* Background Gradient - ORANGE */}
             <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200">
                <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[radial-gradient(circle_at_50%_120%,#fb923c,transparent_60%)]"></div>
                <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[radial-gradient(circle_at_0%_0%,#fdba74,transparent_50%)]"></div>
             </div>

             {/* Content */}
             <div className="relative z-10 text-center w-full px-4">
                 <motion.h2 className="text-2xl md:text-4xl font-serif text-[#4A4A4A] leading-tight whitespace-nowrap overflow-visible">
                    Composio erases that drag in <span className="font-bold text-black">one call</span>
                 </motion.h2>
             </div>
        </motion.div>


        {/* --- SCENE 3 & 4: Orbit & Final Layout --- */}
        {/* We use a single container for both scenes to handle the movement transition seamlessly */}
        <motion.div 
           className="absolute inset-0 flex items-center justify-center bg-[#FDFBF7] overflow-hidden"
           style={{ opacity: isLocked ? 1 : scene3Opacity }}
        >
             {/* Orbit Container */}
             {/* Moves from center to left based on desktopOrbitX. On mobile, stays centered vertically or moves up slightly. */}
             <motion.div 
                className={`absolute flex items-center justify-center transition-all duration-700 ease-in-out ${isLocked && isMobile ? "top-[30%] left-1/2 -translate-x-1/2 scale-75" : ""}`}
                style={isLocked && isMobile ? {} : { 
                    x: isLocked ? (isMobile ? "0%" : "-40%") : (isMobile ? "0%" : desktopOrbitX),
                    scale: isLocked ? (isMobile ? 0.75 : 1) : orbitScale, 
                    left: "50%",
                    translateX: "-50%",
                    top: isMobile ? "30%" : "50%",
                    translateY: "-50%"
                 }}
             >
                 <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] flex items-center justify-center">
                    {/* Central Hub */}
                    <div className="relative z-20 flex flex-col items-center justify-center">
                        {/* Placeholder Logo */}
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-xl flex items-center justify-center text-white p-2 shadow-lg z-30">
                           <img src="https://composio.dev/favicon.ico" alt="C" className="w-full h-full object-contain invert" />
                        </div>
                        
                        {/* Connecting Lines & Bubbles matching image */}
                        
                        {/* AI Agent (Top Left) */}
                        <div className="absolute -left-[10rem] -top-[6rem] bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 shadow-sm text-sm font-medium text-gray-500 whitespace-nowrap z-20">
                           AI Agent
                        </div>
                        {/* Connecting Line to AI Agent */}
                        <div className="absolute top-1/2 left-1/2 w-[130px] h-[1px] bg-gray-300 -z-10"
                             style={{ 
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transformOrigin: "left center", 
                                transform: "rotate(225deg) translateX(25px)" // Pointing top-left
                             }}
                        ></div>

                        {/* LLM (Top Right) */}
                        <motion.div 
                           className="absolute -right-[10rem] -top-[6rem] bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 shadow-sm text-sm font-medium text-gray-500 whitespace-nowrap z-20"
                           style={{ opacity: panelOpacity }}
                         >
                           LLM
                        </motion.div>
                         {/* Connecting Line to LLM */}
                        <motion.div 
                           className="absolute w-[130px] h-[1px] bg-gray-300 -z-10"
                           style={{ 
                                opacity: panelOpacity, 
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transformOrigin: "left center", 
                                transform: "rotate(-45deg) translateX(25px)" // Pointing top-right
                           }}
                        ></motion.div>

                        {/* Tools (Bottom Right - Orange Button) */}
                         <div className="absolute -right-[7rem] -bottom-[5rem] z-20">
                            <div className="bg-[#fdba74] border-b-4 border-[#fb923c] rounded-full px-6 py-2 text-gray-900 font-semibold text-sm shadow-md">
                                Tools
                            </div>
                         </div>
                         {/* Connecting Line to Tools */}
                         <div className="absolute w-[100px] h-[1px] bg-gray-300 -z-10"
                             style={{ 
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transformOrigin: "left center", 
                                transform: "rotate(45deg) translateX(25px)" // Pointing bottom-right
                             }}
                        ></div>

                    </div>

                    {/* Orbiting Icons */}
                    <motion.div 
                       className="absolute inset-0 rounded-full"
                       animate={{ rotate: 360 }}
                       transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                       {orbitIcons.map((item, i) => {
                          const angle = (i / orbitIcons.length) * 360;
                          // Alternate radius for up/down effect (zigzag)
                          const radius = 280 + (i % 2 === 0 ? 20 : -20);
                          return (
                             <div 
                               key={i}
                               className="absolute top-1/2 left-1/2 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                               style={{ 
                                 transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`, 
                               }}
                             >
                                <item.Icon size={24} color={item.color} />
                             </div>
                          );
                       })}
                    </motion.div>
                 </div>
             </motion.div>

             {/* Right Panel (Scene 4 Content) */}
             <motion.div 
                className="absolute w-full max-w-md bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-xl z-40 
                           md:right-[5%] lg:right-[10%] md:top-1/2 md:-translate-y-1/2
                           left-1/2 -translate-x-1/2 bottom-8 md:translate-x-0 md:left-auto md:bottom-auto"
                style={isMobile ? {} : { 
                    opacity: isLocked ? 1 : panelOpacity, 
                    x: isLocked ? 0 : panelX 
                }}
             >
                 {/* Project Header & Content (Visible when Project is active) */}
                 <AnimatePresence mode="wait">
                    {activeAccordion === 'Project' && (
                        <motion.div
                            key="header"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <h3 className="text-3xl font-serif text-[#1a1a1a] mb-6 leading-tight">
                                Turn bugs on Discord thread into Github issues and sync with Calendar events.
                            </h3>
                            
                            <div className="space-y-5 mb-8">
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <span>Toolkits required</span>
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded bg-[#5865F2] flex items-center justify-center text-white p-1.5 border-2 border-white"><MessageCircle size={16} /></div>
                                        <div className="w-8 h-8 rounded bg-[#181717] flex items-center justify-center text-white p-1.5 border-2 border-white"><Github size={16} /></div>
                                        <div className="w-8 h-8 rounded bg-[#4285F4] flex items-center justify-center text-white p-1.5 border-2 border-white"><Calendar size={16} /></div>
                                    </div>
                                </div>
                                <div className="space-y-3 font-mono text-sm text-gray-400">
                                    <div className="flex justify-between items-center">
                                        <span>bug details extracted</span>
                                        <span className="text-gray-300">time taken → <span className="text-black font-bold">0secs</span></span>
                                    </div>
                                    <div>issues created</div>
                                    <div>'bug bash' event added</div>
                                    <div>notifications sent</div>
                                </div>
                            </div>
                            <div className="border-t border-gray-200" />
                        </motion.div>
                    )}
                 </AnimatePresence>

                 {/* Accordions */}
                 <div className="divide-y divide-gray-200">
                    {/* Dynamic List: Project appears here if not active */}
                    {(activeAccordion !== 'Project' ? ['Project', 'Integrations', 'LLM', 'AI Agent'] : ['Integrations', 'LLM', 'AI Agent']).map((item) => (
                        <div key={item} className="py-3">
                            <button 
                                onClick={() => setActiveAccordion(activeAccordion === item ? null : item)}
                                className="flex items-center justify-between w-full text-left"
                            >
                                <span className={`text-lg transition-colors ${activeAccordion === item ? 'font-medium text-black' : 'text-gray-600'}`}>
                                    {item}
                                </span>
                                <span className="text-gray-400 font-light text-2xl">
                                    {activeAccordion === item ? '−' : '+'}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeAccordion === item && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-2 pb-4 text-sm text-gray-600 leading-relaxed">
                                            {item === 'Integrations' && (
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li>Handles authentication & tooling integration</li>
                                                    <li>Manages execution environments</li>
                                                </ul>
                                            )}
                                            {item === 'LLM' && (
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li>Processes natural language inputs</li>
                                                    <li>Determines intent for tool calls</li>
                                                    <li>Generates arguments for actions</li>
                                                </ul>
                                            )}
                                            {item === 'AI Agent' && (
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li>Orchestrates the entire workflow</li>
                                                    <li>Plans and executes complex tasks</li>
                                                    <li>Iterates based on tool feedback</li>
                                                </ul>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                 </div>
             </motion.div>
        </motion.div>

        {/* --- CINEMATIC SHUTTERS --- */}
        {/* Top Bar */}
        <motion.div 
            style={{ height: isLocked ? "0vh" : shutterHeight }} 
            className="absolute top-0 left-0 right-0 bg-black z-50 shadow-sm"
        />
        {/* Bottom Bar */}
        <motion.div 
            style={{ height: isLocked ? "0vh" : shutterHeight }} 
            className="absolute bottom-0 left-0 right-0 bg-black z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
        />
        
      </div>
    </div>
  );
}
