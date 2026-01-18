"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-[#FAF9F6] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Marketplace */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Start using an AI agent today
            </h3>
            <p className="text-gray-600">
              Browse and deploy our pre-built templates
            </p>
          </div>
          <Link href="/marketplace">
            <button className="bg-white text-black border border-gray-100 px-8 py-3 text-sm font-medium hover:bg-gray-50 transition-all flex items-center gap-2 whitespace-nowrap rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] bg-gradient-to-b from-white to-gray-50">
              Marketplace <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
            </button>
          </Link>
        </div>

        {/* Card 2: Contact */}
        <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Reimagine your business
            </h3>
            <p className="text-gray-600">
              Find out how AI LifeBot can help you today.
            </p>
          </div>
          <Link href="/contact">
            <button className="bg-white text-black border border-gray-200 px-8 py-3 text-sm font-medium hover:bg-gray-50 transition-all flex items-center gap-2 whitespace-nowrap rounded-full shadow-sm">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
