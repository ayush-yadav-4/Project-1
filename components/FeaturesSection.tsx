"use client";

import { Cpu, Layers, Zap, Shield } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="container mx-auto py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-white to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">Why AgentMarketplace?</h2>
        <p className="text-xl text-orange-500 font-medium">Your enterprise AI advantage</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {/* Card 1 */}
        <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-200">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/0 group-hover:from-orange-50/30 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>
          <div className="relative z-10">
            <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pre-built agents</h3>
            <p className="text-gray-600 mb-6">
                Powering the future of work. Get access to agents specifically designed for your industry needs.
            </p>
            <div className="h-32 bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden group-hover:border-orange-200 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent"></div>
                {/* Abstract UI */}
                <div className="absolute top-4 left-4 right-4 h-2 bg-gray-200 rounded-full group-hover:bg-orange-200 transition-colors"></div>
                <div className="absolute top-8 left-4 w-1/2 h-2 bg-gray-200 rounded-full group-hover:bg-orange-200 transition-colors delay-75"></div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/30 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>
          <div className="relative z-10">
            <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">A self-serve platform</h3>
            <p className="text-gray-600 mb-6">
                Built for every enterprise role. No coding required to deploy complex workflows.
            </p>
            <div className="h-32 bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden flex items-center justify-center group-hover:border-blue-200 transition-colors">
                <div className="h-16 w-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
                </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-200">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-50/0 group-hover:from-purple-50/30 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>
          <div className="relative z-10">
            <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Enterprise: Posture & Control</h3>
            <p className="text-gray-600 mb-6">
                Security first. Maintain full control over your data and agent interactions.
            </p>
            <div className="h-32 bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden p-4 group-hover:border-purple-200 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="h-2 w-20 bg-gray-200 rounded-full group-hover:bg-purple-200 transition-colors"></div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse delay-75"></div>
                    <div className="h-2 w-16 bg-gray-200 rounded-full group-hover:bg-purple-200 transition-colors delay-75"></div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse delay-150"></div>
                    <div className="h-2 w-24 bg-gray-200 rounded-full group-hover:bg-purple-200 transition-colors delay-150"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
