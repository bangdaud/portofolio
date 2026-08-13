"use client";

// ============================================================
// CERTIFICATES SECTION
// Gallery sertifikat dengan lightbox modal.
// Klik gambar → modal besar terbuka.
// Data dari data/certificates.ts — tambah data di sana saja.
// ============================================================

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, Calendar } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import FloatingBackground from "@/components/shared/FloatingBackground";
import { certificates, type Certificate } from "@/data/certificates";
import { cn } from "@/lib/utils";

// Warna badge per kategori
const categoryColors: Record<string, string> = {
  programming:       "bg-blue-500/20 text-blue-400 border-blue-500/30",
  softwareengineering: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  ai:                "bg-violet-500/20 text-violet-400 border-violet-500/30",
  dataanalyst:       "bg-pink-500/20 text-pink-400 border-pink-500/30",
  management:        "bg-green-500/20 text-green-400 border-green-500/30",
  cloud:             "bg-sky-500/20 text-sky-400 border-sky-500/30",
  design:            "bg-orange-500/20 text-orange-400 border-orange-500/30",
  other:             "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export default function Certificates() {
  // State untuk lightbox: null = tertutup, Certificate = terbuka
  const [selected, setSelected] = useState<Certificate | null>(null);

  const openModal  = useCallback((cert: Certificate) => setSelected(cert), []);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <SectionWrapper id="certificates" className="relative overflow-hidden">
      <FloatingBackground variant="purple" />

      <div className="relative z-10">
        <SectionHeading
          number="05"
          title="Sertifikat"
          subtitle="Sertifikasi dan pencapaian yang telah saya raih dalam perjalanan belajar."
          centered
        />

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, i) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={i}
              onClick={() => openModal(cert)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <LightboxModal cert={selected} onClose={closeModal} />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

// ============================================================
// Sub-komponen: Card sertifikat di gallery
// ============================================================
function CertificateCard({
  cert,
  index,
  onClick,
}: {
  cert: Certificate;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onClick={onClick}
      className="group cursor-pointer glass border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(147,51,234,0.2)] hover:scale-[1.03]"
    >
      {/* Thumbnail gambar sertifikat */}
      <div className="relative h-36 bg-gradient-to-br from-purple-900/50 to-blue-900/50 overflow-hidden">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Overlay dengan icon zoom hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {/* Badge kategori */}
        <div className="absolute top-2 left-2">
          <span className={cn("text-xs px-2 py-0.5 rounded-full border capitalize", categoryColors[cert.category])}>
            {cert.category}
          </span>
        </div>
      </div>

      {/* Info singkat */}
      <div className="p-4">
        <h3 className="font-semibold text-white text-sm leading-tight mb-1 line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-white/50 text-xs mb-2">{cert.issuer}</p>
        <div className="flex items-center gap-1 text-white/30 text-xs">
          <Calendar size={11} />
          {cert.month ? `${cert.month} ${cert.year}` : cert.year}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// Sub-komponen: Lightbox Modal
// ============================================================
function LightboxModal({
  cert,
  onClose,
}: {
  cert: Certificate;
  onClose: () => void;
}) {
  return (
    // Backdrop gelap
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[150] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
    >
      {/* Modal box */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()} // Klik dalam modal tidak tutup
        className="glass-strong border border-white/20 rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Gambar besar */}
        <div className="relative w-full aspect-video bg-gradient-to-br from-purple-900/40 to-blue-900/40">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-contain p-4"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />

          {/* Tombol tutup */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label="Tutup"
          >
            <X size={18} />
          </button>
        </div>

        {/* Detail sertifikat */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className={cn("text-xs px-2.5 py-1 rounded-full border capitalize mb-2 inline-block", categoryColors[cert.category])}>
                {cert.category}
              </span>
              <h2 className="text-xl font-bold text-white">{cert.title}</h2>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Award size={24} className="text-purple-400" />
            </div>
          </div>

          <div className="space-y-2 text-sm text-white/70 mb-4">
            <p><span className="text-white/40">Penerbit :</span> {cert.issuer}</p>
            <p>
              <span className="text-white/40">Tanggal  :</span>{" "}
              {cert.month ? `${cert.month} ${cert.year}` : cert.year}
            </p>
            {cert.credentialId && (
              <p><span className="text-white/40">ID       :</span> {cert.credentialId}</p>
            )}
            {cert.description && (
              <p className="text-white/60 leading-relaxed pt-2">{cert.description}</p>
            )}
          </div>

          {/* Tombol lihat sertifikat */}
          {cert.credentialUrl !== "#" && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                boxShadow: "0 0 20px rgba(124,58,237,0.3)",
              }}
            >
              <ExternalLink size={16} />
              Lihat Sertifikat
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
