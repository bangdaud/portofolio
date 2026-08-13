"use client";

// ============================================================
// FLOATING BACKGROUND
// Dekorasi background: bola-bola blur mengambang yang memberi
// efek depth dan warna pada setiap section.
// Tidak bisa diklik (pointer-events-none).
// ============================================================

import { motion } from "framer-motion";

interface FloatingBackgroundProps {
  variant?: "purple" | "blue" | "mixed";
}

export default function FloatingBackground({
  variant = "mixed",
}: FloatingBackgroundProps) {
  return (
    // Wrapper absolut, di belakang konten (z-0), tidak bisa diklik
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {/* Bola besar kiri atas */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[100px] opacity-20"
        style={{
          background:
            variant === "blue"
              ? "radial-gradient(circle, #3b82f6, transparent)"
              : "radial-gradient(circle, #7c3aed, transparent)",
        }}
      />

      {/* Bola sedang kanan bawah */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-15"
        style={{
          background:
            variant === "purple"
              ? "radial-gradient(circle, #7c3aed, transparent)"
              : "radial-gradient(circle, #2563eb, transparent)",
        }}
      />

      {/* Bola kecil tengah */}
      {variant === "mixed" && (
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px]"
          style={{
            background: "radial-gradient(circle, #4f46e5, transparent)",
          }}
        />
      )}
    </div>
  );
}
