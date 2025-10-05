"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  href?: string;
}

export function GlowingButton({ 
  children, 
  className = "", 
  glowColor = "#8B5CF6",
  onClick,
  href 
}: GlowingButtonProps) {
  const ButtonContent = (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-full",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 blur-xl"
        style={{ backgroundColor: glowColor }}
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Button content */}
      <div className="relative z-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
        {children}
      </div>
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-400"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {ButtonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {ButtonContent}
    </button>
  );
}



