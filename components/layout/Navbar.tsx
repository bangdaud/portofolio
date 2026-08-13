"use client";

// ============================================================
// NAVBAR
// Navigasi glassmorphism yang:
// - Transparent saat di atas, blur glass saat di-scroll
// - Highlight link section yang sedang aktif
// - Hamburger menu untuk mobile
// - Smooth scroll ke tiap section
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

// Daftar link navigasi — sesuaikan dengan ID section di page.tsx
const navLinks = [
  { label: "Home",        href: "#home" },
  { label: "Tentang",     href: "#about" },
  { label: "Skill",       href: "#skills" },
  { label: "Pengalaman",  href: "#experience" },
  { label: "Project",     href: "#projects" },
  { label: "Sertifikat",  href: "#certificates" },
  { label: "Pendidikan",  href: "#education" },
  { label: "Kontak",      href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  // Deteksi scroll untuk mengubah style navbar
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup mobile menu saat resize ke desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Smooth scroll ke section saat link diklik
  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-strong border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="container-custom flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                boxShadow: "0 0 20px rgba(124,58,237,0.4)",
              }}
            >
              DS
            </div>
            <span className="font-semibold text-white/90 group-hover:text-white transition-colors hidden sm:block">
              Daud Sipata
            </span>
          </motion.button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                      "hover-underline",
                      isActive
                        ? "text-white bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    {/* Indikator aktif: titik kecil di bawah */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA Button (desktop) */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => handleNavClick("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                boxShadow: "0 0 15px rgba(124,58,237,0.3)",
              }}
            >
              Hubungi Saya
            </motion.button>
          </div>

          {/* Hamburger (mobile) */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass-strong border-b border-white/10 md:hidden"
          >
            <ul className="flex flex-col py-4 px-4 gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all",
                        isActive
                          ? "text-white bg-purple-500/20 border border-purple-500/30"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
