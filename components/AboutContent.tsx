"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if(inView && ref.current) {
        const controls = animate(0, to, {
            duration: 2,
            ease: "easeOut",
            onUpdate(value) {
                if (ref.current) {
                    ref.current.textContent = prefix + Math.floor(value).toLocaleString() + suffix;
                }
            }
        });
        return () => controls.stop();
    }
  }, [inView, to, suffix, prefix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

export default function AboutContent() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className=" mx-auto px-4 md:px-8">
        
        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-video">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-white opacity-50"></div>
                {/* Abstract graphic placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-orange-200">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        <path d="M2 12h20"></path>
                    </svg>
                </div>
             </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-orange-600 tracking-widest uppercase mb-4">Our Mission</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Democratizing Intelligence for Everyone
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At <strong className="text-gray-900">AI LifeBot Agent Marketplace</strong>, we believe that the power of artificial intelligence should be accessible to all. Our mission is to bridge the gap between complex AI capabilities and everyday usability.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are building a comprehensive ecosystem where developers, businesses, and users can discover, deploy, and collaborate with autonomous AI agents to solve real-world problems.
            </p>
          </motion.div>
        </div>

        {/* Growth Section */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-sm mb-32 border border-gray-100"
        >
           <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                 <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Accelerate growth at the new speed of business
                 </h2>
                 <p className="text-base text-gray-600 mb-4 leading-relaxed">
                    We work with enterprises to reimagine business with our AI Agent Platform, AI Solutions for Work, Service and Process, and Agent Marketplace.
                 </p>
                 <p className="text-base text-gray-600 mb-8 leading-relaxed">
                    With AI LifeBot customers get a standardized approach to developing, deploying, and orchestrating AI agents across the enterprise with speed, control, and flexibility. We help you keep up with the rapid pace of the AI industry.
                 </p>
                 
                 <div className="relative pt-6 pl-6 border-l border-t border-dotted border-gray-400 rounded-tl-3xl">
                    <div className="flex flex-wrap gap-3">
                       <button className="bg-black text-white px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors flex items-center gap-2">
                          View Our Agent Platform <span className="text-orange-500 text-base leading-none">•</span>
                       </button>
                       <button className="bg-white text-black border border-black px-6 py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors">
                          Contact Us
                       </button>
                    </div>
                 </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2 min-h-[400px] bg-gray-100 relative">
                 <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Team meeting" 
                    className="absolute inset-0 w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
           </div>
        </motion.div>

        {/* Vision/Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
                { to: 10, suffix: "+", label: "Years of Experience" },
                { to: 500, suffix: "+", label: "Enterprise Partners" },
                { to: 1, suffix: "M+", label: "Agents Deployed" }
            ].map((stat, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-8 bg-orange-50/50 rounded-3xl border border-orange-100 hover:shadow-lg transition-shadow bg-white text-center"
                >
                    <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600 mb-2">
                        <Counter to={stat.to} suffix={stat.suffix} />
                    </span>
                    <span className="text-gray-600 font-medium text-lg">{stat.label}</span>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
