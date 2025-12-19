"use client";

import { Shield, Lock } from "lucide-react";

export default function SecuritySection() {
  return (
    <section className="w-full bg-white rounded-t-[3rem] py-24 -mt-8 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          {/* Left Side - Badges */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up">
             <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200 p-2 text-center text-[10px] md:text-xs font-bold text-gray-600 hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col items-center">
                    <Shield className="h-6 w-6 mb-1 text-blue-600" />
                    SOC 2
                </div>
             </div>
             <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[#1e3a8a] flex items-center justify-center shadow-sm border border-gray-200 p-2 text-center text-[10px] md:text-xs font-bold text-white hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col items-center">
                    <Lock className="h-6 w-6 mb-1" />
                    GDPR
                </div>
             </div>
             <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200 p-2 text-center text-[10px] md:text-xs font-bold text-gray-600 hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col items-center">
                    <Shield className="h-6 w-6 mb-1 text-green-600" />
                    ISO 27001
                </div>
             </div>
             <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200 p-2 text-center text-[10px] md:text-xs font-bold text-gray-600 hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col items-center">
                    <Lock className="h-6 w-6 mb-1 text-orange-600" />
                    CCPA
                </div>
             </div>
             <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-[#4c1d95] flex items-center justify-center shadow-sm border border-gray-200 p-2 text-center text-[10px] md:text-xs font-bold text-white hover:scale-110 transition-transform duration-300">
                <div className="flex flex-col items-center">
                    <Shield className="h-6 w-6 mb-1" />
                    HIPAA
                </div>
             </div>
          </div>

          {/* Right Side - Text */}
          <div className="max-w-xl text-left animate-fade-in-up delay-200">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 text-gray-900 tracking-tight leading-tight">
              Industry-grade<br />
              security and compliance
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lyzr Agent Studio is the only platform you need to create, business. Build smarter, faster, and scalable AI solutions in just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
