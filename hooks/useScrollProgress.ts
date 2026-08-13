"use client";

// ============================================================
// HOOK: useScrollProgress
// Mengembalikan nilai 0–1 yang merepresentasikan seberapa jauh
// user sudah scroll halaman (0 = atas, 1 = bawah).
// Digunakan oleh komponen ScrollProgressBar.
// ============================================================

import { useState, useEffect } from "react";

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Hindari pembagian dengan nol
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(scrolled, 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Cleanup: hapus listener saat komponen unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
