"use client";

// ============================================================
// GLOW CARD
// Card dengan efek glassmorphism + glow border saat di-hover.
// Digunakan untuk: skill card, project card, certificate card.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "blue" | "cyan" | "violet";
  hoverable?: boolean;     // Aktifkan efek hover glow
  delay?: number;          // Delay animasi masuk (dalam detik)
}

// Map warna ke class Tailwind
const glowMap = {
  purple: "hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:border-purple-500/50",
  blue:   "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-blue-500/50",
  cyan:   "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:border-cyan-500/50",
  violet: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-violet-500/50",
};

export default function GlowCard({
  children,
  className,
  glowColor = "purple",
  hoverable = true,
  delay = 0,
}: GlowCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Efek glow mengikuti posisi mouse (spotlight effect)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        // Base: glass effect
        "glass rounded-xl border border-white/10 relative overflow-hidden",
        // Hover: scale + glow
        hoverable && [
          "transition-all duration-300 cursor-default",
          "hover:scale-[1.02]",
          glowMap[glowColor],
        ],
        className
      )}
    >
      {/* Spotlight: cahaya kecil mengikuti mouse */}
      {hoverable && isHovered && (
        <div
          className="absolute pointer-events-none rounded-full opacity-20 blur-xl transition-opacity"
          style={{
            width: "200px",
            height: "200px",
            background: glowColor === "purple"
              ? "rgba(147,51,234,0.6)"
              : glowColor === "blue"
              ? "rgba(59,130,246,0.6)"
              : "rgba(6,182,212,0.6)",
            left: mousePos.x - 100,
            top: mousePos.y - 100,
          }}
        />
      )}

      {/* Konten card */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
