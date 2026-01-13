"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Use spring for smoother animation
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 50,
    damping: 20,
    mass: 0.5
  });

  // Animate width from 5xl (64rem) to 2xl/3xl based on scroll
  // Slower transition (range 0-250 instead of 0-100)
  const width = useTransform(smoothScrollY, [0, 250], ["64rem", "54rem"]);
  
  // Decrease padding when navbar compresses (range 0-250)
  const paddingX = useTransform(smoothScrollY, [0, 250], ["1rem", "4rem"]);

  return (
    <>
      <motion.nav 
        style={{ maxWidth: width }}
        className="fixed top-6 left-0 right-0 z-50 mx-4 lg:mx-auto rounded-full bg-gray-50/80 backdrop-blur-md border border-white shadow-sm"
      >
        <motion.div 
          style={{ paddingLeft: paddingX, paddingRight: paddingX }}
          className="flex h-16 items-center justify-between px-4 lg:px-6"
        >
          <div className="font-bold text-xl text-orange-500 whitespace-nowrap">
            AgentMarketplace
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              Features <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              Products <ChevronDown className="h-4 w-4" />
            </div>
          
            <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link>
          </div>
          
          <div className="hidden lg:block whitespace-nowrap">
            <Link 
              href="#" 
              className="rounded-full bg-white border border-gray-200 px-6 py-2.5 text-sm font-medium text-black hover:bg-gray-50 transition-colors shadow-sm"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-gray-600">
              <div className="flex flex-col gap-4">
                <div className="font-semibold text-black">Features</div>
                <div className="font-semibold text-black">Products</div>
                <Link href="#" onClick={() => setIsOpen(false)}>Company</Link>
                <Link href="#" onClick={() => setIsOpen(false)}>Pricing</Link>
                <Link href="#" onClick={() => setIsOpen(false)}>Resources</Link>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <Link 
                  href="#" 
                  className="block w-full text-center rounded-full bg-black text-white px-6 py-3 text-base font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
