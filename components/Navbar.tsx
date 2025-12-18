"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 max-w-5xl mx-auto rounded-full bg-gray-50/80 backdrop-blur-md border border-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-8">
        <div className="font-bold text-xl text-orange-500">
          AgentMarketplace
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            Features <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            Products <ChevronDown className="h-4 w-4" />
          </div>
          <Link href="#" className="hover:text-black transition-colors">Company</Link>
          <Link href="#" className="hover:text-black transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-black transition-colors">Resources</Link>
        </div>
        <div>
          <Link 
            href="#" 
            className="rounded-full bg-white border border-gray-200 px-6 py-2.5 text-sm font-medium text-black hover:bg-gray-50 transition-colors shadow-sm"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
