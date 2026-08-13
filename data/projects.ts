// ============================================================
// DATA PROJECT
// Isi dengan skripsi, tugas akhir, project kampus, jurnal, dll.
//
// Cara tambah project baru: copy satu objek { ... }, paste di
// bawahnya, ubah nilainya. Tidak perlu ubah kode lain.
// ============================================================

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;           // path dari /public, misal "/images/projects/skripsi.png"
  technologies: string[];
  githubUrl: string;       // isi "#" jika tidak ada / private
  liveUrl: string;         // isi "#" jika tidak ada
  featured: boolean;
  category: "skripsi" | "project-kampus" | "jurnal" | "bootcamp" | "web" | "ai" | "other";
  badge?: string;          // label opsional, misal "Tugas Akhir", "Publikasi", dll
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistem Pakar Diagnosa Gangguan Kecemasan Menggunakan Metode Certainty Factor",
    description:
      "Skripsi S1 — Mengembangkan sistem pakar berbasis web untuk diagnosis gangguan kecemasan menggunakan metode Certainty Factor (CF). Sistem mampu mengidentifikasi gangguan berdasarkan gejala yang dipilih pengguna dan menghitung tingkat keyakinan diagnosis. Hasil pengujian menunjukkan tingkat akurasi sebesar 90% dengan 18 dari 20 data uji sesuai dengan diagnosis pakar.",
    image: "/images/projects/skripsi.png",
    technologies: ["Python", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "XAMPP", "Certainty Factor"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    category: "skripsi",
    badge: "Tugas Akhir",
  },
  {
    id: 2,
    title: "AI Legal Contract Risk Checking System Menggunakan Langflow dan Large Language Model (LLM) ",
    description:
      "Mengembangkan aplikasi AI berbasis Langflow dengan memanfaatkan Large Language Model (LLM) untuk mengotomatisasi alur percakapan dan pemrosesan informasi melalui workflow visual. Sistem dirancang agar mudah dikembangkan dan diintegrasikan dengan berbagai layanan AI.",
    image: "/images/projects/HacktivxIBM.png",
    technologies: ["Langflow", "Python", "Large Language Model (LLM)", "Google Gemini API", "JSON"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    category: "project-kampus",
    badge: "Project HacktivxIBM",
  },
  {
    id: 3,
    title: "Sistem Pakar Diagnosa Gangguan Kecemasan Menggunakan Metode Certainty Factor",
    description:
      "Publikasi ilmiah mengenai pengembangan sistem pakar diagnosis gangguan kecemasan berbasis web menggunakan metode Certainty Factor (CF). Hasil penelitian menunjukkan akurasi sistem sebesar 90% dalam proses validasi terhadap diagnosis pakar.",
    image: "/images/projects/Jurnal.png",
    technologies: ["Python", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "XAMPP", "Certainty Factor"],
    githubUrl: "#",
    liveUrl: "https://doi.org/10.58794/jekin.v5i2.1593",
    featured: true,
    category: "jurnal",
    badge: "Publikasi Jurnal",
  },
  {
    id: 4,
    title: "Expense & Budget Visualizer",
    description:
      "Project codingcamp RevoU. Mengembangkan aplikasi web untuk mengelola pengeluaran dan anggaran secara interaktif. Aplikasi memungkinkan pengguna mencatat transaksi, memantau saldo, mengelompokkan pengeluaran berdasarkan kategori, mengatur batas pengeluaran, serta menampilkan visualisasi data menggunakan grafik untuk membantu pengelolaan keuangan secara lebih efektif.",
    image: "/images/projects/RevoU.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Local Storage"],
    githubUrl: "https://github.com/bangdaud/CodingCamp-6July26-daudimanuelsipata",
    liveUrl: "https://bangdaud.github.io/CodingCamp-6July26-daudimanuelsipata/",
    featured: false,
    category: "bootcamp",
    badge: "Codingcamp RevoU",
  },
  {
    id: 5,
    title: "Website Portfolio Pribadi",
    description:
      "Website portofolio yang sedang kamu lihat ini. Dibangun dengan Next.js, Framer Motion, dan Tailwind CSS dengan desain dark mode premium.",
    image: "/images/projects/Portofolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/bangdaud/daudsipataportofolio",
    liveUrl: "https://daudsipata.my.id",
    featured: false,
    category: "web",
    badge: "Personal Project",
  },
];
