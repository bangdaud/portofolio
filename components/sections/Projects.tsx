"use client";

// ============================================================
// PROJECTS SECTION
// Menampilkan skripsi, tugas akhir, project kampus, jurnal, dll.
// Filter kategori + card dengan badge, deskripsi, dan teknologi.
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Globe, BookOpen, FileText } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import TechBadge from "@/components/shared/TechBadge";
import FloatingBackground from "@/components/shared/FloatingBackground";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

// Filter kategori — sesuaikan dengan category di data/projects.ts
const filters = [
  { label: "Semua",         value: "all" },
  { label: "Skripsi",       value: "skripsi" },
  { label: "Project ", value: "project-kampus" },
  { label: "Jurnal",        value: "jurnal" },
  { label: "codingcamp",      value: "bootcamp" },
  { label: "Web",           value: "web" },
];

// Warna badge per kategori
const badgeColors: Record<string, string> = {
  "skripsi":        "bg-purple-600/80 border-purple-400/30",
  "project-kampus": "bg-blue-600/80 border-blue-400/30",
  "jurnal":         "bg-green-600/80 border-green-400/30",
  "bootcamp":       "bg-orange-600/80 border-orange-400/30",
  "web":            "bg-cyan-600/80 border-cyan-400/30",
  "ai":             "bg-violet-600/80 border-violet-400/30",
  "other":          "bg-gray-600/80 border-gray-400/30",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects" className="relative overflow-hidden">
      <FloatingBackground variant="blue" />

      <div className="relative z-10">
        <SectionHeading
          number="04"
          title="Project & Karya"
          subtitle="Skripsi, tugas akhir, project , jurnal, dan karya lain yang pernah saya kerjakan."
          centered
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                activeFilter === filter.value
                  ? "bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                  : "border-white/10 text-white/60 hover:text-white hover:border-white/20 glass"
              )}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-white/40 py-12">
            Belum ada project di kategori ini.
          </p>
        )}
      </div>
    </SectionWrapper>
  );
}

// ============================================================
// Sub-komponen: Card tiap project
// ============================================================
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Icon berbeda untuk jurnal vs project biasa
  const isJournal = project.category === "jurnal";
  const isThesis  = project.category === "skripsi";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group glass border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] hover:scale-[1.02]"
    >
      {/* Gambar / Placeholder */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-purple-900/40 to-blue-900/40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered && "scale-110"
          )}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-70"
        )} />

        {/* Icon besar di tengah jika tidak ada gambar */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-5 transition-opacity">
          {isJournal ? (
            <FileText size={80} className="text-white" />
          ) : isThesis ? (
            <BookOpen size={80} className="text-white" />
          ) : (
            <Globe size={80} className="text-white" />
          )}
        </div>

        {/* Badge kategori / label */}
        {project.badge && (
          <div className={cn(
            "absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium text-white border",
            badgeColors[project.category] ?? "bg-gray-600/80 border-gray-400/30"
          )}>
            {project.badge}
          </div>
        )}

        {/* Tombol aksi saat hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute bottom-3 right-3 flex gap-2"
        >
          {project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-purple-600/80 border border-purple-400/30 flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
              aria-label="Live / Publikasi"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </motion.div>
      </div>

      {/* Konten card */}
      <div className="p-5">
        <h3 className="font-bold text-white text-base mb-2 line-clamp-2 leading-snug group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs text-white/30 self-center">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Link bawah */}
        <div className="flex gap-4 pt-3 border-t border-white/5">
          {project.githubUrl !== "#" ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
            >
              <Github size={13} />
              GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-white/20 cursor-default">
              <Github size={13} />
              Private
            </span>
          )}

          {project.liveUrl !== "#" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ExternalLink size={13} />
              {isJournal ? "Lihat Jurnal" : "Live Demo"}
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-white/20 cursor-default">
              <Globe size={13} />
              {isJournal ? "Belum Publikasi" : "Belum Deploy"}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
