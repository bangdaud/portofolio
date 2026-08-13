"use client";

// ============================================================
// LOADING SCREEN
// Layar loading yang muncul saat website pertama kali dibuka.
// Menampilkan animasi logo + nama, lalu fade out setelah 2 detik.
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Setelah 2.2 detik, hilangkan loading screen
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    // AnimatePresence: memungkinkan animasi keluar (exit) saat komponen di-unmount
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{
            background: "hsl(224, 71%, 4%)",
          }}
        >
          {/* Konten loading */}
          <div className="flex flex-col items-center gap-6">
            {/* Logo animasi: huruf inisial berputar */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                boxShadow: "0 0 40px rgba(124,58,237,0.5)",
              }}
            >
              DS
            </motion.div>

            {/* Nama dengan animasi fade in */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="text-white/70 text-sm font-mono tracking-widest uppercase"
            >
              Daud Sipata
            </motion.p>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full bg-purple-500"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
