"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MoreVertical,
  Send,
  Eye,
  Users,
  Settings,
  Info,
  CheckCircle2,
  Plus,
  MousePointer2,
  Sparkles,
  Loader2,
  ShieldCheck,
  Zap,
  Activity,
  Bot
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Mobile-specific simplified animated component
const MobileAgentDashboard = ({ isLoading, scanProgress }: { isLoading: boolean; scanProgress: number }) => {
  return (
    <div className="relative w-full px-5 py-8">
      {/* Mobile Main Container - Increased size */}
      <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[280px]">
        {/* Mobile Header */}
        <div className="h-14 border-b border-gray-100 px-4 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-sm">M</div>
            <span className="font-bold text-gray-900 text-sm truncate">Agent Portal</span>
            <Badge variant="outline" className="text-[8px] px-2 py-0.5 h-5 bg-blue-50 text-blue-600 border-blue-100 font-bold">READY</Badge>
          </div>
          <div className="flex items-center gap-1">
            <Badge variant="outline" className={`text-[8px] px-2 py-0.5 h-5 ${isLoading ? 'bg-gray-50 text-gray-400' : 'bg-green-50 text-green-600 border-green-100'} font-bold`}>
              {isLoading ? 'SCANNING...' : 'SECURE'}
            </Badge>
          </div>
        </div>

        {/* Mobile Content Area */}
        <div className="relative p-5 bg-gray-50/30">
          {/* Scanning Animation */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ top: 0 }}
                animate={{ top: `${scanProgress}%` }}
                className="absolute left-0 right-0 h-[2px] bg-blue-500/60 shadow-[0_0_12px_rgba(59,130,246,0.6)] z-10"
              />
            )}
          </AnimatePresence>

          <div className={`space-y-4 transition-all duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
            {/* Title Section */}
            <div className="mb-4">
              <h1 className="text-base font-black text-gray-900 tracking-tight">Agent Marketplace</h1>
              <p className="text-[10px] text-gray-400 font-medium">Autonomous Workforce Interface</p>
            </div>

            {/* Operational Parameters - Compact */}
            <div className="space-y-3">
              <h3 className="text-[9px] font-black text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-orange-400" /> Parameters
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-white rounded-lg p-2.5 border border-gray-100 shadow-sm">
                  <div className="text-[8px] font-bold text-gray-400 uppercase">Model</div>
                  <div className="text-[10px] font-bold text-gray-700 truncate">Claude 3.5</div>
                </div>
                <div className="bg-white rounded-lg p-2.5 border border-gray-100 shadow-sm">
                  <div className="text-[8px] font-bold text-gray-400 uppercase">Context</div>
                  <div className="text-[10px] font-bold text-gray-700">200k</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-white rounded-lg p-2.5 border border-gray-100 shadow-sm">
                  <div className="text-[8px] font-bold text-gray-400 uppercase">Tools</div>
                  <div className="text-[10px] font-bold text-gray-700 truncate">GitHub, Slack</div>
                </div>
                <div className="bg-white rounded-lg p-2.5 border border-gray-100 shadow-sm">
                  <div className="text-[8px] font-bold text-gray-400 uppercase">Latency</div>
                  <div className="text-[10px] font-bold text-gray-700">&lt;500ms</div>
                </div>
              </div>
            </div>

            {/* Integration Pills - Compact */}
            <div className="space-y-2">
              <h3 className="text-[9px] font-black text-gray-500 uppercase tracking-wider">Integrations</h3>
              <div className="flex flex-wrap gap-2">
                {["React SDK", "Multi-Agent", "Audit Logs"].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-md text-[9px] font-bold text-gray-600 border border-gray-100">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-purple-500' : 'bg-orange-500'}`} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer - Action Buttons */}
        <div className="h-12 border-t border-gray-100 px-4 flex items-center justify-between bg-white">
          <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold text-gray-500 gap-1.5 px-3">
            <Activity className="w-3.5 h-3.5 text-blue-500" /> Health
          </Button>
          <Button size="sm" className="h-8 bg-blue-600 text-white text-[10px] font-bold gap-1.5 px-4 shadow-sm">
            <Zap className="w-3.5 h-3.5" /> Deploy
          </Button>
        </div>
      </div>

      {/* Floating Cards - Mobile Optimized - INCREASED SIZES */}
      
      {/* Performance Index - Top Left - Larger */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -10 }}
        animate={{ opacity: isLoading ? 0.5 : 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -top-4 -left-2 z-20"
      >
        <Card className="w-36 p-3 shadow-lg border-none bg-white/95 backdrop-blur rounded-xl">
          <div className="text-[9px] font-black text-gray-900 mb-2 flex items-center gap-1">
            Performance <Info size={10} className="text-gray-300" />
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-bold text-gray-400">
                <span>Latency</span>
                <span className="text-blue-600">90%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: isLoading ? 0 : '90%' }} transition={{ duration: 0.8 }} className="h-full bg-blue-600 rounded-full" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-bold text-gray-400">
                <span>Accuracy</span>
                <span className="text-indigo-600">98%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: isLoading ? 0 : '98%' }} transition={{ duration: 0.8, delay: 0.1 }} className="h-full bg-indigo-600 rounded-full" />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Hallucination Score - Top Right - Larger */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: isLoading ? 0.5 : 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute -top-3 -right-2 z-20"
      >
        <Card className="p-3 shadow-lg border-none bg-white/95 backdrop-blur rounded-xl flex items-center gap-3">
          <div className="relative w-12 h-12">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="3" />
              <motion.circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="3" initial={{ strokeDasharray: "0 100" }} animate={{ strokeDasharray: isLoading ? "0 100" : "85 100" }} transition={{ duration: 1 }} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[11px] font-black text-gray-900">9.2</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-gray-500 uppercase">Score</span>
            <div className="flex gap-1.5 mt-1">
              <div className="w-2 h-2 bg-red-400 rounded-full" />
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Active Agents - Bottom Left - Larger */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: isLoading ? 0.5 : 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute -bottom-3 -left-2 z-20"
      >
        <Card className="w-32 p-3 shadow-lg border-none bg-white/95 backdrop-blur rounded-xl">
          <div className="text-[9px] font-black text-gray-900 mb-2 uppercase">Agents</div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-[8px]">SC</div>
            <div>
              <div className="text-[9px] font-bold text-gray-800">Support</div>
              <div className="text-[7px] text-green-500 font-bold">ACTIVE</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[8px]">DA</div>
            <div>
              <div className="text-[9px] font-bold text-gray-800">Analyst</div>
              <div className="text-[7px] text-gray-400 font-bold">IDLE</div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Guardrails Badge - Bottom Right - Larger */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: isLoading ? 0.5 : 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute -bottom-4 -right-2 z-20"
      >
        <Card className="p-3 shadow-lg border-none bg-white/95 backdrop-blur rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span className="text-[9px] font-black text-gray-900 uppercase">Guardrails</span>
          </div>
          <div className="flex flex-wrap gap-1.5 max-w-[100px]">
            {["PII", "SOC2", "VPC"].map((tag, i) => (
              <Badge key={i} className={`text-[8px] font-bold px-2 py-0.5 h-4 rounded ${i === 2 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                {tag}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* VPC Shield Badge - Floating - Larger */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="absolute top-1/2 -left-3 -translate-y-1/2 z-10"
      >
        <div className="bg-blue-600 text-white px-2.5 py-2 rounded-lg shadow-lg flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="text-[8px] font-black uppercase">VPC</span>
        </div>
      </motion.div>

      {/* Status Indicator - Top Center */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="bg-white px-3 py-1.5 rounded-full shadow-md border border-gray-100 flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400' : 'bg-green-500'}`}
          />
          <span className="text-[9px] font-bold text-gray-600">{isLoading ? 'Syncing...' : 'Online'}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default function AIContractReview() {
  const [isLoading, setIsLoading] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    const interval = setInterval(() => {
      setScanProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 40);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative w-full pt-8 pb-40 md:pt-10 md:pb-96 bg-white overflow-hidden flex flex-col items-center">
      {/* Mobile Icons Row - Above Animated Component (Mobile Only) */}
      <div className="block md:hidden w-full mb-8 px-3">
        <div className="flex justify-between items-center w-full">
          {/* Adobe Ai */}
          <div className="w-9 h-9 rounded-xl bg-[#330000] flex items-center justify-center text-[#FF9A00] font-bold text-sm border border-gray-100 shadow-sm">Ai</div>
          {/* Adobe Id */}
          <div className="w-9 h-9 rounded-xl bg-[#49021F] flex items-center justify-center text-[#FF69B4] font-bold text-sm border border-gray-100 shadow-sm">Id</div>
          {/* Notion */}
          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-gray-200 shadow-sm p-1.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-black">
              <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28.047-.653 0-.466-.327-.793-1.12-.793H4.832c-.653 0-1.166.42-1.166 1.073v15.603c0 .653.466 1.12 1.12 1.12.466 0 .886-.233 1.12-.606l12.515-7.184V7.61c0-.466-.28-.793-.746-.793-.42 0-.793.233-1.073.606L5.392 14.84V5.327c0-.56-.187-.84-.933-1.12z" />
            </svg>
          </div>
          {/* Slack */}
          <div className="w-9 h-9 rounded-xl bg-[#3F0E40] flex items-center justify-center border border-gray-200 shadow-sm p-1.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.522-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.52h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
            </svg>
          </div>
          {/* Google */}
          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-gray-200 shadow-sm p-1.5">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          </div>
          {/* Figma */}
          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-gray-200 shadow-sm p-1.5">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E" />
              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262" />
              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1ABCFE" />
              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="#0ACF83" />
              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#A259FF" />
            </svg>
          </div>
          {/* Spotify */}
          <div className="w-9 h-9 rounded-xl bg-[#1DB954] flex items-center justify-center border border-gray-200 shadow-sm p-1.5">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.207.856zm1.223-2.723c-.226.37-.706.486-1.077.26-2.687-1.652-6.785-2.13-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.52-.973 3.632-1.102 8.147-.568 11.234 1.32.37.226.487.706.26 1.076zm.105-2.835c-3.223-1.914-8.54-2.09-11.618-1.156-.494.15-1.016-.13-1.166-.624-.148-.495.13-1.017.625-1.167 3.532-1.073 9.404-.866 13.115 1.337.445.264.59.838.327 1.282-.264.443-.838.59-1.283.328z" />
            </svg>
          </div>
          {/* GitHub */}
          <div className="w-9 h-9 rounded-xl bg-[#24292F] flex items-center justify-center border border-gray-200 shadow-sm p-1.5">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </div>
          {/* Discord */}
          <div className="w-9 h-9 rounded-xl bg-[#5865F2] flex items-center justify-center border border-gray-200 shadow-sm p-1.5">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </div>
          {/* Vercel */}
          <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center border border-gray-200 shadow-sm p-1.5">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M12 2L2 19.5h20L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile-Only Animated Dashboard */}
      <div className="block md:hidden w-full max-w-md mx-auto mb-10 px-2">
        <MobileAgentDashboard isLoading={isLoading} scanProgress={scanProgress} />
      </div>

      {/* Desktop Icons Row - Hidden on Mobile */}
      <div className="hidden md:block w-full overflow-x-auto pb-40 mb-10 px-8">
        <div className="flex justify-between items-center gap-4 w-full flex-nowrap">
          {/* Adobe Ai */}
          <div className="w-16 h-16 rounded-2xl bg-[#330000] flex items-center justify-center text-[#FF9A00] font-bold text-2xl border border-gray-100 shadow-sm shrink-0">Ai</div>

          {/* Adobe Id */}
          <div className="w-16 h-16 rounded-2xl bg-[#49021F] flex items-center justify-center text-[#FF69B4] font-bold text-2xl border border-gray-100 shadow-sm shrink-0">Id</div>

          {/* Notion */}
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-black">
              <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28.047-.653 0-.466-.327-.793-1.12-.793H4.832c-.653 0-1.166.42-1.166 1.073v15.603c0 .653.466 1.12 1.12 1.12.466 0 .886-.233 1.12-.606l12.515-7.184V7.61c0-.466-.28-.793-.746-.793-.42 0-.793.233-1.073.606L5.392 14.84V5.327c0-.56-.187-.84-.933-1.12z" />
            </svg>
          </div>

          {/* Slack */}
          <div className="w-16 h-16 rounded-2xl bg-[#3F0E40] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.522-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.52h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
            </svg>
          </div>

          {/* Google */}
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          </div>

          {/* Figma */}
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E" />
              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262" />
              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1ABCFE" />
              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="#0ACF83" />
              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#A259FF" />
            </svg>
          </div>

          {/* Spotify */}
          <div className="w-16 h-16 rounded-2xl bg-[#1DB954] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.207.856zm1.223-2.723c-.226.37-.706.486-1.077.26-2.687-1.652-6.785-2.13-9.965-1.166-.413.127-.848-.106-.973-.517-.125-.413.108-.848.52-.973 3.632-1.102 8.147-.568 11.234 1.32.37.226.487.706.26 1.076zm.105-2.835c-3.223-1.914-8.54-2.09-11.618-1.156-.494.15-1.016-.13-1.166-.624-.148-.495.13-1.017.625-1.167 3.532-1.073 9.404-.866 13.115 1.337.445.264.59.838.327 1.282-.264.443-.838.59-1.283.328z" />
            </svg>
          </div>

          {/* VS Code */}
          <div className="w-16 h-16 rounded-2xl bg-[#1E1E1E] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path d="M17.583 4.166L7.52 11.583l-3.77-2.937-1.75.683v5.35l1.75.683 3.77-2.937 10.063 7.417L22 18.417V5.583l-4.417-1.417zM5.5 13.5l-1.5-1v-.5l1.5-1 2 1.5-2 1zm12 4.917l-8-5.917 8-5.917v11.834z" fill="#007ACC" />
            </svg>
          </div>

          {/* GitHub */}
          <div className="w-16 h-16 rounded-2xl bg-[#24292F] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </div>

          {/* Discord */}
          <div className="w-16 h-16 rounded-2xl bg-[#5865F2] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </div>

          {/* Dropbox */}
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path d="M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75-6 3.75-6-3.75L18 2zM0 13.25L6 9.5l6 3.75L6 17 0 13.25zm18-3.75l6 3.75L18 17l-6-3.75 6-3.75zM6 18.25l6-3.75 6 3.75-6 3.75-6-3.75z" fill="#0061FF" />
            </svg>
          </div>

          {/* Trello */}
          <div className="w-16 h-16 rounded-2xl bg-[#0079BF] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H6V7h4v10zm8-6h-4V7h4v4z" />
            </svg>
          </div>

          {/* Linear */}
          <div className="w-16 h-16 rounded-2xl bg-[#5E6AD2] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M3.43 17.57L17.57 3.43c.78.78 1.32 1.77 1.56 2.88L5.85 19.6a6.48 6.48 0 01-2.42-2.03zm-.07 3.06L19.6 4.4c.05.2.1.4.13.6L4.05 20.7c-.21-.03-.41-.07-.6-.13l-.09.06zm-1.1-1.7L18.37 2.82a6.52 6.52 0 00-.6-.56L2.26 17.77c.15.21.32.41.5.6.18.18.38.35.57.5l-.07.06zm-.52-1.63L17.23 1.82a6.52 6.52 0 00-.77-.45L1.26 16.57c.1.26.22.52.36.77l.12-.04zm-.42-1.53L15.83 1.26a6.48 6.48 0 00-1.06-.26L1.03 14.73c.04.33.13.66.26 1 .02.04.03.04.03.04zm-.06-1.8L13.96 1.27C9.7 1.27 6.27 4.7 6.27 8.96c0 1.77.6 3.4 1.6 4.7L1.26 20.28v-6.31z" />
            </svg>
          </div>

          {/* Jira */}
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path d="M11.53 2c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.94 4.34 4.34 4.35V2.84a.84.84 0 00-.84-.84H11.53z" fill="#2684FF" />
              <path d="M6.77 6.82a4.35 4.35 0 004.35 4.35h1.78v1.7c0 2.4 1.94 4.34 4.34 4.35V7.66a.84.84 0 00-.84-.84H6.77z" fill="#2684FF" />
              <path d="M2 11.65c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.94 4.34 4.34 4.35V12.49a.84.84 0 00-.84-.84H2z" fill="#2684FF" />
            </svg>
          </div>

          {/* Vercel */}
          <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3">
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
              <path d="M12 2L2 19.5h20L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Enhanced Background Decorative Elements (Inspired by image) - Desktop Only */}
      <div className="absolute top-[15%] right-[10%] opacity-20 pointer-events-none hidden md:block">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`w-1 h-1 rounded-full bg-gray-400 ${i % 3 === 0 ? 'scale-150 opacity-100' : 'opacity-40'}`} />
          ))}
        </div>
      </div>
      <div className="absolute top-[40%] left-[8%] opacity-20 pointer-events-none rotate-45 hidden md:block">
        <div className="flex gap-2">
          <div className="w-4 h-0.5 bg-gray-300 rounded-full" />
          <div className="w-0.5 h-4 bg-gray-300 rounded-full -ml-2.5" />
        </div>
      </div>
      <div className="absolute bottom-[20%] right-[15%] opacity-15 pointer-events-none hidden md:block">
        <Sparkles className="w-12 h-12 text-blue-400" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-40 hidden md:block"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-300 rounded-full opacity-40 hidden md:block"></div>
      <div className="absolute top-[10%] left-[5%] w-1.5 h-1.5 bg-pink-300 rounded-full opacity-30 hidden md:block"></div>
      <div className="absolute bottom-[10%] right-[10%] w-2.5 h-2.5 bg-blue-300 rounded-full opacity-30 hidden md:block"></div>

      {/* 3. Main Container - Desktop Only */}
      <div className="max-w-6xl w-full px-0 md:px-4 relative mt-8 md:mt-0 hidden md:block">
        <div className="relative mx-auto w-full max-w-5xl bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:aspect-[16/10] aspect-[1/1.5] scale-[1] md:scale-100 origin-top md:origin-center bg-gray-50/20 md:bg-white">
          {/* Main Document Header */}
          <div className="h-14 md:h-16 border-b border-gray-100 px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between bg-white shrink-0 gap-2 md:gap-0">
            <div className="flex items-center gap-3 md:gap-6 flex-wrap">
              <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">M</div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-900 text-lg tracking-tight">AI Agent Deployment Portal</span>
                <Badge variant="outline" className="text-[10px] px-2 py-0.5 h-5 bg-blue-50 text-blue-600 border-blue-100 font-bold uppercase">Ready</Badge>
                <Badge variant="outline" className={`text-[10px] px-2 py-0.5 h-5 transition-all duration-700 font-bold uppercase ${isLoading ? 'bg-gray-100 text-gray-400 border-gray-100' : 'bg-green-50 text-green-600 border-green-100'}`}>
                  {isLoading ? 'Scanning Network...' : 'Secure Connection'}
                </Badge>
                <div className="h-4 w-[1px] bg-gray-200 mx-1" />
                <span className="text-xs font-semibold text-gray-400">VPC-US-EAST-1</span>
                <span className="text-xs font-semibold text-gray-700 bg-gray-50 px-2 py-0.5 rounded">v2.4.0</span>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-0 hidden md:flex">
              <Button variant="ghost" size="sm" className="h-9 text-xs font-bold text-gray-600 gap-2 px-4 hover:bg-gray-50">
                <Activity className="w-4 h-4 text-blue-500" /> System Health
              </Button>
              <Button size="sm" className="h-9 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold gap-2 px-6 shadow-md transition-all">
                <Zap className="w-4 h-4 fill-current" /> Deploy Agent
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
            {/* Sidebar Navigation (Left) - Reverted to light theme */}
            <div className="hidden md:flex w-full md:w-16 border-b md:border-b-0 md:border-r border-gray-100 flex-row md:flex-col items-center py-2 md:py-6 gap-4 md:gap-8 shrink-0 bg-white shadow-sm">
              <div className="p-2.5 text-blue-600 bg-blue-50 rounded-xl shadow-sm"><Plus className="w-6 h-6" /></div>
              <div className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"><Search className="w-6 h-6" /></div>
              <div className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"><Bot className="w-6 h-6" /></div>
              <div className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"><Users className="w-6 h-6" /></div>
              <div className="mt-auto mb-4 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"><Settings className="w-6 h-6" /></div>
            </div>

            {/* Document Content - AI Marketplace Relevant */}
            <div className="flex-1 overflow-y-auto p-4 md:p-14 bg-gray-50/20 relative">
              {/* Scanning Line Animation */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ top: 0 }}
                    animate={{ top: `${scanProgress}%` }}
                    className="absolute left-0 right-0 h-[2px] bg-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10 pointer-events-none flex items-center justify-end pr-8"
                  >
                    <div className="bg-blue-600 text-[10px] text-white px-3 py-1 rounded-full font-mono flex items-center gap-2 whitespace-nowrap -translate-y-1/2 shadow-xl border border-blue-400">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      ORCHESTRATING AGENT FLEET... {scanProgress}%
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={`max-w-3xl mx-auto space-y-6 md:space-y-10 transition-all duration-700 ${isLoading ? 'opacity-40 blur-[2px]' : 'opacity-100 blur-0'}`}>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-4 rounded-xl flex items-center gap-4 text-xs font-semibold text-blue-800 shadow-sm">
                  <div className="bg-blue-600 p-2 rounded-lg text-white shadow-md">
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
                  </div>
                  Your Agent instances are currently shielded by Enterprise Guardrails and isolated within your Private VPC.
                </div>

                <div className="space-y-8">
                  <div>
                    <h1 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter mb-2">Agent Marketplace Protocol</h1>
                    <p className="text-xs md:text-sm text-gray-500 font-medium italic">Standardized Interface for Autonomous Workforces</p>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h3 className="text-xs md:text-sm font-black text-gray-900 mb-4 md:mb-6 uppercase tracking-widest border-b border-gray-100 pb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-orange-500" /> 1. Operational Parameters
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Selected Model</label>
                          <div className="h-11 px-4 bg-white border border-gray-200 rounded-xl flex items-center text-xs font-bold text-gray-700 shadow-sm">Claude 3.5 Sonnet</div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Reasoning Depth</label>
                          <div className="h-11 px-4 bg-white border border-gray-200 rounded-xl flex items-center text-xs font-bold text-gray-400 italic shadow-sm">Advanced Chain-of-Thought</div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Token Limit</label>
                          <div className="h-11 px-4 bg-white border border-gray-200 rounded-xl flex items-center text-xs font-bold text-gray-400 italic shadow-sm">200k Context</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Connected Tools</label>
                          <div className="h-11 px-4 bg-white border border-gray-200 rounded-xl flex items-center text-xs font-bold text-gray-700 shadow-sm">GitHub, Slack, Jira</div>
                        </div>
                        <div className="space-y-2 pt-0 relative">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Safety Filters</label>
                          <div className="h-11 px-4 bg-white border border-gray-200 rounded-xl flex items-center text-xs font-bold text-gray-400 italic shadow-sm">SOC2 Compliance</div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, x: [0, 15, 0], y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute -bottom-2 -right-2 text-blue-600 z-20 pointer-events-none drop-shadow-xl"
                          >
                            <MousePointer2 className="w-6 h-6 fill-current" />
                          </motion.div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Latency Goal</label>
                          <div className="h-11 px-4 bg-white border border-gray-200 rounded-xl flex items-center text-xs font-bold text-gray-400 italic shadow-sm">&lt; 500ms Response</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xs md:text-sm font-black text-gray-900 mb-4 uppercase tracking-widest border-b border-gray-100 pb-2">3. Integration Ecosystem</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-xs font-bold text-gray-600">
                        <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                          <div className="w-2 h-2 rounded-full bg-blue-500" /> Native React Hooks & SDKs
                        </li>
                        <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                          <div className="w-2 h-2 rounded-full bg-purple-500" /> Multi-Agent Orchestration
                        </li>
                        <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                          <div className="w-2 h-2 rounded-full bg-orange-500" /> Full-Trace Audit Logs
                        </li>
                        <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                          <div className="w-2 h-2 rounded-full bg-green-500" /> Automated Evaluations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - System Stats */}
            <div className="hidden md:flex w-full md:w-64 border-t md:border-t-0 md:border-l border-gray-100 bg-white p-4 md:p-8 shrink-0 flex-row md:flex-col gap-6 md:gap-10 shadow-inner">
              <div>
                <h3 className="font-black text-gray-900 text-sm mb-6 uppercase tracking-widest">Active Agents</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm border-2 border-white shadow-sm">SC</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-900 leading-tight">Support Bot</span>
                      <span className="text-[10px] font-semibold text-green-500 uppercase">Active Now</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm border-2 border-white shadow-sm">DA</div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-900 leading-tight">Data Analyst</span>
                      <span className="text-[10px] font-semibold text-gray-400 uppercase">Idle</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-blue-600 border-dashed border-gray-200 hover:bg-blue-50 text-[10px] font-bold h-9 rounded-xl">
                    + Provision New Agent
                  </Button>
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-gray-100">
                <h3 className="font-black text-gray-900 text-sm uppercase tracking-widest">Deployment Status</h3>
                <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between border border-gray-100 shadow-inner">
                  <div className="space-y-1">
                    <div className="text-[10px] font-black text-gray-400 uppercase leading-none">Uptime</div>
                    <div className="text-sm font-black text-gray-900">99.99%</div>
                  </div>
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-4 bg-blue-600 rounded-2xl flex items-center justify-between shadow-lg shadow-blue-200">
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">VPC Shield</span>
                  <div className="w-10 h-5 bg-white/20 rounded-full relative">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inner Sidebar Icons Overlay */}
          <div className="hidden md:flex absolute right-[256px] top-[40%] bg-white shadow-2xl border border-gray-100 rounded-2xl flex-col p-2 gap-3 z-10 shrink-0">
            <div className="p-2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer rounded-xl hover:bg-blue-50"><Users size={20} /></div>
            <div className="p-2 text-blue-600 bg-blue-50 rounded-xl shadow-inner"><Eye size={20} /></div>
            <div className="p-2 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer rounded-xl hover:bg-blue-50"><Settings size={20} /></div>
          </div>
        </div>

        {/* --- FLOATING OVERLAYS --- */}

        {/* 1. Integration Stats Overlay (Further Out) */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: -80, scale: 0.8 }}
          whileInView={{ opacity: isLoading ? 0.4 : 1, x: -60, y: -40, scale: 0.9 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="hidden md:block absolute -top-24 -left-28 z-20"
        >
          <Card className="w-64 p-5 shadow-2xl border-none bg-white/95 backdrop-blur-xl relative overflow-hidden rounded-3xl">
            {isLoading && (
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                  <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">Calculating ROI...</span>
                </div>
              </div>
            )}
            <h4 className="text-sm font-black text-gray-900 mb-6 flex items-center gap-2 tracking-tighter">
              Performance Index <Info size={14} className="text-gray-400" />
            </h4>

            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-gray-500 tracking-widest">
                  <span>Latency Redux</span>
                  <span className="text-blue-600">90% <span className="text-gray-300 font-normal">Gain</span></span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: isLoading ? 0 : '90%' }} transition={{ duration: 1.2, delay: 0.5 }} className="h-full bg-blue-600 rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-gray-500 tracking-widest">
                  <span>Task Accuracy</span>
                  <span className="text-indigo-600">98% <span className="text-gray-300 font-normal">Base</span></span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: isLoading ? 0 : '98%' }} transition={{ duration: 1.2, delay: 0.7 }} className="h-full bg-indigo-600 rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-gray-500 tracking-widest">
                  <span>Resource Saving</span>
                  <span className="text-pink-600">75% <span className="text-gray-300 font-normal">Avg</span></span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: isLoading ? 0 : '75%' }} transition={{ duration: 1.2, delay: 0.9 }} className="h-full bg-pink-600 rounded-full" />
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6 text-[10px] font-black h-9 text-gray-500 border-gray-100 hover:bg-gray-50 rounded-xl uppercase tracking-widest transition-all">
              View Audit Logs
            </Button>
          </Card>
        </motion.div>

        {/* 2. Total Marketplace Risk Overlay (Moved to Right Side) */}
        <motion.div
          initial={{ opacity: 0, y: -60, x: 60, scale: 0.8 }}
          whileInView={{ opacity: isLoading ? 0.4 : 1, y: -30, x: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="hidden md:block absolute -top-10 -right-20 z-30"
        >
          <Card className="p-6 shadow-2xl border-none bg-white/95 backdrop-blur-xl flex flex-col items-center relative overflow-hidden rounded-[2rem]">
            {isLoading && (
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-red-600" />
              </div>
            )}
            <h4 className="text-sm font-black text-gray-900 mb-6 flex items-center gap-2 tracking-tighter uppercase">
              Hallucination Index <Info size={14} className="text-gray-400" />
            </h4>
            <div className="relative w-28 h-28 mb-6 drop-shadow-2xl">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                <motion.circle cx="18" cy="18" r="16" fill="none" stroke="#ef4444" strokeWidth="4" initial={{ strokeDasharray: "0 100" }} animate={{ strokeDasharray: isLoading ? "0 100" : "15 100" }} transition={{ duration: 1.5, delay: 0.5 }} />
                <motion.circle cx="18" cy="18" r="16" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDashoffset="-15" initial={{ strokeDasharray: "0 100" }} animate={{ strokeDasharray: isLoading ? "0 100" : "70 100" }} transition={{ duration: 1.2, delay: 0.8 }} />
                <motion.circle cx="18" cy="18" r="16" fill="none" stroke="#94a3b8" strokeWidth="4" strokeDashoffset="-85" initial={{ strokeDasharray: "0 100" }} animate={{ strokeDasharray: isLoading ? "0 100" : "15 100" }} transition={{ duration: 1, delay: 1 }} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-[10px] font-black text-gray-400 uppercase">Score</span>
                <span className="text-xl font-black text-gray-900 tracking-tighter">9.2</span>
              </div>
            </div>
            <div className="flex gap-4 text-[9px] font-black text-gray-500 uppercase tracking-widest">
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-red-500 rounded-full" /> Risk</div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-blue-500 rounded-full" /> Safety</div>
              <div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-slate-400 rounded-full" /> Pending</div>
            </div>
          </Card>
          <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-2 -left-6 w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-xl cursor-pointer border-4 border-white rotate-12">
            <Search className="w-5 h-5 text-black" strokeWidth={3} />
          </motion.div>
        </motion.div>

        {/* 2b. NEW - Participants Card (Below Pie Chart on Right) */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: 40, scale: 0.8 }}
          whileInView={{ opacity: isLoading ? 0.4 : 1, y: 0, x: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="hidden md:block absolute top-[55%] -right-16 z-30"
        >
          <Card className="w-56 p-5 shadow-2xl border-none bg-white/95 backdrop-blur-xl relative overflow-hidden rounded-2xl">
            {isLoading && (
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
              </div>
            )}
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-wider">Participants</h4>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600">×</Button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-bold">LG</div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold text-gray-900">Logicpoint AB</div>
                  <div className="text-[9px] text-gray-400">Partner</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 text-[10px] font-bold">MM</div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold text-gray-900">Maria Montego</div>
                  <div className="text-[9px] text-gray-400">Signatory</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold">DC</div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold text-gray-900">Dave Clevelake</div>
                  <div className="text-[9px] text-gray-400">Organizer</div>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4 h-8 text-[10px] font-bold text-blue-600 border-dashed border-gray-200 hover:bg-blue-50">
              + Add colleague
            </Button>
          </Card>
        </motion.div>

        {/* 3. Privacy Prompt (Small & Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.8 }}
          whileInView={{ opacity: 1, x: -40, scale: 0.85 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hidden md:block absolute bottom-[40%] -left-16 z-30"
        >
          <Card className="p-3 shadow-2xl border-none bg-white flex items-center gap-3 pr-5 rounded-2xl border-l-4 border-l-blue-600 scale-90">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><ShieldCheck size={18} /></div>
            <div className="flex flex-col">
              <span className="text-xs font-black text-gray-900 uppercase tracking-tight">VPC Encryption</span>
              <span className="text-[10px] font-bold text-gray-400">Tunneling via AES-256</span>
            </div>
            <Button variant="ghost" size="sm" className="h-7 text-[10px] font-black text-blue-600 hover:bg-blue-50 ml-2">Secure Link</Button>
          </Card>
        </motion.div>

        {/* 4. AI Guardrail Guidelines (Wider & Lower) */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: isLoading ? 0.4 : 1, y: 80, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          className="hidden md:block w-full max-w-xs md:max-w-2xl mx-auto md:absolute md:-bottom-32 md:left-1/2 md:-translate-x-1/2 z-30"
        >
          <Card className="p-8 shadow-2xl border-none bg-white/95 backdrop-blur-xl relative overflow-hidden rounded-[2rem]">
            {isLoading && (
              <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center gap-3">
                <div className="flex gap-2">
                  <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-2 bg-blue-600 rounded-full" />
                  <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-2 h-2 bg-blue-600 rounded-full" />
                  <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-2 h-2 bg-blue-600 rounded-full" />
                </div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Enforcing Policy Stack...</span>
              </div>
            )}
            <h4 className="text-base font-black text-gray-900 mb-2 flex items-center gap-3 tracking-tighter uppercase">
              <ShieldCheck className="w-5 h-5 text-green-500" /> Enterprise Guardrail Stack <Info size={14} className="text-gray-400" />
            </h4>
            <p className="text-xs text-gray-500 mb-8 font-bold leading-relaxed pr-12">
              Our automated review engine monitors every agent interaction against your custom enterprise safety policies and regulatory requirements.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "PII Redaction", "SOC2 Compliance", "Bias Detection",
                "Output Grounding", "Toxicity Filter", "Hallucination Check",
                "Role Access", "VPC Egress"
              ].map((tag, i) => (
                <Badge key={i} variant="secondary" className={`bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-100 px-4 py-2 text-[10px] font-black transition-all duration-300 rounded-xl cursor-default uppercase tracking-widest shadow-sm ${tag === 'VPC Egress' ? 'relative pr-4 bg-blue-600 text-white border-blue-500 shadow-blue-100' : ''}`}>
                  {tag}
                  {tag === 'VPC Egress' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, x: [0, 8, 0], y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="absolute -right-4 -bottom-4 text-pink-500 z-20 pointer-events-none drop-shadow-lg"
                    >
                      <MousePointer2 className="w-6 h-6 fill-current" />
                    </motion.div>
                  )}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

