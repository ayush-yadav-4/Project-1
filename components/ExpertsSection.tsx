"use client";

import { ArrowUpRight } from "lucide-react";

export default function ExpertsSection() {
  return (
    <section 
      className="w-full py-24 px-4 lg:px-6 relative overflow-hidden bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/Experts.png')", backgroundPosition: "center 25%" }}
    >
       {/* Background Gradient */}
       <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 via-white/80 to-transparent -z-10 pointer-events-none"></div>
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-pink-200/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10 animate-fade-in-up">
        <h2 className="text-3xl lg:text-5xl font-medium mb-2 text-orange-500">Trusted by experts.</h2>
        <p className="text-3xl lg:text-5xl font-medium text-black">Used by leaders.</p>
      </div>

      {/* Icons Row */}
      <div className="w-full max-w-[95%] mx-auto bg-white/60 backdrop-blur-md rounded-2xl border border-gray-100 p-8 shadow-sm mb-20 animate-fade-in-up delay-200">
        <div className="flex flex-wrap items-center justify-center gap-4 px-4">
            {/* Adobe Ai */}
            <div className="w-16 h-16 rounded-2xl bg-[#330000] flex items-center justify-center text-[#FF9A00] font-bold text-2xl border border-gray-100 shadow-sm shrink-0 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-300">Ai</div>
            
            {/* Adobe Id */}
            <div className="w-16 h-16 rounded-2xl bg-[#49021F] flex items-center justify-center text-[#FF69B4] font-bold text-2xl border border-gray-100 shadow-sm shrink-0 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-400">Id</div>
            
            {/* Notion */}
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-black">
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28.047-.653 0-.466-.327-.793-1.12-.793H4.832c-.653 0-1.166.42-1.166 1.073v15.603c0 .653.466 1.12 1.12 1.12.466 0 .886-.233 1.12-.606l12.515-7.184V7.61c0-.466-.28-.793-.746-.793-.42 0-.793.233-1.073.606L5.392 14.84V5.327c0-.56-.187-.84-.933-1.12z"/>
                </svg>
            </div>

            {/* Slack */}
            <div className="w-16 h-16 rounded-2xl bg-[#3F0E40] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-600">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.522-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.52h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
            </div>

            {/* Google */}
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-700">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
            </div>

            {/* Gmail */}
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-800">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335"/>
                </svg>
            </div>

            {/* Google Photos */}
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-900">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M20.2 11.6h-4.6c-1.9 0-3.4-1.5-3.4-3.4V3.6c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6v4.6c0 .9.7 1.6 1.6 1.6s1.6.7 1.6 1.6c0 .9-.7 1.6-1.6 1.6z" fill="#FBBC04"/>
                    <path d="M11.6 20.2V15.6c0-1.9-1.5-3.4-3.4-3.4H3.6c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6h4.6c.9 0 1.6.7 1.6 1.6v4.6c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6z" fill="#EA4335"/>
                    <path d="M3.6 11.6h4.6c1.9 0 3.4 1.5 3.4 3.4v4.6c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6v-4.6c0-.9-.7-1.6-1.6-1.6s-1.6-.7-1.6-1.6c0-.9.7-1.6 1.6-1.6z" fill="#4285F4"/>
                    <path d="M12.4 3.6v4.6c0 1.9 1.5 3.4 3.4 3.4h4.6c.9 0 1.6-.7 1.6-1.6s-.7-1.6-1.6-1.6h-4.6c-.9 0-1.6-.7-1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6z" fill="#34A853"/>
                </svg>
            </div>

            {/* Google Drive */}
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-1000">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M8.33 17.5l-3.83-6.63L8.77 3.5h7.46l4.27 7.37-3.83 6.63H8.33z" fill="none"/>
                    <path d="M8.77 3.5L4.5 10.87l3.83 6.63h8.34l4.27-7.37L16.23 3.5H8.77z" fill="none"/>
                    <path d="M8.77 3.5h7.46l-3.73 6.46-3.73-6.46z" fill="#FFC107"/>
                    <path d="M16.67 17.5H8.33l3.73-6.46 4.61 6.46z" fill="#4CAF50"/>
                    <path d="M4.5 10.87l4.27 7.37 3.73-6.46-3.73-6.46L4.5 10.87z" fill="#2196F3"/>
                </svg>
            </div>

            {/* Chrome */}
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-1100">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#4285F4"/>
                </svg>
            </div>

            {/* Sparkles */}
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3 hover:scale-110 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-1200">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-purple-500">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#grad1)"/>
                    <defs>
                        <linearGradient id="grad1" x1="2" y1="2" x2="22" y2="22">
                            <stop offset="0%" stopColor="#FF9A9E" />
                            <stop offset="100%" stopColor="#FECFEF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Dropbox */}
            <div className="w-16 h-16 rounded-2xl bg-[#0061FF] flex items-center justify-center border border-gray-200 shadow-sm shrink-0 p-3 hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                    <path d="M6 5.5L12 9.29L18 5.5L12 1.71L6 5.5ZM18 13.08L12 9.29L6 13.08L1.2 9.92L7.2 6.13L12 9.29L16.8 6.13L22.8 9.92L18 13.08ZM12 14.13L6 17.92L12 21.71L18 17.92L12 14.13Z"/>
                </svg>
            </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[95%] mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-[450px] overflow-hidden group">
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
         {/* Card 2 */}
         <div className="bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-[450px] overflow-hidden group">
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
        {/* Card 3 */}
        <div className="bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-[450px] overflow-hidden group">
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
        {/* Card 4 */}
        <div className="bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-[450px] overflow-hidden group">
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
    </section>
  )
}

