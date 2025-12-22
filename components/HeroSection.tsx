"use client";

import Link from "next/link";
import { Sparkles, ChevronDown } from "lucide-react";
import { MeshGradient } from "@paper-design/shaders-react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export default function HeroSection() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section 
      className="relative w-full overflow-hidden flex flex-col items-center text-center py-20 lg:py-32"
    >
      
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          style={{ height: "100%", width: "100%" }}
          distortion={0.8}
          swirl={0.1}
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={1}
          colors={["#F8E7DB", "#FFEAF6", "#F5EAF4", "#FCF1E9"]}
        />
      </div>

      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center text-center px-4">
            {/* Badge */}
            <div className="relative z-10 animate-fade-in-up mb-10">
              <div className="inline-flex items-center gap-3 rounded-full bg-white border border-gray-100 px-8 py-3 text-lg font-medium text-gray-800 shadow-sm animate-float">
                <Sparkles className="h-5 w-5 text-orange-500 animate-pulse" />
                Bridging gap between Agents and Daily Life
              </div>
            </div>

            {/* H1 */}
            <div className="relative z-10 animate-fade-in-up delay-100">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-pink-200/50 blur-3xl -z-10 rounded-full pointer-events-none animate-pulse-glow"></div>
              <h1 
                className="max-w-5xl text-5xl lg:text-7xl font-normal tracking-tight mb-6 leading-tight font-[family-name:var(--font-inter)] text-black"
              >
              Bring 
              <span className="inline-flex items-center justify-center mx-3 align-middle hover:rotate-12 transition-transform duration-300">
                <div className="h-12 w-12 lg:h-16 lg:w-16 bg-orange-500 rounded-xl rotate-12 flex items-center justify-center shadow-lg shadow-orange-200 hover:rotate-0 transition-transform duration-300">
                    <Sparkles className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
              </span>
              your AI Agents
              <br />
              to market Stronger
            </h1>
            </div>
            
            {/* Subtext */}
            <p className="relative z-10 max-w-2xl text-lg text-gray-600 mb-10 animate-fade-in-up delay-200">
              World's 1st Agent builder platform with built-in Responsible
              <br />
              AI and Hallucination Manager.
            </p>
            
            {/* CTA */}
            <div className="relative z-10 mb-20 animate-fade-in-up delay-300">
              <Link 
                href="#" 
                className="rounded-full bg-white border border-gray-200 px-8 py-3 text-base font-medium text-black hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2 mx-auto hover:scale-105 active:scale-95 duration-300"
              >
                Explore Marketplace <ChevronDown className="h-4 w-4 -rotate-90" />
              </Link>
            </div>
          </div>
        }
      >
        {/* Image Placeholder */}
        <div className="w-full h-full bg-white flex flex-col overflow-hidden">
          {/* Top Bar Line */}
          <div className="w-full h-16 border-b-[3px] border-gray-100 shrink-0"></div>
          
          <div className="flex-1 flex flex-col items-center justify-center p-8">
              <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl text-gray-500 font-bold">
                Ask Aceternity UI Anything
              </h2>
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
          </div>
        </div>
      </ContainerScroll>

    </section>
  );
}
