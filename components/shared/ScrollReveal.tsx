"use client";

// ============================================================
// SCROLL REVEAL
// Wrapper animasi yang membuat child element muncul dengan
// efek fade+slide saat di-scroll ke dalam viewport.
// Gunakan di mana saja: <ScrollReveal><YourComponent /></ScrollReveal>
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right"; // Arah animasi masuk
  delay?: number;    // Delay dalam detik
  duration?: number; // Durasi dalam detik
}

// Fungsi untuk menghasilkan nilai awal animasi berdasarkan arah
function getInitial(direction: string) {
  switch (direction) {
    case "up":    return { opacity: 0, y: 40 };
    case "down":  return { opacity: 0, y: -40 };
    case "left":  return { opacity: 0, x: 40 };
    case "right": return { opacity: 0, x: -40 };
    default:      return { opacity: 0, y: 40 };
  }
}

export default function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
