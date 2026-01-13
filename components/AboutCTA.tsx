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
            <button className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-all flex items-center gap-2 whitespace-nowrap rounded-full shadow-lg">
              Marketplace <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            </button>
          </Link>
        </div>

        {/* Card 2: Contact */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Reimagine your business
            </h3>
            <p className="text-gray-600">
              Find out how AI LifeBot can help you today.
            </p>
          </div>
          <Link href="/contact">
            <button className="bg-transparent border border-gray-900 text-gray-900 px-8 py-3 text-sm font-medium hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2 whitespace-nowrap rounded-full">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
