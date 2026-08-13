"use client";

// ============================================================
// SECTION HEADING
// Judul standar untuk setiap section. Konsisten di semua
// section: nomor kecil + judul + garis dekoratif.
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;       // Nomor section, misal "01"
  title: string;         // Judul section
  subtitle?: string;     // Kalimat deskripsi di bawah judul
  centered?: boolean;    // Rata tengah (default: kiri)
  className?: string;
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {/* Nomor kecil di atas judul */}
      {number && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-mono text-purple-400 mb-2 tracking-widest uppercase"
        >
          {number}
        </motion.p>
      )}

      {/* Judul utama dengan gradient text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>

      {/* Garis dekoratif gradient */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "h-1 w-16 rounded-full mb-4",
          "bg-gradient-to-r from-purple-500 to-blue-500",
          centered && "mx-auto"
        )}
      />

      {/* Subtitle opsional */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "text-muted-foreground text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
