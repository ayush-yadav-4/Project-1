"use client";

import React from 'react';
import { motion } from "framer-motion";

const IntegrationSection = () => {
    const row1Logos = [
        { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", color: "#00A1E0" },
        { name: "LeadSquared", logo: "/logos/leadsquared.svg", color: "#FF6B35", fallbackText: "L²" },
        { name: "Zoho", logo: "https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zoho-logo-web.svg", color: "#E42527" },
        { name: "Kapture", logo: "/logos/kapture.svg", color: "#6366F1", fallbackText: "K" },
        { name: "Dynamics", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", color: "#0078D4", subtext: "Microsoft" },
        { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", color: "#0FAAFF" },
        { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", color: "#F80000" },
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", color: "#FF9900" },
        { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", color: "#611F69" },
    ];

    const row2Logos = [
        { name: "Notion", color: "#000000", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
        { name: "Snowflake", color: "#29B5E8", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg" },
        { name: "Stripe", color: "#635BFF", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
        { name: "Jira", color: "#0052CC", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg" },
        { name: "Shopify", color: "#96BF48", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
        { name: "Zapier", color: "#FF4F00", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg" },
    ];

    return (
        <section className="w-full py-20 md:py-32 lg:py-36 relative overflow-hidden">
            {/* Creative Background with Pink, Light Pink, Beige, White */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF5F0] to-[#FFEEE8]" />
            
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Large gradient orbs */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FFD6C9]/40 via-[#FFDDD2]/30 to-transparent blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#FF6FA5]/20 via-[#FFB8D0]/25 to-transparent blur-3xl" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#FFF0E6]/50 to-[#FFE4D6]/30 blur-2xl" />
                
                {/* Floating geometric shapes */}
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-[15%] w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD6C9]/30 to-[#FFBDA8]/20 backdrop-blur-sm border border-white/50"
                />
                <motion.div 
                    animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-32 right-[20%] w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6FA5]/20 to-[#FFB8D0]/15 backdrop-blur-sm border border-white/40"
                />
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 left-[8%] w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFEEE8]/60 to-[#FFE0D3]/40 backdrop-blur-sm"
                />
                
                {/* Additional floating circle - New */}
                <motion.div 
                    animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-[40%] right-[12%] w-14 h-14 rounded-full bg-gradient-to-br from-[#FFB8D0]/25 to-[#FF9EC4]/15 backdrop-blur-sm border border-[#FFD6C9]/30"
                />
                
                {/* Additional floating square - New */}
                <motion.div 
                    animate={{ y: [0, 18, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-[25%] left-[18%] w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFEEE8]/50 to-[#FFD6C9]/30 backdrop-blur-sm border border-white/40"
                />
                
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #FF6FA5 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
                
                {/* Diagonal lines accent */}
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.02]" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, #FFD6C9 50px, #FFD6C9 51px)'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                {/* Header with matching GlobalEnterprisesSection gradient */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-20"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 tracking-tight">
                        <span className="bg-gradient-to-r from-[#FF6FA5] via-[#FFB8A0] to-[#E8B89D] bg-clip-text text-transparent">
                            Trusted by Industry Leaders
                        </span>
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl font-medium text-gray-600">
                        Powering AI automation at Fortune 500 companies
                    </p>
                </motion.div>

                {/* Logo Grid */}
                <div className="flex flex-col gap-6 md:gap-8 items-center max-w-6xl mx-auto">
                    {/* Row 1 - Main integrations with logos */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-3 md:gap-5 lg:gap-6"
                    >
                        {row1Logos.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -4 }}
                                className="group relative"
                            >
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl px-3 py-2.5 md:px-6 md:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-white/80 hover:shadow-[0_8px_30px_rgba(255,111,165,0.15)] hover:border-[#FFD6C9]/50 transition-all duration-300 flex items-center gap-2 md:gap-4 min-w-[120px] md:min-w-[150px]">
                                    {item.fallbackText ? (
                                        <div 
                                            className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center font-black text-sm md:text-xl text-white"
                                            style={{ backgroundColor: item.color }}
                                        >
                                            {item.fallbackText}
                                        </div>
                                    ) : (
                                        <img 
                                            src={item.logo} 
                                            alt={item.name} 
                                            className="w-8 h-8 md:w-12 md:h-12 object-contain"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                    )}
                                    <div className={`hidden w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl items-center justify-center font-black text-sm md:text-xl text-white`} style={{ backgroundColor: item.color }}>
                                        {item.name[0]}
                                    </div>
                                    <div className="flex flex-col items-start">
                                        {item.subtext && (
                                            <span className="text-[8px] md:text-[10px] font-semibold text-gray-400 -mb-0.5">{item.subtext}</span>
                                        )}
                                        <span className="font-bold text-sm md:text-base text-gray-800">{item.name}</span>
                                    </div>
                                </div>
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFD6C9]/0 to-[#FF6FA5]/0 group-hover:from-[#FFD6C9]/10 group-hover:to-[#FF6FA5]/5 transition-all duration-300 -z-10 blur-xl" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Row 2 - Text-based logos */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-3 md:gap-5 lg:gap-6"
                    >
                        {row2Logos.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -4 }}
                                className="group"
                            >
                                <div className="bg-white/60 backdrop-blur-sm rounded-full px-5 py-2.5 md:px-8 md:py-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-white/70 hover:shadow-[0_6px_25px_rgba(255,111,165,0.12)] hover:border-[#FFD6C9]/40 hover:bg-white/80 transition-all duration-300">
                                    <span 
                                        className="font-bold text-sm md:text-xl tracking-tight"
                                        style={{ color: item.color }}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IntegrationSection;
