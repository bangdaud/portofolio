"use client";

// ============================================================
// SKILLS SECTION
// Menampilkan skill dalam card per kategori.
// Setiap skill punya progress bar yang animasi saat masuk
// viewport.
// ============================================================

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FloatingBackground from "@/components/shared/FloatingBackground";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="relative overflow-hidden">
      <FloatingBackground variant="blue" />

      <div className="relative z-10">
        <SectionHeading
          number="02"
          title="Skill & Teknologi"
          subtitle="Teknologi dan tools yang saya gunakan untuk membangun produk digital."
          centered
        />

        {/* Grid kategori skill */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.category} delay={catIdx * 0.08}>
              <GlowCard
                className="p-6 h-full"
                glowColor={catIdx % 2 === 0 ? "purple" : "blue"}
                delay={catIdx * 0.08}
              >
                {/* Header kategori */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-xl`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-white">{category.category}</h3>
                </div>

                {/* Daftar skill dengan progress bar */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      {/* Nama skill + level */}
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{skill.icon}</span>
                          <span className="text-sm text-white/80">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono text-white/40">{skill.level}%</span>
                      </div>

                      {/* Progress bar */}
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIdx * 0.05 + skillIdx * 0.08,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(to right, #7c3aed, #3b82f6)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
