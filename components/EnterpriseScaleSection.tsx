"use client";

import React from "react";
import { motion } from "framer-motion";

const logosRow1 = [
  { name: "Colgate", url: "https://logo.clearbit.com/colgate.com" },
  { name: "Axis Bank", url: "https://logo.clearbit.com/axisbank.com" },
  { name: "Autodesk", url: "https://logo.clearbit.com/autodesk.com" },
  { name: "AMD", url: "https://logo.clearbit.com/amd.com" },
  { name: "Assurant", url: "https://logo.clearbit.com/assurant.com" },
  // Duplicates for seamless loop
  { name: "Colgate", url: "https://logo.clearbit.com/colgate.com" },
  { name: "Axis Bank", url: "https://logo.clearbit.com/axisbank.com" },
  { name: "Autodesk", url: "https://logo.clearbit.com/autodesk.com" },
  { name: "AMD", url: "https://logo.clearbit.com/amd.com" },
  { name: "Assurant", url: "https://logo.clearbit.com/assurant.com" },
];

const logosRow2 = [
  { name: "CocaCola", url: "https://logo.clearbit.com/coca-cola.com" },
  { name: "Airbus", url: "https://logo.clearbit.com/airbus.com" },
  { name: "Morgan Stanley", url: "https://logo.clearbit.com/morganstanley.com" },
  { name: "Pfizer", url: "https://logo.clearbit.com/pfizer.com" },
  { name: "CocaCola", url: "https://logo.clearbit.com/coca-cola.com" },
  // Duplicates for seamless loop
  { name: "CocaCola", url: "https://logo.clearbit.com/coca-cola.com" },
  { name: "Airbus", url: "https://logo.clearbit.com/airbus.com" },
  { name: "Morgan Stanley", url: "https://logo.clearbit.com/morganstanley.com" },
  { name: "Pfizer", url: "https://logo.clearbit.com/pfizer.com" },
  { name: "CocaCola", url: "https://logo.clearbit.com/coca-cola.com" },
];

export default function EnterpriseScaleSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center">
      {/* Orange Gradient Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Proven at enterprise scale
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We've built our business hand-in-hand with enterprises, typically where the challenges are the hardest. Today hundreds of enterprises trust AI LifeBot to reimagine their business with AI.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto space-y-6">
        {/* Row 1 - Right to Left */}
        <div className="w-full overflow-hidden mask-gradient-sides">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {logosRow1.map((logo, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-[250px] h-[120px] bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-8 hover:shadow-md transition-shadow"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                  onError={(e) => {
                    // Fallback if image fails
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerText = logo.name;
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="w-full overflow-hidden mask-gradient-sides">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["-50%", 0] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          >
            {logosRow2.map((logo, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-[250px] h-[120px] bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-8 hover:shadow-md transition-shadow"
              >
                <img 
                   src={logo.url} 
                   alt={logo.name} 
                   className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                   onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerText = logo.name;
                   }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-16">
        <button className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2 rounded-full shadow-lg">
          More Customer Stories <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
        </button>
      </div>

      <style jsx>{`
        .mask-gradient-sides {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
