"use client";

// ============================================================
// SCROLL PROGRESS BAR
// Bar tipis di bagian atas halaman yang menunjukkan seberapa
// jauh user sudah scroll. Gradien ungu–biru.
// ============================================================

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    // Fixed di top-0, z tinggi agar selalu di atas semua elemen
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(to right, #7c3aed, #3b82f6)",
        }}
      />
    </div>
  );
}
