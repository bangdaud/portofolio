"use client";

// ============================================================
// HERO SECTION
// Section pertama yang dilihat pengunjung. Berisi:
// - Foto profil dengan glow effect
// - Nama + gelar
// - Typing animation untuk roles
// - 3 tombol aksi: Download CV, Lihat Project, Hubungi Saya
// - Floating background decoration
// - Scroll indicator di bawah
// ============================================================

import { motion } from "framer-motion";
import { FolderOpen, Mail, ArrowDown, Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import AnimatedButton from "@/components/shared/AnimatedButton";
import FloatingBackground from "@/components/shared/FloatingBackground";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  // Buat sequence untuk TypeAnimation dari array roles
  // Format: ["teks1", delay, "teks2", delay, ...]
  const typeSequence = personalInfo.roles.flatMap((role) => [role, 2000]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorations */}
      <FloatingBackground variant="mixed" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Konten utama */}
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* ====== KIRI: Teks ====== */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">

            {/* Badge status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass border border-green-500/30 rounded-full px-4 py-2 mb-6"
            >
              {/* Dot hijau berkedip = "open to work" */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-green-400 text-sm font-medium">
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Salam */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-purple-400 font-mono text-lg mb-3"
            >
              Halo, saya 👋
            </motion.p>

            {/* Nama */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl sm:text-3xl font-semibold mb-6 h-10"
            >
              <span className="text-white/60">Seorang </span>
              <TypeAnimation
                sequence={typeSequence as any}
                wrapper="span"
                speed={50}
                deletionSpeed={70}
                repeat={Infinity}
                className="gradient-text"
              />
            </motion.div>

            {/* Deskripsi singkat */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/60 text-lg leading-relaxed max-w-xl mb-8"
            >
              Lulusan <span className="text-white/90 font-medium">Informatika</span> yang
              passionate membangun solusi digital. Spesialisasi{" "}
              <span className="text-purple-400 font-medium">React, Next.js, Python</span>, dan{" "}
              <span className="text-blue-400 font-medium">AI/ML Engineering</span>.
            </motion.p>

            {/* Tombol aksi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              {/* Lihat Project */}
              <AnimatedButton
                href="#projects"
                variant="primary"
                size="lg"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FolderOpen size={18} />
                Lihat Project
              </AnimatedButton>

              {/* Hubungi Saya */}
              <AnimatedButton
                href="#contact"
                variant="secondary"
                size="lg"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail size={18} />
                Hubungi Saya
              </AnimatedButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </motion.div>
          </div>

          {/* ====== KANAN: Foto profil ====== */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
              className="relative"
            >
              {/* Cincin glow animasi di luar foto */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7c3aed, #2563eb, #7c3aed, transparent, transparent)",
                  opacity: 0.4,
                }}
              />

              {/* Container foto */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-purple-500/30"
                style={{
                  boxShadow: "0 0 60px rgba(124,58,237,0.3), 0 0 120px rgba(37,99,235,0.15)",
                }}
              >
                <Image
                  src={personalInfo.profileImage}
                  alt={`Foto profil ${personalInfo.name}`}
                  fill
                  className="object-cover"
                  priority
                  // Fallback: tampilkan gradient jika gambar tidak ada
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />

                {/* Overlay gradient bawah foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>

              {/* Badge floating: pengalaman */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-8 glass border border-white/20 rounded-xl px-3 py-2 text-center"
              >
                <p className="text-xl font-bold gradient-text">100%</p>
                <p className="text-xs text-white/60 leading-tight">Semangat<br />Belajar</p>
              </motion.div>

              {/* Badge floating: project */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -left-4 bottom-8 glass border border-white/20 rounded-xl px-3 py-2 text-center"
              >
                <p className="text-xl font-bold gradient-text">100%</p>
                <p className="text-xs text-white/60 leading-tight">Rajin<br />Terampil</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator di bagian bawah */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
