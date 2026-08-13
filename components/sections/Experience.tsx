"use client";

// ============================================================
// EXPERIENCE SECTION — Timeline satu kolom, center
// ============================================================

import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import TechBadge from "@/components/shared/TechBadge";
import FloatingBackground from "@/components/shared/FloatingBackground";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  "bootcamp":     "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "project":      "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "organisasi":   "bg-green-500/20 text-green-400 border-green-500/30",
  "volunteer":    "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "kepanitiaan":  "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "course":       "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "internship":   "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "webinar":      "bg-teal-500/20 text-teal-400 border-teal-500/30",
  "coding camp":  "bg-violet-500/20 text-violet-400 border-violet-500/30",
  "Mini Course":  "bg-sky-500/20 text-sky-400 border-sky-500/30",
  "Event Online": "bg-rose-500/20 text-rose-400 border-rose-500/30",
  "freelance":    "bg-lime-500/20 text-lime-400 border-lime-500/30",
};

const typeLabels: Record<string, string> = {
  "bootcamp":     "Bootcamp",
  "project":      "Project",
  "organisasi":   "Organisasi",
  "volunteer":    "Volunteer",
  "kepanitiaan":  "Kepanitiaan",
  "freelance":    "Freelance",
  "internship":   "Internship",
  "webinar":      "Webinar",
  "coding camp":  "Coding Camp",
  "Mini Course":  "Mini Course",
  "Event Online": "Event Online",
  "course":       "Course",
};

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="relative overflow-hidden">
      <FloatingBackground variant="mixed" />

      <div className="relative z-10">
        <SectionHeading
          number="03"
          title="Pengalaman"
          subtitle="aktivitas yang membentuk skill saya."
          centered
        />

        {/* Timeline — satu kolom, center, max-width agar tidak terlalu lebar */}
        <div className="relative max-w-3xl mx-auto">

          {/* Garis vertikal di kiri */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                {/* Dot pada garis */}
                <div className="absolute left-[18px] top-6 w-5 h-5 rounded-full border-2 border-purple-500 bg-background z-10 shadow-[0_0_10px_rgba(147,51,234,0.5)]" />

                <GlowCard className="p-6" glowColor="purple" hoverable>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-white text-lg leading-snug">{exp.role}</h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center gap-1 mt-0.5 transition-colors w-fit"
                      >
                        {exp.company}
                        {exp.companyUrl !== "#" && <ExternalLink size={11} />}
                      </a>
                    </div>
                    <span className={cn(
                      "text-xs font-medium px-2.5 py-1 rounded-full border flex-shrink-0",
                      typeColors[exp.type]
                    )}>
                      {typeLabels[exp.type]}
                    </span>
                  </div>

                  {/* Tanggal + Lokasi */}
                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Deskripsi */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
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
