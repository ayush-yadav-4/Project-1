"use client";

import { ArrowUpRight } from "lucide-react";

export default function Cards() {
  return (
    <section className="w-full py-32 px-4 lg:px-6 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        // style={{
        //   backgroundImage: "url('/cards-2.png')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat"
        // }}
      />

      <div className="text-center mb-24 relative z-10 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4 tracking-tight">Trusted by experts.</h2>
        <p className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Used by leaders.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[95%] mx-auto"
      
      >
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className="relative group h-[450px] rounded-[2rem] p-[3px] bg-gradient-to-br from-[#FFB070] via-[#FF9040] to-[#FF7020] shadow-[0_0_25px_rgba(255,112,32,0.15)] hover:shadow-[0_0_50px_rgba(255,112,32,0.3)] transition-all duration-300 hover:-translate-y-2">
            <div className="bg-white rounded-[calc(2rem-3px)] h-full flex flex-col overflow-hidden relative z-10">
              <div className="flex items-center justify-between p-8">
                  <span className="text-2xl font-medium text-gray-900 tracking-tight">Enterprise Posture & Control</span>
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300">
                      <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
              </div>
              <div className="flex-1 bg-gray-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-gray-300 text-3xl font-medium relative z-10">AI Agent Video</span>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
