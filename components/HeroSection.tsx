"use client";

import Link from "next/link";
import { Sparkles, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section 
      className="relative w-full pt-40 pb-32 overflow-hidden flex flex-col items-center text-center px-4"
      style={{
        backgroundImage: "url('/Herosection.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat"
      }}
    >
      
      {/* Badge */}
      <div className="animate-fade-in-up mb-10">
        <div className="inline-flex items-center gap-3 rounded-full bg-white border border-gray-100 px-8 py-3 text-lg font-medium text-gray-800 shadow-sm animate-float">
          <Sparkles className="h-5 w-5 text-orange-500 animate-pulse" />
          Bridging gap between Agents and Daily Life
        </div>
      </div>

      {/* H1 */}
      <div className="relative z-10 animate-fade-in-up delay-100">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-pink-200/50 blur-3xl -z-10 rounded-full pointer-events-none animate-pulse-glow"></div>
         <h1 
           className="max-w-5xl text-5xl md:text-7xl font-normal tracking-tight mb-6 leading-tight font-[family-name:var(--font-inter)] text-black"
           style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.6), 0 0 20px rgba(234, 179, 8, 0.4)' }}
         >
        Bring 
        <span className="inline-flex items-center justify-center mx-3 align-middle hover:rotate-12 transition-transform duration-300">
           <div className="h-12 w-12 md:h-16 md:w-16 bg-orange-500 rounded-xl rotate-12 flex items-center justify-center shadow-lg shadow-orange-200 hover:rotate-0 transition-transform duration-300">
              <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-white" />
           </div>
        </span>
        your AI Agents
        <br />
        to market Stronger
      </h1>
      </div>
      
      {/* Subtext */}
      <p className="max-w-2xl text-lg text-gray-600 mb-10 animate-fade-in-up delay-200">
        World's 1st Agent builder platform with built-in Responsible
        <br />
        AI and Hallucination Manager.
      </p>
      
      {/* CTA */}
      <div className="mb-20 animate-fade-in-up delay-300">
        <Link 
          href="/marketplace" 
          className="rounded-full bg-white border border-gray-200 px-8 py-3 text-base font-medium text-black hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2 mx-auto hover:scale-105 active:scale-95 duration-300"
        >
          Explore Marketplace <ChevronDown className="h-4 w-4 -rotate-90" />
        </Link>
      </div>

      {/* Image Placeholder */}
      <div className="w-full max-w-[95%] mx-auto px-4 animate-fade-in-up delay-500">
         <div className="w-full h-[600px] bg-white rounded-[2.5rem] border-[12px] border-gray-100 shadow-2xl shadow-gray-200/50 flex flex-col overflow-hidden hover:shadow-orange-100/50 transition-shadow duration-500">
            {/* Top Bar Line */}
            <div className="w-full h-16 border-b-[3px] border-gray-100 shrink-0"></div>
            
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="text-center text-gray-300 text-2xl font-medium max-w-lg">
                   Internal Image of the Marketplace with central search option into searching agents
                </div>
            </div>
         </div>
      </div>

    </section>
  );
}
