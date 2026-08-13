"use client";

// ============================================================
// SECTION WRAPPER
// Komponen pembungkus untuk setiap section di halaman.
// Bertugas: mengatur padding, max-width, dan animasi
// scroll reveal (section muncul saat di-scroll ke sana).
// ============================================================

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;               // ID untuk anchor link navigasi
  className?: string;       // Class tambahan dari luar
  fullWidth?: boolean;      // Nonaktifkan max-width container
}

// Animasi: section fade-in + slide-up saat masuk viewport
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // ease cubic custom (smooth)
    },
  },
};

export default function SectionWrapper({
  children,
  id,
  className,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      // Scroll reveal: viewport { once: true } = animasi hanya sekali
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      className={cn("section-padding", className)}
    >
      {/* Container inner dengan max-width kecuali fullWidth=true */}
      <div className={cn(!fullWidth && "container-custom")}>
        {children}
      </div>
    </motion.section>
  );
}
