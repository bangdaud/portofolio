// ============================================================
// HOME PAGE — Halaman utama
// Merakit semua section dalam urutan yang benar.
// Setiap section punya ID yang cocok dengan link navbar.
// ============================================================

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      {/* Navigasi sticky di atas */}
      <Navbar />

      {/* Konten utama */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>

      {/* Footer di bawah */}
      <Footer />
    </>
  );
}
