"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Magnetic Button Effect
export function MagneticButton({ children, className = "", ...props }: any) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    ref.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.button
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Morphing Background
export function MorphingBackground({ children, className = "" }: any) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-purple-50" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Floating Elements
export function FloatingElements() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </>
  );
}

// Holographic Card
export function HolographicCard({ children, className = "" }: any) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Holographic effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        animate={{
          background: [
            "linear-gradient(45deg, transparent, rgba(255, 0, 255, 0.1), transparent)",
            "linear-gradient(135deg, transparent, rgba(0, 255, 255, 0.1), transparent)",
            "linear-gradient(225deg, transparent, rgba(255, 255, 0, 0.1), transparent)",
            "linear-gradient(315deg, transparent, rgba(255, 0, 255, 0.1), transparent)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Liquid Button
export function LiquidButton({ children, className = "", onClick }: any) {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <motion.button
      className={`relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsAnimating(true)}
      onHoverEnd={() => setIsAnimating(false)}
    >
      {/* Liquid background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700"
        animate={{
          background: isAnimating
            ? [
                "linear-gradient(45deg, #8B5CF6, #A855F7, #8B5CF6)",
                "linear-gradient(90deg, #A855F7, #8B5CF6, #A855F7)",
                "linear-gradient(135deg, #8B5CF6, #A855F7, #8B5CF6)",
                "linear-gradient(180deg, #A855F7, #8B5CF6, #A855F7)",
              ]
            : "linear-gradient(45deg, #8B5CF6, #A855F7)",
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20"
        animate={{
          scale: isAnimating ? [0, 1.5] : 0,
          opacity: isAnimating ? [0.5, 0] : 0,
        }}
        transition={{ duration: 0.6 }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Text Reveal Animation
export function TextReveal({ children, className = "" }: any) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

// Glitch Text Effect
export function GlitchText({ children, className = "" }: any) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        x: isGlitching ? [0, -2, 2, -2, 2, 0] : 0,
        color: isGlitching 
          ? ["#8B5CF6", "#FF0080", "#00FFFF", "#8B5CF6"] 
          : "#8B5CF6",
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {isGlitching && (
        <>
          <motion.span
            className="absolute inset-0 text-red-500 opacity-70"
            animate={{ x: [0, 2, -2, 2, -2, 0] }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-cyan-500 opacity-70"
            animate={{ x: [0, -1, 1, -1, 1, 0] }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
        </>
      )}
    </motion.span>
  );
}


