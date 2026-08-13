// ============================================================
// DATA PERSONAL
// File ini berisi semua informasi pribadi yang tampil di
// berbagai section (Hero, About, Contact, Footer, SEO).
// Ubah file ini untuk update info pribadimu.
// ============================================================

export const personalInfo = {
  // === IDENTITAS DASAR ===
  name: "Daud Imanuel Sipata",
  nickname: "Daud",
  title: "Software Engineer",               // Judul utama di Hero
  roles: [                                   // Untuk animasi typing di Hero
    "Software Engineer",
    "AI Engineer",
    "Web Developer",
    "Full Stack Developer",
  ],
  degree: "S.Kom Informatika",
  university: "Universitas Mercu Buana Yogyakarta",
  graduationYear: "2025",
  location: "Yogyakarta, Indonesia",
  availability: "Open to work",             // Status ketersediaan

  // === FOTO PROFIL ===
  // Simpan foto di /public/images/profile.jpg lalu ubah path di bawah
  profileImage: "/images/profile.jpg",

  // === ABOUT ME ===
  bio: `Saya adalah Fresh Graduate Teknik Informatika Universitas Mercu Buana Yogyakarta yang memiliki minat dalam pengembangan perangkat lunak, Artificial Intelligence, dan Web Development. Selama perkuliahan saya mengembangkan berbagai proyek berbasis web menggunakan React, Next.js, Node.js, serta mempelajari implementasi AI melalui Langflow dan Google Gemini API. Saya terbiasa bekerja secara mandiri maupun dalam tim, memiliki kemampuan belajar yang cepat, serta senang mempelajari teknologi baru untuk menghasilkan solusi yang bermanfaat.`,

  aboutDescription: [
    "Saya adalah fresh graduate Teknik Informatika yang telah terjun ke dunia pengembangan software sejak tahun pertama kuliah. Dengan kombinasi skill frontend, backend, dan AI, saya mampu membangun solusi end-to-end yang lengkap.",
    "Pengalaman saya mencakup pengembangan web modern menggunakan React dan Next.js, membangun API yang robust dengan Node.js, hingga mengimplementasikan model machine learning untuk solusi bisnis nyata.",
  ],

  // === MINAT ===
  interests: [
    "🤖 Artificial Intelligence & Machine Learning",
    "🌐 Web Development",
    "☁️ Cloud Computing",
    "📊 Data Science",
    "🎨 UI/UX Design",
    "📖 Baca Buku Teknologi",
  ],

  // === TUJUAN KARIER ===
  careerGoal:
    "Menjadi Software Engineer yang mampu membangun aplikasi modern, scalable, dan memberikan dampak nyata bagi pengguna. Saya ingin mengembangkan keahlian di bidang Full Stack Development dan Artificial Intelligence, serta terus belajar mengikuti perkembangan teknologi agar dapat berkontribusi dalam pengembangan produk digital yang inovatif.",

  // === STATISTIK RINGKASAN ===
  stats: [
    { label: "Semangat Belajar", value: "100%" },
    { label: "Project Selesai", value: "5+" },
    { label: "Teknologi Dikuasai", value: "10+" },
    { label: "Sertifikat", value: "6+" },
  ],

  // === KONTAK ===
  email: "daud.sipata12345@email.com",
  phone: "+62 812-4524-8781",
  whatsapp: "6281245248781",  // Format tanpa + dan spasi
  linkedin: "https://id.linkedin.com/in/daud-sipata-5054a641a",
  github: "https://github.com/bangdaud",
  instagram: "https://instagram.com/d.imanuelsipata",

  // === CV ===
  // Simpan file CV di /public/cv/Daud_Sipata_CV.pdf
  cvUrl: "/cv/Daud_Sipata_CV.pdf",

  // === SEO META ===
  siteUrl: "https://daudsipataportofolio.vercel.app",
  metaDescription:
    "Portfolio Daud Sipata — Software Engineer, AI Engineer, dan Web Developer. Spesialisasi React, Next.js, Python, dan Machine Learning.",
  keywords: [
    "Daud Sipata",
    "Software Engineer",
    "AI Engineer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Full Stack Developer",
    "Indonesia",
  ],
};
