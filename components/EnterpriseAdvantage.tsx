"use client";

import { ChevronRight, Sparkles } from "lucide-react";

export default function EnterpriseAdvantage() {
  return (
    <section className="container mx-auto py-24 px-4 md:px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-medium mb-2 text-orange-500">Why AgentMarketplace ?</h2>
        <p className="text-3xl md:text-4xl font-medium text-black">Your enterprise AI advantage</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Card 1 */}
        <div className="w-full max-w-[95%] mx-auto bg-white rounded-[2.5rem] border border-gray-200 p-8 md:p-12 shadow-sm relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          {/* Background Pattern (Dots) */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
            {/* Left Content */}
            <div className="flex-1 text-left">
              <h3 className="text-3xl md:text-5xl font-light text-orange-500 mb-3 tracking-tight">Pre-built agents</h3>
              <h4 className="text-3xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">powering the future of work</h4>
              
              <p className="text-lg md:text-xl font-light text-gray-500 mb-8 leading-relaxed max-w-2xl">
                Get a production-ready AI agent to solve your specific business problems, from cutting costs to boosting revenue. Our solutions are built to tackle challenges across industries and corporate functions.
              </p>

              <button className="group flex items-center justify-between w-full md:w-[80%] px-6 py-4 rounded-full border border-gray-200 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Talk to us
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content - Diagram */}
            <div className="flex-1 w-full flex items-center justify-center relative min-h-[300px]">
               {/* Background Animations */}
               <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute right-[10%] top-[25%] w-48 h-48 bg-orange-50/50 rounded-full blur-2xl animate-pulse delay-100"></div>
                  <div className="absolute right-[10%] top-[60%] w-48 h-48 bg-orange-50/50 rounded-full blur-2xl animate-pulse delay-300"></div>
               </div>

               {/* Connecting Lines (SVG) */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
                  {/* Line to Top Right */}
                  <path d="M 150 150 L 220 150 L 250 100 L 300 100" fill="none" stroke="#fed7aa" strokeWidth="2" />
                  {/* Line to Bottom Right */}
                  <path d="M 150 150 L 220 150 L 250 200 L 300 200" fill="none" stroke="#fed7aa" strokeWidth="2" />
               </svg>

               {/* Central Node */}
               <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <div className="relative">
                      <div className="absolute inset-0 bg-orange-400 rounded-2xl blur opacity-40 animate-pulse"></div>
                      <div className="h-24 w-24 bg-orange-500 rounded-2xl shadow-lg shadow-orange-200 flex items-center justify-center transform rotate-3 transition-transform hover:rotate-0 relative z-10">
                          <Sparkles className="h-12 w-12 text-white" />
                      </div>
                  </div>
               </div>

               {/* Right Nodes */}
               <div className="absolute right-[10%] top-[25%]">
                  <div className="relative">
                      <div className="absolute inset-0 bg-orange-400 rounded-2xl blur opacity-30 animate-pulse delay-75"></div>
                      <div className="h-20 w-20 bg-[#F06A35] rounded-2xl shadow-lg shadow-orange-100 flex items-center justify-center transform -rotate-3 transition-transform hover:rotate-0 relative z-10">
                          {/* Discord Icon Placeholder */}
                          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.2915 18.2915 0 00-7.4868 0C7.1195 3.6698 6.878 3.273 6.659 2.8917a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
                          </svg>
                      </div>
                  </div>
               </div>

               <div className="absolute right-[10%] top-[60%]">
                  <div className="relative">
                      <div className="absolute inset-0 bg-orange-400 rounded-2xl blur opacity-30 animate-pulse delay-150"></div>
                      <div className="h-20 w-20 bg-[#F06A35] rounded-2xl shadow-lg shadow-orange-100 flex items-center justify-center transform rotate-6 transition-transform hover:rotate-0 relative z-10">
                          {/* Slack Icon Placeholder */}
                          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.522-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.52h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                          </svg>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-[95%] mx-auto bg-white rounded-[2.5rem] border border-gray-200 p-8 md:p-12 shadow-sm relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* Background Pattern (Dots) */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
            {/* Left Content */}
            <div className="flex-1 text-left">
              <h3 className="text-3xl md:text-5xl font-light text-orange-500 mb-3 tracking-tight">Pre-built agents</h3>
              <h4 className="text-3xl md:text-5xl font-thin text-gray-900 mb-6 tracking-tight">powering the future of work</h4>
              
              <p className="text-lg md:text-xl font-light text-gray-500 mb-8 leading-relaxed max-w-2xl">
                Get a production-ready AI agent to solve your specific business problems, from cutting costs to boosting revenue. Our solutions are built to tackle challenges across industries and corporate functions.
              </p>

              <button className="group flex items-center justify-between w-full md:w-[80%] px-6 py-4 rounded-full border border-gray-200 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Talk to us
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content - Diagram */}
            <div className="flex-1 w-full flex items-center justify-center relative min-h-[300px]">
               {/* Background Animations */}
               <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute right-[10%] top-[25%] w-48 h-48 bg-orange-50/50 rounded-full blur-2xl animate-pulse delay-100"></div>
                  <div className="absolute right-[10%] top-[60%] w-48 h-48 bg-orange-50/50 rounded-full blur-2xl animate-pulse delay-300"></div>
               </div>

               {/* Connecting Lines (SVG) */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
                  {/* Line to Top Right */}
                  <path d="M 150 150 L 220 150 L 250 100 L 300 100" fill="none" stroke="#fed7aa" strokeWidth="2" />
                  {/* Line to Bottom Right */}
                  <path d="M 150 150 L 220 150 L 250 200 L 300 200" fill="none" stroke="#fed7aa" strokeWidth="2" />
               </svg>

               {/* Central Node */}
               <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <div className="relative">
                      <div className="absolute inset-0 bg-orange-400 rounded-2xl blur opacity-40 animate-pulse"></div>
                      <div className="h-24 w-24 bg-orange-500 rounded-2xl shadow-lg shadow-orange-200 flex items-center justify-center transform rotate-3 transition-transform hover:rotate-0 relative z-10">
                          <Sparkles className="h-12 w-12 text-white" />
                      </div>
                  </div>
               </div>

               {/* Right Nodes */}
               <div className="absolute right-[10%] top-[25%]">
                  <div className="relative">
                      <div className="absolute inset-0 bg-orange-400 rounded-2xl blur opacity-30 animate-pulse delay-75"></div>
                      <div className="h-20 w-20 bg-[#F06A35] rounded-2xl shadow-lg shadow-orange-100 flex items-center justify-center transform -rotate-3 transition-transform hover:rotate-0 relative z-10">
                          {/* Discord Icon Placeholder */}
                          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.2915 18.2915 0 00-7.4868 0C7.1195 3.6698 6.878 3.273 6.659 2.8917a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
                          </svg>
                      </div>
                  </div>
               </div>

               <div className="absolute right-[10%] top-[60%]">
                  <div className="relative">
                      <div className="absolute inset-0 bg-orange-400 rounded-2xl blur opacity-30 animate-pulse delay-150"></div>
                      <div className="h-20 w-20 bg-[#F06A35] rounded-2xl shadow-lg shadow-orange-100 flex items-center justify-center transform rotate-6 transition-transform hover:rotate-0 relative z-10">
                          {/* Slack Icon Placeholder */}
                          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.522-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.52h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                          </svg>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

