"use client";

// ============================================================
// EDUCATION SECTION — Timeline satu kolom, center
// ============================================================

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import FloatingBackground from "@/components/shared/FloatingBackground";
import { educations } from "@/data/education";

export default function Education() {
  return (
    <SectionWrapper id="education" className="relative overflow-hidden">
      <FloatingBackground variant="mixed" />

      <div className="relative z-10">
        <SectionHeading
          number="06"
          title="Pendidikan"
          subtitle="Latar belakang pendidikan formal yang membentuk fondasi keahlian saya."
          centered
        />

        {/* Timeline — satu kolom, center, max-width konsisten dengan Experience */}
        <div className="relative max-w-3xl mx-auto">

          {/* Garis vertikal di kiri */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-6">
            {educations.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Icon pada garis */}
                <div className="absolute left-[10px] top-5 w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)] z-10">
                  <GraduationCap size={16} className="text-white" />
                </div>

                <GlowCard className="p-6" glowColor="purple" hoverable>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-white text-lg leading-snug">{edu.degree}</h3>
                      <p className="text-purple-400 font-medium text-sm">{edu.major}</p>
                      <p className="text-white/60 text-sm">{edu.institution}</p>
                    </div>
                    {edu.gpa && (
                      <div className="glass border border-yellow-500/30 rounded-xl px-4 py-2 text-center flex-shrink-0">
                        <p className="text-yellow-400 font-bold text-lg leading-none">{edu.gpa}</p>
                        <p className="text-white/40 text-xs mt-0.5">IPK</p>
                      </div>
                    )}
                  </div>

                  {/* Tanggal + Lokasi */}
                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {edu.startYear} — {edu.endYear}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {edu.location}
                    </span>
                  </div>

                  {/* Deskripsi */}
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Prestasi */}
                  {edu.achievements.length > 0 && (
                    <div>
                      <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-2">
                        Prestasi & Kegiatan
                      </p>
                      <ul className="space-y-1.5">
                        {edu.achievements.map((ach, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                            <Star size={12} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
