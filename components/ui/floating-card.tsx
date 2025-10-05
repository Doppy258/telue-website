"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function FloatingCard({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
}: FloatingCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directionVariants = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={inView ? { x: 0, y: 0 } : directionVariants[direction]}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={cn("relative", className)}
    >
      <motion.div
        animate={{
          rotateY: [0, 2, -2, 0],
          rotateX: [0, 1, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Card className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-white border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
          {children}
        </Card>
      </motion.div>
    </motion.div>
  );
}



