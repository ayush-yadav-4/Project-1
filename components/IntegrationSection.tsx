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
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-orange-200 mb-4 tracking-tight">Trusted by Industry Leaders</h2>
            <p className="text-2xl font-medium text-black mb-20">Powering AI automation at Fortune 500 companies</p>
        </motion.div>

        <div className="flex flex-col gap-5 items-center max-w-6xl mx-auto">
           {/* Row 1 */}
           <div className="flex flex-wrap justify-center gap-5 animate-fade-in-up delay-200">
                <LogoPill>
                    <span className="font-bold text-[#00A1E0] text-xl tracking-wide">salesforce</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#FF7A59] text-xl">HubSpot</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#03363D] text-xl">Zendesk</span>
                </LogoPill>

                <LogoPill>
                    <div className="flex items-center gap-1">
                        <div className="w-5 h-5 bg-[#1264A3] rounded flex items-center justify-center text-white text-xs font-bold">#</div>
                        <span className="font-bold text-gray-900 text-lg">Slack</span>
                    </div>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#0078D4] text-xl">Microsoft</span>
                </LogoPill>

                <LogoPill>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        <span className="font-bold text-gray-900 text-lg">Google</span>
                    </div>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#FF9900] text-xl">aws</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#E01E5A] text-xl">Intercom</span>
                </LogoPill>
           </div>

           {/* Row 2 */}
           <div className="flex flex-wrap justify-center gap-5 animate-fade-in-up delay-300">
                <LogoPill>
                    <span className="font-bold text-[#7B68EE] text-xl">Notion</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#29B5E8] text-xl">Snowflake</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#635BFF] text-xl">Stripe</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#0052CC] text-xl">Jira</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#2EB67D] text-xl">Shopify</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#FF6C37] text-xl">Zapier</span>
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
