"use client";

import Link from "next/link";

export default function SignupSection() {
  return (
    <section 
      className="relative w-full py-32 flex flex-col items-center text-center px-4"
      style={{
        backgroundImage: "url('/signupbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* White Curve Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
          viewBox="0 0 1440 100" 
          className="w-full h-[40px] md:h-[80px] block" 
          preserveAspectRatio="none"
        >
          <path fill="#ffffff" d="M0,0 L1440,0 L1440,0 Q720,100 0,0 Z" />
        </svg>
      </div>

      <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-orange-500 relative z-10">
        Coding made
        <br />
        effortless
      </h2>
      
      <p className="max-w-2xl text-lg text-gray-600 mb-10">
        Hear how developers ship products faster, collaborate seamlessly, and build with
        <br />
        confidence using Pointer's powerful AI tools
      </p>
      
      <Link 
        href="#" 
        className="rounded-full bg-orange-500 px-8 py-4 text-lg font-medium text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 hover:scale-105 active:scale-95 duration-300"
      >
        Signup for free
      </Link>
    </section>
  );
}
