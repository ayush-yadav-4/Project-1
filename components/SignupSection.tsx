"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SignupSection() {
  return (
    <section 
      className="relative w-full py-32 flex flex-col items-center text-center px-4 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-white z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-100/50 blur-3xl animate-blob" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-100/50 blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-pink-100/30 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* White Curve Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg 
          viewBox="0 0 1440 100" 
          className="w-full h-[40px] lg:h-[80px] block" 
          preserveAspectRatio="none"
        >
          <path fill="#ffffff" d="M0,0 L1440,0 L1440,0 Q720,100 0,0 Z" />
        </svg>
      </div>

      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          <span className="text-orange-500">Coding made</span>
          <br />
          <span className="text-black">effortless</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl text-lg text-gray-600 mb-10 mx-auto"
        >
          Hear how developers ship products faster, collaborate seamlessly, and build with
          <br />
          confidence using Pointer's powerful AI tools
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group inline-block"
        >
          <div className="absolute -inset-0.5 bg-orange-400 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-200 animate-blob"></div>
          <Link 
            href="#" 
            className="relative rounded-full bg-white px-8 py-4 text-lg font-medium text-orange-500 hover:text-orange-600 transition-all shadow-lg hover:shadow-orange-200 hover:scale-105 active:scale-95 duration-300 border border-orange-100 block"
          >
            Signup for free
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
