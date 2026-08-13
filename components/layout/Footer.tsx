"use client";

// ============================================================
// FOOTER
// Berisi: social links, copyright, tombol back-to-top.
// ============================================================

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUp, Heart } from "lucide-react";
import { personalInfo } from "@/data/personal";

const socialLinks = [
  { icon: Github,    href: personalInfo.github,    label: "GitHub" },
  { icon: Linkedin,  href: personalInfo.linkedin,  label: "LinkedIn" },
  { icon: Instagram, href: personalInfo.instagram, label: "Instagram" },
  { icon: Mail,      href: `mailto:${personalInfo.email}`, label: "Email" },
];

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "Tentang",    href: "#about" },
  { label: "Skill",      href: "#skills" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Project",    href: "#projects" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Pendidikan", href: "#education" },
  { label: "Kontak",     href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
      />

      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
              >
                DS
              </div>
              <span className="font-bold text-white text-lg">Daud Sipata</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-4">
              Software Engineer, AI Engineer, dan Web Developer yang passionate
              membangun produk digital yang berdampak.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500/40 transition-colors"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors hover-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              &nbsp;
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors hover-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Daud Imanuel Sipata
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors glass border border-white/10 rounded-xl px-4 py-2 hover:border-purple-500/40"
          >
            <ArrowUp size={14} />
            Kembali ke Atas
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
