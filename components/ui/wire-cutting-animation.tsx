"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  trail: Array<{ x: number; y: number }>;
  temperature: number;
}

interface CutLine {
  x: number;
  progress: number;
  id: number;
  intensity: number;
  sparkBurst: number;
}

export function WireCuttingAnimation() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [cutLines, setCutLines] = useState<CutLine[]>([]);
  const [intenseCuts, setIntenseCuts] = useState<Array<{ x: number; y: number; intensity: number; id: number }>>([]);

  useEffect(() => {
    // More frequent and intense spark generation
    const sparkInterval = setInterval(() => {
      const newSparks: Spark[] = [];
      
      // Generate sparks from active cutting lines
      cutLines.forEach(line => {
        if (line.progress > 0.1 && line.progress < 0.95) {
          for (let i = 0; i < line.sparkBurst; i++) {
            const angle = (Math.random() * Math.PI) - Math.PI / 2; // Sparks fly sideways and up
            const speed = 3 + Math.random() * 8;
            const temp = 0.5 + Math.random() * 0.5;
            const colors = temp > 0.8 
              ? ["#FFFFFF", "#FFF4E0", "#FFE5B4"] // White hot
              : temp > 0.6 
              ? ["#FFD700", "#FFA500", "#FFFF00"] // Yellow hot
              : ["#FF6347", "#FF4500", "#FF8C00"]; // Orange hot
            
            newSparks.push({
              id: Date.now() + Math.random(),
              x: line.x + (Math.random() - 0.5) * 2,
              y: line.progress * 100 + (Math.random() - 0.5) * 2,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              life: 1,
              maxLife: 1,
              size: 1 + Math.random() * 4,
              color: colors[Math.floor(Math.random() * colors.length)],
              trail: [],
              temperature: temp,
            });
          }
        }
      });
      
      // Random ambient sparks
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 5;
        const temp = Math.random();
        const colors = ["#FFA500", "#FFD700", "#FF6347"];
        
        newSparks.push({
          id: Date.now() + i + Math.random(),
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 1,
          size: 1 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          trail: [],
          temperature: temp,
        });
      }
      
      setSparks(prev => [...prev, ...newSparks].slice(-300));
    }, 60);

    // Generate cutting lines with varying intensity
    const lineInterval = setInterval(() => {
      setCutLines(prev => {
        const updated = prev.map(line => ({
          ...line,
          progress: line.progress + (0.015 * line.intensity),
          sparkBurst: line.intensity > 1.2 ? 12 : 8,
        })).filter(line => line.progress < 1);

        if (Math.random() > 0.6 && prev.length < 6) {
          const intensity = 0.8 + Math.random() * 0.8;
          updated.push({
            x: Math.random() * 80 + 10,
            progress: 0,
            id: Date.now(),
            intensity,
            sparkBurst: intensity > 1.2 ? 12 : 8,
          });
        }

        return updated;
      });
    }, 40);

    // Update spark positions with realistic physics
    const updateInterval = setInterval(() => {
      setSparks(prev =>
        prev
          .map(spark => {
            const newTrail = [...spark.trail, { x: spark.x, y: spark.y }].slice(-5);
            return {
              ...spark,
              x: spark.x + spark.vx * 0.4,
              y: spark.y + spark.vy * 0.4,
              vx: spark.vx * 0.98, // air resistance
              vy: spark.vy * 0.98 + 0.2, // gravity
              life: spark.life - 0.02,
              trail: newTrail,
            };
          })
          .filter(spark => spark.life > 0 && spark.y < 130 && spark.x > -10 && spark.x < 110)
      );
    }, 25);

    // Generate intense cutting effect bursts
    const burstInterval = setInterval(() => {
      setIntenseCuts(prev => {
        const updated = prev
          .map(cut => ({ ...cut, intensity: cut.intensity - 0.05 }))
          .filter(cut => cut.intensity > 0);

        if (Math.random() > 0.7 && cutLines.length > 0) {
          const randomLine = cutLines[Math.floor(Math.random() * cutLines.length)];
          updated.push({
            x: randomLine.x,
            y: randomLine.progress * 100,
            intensity: 1,
            id: Date.now(),
          });
        }

        return updated;
      });
    }, 200);

    return () => {
      clearInterval(sparkInterval);
      clearInterval(lineInterval);
      clearInterval(updateInterval);
      clearInterval(burstInterval);
    };
  }, [cutLines]);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-black overflow-hidden">
      {/* Dynamic grid with depth */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.15) 2px, transparent 2px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.15) 2px, transparent 2px),
          linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
      }} />

      {/* Smoke/heat distortion effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(255, 165, 0, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 70% 60%, rgba(255, 165, 0, 0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 30% 40%, rgba(255, 165, 0, 0.1) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Enhanced wire mesh with realistic rendering */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="wireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#7C3AED", stopOpacity: 0.9 }} />
            <stop offset="50%" style={{ stopColor: "#A855F7", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#7C3AED", stopOpacity: 0.9 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id="heatGradient">
            <stop offset="0%" style={{ stopColor: "#FFFFFF", stopOpacity: 1 }} />
            <stop offset="30%" style={{ stopColor: "#FFD700", stopOpacity: 0.9 }} />
            <stop offset="60%" style={{ stopColor: "#FF8C00", stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: "#FF4500", stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        {/* Cutting wires with more detail */}
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={`wire-${i}`}
            x1={`${(i * 10) + 5}%`}
            y1="0%"
            x2={`${(i * 10) + 5}%`}
            y2="100%"
            stroke="url(#wireGradient)"
            strokeWidth="2.5"
            filter="url(#glow)"
            initial={{ opacity: 0.4 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              strokeWidth: [2, 3, 2],
            }}
            transition={{
              duration: 2 + i * 0.1,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Active cutting lines with intense effects */}
        {cutLines.map((line) => (
          <motion.g key={line.id}>
            {/* Cut trail glow */}
            <motion.line
              x1={`${line.x}%`}
              y1="0%"
              x2={`${line.x}%`}
              y2={`${line.progress * 100}%`}
              stroke="#FFD700"
              strokeWidth="8"
              filter="url(#strongGlow)"
              opacity="0.3"
            />
            {/* Main cut line */}
            <motion.line
              x1={`${line.x}%`}
              y1="0%"
              x2={`${line.x}%`}
              y2={`${line.progress * 100}%`}
              stroke="#FFFFFF"
              strokeWidth="3"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.9] }}
              transition={{ duration: 0.2 }}
            />
            {/* Cutting point with intense heat effect */}
            <motion.circle
              cx={`${line.x}%`}
              cy={`${line.progress * 100}%`}
              r={`${15 * line.intensity}`}
              fill="url(#heatGradient)"
              filter="url(#strongGlow)"
              animate={{
                r: [12 * line.intensity, 18 * line.intensity, 12 * line.intensity],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* White hot core */}
            <motion.circle
              cx={`${line.x}%`}
              cy={`${line.progress * 100}%`}
              r="5"
              fill="#FFFFFF"
              filter="url(#strongGlow)"
              animate={{
                r: [4, 6, 4],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.g>
        ))}
      </svg>

      {/* Intense cutting burst effects */}
      {intenseCuts.map((cut) => (
        <motion.div
          key={cut.id}
          className="absolute rounded-full"
          style={{
            left: `${cut.x}%`,
            top: `${cut.y}%`,
            width: `${100 * cut.intensity}px`,
            height: `${100 * cut.intensity}px`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, cut.intensity * 0.8, 0],
            scale: [0, 1.5, 2],
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-full h-full bg-gradient-radial from-white via-yellow-300 to-transparent blur-xl" />
        </motion.div>
      ))}

      {/* Sparks with trails */}
      {sparks.map((spark) => (
        <motion.g key={spark.id}>
          {/* Spark trail */}
          {spark.trail.length > 1 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <motion.path
                d={`M ${spark.trail.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}`}
                stroke={spark.color}
                strokeWidth={spark.size * 0.5}
                fill="none"
                opacity={spark.life * 0.5}
                filter="url(#glow)"
              />
            </svg>
          )}
          {/* Main spark particle */}
          <motion.div
            className="absolute rounded-full"
            style={{
              left: `${spark.x}%`,
              top: `${spark.y}%`,
              width: `${spark.size}px`,
              height: `${spark.size}px`,
              backgroundColor: spark.color,
              boxShadow: `
                0 0 ${spark.size * 3}px ${spark.color},
                0 0 ${spark.size * 6}px ${spark.color},
                0 0 ${spark.size * 9}px rgba(255, 165, 0, 0.5)
              `,
              opacity: spark.life,
              zIndex: 2,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.1 }}
          />
        </motion.g>
      ))}

      {/* Enhanced electric arc effects */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 3 }}>
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={`arc-${i}`}
            d={`M ${15 + i * 18} ${20 + Math.random() * 40} Q ${20 + i * 18} ${35 + Math.random() * 30} ${15 + i * 18} ${50 + Math.random() * 40}`}
            stroke="#00D9FF"
            strokeWidth="2.5"
            fill="none"
            filter="url(#strongGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1 + Math.random() * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Floating metal debris particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`debris-${i}`}
          className="absolute rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            backgroundColor: i % 3 === 0 ? '#FFD700' : '#C0C0C0',
            boxShadow: i % 3 === 0 ? '0 0 3px #FFD700' : '0 0 2px #C0C0C0',
          }}
          animate={{
            y: [0, -40 - Math.random() * 20, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, Math.random() * 360, 720],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Intense heat zones with dynamic positioning */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`heat-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 2) * 30}%`,
            width: `${120 + i * 20}px`,
            height: `${120 + i * 20}px`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.7, 1.4, 0.7],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-orange-400/50 via-yellow-500/30 to-transparent rounded-full blur-2xl" />
        </motion.div>
      ))}

      {/* Volumetric light rays */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute top-0 w-1 h-full"
          style={{
            left: `${18 + i * 16}%`,
            background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.6) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 100%)',
            filter: 'blur(2px)',
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scaleY: [0.7, 1.1, 0.7],
            x: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10],
          }}
          transition={{
            duration: 2.5 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Atmospheric glow layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/40 via-transparent to-purple-950/40" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)",
            "radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Edge vignette enhancement */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      
      {/* Scan line effect for tech aesthetic */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.03) 2px, rgba(139, 92, 246, 0.03) 4px)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default WireCuttingAnimation;
