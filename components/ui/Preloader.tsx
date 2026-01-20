"use client";

import React, { useEffect, useState } from "react";
import { LiquidMetal } from '@paper-design/shaders-react';
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="w-full h-full flex items-center justify-center">
            <LiquidMetal
              width={1000}
              height={1000}
              image="/Loading.png"
              colorBack="#ffffff"
              colorTint="#ffffff"
              shape="diamond"
              repetition={2}
              softness={0.1}
              shiftRed={0.3}
              shiftBlue={0.3}
              distortion={0.07}
              contour={0.4}
              angle={70}
              speed={1}
              scale={0.5}
              fit="contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
