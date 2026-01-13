"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full px-4 md:px-8 lg:px-16 pt-2 pb-20 md:pt-20 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[50vh] bg-white">
      
      {/* Background decoration */}
      <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-pink-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <span className="py-2 px-6 rounded-full bg-pink-50 text-pink-500 text-sm font-semibold tracking-wide">
            About AgentHub
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-[1.1] text-gray-900"
        >
          Building the Future of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 tracking-wide">
            Intelligent Automation
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal mb-16"
        >
          We're on a mission to democratize AI, making intelligent agents accessible to businesses of all sizes. Our marketplace connects innovation with implementation.
        </motion.p>
        
        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white"
        >
           {/* Quote Icon Background Effect (Optional) */}
           <div className="absolute -top-6 -left-6 text-6xl text-pink-100 font-serif opacity-50">"</div>

          <p className="text-xl md:text-2xl font-medium text-gray-800 italic mb-6 leading-relaxed">
            "We believe every business deserves access to world-class AI capabilities, regardless of their technical expertise or budget."
          </p>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold text-sm">
              JM
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">James Mitchell</div>
              <div className="text-sm text-gray-500">Founder & CEO</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
