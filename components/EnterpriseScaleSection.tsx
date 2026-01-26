"use client";

import React from "react";
import { motion } from "framer-motion";

// Logo components with inline SVGs for reliability
const LogoColgate = () => (
  <div className="flex items-center gap-2">
    <span className="text-2xl font-bold text-red-600">Colgate</span>
  </div>
);

const LogoAxisBank = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-[#97144D] rounded-full flex items-center justify-center">
      <span className="text-white font-bold text-xs">AB</span>
    </div>
    <span className="text-xl font-bold text-[#97144D]">Axis Bank</span>
  </div>
);

const LogoAutodesk = () => (
  <div className="flex items-center gap-1">
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0696D7">
      <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.5l8 4.5v9l-8 4.5-8-4.5v-9l8-4.5z"/>
    </svg>
    <span className="text-xl font-bold text-[#0696D7]">Autodesk</span>
  </div>
);

const LogoAMD = () => (
  <div className="flex items-center">
    <span className="text-3xl font-black text-[#ED1C24] tracking-tight">AMD</span>
  </div>
);

const LogoAssurant = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center">
      <span className="text-white font-bold text-sm">A</span>
    </div>
    <span className="text-xl font-bold text-gray-800">Assurant</span>
  </div>
);

const LogoCocaCola = () => (
  <div className="flex items-center">
    <span className="text-2xl font-bold italic text-[#F40009]" style={{ fontFamily: 'Georgia, serif' }}>Coca-Cola</span>
  </div>
);

const LogoAirbus = () => (
  <div className="flex items-center gap-2">
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#00205B">
      <circle cx="12" cy="12" r="10" stroke="#00205B" strokeWidth="2" fill="none"/>
      <path d="M12 6l6 6-6 6-6-6z" fill="#00205B"/>
    </svg>
    <span className="text-xl font-bold text-[#00205B]">AIRBUS</span>
  </div>
);

const LogoMorganStanley = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-[#002855] flex items-center justify-center">
      <span className="text-white font-bold text-xs">MS</span>
    </div>
    <span className="text-lg font-semibold text-[#002855]">Morgan Stanley</span>
  </div>
);

const LogoPfizer = () => (
  <div className="flex items-center gap-2">
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <circle cx="12" cy="12" r="10" fill="#0093D0"/>
      <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2"/>
    </svg>
    <span className="text-xl font-bold text-[#0093D0]">Pfizer</span>
  </div>
);

const LogoSiemens = () => (
  <div className="flex items-center">
    <span className="text-2xl font-bold text-[#009999]">SIEMENS</span>
  </div>
);

const LogoDeloitte = () => (
  <div className="flex items-center">
    <span className="text-2xl font-bold text-[#86BC25]">Deloitte</span>
    <span className="text-[#86BC25] text-2xl">.</span>
  </div>
);

const logosRow1 = [
  { name: "Colgate", Component: LogoColgate },
  { name: "Axis Bank", Component: LogoAxisBank },
  { name: "Autodesk", Component: LogoAutodesk },
  { name: "AMD", Component: LogoAMD },
  { name: "Assurant", Component: LogoAssurant },
  // Duplicates for seamless loop
  { name: "Colgate", Component: LogoColgate },
  { name: "Axis Bank", Component: LogoAxisBank },
  { name: "Autodesk", Component: LogoAutodesk },
  { name: "AMD", Component: LogoAMD },
  { name: "Assurant", Component: LogoAssurant },
];

const logosRow2 = [
  { name: "CocaCola", Component: LogoCocaCola },
  { name: "Airbus", Component: LogoAirbus },
  { name: "Morgan Stanley", Component: LogoMorganStanley },
  { name: "Pfizer", Component: LogoPfizer },
  { name: "Siemens", Component: LogoSiemens },
  // Duplicates for seamless loop
  { name: "CocaCola", Component: LogoCocaCola },
  { name: "Airbus", Component: LogoAirbus },
  { name: "Morgan Stanley", Component: LogoMorganStanley },
  { name: "Pfizer", Component: LogoPfizer },
  { name: "Deloitte", Component: LogoDeloitte },
];

export default function EnterpriseScaleSection() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center">
      {/* Pink/Peach Gradient Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-200/40 to-orange-100/40 rounded-full blur-[120px] pointer-events-none z-0"></div>

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
                className="w-[250px] h-[120px] bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-6 hover:shadow-md transition-shadow grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
              >
                <logo.Component />
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
                className="w-[250px] h-[120px] bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-6 hover:shadow-md transition-shadow grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
              >
                <logo.Component />
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
