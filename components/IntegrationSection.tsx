import React from 'react';

const IntegrationSection = () => {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-4 tracking-tight">Enterprise - ready integrations</h2>
            <p className="text-xl text-gray-500 mb-16">Seamless connectivity with Lyzr</p>
        </div>

        <div className="flex flex-col gap-6 items-center max-w-6xl mx-auto">
           {/* Row 1 */}
           <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
                <LogoPill>
                    <div className="w-6 h-6 mr-2">
                        <svg viewBox="0 0 24 24" fill="none" className="text-green-600 w-full h-full">
                            <path d="M12 4.5C12 4.5 14.5 2.5 17 4.5C19.5 6.5 18.5 9.5 18.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M18.5 9.5C18.5 9.5 21.5 10.5 21.5 13.5C21.5 16.5 18.5 17.5 18.5 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M18.5 17.5C18.5 17.5 17.5 20.5 14.5 20.5C11.5 20.5 10.5 17.5 10.5 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M10.5 17.5C10.5 17.5 7.5 18.5 5.5 16.5C3.5 14.5 4.5 11.5 4.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M4.5 11.5C4.5 11.5 2.5 9.5 4.5 6.5C6.5 3.5 9.5 4.5 9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="12" cy="12" r="2" fill="currentColor"/>
                        </svg>
                    </div>
                    <span className="font-semibold text-gray-800">OpenAI</span>
                </LogoPill>

                <LogoPill>
                    <div className="w-6 h-6 bg-[#D97757] rounded-md flex items-center justify-center text-white text-xs font-bold mr-2">Ai</div>
                    <span className="font-semibold text-gray-800">Claude 3</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-gray-900 text-lg">LLaMA</span>
                </LogoPill>

                <LogoPill>
                    <div className="w-6 h-6 bg-yellow-500 rounded-sm mr-2"></div>
                    <span className="font-bold text-gray-900">MISTRAL</span>
                    <span className="text-xs text-gray-500 ml-1">AI_</span>
                </LogoPill>

                <LogoPill>
                    <div className="grid grid-cols-2 gap-0.5 w-5 h-5 mr-2">
                        <div className="bg-[#F25022] w-full h-full"></div>
                        <div className="bg-[#7FBA00] w-full h-full"></div>
                        <div className="bg-[#00A4EF] w-full h-full"></div>
                        <div className="bg-[#FFB900] w-full h-full"></div>
                    </div>
                    <div className="flex flex-col items-start leading-none">
                        <span className="font-semibold text-gray-800 text-sm">Microsoft</span>
                        <span className="text-[10px] text-gray-500">Phi-3</span>
                    </div>
                </LogoPill>

                <LogoPill>
                    <span className="text-xl mr-2">🤗</span>
                    <span className="font-bold text-gray-800">Hugging Face</span>
                </LogoPill>

                <LogoPill>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 font-bold text-lg">Gemini</span>
                </LogoPill>

                <LogoPill>
                    <div className="w-5 h-5 mr-2 text-teal-600">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L14 7H19L15 11L17 16L12 13L7 16L9 11L5 7H10L12 2Z" />
                        </svg>
                    </div>
                    <span className="font-semibold text-gray-800">perplexity</span>
                </LogoPill>
           </div>

           {/* Row 2 */}
           <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
                <LogoPill>
                    <div className="w-8 h-6 flex items-center justify-center mr-1">
                        <span className="font-bold text-gray-900 italic text-lg">aws</span>
                        <div className="w-4 h-2 border-b-2 border-orange-400 rounded-full ml-1 mt-2"></div>
                    </div>
                </LogoPill>

                <LogoPill>
                    <div className="w-6 h-6 mr-2">
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#4285F4"/>
                        </svg>
                    </div>
                </LogoPill>

                <LogoPill>
                    <div className="w-6 h-6 mr-2 text-[#0078D4]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <path d="M12 2L2 22H22L12 2Z" />
                        </svg>
                    </div>
                </LogoPill>

                <LogoPill>
                    <span className="font-serif font-bold text-blue-700 text-xl tracking-widest">IBM</span>
                </LogoPill>

                <LogoPill>
                    <div className="w-6 h-6 mr-2 text-[#29B5E8]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
                        </svg>
                    </div>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#C74634] tracking-wide">ORACLE</span>
                </LogoPill>

                <LogoPill>
                    <div className="w-6 h-6 mr-2 text-[#FF3621]">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-1-2-1-2 1 2 1zm0 2l-10 5 10 5 10-5-10-5z"/>
                        </svg>
                    </div>
                </LogoPill>
           </div>

           {/* Row 3 */}
           <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-400">
                <LogoPill>
                    <div className="w-4 h-6 mr-2 text-green-600">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C12 2 6 8 6 14c0 3.31 2.69 6 6 6s6-2.69 6-6c0-6-6-12-6-12z"/>
                        </svg>
                    </div>
                    <div className="flex flex-col items-start leading-none">
                        <span className="font-bold text-green-800 text-sm">MongoDB</span>
                        <span className="text-[10px] text-gray-500">Atlas</span>
                    </div>
                </LogoPill>

                <LogoPill>
                    <div className="w-5 h-5 mr-2 border border-black rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    <span className="font-bold text-gray-900">Pinecone</span>
                </LogoPill>

                <LogoPill>
                    <div className="w-5 h-5 mr-2 bg-blue-500 rounded-sm transform rotate-45"></div>
                    <span className="font-bold text-blue-600">Fivetran</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#00A1E0] italic">salesforce</span>
                </LogoPill>

                <LogoPill>
                    <div className="bg-[#008FD3] text-white font-bold px-1 rounded-sm">SAP</div>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-[#81B5A1]">servicenow</span>
                </LogoPill>

                <LogoPill>
                    <div className="w-5 h-5 mr-2 bg-red-600 rounded-sm flex items-center justify-center text-white font-bold text-xs">Q</div>
                    <span className="font-bold text-red-600">drant</span>
                </LogoPill>

                <LogoPill>
                    <span className="font-bold text-gray-900 tracking-widest text-sm">ATSCALE</span>
                </LogoPill>
           </div>
        </div>
      </div>
    </section>
  );
};

const LogoPill = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-full px-6 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center min-w-[120px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default ${className}`}>
    {children}
  </div>
);

export default IntegrationSection;
