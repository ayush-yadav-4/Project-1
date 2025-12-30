"use client";

import { ArrowUpRight } from "lucide-react";

export default function Cards2() {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      {/* Top Gradient Blur */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white via-white to-transparent z-30 pointer-events-none"></div>
      
      {/* Bottom Gradient Blur */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white to-transparent z-30 pointer-events-none"></div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:[&>*:nth-child(3n+1)]:border-l-0 md:[&>*:nth-child(3n+1)]:rounded-l-none md:[&>*:nth-child(3n)]:border-r-0 md:[&>*:nth-child(3n)]:rounded-r-none">
          {[...Array(9)].map((_, i) => {
            const isTopRow = i < 3;
            const isBottomRow = i >= 6;
            
            return (
            <div key={i} className={`${isTopRow || isBottomRow ? 'aspect-[3/4]' : 'aspect-square'} bg-white rounded-3xl border border-gray-300 shadow-[0_0_20px_rgba(0,0,0,0.15)] p-6 relative group hover:shadow-xl transition-shadow z-20`}>
                <div className={`absolute ${isTopRow ? 'top-32' : 'top-6'} left-6 transition-all duration-300`}>
                    <div className="px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm text-base font-medium text-gray-700 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300">
                        AI Agent Name
                    </div>
                </div>
                <div className={`absolute ${isBottomRow ? 'bottom-32' : 'bottom-6'} right-6 transition-all duration-300`}>
                    <div className="w-16 h-16 bg-white rounded-2xl border border-gray-200 flex items-center justify-center text-gray-700 shadow-sm cursor-pointer group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300">
                        <ArrowUpRight className="w-8 h-8" />
                    </div>
                </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
