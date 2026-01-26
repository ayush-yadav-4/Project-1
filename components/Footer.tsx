"use client";

import Link from "next/link";
import Image from "next/image";

// Compliance badges data - Main row
const complianceBadges = [
  { name: "SOC 2", src: "/compliance/soc2.svg", alt: "SOC 2 Type II Certified" },
  { name: "ISO 27001", src: "/compliance/iso27001.svg", alt: "ISO 27001 Certified" },
  { name: "ISO 9001", src: "/compliance/iso9001.svg", alt: "ISO 9001 Certified" },
  { name: "CMMI", src: "/compliance/cmmi.svg", alt: "CMMI Level 3" },
];

// Strategic Planner badges
const strategicPlannerBadges = [
  { name: "CII", src: "/compliance/cii-full.svg", alt: "Confederation of Indian Industry" },
  { name: "NASSCOM", src: "/compliance/nasscom-full.svg", alt: "NASSCOM Member" },
];

export default function Footer() {
  return (
    <footer 
      className="w-full pt-16 sm:pt-20 lg:pt-22 px-4 sm:px-6 lg:px-16 relative bg-gradient-to-b from-white via-[#FFF8F5] to-[#FFF0EB] overflow-hidden"
    >
      {/* Creative Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute top-[10%] left-[5%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gradient-to-br from-pink-200/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] right-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-gradient-to-br from-pink-100/30 via-rose-50/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[40%] right-[5%] w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] bg-gradient-to-br from-peach-100/20 to-orange-50/20 rounded-full blur-2xl"></div>
        
        {/* Subtle Dot Pattern Overlay */}
        <svg className="w-full h-full absolute inset-0 opacity-30" width="100%" height="100%">
           <defs>
              <pattern id="footer-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1" fill="rgba(236, 72, 153, 0.15)" />
              </pattern>
           </defs>
           <rect fill="url(#footer-dots)" width="100%" height="100%" />
        </svg>
        
        {/* Decorative Curved Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <path d="M0,300 Q250,100 500,300 T1000,300" fill="none" stroke="url(#curveGradient)" strokeWidth="2" />
          <path d="M0,350 Q250,150 500,350 T1000,350" fill="none" stroke="url(#curveGradient)" strokeWidth="1.5" />
          <path d="M0,400 Q250,200 500,400 T1000,400" fill="none" stroke="url(#curveGradient)" strokeWidth="1" />
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="50%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 lg:gap-12 relative z-10 animate-fade-in-up">
        {/* Left Side - AI LifeBot Brand Tag */}
        <div className="flex flex-col gap-3 sm:gap-4 max-w-md">
          {/* Brand Attribution Text */}
          <p className="text-gray-600 text-xs sm:text-sm font-medium tracking-wide uppercase">
            An Enterprise Product By
          </p>
          
          {/* Clickable AI LifeBot Logo Tag */}
          <a 
            href="https://www.ailifebot.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 w-fit"
          >
            <Image
              src="/company_logo-01.jpg"
              alt="AI LifeBOT - Enterprise AI Agent Platform"
              width={140}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <svg 
              className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          {/* Tagline */}
          <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
            Revolutionizing Customer Experience with Conversational AI Agents & Co-Pilot
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-3 mt-2 pt-3 border-t border-gray-200/60">
            {/* Address */}
            <div className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-600 text-sm  leading-relaxed">
                3rd Floor, Orchid Center, Golf Course Road,<br />
                DLF QE, Sec-53, Gurugram, Haryana (122002)
              </p>
            </div>
            
            {/* Phone */}
            <a href="tel:+918439266770" className="flex items-center gap-2.5 group">
              <svg className="w-4 h-4 text-pink-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-600 text-sm group-hover:text-pink-600 transition-colors">+91 8439266770</span>
            </a>
            
            {/* Email */}
            <a href="mailto:contact@Ailifebot.com" className="flex items-center gap-2.5 group">
              <svg className="w-4 h-4 text-pink-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-600 text-sm group-hover:text-pink-600 transition-colors">contact@Ailifebot.com</span>
            </a>
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-16">
          {/* Product */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h5 className="font-bold text-gray-900 text-sm sm:text-base">Product</h5>
            <ul className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Security</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Team</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Enterprise</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Customer stories</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h5 className="font-bold text-gray-900 text-sm sm:text-base">Platform</h5>
            <ul className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Developer API</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h5 className="font-bold text-gray-900 text-sm sm:text-base">Support</h5>
            <ul className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Docs</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Community Forum</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Professional Services</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Status</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h5 className="font-bold text-gray-900 text-sm sm:text-base">Company</h5>
            <ul className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-gray-900 transition-colors">Press</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance & Strategic Section */}
      <div className="max-w-7xl mx-auto mt-4 sm:mt-14 lg:mt-16 pt-6 sm:pt-10 border-t border-gray-200/60 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left - Newsletter CTA with AI LifeBot branding */}
          <div className="hidden lg:block max-w-sm">
            <p className="text-gray-700 text-sm leading-relaxed">
              Subscribe to <span className="font-semibold">Ai LifeBOT Edge Digest</span>: A biweekly newsletter curated to keep you updated with the developments in Agentic AI
            </p>
            <div className="mt-4 flex gap-2">
              <input 
                type="email" 
                placeholder="Your work email" 
                className="flex-1 px-4 py-2.5 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 bg-white"
              />
              <button className="px-5 py-2.5 rounded-full border border-gray-400 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Center - Compliance Badges */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
              {complianceBadges.map((badge, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                  title={badge.alt}
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Strategic Planner with CII & NASSCOM */}
          <div className="hidden lg:flex flex-col items-end gap-4">
            <h4 className="text-xl font-semibold text-gray-800">Strategic Planner</h4>
            <div className="flex items-center gap-6">
              {strategicPlannerBadges.map((badge, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center h-14 grayscale-0 opacity-90 hover:opacity-100 transition-all duration-300"
                  title={badge.alt}
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={120}
                    height={56}
                    className="h-full w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright & Legal */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 py-6 border-t border-gray-200/60 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-xs sm:text-sm order-2 sm:order-1">
            © AI LifeBOT Inc. All rights reserved.
          </p>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 order-1 sm:order-2">
            <a href="https://www.ailifebot.com/pdf-view/AI%20Lifebot%20terms%20and%20conditions.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors">Terms and Conditions</a>
            <a href="https://www.ailifebot.com/pdf-view/AI%20Lifebot%20privacy%C2%A0policy.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors">Privacy Policy</a>
            <a href="https://www.ailifebot.com/pdf-view/AI%20Lifebot%20terms%20Refund.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors">Refund Policy</a>
            <a href="https://www.ailifebot.com/pdf-view/AI%20Lifebot%20cookies.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors">Cookie Policy</a>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3 order-3">
            <a href="https://www.linkedin.com/company/ailifebot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ailifebot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/ailifebot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://x.com/ailifebot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* AgentMarketplace Dotted Text - Reduced Height */}
      <div className="w-full mt-4 sm:mt-6 relative h-[80px] sm:h-[100px] md:h-[140px] overflow-hidden select-none pointer-events-none -mx-4 sm:-mx-6 lg:-mx-16" style={{ width: 'calc(100% + 8rem)' }}>
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
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '6vw', fontWeight: 800 }}
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
