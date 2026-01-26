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

const WorkAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Futuristic Background - Neural Network */}
    <div className="absolute inset-0 opacity-[0.04]">
      <svg className="w-full h-full">
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={i}
            cx={`${10 + (i % 5) * 20}%`}
            cy={`${15 + Math.floor(i / 5) * 25}%`}
            r="3"
            fill="#3b82f6"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </svg>
    </div>

    {/* Main Content - Horizontal Layout with Central Hub */}
    <div className="relative flex items-center justify-center gap-8 md:gap-16 w-full">

      {/* Left Panel - Data Sources */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex flex-col gap-3"
      >
        {[
          { icon: Database, label: "Data Lake" },
          { icon: Server, label: "APIs" },
          { icon: Globe, label: "SaaS" },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="flex items-center gap-3 bg-white rounded-xl px-4 py-2 shadow-lg border border-blue-100"
          >
            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
            <span className="text-[10px] md:text-xs font-bold text-gray-700">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Data Flow Lines - Left */}
      <div className="relative w-12 md:w-20 h-32">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-transparent"
            style={{ top: `${20 + i * 30}%` }}
            animate={{ scaleX: [0, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* Central AI Orchestrator - Futuristic Design */}
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-6 md:-inset-8 rounded-full border-2 border-dashed border-blue-200"
        />

        {/* Inner Rotating Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-3 md:-inset-4 rounded-full border border-indigo-300/50"
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full"
              style={{
                top: i === 0 ? '0' : i === 2 ? '100%' : '50%',
                left: i === 1 ? '100%' : i === 3 ? '0' : '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </motion.div>

        {/* Central Core */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center shadow-2xl shadow-blue-300/50 relative"
        >
          <Workflow className="w-10 h-10 md:w-14 md:h-14 text-white" />

          {/* Glowing Effect */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl bg-blue-400 blur-xl -z-10"
          />
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg border border-gray-100"
        >
          <span className="text-[8px] md:text-[10px] font-black text-gray-600 uppercase tracking-wider">Orchestrating</span>
        </motion.div>
      </div>

      {/* Animated Data Flow Lines - Right */}
      <div className="relative w-12 md:w-20 h-32">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-l from-emerald-400 to-transparent"
            style={{ top: `${20 + i * 30}%` }}
            animate={{ scaleX: [0, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 + i * 0.3 }}
          />
        ))}
      </div>

      {/* Right Panel - Outputs */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex flex-col gap-3"
      >
        {[
          { icon: Zap, label: "Actions", color: "emerald" },
          { icon: Brain, label: "Insights", color: "violet" },
          { icon: Activity, label: "Reports", color: "blue" },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className={`flex items-center gap-3 bg-${item.color}-50 rounded-xl px-4 py-2 shadow-lg border border-${item.color}-100`}
          >
            <item.icon className={`w-4 h-4 md:w-5 md:h-5 text-${item.color}-500`} />
            <span className="text-[10px] md:text-xs font-bold text-gray-700">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Bottom Stats */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute bottom-12 md:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-gray-900/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-xl"
    >
      <div className="flex items-center gap-2">
        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
        <span className="text-[10px] font-bold text-white">3 Agents Active</span>
      </div>
      <div className="w-px h-3 bg-gray-600" />
      <div className="flex items-center gap-2">
        <Cpu className="w-3 h-3 text-blue-400" />
        <span className="text-[10px] font-bold text-white">42ms Latency</span>
      </div>
    </motion.div>
  </div>
);

const ServiceAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Conversation Flow Visualization */}
    <div className="relative flex items-center gap-6 md:gap-12">
      {/* User Side */}
      <div className="flex flex-col items-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center shadow-xl border-4 border-white"
        >
          <Users className="w-6 h-6 md:w-10 md:h-10 text-pink-600" />
        </motion.div>
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">User</span>
      </div>

      {/* Chat Bubbles Flow */}
      <div className="relative w-32 md:w-48 h-24 md:h-32">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [0, 60, 120, 180],
              y: [0, -10, 0, 10]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeInOut" }}
            className={`absolute left-0 ${i === 0 ? 'top-0' : i === 1 ? 'top-1/2 -translate-y-1/2' : 'bottom-0'} px-3 py-2 rounded-xl text-[8px] md:text-[10px] font-bold whitespace-nowrap shadow-lg ${i % 2 === 0
                ? 'bg-pink-500 text-white rounded-bl-none'
                : 'bg-white text-gray-700 border border-gray-100 rounded-br-none'
              }`}
          >
            {i === 0 ? "Need help!" : i === 1 ? "I'm here 24/7" : "Thanks! ⭐"}
          </motion.div>
        ))}
      </div>

      {/* AI Agent */}
      <div className="flex flex-col items-center gap-3">
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-2xl shadow-pink-200 border-4 border-white"
        >
          <Bot className="w-6 h-6 md:w-10 md:h-10 text-white" />
        </motion.div>
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">AI Agent</span>
      </div>
    </div>

    {/* Satisfaction Meter */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="absolute bottom-14 md:bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100 flex items-center gap-3"
    >
      <span className="text-[10px] font-black text-gray-500 uppercase">CSAT</span>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + star * 0.1 }}
          >
            <Sparkles className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          </motion.div>
        ))}
      </div>
      <span className="text-xs font-black text-gray-900">5.0</span>
    </motion.div>
  </div>
);

const ProcessAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Pipeline Visualization */}
    <div className="relative flex items-center gap-4 md:gap-8">
      {/* Input Stack */}
      <div className="relative flex flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="w-16 h-10 md:w-24 md:h-12 rounded-xl bg-white shadow-lg border border-orange-100 flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
            <div className="flex flex-col gap-0.5">
              <div className="w-6 md:w-10 h-1 bg-gray-200 rounded-full" />
              <div className="w-4 md:w-6 h-1 bg-gray-100 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Arrow with particles */}
      <div className="relative w-12 md:w-20">
        <motion.div
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-orange-400 rounded-full absolute top-1/2 -translate-y-1/2 shadow-lg shadow-orange-200"
        />
        <div className="h-[2px] w-full bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 rounded-full" />
      </div>

      {/* Processing Core */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-orange-200 border-4 border-white">
          <Zap className="w-8 h-8 md:w-14 md:h-14 text-white" fill="currentColor" />
        </div>
        {/* Orbiting dots */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-300 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              top: '50%', left: '50%',
              transformOrigin: `${(i % 2 ? 50 : -50)}px 0px`
            }}
          />
        ))}
      </motion.div>

      {/* Arrow */}
      <div className="relative w-12 md:w-20">
        <motion.div
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="w-2 h-2 bg-emerald-400 rounded-full absolute top-1/2 -translate-y-1/2 shadow-lg shadow-emerald-200"
        />
        <div className="h-[2px] w-full bg-gradient-to-r from-orange-200 via-emerald-400 to-emerald-200 rounded-full" />
      </div>

      {/* Output Stack */}
      <div className="relative flex flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
            className="w-16 h-10 md:w-24 md:h-12 rounded-xl bg-emerald-50 shadow-lg border border-emerald-200 flex items-center justify-center gap-2"
          >
            <CheckSquare className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
            <span className="text-[8px] md:text-[10px] font-bold text-emerald-600">Done</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Stats Bar */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute bottom-14 md:bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 rounded-full px-4 py-2 flex items-center gap-4 shadow-xl"
    >
      <div className="flex items-center gap-2">
        <Activity className="w-3 h-3 text-emerald-400" />
        <span className="text-[10px] font-black text-white">1.2K/min</span>
      </div>
      <div className="w-px h-4 bg-gray-700" />
      <div className="flex items-center gap-2">
        <Zap className="w-3 h-3 text-amber-400" />
        <span className="text-[10px] font-black text-white">99.9% SLA</span>
      </div>
    </motion.div>
  </div>
);

const SecurityAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Full Width Layout - Vertical on mobile, Horizontal on desktop */}
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16 w-full px-4">

      {/* Left Panel - Threat Detection (Top on mobile) */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex flex-row lg:flex-col gap-2 lg:gap-3 shrink-0 order-1 lg:order-1"
      >
        <div className="hidden lg:block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Threat Monitor</div>
        {[
          { label: "DDoS Protection", status: "Active", color: "emerald" },
          { label: "SQL Injection", status: "Blocked", color: "red" },
          { label: "Rate Limiting", status: "Active", color: "emerald" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 bg-white rounded-lg px-2 lg:px-3 py-1.5 lg:py-2 shadow-md border border-gray-100"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className={`w-2 h-2 rounded-full ${item.color === 'emerald' ? 'bg-emerald-500' : 'bg-red-500'}`}
            />
            <span className="text-[8px] lg:text-[10px] font-bold text-gray-700">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Central Shield (Middle on all screens) */}
      <div className="relative shrink-0 order-2 lg:order-2 my-2 lg:my-0">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-6 lg:-inset-12 rounded-full border-2 border-dashed border-emerald-200 opacity-60"
        />

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-20 h-20 lg:w-32 lg:h-32 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-emerald-200 border-4 border-white relative z-10"
        >
          <ShieldCheck className="w-10 h-10 lg:w-16 lg:h-16 text-white" strokeWidth={1.5} />

          {/* Pulse rings */}
          <motion.div
            animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl border-2 border-emerald-400"
          />
          <motion.div
            animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute inset-0 rounded-3xl border border-emerald-300"
          />
        </motion.div>

        {/* Orbiting Security Badges - Hidden on mobile to prevent overlap */}
        {[
          { icon: Lock, angle: 45 },
          { icon: Eye, angle: 135 },
          { icon: Fingerprint, angle: 225 },
          { icon: Shield, angle: 315 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="hidden lg:flex absolute w-10 h-10 rounded-lg bg-white shadow-lg items-center justify-center border border-emerald-100"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateX(60px) rotate(-${item.angle}deg)`
            }}
          >
            <item.icon className="w-5 h-5 text-emerald-600" />
          </motion.div>
        ))}
      </div>

      {/* Right Panel - Compliance & Policies (Bottom on mobile) */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex flex-row lg:flex-col gap-2 lg:gap-3 shrink-0 order-3 lg:order-3"
      >
        <div className="hidden lg:block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Compliance</div>
        {[
          { label: "SOC2 Type II", icon: FileBadge, status: "Certified" },
          { label: "GDPR Ready", icon: Globe, status: "Compliant" },
          { label: "ISO 27001", icon: ShieldAlert, status: "Verified" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 bg-emerald-50 rounded-lg px-2 lg:px-3 py-1.5 lg:py-2 shadow-md border border-emerald-100"
          >
            <item.icon className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-600" />
            <div className="flex flex-col">
              <span className="text-[8px] lg:text-[10px] font-bold text-gray-700">{item.label}</span>
              <span className="text-[6px] lg:text-[8px] font-semibold text-emerald-600">{item.status}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Security Status Bar */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute bottom-12 md:bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-2 shadow-xl border border-gray-100 flex items-center gap-4"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="w-2 h-2 bg-emerald-500 rounded-full"
      />
      <span className="text-[10px] font-black text-gray-600 uppercase tracking-wider">All Systems Secure</span>
      <div className="w-px h-3 bg-gray-200" />
      <span className="text-[10px] font-black text-emerald-600">99.99% Uptime</span>
    </motion.div>
  </div>
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
              className={`flex flex-col gap-3 cursor-pointer transition-opacity duration-300 ${activeTab === tab.id ? "opacity-100" : "opacity-60 hover:opacity-80"
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

        {/* Content Area - Sleek Futuristic Container */}
        <div className="w-[102%] -ml-[1%] bg-white rounded-[2.5rem] h-[620px] md:h-[440px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative overflow-hidden border-[12px] border-[#FFF5F8] border-b-0 -mb-12">
          {/* White bottom extension to create clean white curved bottom */}
          <div className="absolute -bottom-4 left-0 right-0 h-20 bg-white rounded-b-[2.5rem]" />

          {/* Subtle corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-100 rounded-tl-xl opacity-60 z-10" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-100 rounded-tr-xl opacity-60 z-10" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-100 rounded-bl-xl opacity-60 z-10" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-100 rounded-br-xl opacity-60 z-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full flex items-center justify-center p-6 md:p-10 -mt-8 md:mt-0"
            >
              {activeTab === 'work' && <WorkAnimation />}
              {activeTab === 'service' && <ServiceAnimation />}
              {activeTab === 'process' && <ProcessAnimation />}
              {activeTab === 'security' && <SecurityAnimation />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom White Cover to hide orange border/padding at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-white z-0 hidden" />
      </div>
    </section>
  );
}
