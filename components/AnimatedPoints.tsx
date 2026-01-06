"use client";

import React, {  useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const points = [
  {
    text: "handling rate limits and retries",
    className: "top-[15%] left-[1%] md:left-[2%]",
  },
  {
    text: "optimising JSON schema for agents",
    className: "top-[25%] right-[1%] md:right-[2%]",
  },
  {
    text: "building integrations",
    className: "top-[35%] left-[15%] md:left-[20%]",
  },
  {
    text: "managing auth and permissions for tools",
    className: "top-[70%] left-[1%] md:left-[2%]",
  },
  {
    text: "debugging complex agent flows",
    className: "top-[60%] right-[1%] md:right-[2%]",
  },
  {
    text: "scaling to millions of tools execution",
    className: "bottom-[10%] right-[15%] md:right-[20%]",
  },
];

export default function AnimatedPoints() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate opacity for each point based on scroll progress
  // We want them to appear one by one as we scroll
  // Total scroll range is 0 to 1
  // Point 1: 0.1 - 0.25 (fade in)
  // Point 2: 0.3 - 0.45 (fade in)
  // Point 3: 0.5 - 0.65 (fade in)
  // Point 4: 0.7 - 0.85 (fade in)

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Main Heading having blur effect when scrolling */}
        <motion.h2 
            style={{
                filter: useTransform(smoothProgress, [0.85, 1], ["blur(0px)", "blur(10px)"]),
                opacity: useTransform(smoothProgress, [0.85, 1], [1, 0])
            }}
            className="text-4xl md:text-6xl font-serif text-[#4A4A4A] text-center px-4 z-10"
        >
          Building agents that take action <span className="italic font-bold">is hard</span>
        </motion.h2>

        {/* Floating Points */}
        {points.map((point, index) => {
             // Staggered appearance ranges adjusted for 6 points
            const start = 0.15 + (index * 0.12);
            const end = start + 0.12;
            
            // Fade in, stay visible, then fade out at the end along with the header
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(smoothProgress, [start, end, 0.9, 1], [0, 1, 1, 0]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(smoothProgress, [start, end], [0.8, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(smoothProgress, [start, end], [20, 0]);


            return (
                <motion.div
                    key={index}
                    style={{ opacity, scale, y }}
                    className={`absolute text-md md:text-xl text-[#8E8E8E] font-mono tracking-widest ${point.className}`}
                >
                    {point.text}
                </motion.div>
            );
        })}
      </div>
    </div>
  );
}
