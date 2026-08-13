"use client";

// ============================================================
// HOOK: useActiveSection
// Mendeteksi section mana yang sedang aktif di viewport.
// Digunakan Navbar untuk highlight link yang sesuai.
// Cara kerja: IntersectionObserver mengamati semua section,
// lalu mencatat ID section yang paling banyak terlihat.
// ============================================================

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    // IntersectionObserver: callback dipanggil saat elemen masuk/keluar viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // rootMargin: "-40% dari atas, -50% dari bawah"
        // Artinya section aktif ketika bagian tengah layar menyentuhnya
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    // Observasi semua section berdasarkan ID
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Cleanup: stop observe saat komponen unmount
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
