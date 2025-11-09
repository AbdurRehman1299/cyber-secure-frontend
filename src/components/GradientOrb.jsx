"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GradientOrb = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const orbSize = 300;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,

        x: mousePosition.x - orbSize / 2,
        y: mousePosition.y - orbSize / 2,
        width: `${orbSize}px`,
        height: `${orbSize}px`,
        borderRadius: "50%",
        
        background:
          "radial-gradient(circle, rgba(29, 78, 216, 0.4) 0%, rgba(0,0,0,0) 70%)",
        
        filter: "blur(40px)",
        
        zIndex: -1,
        
        pointerEvents: "none",
      }}

      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.5,
      }}
    />
  );
};

export default GradientOrb;