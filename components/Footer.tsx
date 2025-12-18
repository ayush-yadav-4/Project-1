"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="w-full pt-24 pb-40 px-4 md:px-16 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/Footer.png')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 relative z-10 animate-fade-in-up">
        {/* Left Side - Subscribe */}
        <div className="flex flex-col gap-6 max-w-sm">
          <h3 className="text-orange-500 text-xl font-bold">AgentMarketplace</h3>
          
          <div className="space-y-2">
            <h4 className="text-gray-900 font-bold text-lg">Subscribe to our newsletter</h4>
            <p className="text-gray-600 text-sm">Get product updates, company news, and more.</p>
          </div>

          <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all text-center w-full">
            Subscribe
          </button>
        </div>

        {/* Right Side - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {/* Product */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-gray-900">Product</h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-900">Features</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Security</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Team</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Enterprise</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Customer stories</Link></li>
              <li><Link href="#" className="hover:text-gray-900">The ReadME Project</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Pricing</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-gray-900">Platform</h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-900">Developer API</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Partners</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-gray-900">Support</h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-900">Docs</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Community Forum</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Professional Services</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Skills</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Status</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Contact GitHub</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4 mb-16">
            <h5 className="font-bold text-gray-900">Company</h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-900">About</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Careers</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Press</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Inclusion</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Social Impact</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Shop</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none">
        <span className="text-[11.5vw] font-medium text-gray-300/60 leading-none tracking-tighter translate-y-[25%]">
          AgentMarketplace
        </span>
      </div>
    </footer>
  );
}
