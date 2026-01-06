"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full px-4 md:px-8 lg:px-16 py-20 md:py-32 overflow-hidden flex flex-col items-center justify-center min-h-[50vh] bg-white">
      {/* Background Elements - Clean White with subtle grid */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <span className="py-2 px-4 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold tracking-wider">
            WHO WE ARE
          </span>
        </motion.div>

        <div className="mb-8 flex flex-col items-center">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 pb-2">
              We Are AI LifeBot
            </h1>
          </div>
          
          <div className="relative mt-2">
             {/* Gradient Border Effect on Text */}
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-gradient-x pb-2"
                 style={{ 
                   WebkitTextStroke: '1px rgba(255, 165, 0, 0.2)',
                   filter: 'drop-shadow(0 0 20px rgba(255, 165, 0, 0.3))'
                 }}>
              Agent Marketplace
            </h1>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          We are dedicated to revolutionizing how businesses and individuals interact with artificial intelligence, providing a unified platform for autonomous agents.
        </motion.p>
      </div>
    </section>
  );
}
