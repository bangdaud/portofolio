"use client";

// ============================================================
// TECH BADGE
// Badge kecil untuk menampilkan nama teknologi.
// Dipakai di project card, experience card, dst.
// ============================================================

import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        // Glass pill badge
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        "bg-purple-500/10 text-purple-300 border border-purple-500/20",
        "hover:bg-purple-500/20 transition-colors duration-200",
        className
      )}
    >
      {name}
    </span>
  );
}
