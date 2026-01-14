"use client";

import Link from "next/link";
import { Sparkles, ChevronDown } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";

export default function HeroSection2() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <section 
      className="relative w-full overflow-hidden flex flex-col items-center text-center pt-32 mb-20 lg:pt-40 lg:pb-24"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          style={{ height: "100%", width: "100%" }}
          distortion={0.8}
          swirl={0.1}
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={1}
          colors={["#ee95c3", "#FFB6C1", "#FFFFFF","#FFFFFF", "#FFF0F5"]}
        />
        
        {/* White Overlay for Tab Effect */}
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 lg:h-32 z-10 pointer-events-none">
           <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path fill="#ffffff" d="M0,0 L100,0 C250,0 250,320 400,320 L0,320 Z" />
              <path fill="#ffffff" d="M1440,0 L1340,0 C1190,0 1190,320 1040,320 L1440,320 Z" />
           </svg>
        </div>
      </div>

      <motion.div 
        className="flex flex-col items-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div className="relative z-10 mb-10" variants={itemVariants}>
          <div className="inline-flex items-center gap-3 rounded-full bg-white border border-gray-100 px-8 py-3 text-lg font-medium text-gray-800 shadow-sm animate-float">
            <Sparkles className="h-5 w-5 text-orange-500 animate-pulse" />
            Bridging gap between Agents and Daily Life
          </div>
        </motion.div>

        {/* H1 */}
        <motion.div className="relative z-10" variants={itemVariants}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-pink-200/50 blur-3xl -z-10 rounded-full pointer-events-none animate-pulse-glow"></div>
          <h1 
            className="max-w-5xl text-6xl lg:text-8xl font-medium tracking-tight mb-12 leading-tight font-[family-name:var(--font-inter)] text-black"
            style={{ 
              textShadow: '0 0 30px rgba(253, 224, 71, 0.6), 0 0 60px rgba(234, 179, 8, 0.4), 0 0 90px rgba(234, 88, 12, 0.2)'
            }}
          >
          Bring 
          <span className="inline-flex items-center justify-center mx-3 align-middle hover:rotate-12 transition-transform duration-300">
            <div className="h-12 w-12 lg:h-16 lg:w-16 bg-orange-500 rounded-xl rotate-12 flex items-center justify-center shadow-lg shadow-orange-200 hover:rotate-0 transition-transform duration-300">
                <Sparkles className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
            </div>
          </span>
          your AI Agents
          <br />
          to market Stronger
        </h1>
        </motion.div>
        
        {/* Subtext */}
        <motion.p className="relative z-10 max-w-2xl text-lg text-gray-600 mb-10" variants={itemVariants}>
          World's 1st Agent builder platform with built-in Responsible
          <br />
          AI and Hallucination Manager.
        </motion.p>
        
        {/* CTA */}
        <motion.div className="relative z-10 mb-10" variants={itemVariants}>
          <Link 
            href="/marketplace" 
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white border-2 border-white px-12 py-3 text-lg font-semibold text-black shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(255,255,255,1)] hover:-translate-y-1 active:scale-95"
          >
            Explore Marketplace 
            <ChevronDown className="h-5 w-5 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}
