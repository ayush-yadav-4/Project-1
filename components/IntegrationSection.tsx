import React from 'react';
import { motion } from "framer-motion";

const IntegrationSection = () => {
  return (
    <section className="w-full py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="animate-fade-in-up"
        >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-orange-200 mb-4 tracking-tight">Enterprise - ready integrations</h2>
            <p className="text-2xl font-medium text-black mb-20">Seamless connectivity with Lyzr</p>
        </motion.div>

        <div className="flex flex-col gap-5 items-center max-w-6xl mx-auto">
           {/* Row 1 */}
           <div className="flex flex-wrap justify-center gap-5 animate-fade-in-up delay-200">
                <LogoPill>
                    <div className="h-8 flex items-center justify-center">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-full object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" style={{ maxHeight: '100%' }} />
                         <span className="sr-only">AWS</span>
                         {/* Fallback if image fails or for cleaner look, reusing SVG */}
                         <div className="hidden">
                            <svg viewBox="0 0 24 24" className="w-12 h-8 text-black fill-current">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                         </div>
                    </div>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-gray-900 text-lg tracking-wider">HITACHI</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-gray-900 text-xl flex items-center gap-1">
                        accenture 
                        <span className="text-purple-600 text-2xl leading-none font-light mb-1">&gt;</span>
                    </span>
                </LogoPill>

                <LogoPill>
                    <div className="flex items-center gap-1">
                        <div className="w-6 h-6 border-2 border-orange-500 rounded-full border-t-transparent -rotate-45"></div>
                        <span className="font-bold text-gray-900 italic text-lg">firstsource</span>
                    </div>
                </LogoPill>

                <LogoPill>
                   <div className="flex items-center bg-gray-100 rounded-full pr-2">
                        <div className="bg-red-600 text-white rounded-full p-1 mr-1">
                            <span className="font-bold italic text-xs">AirAsia</span>
                        </div>
                        <span className="bg-green-600 text-white font-bold text-sm px-2 py-0.5 rounded-md">MOVE</span>
                   </div>
                </LogoPill>

                <LogoPill>
                    <span className="font-black text-black text-xl tracking-tighter">MSP<span className="font-normal text-sm ml-0.5">CORP</span></span>
                </LogoPill>

                <LogoPill>
                    <span className="bg-purple-700 text-white font-bold px-1 text-sm mr-1">HFS</span>
                    <span className="text-purple-800 font-bold text-sm tracking-widest border border-purple-800 px-1">RESEARCH</span>
                </LogoPill>

                <LogoPill>
                   <span className="text-[#892367] font-bold text-xl">meesho</span>
                </LogoPill>
           </div>

           {/* Row 2 */}
           <div className="flex flex-wrap justify-center gap-5 animate-fade-in-up delay-300">
                <LogoPill>
                    <span className="font-bold text-gray-800 text-lg tracking-wide uppercase">NTT Data</span>
                </LogoPill>

                <LogoPill>
                    <div className="flex items-center gap-2">
                        <span className="text-orange-500 font-light text-2xl">P</span>
                        <span className="font-bold text-gray-900 text-lg">Persistent</span>
                    </div>
                </LogoPill>

                 <LogoPill>
                    <div className="flex items-center gap-1">
                        <span className="text-pink-500 font-bold text-xl">M</span>
                        <span className="font-bold text-gray-800 text-lg">movate</span>
                    </div>
                </LogoPill>

                <LogoPill>
                    <div className="flex items-center gap-2">
                         <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-orange-400"></div>
                        <span className="text-blue-600 font-bold text-lg uppercase tracking-wide">SAKSOFT</span>
                    </div>
                </LogoPill>

                 <LogoPill>
                    <div className="flex items-center gap-1">
                         <div className="w-4 h-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
                             <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                         </div>
                        <span className="font-bold text-gray-900 text-lg">goML</span>
                    </div>
                </LogoPill>

                <LogoPill>
                    <div className="flex items-center gap-1">
                        <span className="text-blue-600 font-bold text-xl">√</span>
                        <span className="font-bold text-gray-900 text-lg">rootquotient</span>
                    </div>
                </LogoPill>
           </div>
        </div>
      </div>
    </section>
  );
};

const LogoPill = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-full px-8 py-4 shadow-sm border border-transparent flex items-center justify-center min-w-[140px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default ${className}`}>
    {children}
  </div>
);

export default IntegrationSection;
