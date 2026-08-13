"use client";

// ============================================================
// ABOUT SECTION
// Berisi: bio, minat, tujuan karier, dan stats ringkasan.
// Layout: 2 kolom (teks kiri, stats kanan) di desktop.
// ============================================================

import { motion } from "framer-motion";
import { Target, Heart, User } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingBackground from "@/components/shared/FloatingBackground";
import { personalInfo } from "@/data/personal";

export default function About() {
  return (
    <SectionWrapper id="about" className="relative overflow-hidden">
      <FloatingBackground variant="purple" />

      <div className="relative z-10">
        <SectionHeading
          number="01"
          title="Tentang Saya"
          subtitle="Kenali lebih jauh siapa saya, latar belakang, dan apa yang mendorong saya."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ====== KIRI: Teks Bio ====== */}
          <div className="space-y-6">
            {/* Paragraf bio */}
            {personalInfo.aboutDescription.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-white/70 leading-relaxed text-base">{para}</p>
              </ScrollReveal>
            ))}

            {/* Minat */}
            <ScrollReveal delay={0.3}>
              <GlowCard className="p-5" glowColor="blue">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Heart size={16} className="text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white">Minat & Ketertarikan</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {personalInfo.interests.map((interest, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </ScrollReveal>

            {/* Tujuan karier */}
            <ScrollReveal delay={0.4}>
              <GlowCard className="p-5" glowColor="purple">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Target size={16} className="text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white">Tujuan Karier</h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {personalInfo.careerGoal}
                </p>
              </GlowCard>
            </ScrollReveal>
          </div>

          {/* ====== KANAN: Stats + Info ====== */}
          <div className="space-y-6">
            {/* Info card */}
            <ScrollReveal direction="left" delay={0.1}>
              <GlowCard className="p-6" glowColor="violet">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <User size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{personalInfo.name}</h3>
                    <p className="text-sm text-white/50">{personalInfo.degree}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  {[
                    { label: "Lokasi",       value: personalInfo.location },
                    { label: "Universitas",  value: personalInfo.university },
                    { label: "Lulus",        value: personalInfo.graduationYear },
                    { label: "Email",        value: personalInfo.email },
                    { label: "Status",       value: personalInfo.availability },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="text-white/40 w-24 flex-shrink-0">{label}</span>
                      <span className="text-white/80">:</span>
                      <span className="text-white/80">{value}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </ScrollReveal>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.1} direction="left">
                  <GlowCard className="p-5 text-center" glowColor="blue">
                    <motion.p
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.3 + i * 0.1 }}
                      className="text-3xl font-bold gradient-text mb-1"
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-xs text-white/50 leading-tight">{stat.label}</p>
                  </GlowCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
