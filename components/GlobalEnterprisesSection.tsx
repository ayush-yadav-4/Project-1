"use client";

import { 
  LayoutGrid, MessageSquare, Sparkles, BarChart3,
  Database, Brain, Users, Bot, Heart, FileStack, 
  Settings, Zap, Globe, ShieldCheck, Lock, Activity,
  Server, FileText, Scan, RefreshCw, Shield, UserCheck, 
  PieChart, ShieldAlert, Radar, Eye, FileBadge,
  MessageCircle, Send, History, CheckSquare, Search,
  Code2, Cpu, Workflow, Fingerprint
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorkflowNode = ({ icon: Icon, label, subLabel, color, delay = 0 }: { icon: any, label: string, subLabel?: string, color: string, delay?: number }) => (
  <motion.div 
    initial={{ scale: 0.8, opacity: 0, y: 10 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center gap-3 z-10 relative group"
  >
    <div className="relative">
        <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl ${color} flex items-center justify-center text-white shadow-xl shadow-gray-200/50 ring-4 md:ring-[6px] ring-white transition-transform duration-300 group-hover:scale-105 z-10 relative`}>
          <Icon className="w-7 h-7 md:w-10 md:h-10" strokeWidth={1.5} />
        </div>
        
        {/* Pulse Ring */}
        <motion.div 
            className={`absolute inset-0 rounded-2xl md:rounded-3xl ${color} opacity-40 z-0`}
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: delay }}
        />
    </div>

    <div className="flex flex-col items-center text-center">
      <span className="text-sm md:text-base font-bold text-gray-800 bg-white/90 px-4 py-1 rounded-full shadow-sm border border-gray-100 backdrop-blur-sm mb-1 whitespace-nowrap">
        {label}
      </span>
      {subLabel && (
        <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider">{subLabel}</span>
      )}
    </div>
  </motion.div>
);

const SystemNode = ({ icon: Icon, label, delay = 0 }: { icon: any, label: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay + 0.3 }}
    className="flex items-center gap-3 bg-white px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm border border-gray-100 z-10"
  >
    <div className="p-1.5 md:p-2 rounded-lg bg-gray-50 text-gray-600">
        <Icon className="w-4 h-4 md:w-5 md:h-5" />
    </div>
    <span className="text-xs md:text-sm font-semibold text-gray-600 whitespace-nowrap">{label}</span>
  </motion.div>
);

const WorkflowConnector = ({ vertical = false }: { vertical?: boolean }) => (
  !vertical ? (
  <div className="flex-1 h-[2px] bg-gray-100 relative mx-2 rounded-full min-w-[30px] md:min-w-[60px] overflow-hidden self-center mb-6 md:mb-8 flex items-center">
     <div className="absolute inset-0 flex items-center">
        {/* Moving Gradient 1 */}
        <motion.div 
             className="absolute w-1/2 h-full bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"
             initial={{ x: "-100%" }}
             animate={{ x: "200%" }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
         {/* Moving Gradient 2 (slower) */}
         <motion.div 
             className="absolute w-1/3 h-full bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-40"
             initial={{ x: "-100%" }}
             animate={{ x: "200%" }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        {/* Moving Dot */}
        <motion.div 
            className="absolute h-1.5 w-1.5 rounded-full bg-gray-400 blur-[0.5px]"
            initial={{ left: "-5%" }}
            animate={{ left: "105%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
    </div>
  </div>
  ) : (
    <div className="w-[1px] h-8 md:h-12 bg-gray-200 relative mx-auto -my-2 overflow-hidden">
       <motion.div 
             className="absolute w-full h-1/2 bg-gradient-to-b from-transparent via-gray-400 to-transparent opacity-50"
             initial={{ y: "-100%" }}
             animate={{ y: "200%" }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
        <motion.div 
             className="absolute w-full h-1/3 bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-30"
             initial={{ y: "-100%" }}
             animate={{ y: "200%" }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0 }}
        />
    </div>
  )
);

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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white pt-8 pb-24 px-4 md:px-8 flex flex-col items-center">
      
      {/* Icons Row - Full width from left to right, clips overflow */}
      <div className="w-full overflow-hidden mb-12">
        <div className="flex justify-between gap-2 md:gap-4 w-full">
            {/* Adobe Ai */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#330000] flex items-center justify-center text-[#FF9A00] font-bold text-xl md:text-2xl border border-gray-100 shadow-sm shrink-0">Ai</div>
            
            {/* Adobe Id */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#49021F] flex items-center justify-center text-[#FF69B4] font-bold text-xl md:text-2xl border border-gray-100 shadow-sm shrink-0">Id</div>
            
            {/* Notion */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-black">
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28.047-.653 0-.466-.327-.793-1.12-.793H4.832c-.653 0-1.166.42-1.166 1.073v15.603c0 .653.466 1.12 1.12 1.12.466 0 .886-.233 1.12-.606l12.515-7.184V7.61c0-.466-.28-.793-.746-.793-.42 0-.793.233-1.073.606L5.392 14.84V5.327c0-.56-.187-.84-.933-1.12z"/>
                </svg>
            </div>

            {/* Slack */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#3F0E40] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.522-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.52h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
            </div>

            {/* Google */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
            </div>

            {/* Gmail */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335"/>
                </svg>
            </div>

            {/* Google Photos */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M20.2 11.6h-4.6c-1.9 0-3.4-1.5-3.4-3.4V3.6c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6v4.6c0 .9.7 1.6 1.6 1.6s1.6.7 1.6 1.6c0 .9-.7 1.6-1.6 1.6z" fill="#FBBC04"/>
                    <path d="M11.6 20.2V15.6c0-1.9-1.5-3.4-3.4-3.4H3.6c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6h4.6c.9 0 1.6.7 1.6 1.6v4.6c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6z" fill="#EA4335"/>
                    <path d="M3.6 11.6h4.6c1.9 0 3.4 1.5 3.4 3.4v4.6c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6v-4.6c0-.9-.7-1.6-1.6-1.6s-1.6-.7-1.6-1.6c0-.9.7-1.6 1.6-1.6z" fill="#4285F4"/>
                    <path d="M12.4 3.6v4.6c0 1.9 1.5 3.4 3.4 3.4h4.6c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6h-4.6c-.9 0-1.6-.7-1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6z" fill="#34A853"/>
                </svg>
            </div>

            {/* Google Drive */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M8.33 17.5l-3.83-6.63L8.77 3.5h7.46l4.27 7.37-3.83 6.63H8.33z" fill="none"/>
                    <path d="M8.77 3.5L4.5 10.87l3.83 6.63h8.34l4.27-7.37L16.23 3.5H8.77z" fill="none"/>
                    <path d="M8.77 3.5h7.46l-3.73 6.46-3.73-6.46z" fill="#FFC107"/>
                    <path d="M16.67 17.5H8.33l3.73-6.46 4.61 6.46z" fill="#4CAF50"/>
                    <path d="M4.5 10.87l4.27 7.37 3.73-6.46-3.73-6.46L4.5 10.87z" fill="#2196F3"/>
                </svg>
            </div>

            {/* Chrome */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#4285F4"/>
                </svg>
            </div>

            {/* Sparkles */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-purple-500">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#grad-global-1)"/>
                    <defs>
                        <linearGradient id="grad-global-1" x1="2" y1="2" x2="22" y2="22">
                            <stop offset="0%" stopColor="#FF9A9E" />
                            <stop offset="100%" stopColor="#FECFEF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Figma */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E"/>
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262"/>
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1ABCFE"/>
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="#0ACF83"/>
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#A259FF"/>
                </svg>
            </div>

            {/* VS Code */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#1E1E1E] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M17.583 4.166L7.52 11.583l-3.77-2.937-1.75.683v5.35l1.75.683 3.77-2.937 10.063 7.417L22 18.417V5.583l-4.417-1.417zM5.5 13.5l-1.5-1v-.5l1.5-1 2 1.5-2 1zm12 4.917l-8-5.917 8-5.917v11.834z" fill="#007ACC"/>
                </svg>
            </div>

            {/* GitHub */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#24292F] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
            </div>

            {/* Spotify */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#1DB954] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.207.856zm1.223-2.723c-.226.37-.706.486-1.077.26-2.687-1.652-6.785-2.13-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.52-.973 3.632-1.102 8.147-.568 11.234 1.32.37.226.487.706.26 1.076zm.105-2.835c-3.223-1.914-8.54-2.09-11.618-1.156-.494.15-1.016-.13-1.166-.624-.148-.495.13-1.017.625-1.167 3.532-1.073 9.404-.866 13.115 1.337.445.264.59.838.327 1.282-.264.443-.838.59-1.283.328z"/>
                </svg>
            </div>

            {/* Discord */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#5865F2] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
            </div>

            {/* Dropbox */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75-6 3.75-6-3.75L18 2zM0 13.25L6 9.5l6 3.75L6 17 0 13.25zm18-3.75l6 3.75L18 17l-6-3.75 6-3.75zM6 18.25l6-3.75 6 3.75-6 3.75-6-3.75z" fill="#0061FF"/>
                </svg>
            </div>

            {/* Trello */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0079BF] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H6V7h4v10zm8-6h-4V7h4v4z"/>
                </svg>
            </div>
        </div>
      </div>

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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-4 md:p-8"
                >
                     {/* Background Grid */}
                     <div className="absolute inset-0 opacity-[0.03]" 
                          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                     </div>

                     {activeTab === 'work' && (
                        <div className="flex flex-col items-center w-full max-w-5xl gap-4 md:gap-8">
                           {/* Top Layer */}
                           <div className="flex items-center w-full justify-between px-4">
                               <WorkflowNode icon={Database} label="Data Sources" subLabel="SaaS & DBs" color="bg-blue-600" />
                               <WorkflowConnector />
                               <WorkflowNode icon={Workflow} label="Orchestration" subLabel="Logic Core" color="bg-indigo-600" delay={0.2} />
                               <WorkflowConnector />
                               <WorkflowNode icon={Activity} label="Business Impact" subLabel="Automated" color="bg-cyan-600" delay={0.4} />
                           </div>
                           
                           {/* Vertical Connectors */}
                           <div className="flex w-full justify-around px-12 md:px-24 -mt-4 opacity-50">
                               <WorkflowConnector vertical />
                               <WorkflowConnector vertical />
                               <WorkflowConnector vertical />
                           </div>

                           {/* Bottom Layer */}
                           <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                               <SystemNode icon={Server} label="API Gateway" delay={0.5} />
                               <SystemNode icon={Brain} label="LLM Reasoning" delay={0.6} />
                               <SystemNode icon={FileText} label="Audit Logs" delay={0.7} />
                           </div>
                        </div>
                     )}

                     {activeTab === 'service' && (
                        <div className="flex flex-col items-center w-full max-w-5xl gap-4 md:gap-8">
                           <div className="flex items-center w-full justify-between px-4">
                               <WorkflowNode icon={Users} label="Customers" subLabel="Inbound" color="bg-pink-600" />
                               <WorkflowConnector />
                               <WorkflowNode icon={Bot} label="AI Agents" subLabel="24/7 Support" color="bg-purple-600" delay={0.2} />
                               <WorkflowConnector />
                               <WorkflowNode icon={Heart} label="Resolution" subLabel="CSAT 5/5" color="bg-rose-500" delay={0.4} />
                           </div>
                           <div className="flex w-full justify-around px-12 md:px-24 -mt-4 opacity-50">
                               <WorkflowConnector vertical />
                               <WorkflowConnector vertical />
                               <WorkflowConnector vertical />
                           </div>
                           <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                               <SystemNode icon={MessageCircle} label="Live Chat" delay={0.5} />
                               <SystemNode icon={History} label="Context Window" delay={0.6} />
                               <SystemNode icon={CheckSquare} label="Ticket Sync" delay={0.7} />
                           </div>
                        </div>
                     )}

                     {activeTab === 'process' && (
                        <div className="flex flex-col items-center w-full max-w-5xl gap-4 md:gap-8">
                           <div className="flex items-center w-full justify-between px-4">
                               <WorkflowNode icon={FileStack} label="Documents" subLabel="Unstructured" color="bg-amber-500" />
                               <WorkflowConnector />
                               <WorkflowNode icon={Settings} label="Processing" subLabel="Extraction" color="bg-orange-500" delay={0.2} />
                               <WorkflowConnector />
                               <WorkflowNode icon={Zap} label="ERP Sync" subLabel="Structured" color="bg-yellow-500" delay={0.4} />
                           </div>
                           <div className="flex w-full justify-around px-12 md:px-24 -mt-4 opacity-50">
                               <WorkflowConnector vertical />
                               <WorkflowConnector vertical />
                               <WorkflowConnector vertical />
                           </div>
                           <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                               <SystemNode icon={Scan} label="OCR Engine" delay={0.5} />
                               <SystemNode icon={RefreshCw} label="Validation" delay={0.6} />
                               <SystemNode icon={UserCheck} label="Human Loop" delay={0.7} />
                           </div>
                        </div>
                     )}

                     {activeTab === 'security' && (
                        <div className="flex flex-col items-center w-full max-w-5xl gap-4 md:gap-8">
                           <div className="flex items-center w-full justify-between px-4">
                               <WorkflowNode icon={Globe} label="Traffic" subLabel="Global" color="bg-emerald-600" />
                               <WorkflowConnector />
                               <WorkflowNode icon={ShieldCheck} label="Guardrails" subLabel="Policy Check" color="bg-teal-600" delay={0.2} />
                               <WorkflowConnector />
                               <WorkflowNode icon={Lock} label="Secure" subLabel="Compliance" color="bg-green-600" delay={0.4} />
                           </div>
                           <div className="flex w-full justify-around px-12 md:px-24 -mt-4 opacity-50">
                               <WorkflowConnector vertical />
                               <WorkflowConnector vertical />
                               <WorkflowConnector vertical />
                           </div>
                           <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                               <SystemNode icon={ShieldAlert} label="Threat Intel" delay={0.5} />
                               <SystemNode icon={Eye} label="PII Detection" delay={0.6} />
                               <SystemNode icon={FileBadge} label="SOC2 Report" delay={0.7} />
                           </div>
                        </div>
                     )}
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Bottom White Cover to hide orange border/padding at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white z-0 hidden" />
      </div>
    </section>
  );
}
