"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer 
      className="w-full pt-22 px-4 lg:px-16 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      // style={{ backgroundImage: "url('/Footer.png')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 relative z-10 animate-fade-in-up">
        {/* Left Side - Subscribe */}
        <div className="flex flex-col gap-6 max-w-sm">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-300 to-orange-200">AgentMarketplace</h3>
          
          <div className="space-y-2">
            <h4 className="text-gray-900 font-bold text-lg">Subscribe to our newsletter</h4>
            <p className="text-gray-600 text-sm">Get product updates, company news, and more.</p>
          </div>

          <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all text-center w-full">
            Subscribe
          </button>
        </div>

        {/* Right Side - Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
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

      <div className="w-full mt-8 relative h-[150px] md:h-[300px] overflow-hidden select-none pointer-events-none -mx-4 lg:-mx-16" style={{ width: 'calc(100% + 8rem)' }}>
         <svg className="w-full h-full absolute inset-0" width="100%" height="100%">
             <defs>
                 <pattern id="footer-dot-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                     <circle cx="1.5" cy="1.5" r="1.5" className="text-gray-300" fill="currentColor" />
                 </pattern>
                 <pattern id="footer-dot-pattern-active" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                     <circle cx="1.5" cy="1.5" r="2.5" className="text-gray-500" fill="currentColor" />
                 </pattern>
                 <mask id="footer-text-mask">
                     <rect x="0" y="0" width="100%" height="100%" fill="black" />
                     <text 
                        x="50%" 
                        y="55%" 
                        textAnchor="middle" 
                        dominantBaseline="middle" 
                        className="font-bold tracking-tighter" 
                        fill="white"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '10vw', fontWeight: 800 }}
                     >
                         AgentMarketplace
                     </text>
                 </mask>
             </defs>
             <rect fill="url(#footer-dot-pattern)" width="100%" height="100%" />
             <rect fill="url(#footer-dot-pattern-active)" width="100%" height="100%" mask="url(#footer-text-mask)" />
         </svg>
      </div>
    </footer>
  );
}
