"use client";

// ============================================================
// CONTACT SECTION
// Berisi: info kontak + form pesan.
// Form menggunakan state lokal, submit diarahkan ke mailto
// (tidak butuh backend). Mudah diganti ke API route jika perlu.
// ============================================================

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Github, Linkedin,
  MessageSquare, Send, CheckCircle
} from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import AnimatedButton from "@/components/shared/AnimatedButton";
import FloatingBackground from "@/components/shared/FloatingBackground";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { personalInfo } from "@/data/personal";

// Info kontak yang tampil di kartu kiri
const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-purple-400",
    bg: "bg-purple-500/20",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.whatsapp}`,
    color: "text-green-400",
    bg: "bg-green-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Daud Sipata",
    href: personalInfo.linkedin,
    color: "text-blue-400",
    bg: "bg-blue-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@daudsipataportofolio",
    href: personalInfo.github,
    color: "text-white",
    bg: "bg-white/10",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: personalInfo.location,
    href: "#",
    color: "text-orange-400",
    bg: "bg-orange-500/20",
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", subject: "", message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi kirim (0.8 detik), lalu buka mailto
    await new Promise((r) => setTimeout(r, 800));

    const subject = encodeURIComponent(form.subject || "Pesan dari Portfolio");
    const body = encodeURIComponent(
      `Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form setelah 4 detik
    setTimeout(() => {
      setIsSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const isFormValid = form.name && form.email && form.message;

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      <FloatingBackground variant="mixed" />

      <div className="relative z-10">
        <SectionHeading
          number="07"
          title="Hubungi Saya"
          subtitle="Ada project menarik? Atau sekadar ingin ngobrol? Jangan ragu untuk menghubungi saya."
          centered
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ====== KIRI: Info kontak ====== */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <GlowCard className="p-6" glowColor="purple">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <MessageSquare size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Ayo Terhubung!</h3>
                    <p className="text-sm text-white/50">Respon dalam 24 jam</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {contactItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                        <item.icon size={18} className={item.color} />
                      </div>
                      <div>
                        <p className="text-xs text-white/40">{item.label}</p>
                        <p className="text-sm text-white/80 group-hover:text-white transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </GlowCard>

              {/* Availability card */}
              <GlowCard className="p-5" glowColor="blue">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">Tersedia untuk Kerja Sama</p>
                    <p className="text-white/50 text-xs">
                      Open to full-time, freelance, dan remote work
                    </p>
                  </div>
                </div>
              </GlowCard>
            </div>
          </ScrollReveal>

          {/* ====== KANAN: Form ====== */}
          <ScrollReveal direction="right">
            <GlowCard className="p-6" glowColor="blue">
              {isSubmitted ? (
                // Tampilan sukses
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Pesan Terkirim!</h3>
                  <p className="text-white/60 text-sm max-w-xs">
                    Terima kasih sudah menghubungi saya. Saya akan segera membalas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-bold text-white mb-5">Kirim Pesan</h3>

                  {/* Nama + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/50 mb-1.5 block">
                        Nama *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Nama kamu"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/50 mb-1.5 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="email@kamu.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-purple-500/60 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block">
                      Subjek
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Tentang apa?"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-purple-500/60 transition-all"
                    />
                  </div>

                  {/* Pesan */}
                  <div>
                    <label className="text-xs text-white/50 mb-1.5 block">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tulis pesanmu di sini..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-purple-500/60 transition-all resize-none"
                    />
                  </div>

                  {/* Tombol kirim */}
                  <AnimatedButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    disabled={!isFormValid || isLoading}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Kirim Pesan
                      </>
                    )}
                  </AnimatedButton>
                </form>
              )}
            </GlowCard>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
